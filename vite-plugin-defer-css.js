/**
 * Vite Plugin: Defer Non-Critical CSS
 *
 * Transforma los <link rel="stylesheet"> en el HTML generado para usar
 * el patrón preload + onload, deferiendo la carga de CSS no-crítico.
 *
 * ANTES:
 * <link rel="stylesheet" href="/assets/index-abc123.css">
 *
 * DESPUÉS:
 * <link rel="preload" href="/assets/index-abc123.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
 * <noscript><link rel="stylesheet" href="/assets/index-abc123.css"></noscript>
 *
 * Incluye polyfill para browsers antiguos que no soportan onload en <link>
 */

export default function deferNonCriticalCSS() {
  return {
    name: 'vite-plugin-defer-css',
    enforce: 'post',

    transformIndexHtml(html) {
      // Solo aplicar en build de producción
      if (process.env.NODE_ENV !== 'production') {
        return html
      }

      // Transformar todos los <link rel="stylesheet"> a preload con onload
      let transformed = html.replace(
        /<link\s+rel="stylesheet"\s+href="([^"]+)"\s*\/?>/gi,
        (match, href) => {
          // Generar el patrón preload + onload con polyfill
          return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="${href}"></noscript>`
        }
      )

      // Inyectar polyfill para browsers antiguos (antes de </head>)
      // Este polyfill hace que el patrón funcione en IE11, Edge Legacy, etc.
      const polyfill = `
    <!-- CSS Preload Polyfill (para browsers antiguos) -->
    <script>
      /*! loadCSS rel=preload polyfill. [c]2017 Filament Group, Inc. MIT License */
      !function(n){"use strict";n.loadCSS||(n.loadCSS=function(){});var o=loadCSS.relpreload={};if(o.support=function(){var e;try{e=n.document.createElement("link").relList.supports("preload")}catch(t){e=!1}return function(){return e}}(),o.bindMediaToggle=function(t){var e=t.media||"all";function a(){t.addEventListener?t.removeEventListener("load",a):t.attachEvent&&t.detachEvent("onload",a),t.setAttribute("onload",null),t.media=e}t.addEventListener?t.addEventListener("load",a):t.attachEvent&&t.attachEvent("onload",a),setTimeout(function(){t.rel="stylesheet",t.media="only x"}),setTimeout(a,3e3)},!o.support()){o.poly=function(){if(!n.document.getElementsByTagName)return;for(var t=n.document.getElementsByTagName("link"),e=0;e<t.length;e++){var a=t[e];"preload"!==a.getAttribute("rel")||"style"!==a.getAttribute("as")||a.getAttribute("data-loadcss")||(a.setAttribute("data-loadcss",!0),o.bindMediaToggle(a))}},o.poly();var t=n.setInterval(o.poly,500);n.addEventListener?n.addEventListener("load",function(){o.poly(),n.clearInterval(t)}):n.attachEvent&&n.attachEvent("onload",function(){o.poly(),n.clearInterval(t)})}"undefined"!=typeof exports?exports.loadCSS=loadCSS:n.loadCSS=loadCSS}("undefined"!=typeof global?global:this);
    </script>`

      transformed = transformed.replace('</head>', `${polyfill}\n  </head>`)

      return transformed
    }
  }
}
