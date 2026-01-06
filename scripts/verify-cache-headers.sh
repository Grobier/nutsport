#!/bin/bash
##
# Cache Headers Verification Script
# Verifica que todos los headers de cache estén configurados correctamente en producción
#
# Uso: ./scripts/verify-cache-headers.sh
##

set -e

SITE_URL="https://www.nutsport.cl"
COLORS_RED='\033[0;31m'
COLORS_GREEN='\033[0;32m'
COLORS_YELLOW='\033[1;33m'
COLORS_BLUE='\033[0;34m'
COLORS_RESET='\033[0m'

echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║         Cache Headers Verification - NutSport               ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Function to check header
check_header() {
    local url=$1
    local expected_cache=$2
    local expected_type=$3
    local description=$4

    echo -e "${COLORS_BLUE}Testing:${COLORS_RESET} $description"
    echo "  URL: $url"

    # Get headers
    headers=$(curl -sI "$url" 2>/dev/null)

    if [ $? -ne 0 ]; then
        echo -e "  ${COLORS_RED}✗ Failed to fetch URL${COLORS_RESET}"
        return 1
    fi

    # Check Cache-Control
    cache_control=$(echo "$headers" | grep -i "cache-control:" | cut -d' ' -f2- | tr -d '\r')

    if [[ "$cache_control" == *"$expected_cache"* ]]; then
        echo -e "  ${COLORS_GREEN}✓ Cache-Control:${COLORS_RESET} $cache_control"
    else
        echo -e "  ${COLORS_RED}✗ Cache-Control:${COLORS_RESET} $cache_control"
        echo -e "  ${COLORS_YELLOW}  Expected:${COLORS_RESET} $expected_cache"
    fi

    # Check Content-Type (if provided)
    if [ -n "$expected_type" ]; then
        content_type=$(echo "$headers" | grep -i "content-type:" | cut -d' ' -f2- | tr -d '\r')

        if [[ "$content_type" == *"$expected_type"* ]]; then
            echo -e "  ${COLORS_GREEN}✓ Content-Type:${COLORS_RESET} $content_type"
        else
            echo -e "  ${COLORS_RED}✗ Content-Type:${COLORS_RESET} $content_type"
            echo -e "  ${COLORS_YELLOW}  Expected:${COLORS_RESET} $expected_type"
        fi
    fi

    # Check Security Headers
    x_content_type=$(echo "$headers" | grep -i "x-content-type-options:" | cut -d' ' -f2- | tr -d '\r')
    x_frame=$(echo "$headers" | grep -i "x-frame-options:" | cut -d' ' -f2- | tr -d '\r')

    if [ -n "$x_content_type" ]; then
        echo -e "  ${COLORS_GREEN}✓ X-Content-Type-Options:${COLORS_RESET} $x_content_type"
    fi

    if [ -n "$x_frame" ]; then
        echo -e "  ${COLORS_GREEN}✓ X-Frame-Options:${COLORS_RESET} $x_frame"
    fi

    echo ""
}

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1. HTML (debe NO cachear - max-age=0)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
check_header \
    "$SITE_URL/" \
    "max-age=0" \
    "text/html" \
    "index.html"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "2. JavaScript (debe cachear 1 año con immutable)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Get actual JS filename from HTML
echo "  Obteniendo nombre del bundle JS..."
html=$(curl -s "$SITE_URL/")
js_file=$(echo "$html" | grep -o 'assets/index-[^"]*\.js' | head -1)

if [ -n "$js_file" ]; then
    check_header \
        "$SITE_URL/$js_file" \
        "max-age=31536000, immutable" \
        "application/javascript" \
        "Main JS bundle"
else
    echo -e "  ${COLORS_RED}✗ No se pudo encontrar el archivo JS en el HTML${COLORS_RESET}"
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "3. CSS (debe cachear 1 año con immutable)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Get actual CSS filename from HTML
echo "  Obteniendo nombre del bundle CSS..."
css_file=$(echo "$html" | grep -o 'assets/index-[^"]*\.css' | head -1)

if [ -n "$css_file" ]; then
    check_header \
        "$SITE_URL/$css_file" \
        "max-age=31536000, immutable" \
        "text/css" \
        "Main CSS bundle"
else
    echo -e "  ${COLORS_RED}✗ No se pudo encontrar el archivo CSS en el HTML${COLORS_RESET}"
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "4. Imágenes (debe cachear 1 año con immutable)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
check_header \
    "$SITE_URL/images/logos/Nutsport-logo-h.png" \
    "max-age=31536000, immutable" \
    "image/png" \
    "Logo PNG"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "5. Fuentes (debe cachear 1 año con immutable + CORS)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
check_header \
    "$SITE_URL/fonts/grift/GriftGeometric-Variable.woff2" \
    "max-age=31536000, immutable" \
    "font/woff2" \
    "Font WOFF2"

# Check CORS header
echo -e "${COLORS_BLUE}Verificando CORS:${COLORS_RESET}"
cors_header=$(curl -sI "$SITE_URL/fonts/grift/GriftGeometric-Variable.woff2" | grep -i "access-control-allow-origin:" | cut -d' ' -f2- | tr -d '\r')
if [[ "$cors_header" == "*" ]]; then
    echo -e "  ${COLORS_GREEN}✓ Access-Control-Allow-Origin:${COLORS_RESET} $cors_header"
else
    echo -e "  ${COLORS_YELLOW}⚠ Access-Control-Allow-Origin:${COLORS_RESET} $cors_header (esperado: *)"
fi
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "6. Sitemap y Robots (debe cachear 24 horas)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
check_header \
    "$SITE_URL/sitemap.xml" \
    "max-age=86400" \
    "application/xml" \
    "Sitemap"

check_header \
    "$SITE_URL/robots.txt" \
    "max-age=86400" \
    "text/plain" \
    "Robots.txt"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "7. Security Headers Globales"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

echo -e "${COLORS_BLUE}Verificando security headers en index.html:${COLORS_RESET}"
headers=$(curl -sI "$SITE_URL/")

security_headers=(
    "x-content-type-options:nosniff"
    "x-frame-options:SAMEORIGIN"
    "referrer-policy:strict-origin-when-cross-origin"
    "permissions-policy:"
)

for header in "${security_headers[@]}"; do
    header_name=$(echo "$header" | cut -d':' -f1)
    expected_value=$(echo "$header" | cut -d':' -f2-)

    actual_value=$(echo "$headers" | grep -i "$header_name:" | cut -d' ' -f2- | tr -d '\r')

    if [ -n "$actual_value" ]; then
        if [ -z "$expected_value" ] || [[ "$actual_value" == *"$expected_value"* ]]; then
            echo -e "  ${COLORS_GREEN}✓ $header_name:${COLORS_RESET} $actual_value"
        else
            echo -e "  ${COLORS_YELLOW}⚠ $header_name:${COLORS_RESET} $actual_value"
            echo -e "    ${COLORS_YELLOW}Expected:${COLORS_RESET} $expected_value"
        fi
    else
        echo -e "  ${COLORS_RED}✗ $header_name:${COLORS_RESET} NOT FOUND"
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Verificación Completada"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Para más detalles, visita:"
echo "  - https://securityheaders.com/?q=$SITE_URL"
echo "  - https://redbot.org/?uri=$SITE_URL"
echo ""
