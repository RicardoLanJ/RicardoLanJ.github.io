! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = { exports: {}, id: i, loaded: !1 };
        return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports }
    var n = {};
    return t.m = e, t.c = n, t.p = "/source/", t(0) }([function(e, t, n) { n(33);
    var i = n(35),
        o = n(30),
        r = n(36),
        a = n(31),
        s = n(32),
        l = n(34),
        u = n(37);
    $(function() { u.init(), o.init(), s.init(), i.init(), a.versions.mobile === !0 || $(window).width() < 700 ? l.init() : (r.init(), $(".js-smart-menu").click(function(e) { e.stopPropagation(), r.show($(this).data("idx")) }), $(".left-col,.mid-col").click(function() { r.hide() })) }) }, , function(e, t) { e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1]) }
            return e.join("") }, e.i = function(t, n) { "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0]; "number" == typeof r && (i[r] = !0) }
            for (o = 0; o < t.length; o++) {
                var a = t[o]; "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a)) } }, e } }, function(e, t, n) {
    function i(e, t) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n],
                o = f[i.id];
            if (o) { o.refs++;
                for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                for (; r < i.parts.length; r++) o.parts.push(u(i.parts[r], t)) } else {
                for (var a = [], r = 0; r < i.parts.length; r++) a.push(u(i.parts[r], t));
                f[i.id] = { id: i.id, refs: 1, parts: a } } } }

    function o(e) {
        for (var t = [], n = {}, i = 0; i < e.length; i++) {
            var o = e[i],
                r = o[0],
                a = o[1],
                s = o[2],
                l = o[3],
                u = { css: a, media: s, sourceMap: l };
            n[r] ? n[r].parts.push(u) : t.push(n[r] = { id: r, parts: [u] }) }
        return t }

    function r(e, t) {
        var n = g(),
            i = b[b.length - 1];
        if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), b.push(t);
        else {
            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t) } }

    function a(e) { e.parentNode.removeChild(e);
        var t = b.indexOf(e);
        t >= 0 && b.splice(t, 1) }

    function s(e) {
        var t = document.createElement("style");
        return t.type = "text/css", r(e, t), t }

    function l(e) {
        var t = document.createElement("link");
        return t.rel = "stylesheet", r(e, t), t }

    function u(e, t) {
        var n, i, o;
        if (t.singleton) {
            var r = y++;
            n = v || (v = s(t)), i = c.bind(null, n, r, !1), o = c.bind(null, n, r, !0) } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), i = d.bind(null, n), o = function() { a(n), n.href && URL.revokeObjectURL(n.href) }) : (n = s(t), i = p.bind(null, n), o = function() { a(n) });
        return i(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    i(e = t) } else o() } }

    function c(e, t, n, i) {
        var o = n ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = w(t, o);
        else {
            var r = document.createTextNode(o),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r) } }

    function p(e, t) {
        var n = t.css,
            i = t.media;
        if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n)) } }

    function d(e, t) {
        var n = t.css,
            i = t.sourceMap;
        i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var o = new Blob([n], { type: "text/css" }),
            r = e.href;
        e.href = URL.createObjectURL(o), r && URL.revokeObjectURL(r) }
    var f = {},
        h = function(e) {
            var t;
            return function() {
                return "undefined" == typeof t && (t = e.apply(this, arguments)), t } },
        m = h(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase()) }),
        g = h(function() {
            return document.head || document.getElementsByTagName("head")[0] }),
        v = null,
        y = 0,
        b = [];
    e.exports = function(e, t) { t = t || {}, "undefined" == typeof t.singleton && (t.singleton = m()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
        var n = o(e);
        return i(n, t),
            function(e) {
                for (var r = [], a = 0; a < n.length; a++) {
                    var s = n[a],
                        l = f[s.id];
                    l.refs--, r.push(l) }
                if (e) {
                    var u = o(e);
                    i(u, t) }
                for (var a = 0; a < r.length; a++) {
                    var l = r[a];
                    if (0 === l.refs) {
                        for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                        delete f[l.id] } } } };
    var w = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n, e.filter(Boolean).join("\n") } }() }, , , function(e, t) {
    (function(t) { e.exports = t }).call(t, {}) }, function(e, t) {
    var n = function() {
        function e(e, t, n) {
            return t || n ? String.fromCharCode(t || n) : r[e] || e }

        function t(e) {
            return c[e] }
        var i = /&quot;|&lt;|&gt;|&amp;|&nbsp;|&apos;|&#(\d+);|&#(\d+)/g,
            o = /['<> "&]/g,
            r = { "&quot;": '"', "&lt;": "<", "&gt;": ">", "&amp;": "&", "&nbsp;": " " },
            a = /\u00a0/g,
            s = /<br\s*\/?>/gi,
            l = /\r?\n/g,
            u = /\s/g,
            c = {};
        for (var p in r) c[r[p]] = p;
        return r["&apos;"] = "'", c["'"] = "&#39;", { encode: function(e) {
                return e ? ("" + e).replace(o, t).replace(l, "<br/>").replace(u, "&nbsp;") : "" }, decode: function(t) {
                return t ? ("" + t).replace(s, "\n").replace(i, e).replace(a, " ") : "" }, encodeBase16: function(e) {
                if (!e) return e;
                e += "";
                for (var t = [], n = 0, i = e.length; i > n; n++) t.push(e.charCodeAt(n).toString(16).toUpperCase());
                return t.join("") }, encodeBase16forJSON: function(e) {
                if (!e) return e;
                e = e.replace(/[\u4E00-\u9FBF]/gi, function(e) {
                    return escape(e).replace("%u", "\\u") });
                for (var t = [], n = 0, i = e.length; i > n; n++) t.push(e.charCodeAt(n).toString(16).toUpperCase());
                return t.join("") }, decodeBase16: function(e) {
                if (!e) return e;
                e += "";
                for (var t = [], n = 0, i = e.length; i > n; n += 2) t.push(String.fromCharCode("0x" + e.slice(n, n + 2)));
                return t.join("") }, encodeObject: function(e) {
                if (e instanceof Array)
                    for (var t = 0, i = e.length; i > t; t++) e[t] = n.encodeObject(e[t]);
                else if ("object" == typeof e)
                    for (var o in e) e[o] = n.encodeObject(e[o]);
                else if ("string" == typeof e) return n.encode(e);
                return e } } }();
    e.exports = n }, , function(e, t, n) { t = e.exports = n(2)(), t.push([e.id, "/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */.pswp__button{width:44px;height:44px;position:relative;background:none;cursor:pointer;overflow:visible;-webkit-appearance:none;display:block;border:0;padding:0;margin:0;float:right;opacity:.75;-webkit-transition:opacity .2s;transition:opacity .2s;box-shadow:none}.pswp__button:focus,.pswp__button:hover{opacity:1}.pswp__button:active{outline:none;opacity:.9}.pswp__button::-moz-focus-inner{padding:0;border:0}.pswp__ui--over-close .pswp__button--close{opacity:1}.pswp__button,.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{background:url(" + n(27) + ") 0 0 no-repeat;background-size:264px 88px;width:44px;height:44px}@media (-webkit-min-device-pixel-ratio:1.1),(-webkit-min-device-pixel-ratio:1.09375),(min-resolution:1.1dppx),(min-resolution:105dpi){.pswp--svg .pswp__button,.pswp--svg .pswp__button--arrow--left:before,.pswp--svg .pswp__button--arrow--right:before{background-image:url(" + n(28) + ")}.pswp--svg .pswp__button--arrow--left,.pswp--svg .pswp__button--arrow--right{background:none}}.pswp__button--close{background-position:0 -44px}.pswp__button--share{background-position:-44px -44px}.pswp__button--fs{display:none}.pswp--supports-fs .pswp__button--fs{display:block}.pswp--fs .pswp__button--fs{background-position:-44px 0}.pswp__button--zoom{display:none;background-position:-88px 0}.pswp--zoom-allowed .pswp__button--zoom{display:block}.pswp--zoomed-in .pswp__button--zoom{background-position:-132px 0}.pswp--touch .pswp__button--arrow--left,.pswp--touch .pswp__button--arrow--right{visibility:hidden}.pswp__button--arrow--left,.pswp__button--arrow--right{background:none;top:50%;margin-top:-50px;width:70px;height:100px;position:absolute}.pswp__button--arrow--left{left:0}.pswp__button--arrow--right{right:0}.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{content:'';top:35px;background-color:rgba(0,0,0,.3);height:30px;width:32px;position:absolute}.pswp__button--arrow--left:before{left:6px;background-position:-138px -44px}.pswp__button--arrow--right:before{right:6px;background-position:-94px -44px}.pswp__counter,.pswp__share-modal{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pswp__share-modal{display:block;background:rgba(0,0,0,.5);width:100%;height:100%;top:0;left:0;padding:10px;position:absolute;z-index:1600;opacity:0;-webkit-transition:opacity .25s ease-out;transition:opacity .25s ease-out;-webkit-backface-visibility:hidden;will-change:opacity}.pswp__share-modal--hidden{display:none}.pswp__share-tooltip{z-index:1620;position:absolute;background:#fff;top:56px;border-radius:2px;display:block;width:auto;right:44px;box-shadow:0 2px 5px rgba(0,0,0,.25);-webkit-transform:translateY(6px);transform:translateY(6px);-webkit-transition:-webkit-transform .25s;transition:transform .25s;-webkit-backface-visibility:hidden;will-change:transform}.pswp__share-tooltip a{display:block;padding:8px 12px;font-size:14px;line-height:18px}.pswp__share-tooltip a,.pswp__share-tooltip a:hover{color:#000;text-decoration:none}.pswp__share-tooltip a:first-child{border-radius:2px 2px 0 0}.pswp__share-tooltip a:last-child{border-radius:0 0 2px 2px}.pswp__share-modal--fade-in{opacity:1}.pswp__share-modal--fade-in .pswp__share-tooltip{-webkit-transform:translateY(0);transform:translateY(0)}.pswp--touch .pswp__share-tooltip a{padding:16px 12px}a.pswp__share--facebook:before{content:'';display:block;width:0;height:0;position:absolute;top:-12px;right:15px;border:6px solid transparent;border-bottom-color:#fff;-webkit-pointer-events:none;-moz-pointer-events:none;pointer-events:none}a.pswp__share--facebook:hover{background:#3e5c9a;color:#fff}a.pswp__share--facebook:hover:before{border-bottom-color:#3e5c9a}a.pswp__share--twitter:hover{background:#55acee;color:#fff}a.pswp__share--pinterest:hover{background:#ccc;color:#ce272d}a.pswp__share--download:hover{background:#ddd}.pswp__counter{position:absolute;left:0;top:0;height:44px;font-size:13px;line-height:44px;color:#fff;opacity:.75;padding:0 10px}.pswp__caption{position:absolute;left:0;bottom:0;width:100%;min-height:44px}.pswp__caption small{font-size:11px;color:#bbb}.pswp__caption__center{text-align:left;max-width:420px;margin:0 auto;font-size:13px;padding:10px;line-height:20px;color:#ccc}.pswp__caption--empty{display:none}.pswp__caption--fake{visibility:hidden}.pswp__preloader{width:44px;height:44px;position:absolute;top:0;left:50%;margin-left:-22px;opacity:0;-webkit-transition:opacity .25s ease-out;transition:opacity .25s ease-out;will-change:opacity;direction:ltr}.pswp__preloader__icn{width:20px;height:20px;margin:12px}.pswp__preloader--active{opacity:1}.pswp__preloader--active .pswp__preloader__icn{background:url(" + n(29) + ") 0 0 no-repeat}.pswp--css_animation .pswp__preloader--active{opacity:1}.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn{-webkit-animation:clockwise .5s linear infinite;animation:clockwise .5s linear infinite}.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut{-webkit-animation:donut-rotate 1s cubic-bezier(.4,0,.22,1) infinite;animation:donut-rotate 1s cubic-bezier(.4,0,.22,1) infinite}.pswp--css_animation .pswp__preloader__icn{background:none;opacity:.75;width:14px;height:14px;position:absolute;left:15px;top:15px;margin:0}.pswp--css_animation .pswp__preloader__cut{position:relative;width:7px;height:14px;overflow:hidden}.pswp--css_animation .pswp__preloader__donut{box-sizing:border-box;width:14px;height:14px;border:2px solid #fff;border-radius:50%;border-left-color:transparent;border-bottom-color:transparent;position:absolute;top:0;left:0;background:none;margin:0}@media screen and (max-width:1024px){.pswp__preloader{position:relative;left:auto;top:auto;margin:0;float:right}}@-webkit-keyframes clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes donut-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(-140deg);transform:rotate(-140deg)}to{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes donut-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(-140deg);transform:rotate(-140deg)}to{-webkit-transform:rotate(0);transform:rotate(0)}}.pswp__ui{-webkit-font-smoothing:auto;visibility:visible;opacity:1;z-index:1550}.pswp__top-bar{position:absolute;left:0;top:0;height:44px;width:100%}.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right,.pswp__caption,.pswp__top-bar{-webkit-backface-visibility:hidden;will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right{visibility:visible}.pswp__caption,.pswp__top-bar{background-color:rgba(0,0,0,.5)}.pswp__ui--fit .pswp__caption,.pswp__ui--fit .pswp__top-bar{background-color:rgba(0,0,0,.3)}.pswp__ui--idle .pswp__button--arrow--left,.pswp__ui--idle .pswp__button--arrow--right,.pswp__ui--idle .pswp__top-bar{opacity:0}.pswp__ui--hidden .pswp__button--arrow--left,.pswp__ui--hidden .pswp__button--arrow--right,.pswp__ui--hidden .pswp__caption,.pswp__ui--hidden .pswp__top-bar{opacity:.001}.pswp__ui--one-slide .pswp__button--arrow--left,.pswp__ui--one-slide .pswp__button--arrow--right,.pswp__ui--one-slide .pswp__counter{display:none}.pswp__element--disabled{display:none!important}.pswp--minimal--dark .pswp__top-bar{background:none}", ""]) }, function(e, t, n) { t = e.exports = n(2)(), t.push([e.id, "/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */.pswp{display:none;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;-ms-touch-action:none;touch-action:none;z-index:1500;-webkit-text-size-adjust:100%;-webkit-backface-visibility:hidden;outline:none}.pswp *{box-sizing:border-box}.pswp img{max-width:none}.pswp--animate_opacity{opacity:.001;will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--open{display:block}.pswp--zoom-allowed .pswp__img{cursor:zoom-in}.pswp--zoomed-in .pswp__img{cursor:-webkit-grab;cursor:grab}.pswp--dragging .pswp__img{cursor:-webkit-grabbing;cursor:grabbing}.pswp__bg{background:#000;opacity:0;transform:translateZ(0);-webkit-backface-visibility:hidden;will-change:opacity}.pswp__bg,.pswp__scroll-wrap{position:absolute;left:0;top:0;width:100%;height:100%}.pswp__scroll-wrap{overflow:hidden}.pswp__container,.pswp__zoom-wrap{-ms-touch-action:none;touch-action:none;position:absolute;left:0;right:0;top:0;bottom:0}.pswp__container,.pswp__img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.pswp__zoom-wrap{position:absolute;width:100%;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 333ms cubic-bezier(.4,0,.22,1);transition:transform 333ms cubic-bezier(.4,0,.22,1)}.pswp__bg{will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--animated-in .pswp__bg,.pswp--animated-in .pswp__zoom-wrap{-webkit-transition:none;transition:none}.pswp__container,.pswp__zoom-wrap{-webkit-backface-visibility:hidden}.pswp__item{right:0;bottom:0;overflow:hidden}.pswp__img,.pswp__item{position:absolute;left:0;top:0}.pswp__img{width:auto;height:auto}.pswp__img--placeholder{-webkit-backface-visibility:hidden}.pswp__img--placeholder--blank{background:#222}.pswp--ie .pswp__img{width:100%!important;height:auto!important;left:0;top:0}.pswp__error-msg{position:absolute;left:0;top:50%;width:100%;text-align:center;font-size:14px;line-height:16px;margin-top:-8px;color:#ccc}.pswp__error-msg a{color:#ccc;text-decoration:underline}", ""]) }, , function(e, t, n) {
    var i = n(9); "string" == typeof i && (i = [
        [e.id, i, ""]
    ]);
    n(3)(i, {});
    i.locals && (e.exports = i.locals) }, function(e, t, n) {
    var i = n(10); "string" == typeof i && (i = [
        [e.id, i, ""]
    ]);
    n(3)(i, {});
    i.locals && (e.exports = i.locals) }, , , , , , , , , , , , , , function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAABYCAQAAACjBqE3AAAB6klEQVR4Ae3bsWpUQRTG8YkkanwCa7GzVotsI/gEgk9h4Vu4ySLYmMYgbJrc3lrwZbJwC0FMt4j7F6Y4oIZrsXtgxvx/1c0ufEX4cnbmLCmSJEmSJEmSJEmSJP3XCBPvbJU+8doWmDFwyZpLBmYlNJebz0KwzykwsuSYJSNwykEJreV2BaBMaLIQZ2xYcFgqDlmw4ayE/FwL0dDk4Qh4W37DAjgqIT+3HRbigjH+iikVdxgZStgyN0Su2sXIeTwTT+esdpcbIlfNAuZ/TxresG4zV8kYWSZNiKUTokMMSWeIwTNEn4fK2TW3gRNgVkJLuVksROA9G+bEvoATNlBCa7nZXEwdxEZxzpKRKFh+bsv8LmPFmhX1OwfIz81jIRJQ5eeqG9B+riRJkiRJkiRJkiRJkiRJkiRJUkvA/8RQoEpKlJWINFkJ62AlrEP/mNBibnv2yz/A3t7Uq3LcpoxP8COjC1T5vxoAD5VdoEqdDrd5QuW1swtUSaueh3zkiuBiqgtA2OlkeMcP/uDqugsJdbjHF65VdPMKwS0+WQc/MgKvrIOHysB9vgPwk8+85hmPbnQdvHZyDMAFD7L3EOpgMcVdvnHFS0/vlatrXvCVx0U9gt3fxvnA0/hB4nmRJEmSJEmSJEmSJGmHfgFLaDPoMu5xWwAAAABJRU5ErkJggg==" }, function(e, t) { e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY0IiBoZWlnaHQ9Ijg4IiB2aWV3Qm94PSIwIDAgMjY0IDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5kZWZhdWx0LXNraW4gMjwvdGl0bGU+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Zz48cGF0aCBkPSJNNjcuMDAyIDU5LjV2My43NjhjLTYuMzA3Ljg0LTkuMTg0IDUuNzUtMTAuMDAyIDkuNzMyIDIuMjItMi44MyA1LjU2NC01LjA5OCAxMC4wMDItNS4wOThWNzEuNUw3MyA2NS41ODUgNjcuMDAyIDU5LjV6IiBpZD0iU2hhcGUiIGZpbGw9IiNmZmYiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTMgMjl2LTVoMnYzaDN2MmgtNXpNMTMgMTVoNXYyaC0zdjNoLTJ2LTV6TTMxIDE1djVoLTJ2LTNoLTN2LTJoNXpNMzEgMjloLTV2LTJoM3YtM2gydjV6IiBpZD0iU2hhcGUiLz48L2c+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTYyIDI0djVoLTJ2LTNoLTN2LTJoNXpNNjIgMjBoLTV2LTJoM3YtM2gydjV6TTcwIDIwdi01aDJ2M2gzdjJoLTV6TTcwIDI0aDV2MmgtM3YzaC0ydi01eiIvPjwvZz48cGF0aCBkPSJNMjAuNTg2IDY2bC01LjY1Ni01LjY1NiAxLjQxNC0xLjQxNEwyMiA2NC41ODZsNS42NTYtNS42NTYgMS40MTQgMS40MTRMMjMuNDE0IDY2bDUuNjU2IDUuNjU2LTEuNDE0IDEuNDE0TDIyIDY3LjQxNGwtNS42NTYgNS42NTYtMS40MTQtMS40MTRMMjAuNTg2IDY2eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMTEuNzg1IDY1LjAzTDExMCA2My41bDMtMy41aC0xMHYtMmgxMGwtMy0zLjUgMS43ODUtMS40NjhMMTE3IDU5bC01LjIxNSA2LjAzeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNTIuMjE1IDY1LjAzTDE1NCA2My41bC0zLTMuNWgxMHYtMmgtMTBsMy0zLjUtMS43ODUtMS40NjhMMTQ3IDU5bDUuMjE1IDYuMDN6IiBmaWxsPSIjZmZmIi8+PGc+PHBhdGggaWQ9IlJlY3RhbmdsZS0xMSIgZmlsbD0iI2ZmZiIgZD0iTTE2MC45NTcgMjguNTQzbC0zLjI1LTMuMjUtMS40MTMgMS40MTQgMy4yNSAzLjI1eiIvPjxwYXRoIGQ9Ik0xNTIuNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIGlkPSJPdmFsLTEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUwIDIxaDV2MWgtNXoiLz48L2c+PGc+PHBhdGggZD0iTTExNi45NTcgMjguNTQzbC0xLjQxNCAxLjQxNC0zLjI1LTMuMjUgMS40MTQtMS40MTQgMy4yNSAzLjI1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMDguNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA2IDIxaDV2MWgtNXoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA5LjA0MyAxOS4wMDhsLS4wODUgNS0xLS4wMTcuMDg1LTV6Ii8+PC9nPjwvZz48L2c+PC9zdmc+" }, function(e, t) { e.exports = "data:image/gif;base64,R0lGODlhFAAUAPMIAIeHhz8/P1dXVycnJ8/Pz7e3t5+fn29vb////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAIACwAAAAAFAAUAEAEUxDJSatFxtwaggWAdIyHJAhXoRYSQUhDPGx0TbmujahbXGWZWqdDAYEsp5NupLPkdDwE7oXwWVasimzWrAE1tKFHErQRK8eL8mMUlRBJVI307uoiACH5BAUHAAgALAEAAQASABIAAAROEMkpS6E4W5upMdUmEQT2feFIltMJYivbvhnZ3R0A4NMwIDodz+cL7nDEn5CH8DGZh8MtEMBEoxkqlXKVIgQCibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpjaE4W5spANUmFQX2feFIltMJYivbvhnZ3d1x4BNBIDodz+cL7nDEn5CH8DGZAsFtMMBEoxkqlXKVIgIBibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpAaA4W5vpOdUmGQb2feFIltMJYivbvhnZ3Z0g4FNRIDodz+cL7nDEn5CH8DGZgcCNQMBEoxkqlXKVIgYDibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpz6E4W5upENUmAQD2feFIltMJYivbvhnZ3V0Q4JNhIDodz+cL7nDEn5CH8DGZg8GtUMBEoxkqlXKVIggEibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkphaA4W5tpCNUmHQf2feFIltMJYivbvhnZ3d0w4BMAIDodz+cL7nDEn5CH8DGZBMLNYMBEoxkqlXKVIgoFibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpQ6A4W5vpGNUmCQL2feFIltMJYivbvhnZ3R1B4NNxIDodz+cL7nDEn5CH8DGZhcINAMBEoxkqlXKVIgwGibbK9YLBYvLtHH5K0J0IACH5BAUHAAcALAEAAQASABIAAANCeLo6wzA6FxkhbaoQ4L3ZxnXLh0EjWZ4RV71VUcCLIByyTNt2PsO8m452sBGJBsNxkUwuD03lAQBASqnUJ7aq5UYSADs=" }, function(e, t) {
    function n() {
        var e = "js-archives-frame";
        if (top !== window) $("body").addClass("archive-inner"), $(".archive-article-title").click(function() {
            var e = $(this).attr("href");
            return top.location.href = e, !1 }), $(".page-number").click(function() { $(top.document).find("." + e).hide() }), $(".archive-article-date").attr("href", "javascript:void(0);");
        else if (!/\/archives\/(.*)/.test(window.location.pathname)) {
            var t = $('<iframe class="' + e + '"></iframe>').attr("src", "https://ricardolanj.github.io/archives");
            $(".tools-section-all").append(t), t[0].onload = function() {
                var e = setInterval(function() {
                    var n = $($(".js-archives-frame")[0].contentWindow.document).find(".archive-inner");
                    n.length && (t.show(), clearTimeout(e)) }, 50) } } }
    e.exports = { init: n } }, function(e, t) {
    var n = { versions: function() {
            var e = window.navigator.userAgent;
            return { trident: e.indexOf("Trident") > -1, presto: e.indexOf("Presto") > -1, webKit: e.indexOf("AppleWebKit") > -1, gecko: e.indexOf("Gecko") > -1 && e.indexOf("KHTML") == -1, mobile: !!e.match(/AppleWebKit.*Mobile.*/), ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1, iPhone: e.indexOf("iPhone") > -1 || e.indexOf("Mac") > -1, iPad: e.indexOf("iPad") > -1, webApp: e.indexOf("Safari") == -1, weixin: e.indexOf("MicroMessenger") == -1 } }() };
    e.exports = n }, function(e, t) {
    function n() {
        var e = $("#page-nav");
        e.find(".extend.prev").length || e.prepend('<a class="extend prev disabled" rel="prev">&laquo; Prev</a>'), e.find(".extend.next").length || e.append('<a class="extend next disabled" rel="next">Next &raquo;</a>') }
    e.exports = { init: n } }, function(e, t, n) {
    var i, o;
    /*!
     * jQuery JavaScript Library v1.9.0
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2013-1-14
     */
    ! function(r, a) {
        "use strict";

        function s(e) {
            var t = e.length,
                n = de.type(e);
            return !de.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e))) }

        function l(e) {
            var t = ke[e] = {};
            return de.each(e.match(he) || [], function(e, n) { t[n] = !0 }), t }

        function u(e, t, n, i) {
            if (de.acceptData(e)) {
                var o, r, s = de.expando,
                    l = "string" == typeof t,
                    u = e.nodeType,
                    c = u ? de.cache : e,
                    p = u ? e[s] : e[s] && s;
                if (p && c[p] && (i || c[p].data) || !l || n !== a) return p || (u ? e[s] = p = ie.pop() || de.guid++ : p = s), c[p] || (c[p] = {}, u || (c[p].toJSON = de.noop)), "object" != typeof t && "function" != typeof t || (i ? c[p] = de.extend(c[p], t) : c[p].data = de.extend(c[p].data, t)), o = c[p], i || (o.data || (o.data = {}), o = o.data), n !== a && (o[de.camelCase(t)] = n), l ? (r = o[t], null == r && (r = o[de.camelCase(t)])) : r = o, r } }

        function c(e, t, n) {
            if (de.acceptData(e)) {
                var i, o, r, a = e.nodeType,
                    s = a ? de.cache : e,
                    l = a ? e[de.expando] : de.expando;
                if (s[l]) {
                    if (t && (i = n ? s[l] : s[l].data)) { de.isArray(t) ? t = t.concat(de.map(t, de.camelCase)) : t in i ? t = [t] : (t = de.camelCase(t), t = t in i ? [t] : t.split(" "));
                        for (o = 0, r = t.length; o < r; o++) delete i[t[o]];
                        if (!(n ? d : de.isEmptyObject)(i)) return }(n || (delete s[l].data, d(s[l]))) && (a ? de.cleanData([e], !0) : de.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null) } } }

        function p(e, t, n) {
            if (n === a && 1 === e.nodeType) {
                var i = "data-" + t.replace(Ee, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try { n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ne.test(n) ? de.parseJSON(n) : n) } catch (o) {}
                    de.data(e, t, n) } else n = a }
            return n }

        function d(e) {
            var t;
            for (t in e)
                if (("data" !== t || !de.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0 }

        function f() {
            return !0 }

        function h() {
            return !1 }

        function m(e, t) { do e = e[t]; while (e && 1 !== e.nodeType);
            return e }

        function g(e, t, n) {
            if (t = t || 0, de.isFunction(t)) return de.grep(e, function(e, i) {
                var o = !!t.call(e, i, e);
                return o === n });
            if (t.nodeType) return de.grep(e, function(e) {
                return e === t === n });
            if ("string" == typeof t) {
                var i = de.grep(e, function(e) {
                    return 1 === e.nodeType });
                if ($e.test(t)) return de.filter(t, i, !n);
                t = de.filter(t, i) }
            return de.grep(e, function(e) {
                return de.inArray(e, t) >= 0 === n }) }

        function v(e) {
            var t = Je.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n }

        function y(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t)) }

        function b(e) {
            var t = e.getAttributeNode("type");
            return e.type = (t && t.specified) + "/" + e.type, e }

        function w(e) {
            var t = st.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e }

        function x(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) de._data(n, "globalEval", !t || de._data(t[i], "globalEval")) }

        function T(e, t) {
            if (1 === t.nodeType && de.hasData(e)) {
                var n, i, o, r = de._data(e),
                    a = de._data(t, r),
                    s = r.events;
                if (s) { delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, o = s[n].length; i < o; i++) de.event.add(t, n, s[n][i]) }
                a.data && (a.data = de.extend({}, a.data)) } }

        function A(e, t) {
            var n, i, o;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !de.support.noCloneEvent && t[de.expando]) { i = de._data(t);
                    for (o in i.events) de.removeEvent(t, o, i.handle);
                    t.removeAttribute(de.expando) } "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.support.html5Clone && e.innerHTML && !de.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && ot.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) } }

        function C(e, t) {
            var n, i, o = 0,
                r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : a;
            if (!r)
                for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || de.nodeName(i, t) ? r.push(i) : de.merge(r, C(i, t));
            return t === a || t && de.nodeName(e, t) ? de.merge([e], r) : r }

        function _(e) { ot.test(e.type) && (e.defaultChecked = e.checked) }

        function k(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = Nt.length; o--;)
                if (t = Nt[o] + n, t in e) return t;
            return i }

        function N(e, t) {
            return e = t || e, "none" === de.css(e, "display") || !de.contains(e.ownerDocument, e) }

        function E(e, t) {
            for (var n, i = [], o = 0, r = e.length; o < r; o++) n = e[o], n.style && (i[o] = de._data(n, "olddisplay"), t ? (i[o] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && N(n) && (i[o] = de._data(n, "olddisplay", D(n.nodeName)))) : i[o] || N(n) || de._data(n, "olddisplay", de.css(n, "display")));
            for (o = 0; o < r; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? i[o] || "" : "none"));
            return e }

        function S(e, t, n) {
            var i = wt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t }

        function I(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; r < 4; r += 2) "margin" === n && (a += de.css(e, n + kt[r], !0, o)), i ? ("content" === n && (a -= de.css(e, "padding" + kt[r], !0, o)), "margin" !== n && (a -= de.css(e, "border" + kt[r] + "Width", !0, o))) : (a += de.css(e, "padding" + kt[r], !0, o), "padding" !== n && (a += de.css(e, "border" + kt[r] + "Width", !0, o)));
            return a }

        function M(e, t, n) {
            var i = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = ft(e),
                a = de.support.boxSizing && "border-box" === de.css(e, "boxSizing", !1, r);
            if (o <= 0 || null == o) {
                if (o = dt(e, t, r), (o < 0 || null == o) && (o = e.style[t]), xt.test(o)) return o;
                i = a && (de.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0 }
            return o + I(e, t, n || (a ? "border" : "content"), i, r) + "px" }

        function D(e) {
            var t = V,
                n = At[e];
            return n || (n = L(e, t), "none" !== n && n || (ht = (ht || de("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ht[0].contentWindow || ht[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = L(e, t), ht.detach()), At[e] = n), n }

        function L(e, t) {
            var n = de(t.createElement(e)).appendTo(t.body),
                i = de.css(n[0], "display");
            return n.remove(), i }

        function j(e, t, n, i) {
            var o;
            if (de.isArray(t)) de.each(t, function(t, o) { n || St.test(e) ? i(e, o) : j(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i) });
            else if (n || "object" !== de.type(t)) i(e, t);
            else
                for (o in t) j(e + "[" + o + "]", t[o], n, i) }

        function O(e) {
            return function(t, n) { "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(he) || [];
                if (de.isFunction(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n) } }

        function F(e, t, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, de.each(e[s] || [], function(e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1) }), l }
            var r = {},
                a = e === $t;
            return o(t.dataTypes[0]) || !r["*"] && o("*") }

        function H(e, t) {
            var n, i, o = de.ajaxSettings.flatOptions || {};
            for (n in t) t[n] !== a && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && de.extend(!0, e, i), e }

        function B(e, t, n) {
            var i, o, r, s, l = e.contents,
                u = e.dataTypes,
                c = e.responseFields;
            for (o in c) o in n && (t[c[o]] = n[o]);
            for (;
                "*" === u[0];) u.shift(), i === a && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (o in l)
                    if (l[o] && l[o].test(i)) { u.unshift(o);
                        break }
            if (u[0] in n) r = u[0];
            else {
                for (o in n) {
                    if (!u[0] || e.converters[o + " " + u[0]]) { r = o;
                        break }
                    s || (s = o) }
                r = r || s }
            if (r) return r !== u[0] && u.unshift(r), n[r] }

        function R(e, t) {
            var n, i, o, r, a = {},
                s = 0,
                l = e.dataTypes.slice(),
                u = l[0];
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1])
                for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
            for (; o = l[++s];)
                if ("*" !== o) {
                    if ("*" !== u && u !== o) {
                        if (n = a[u + " " + o] || a["* " + o], !n)
                            for (i in a)
                                if (r = i.split(" "), r[1] === o && (n = a[u + " " + r[0]] || a["* " + r[0]])) { n === !0 ? n = a[i] : a[i] !== !0 && (o = r[0], l.splice(s--, 0, o));
                                    break }
                        if (n !== !0)
                            if (n && e["throws"]) t = n(t);
                            else try { t = n(t) } catch (c) {
                                return { state: "parsererror", error: n ? c : "No conversion from " + u + " to " + o } } }
                    u = o }
            return { state: "success", data: t } }

        function z() {
            try {
                return new r.XMLHttpRequest } catch (e) {} }

        function P() {
            try {
                return new r.ActiveXObject("Microsoft.XMLHTTP") } catch (e) {} }

        function U() {
            return setTimeout(function() { tn = a }), tn = de.now() }

        function Z(e, t) { de.each(t, function(t, n) {
                for (var i = (ln[t] || []).concat(ln["*"]), o = 0, r = i.length; o < r; o++)
                    if (i[o].call(e, t, n)) return }) }

        function q(e, t, n) {
            var i, o, r = 0,
                a = sn.length,
                s = de.Deferred().always(function() { delete l.elem }),
                l = function() {
                    if (o) return !1;
                    for (var t = tn || U(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, a = 0, l = u.tweens.length; a < l; a++) u.tweens[a].run(r);
                    return s.notifyWith(e, [u, r, n]), r < 1 && l ? n : (s.resolveWith(e, [u]), !1) },
                u = s.promise({ elem: e, props: de.extend({}, t), opts: de.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: tn || U(), duration: n.duration, tweens: [], createTween: function(t, n) {
                        var i = de.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i }, stop: function(t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) u.tweens[n].run(1);
                        return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this } }),
                c = u.props;
            for (W(c, u.opts.specialEasing); r < a; r++)
                if (i = sn[r].call(u, e, c, u.opts)) return i;
            return Z(u, c), de.isFunction(u.opts.start) && u.opts.start.call(e, u), de.fx.timer(de.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) }

        function W(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (i = de.camelCase(n), o = t[i], r = e[n], de.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = de.cssHooks[i], a && "expand" in a) { r = a.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = o) } else t[i] = o }

        function $(e, t, n) {
            var i, o, r, a, s, l, u, c, p, d = this,
                f = e.style,
                h = {},
                m = [],
                g = e.nodeType && N(e);
            n.queue || (c = de._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function() { c.unqueued || p() }), c.unqueued++, d.always(function() { d.always(function() { c.unqueued--, de.queue(e, "fx").length || c.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === de.css(e, "display") && "none" === de.css(e, "float") && (de.support.inlineBlockNeedsLayout && "inline" !== D(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", de.support.shrinkWrapBlocks || d.done(function() { f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2] }));
            for (i in t)
                if (r = t[i], on.exec(r)) {
                    if (delete t[i], l = l || "toggle" === r, r === (g ? "hide" : "show")) continue;
                    m.push(i) }
            if (a = m.length) { s = de._data(e, "fxshow") || de._data(e, "fxshow", {}), "hidden" in s && (g = s.hidden), l && (s.hidden = !g), g ? de(e).show() : d.done(function() { de(e).hide() }), d.done(function() {
                    var t;
                    de._removeData(e, "fxshow");
                    for (t in h) de.style(e, t, h[t]) });
                for (i = 0; i < a; i++) o = m[i], u = d.createTween(o, g ? s[o] : 0), h[o] = s[o] || de.style(e, o), o in s || (s[o] = u.start, g && (u.end = u.start, u.start = "width" === o || "height" === o ? 1 : 0)) } }

        function Y(e, t, n, i, o) {
            return new Y.prototype.init(e, t, n, i, o) }

        function X(e, t) {
            var n, i = { height: e },
                o = 0;
            for (t = t ? 1 : 0; o < 4; o += 2 - t) n = kt[o], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i }

        function J(e) {
            return de.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow) }
        var G, K, V = r.document,
            Q = r.location,
            ee = r.jQuery,
            te = r.$,
            ne = {},
            ie = [],
            oe = "1.9.0",
            re = ie.concat,
            ae = ie.push,
            se = ie.slice,
            le = ie.indexOf,
            ue = ne.toString,
            ce = ne.hasOwnProperty,
            pe = oe.trim,
            de = function(e, t) {
                return new de.fn.init(e, t, G) },
            fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            he = /\S+/g,
            me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ge = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ve = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ye = /^[\],:{}\s]*$/,
            be = /(?:^|:|,)(?:\s*\[)+/g,
            we = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            xe = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            Te = /^-ms-/,
            Ae = /-([\da-z])/gi,
            Ce = function(e, t) {
                return t.toUpperCase() },
            _e = function() { V.addEventListener ? (V.removeEventListener("DOMContentLoaded", _e, !1), de.ready()) : "complete" === V.readyState && (V.detachEvent("onreadystatechange", _e), de.ready()) };
        de.fn = de.prototype = { jquery: oe, constructor: de, init: function(e, t, n) {
                var i, o;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ge.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof de ? t[0] : t, de.merge(this, de.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : V, !0)), ve.test(i[1]) && de.isPlainObject(t))
                            for (i in t) de.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this }
                    if (o = V.getElementById(i[2]), o && o.parentNode) {
                        if (o.id !== i[2]) return n.find(e);
                        this.length = 1, this[0] = o }
                    return this.context = V, this.selector = e, this }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : de.isFunction(e) ? n.ready(e) : (e.selector !== a && (this.selector = e.selector, this.context = e.context), de.makeArray(e, this)) }, selector: "", length: 0, size: function() {
                return this.length }, toArray: function() {
                return se.call(this) }, get: function(e) {
                return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e] }, pushStack: function(e) {
                var t = de.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t }, each: function(e, t) {
                return de.each(this, e, t) }, ready: function(e) {
                return de.ready.promise().done(e), this }, slice: function() {
                return this.pushStack(se.apply(this, arguments)) }, first: function() {
                return this.eq(0) }, last: function() {
                return this.eq(-1) }, eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, map: function(e) {
                return this.pushStack(de.map(this, function(t, n) {
                    return e.call(t, n, t) })) }, end: function() {
                return this.prevObject || this.constructor(null) }, push: ae, sort: [].sort, splice: [].splice }, de.fn.init.prototype = de.fn, de.extend = de.fn.extend = function() {
            var e, t, n, i, o, r, s = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || de.isFunction(s) || (s = {}), u === l && (s = this, --l); l < u; l++)
                if (null != (e = arguments[l]))
                    for (t in e) n = s[t], i = e[t], s !== i && (c && i && (de.isPlainObject(i) || (o = de.isArray(i))) ? (o ? (o = !1, r = n && de.isArray(n) ? n : []) : r = n && de.isPlainObject(n) ? n : {}, s[t] = de.extend(c, r, i)) : i !== a && (s[t] = i));
            return s }, de.extend({ noConflict: function(e) {
                return r.$ === de && (r.$ = te), e && r.jQuery === de && (r.jQuery = ee), de }, isReady: !1, readyWait: 1, holdReady: function(e) { e ? de.readyWait++ : de.ready(!0) }, ready: function(e) {
                if (e === !0 ? !--de.readyWait : !de.isReady) {
                    if (!V.body) return setTimeout(de.ready);
                    de.isReady = !0, e !== !0 && --de.readyWait > 0 || (K.resolveWith(V, [de]), de.fn.trigger && de(V).trigger("ready").off("ready")) } }, isFunction: function(e) {
                return "function" === de.type(e) }, isArray: Array.isArray || function(e) {
                return "array" === de.type(e) }, isWindow: function(e) {
                return null != e && e == e.window }, isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e) }, type: function(e) {
                return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? ne[ue.call(e)] || "object" : typeof e }, isPlainObject: function(e) {
                if (!e || "object" !== de.type(e) || e.nodeType || de.isWindow(e)) return !1;
                try {
                    if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (t) {
                    return !1 }
                var n;
                for (n in e);
                return n === a || ce.call(e, n) }, isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0 }, error: function(e) {
                throw new Error(e) }, parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || V;
                var i = ve.exec(e),
                    o = !n && [];
                return i ? [t.createElement(i[1])] : (i = de.buildFragment([e], t, o), o && de(o).remove(), de.merge([], i.childNodes)) }, parseJSON: function(e) {
                return r.JSON && r.JSON.parse ? r.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = de.trim(e), e && ye.test(e.replace(we, "@").replace(xe, "]").replace(be, ""))) ? new Function("return " + e)() : void de.error("Invalid JSON: " + e) }, parseXML: function(e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try { r.DOMParser ? (n = new DOMParser, t = n.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) } catch (i) { t = a }
                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || de.error("Invalid XML: " + e), t }, noop: function() {}, globalEval: function(e) { e && de.trim(e) && (r.execScript || function(e) { r.eval.call(r, e) })(e) }, camelCase: function(e) {
                return e.replace(Te, "ms-").replace(Ae, Ce) }, nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function(e, t, n) {
                var i, o = 0,
                    r = e.length,
                    a = s(e);
                if (n) {
                    if (a)
                        for (; o < r && (i = t.apply(e[o], n), i !== !1); o++);
                    else
                        for (o in e)
                            if (i = t.apply(e[o], n), i === !1) break } else if (a)
                    for (; o < r && (i = t.call(e[o], o, e[o]), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.call(e[o], o, e[o]), i === !1) break; return e }, trim: pe && !pe.call("\ufeff ") ? function(e) {
                return null == e ? "" : pe.call(e) } : function(e) {
                return null == e ? "" : (e + "").replace(me, "") }, makeArray: function(e, t) {
                var n = t || [];
                return null != e && (s(Object(e)) ? de.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n }, inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (le) return le.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e) return n }
                return -1 }, merge: function(e, t) {
                var n = t.length,
                    i = e.length,
                    o = 0;
                if ("number" == typeof n)
                    for (; o < n; o++) e[i++] = t[o];
                else
                    for (; t[o] !== a;) e[i++] = t[o++];
                return e.length = i, e }, grep: function(e, t, n) {
                var i, o = [],
                    r = 0,
                    a = e.length;
                for (n = !!n; r < a; r++) i = !!t(e[r], r), n !== i && o.push(e[r]);
                return o }, map: function(e, t, n) {
                var i, o = 0,
                    r = e.length,
                    a = s(e),
                    l = [];
                if (a)
                    for (; o < r; o++) i = t(e[o], o, n), null != i && (l[l.length] = i);
                else
                    for (o in e) i = t(e[o], o, n), null != i && (l[l.length] = i);
                return re.apply([], l) }, guid: 1, proxy: function(e, t) {
                var n, i, o;
                return "string" == typeof t && (n = e[t], t = e, e = n), de.isFunction(e) ? (i = se.call(arguments, 2), o = function() {
                    return e.apply(t || this, i.concat(se.call(arguments))) }, o.guid = e.guid = e.guid || de.guid++, o) : a }, access: function(e, t, n, i, o, r, s) {
                var l = 0,
                    u = e.length,
                    c = null == n;
                if ("object" === de.type(n)) { o = !0;
                    for (l in n) de.access(e, t, l, n[l], !0, r, s) } else if (i !== a && (o = !0, de.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(de(e), n) })), t))
                    for (; l < u; l++) t(e[l], n, s ? i : i.call(e[l], l, t(e[l], n)));
                return o ? e : c ? t.call(e) : u ? t(e[0], n) : r }, now: function() {
                return (new Date).getTime() } }), de.ready.promise = function(e) {
            if (!K)
                if (K = de.Deferred(), "complete" === V.readyState) setTimeout(de.ready);
                else if (V.addEventListener) V.addEventListener("DOMContentLoaded", _e, !1), r.addEventListener("load", de.ready, !1);
            else { V.attachEvent("onreadystatechange", _e), r.attachEvent("onload", de.ready);
                var t = !1;
                try { t = null == r.frameElement && V.documentElement } catch (n) {}
                t && t.doScroll && ! function i() {
                    if (!de.isReady) {
                        try { t.doScroll("left") } catch (e) {
                            return setTimeout(i, 50) }
                        de.ready() } }() }
            return K.promise(e) }, de.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { ne["[object " + t + "]"] = t.toLowerCase() }), G = de(V);
        var ke = {};
        de.Callbacks = function(e) { e = "string" == typeof e ? ke[e] || l(e) : de.extend({}, e);
            var t, n, i, o, r, s, u = [],
                c = !e.once && [],
                p = function(a) {
                    for (t = e.memory && a, n = !0, s = o || 0, o = 0, r = u.length, i = !0; u && s < r; s++)
                        if (u[s].apply(a[0], a[1]) === !1 && e.stopOnFalse) { t = !1;
                            break }
                    i = !1, u && (c ? c.length && p(c.shift()) : t ? u = [] : d.disable()) },
                d = { add: function() {
                        if (u) {
                            var n = u.length;! function a(t) { de.each(t, function(t, n) {
                                    var i = de.type(n); "function" === i ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== i && a(n) }) }(arguments), i ? r = u.length : t && (o = n, p(t)) }
                        return this }, remove: function() {
                        return u && de.each(arguments, function(e, t) {
                            for (var n;
                                (n = de.inArray(t, u, n)) > -1;) u.splice(n, 1), i && (n <= r && r--, n <= s && s--) }), this }, has: function(e) {
                        return de.inArray(e, u) > -1 }, empty: function() {
                        return u = [], this }, disable: function() {
                        return u = c = t = a, this }, disabled: function() {
                        return !u }, lock: function() {
                        return c = a, t || d.disable(), this }, locked: function() {
                        return !c }, fireWith: function(e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], !u || n && !c || (i ? c.push(t) : p(t)), this }, fire: function() {
                        return d.fireWith(this, arguments), this }, fired: function() {
                        return !!n } };
            return d }, de.extend({ Deferred: function(e) {
                var t = [
                        ["resolve", "done", de.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", de.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", de.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = { state: function() {
                            return n }, always: function() {
                            return o.done(arguments).fail(arguments), this }, then: function() {
                            var e = arguments;
                            return de.Deferred(function(n) { de.each(t, function(t, r) {
                                    var a = r[0],
                                        s = de.isFunction(e[t]) && e[t];
                                    o[r[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && de.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === i ? n.promise() : this, s ? [e] : arguments) }) }), e = null }).promise() }, promise: function(e) {
                            return null != e ? de.extend(e, i) : i } },
                    o = {};
                return i.pipe = i.then, de.each(t, function(e, r) {
                    var a = r[2],
                        s = r[3];
                    i[r[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this }, o[r[0] + "With"] = a.fireWith }), i.promise(o), e && e.call(o, o), o }, when: function(e) {
                var t, n, i, o = 0,
                    r = se.call(arguments),
                    a = r.length,
                    s = 1 !== a || e && de.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : de.Deferred(),
                    u = function(e, n, i) {
                        return function(o) { n[e] = this, i[e] = arguments.length > 1 ? se.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i) } };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); o < a; o++) r[o] && de.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, t)) : --s;
                return s || l.resolveWith(i, r), l.promise() } }), de.support = function() {
            var e, t, n, i, o, a, s, l, u, c, p = V.createElement("div");
            if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = p.getElementsByTagName("*"), n = p.getElementsByTagName("a")[0], !t || !n || !t.length) return {};
            i = V.createElement("select"), o = i.appendChild(V.createElement("option")), a = p.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", e = { getSetAttribute: "t" !== p.className, leadingWhitespace: 3 === p.firstChild.nodeType, tbody: !p.getElementsByTagName("tbody").length, htmlSerialize: !!p.getElementsByTagName("link").length, style: /top/.test(n.getAttribute("style")), hrefNormalized: "/a" === n.getAttribute("href"), opacity: /^0.5/.test(n.style.opacity), cssFloat: !!n.style.cssFloat, checkOn: !!a.value, optSelected: o.selected, enctype: !!V.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === V.compatMode, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, a.checked = !0, e.noCloneChecked = a.cloneNode(!0).checked, i.disabled = !0, e.optDisabled = !o.disabled;
            try { delete p.test } catch (d) { e.deleteExpando = !1 }
            a = V.createElement("input"), a.setAttribute("value", ""), e.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), e.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), s = V.createDocumentFragment(), s.appendChild(a), e.appendChecked = a.checked, e.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() { e.noCloneEvent = !1 }), p.cloneNode(!0).click());
            for (c in { submit: !0, change: !0, focusin: !0 }) p.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in r || p.attributes[l].expando === !1;
            return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === p.style.backgroundClip, de(function() {
                var t, n, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    a = V.getElementsByTagName("body")[0];
                a && (t = V.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(t).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = p.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === i[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", e.boxSizing = 4 === p.offsetWidth, e.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, r.getComputedStyle && (e.pixelPosition = "1%" !== (r.getComputedStyle(p, null) || {}).top, e.boxSizingReliable = "4px" === (r.getComputedStyle(p, null) || { width: "4px" }).width, n = p.appendChild(V.createElement("div")), n.style.cssText = p.style.cssText = o, n.style.marginRight = n.style.width = "0", p.style.width = "1px", e.reliableMarginRight = !parseFloat((r.getComputedStyle(n, null) || {}).marginRight)), "undefined" != typeof p.style.zoom && (p.innerHTML = "", p.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== p.offsetWidth, a.style.zoom = 1), a.removeChild(t), t = p = i = n = null) }), t = i = s = o = n = a = null, e }();
        var Ne = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Ee = /([A-Z])/g;
        de.extend({ cache: {}, expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function(e) {
                return e = e.nodeType ? de.cache[e[de.expando]] : e[de.expando], !!e && !d(e) }, data: function(e, t, n) {
                return u(e, t, n, !1) }, removeData: function(e, t) {
                return c(e, t, !1) }, _data: function(e, t, n) {
                return u(e, t, n, !0) }, _removeData: function(e, t) {
                return c(e, t, !0) }, acceptData: function(e) {
                var t = e.nodeName && de.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t } }), de.fn.extend({ data: function(e, t) {
                var n, i, o = this[0],
                    r = 0,
                    s = null;
                if (e === a) {
                    if (this.length && (s = de.data(o), 1 === o.nodeType && !de._data(o, "parsedAttrs"))) {
                        for (n = o.attributes; r < n.length; r++) i = n[r].name, i.indexOf("data-") || (i = de.camelCase(i.substring(5)), p(o, i, s[i]));
                        de._data(o, "parsedAttrs", !0) }
                    return s }
                return "object" == typeof e ? this.each(function() { de.data(this, e) }) : de.access(this, function(t) {
                    return t === a ? o ? p(o, e, de.data(o, e)) : null : void this.each(function() { de.data(this, e, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function(e) {
                return this.each(function() { de.removeData(this, e) }) } }), de.extend({ queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = de._data(e, t), n && (!i || de.isArray(n) ? i = de._data(e, t, de.makeArray(n)) : i.push(n)), i || [] }, dequeue: function(e, t) { t = t || "fx";
                var n = de.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = de._queueHooks(e, t),
                    a = function() { de.dequeue(e, t) }; "inprogress" === o && (o = n.shift(), i--), r.cur = o, o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire() }, _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return de._data(e, n) || de._data(e, n, { empty: de.Callbacks("once memory").add(function() { de._removeData(e, t + "queue"), de._removeData(e, n) }) }) } }), de.fn.extend({ queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? de.queue(this[0], e) : t === a ? this : this.each(function() {
                    var n = de.queue(this, e, t);
                    de._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && de.dequeue(this, e) }) }, dequeue: function(e) {
                return this.each(function() { de.dequeue(this, e) }) }, delay: function(e, t) {
                return e = de.fx ? de.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() { clearTimeout(i) } }) }, clearQueue: function(e) {
                return this.queue(e || "fx", []) }, promise: function(e, t) {
                var n, i = 1,
                    o = de.Deferred(),
                    r = this,
                    s = this.length,
                    l = function() {--i || o.resolveWith(r, [r]) };
                for ("string" != typeof e && (t = e, e = a), e = e || "fx"; s--;) n = de._data(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(l));
                return l(), o.promise(t) } });
        var Se, Ie, Me = /[\t\r\n]/g,
            De = /\r/g,
            Le = /^(?:input|select|textarea|button|object)$/i,
            je = /^(?:a|area)$/i,
            Oe = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            Fe = /^(?:checked|selected)$/i,
            He = de.support.getSetAttribute,
            Be = de.support.input;
        de.fn.extend({ attr: function(e, t) {
                return de.access(this, de.attr, e, t, arguments.length > 1) }, removeAttr: function(e) {
                return this.each(function() { de.removeAttr(this, e) }) }, prop: function(e, t) {
                return de.access(this, de.prop, e, t, arguments.length > 1) }, removeProp: function(e) {
                return e = de.propFix[e] || e, this.each(function() {
                    try { this[e] = a, delete this[e] } catch (t) {} }) }, addClass: function(e) {
                var t, n, i, o, r, a = 0,
                    s = this.length,
                    l = "string" == typeof e && e;
                if (de.isFunction(e)) return this.each(function(t) { de(this).addClass(e.call(this, t, this.className)) });
                if (l)
                    for (t = (e || "").match(he) || []; a < s; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Me, " ") : " ")) {
                            for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            n.className = de.trim(i) }
                return this }, removeClass: function(e) {
                var t, n, i, o, r, a = 0,
                    s = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                if (de.isFunction(e)) return this.each(function(t) { de(this).removeClass(e.call(this, t, this.className)) });
                if (l)
                    for (t = (e || "").match(he) || []; a < s; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Me, " ") : "")) {
                            for (r = 0; o = t[r++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            n.className = e ? de.trim(i) : "" }
                return this }, toggleClass: function(e, t) {
                var n = typeof e,
                    i = "boolean" == typeof t;
                return de.isFunction(e) ? this.each(function(n) { de(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function() {
                    if ("string" === n)
                        for (var o, r = 0, a = de(this), s = t, l = e.match(he) || []; o = l[r++];) s = i ? s : !a.hasClass(o), a[s ? "addClass" : "removeClass"](o);
                    else "undefined" !== n && "boolean" !== n || (this.className && de._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : de._data(this, "__className__") || "") }) }, hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Me, " ").indexOf(t) >= 0) return !0;
                return !1 }, val: function(e) {
                var t, n, i, o = this[0]; {
                    if (arguments.length) return i = de.isFunction(e), this.each(function(n) {
                        var o, r = de(this);
                        1 === this.nodeType && (o = i ? e.call(this, n, r.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : de.isArray(o) && (o = de.map(o, function(e) {
                            return null == e ? "" : e + "" })), t = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, o, "value") !== a || (this.value = o)) });
                    if (o) return t = de.valHooks[o.type] || de.valHooks[o.nodeName.toLowerCase()], t && "get" in t && (n = t.get(o, "value")) !== a ? n : (n = o.value, "string" == typeof n ? n.replace(De, "") : null == n ? "" : n) } } }), de.extend({ valHooks: { option: { get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text } }, select: { get: function(e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, a = r ? null : [], s = r ? o + 1 : i.length, l = o < 0 ? s : r ? o : 0; l < s; l++)
                            if (n = i[l], (n.selected || l === o) && (de.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !de.nodeName(n.parentNode, "optgroup"))) {
                                if (t = de(n).val(), r) return t;
                                a.push(t) }
                        return a }, set: function(e, t) {
                        var n = de.makeArray(t);
                        return de(e).find("option").each(function() { this.selected = de.inArray(de(this).val(), n) >= 0 }), n.length || (e.selectedIndex = -1), n } } }, attr: function(e, t, n) {
                var i, o, r, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof e.getAttribute ? de.prop(e, t, n) : (r = 1 !== s || !de.isXMLDoc(e), r && (t = t.toLowerCase(), o = de.attrHooks[t] || (Oe.test(t) ? Ie : Se)), n === a ? o && r && "get" in o && null !== (i = o.get(e, t)) ? i : ("undefined" != typeof e.getAttribute && (i = e.getAttribute(t)), null == i ? a : i) : null !== n ? o && r && "set" in o && (i = o.set(e, n, t)) !== a ? i : (e.setAttribute(t, n + ""), n) : void de.removeAttr(e, t)) }, removeAttr: function(e, t) {
                var n, i, o = 0,
                    r = t && t.match(he);
                if (r && 1 === e.nodeType)
                    for (; n = r[o++];) i = de.propFix[n] || n, Oe.test(n) ? !He && Fe.test(n) ? e[de.camelCase("default-" + n)] = e[i] = !1 : e[i] = !1 : de.attr(e, n, ""), e.removeAttribute(He ? n : i) }, attrHooks: { type: { set: function(e, t) {
                        if (!de.support.radioValue && "radio" === t && de.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t } } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function(e, t, n) {
                var i, o, r, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !de.isXMLDoc(e), r && (t = de.propFix[t] || t, o = de.propHooks[t]), n !== a ? o && "set" in o && (i = o.set(e, n, t)) !== a ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) {
                        var t = e.getAttributeNode("tabindex");
                        return t && t.specified ? parseInt(t.value, 10) : Le.test(e.nodeName) || je.test(e.nodeName) && e.href ? 0 : a } } } }), Ie = {
            get: function(e, t) {
                var n = de.prop(e, t),
                    i = "boolean" == typeof n && e.getAttribute(t),
                    o = "boolean" == typeof n ? Be && He ? null != i : Fe.test(t) ? e[de.camelCase("default-" + t)] : !!i : e.getAttributeNode(t);
                return o && o.value !== !1 ? t.toLowerCase() : a },
            set: function(e, t, n) {
                return t === !1 ? de.removeAttr(e, n) : Be && He || !Fe.test(n) ? e.setAttribute(!He && de.propFix[n] || n, n) : e[de.camelCase("default-" + n)] = e[n] = !0,
                    n
            }
        }, Be && He || (de.attrHooks.value = { get: function(e, t) {
                var n = e.getAttributeNode(t);
                return de.nodeName(e, "input") ? e.defaultValue : n && n.specified ? n.value : a }, set: function(e, t, n) {
                return de.nodeName(e, "input") ? void(e.defaultValue = t) : Se && Se.set(e, t, n) } }), He || (Se = de.valHooks.button = { get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && ("id" === t || "name" === t || "coords" === t ? "" !== n.value : n.specified) ? n.value : a }, set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : a } }, de.attrHooks.contenteditable = { get: Se.get, set: function(e, t, n) { Se.set(e, "" !== t && t, n) } }, de.each(["width", "height"], function(e, t) { de.attrHooks[t] = de.extend(de.attrHooks[t], { set: function(e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n } }) })), de.support.hrefNormalized || (de.each(["href", "src", "width", "height"], function(e, t) { de.attrHooks[t] = de.extend(de.attrHooks[t], { get: function(e) {
                    var n = e.getAttribute(t, 2);
                    return null == n ? a : n } }) }), de.each(["href", "src"], function(e, t) { de.propHooks[t] = { get: function(e) {
                    return e.getAttribute(t, 4) } } })), de.support.style || (de.attrHooks.style = { get: function(e) {
                return e.style.cssText || a }, set: function(e, t) {
                return e.style.cssText = t + "" } }), de.support.optSelected || (de.propHooks.selected = de.extend(de.propHooks.selected, { get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } })), de.support.enctype || (de.propFix.enctype = "encoding"), de.support.checkOn || de.each(["radio", "checkbox"], function() { de.valHooks[this] = { get: function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value } } }), de.each(["radio", "checkbox"], function() { de.valHooks[this] = de.extend(de.valHooks[this], { set: function(e, t) {
                    if (de.isArray(t)) return e.checked = de.inArray(de(e).val(), t) >= 0 } }) });
        var Re = /^(?:input|select|textarea)$/i,
            ze = /^key/,
            Pe = /^(?:mouse|contextmenu)|click/,
            Ue = /^(?:focusinfocus|focusoutblur)$/,
            Ze = /^([^.]*)(?:\.(.+)|)$/;
        de.event = { global: {}, add: function(e, t, n, i, o) {
                    var r, s, l, u, c, p, d, f, h, m, g, v = 3 !== e.nodeType && 8 !== e.nodeType && de._data(e);
                    if (v) {
                        for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = de.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function(e) {
                                return "undefined" == typeof de || e && de.event.triggered === e.type ? a : de.event.dispatch.apply(s.elem, arguments) }, s.elem = e), t = (t || "").match(he) || [""], c = t.length; c--;) l = Ze.exec(t[c]) || [], h = g = l[1], m = (l[2] || "").split(".").sort(), d = de.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = de.event.special[h] || {}, p = de.extend({ type: h, origType: g, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && de.expr.match.needsContext.test(o), namespace: m.join(".") }, r), (f = u[h]) || (f = u[h] = [], f.delegateCount = 0, d.setup && d.setup.call(e, i, m, s) !== !1 || (e.addEventListener ? e.addEventListener(h, s, !1) : e.attachEvent && e.attachEvent("on" + h, s))), d.add && (d.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, p) : f.push(p), de.event.global[h] = !0;
                        e = null } }, remove: function(e, t, n, i, o) {
                    var r, a, s, l, u, c, p, d, f, h, m, g = de.hasData(e) && de._data(e);
                    if (g && (l = g.events)) {
                        for (t = (t || "").match(he) || [""], u = t.length; u--;)
                            if (s = Ze.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                                for (p = de.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, d = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = d.length; r--;) c = d[r], !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(r, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
                                a && !d.length && (p.teardown && p.teardown.call(e, h, g.handle) !== !1 || de.removeEvent(e, f, g.handle), delete l[f]) } else
                                for (f in l) de.event.remove(e, f + t[u], n, i, !0);
                        de.isEmptyObject(l) && (delete g.handle, de._removeData(e, "events")) } }, trigger: function(e, t, n, i) {
                    var o, s, l, u, c, p, d, f = [n || V],
                        h = e.type || e,
                        m = e.namespace ? e.namespace.split(".") : [];
                    if (s = l = n = n || V, 3 !== n.nodeType && 8 !== n.nodeType && !Ue.test(h + de.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[de.expando] ? e : new de.Event(h, "object" == typeof e && e), e.isTrigger = !0, e.namespace = m.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = a, e.target || (e.target = n), t = null == t ? [e] : de.makeArray(t, [e]), d = de.event.special[h] || {}, i || !d.trigger || d.trigger.apply(n, t) !== !1)) {
                        if (!i && !d.noBubble && !de.isWindow(n)) {
                            for (u = d.delegateType || h, Ue.test(u + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), l = s;
                            l === (n.ownerDocument || V) && f.push(l.defaultView || l.parentWindow || r) }
                        for (o = 0;
                            (s = f[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u : d.bindType || h, p = (de._data(s, "events") || {})[e.type] && de._data(s, "handle"), p && p.apply(s, t), p = c && s[c], p && de.acceptData(s) && p.apply && p.apply(s, t) === !1 && e.preventDefault();
                        if (e.type = h, !i && !e.isDefaultPrevented() && (!d._default || d._default.apply(n.ownerDocument, t) === !1) && ("click" !== h || !de.nodeName(n, "a")) && de.acceptData(n) && c && n[h] && !de.isWindow(n)) { l = n[c], l && (n[c] = null), de.event.triggered = h;
                            try { n[h]() } catch (g) {}
                            de.event.triggered = a, l && (n[c] = l) }
                        return e.result } }, dispatch: function(e) { e = de.event.fix(e);
                    var t, n, i, o, r, s = [],
                        l = se.call(arguments),
                        u = (de._data(this, "events") || {})[e.type] || [],
                        c = de.event.special[e.type] || {};
                    if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                        for (s = de.event.handlers.call(this, e, u), t = 0;
                            (o = s[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = o.elem, n = 0;
                                (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, i = ((de.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), i !== a && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, e), e.result } }, handlers: function(e, t) {
                    var n, i, o, r, s = [],
                        l = t.delegateCount,
                        u = e.target;
                    if (l && u.nodeType && (!e.button || "click" !== e.type))
                        for (; u != this; u = u.parentNode || this)
                            if (u.disabled !== !0 || "click" !== e.type) {
                                for (i = [], n = 0; n < l; n++) r = t[n], o = r.selector + " ", i[o] === a && (i[o] = r.needsContext ? de(o, this).index(u) >= 0 : de.find(o, this, null, [u]).length), i[o] && i.push(r);
                                i.length && s.push({ elem: u, handlers: i }) }
                    return l < t.length && s.push({ elem: this, handlers: t.slice(l) }), s }, fix: function(e) {
                    if (e[de.expando]) return e;
                    var t, n, i = e,
                        o = de.event.fixHooks[e.type] || {},
                        r = o.props ? this.props.concat(o.props) : this.props;
                    for (e = new de.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
                    return e.target || (e.target = i.srcElement || V), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, i) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, t) {
                        var n, i, o, r = t.button,
                            s = t.fromElement;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || V, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || r === a || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e } }, special: { load: { noBubble: !0 }, click: { trigger: function() {
                            if (de.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1 } }, focus: { trigger: function() {
                            if (this !== V.activeElement && this.focus) try {
                                return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() {
                            if (this === V.activeElement && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, beforeunload: { postDispatch: function(e) { e.result !== a && (e.originalEvent.returnValue = e.result) } } }, simulate: function(e, t, n, i) {
                    var o = de.extend(new de.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
                    i ? de.event.trigger(o, null, t) : de.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault() } }, de.removeEvent = V.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
                var i = "on" + t;
                e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n)) }, de.Event = function(e, t) {
                return this instanceof de.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? f : h) : this.type = e, t && de.extend(this, t), this.timeStamp = e && e.timeStamp || de.now(), void(this[de.expando] = !0)) : new de.Event(e, t) }, de.Event.prototype = { isDefaultPrevented: h, isPropagationStopped: h, isImmediatePropagationStopped: h, preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function() { this.isImmediatePropagationStopped = f, this.stopPropagation() } }, de.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e, t) { de.event.special[e] = { delegateType: t, bindType: t, handle: function(e) {
                        var n, i = this,
                            o = e.relatedTarget,
                            r = e.handleObj;
                        return o && (o === i || de.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n } } }), de.support.submitBubbles || (de.event.special.submit = { setup: function() {
                    return !de.nodeName(this, "form") && void de.event.add(this, "click._submit keypress._submit", function(e) {
                        var t = e.target,
                            n = de.nodeName(t, "input") || de.nodeName(t, "button") ? t.form : a;
                        n && !de._data(n, "submitBubbles") && (de.event.add(n, "submit._submit", function(e) { e._submit_bubble = !0 }), de._data(n, "submitBubbles", !0)) }) }, postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && de.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function() {
                    return !de.nodeName(this, "form") && void de.event.remove(this, "._submit") } }), de.support.changeBubbles || (de.event.special.change = { setup: function() {
                    return Re.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (de.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), de.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), de.event.simulate("change", this, e, !0) })), !1) : void de.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        Re.test(t.nodeName) && !de._data(t, "changeBubbles") && (de.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || de.event.simulate("change", this.parentNode, e, !0) }), de._data(t, "changeBubbles", !0)) }) }, handle: function(e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments) }, teardown: function() {
                    return de.event.remove(this, "._change"), !Re.test(this.nodeName) } }), de.support.focusinBubbles || de.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
                var n = 0,
                    i = function(e) { de.event.simulate(t, e.target, de.event.fix(e), !0) };
                de.event.special[t] = { setup: function() { 0 === n++ && V.addEventListener(e, i, !0) }, teardown: function() { 0 === --n && V.removeEventListener(e, i, !0) } } }), de.fn.extend({ on: function(e, t, n, i, o) {
                    var r, s;
                    if ("object" == typeof e) { "string" != typeof t && (n = n || t, t = a);
                        for (s in e) this.on(s, t, n, e[s], o);
                        return this }
                    if (null == n && null == i ? (i = t, n = t = a) : null == i && ("string" == typeof t ? (i = n, n = a) : (i = n, n = t, t = a)), i === !1) i = h;
                    else if (!i) return this;
                    return 1 === o && (r = i, i = function(e) {
                        return de().off(e), r.apply(this, arguments) }, i.guid = r.guid || (r.guid = de.guid++)), this.each(function() { de.event.add(this, e, i, n, t) }) }, one: function(e, t, n, i) {
                    return this.on(e, t, n, i, 1) }, off: function(e, t, n) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, de(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, t, e[o]);
                        return this }
                    return t !== !1 && "function" != typeof t || (n = t, t = a), n === !1 && (n = h), this.each(function() { de.event.remove(this, e, n, t) }) }, bind: function(e, t, n) {
                    return this.on(e, null, t, n) }, unbind: function(e, t) {
                    return this.off(e, null, t) }, delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i) }, undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, trigger: function(e, t) {
                    return this.each(function() { de.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return de.event.trigger(e, t, n, !0) }, hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e) } }), de.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { de.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) }, ze.test(t) && (de.event.fixHooks[t] = de.event.keyHooks), Pe.test(t) && (de.event.fixHooks[t] = de.event.mouseHooks) }),
            /*!
             * Sizzle CSS Selector Engine
             * Copyright 2012 jQuery Foundation and other contributors
             * Released under the MIT license
             * http://sizzlejs.com/
             */
            function(e, t) {
                function n(e) {
                    return he.test(e + "") }

                function i() {
                    var e, t = [];
                    return e = function(n, i) {
                        return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = i } }

                function o(e) {
                    return e[R] = !0, e }

                function r(e) {
                    var t = M.createElement("div");
                    try {
                        return e(t) } catch (n) {
                        return !1 } finally { t = null } }

                function a(e, t, n, i) {
                    var o, r, a, s, l, u, c, f, h, m;
                    if ((t ? t.ownerDocument || t : z) !== M && I(t), t = t || M, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (s = t.nodeType) && 9 !== s) return [];
                    if (!L && !i) {
                        if (o = me.exec(e))
                            if (a = o[1]) {
                                if (9 === s) {
                                    if (r = t.getElementById(a), !r || !r.parentNode) return n;
                                    if (r.id === a) return n.push(r), n } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && H(t, r) && r.id === a) return n.push(r), n } else {
                                if (o[2]) return K.apply(n, V.call(t.getElementsByTagName(e), 0)), n;
                                if ((a = o[3]) && P.getByClassName && t.getElementsByClassName) return K.apply(n, V.call(t.getElementsByClassName(a), 0)), n }
                        if (P.qsa && !j.test(e)) {
                            if (c = !0, f = R, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (u = p(e), (c = t.getAttribute("id")) ? f = c.replace(ye, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + d(u[l]);
                                h = fe.test(e) && t.parentNode || t, m = u.join(",") }
                            if (m) try {
                                return K.apply(n, V.call(h.querySelectorAll(m), 0)), n } catch (g) {} finally { c || t.removeAttribute("id") } } }
                    return w(e.replace(ae, "$1"), t, n, i) }

                function s(e, t) {
                    for (var n = e && t && e.nextSibling; n; n = n.nextSibling)
                        if (n === t) return -1;
                    return e ? 1 : -1 }

                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e } }

                function u(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e } }

                function c(e) {
                    return o(function(t) {
                        return t = +t, o(function(n, i) {
                            for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o])) }) }) }

                function p(e, t) {
                    var n, i, o, r, s, l, u, c = W[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, l = [], u = C.preFilter; s;) { n && !(i = se.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = le.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(ae, " ") }), s = s.slice(n.length));
                        for (r in C.filter) !(i = pe[r].exec(s)) || u[r] && !(i = u[r](i)) || (n = i.shift(), o.push({ value: n, type: r, matches: i }), s = s.slice(n.length));
                        if (!n) break }
                    return t ? s.length : s ? a.error(e) : W(e, l).slice(0) }

                function d(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i }

                function f(e, t, n) {
                    var i = t.dir,
                        o = n && "parentNode" === t.dir,
                        r = Z++;
                    return t.first ? function(t, n, r) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) return e(t, n, r) } : function(t, n, a) {
                        var s, l, u, c = U + " " + r;
                        if (a) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || o) && e(t, n, a)) return !0 } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || o)
                                    if (u = t[R] || (t[R] = {}), (l = u[i]) && l[0] === c) {
                                        if ((s = l[1]) === !0 || s === A) return s === !0 } else if (l = u[i] = [c], l[1] = e(t, n, a) || A, l[1] === !0) return !0 } }

                function h(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, i)) return !1;
                        return !0 } : e[0] }

                function m(e, t, n, i, o) {
                    for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), u && t.push(s)));
                    return a }

                function g(e, t, n, i, r, a) {
                    return i && !i[R] && (i = g(i)), r && !r[R] && (r = g(r, a)), o(function(o, a, s, l) {
                        var u, c, p, d = [],
                            f = [],
                            h = a.length,
                            g = o || b(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !o && t ? g : m(g, d, e, s, l),
                            y = n ? r || (o ? e : h || i) ? [] : a : v;
                        if (n && n(v, y, s, l), i)
                            for (u = m(y, f), i(u, [], s, l), c = u.length; c--;)(p = u[c]) && (y[f[c]] = !(v[f[c]] = p));
                        if (o) {
                            if (r || e) {
                                if (r) {
                                    for (u = [], c = y.length; c--;)(p = y[c]) && u.push(v[c] = p);
                                    r(null, y = [], u, l) }
                                for (c = y.length; c--;)(p = y[c]) && (u = r ? Q.call(o, p) : d[c]) > -1 && (o[u] = !(a[u] = p)) } } else y = m(y === a ? y.splice(h, y.length) : y), r ? r(null, a, y, l) : K.apply(a, y) }) }

                function v(e) {
                    for (var t, n, i, o = e.length, r = C.relative[e[0].type], a = r || C.relative[" "], s = r ? 1 : 0, l = f(function(e) {
                            return e === t }, a, !0), u = f(function(e) {
                            return Q.call(t, e) > -1 }, a, !0), c = [function(e, n, i) {
                            return !r && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i)) }]; s < o; s++)
                        if (n = C.relative[e[s].type]) c = [f(h(c), n)];
                        else {
                            if (n = C.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                                for (i = ++s; i < o && !C.relative[e[i].type]; i++);
                                return g(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1)).replace(ae, "$1"), n, s < i && v(e.slice(s, i)), i < o && v(e = e.slice(i)), i < o && d(e)) }
                            c.push(n) }
                    return h(c) }

                function y(e, t) {
                    var n = 0,
                        i = t.length > 0,
                        r = e.length > 0,
                        s = function(o, s, l, u, c) {
                            var p, d, f, h = [],
                                g = 0,
                                v = "0",
                                y = o && [],
                                b = null != c,
                                w = S,
                                x = o || r && C.find.TAG("*", c && s.parentNode || s),
                                T = U += null == w ? 1 : Math.E;
                            for (b && (S = s !== M && s, A = n); null != (p = x[v]); v++) {
                                if (r && p) {
                                    for (d = 0; f = e[d]; d++)
                                        if (f(p, s, l)) { u.push(p);
                                            break }
                                    b && (U = T, A = ++n) }
                                i && ((p = !f && p) && g--, o && y.push(p)) }
                            if (g += v, i && v !== g) {
                                for (d = 0; f = t[d]; d++) f(y, h, s, l);
                                if (o) {
                                    if (g > 0)
                                        for (; v--;) y[v] || h[v] || (h[v] = G.call(u));
                                    h = m(h) }
                                K.apply(u, h), b && !o && h.length > 0 && g + t.length > 1 && a.uniqueSort(u) }
                            return b && (U = T, S = w), y };
                    return i ? o(s) : s }

                function b(e, t, n) {
                    for (var i = 0, o = t.length; i < o; i++) a(e, t[i], n);
                    return n }

                function w(e, t, n, i) {
                    var o, r, a, s, l, u = p(e);
                    if (!i && 1 === u.length) {
                        if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === t.nodeType && !L && C.relative[r[1].type]) {
                            if (t = C.find.ID(a.matches[0].replace(we, xe), t)[0], !t) return n;
                            e = e.slice(r.shift().value.length) }
                        for (o = pe.needsContext.test(e) ? -1 : r.length - 1; o >= 0 && (a = r[o], !C.relative[s = a.type]); o--)
                            if ((l = C.find[s]) && (i = l(a.matches[0].replace(we, xe), fe.test(r[0].type) && t.parentNode || t))) {
                                if (r.splice(o, 1), e = i.length && d(r), !e) return K.apply(n, V.call(i, 0)), n;
                                break } }
                    return N(e, u)(i, t, L, n, fe.test(e)), n }

                function x() {}
                var T, A, C, _, k, N, E, S, I, M, D, L, j, O, F, H, B, R = "sizzle" + -new Date,
                    z = e.document,
                    P = {},
                    U = 0,
                    Z = 0,
                    q = i(),
                    W = i(),
                    $ = i(),
                    Y = typeof t,
                    X = 1 << 31,
                    J = [],
                    G = J.pop,
                    K = J.push,
                    V = J.slice,
                    Q = J.indexOf || function(e) {
                        for (var t = 0, n = this.length; t < n; t++)
                            if (this[t] === e) return t;
                        return -1 },
                    ee = "[\\x20\\t\\r\\n\\f]",
                    te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ne = te.replace("w", "w#"),
                    ie = "([*^$|!~]?=)",
                    oe = "\\[" + ee + "*(" + te + ")" + ee + "*(?:" + ie + ee + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ne + ")|)|)" + ee + "*\\]",
                    re = ":(" + te + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)",
                    ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                    se = new RegExp("^" + ee + "*," + ee + "*"),
                    le = new RegExp("^" + ee + "*([\\x20\\t\\r\\n\\f>+~])" + ee + "*"),
                    ue = new RegExp(re),
                    ce = new RegExp("^" + ne + "$"),
                    pe = { ID: new RegExp("^#(" + te + ")"), CLASS: new RegExp("^\\.(" + te + ")"), NAME: new RegExp("^\\[name=['\"]?(" + te + ")['\"]?\\]"), TAG: new RegExp("^(" + te.replace("w", "w*") + ")"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + re), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"), needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i") },
                    fe = /[\x20\t\r\n\f]*[+~]/,
                    he = /\{\s*\[native code\]\s*\}/,
                    me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ge = /^(?:input|select|textarea|button)$/i,
                    ve = /^h\d$/i,
                    ye = /'|\\/g,
                    be = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    we = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                    xe = function(e, t) {
                        var n = "0x" + t - 65536;
                        return n !== n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320) };
                try { V.call(D.childNodes, 0)[0].nodeType } catch (Te) { V = function(e) {
                        for (var t, n = []; t = this[e]; e++) n.push(t);
                        return n } }
                k = a.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName }, I = a.setDocument = function(e) {
                    var i = e ? e.ownerDocument || e : z;
                    return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, D = i.documentElement, L = k(i), P.tagNameNoComments = r(function(e) {
                        return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length }), P.attributes = r(function(e) { e.innerHTML = "<select></select>";
                        var t = typeof e.lastChild.getAttribute("multiple");
                        return "boolean" !== t && "string" !== t }), P.getByClassName = r(function(e) {
                        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) }), P.getByName = r(function(e) { e.id = R + 0, e.innerHTML = "<a name='" + R + "'></a><div name='" + R + "'></div>", D.insertBefore(e, D.firstChild);
                        var t = i.getElementsByName && i.getElementsByName(R).length === 2 + i.getElementsByName(R + 0).length;
                        return P.getIdNotName = !i.getElementById(R), D.removeChild(e), t }), C.attrHandle = r(function(e) {
                        return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== Y && "#" === e.firstChild.getAttribute("href") }) ? {} : { href: function(e) {
                            return e.getAttribute("href", 2) }, type: function(e) {
                            return e.getAttribute("type") } }, P.getIdNotName ? (C.find.ID = function(e, t) {
                        if (typeof t.getElementById !== Y && !L) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : [] } }, C.filter.ID = function(e) {
                        var t = e.replace(we, xe);
                        return function(e) {
                            return e.getAttribute("id") === t } }) : (C.find.ID = function(e, n) {
                        if (typeof n.getElementById !== Y && !L) {
                            var i = n.getElementById(e);
                            return i ? i.id === e || typeof i.getAttributeNode !== Y && i.getAttributeNode("id").value === e ? [i] : t : [] } }, C.filter.ID = function(e) {
                        var t = e.replace(we, xe);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                            return n && n.value === t } }), C.find.TAG = P.tagNameNoComments ? function(e, t) {
                        if (typeof t.getElementsByTagName !== Y) return t.getElementsByTagName(e) } : function(e, t) {
                        var n, i = [],
                            o = 0,
                            r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = r[o]; o++) 1 === n.nodeType && i.push(n);
                            return i }
                        return r }, C.find.NAME = P.getByName && function(e, t) {
                        if (typeof t.getElementsByName !== Y) return t.getElementsByName(name) }, C.find.CLASS = P.getByClassName && function(e, t) {
                        if (typeof t.getElementsByClassName !== Y && !L) return t.getElementsByClassName(e) }, O = [], j = [":focus"], (P.qsa = n(i.querySelectorAll)) && (r(function(e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || j.push("\\[" + ee + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || j.push(":checked") }), r(function(e) { e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && j.push("[*^$]=" + ee + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:") })), (P.matchesSelector = n(F = D.matchesSelector || D.mozMatchesSelector || D.webkitMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(e) { P.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), O.push("!=", re) }), j = new RegExp(j.join("|")), O = new RegExp(O.join("|")), H = n(D.contains) || D.compareDocumentPosition ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))) } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1 }, B = D.compareDocumentPosition ? function(e, t) {
                        var n;
                        return e === t ? (E = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === i || H(z, e) ? -1 : t === i || H(z, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function(e, t) {
                        var n, o = 0,
                            r = e.parentNode,
                            a = t.parentNode,
                            l = [e],
                            u = [t];
                        if (e === t) return E = !0, 0;
                        if (e.sourceIndex && t.sourceIndex) return (~t.sourceIndex || X) - (H(z, e) && ~e.sourceIndex || X);
                        if (!r || !a) return e === i ? -1 : t === i ? 1 : r ? -1 : a ? 1 : 0;
                        if (r === a) return s(e, t);
                        for (n = e; n = n.parentNode;) l.unshift(n);
                        for (n = t; n = n.parentNode;) u.unshift(n);
                        for (; l[o] === u[o];) o++;
                        return o ? s(l[o], u[o]) : l[o] === z ? -1 : u[o] === z ? 1 : 0 }, E = !1, [0, 0].sort(B), P.detectDuplicates = E, M) : M }, a.matches = function(e, t) {
                    return a(e, null, null, t) }, a.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== M && I(e), t = t.replace(be, "='$1']"), P.matchesSelector && !L && (!O || !O.test(t)) && !j.test(t)) try {
                        var n = F.call(e, t);
                        if (n || P.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (i) {}
                    return a(t, M, null, [e]).length > 0 }, a.contains = function(e, t) {
                    return (e.ownerDocument || e) !== M && I(e), H(e, t) }, a.attr = function(e, t) {
                    var n;
                    return (e.ownerDocument || e) !== M && I(e), L || (t = t.toLowerCase()), (n = C.attrHandle[t]) ? n(e) : L || P.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null }, a.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e) }, a.uniqueSort = function(e) {
                    var t, n = [],
                        i = 1,
                        o = 0;
                    if (E = !P.detectDuplicates, e.sort(B), E) {
                        for (; t = e[i]; i++) t === e[i - 1] && (o = n.push(i));
                        for (; o--;) e.splice(n[o], 1) }
                    return e }, _ = a.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += _(e) } else if (3 === o || 4 === o) return e.nodeValue } else
                        for (; t = e[i]; i++) n += _(t);
                    return n }, C = a.selectors = { cacheLength: 50, createPseudo: o, match: pe, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) {
                            return e[1] = e[1].replace(we, xe), e[3] = (e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e }, PSEUDO: function(e) {
                            var t, n = !e[5] && e[2];
                            return pe.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ue.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) {
                            return "*" === e ? function() {
                                return !0 } : (e = e.replace(we, xe).toLowerCase(), function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e }) }, CLASS: function(e) {
                            var t = q[e + " "];
                            return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && q(e, function(e) {
                                return t.test(e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "") }) }, ATTR: function(e, t, n) {
                            return function(i) {
                                var o = a.attr(i, e);
                                return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.substr(o.length - n.length) === n : "~=" === t ? (" " + o + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.substr(0, n.length + 1) === n + "-")) } }, CHILD: function(e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === i && 0 === o ? function(e) {
                                return !!e.parentNode } : function(t, n, l) {
                                var u, c, p, d, f, h, m = r !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !l && !s;
                                if (g) {
                                    if (r) {
                                        for (; m;) {
                                            for (p = t; p = p[m];)
                                                if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                            h = m = "only" === e && !h && "nextSibling" }
                                        return !0 }
                                    if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (c = g[R] || (g[R] = {}), u = c[e] || [], f = u[0] === U && u[1], d = u[0] === U && u[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (d = f = 0) || h.pop();)
                                            if (1 === p.nodeType && ++d && p === t) { c[e] = [U, f, d];
                                                break } } else if (y && (u = (t[R] || (t[R] = {}))[e]) && u[0] === U) d = u[1];
                                    else
                                        for (;
                                            (p = ++f && p && p[m] || (d = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++d || (y && ((p[R] || (p[R] = {}))[e] = [U, d]), p !== t)););
                                    return d -= o, d === i || d % i === 0 && d / i >= 0 } } }, PSEUDO: function(e, t) {
                            var n, i = C.pseudos[e] || C.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                            return i[R] ? i(t) : i.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
                                for (var o, r = i(e, t), a = r.length; a--;) o = Q.call(e, r[a]), e[o] = !(n[o] = r[a]) }) : function(e) {
                                return i(e, 0, n) }) : i } }, pseudos: { not: o(function(e) {
                            var t = [],
                                n = [],
                                i = N(e.replace(ae, "$1"));
                            return i[R] ? o(function(e, t, n, o) {
                                for (var r, a = i(e, null, o, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r)) }) : function(e, o, r) {
                                return t[0] = e, i(t, null, r, n), !n.pop() } }), has: o(function(e) {
                            return function(t) {
                                return a(e, t).length > 0 } }), contains: o(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || _(t)).indexOf(e) > -1 } }), lang: o(function(e) {
                            return ce.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = L ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1 } }), target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id }, root: function(e) {
                            return e === D }, focus: function(e) {
                            return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function(e) {
                            return e.disabled === !1 }, disabled: function(e) {
                            return e.disabled === !0 }, checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0 }, parent: function(e) {
                            return !C.pseudos.empty(e) }, header: function(e) {
                            return ve.test(e.nodeName) }, input: function(e) {
                            return ge.test(e.nodeName) }, button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t }, text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) }, first: c(function() {
                            return [0] }), last: c(function(e, t) {
                            return [t - 1] }), eq: c(function(e, t, n) {
                            return [n < 0 ? n + t : n] }), even: c(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e }), odd: c(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e }), lt: c(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                            return e }), gt: c(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e }) } };
                for (T in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) C.pseudos[T] = l(T);
                for (T in { submit: !0, reset: !0 }) C.pseudos[T] = u(T);
                N = a.compile = function(e, t) {
                    var n, i = [],
                        o = [],
                        r = $[e + " "];
                    if (!r) {
                        for (t || (t = p(e)), n = t.length; n--;) r = v(t[n]), r[R] ? i.push(r) : o.push(r);
                        r = $(e, y(o, i)) }
                    return r }, C.pseudos.nth = C.pseudos.eq, C.filters = x.prototype = C.pseudos, C.setFilters = new x, I(), a.attr = de.attr, de.find = a, de.expr = a.selectors, de.expr[":"] = de.expr.pseudos, de.unique = a.uniqueSort, de.text = a.getText, de.isXMLDoc = a.isXML, de.contains = a.contains }(r);
        var qe = /Until$/,
            We = /^(?:parents|prev(?:Until|All))/,
            $e = /^.[^:#\[\.,]*$/,
            Ye = de.expr.match.needsContext,
            Xe = { children: !0, contents: !0, next: !0, prev: !0 };
        de.fn.extend({ find: function(e) {
                var t, n, i;
                if ("string" != typeof e) return i = this, this.pushStack(de(e).filter(function() {
                    for (t = 0; t < i.length; t++)
                        if (de.contains(i[t], this)) return !0 }));
                for (n = [], t = 0; t < this.length; t++) de.find(e, this[t], n);
                return n = this.pushStack(de.unique(n)), n.selector = (this.selector ? this.selector + " " : "") + e, n }, has: function(e) {
                var t, n = de(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; t < i; t++)
                        if (de.contains(this, n[t])) return !0 }) }, not: function(e) {
                return this.pushStack(g(this, e, !1)) }, filter: function(e) {
                return this.pushStack(g(this, e, !0)) }, is: function(e) {
                return !!e && ("string" == typeof e ? Ye.test(e) ? de(e, this.context).index(this[0]) >= 0 : de.filter(e, this).length > 0 : this.filter(e).length > 0) }, closest: function(e, t) {
                for (var n, i = 0, o = this.length, r = [], a = Ye.test(e) || "string" != typeof e ? de(e, t || this.context) : 0; i < o; i++)
                    for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                        if (a ? a.index(n) > -1 : de.find.matchesSelector(n, e)) { r.push(n);
                            break }
                        n = n.parentNode }
                return this.pushStack(r.length > 1 ? de.unique(r) : r) }, index: function(e) {
                return e ? "string" == typeof e ? de.inArray(this[0], de(e)) : de.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) {
                var n = "string" == typeof e ? de(e, t) : de.makeArray(e && e.nodeType ? [e] : e),
                    i = de.merge(this.get(), n);
                return this.pushStack(de.unique(i)) }, addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), de.fn.andSelf = de.fn.addBack, de.each({ parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null }, parents: function(e) {
                return de.dir(e, "parentNode") }, parentsUntil: function(e, t, n) {
                return de.dir(e, "parentNode", n) }, next: function(e) {
                return m(e, "nextSibling") }, prev: function(e) {
                return m(e, "previousSibling") }, nextAll: function(e) {
                return de.dir(e, "nextSibling") }, prevAll: function(e) {
                return de.dir(e, "previousSibling") }, nextUntil: function(e, t, n) {
                return de.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) {
                return de.dir(e, "previousSibling", n) }, siblings: function(e) {
                return de.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) {
                return de.sibling(e.firstChild) }, contents: function(e) {
                return de.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : de.merge([], e.childNodes) } }, function(e, t) { de.fn[e] = function(n, i) {
                var o = de.map(this, t, n);
                return qe.test(e) || (i = n), i && "string" == typeof i && (o = de.filter(i, o)), o = this.length > 1 && !Xe[e] ? de.unique(o) : o, this.length > 1 && We.test(e) && (o = o.reverse()), this.pushStack(o) } }), de.extend({ filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), 1 === t.length ? de.find.matchesSelector(t[0], e) ? [t[0]] : [] : de.find.matches(e, t) }, dir: function(e, t, n) {
                for (var i = [], o = e[t]; o && 9 !== o.nodeType && (n === a || 1 !== o.nodeType || !de(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
                return i }, sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n } });
        var Je = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ge = / jQuery\d+="(?:null|\d+)"/g,
            Ke = new RegExp("<(?:" + Je + ")[\\s/>]", "i"),
            Ve = /^\s+/,
            Qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            et = /<([\w:]+)/,
            tt = /<tbody/i,
            nt = /<|&#?\w+;/,
            it = /<(?:script|style|link)/i,
            ot = /^(?:checkbox|radio)$/i,
            rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            at = /^$|\/(?:java|ecma)script/i,
            st = /^true\/(.*)/,
            lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ut = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: de.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
            ct = v(V),
            pt = ct.appendChild(V.createElement("div"));
        ut.optgroup = ut.option, ut.tbody = ut.tfoot = ut.colgroup = ut.caption = ut.thead, ut.th = ut.td, de.fn.extend({ text: function(e) {
                return de.access(this, function(e) {
                    return e === a ? de.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e)) }, null, e, arguments.length) }, wrapAll: function(e) {
                if (de.isFunction(e)) return this.each(function(t) { de(this).wrapAll(e.call(this, t)) });
                if (this[0]) {
                    var t = de(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e }).append(this) }
                return this }, wrapInner: function(e) {
                return de.isFunction(e) ? this.each(function(t) { de(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                    var t = de(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) {
                var t = de.isFunction(e);
                return this.each(function(n) { de(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function() {
                return this.parent().each(function() { de.nodeName(this, "body") || de(this).replaceWith(this.childNodes) }).end() }, append: function() {
                return this.domManip(arguments, !0, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(e) }) }, prepend: function() {
                return this.domManip(arguments, !0, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(e, this.firstChild) }) }, before: function() {
                return this.domManip(arguments, !1, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() {
                return this.domManip(arguments, !1, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function(e, t) {
                for (var n, i = 0; null != (n = this[i]); i++)(!e || de.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || de.cleanData(C(n)), n.parentNode && (t && de.contains(n.ownerDocument, n) && x(C(n, "script")), n.parentNode.removeChild(n)));
                return this }, empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && de.cleanData(C(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && de.nodeName(e, "select") && (e.options.length = 0) }
                return this }, clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return de.clone(this, e, t) }) }, html: function(e) {
                return de.access(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (e === a) return 1 === t.nodeType ? t.innerHTML.replace(Ge, "") : a;
                    if ("string" == typeof e && !it.test(e) && (de.support.htmlSerialize || !Ke.test(e)) && (de.support.leadingWhitespace || !Ve.test(e)) && !ut[(et.exec(e) || ["", ""])[1].toLowerCase()]) { e = e.replace(Qe, "<$1></$2>");
                        try {
                            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (de.cleanData(C(t, !1)), t.innerHTML = e);
                            t = 0 } catch (o) {} }
                    t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function(e) {
                var t = de.isFunction(e);
                return t || "string" == typeof e || (e = de(e).not(this).detach()), this.domManip([e], !0, function(e) {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    (n && 1 === this.nodeType || 11 === this.nodeType) && (de(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e)) }) }, detach: function(e) {
                return this.remove(e, !0) }, domManip: function(e, t, n) { e = re.apply([], e);
                var i, o, r, s, l, u, c = 0,
                    p = this.length,
                    d = this,
                    f = p - 1,
                    h = e[0],
                    m = de.isFunction(h);
                if (m || !(p <= 1 || "string" != typeof h || de.support.checkClone) && rt.test(h)) return this.each(function(i) {
                    var o = d.eq(i);
                    m && (e[0] = h.call(this, i, t ? o.html() : a)), o.domManip(e, t, n) });
                if (p && (i = de.buildFragment(e, this[0].ownerDocument, !1, this), o = i.firstChild, 1 === i.childNodes.length && (i = o), o)) {
                    for (t = t && de.nodeName(o, "tr"), r = de.map(C(i, "script"), b), s = r.length; c < p; c++) l = i, c !== f && (l = de.clone(l, !0, !0), s && de.merge(r, C(l, "script"))), n.call(t && de.nodeName(this[c], "table") ? y(this[c], "tbody") : this[c], l, c);
                    if (s)
                        for (u = r[r.length - 1].ownerDocument, de.map(r, w), c = 0; c < s; c++) l = r[c], at.test(l.type || "") && !de._data(l, "globalEval") && de.contains(u, l) && (l.src ? de.ajax({ url: l.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : de.globalEval((l.text || l.textContent || l.innerHTML || "").replace(lt, "")));
                    i = o = null }
                return this } }), de.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { de.fn[e] = function(e) {
                for (var n, i = 0, o = [], r = de(e), a = r.length - 1; i <= a; i++) n = i === a ? this : this.clone(!0), de(r[i])[t](n), ae.apply(o, n.get());
                return this.pushStack(o) } }), de.extend({ clone: function(e, t, n) {
                var i, o, r, a, s, l = de.contains(e.ownerDocument, e);
                if (de.support.html5Clone || de.isXMLDoc(e) || !Ke.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (pt.innerHTML = e.outerHTML, pt.removeChild(s = pt.firstChild)), !(de.support.noCloneEvent && de.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || de.isXMLDoc(e)))
                    for (i = C(s), o = C(e), a = 0; null != (r = o[a]); ++a) i[a] && A(r, i[a]);
                if (t)
                    if (n)
                        for (o = o || C(e), i = i || C(s), a = 0; null != (r = o[a]); a++) T(r, i[a]);
                    else T(e, s);
                return i = C(s, "script"), i.length > 0 && x(i, !l && C(e, "script")), i = o = r = null, s }, buildFragment: function(e, t, n, i) {
                for (var o, r, a, s, l, u, c, p = e.length, d = v(t), f = [], h = 0; h < p; h++)
                    if (r = e[h], r || 0 === r)
                        if ("object" === de.type(r)) de.merge(f, r.nodeType ? [r] : r);
                        else if (nt.test(r)) {
                    for (s = s || d.appendChild(t.createElement("div")), a = (et.exec(r) || ["", ""])[1].toLowerCase(), l = ut[a] || ut._default, s.innerHTML = l[1] + r.replace(Qe, "<$1></$2>") + l[2], c = l[0]; c--;) s = s.lastChild;
                    if (!de.support.leadingWhitespace && Ve.test(r) && f.push(t.createTextNode(Ve.exec(r)[0])), !de.support.tbody)
                        for (r = "table" !== a || tt.test(r) ? "<table>" !== l[1] || tt.test(r) ? 0 : s : s.firstChild, c = r && r.childNodes.length; c--;) de.nodeName(u = r.childNodes[c], "tbody") && !u.childNodes.length && r.removeChild(u);
                    for (de.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = d.lastChild } else f.push(t.createTextNode(r));
                for (s && d.removeChild(s), de.support.appendChecked || de.grep(C(f, "input"), _), h = 0; r = f[h++];)
                    if ((!i || de.inArray(r, i) === -1) && (o = de.contains(r.ownerDocument, r), s = C(d.appendChild(r), "script"), o && x(s), n))
                        for (c = 0; r = s[c++];) at.test(r.type || "") && n.push(r);
                return s = null, d }, cleanData: function(e, t) {
                for (var n, i, o, r, a = 0, s = de.expando, l = de.cache, u = de.support.deleteExpando, c = de.event.special; null != (o = e[a]); a++)
                    if ((t || de.acceptData(o)) && (i = o[s], n = i && l[i])) {
                        if (n.events)
                            for (r in n.events) c[r] ? de.event.remove(o, r) : de.removeEvent(o, r, n.handle);
                        l[i] && (delete l[i], u ? delete o[s] : "undefined" != typeof o.removeAttribute ? o.removeAttribute(s) : o[s] = null, ie.push(i)) } } });
        var dt, ft, ht, mt = /alpha\([^)]*\)/i,
            gt = /opacity\s*=\s*([^)]*)/,
            vt = /^(top|right|bottom|left)$/,
            yt = /^(none|table(?!-c[ea]).+)/,
            bt = /^margin/,
            wt = new RegExp("^(" + fe + ")(.*)$", "i"),
            xt = new RegExp("^(" + fe + ")(?!px)[a-z%]+$", "i"),
            Tt = new RegExp("^([+-])=(" + fe + ")", "i"),
            At = { BODY: "block" },
            Ct = { position: "absolute", visibility: "hidden", display: "block" },
            _t = { letterSpacing: 0, fontWeight: 400 },
            kt = ["Top", "Right", "Bottom", "Left"],
            Nt = ["Webkit", "O", "Moz", "ms"];
        de.fn.extend({ css: function(e, t) {
                return de.access(this, function(e, t, n) {
                    var i, o, r = {},
                        s = 0;
                    if (de.isArray(t)) {
                        for (i = ft(e), o = t.length; s < o; s++) r[t[s]] = de.css(e, t[s], !1, i);
                        return r }
                    return n !== a ? de.style(e, t, n) : de.css(e, t) }, e, t, arguments.length > 1) }, show: function() {
                return E(this, !0) }, hide: function() {
                return E(this) }, toggle: function(e) {
                var t = "boolean" == typeof e;
                return this.each(function() {
                    (t ? e : N(this)) ? de(this).show(): de(this).hide() }) } }), de.extend({ cssHooks: { opacity: { get: function(e, t) {
                        if (t) {
                            var n = dt(e, "opacity");
                            return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": de.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, s, l = de.camelCase(t),
                        u = e.style;
                    if (t = de.cssProps[l] || (de.cssProps[l] = k(u, l)), s = de.cssHooks[t] || de.cssHooks[l], n === a) return s && "get" in s && (o = s.get(e, !1, i)) !== a ? o : u[t];
                    if (r = typeof n, "string" === r && (o = Tt.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(de.css(e, t)), r = "number"), !(null == n || "number" === r && isNaN(n) || ("number" !== r || de.cssNumber[l] || (n += "px"), de.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && (n = s.set(e, n, i)) === a))) try { u[t] = n } catch (c) {} } }, css: function(e, t, n, i) {
                var o, r, s, l = de.camelCase(t);
                return t = de.cssProps[l] || (de.cssProps[l] = k(e.style, l)), s = de.cssHooks[t] || de.cssHooks[l], s && "get" in s && (o = s.get(e, !0, n)), o === a && (o = dt(e, t, i)), "normal" === o && t in _t && (o = _t[t]), n ? (r = parseFloat(o), n === !0 || de.isNumeric(r) ? r || 0 : o) : o }, swap: function(e, t, n, i) {
                var o, r, a = {};
                for (r in t) a[r] = e.style[r], e.style[r] = t[r];
                o = n.apply(e, i || []);
                for (r in t) e.style[r] = a[r];
                return o } }), r.getComputedStyle ? (ft = function(e) {
            return r.getComputedStyle(e, null) }, dt = function(e, t, n) {
            var i, o, r, s = n || ft(e),
                l = s ? s.getPropertyValue(t) || s[t] : a,
                u = e.style;
            return s && ("" !== l || de.contains(e.ownerDocument, e) || (l = de.style(e, t)), xt.test(l) && bt.test(t) && (i = u.width, o = u.minWidth, r = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = r)), l }) : V.documentElement.currentStyle && (ft = function(e) {
            return e.currentStyle }, dt = function(e, t, n) {
            var i, o, r, s = n || ft(e),
                l = s ? s[t] : a,
                u = e.style;
            return null == l && u && u[t] && (l = u[t]), xt.test(l) && !vt.test(t) && (i = u.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), u.left = "fontSize" === t ? "1em" : l, l = u.pixelLeft + "px", u.left = i, r && (o.left = r)), "" === l ? "auto" : l }), de.each(["height", "width"], function(e, t) { de.cssHooks[t] = { get: function(e, n, i) {
                    if (n) return 0 === e.offsetWidth && yt.test(de.css(e, "display")) ? de.swap(e, Ct, function() {
                        return M(e, t, i) }) : M(e, t, i) }, set: function(e, n, i) {
                    var o = i && ft(e);
                    return S(e, n, i ? I(e, t, i, de.support.boxSizing && "border-box" === de.css(e, "boxSizing", !1, o), o) : 0) } } }), de.support.opacity || (de.cssHooks.opacity = { get: function(e, t) {
                return gt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    o = de.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === de.trim(r.replace(mt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = mt.test(r) ? r.replace(mt, o) : r + " " + o) } }), de(function() { de.support.reliableMarginRight || (de.cssHooks.marginRight = { get: function(e, t) {
                    if (t) return de.swap(e, { display: "inline-block" }, dt, [e, "marginRight"]) } }), !de.support.pixelPosition && de.fn.position && de.each(["top", "left"], function(e, t) { de.cssHooks[t] = { get: function(e, n) {
                        if (n) return n = dt(e, t), xt.test(n) ? de(e).position()[t] + "px" : n } } }) }), de.expr && de.expr.filters && (de.expr.filters.hidden = function(e) {
            return 0 === e.offsetWidth && 0 === e.offsetHeight || !de.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || de.css(e, "display")) }, de.expr.filters.visible = function(e) {
            return !de.expr.filters.hidden(e) }), de.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
            de.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + kt[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, bt.test(e) || (de.cssHooks[e + t].set = S)
        });
        var Et = /%20/g,
            St = /\[\]$/,
            It = /\r?\n/g,
            Mt = /^(?:submit|button|image|reset)$/i,
            Dt = /^(?:input|select|textarea|keygen)/i;
        de.fn.extend({ serialize: function() {
                return de.param(this.serializeArray()) }, serializeArray: function() {
                return this.map(function() {
                    var e = de.prop(this, "elements");
                    return e ? de.makeArray(e) : this }).filter(function() {
                    var e = this.type;
                    return this.name && !de(this).is(":disabled") && Dt.test(this.nodeName) && !Mt.test(e) && (this.checked || !ot.test(e)) }).map(function(e, t) {
                    var n = de(this).val();
                    return null == n ? null : de.isArray(n) ? de.map(n, function(e) {
                        return { name: t.name, value: e.replace(It, "\r\n") } }) : { name: t.name, value: n.replace(It, "\r\n") } }).get() } }), de.param = function(e, t) {
            var n, i = [],
                o = function(e, t) { t = de.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
            if (t === a && (t = de.ajaxSettings && de.ajaxSettings.traditional), de.isArray(e) || e.jquery && !de.isPlainObject(e)) de.each(e, function() { o(this.name, this.value) });
            else
                for (n in e) j(n, e[n], t, o);
            return i.join("&").replace(Et, "+") };
        var Lt, jt, Ot = de.now(),
            Ft = /\?/,
            Ht = /#.*$/,
            Bt = /([?&])_=[^&]*/,
            Rt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            zt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Pt = /^(?:GET|HEAD)$/,
            Ut = /^\/\//,
            Zt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            qt = de.fn.load,
            Wt = {},
            $t = {},
            Yt = "*/".concat("*");
        try { jt = Q.href } catch (Xt) { jt = V.createElement("a"), jt.href = "", jt = jt.href }
        Lt = Zt.exec(jt.toLowerCase()) || [], de.fn.load = function(e, t, n) {
            if ("string" != typeof e && qt) return qt.apply(this, arguments);
            var i, o, r, s = this,
                l = e.indexOf(" ");
            return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), de.isFunction(t) ? (n = t, t = a) : t && "object" == typeof t && (o = "POST"), s.length > 0 && de.ajax({ url: e, type: o, dataType: "html", data: t }).done(function(e) { r = arguments, s.html(i ? de("<div>").append(de.parseHTML(e)).find(i) : e) }).complete(n && function(e, t) { s.each(n, r || [e.responseText, t, e]) }), this }, de.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { de.fn[t] = function(e) {
                return this.on(t, e) } }), de.each(["get", "post"], function(e, t) { de[t] = function(e, n, i, o) {
                return de.isFunction(n) && (o = o || i, i = n, n = a), de.ajax({ url: e, type: t, dataType: o, data: n, success: i }) } }), de.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: jt, type: "GET", isLocal: zt.test(Lt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Yt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": r.String, "text html": !0, "text json": de.parseJSON, "text xml": de.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) {
                return t ? H(H(e, de.ajaxSettings), t) : H(de.ajaxSettings, e) }, ajaxPrefilter: O(Wt), ajaxTransport: O($t), ajax: function(e, t) {
                function n(e, t, n, s) {
                    var u, p, y, b, x, A = t;
                    2 !== w && (w = 2, l && clearTimeout(l), i = a, r = s || "", T.readyState = e > 0 ? 4 : 0, n && (b = B(d, T, n)), e >= 200 && e < 300 || 304 === e ? (d.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (de.lastModified[o] = x), x = T.getResponseHeader("etag"), x && (de.etag[o] = x)), 304 === e ? (u = !0, A = "notmodified") : (u = R(d, b), A = u.state, p = u.data, y = u.error, u = !y)) : (y = A, !e && A || (A = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || A) + "", u ? m.resolveWith(f, [p, A, T]) : m.rejectWith(f, [T, A, y]), T.statusCode(v), v = a, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [T, d, u ? p : y]), g.fireWith(f, [T, A]), c && (h.trigger("ajaxComplete", [T, d]), --de.active || de.event.trigger("ajaxStop"))) } "object" == typeof e && (t = e, e = a), t = t || {};
                var i, o, r, s, l, u, c, p, d = de.ajaxSetup({}, t),
                    f = d.context || d,
                    h = d.context && (f.nodeType || f.jquery) ? de(f) : de.event,
                    m = de.Deferred(),
                    g = de.Callbacks("once memory"),
                    v = d.statusCode || {},
                    y = {},
                    b = {},
                    w = 0,
                    x = "canceled",
                    T = { readyState: 0, getResponseHeader: function(e) {
                            var t;
                            if (2 === w) {
                                if (!s)
                                    for (s = {}; t = Rt.exec(r);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()] }
                            return null == t ? null : t }, getAllResponseHeaders: function() {
                            return 2 === w ? r : null }, setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return w || (e = b[n] = b[n] || e, y[e] = t), this }, overrideMimeType: function(e) {
                            return w || (d.mimeType = e), this }, statusCode: function(e) {
                            var t;
                            if (e)
                                if (w < 2)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else T.always(e[T.status]);
                            return this }, abort: function(e) {
                            var t = e || x;
                            return i && i.abort(t), n(0, t), this } };
                if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, d.url = ((e || d.url || jt) + "").replace(Ht, "").replace(Ut, Lt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = de.trim(d.dataType || "*").toLowerCase().match(he) || [""], null == d.crossDomain && (u = Zt.exec(d.url.toLowerCase()), d.crossDomain = !(!u || u[1] === Lt[1] && u[2] === Lt[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (Lt[3] || ("http:" === Lt[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = de.param(d.data, d.traditional)), F(Wt, d, t, T), 2 === w) return T;
                c = d.global, c && 0 === de.active++ && de.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Pt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Ft.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Bt.test(o) ? o.replace(Bt, "$1_=" + Ot++) : o + (Ft.test(o) ? "&" : "?") + "_=" + Ot++)), d.ifModified && (de.lastModified[o] && T.setRequestHeader("If-Modified-Since", de.lastModified[o]), de.etag[o] && T.setRequestHeader("If-None-Match", de.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : d.accepts["*"]);
                for (p in d.headers) T.setRequestHeader(p, d.headers[p]);
                if (d.beforeSend && (d.beforeSend.call(f, T, d) === !1 || 2 === w)) return T.abort();
                x = "abort";
                for (p in { success: 1, error: 1, complete: 1 }) T[p](d[p]);
                if (i = F($t, d, t, T)) { T.readyState = 1, c && h.trigger("ajaxSend", [T, d]), d.async && d.timeout > 0 && (l = setTimeout(function() { T.abort("timeout") }, d.timeout));
                    try { w = 1, i.send(y, n) } catch (A) {
                        if (!(w < 2)) throw A;
                        n(-1, A) } } else n(-1, "No Transport");
                return T }, getScript: function(e, t) {
                return de.get(e, a, t, "script") }, getJSON: function(e, t, n) {
                return de.get(e, t, n, "json") } }), de.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) {
                    return de.globalEval(e), e } } }), de.ajaxPrefilter("script", function(e) { e.cache === a && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), de.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = V.head || de("head")[0] || V.documentElement;
                return { send: function(i, o) { t = V.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success")) }, n.insertBefore(t, n.firstChild) }, abort: function() { t && t.onload(a, !0) } } } });
        var Jt = [],
            Gt = /(=)\?(?=&|$)|\?\?/;
        de.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
                var e = Jt.pop() || de.expando + "_" + Ot++;
                return this[e] = !0, e } }), de.ajaxPrefilter("json jsonp", function(e, t, n) {
            var i, o, s, l = e.jsonp !== !1 && (Gt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
            if (l || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = de.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, l ? e[l] = e[l].replace(Gt, "$1" + i) : e.jsonp !== !1 && (e.url += (Ft.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return s || de.error(i + " was not called"), s[0] }, e.dataTypes[0] = "json", o = r[i], r[i] = function() { s = arguments }, n.always(function() { r[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Jt.push(i)), s && de.isFunction(o) && o(s[0]), s = o = a }), "script" });
        var Kt, Vt, Qt = 0,
            en = r.ActiveXObject && function() {
                var e;
                for (e in Kt) Kt[e](a, !0) };
        de.ajaxSettings.xhr = r.ActiveXObject ? function() {
            return !this.isLocal && z() || P() } : z, Vt = de.ajaxSettings.xhr(), de.support.cors = !!Vt && "withCredentials" in Vt, Vt = de.support.ajax = !!Vt, Vt && de.ajaxTransport(function(e) {
            if (!e.crossDomain || de.support.cors) {
                var t;
                return { send: function(n, i) {
                        var o, s, l = e.xhr();
                        if (e.username ? l.open(e.type, e.url, e.async, e.username, e.password) : l.open(e.type, e.url, e.async), e.xhrFields)
                            for (s in e.xhrFields) l[s] = e.xhrFields[s];
                        e.mimeType && l.overrideMimeType && l.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in n) l.setRequestHeader(s, n[s]) } catch (u) {}
                        l.send(e.hasContent && e.data || null), t = function(n, r) {
                            var s, u, c, p, d;
                            try {
                                if (t && (r || 4 === l.readyState))
                                    if (t = a, o && (l.onreadystatechange = de.noop, en && delete Kt[o]), r) 4 !== l.readyState && l.abort();
                                    else { p = {}, s = l.status, d = l.responseXML, c = l.getAllResponseHeaders(), d && d.documentElement && (p.xml = d), "string" == typeof l.responseText && (p.text = l.responseText);
                                        try { u = l.statusText } catch (f) { u = "" }
                                        s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404 } } catch (h) { r || i(-1, h) }
                            p && i(s, u, p, c) }, e.async ? 4 === l.readyState ? setTimeout(t) : (o = ++Qt, en && (Kt || (Kt = {}, de(r).unload(en)), Kt[o] = t), l.onreadystatechange = t) : t() }, abort: function() { t && t(a, !0) } } } });
        var tn, nn, on = /^(?:toggle|show|hide)$/,
            rn = new RegExp("^(?:([+-])=|)(" + fe + ")([a-z%]*)$", "i"),
            an = /queueHooks$/,
            sn = [$],
            ln = { "*": [function(e, t) {
                    var n, i, o = this.createTween(e, t),
                        r = rn.exec(t),
                        a = o.cur(),
                        s = +a || 0,
                        l = 1,
                        u = 20;
                    if (r) {
                        if (n = +r[2], i = r[3] || (de.cssNumber[e] ? "" : "px"), "px" !== i && s) { s = de.css(o.elem, e, !0) || n || 1;
                            do l = l || ".5", s /= l, de.style(o.elem, e, s + i); while (l !== (l = o.cur() / a) && 1 !== l && --u) }
                        o.unit = i, o.start = s, o.end = r[1] ? s + (r[1] + 1) * n : n }
                    return o }] };
        de.Animation = de.extend(q, { tweener: function(e, t) { de.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ln[n] = ln[n] || [], ln[n].unshift(t) }, prefilter: function(e, t) { t ? sn.unshift(e) : sn.push(e) } }), de.Tween = Y, Y.prototype = { constructor: Y, init: function(e, t, n, i, o, r) { this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (de.cssNumber[n] ? "" : "px") }, cur: function() {
                var e = Y.propHooks[this.prop];
                return e && e.get ? e.get(this) : Y.propHooks._default.get(this) }, run: function(e) {
                var t, n = Y.propHooks[this.prop];
                return this.options.duration ? this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Y.propHooks._default.set(this), this } }, Y.prototype.init.prototype = Y.prototype, Y.propHooks = { _default: { get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = de.css(e.elem, e.prop, "auto"), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { de.fx.step[e.prop] ? de.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[de.cssProps[e.prop]] || de.cssHooks[e.prop]) ? de.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, Y.propHooks.scrollTop = Y.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, de.each(["toggle", "show", "hide"], function(e, t) {
            var n = de.fn[t];
            de.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(X(t, !0), e, i, o) } }), de.fn.extend({ fadeTo: function(e, t, n, i) {
                return this.filter(N).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) }, animate: function(e, t, n, i) {
                var o = de.isEmptyObject(e),
                    r = de.speed(t, n, i),
                    a = function() {
                        var t = q(this, de.extend({}, e), r);
                        a.finish = function() { t.stop(!0) }, (o || de._data(this, "finish")) && t.stop(!0) };
                return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a) }, stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n) };
                return "string" != typeof e && (n = t, t = e, e = a), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = de.timers,
                        a = de._data(this);
                    if (o) a[o] && a[o].stop && i(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && an.test(o) && i(a[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));!t && n || de.dequeue(this, e) }) }, finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = de._data(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = de.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, de.queue(this, e, []), o && o.cur && o.cur.finish && o.cur.finish.call(this), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish }) } }), de.each({ slideDown: X("show"), slideUp: X("hide"), slideToggle: X("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { de.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i) } }), de.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? de.extend({}, e) : { complete: n || !n && t || de.isFunction(e) && e, duration: e, easing: n && t || t && !de.isFunction(t) && t };
            return i.duration = de.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in de.fx.speeds ? de.fx.speeds[i.duration] : de.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() { de.isFunction(i.old) && i.old.call(this), i.queue && de.dequeue(this, i.queue) }, i }, de.easing = { linear: function(e) {
                return e }, swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2 } }, de.timers = [], de.fx = Y.prototype.init, de.fx.tick = function() {
            var e, t = de.timers,
                n = 0;
            for (tn = de.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || de.fx.stop(), tn = a }, de.fx.timer = function(e) { e() && de.timers.push(e) && de.fx.start() }, de.fx.interval = 13, de.fx.start = function() { nn || (nn = setInterval(de.fx.tick, de.fx.interval)) }, de.fx.stop = function() { clearInterval(nn), nn = null }, de.fx.speeds = { slow: 600, fast: 200, _default: 400 }, de.fx.step = {}, de.expr && de.expr.filters && (de.expr.filters.animated = function(e) {
            return de.grep(de.timers, function(t) {
                return e === t.elem }).length }), de.fn.offset = function(e) {
            if (arguments.length) return e === a ? this : this.each(function(t) { de.offset.setOffset(this, e, t) });
            var t, n, i = { top: 0, left: 0 },
                o = this[0],
                r = o && o.ownerDocument;
            if (r) return t = r.documentElement, de.contains(t, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = J(r), { top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : i }, de.offset = { setOffset: function(e, t, n) {
                var i = de.css(e, "position"); "static" === i && (e.style.position = "relative");
                var o, r, a = de(e),
                    s = a.offset(),
                    l = de.css(e, "top"),
                    u = de.css(e, "left"),
                    c = ("absolute" === i || "fixed" === i) && de.inArray("auto", [l, u]) > -1,
                    p = {},
                    d = {};
                c ? (d = a.position(), o = d.top, r = d.left) : (o = parseFloat(l) || 0, r = parseFloat(u) || 0), de.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + o), null != t.left && (p.left = t.left - s.left + r), "using" in t ? t.using.call(e, p) : a.css(p) } }, de.fn.extend({ position: function() {
                if (this[0]) {
                    var e, t, n = { top: 0, left: 0 },
                        i = this[0];
                    return "fixed" === de.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), de.nodeName(e[0], "html") || (n = e.offset()), n.top += de.css(e[0], "borderTopWidth", !0), n.left += de.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - de.css(i, "marginTop", !0), left: t.left - n.left - de.css(i, "marginLeft", !0) } } }, offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || V.documentElement; e && !de.nodeName(e, "html") && "static" === de.css(e, "position");) e = e.offsetParent;
                    return e || V.documentElement }) } }), de.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
            var n = /Y/.test(t);
            de.fn[e] = function(i) {
                return de.access(this, function(e, i, o) {
                    var r = J(e);
                    return o === a ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? de(r).scrollLeft() : o, n ? o : de(r).scrollTop()) : e[i] = o) }, e, i, arguments.length, null) } }), de.each({ Height: "height", Width: "width" }, function(e, t) { de.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) { de.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return de.access(this, function(t, n, i) {
                        var o;
                        return de.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : i === a ? de.css(t, n, s) : de.style(t, n, i, s) }, t, r ? i : a, r, null) } }) }), r.jQuery = r.$ = de, n(6) && n(6).jQuery && (i = [], o = function() {
            return de }.apply(t, i), !(o !== a && (e.exports = o)))
    }(window)
}, function(e, t, n) {
    var i, o, r, a, s, l, u, c, p, d, f = n(7),
        h = !1,
        m = function() { u = document.body.scrollHeight / document.body.scrollWidth, c = document.body.scrollWidth, p = 0 },
        g = function() { o && (document.getElementById("js-mobile-tagcloud").innerHTML = o.innerHTML), r && (document.getElementById("js-mobile-aboutme").innerHTML = f.decode(r.innerHTML)), a && (document.getElementById("js-mobile-friends").innerHTML = a.innerHTML), document.getElementById("js-mobile-menu").innerHTML = i.innerHTML },
        v = function() {
            var e = document.createElement("div");
            if (e.id = "viewer", e.className = "hide", i = document.getElementsByClassName("header-menu")[0], o = document.getElementById("js-tagcloud"), r = document.getElementById("js-aboutme"), a = document.getElementById("js-friends"), s = !!$(".js-archives-frame").length) {
                var t = $(".js-smart-menu").first().html();
                $(".header-menu ul").append('<li><a href="/archives">' + t + "</a></li>") }
            var n = '<span class="viewer-title">菜单</span><div class="viewer-div menu" id="js-mobile-menu"></div>',
                l = o ? '<span class="viewer-title">标签</span><div class="viewer-div tagcloud" id="js-mobile-tagcloud"></div>' : "",
                u = a ? '<span class="viewer-title">友情链接</span><div class="viewer-div friends" id="js-mobile-friends"></div>' : "",
                c = r ? '<span class="viewer-title">关于我</span><div class="viewer-div aboutme" id="js-mobile-aboutme"></div>' : "";
            e.innerHTML = '<div id="viewer-box">\t\t<div class="viewer-box-l">\t\t\t<div class="viewer-box-wrap">' + n + c + u + l + '</div>\t\t</div>\t\t<div class="viewer-box-r"></div>\t\t</div>', document.getElementsByTagName("body")[0].appendChild(e);
            var p = document.getElementById("viewer-box");
            d = p, p.style.height = document.body.scrollHeight + "px" },
        y = function(e, t) { document.getElementById("viewer").className = "", setTimeout(function() { d.className = "anm-swipe" }, 0), h = !0, document.ontouchstart = function(e) {
                if ("A" != e.target.tagName) return !1 } },
        b = function() { document.getElementById("viewer-box").className = "", h = !1, document.ontouchstart = function() {
                return !0 } },
        w = function() {
            var e = $("#mobile-nav .overlay"),
                t = $(".js-mobile-header");
            $("#container").scroll(function() {
                var n = document.documentElement.scrollTop + document.body.scrollTop + $(this).scrollTop();
                n >= 69 ? e.addClass("fixed") : e.removeClass("fixed"), n >= 160 ? t.removeClass("hide").addClass("fixed") : t.addClass("hide").removeClass("fixed") }), t[0].addEventListener("touchstart", function() { $("html, body").animate({ scrollTop: 0 }, "slow") }, !1), document.getElementById("viewer-box").addEventListener("webkitTransitionEnd", function() { 0 == h && (document.getElementById("viewer").className = "hide", h = !0) }, !1), l.addEventListener("touchend", function() { y() }, !1);
            var n, i, o = document.getElementsByClassName("viewer-box-r")[0];
            o.addEventListener("touchstart", function() { n = +new Date }, !1), o.addEventListener("touchend", function() { i = +new Date, i - n < 300 && b(), n = 0, i = 0 }, !1) };
    e.exports = { init: function() { l = document.getElementsByClassName("slider-trigger")[0], m(), v(), g(), w() } } }, function(e, t) {
    function n() {
        var e = $(".tagcloud a");
        e.css({ "font-size": "12px" });
        for (var t = 0, n = e.length; t < n; t++) {
            var i = e.eq(t).html().length % 5 + 1;
            e[t].className = "", e.eq(t).addClass("color" + i) } }
    e.exports = { init: n } }, function(e, t, n) {
    function i(e) { $(".btn-wrap li").eq(e).trigger("click") }

    function o() { l = $(".mid-col"), u = $(".tools-col"), $(".btn-wrap li").click(function() {
            var e = $(this).index();
            window.localStorage.setItem(p, e), $(".btn-wrap li").removeClass("chose"), $(this).addClass("chose"), $(".tools-section").removeClass("chose"), $(".tools-wrap .tools-section").eq(e).addClass("chose") });
        var e = parseInt(window.localStorage.getItem(p) || 0);
        i(e);
        var t = $(".aboutme-wrap"),
            n = t.html();
        t.html(c.decode(n)) }

    function r() { l.toggleClass("show"), u.toggleClass("show") }

    function a(e) { i(e), l.addClass("show"), u.addClass("show") }

    function s() { l.removeClass("show"), u.removeClass("show") }
    var l, u, c = n(7),
        p = "yilia-menu";
    e.exports = { init: o, toggle: r, show: a, hide: s } }, function(e, t, n) {
    var i = n(39),
        o = n(38);
    n(12), n(13), e.exports = { init: function() {
            for (var e = document.querySelectorAll(".pswp")[0], t = $(".body-wrap img"), n = [], r = 0, a = t.length; r < a; r++) {
                var s = t.eq(r).attr("data-idx", r),
                    l = s.attr("src"),
                    u = s.attr("alt");
                n.push({ src: l, w: s.width(), h: s.height(), title: u }) }
            t.click(function(t) {
                var r = $(this).attr("data-idx");
                console.log(r);
                var a = new i(e, o, n, { index: parseInt(r) });
                a.init() }) } } }, function(e, t, n) {
    var i, o;
    /*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
     * http://photoswipe.com
     * Copyright (c) 2015 Dmitry Semenov; */
    ! function(r, a) { i = a, o = "function" == typeof i ? i.call(t, n, t, e) : i, !(void 0 !== o && (e.exports = o)) }(this, function() { "use strict";
        var e = function(e, t) {
            var n, i, o, r, a, s, l, u, c, p, d, f, h, m, g, v, y, b, w, x = this,
                T = !1,
                A = !0,
                C = !0,
                _ = { barsSize: { top: 44, bottom: "auto" }, closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"], timeToIdle: 4e3, timeToIdleOutside: 1e3, loadingIndicatorDelay: 1e3, addCaptionHTMLFn: function(e, t) {
                        return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1) }, closeEl: !0, captionEl: !0, fullscreenEl: !0, zoomEl: !0, shareEl: !0, counterEl: !0, arrowEl: !0, preloaderEl: !0, tapToClose: !1, tapToToggleControls: !0, clickToCloseNonZoomable: !0, shareButtons: [{ id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" }, { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" }, { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" }, { id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0 }], getImageURLForShare: function() {
                        return e.currItem.src || "" }, getPageURLForShare: function() {
                        return window.location.href }, getTextForShare: function() {
                        return e.currItem.title || "" }, indexIndicatorSep: " / ", fitControlsWidth: 1200 },
                k = function(e) {
                    if (v) return !0;
                    e = e || window.event, g.timeToIdle && g.mouseUsed && !c && F();
                    for (var n, i, o = e.target || e.srcElement, r = o.getAttribute("class") || "", a = 0; a < q.length; a++) n = q[a], n.onTap && r.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
                    if (i) { e.stopPropagation && e.stopPropagation(), v = !0;
                        var s = t.features.isOldAndroid ? 600 : 30;
                        y = setTimeout(function() { v = !1 }, s) } },
                N = function() {
                    return !e.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth },
                E = function(e, n, i) { t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n) },
                S = function() {
                    var e = 1 === g.getNumItemsFn();
                    e !== m && (E(i, "ui--one-slide", e), m = e) },
                I = function() { E(l, "share-modal--hidden", C) },
                M = function() {
                    return C = !C, C ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() { C && I() }, 300)) : (I(), setTimeout(function() { C || t.addClass(l, "pswp__share-modal--fade-in") }, 30)), C || L(), !1 },
                D = function(t) { t = t || window.event;
                    var n = t.target || t.srcElement;
                    return e.shout("shareLinkClick", t, n), !!n.href && (!!n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), C || M(), !1)) },
                L = function() {
                    for (var e, t, n, i, o, r = "", a = 0; a < g.shareButtons.length; a++) e = g.shareButtons[a], n = g.getImageURLForShare(e), i = g.getPageURLForShare(e), o = g.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), r += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", g.parseShareButtonOut && (r = g.parseShareButtonOut(e, r));
                    l.children[0].innerHTML = r, l.children[0].onclick = D },
                j = function(e) {
                    for (var n = 0; n < g.closeElClasses.length; n++)
                        if (t.hasClass(e, "pswp__" + g.closeElClasses[n])) return !0 },
                O = 0,
                F = function() { clearTimeout(w), O = 0, c && x.setIdle(!1) },
                H = function(e) { e = e ? e : window.event;
                    var t = e.relatedTarget || e.toElement;
                    t && "HTML" !== t.nodeName || (clearTimeout(w), w = setTimeout(function() { x.setIdle(!0) }, g.timeToIdleOutside)) },
                B = function() { g.fullscreenEl && !t.features.isOldAndroid && (n || (n = x.getFullscreenAPI()), n ? (t.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs")) },
                R = function() { g.preloaderEl && (z(!0), p("beforeChange", function() { clearTimeout(h), h = setTimeout(function() { e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && z(!1) : z(!0) }, g.loadingIndicatorDelay) }), p("imageLoadComplete", function(t, n) { e.currItem === n && z(!0) })) },
                z = function(e) { f !== e && (E(d, "preloader--active", !e), f = e) },
                P = function(e) {
                    var n = e.vGap;
                    if (N()) {
                        var a = g.barsSize;
                        if (g.captionEl && "auto" === a.bottom)
                            if (r || (r = t.createEl("pswp__caption pswp__caption--fake"), r.appendChild(t.createEl("pswp__caption__center")), i.insertBefore(r, o), t.addClass(i, "pswp__ui--fit")), g.addCaptionHTMLFn(e, r, !0)) {
                                var s = r.clientHeight;
                                n.bottom = parseInt(s, 10) || 44 } else n.bottom = a.top;
                        else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
                        n.top = a.top } else n.top = n.bottom = 0 },
                U = function() { g.timeToIdle && p("mouseUsed", function() { t.bind(document, "mousemove", F), t.bind(document, "mouseout", H), b = setInterval(function() { O++, 2 === O && x.setIdle(!0) }, g.timeToIdle / 2) }) },
                Z = function() { p("onVerticalDrag", function(e) { A && e < .95 ? x.hideControls() : !A && e >= .95 && x.showControls() });
                    var e;
                    p("onPinchClose", function(t) { A && t < .9 ? (x.hideControls(), e = !0) : e && !A && t > .9 && x.showControls() }), p("zoomGestureEnded", function() { e = !1, e && !A && x.showControls() }) },
                q = [{ name: "caption", option: "captionEl", onInit: function(e) { o = e } }, { name: "share-modal", option: "shareEl", onInit: function(e) { l = e }, onTap: function() { M() } }, { name: "button--share", option: "shareEl", onInit: function(e) { s = e }, onTap: function() { M() } }, { name: "button--zoom", option: "zoomEl", onTap: e.toggleDesktopZoom }, { name: "counter", option: "counterEl", onInit: function(e) { a = e } }, { name: "button--close", option: "closeEl", onTap: e.close }, { name: "button--arrow--left", option: "arrowEl", onTap: e.prev }, { name: "button--arrow--right", option: "arrowEl", onTap: e.next }, { name: "button--fs", option: "fullscreenEl", onTap: function() { n.isFullscreen() ? n.exit() : n.enter() } }, { name: "preloader", option: "preloaderEl", onInit: function(e) { d = e } }],
                W = function() {
                    var e, n, o, r = function(i) {
                        if (i)
                            for (var r = i.length, a = 0; a < r; a++) { e = i[a], n = e.className;
                                for (var s = 0; s < q.length; s++) o = q[s], n.indexOf("pswp__" + o.name) > -1 && (g[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled")) } };
                    r(i.children);
                    var a = t.getChildByClass(i, "pswp__top-bar");
                    a && r(a.children) };
            x.init = function() { t.extend(e.options, _, !0), g = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), p = e.listen, Z(), p("beforeChange", x.update), p("doubleTap", function(t) {
                    var n = e.currItem.initialZoomLevel;
                    e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333) }), p("preventDragEvent", function(e, t, n) {
                    var i = e.target || e.srcElement;
                    i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1) }), p("bindEvents", function() { t.bind(i, "pswpTap click", k), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver) }), p("unbindEvents", function() { C || M(), b && clearInterval(b), t.unbind(document, "mouseout", H), t.unbind(document, "mousemove", F), t.unbind(i, "pswpTap click", k), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), n && (t.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (g.hideAnimationDuration = 0, n.exit()), n = null) }), p("destroy", function() { g.captionEl && (r && i.removeChild(r), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), x.setIdle(!1) }), g.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), p("initialZoomIn", function() { g.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden") }), p("initialZoomOut", function() { t.addClass(i, "pswp__ui--hidden") }), p("parseVerticalMargin", P), W(), g.shareEl && s && l && (C = !0), S(), U(), B(), R() }, x.setIdle = function(e) { c = e, E(i, "ui--idle", e) }, x.update = function() { A && e.currItem ? (x.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(e.currItem, o), E(o, "caption--empty", !e.currItem.title)), T = !0) : T = !1, C || M(), S() }, x.updateFullscreen = function(i) { i && setTimeout(function() { e.setScrollOffset(0, t.getScrollY()) }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs") }, x.updateIndexIndicator = function() { g.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn()) }, x.onGlobalTap = function(n) { n = n || window.event;
                var i = n.target || n.srcElement;
                if (!v)
                    if (n.detail && "mouse" === n.detail.pointerType) {
                        if (j(i)) return void e.close();
                        t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? g.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint)) } else if (g.tapToToggleControls && (A ? x.hideControls() : x.showControls()), g.tapToClose && (t.hasClass(i, "pswp__img") || j(i))) return void e.close() }, x.onMouseOver = function(e) { e = e || window.event;
                var t = e.target || e.srcElement;
                E(i, "ui--over-close", j(t)) }, x.hideControls = function() { t.addClass(i, "pswp__ui--hidden"), A = !1 }, x.showControls = function() { A = !0, T || x.update(), t.removeClass(i, "pswp__ui--hidden") }, x.supportsFullscreen = function() {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen) }, x.getFullscreenAPI = function() {
                var t, n = document.documentElement,
                    i = "fullscreenchange";
                return n.requestFullscreen ? t = { enterK: "requestFullscreen", exitK: "exitFullscreen", elementK: "fullscreenElement", eventK: i } : n.mozRequestFullScreen ? t = { enterK: "mozRequestFullScreen", exitK: "mozCancelFullScreen", elementK: "mozFullScreenElement", eventK: "moz" + i } : n.webkitRequestFullscreen ? t = { enterK: "webkitRequestFullscreen", exitK: "webkitExitFullscreen", elementK: "webkitFullscreenElement", eventK: "webkit" + i } : n.msRequestFullscreen && (t = { enterK: "msRequestFullscreen", exitK: "msExitFullscreen", elementK: "msFullscreenElement", eventK: "MSFullscreenChange" }), t && (t.enter = function() {
                    return u = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT) }, t.exit = function() {
                    return g.closeOnScroll = u, document[this.exitK]() }, t.isFullscreen = function() {
                    return document[this.elementK] }), t } };
        return e })
}, function(e, t, n) {
    var i, o;
    /*! PhotoSwipe - v4.1.1 - 2015-12-24
     * http://photoswipe.com
     * Copyright (c) 2015 Dmitry Semenov; */
    ! function(r, a) { i = a, o = "function" == typeof i ? i.call(t, n, t, e) : i, !(void 0 !== o && (e.exports = o)) }(this, function() { "use strict";
        var e = function(e, t, n, i) {
            var o = { features: null, bind: function(e, t, n, i) {
                    var o = (i ? "remove" : "add") + "EventListener";
                    t = t.split(" ");
                    for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], n, !1) }, isArray: function(e) {
                    return e instanceof Array }, createEl: function(e, t) {
                    var n = document.createElement(t || "div");
                    return e && (n.className = e), n }, getScrollY: function() {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e : document.documentElement.scrollTop }, unbind: function(e, t, n) { o.bind(e, t, n, !0) }, removeClass: function(e, t) {
                    var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "") }, addClass: function(e, t) { o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t) }, hasClass: function(e, t) {
                    return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className) }, getChildByClass: function(e, t) {
                    for (var n = e.firstChild; n;) {
                        if (o.hasClass(n, t)) return n;
                        n = n.nextSibling } }, arraySearch: function(e, t, n) {
                    for (var i = e.length; i--;)
                        if (e[i][n] === t) return i;
                    return -1 }, extend: function(e, t, n) {
                    for (var i in t)
                        if (t.hasOwnProperty(i)) {
                            if (n && e.hasOwnProperty(i)) continue;
                            e[i] = t[i] } }, easing: { sine: { out: function(e) {
                            return Math.sin(e * (Math.PI / 2)) }, inOut: function(e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2 } }, cubic: { out: function(e) {
                            return --e * e * e + 1 } } }, detectFeatures: function() {
                    if (o.features) return o.features;
                    var e = o.createEl(),
                        t = e.style,
                        n = "",
                        i = {};
                    if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                        var r = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            a && a.length > 0 && (a = parseInt(a[1], 10), a >= 1 && a < 8 && (i.isOldIOSPhone = !0)) }
                        var s = r.match(/Android\s([0-9\.]*)/),
                            l = s ? s[1] : 0;
                        l = parseFloat(l), l >= 1 && (l < 4.4 && (i.isOldAndroid = !0), i.androidVersion = l), i.isMobileOpera = /opera mini|opera mobi/i.test(r) }
                    for (var u, c, p = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], f = 0; f < 4; f++) { n = d[f];
                        for (var h = 0; h < 3; h++) u = p[h], c = n + (n ? u.charAt(0).toUpperCase() + u.slice(1) : u), !i[u] && c in t && (i[u] = c);
                        n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"])) }
                    if (!i.raf) {
                        var m = 0;
                        i.raf = function(e) {
                            var t = (new Date).getTime(),
                                n = Math.max(0, 16 - (t - m)),
                                i = window.setTimeout(function() { e(t + n) }, n);
                            return m = t + n, i }, i.caf = function(e) { clearTimeout(e) } }
                    return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i } };
            o.detectFeatures(), o.features.oldIE && (o.bind = function(e, t, n, i) { t = t.split(" ");
                for (var o, r = (i ? "detach" : "attach") + "Event", a = function() { n.handleEvent.call(n) }, s = 0; s < t.length; s++)
                    if (o = t[s])
                        if ("object" == typeof n && n.handleEvent) {
                            if (i) {
                                if (!n["oldIE" + o]) return !1 } else n["oldIE" + o] = a;
                            e[r]("on" + o, n["oldIE" + o]) } else e[r]("on" + o, n) });
            var r = this,
                a = 25,
                s = 3,
                l = { allowPanToNext: !0, spacing: .12, bgOpacity: 1, mouseUsed: !1, loop: !0, pinchToClose: !0, closeOnScroll: !0, closeOnVerticalDrag: !0, verticalDragRange: .75, hideAnimationDuration: 333, showAnimationDuration: 333, showHideOpacity: !1, focus: !0, escKey: !0, arrowKeys: !0, mainScrollEndFriction: .35, panEndFriction: .35, isClickableElement: function(e) {
                        return "A" === e.tagName }, getDoubleTapZoom: function(e, t) {
                        return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33 }, maxSpreadZoom: 1.33, modal: !0, scaleMode: "fit" };
            o.extend(l, i);
            var u, c, p, d, f, h, m, g, v, y, b, w, x, T, A, C, _, k, N, E, S, I, M, D, L, j, O, F, H, B, R, z, P, U, Z, q, W, $, Y, X, J, G, K, V, Q, ee, te, ne, ie, oe, re, ae, se, le, ue, ce, pe = function() {
                    return { x: 0, y: 0 } },
                de = pe(),
                fe = pe(),
                he = pe(),
                me = {},
                ge = 0,
                ve = {},
                ye = pe(),
                be = 0,
                we = !0,
                xe = [],
                Te = {},
                Ae = !1,
                Ce = function(e, t) { o.extend(r, t.publicMethods), xe.push(e) },
                _e = function(e) {
                    var t = Qt();
                    return e > t - 1 ? e - t : e < 0 ? t + e : e },
                ke = {},
                Ne = function(e, t) {
                    return ke[e] || (ke[e] = []), ke[e].push(t) },
                Ee = function(e) {
                    var t = ke[e];
                    if (t) {
                        var n = Array.prototype.slice.call(arguments);
                        n.shift();
                        for (var i = 0; i < t.length; i++) t[i].apply(r, n) } },
                Se = function() {
                    return (new Date).getTime() },
                Ie = function(e) { le = e, r.bg.style.opacity = e * l.bgOpacity },
                Me = function(e, t, n, i, o) {
                    (!Ae || o && o !== r.currItem) && (i /= o ? o.fitRatio : r.currItem.fitRatio), e[I] = w + t + "px, " + n + "px" + x + " scale(" + i + ")" },
                De = function(e) { ie && (e && (y > r.currItem.fitRatio ? Ae || (dn(r.currItem, !1, !0), Ae = !0) : Ae && (dn(r.currItem), Ae = !1)), Me(ie, he.x, he.y, y)) },
                Le = function(e) { e.container && Me(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e) },
                je = function(e, t) { t[I] = w + e + "px, 0px" + x },
                Oe = function(e, t) {
                    if (!l.loop && t) {
                        var n = d + (ye.x * ge - e) / ye.x,
                            i = Math.round(e - yt.x);
                        (n < 0 && i > 0 || n >= Qt() - 1 && i < 0) && (e = yt.x + i * l.mainScrollEndFriction) }
                    yt.x = e, je(e, f) },
                Fe = function(e, t) {
                    var n = bt[e] - ve[e];
                    return fe[e] + de[e] + n - n * (t / b) },
                He = function(e, t) { e.x = t.x, e.y = t.y, t.id && (e.id = t.id) },
                Be = function(e) { e.x = Math.round(e.x), e.y = Math.round(e.y) },
                Re = null,
                ze = function() { Re && (o.unbind(document, "mousemove", ze), o.addClass(e, "pswp--has_mouse"), l.mouseUsed = !0, Ee("mouseUsed")), Re = setTimeout(function() { Re = null }, 100) },
                Pe = function() { o.bind(document, "keydown", r), R.transform && o.bind(r.scrollWrap, "click", r), l.mouseUsed || o.bind(document, "mousemove", ze), o.bind(window, "resize scroll", r), Ee("bindEvents") },
                Ue = function() { o.unbind(window, "resize", r), o.unbind(window, "scroll", v.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", ze), R.transform && o.unbind(r.scrollWrap, "click", r), $ && o.unbind(window, m, r), Ee("unbindEvents") },
                Ze = function(e, t) {
                    var n = ln(r.currItem, me, e);
                    return t && (ne = n), n },
                qe = function(e) {
                    return e || (e = r.currItem), e.initialZoomLevel },
                We = function(e) {
                    return e || (e = r.currItem), e.w > 0 ? l.maxSpreadZoom : 1 },
                $e = function(e, t, n, i) {
                    return i === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e], !0) : (n[e] = Fe(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0)) },
                Ye = function() {
                    if (I) {
                        var t = R.perspective && !D;
                        return w = "translate" + (t ? "3d(" : "("), void(x = R.perspective ? ", 0px)" : ")") }
                    I = "left", o.addClass(e, "pswp--ie"), je = function(e, t) { t.left = e + "px" }, Le = function(e) {
                        var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                            n = e.container.style,
                            i = t * e.w,
                            o = t * e.h;
                        n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px" }, De = function() {
                        if (ie) {
                            var e = ie,
                                t = r.currItem,
                                n = t.fitRatio > 1 ? 1 : t.fitRatio,
                                i = n * t.w,
                                o = n * t.h;
                            e.width = i + "px", e.height = o + "px", e.left = he.x + "px", e.top = he.y + "px" } } },
                Xe = function(e) {
                    var t = "";
                    l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]())) },
                Je = function(e) { e && (J || X || oe || q) && (e.preventDefault(), e.stopPropagation()) },
                Ge = function() { r.setScrollOffset(0, o.getScrollY()) },
                Ke = {},
                Ve = 0,
                Qe = function(e) { Ke[e] && (Ke[e].raf && j(Ke[e].raf), Ve--, delete Ke[e]) },
                et = function(e) { Ke[e] && Qe(e), Ke[e] || (Ve++, Ke[e] = {}) },
                tt = function() {
                    for (var e in Ke) Ke.hasOwnProperty(e) && Qe(e) },
                nt = function(e, t, n, i, o, r, a) {
                    var s, l = Se();
                    et(e);
                    var u = function() {
                        if (Ke[e]) {
                            if (s = Se() - l, s >= i) return Qe(e), r(n), void(a && a());
                            r((n - t) * o(s / i) + t), Ke[e].raf = L(u) } };
                    u() },
                it = { shout: Ee, listen: Ne, viewportSize: me, options: l, isMainScrollAnimating: function() {
                        return oe }, getZoomLevel: function() {
                        return y }, getCurrentIndex: function() {
                        return d }, isDragging: function() {
                        return $ }, isZooming: function() {
                        return Q }, setScrollOffset: function(e, t) { ve.x = e, B = ve.y = t, Ee("updateScrollOffset", ve) }, applyZoomPan: function(e, t, n, i) { he.x = t, he.y = n, y = e, De(i) }, init: function() {
                        if (!u && !c) {
                            var n;
                            r.framework = o, r.template = e, r.bg = o.getChildByClass(e, "pswp__bg"), O = e.className, u = !0, R = o.detectFeatures(), L = R.raf, j = R.caf, I = R.transform, H = R.oldIE, r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), f = r.container.style, r.itemHolders = C = [{ el: r.container.children[0], wrap: 0, index: -1 }, { el: r.container.children[1], wrap: 0, index: -1 }, { el: r.container.children[2], wrap: 0, index: -1 }], C[0].el.style.display = C[2].el.style.display = "none", Ye(), v = { resize: r.updateSize, scroll: Ge, keydown: Xe, click: Je };
                            var i = R.isOldIOSPhone || R.isOldAndroid || R.isMobileOpera;
                            for (R.animationName && R.transform && !i || (l.showAnimationDuration = l.hideAnimationDuration = 0), n = 0; n < xe.length; n++) r["init" + xe[n]]();
                            if (t) {
                                var a = r.ui = new t(r, o);
                                a.init() }
                            Ee("firstUpdate"), d = d || l.index || 0, (isNaN(d) || d < 0 || d >= Qt()) && (d = 0), r.currItem = Vt(d), (R.isOldIOSPhone || R.isOldAndroid) && (we = !1), e.setAttribute("aria-hidden", "false"), l.modal && (we ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === B && (Ee("initialLayout"), B = F = o.getScrollY());
                            var p = "pswp--open ";
                            for (l.mainClass && (p += l.mainClass + " "), l.showHideOpacity && (p += "pswp--animate_opacity "), p += D ? "pswp--touch" : "pswp--notouch", p += R.animationName ? " pswp--css_animation" : "", p += R.svg ? " pswp--svg" : "", o.addClass(e, p), r.updateSize(), h = -1, be = null, n = 0; n < s; n++) je((n + h) * ye.x, C[n].el.style);
                            H || o.bind(r.scrollWrap, g, r), Ne("initialZoomInEnd", function() { r.setContent(C[0], d - 1), r.setContent(C[2], d + 1), C[0].el.style.display = C[2].el.style.display = "block", l.focus && e.focus(), Pe() }), r.setContent(C[1], d), r.updateCurrItem(), Ee("afterInit"), we || (T = setInterval(function() { Ve || $ || Q || y !== r.currItem.initialZoomLevel || r.updateSize() }, 1e3)), o.addClass(e, "pswp--visible") } }, close: function() { u && (u = !1, c = !0, Ee("close"), Ue(), tn(r.currItem, null, !0, r.destroy)) }, destroy: function() { Ee("destroy"), Xt && clearTimeout(Xt), e.setAttribute("aria-hidden", "true"), e.className = O, T && clearInterval(T), o.unbind(r.scrollWrap, g, r), o.unbind(window, "scroll", r), Ct(), tt(), ke = null }, panTo: function(e, t, n) { n || (e > ne.min.x ? e = ne.min.x : e < ne.max.x && (e = ne.max.x), t > ne.min.y ? t = ne.min.y : t < ne.max.y && (t = ne.max.y)), he.x = e, he.y = t, De() }, handleEvent: function(e) { e = e || window.event, v[e.type] && v[e.type](e) }, goTo: function(e) { e = _e(e);
                        var t = e - d;
                        be = t, d = e, r.currItem = Vt(d), ge -= t, Oe(ye.x * ge), tt(), oe = !1, r.updateCurrItem() }, next: function() { r.goTo(d + 1) }, prev: function() { r.goTo(d - 1) }, updateCurrZoomItem: function(e) {
                        if (e && Ee("beforeChange", 0), C[1].el.children.length) {
                            var t = C[1].el.children[0];
                            ie = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null } else ie = null;
                        ne = r.currItem.bounds, b = y = r.currItem.initialZoomLevel, he.x = ne.center.x, he.y = ne.center.y, e && Ee("afterChange") }, invalidateCurrItems: function() { A = !0;
                        for (var e = 0; e < s; e++) C[e].item && (C[e].item.needsUpdate = !0) }, updateCurrItem: function(e) {
                        if (0 !== be) {
                            var t, n = Math.abs(be);
                            if (!(e && n < 2)) { r.currItem = Vt(d), Ae = !1, Ee("beforeChange", be), n >= s && (h += be + (be > 0 ? -s : s), n = s);
                                for (var i = 0; i < n; i++) be > 0 ? (t = C.shift(), C[s - 1] = t, h++, je((h + 2) * ye.x, t.el.style), r.setContent(t, d - n + i + 1 + 1)) : (t = C.pop(), C.unshift(t), h--, je(h * ye.x, t.el.style), r.setContent(t, d + n - i - 1 - 1));
                                if (ie && 1 === Math.abs(be)) {
                                    var o = Vt(_);
                                    o.initialZoomLevel !== y && (ln(o, me), dn(o), Le(o)) }
                                be = 0, r.updateCurrZoomItem(), _ = d, Ee("afterChange") } } }, updateSize: function(t) {
                        if (!we && l.modal) {
                            var n = o.getScrollY();
                            if (B !== n && (e.style.top = n + "px", B = n), !t && Te.x === window.innerWidth && Te.y === window.innerHeight) return;
                            Te.x = window.innerWidth, Te.y = window.innerHeight, e.style.height = Te.y + "px" }
                        if (me.x = r.scrollWrap.clientWidth, me.y = r.scrollWrap.clientHeight, Ge(), ye.x = me.x + Math.round(me.x * l.spacing), ye.y = me.y, Oe(ye.x * ge), Ee("beforeResize"), void 0 !== h) {
                            for (var i, a, u, c = 0; c < s; c++) i = C[c], je((c + h) * ye.x, i.el.style), u = d + c - 1, l.loop && Qt() > 2 && (u = _e(u)), a = Vt(u), a && (A || a.needsUpdate || !a.bounds) ? (r.cleanSlide(a), r.setContent(i, u), 1 === c && (r.currItem = a, r.updateCurrZoomItem(!0)), a.needsUpdate = !1) : i.index === -1 && u >= 0 && r.setContent(i, u), a && a.container && (ln(a, me), dn(a), Le(a));
                            A = !1 }
                        b = y = r.currItem.initialZoomLevel, ne = r.currItem.bounds, ne && (he.x = ne.center.x, he.y = ne.center.y, De(!0)), Ee("resize") }, zoomTo: function(e, t, n, i, r) { t && (b = y, bt.x = Math.abs(t.x) - he.x, bt.y = Math.abs(t.y) - he.y, He(fe, he));
                        var a = Ze(e, !1),
                            s = {};
                        $e("x", a, s, e), $e("y", a, s, e);
                        var l = y,
                            u = { x: he.x, y: he.y };
                        Be(s);
                        var c = function(t) { 1 === t ? (y = e, he.x = s.x, he.y = s.y) : (y = (e - l) * t + l, he.x = (s.x - u.x) * t + u.x, he.y = (s.y - u.y) * t + u.y), r && r(t), De(1 === t) };
                        n ? nt("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, c) : c(1) } },
                ot = 30,
                rt = 10,
                at = {},
                st = {},
                lt = {},
                ut = {},
                ct = {},
                pt = [],
                dt = {},
                ft = [],
                ht = {},
                mt = 0,
                gt = pe(),
                vt = 0,
                yt = pe(),
                bt = pe(),
                wt = pe(),
                xt = function(e, t) {
                    return e.x === t.x && e.y === t.y },
                Tt = function(e, t) {
                    return Math.abs(e.x - t.x) < a && Math.abs(e.y - t.y) < a },
                At = function(e, t) {
                    return ht.x = Math.abs(e.x - t.x), ht.y = Math.abs(e.y - t.y), Math.sqrt(ht.x * ht.x + ht.y * ht.y) },
                Ct = function() { G && (j(G), G = null) },
                _t = function() { $ && (G = L(_t), Pt()) },
                kt = function() {
                    return !("fit" === l.scaleMode && y === r.currItem.initialZoomLevel) },
                Nt = function(e, t) {
                    return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : Nt(e.parentNode, t))) },
                Et = {},
                St = function(e, t) {
                    return Et.prevent = !Nt(e.target, l.isClickableElement), Ee("preventDragEvent", e, t, Et), Et.prevent },
                It = function(e, t) {
                    return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t },
                Mt = function(e, t, n) { n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y) },
                Dt = function(e, t, n) {
                    if (e - P > 50) {
                        var i = ft.length > 2 ? ft.shift() : {};
                        i.x = t, i.y = n, ft.push(i), P = e } },
                Lt = function() {
                    var e = he.y - r.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (me.y / 2)) },
                jt = {},
                Ot = {},
                Ft = [],
                Ht = function(e) {
                    for (; Ft.length > 0;) Ft.pop();
                    return M ? (ce = 0, pt.forEach(function(e) { 0 === ce ? Ft[0] = e : 1 === ce && (Ft[1] = e), ce++ })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Ft[0] = It(e.touches[0], jt), e.touches.length > 1 && (Ft[1] = It(e.touches[1], Ot))) : (jt.x = e.pageX, jt.y = e.pageY, jt.id = "", Ft[0] = jt), Ft },
                Bt = function(e, t) {
                    var n, i, o, a, s = 0,
                        u = he[e] + t[e],
                        c = t[e] > 0,
                        p = yt.x + t.x,
                        d = yt.x - dt.x;
                    return n = u > ne.min[e] || u < ne.max[e] ? l.panEndFriction : 1, u = he[e] + t[e] * n, !l.allowPanToNext && y !== r.currItem.initialZoomLevel || (ie ? "h" !== re || "x" !== e || X || (c ? (u > ne.min[e] && (n = l.panEndFriction, s = ne.min[e] - u, i = ne.min[e] - fe[e]), (i <= 0 || d < 0) && Qt() > 1 ? (a = p, d < 0 && p > dt.x && (a = dt.x)) : ne.min.x !== ne.max.x && (o = u)) : (u < ne.max[e] && (n = l.panEndFriction, s = u - ne.max[e], i = fe[e] - ne.max[e]), (i <= 0 || d > 0) && Qt() > 1 ? (a = p, d > 0 && p < dt.x && (a = dt.x)) : ne.min.x !== ne.max.x && (o = u))) : a = p, "x" !== e) ? void(oe || K || y > r.currItem.fitRatio && (he[e] += t[e] * n)) : (void 0 !== a && (Oe(a, !0), K = a !== dt.x), ne.min.x !== ne.max.x && (void 0 !== o ? he.x = o : K || (he.x += t.x * n)), void 0 !== a) },
                Rt = function(e) {
                    if (!("mousedown" === e.type && e.button > 0)) {
                        if (Kt) return void e.preventDefault();
                        if (!W || "mousedown" !== e.type) {
                            if (St(e, !0) && e.preventDefault(), Ee("pointerDown"), M) {
                                var t = o.arraySearch(pt, e.pointerId, "id");
                                t < 0 && (t = pt.length), pt[t] = { x: e.pageX, y: e.pageY, id: e.pointerId } }
                            var n = Ht(e),
                                i = n.length;
                            V = null, tt(), $ && 1 !== i || ($ = ae = !0, o.bind(window, m, r), Z = ue = se = q = K = J = Y = X = !1, re = null, Ee("firstTouchStart", n), He(fe, he), de.x = de.y = 0, He(ut, n[0]), He(ct, ut), dt.x = ye.x * ge, ft = [{ x: ut.x, y: ut.y }], P = z = Se(), Ze(y, !0), Ct(), _t()), !Q && i > 1 && !oe && !K && (b = y, X = !1, Q = Y = !0, de.y = de.x = 0, He(fe, he), He(at, n[0]), He(st, n[1]), Mt(at, st, wt), bt.x = Math.abs(wt.x) - he.x, bt.y = Math.abs(wt.y) - he.y, ee = te = At(at, st)) } } },
                zt = function(e) {
                    if (e.preventDefault(), M) {
                        var t = o.arraySearch(pt, e.pointerId, "id");
                        if (t > -1) {
                            var n = pt[t];
                            n.x = e.pageX, n.y = e.pageY } }
                    if ($) {
                        var i = Ht(e);
                        if (re || J || Q) V = i;
                        else if (yt.x !== ye.x * ge) re = "h";
                        else {
                            var r = Math.abs(i[0].x - ut.x) - Math.abs(i[0].y - ut.y);
                            Math.abs(r) >= rt && (re = r > 0 ? "h" : "v", V = i) } } },
                Pt = function() {
                    if (V) {
                        var e = V.length;
                        if (0 !== e)
                            if (He(at, V[0]), lt.x = at.x - ut.x, lt.y = at.y - ut.y, Q && e > 1) {
                                if (ut.x = at.x, ut.y = at.y, !lt.x && !lt.y && xt(V[1], st)) return;
                                He(st, V[1]), X || (X = !0, Ee("zoomGestureStarted"));
                                var t = At(at, st),
                                    n = $t(t);
                                n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (ue = !0);
                                var i = 1,
                                    o = qe(),
                                    a = We();
                                if (n < o)
                                    if (l.pinchToClose && !ue && b <= r.currItem.initialZoomLevel) {
                                        var s = o - n,
                                            u = 1 - s / (o / 1.2);
                                        Ie(u), Ee("onPinchClose", u), se = !0 } else i = (o - n) / o, i > 1 && (i = 1), n = o - i * (o / 3);
                                else n > a && (i = (n - a) / (6 * o), i > 1 && (i = 1), n = a + i * o);
                                i < 0 && (i = 0), ee = t, Mt(at, st, gt), de.x += gt.x - wt.x, de.y += gt.y - wt.y, He(wt, gt), he.x = Fe("x", n), he.y = Fe("y", n), Z = n > y, y = n, De() } else {
                                if (!re) return;
                                if (ae && (ae = !1, Math.abs(lt.x) >= rt && (lt.x -= V[0].x - ct.x), Math.abs(lt.y) >= rt && (lt.y -= V[0].y - ct.y)), ut.x = at.x, ut.y = at.y, 0 === lt.x && 0 === lt.y) return;
                                if ("v" === re && l.closeOnVerticalDrag && !kt()) { de.y += lt.y, he.y += lt.y;
                                    var c = Lt();
                                    return q = !0, Ee("onVerticalDrag", c), Ie(c), void De() }
                                Dt(Se(), at.x, at.y), J = !0, ne = r.currItem.bounds;
                                var p = Bt("x", lt);
                                p || (Bt("y", lt), Be(he), De()) } } },
                Ut = function(e) {
                    if (R.isOldAndroid) {
                        if (W && "mouseup" === e.type) return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(W), W = setTimeout(function() { W = 0 }, 600)) }
                    Ee("pointerUp"), St(e, !1) && e.preventDefault();
                    var t;
                    if (M) {
                        var n = o.arraySearch(pt, e.pointerId, "id");
                        if (n > -1)
                            if (t = pt.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
                            else {
                                var i = { 4: "mouse", 2: "touch", 3: "pen" };
                                t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse") } }
                    var a, s = Ht(e),
                        u = s.length;
                    if ("mouseup" === e.type && (u = 0), 2 === u) return V = null, !0;
                    1 === u && He(ct, s[0]), 0 !== u || re || oe || (t || ("mouseup" === e.type ? t = { x: e.pageX, y: e.pageY, type: "mouse" } : e.changedTouches && e.changedTouches[0] && (t = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type: "touch" })), Ee("touchRelease", e, t));
                    var c = -1;
                    if (0 === u && ($ = !1, o.unbind(window, m, r), Ct(), Q ? c = 0 : vt !== -1 && (c = Se() - vt)), vt = 1 === u ? Se() : -1, a = c !== -1 && c < 150 ? "zoom" : "swipe", Q && u < 2 && (Q = !1, 1 === u && (a = "zoomPointerUp"), Ee("zoomGestureEnded")), V = null, J || X || oe || q)
                        if (tt(), U || (U = Zt()), U.calculateSwipeSpeed("x"), q) {
                            var p = Lt();
                            if (p < l.verticalDragRange) r.close();
                            else {
                                var d = he.y,
                                    f = le;
                                nt("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(e) { he.y = (r.currItem.initialPosition.y - d) * e + d, Ie((1 - f) * e + f), De() }), Ee("onVerticalDrag", 1) } } else {
                            if ((K || oe) && 0 === u) {
                                var h = Wt(a, U);
                                if (h) return;
                                a = "zoomPointerUp" }
                            if (!oe) return "swipe" !== a ? void Yt() : void(!K && y > r.currItem.fitRatio && qt(U)) } },
                Zt = function() {
                    var e, t, n = { lastFlickOffset: {}, lastFlickDist: {}, lastFlickSpeed: {}, slowDownRatio: {}, slowDownRatioReverse: {}, speedDecelerationRatio: {}, speedDecelerationRatioAbs: {}, distanceOffset: {}, backAnimDestination: {}, backAnimStarted: {}, calculateSwipeSpeed: function(i) { ft.length > 1 ? (e = Se() - P + 50, t = ft[ft.length - 2][i]) : (e = Se() - z, t = ct[i]), n.lastFlickOffset[i] = ut[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1 }, calculateOverBoundsAnimOffset: function(e, t) { n.backAnimStarted[e] || (he[e] > ne.min[e] ? n.backAnimDestination[e] = ne.min[e] : he[e] < ne.max[e] && (n.backAnimDestination[e] = ne.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, nt("bounceZoomPan" + e, he[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, function(t) { he[e] = t, De() })))) }, calculateAnimOffset: function(e) { n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, he[e] += n.distanceOffset[e]) }, panAnimLoop: function() {
                            if (Ke.zoomPan && (Ke.zoomPan.raf = L(n.panAnimLoop), n.now = Se(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), De(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05)) return he.x = Math.round(he.x), he.y = Math.round(he.y), De(), void Qe("zoomPan") } };
                    return n },
                qt = function(e) {
                    return e.calculateSwipeSpeed("y"), ne = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (et("zoomPan"), e.lastNow = Se(), void e.panAnimLoop()) },
                Wt = function(e, t) {
                    var n;
                    oe || (mt = d);
                    var i;
                    if ("swipe" === e) {
                        var a = ut.x - ct.x,
                            s = t.lastFlickDist.x < 10;
                        a > ot && (s || t.lastFlickOffset.x > 20) ? i = -1 : a < -ot && (s || t.lastFlickOffset.x < -20) && (i = 1) }
                    var u;
                    i && (d += i, d < 0 ? (d = l.loop ? Qt() - 1 : 0, u = !0) : d >= Qt() && (d = l.loop ? 0 : Qt() - 1, u = !0), u && !l.loop || (be += i, ge -= i, n = !0));
                    var c, p = ye.x * ge,
                        f = Math.abs(p - yt.x);
                    return n || p > yt.x == t.lastFlickSpeed.x > 0 ? (c = Math.abs(t.lastFlickSpeed.x) > 0 ? f / Math.abs(t.lastFlickSpeed.x) : 333, c = Math.min(c, 400), c = Math.max(c, 250)) : c = 333, mt === d && (n = !1), oe = !0, Ee("mainScrollAnimStart"), nt("mainScroll", yt.x, p, c, o.easing.cubic.out, Oe, function() { tt(), oe = !1, mt = -1, (n || mt !== d) && r.updateCurrItem(), Ee("mainScrollAnimComplete") }), n && r.updateCurrItem(!0), n },
                $t = function(e) {
                    return 1 / te * e * b },
                Yt = function() {
                    var e = y,
                        t = qe(),
                        n = We();
                    y < t ? e = t : y > n && (e = n);
                    var i, a = 1,
                        s = le;
                    return se && !Z && !ue && y < t ? (r.close(), !0) : (se && (i = function(e) { Ie((a - s) * e + s) }), r.zoomTo(e, 0, 200, o.easing.cubic.out, i), !0) };
            Ce("Gestures", { publicMethods: { initGestures: function() {
                        var e = function(e, t, n, i, o) { k = e + t, N = e + n, E = e + i, S = o ? e + o : "" };
                        M = R.pointerEvent, M && R.touch && (R.touch = !1), M ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : R.touch ? (e("touch", "start", "move", "end", "cancel"), D = !0) : e("mouse", "down", "move", "up"), m = N + " " + E + " " + S, g = k, M && !D && (D = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = D, v[k] = Rt, v[N] = zt, v[E] = Ut, S && (v[S] = v[E]), R.touch && (g += " mousedown", m += " mousemove mouseup", v.mousedown = v[k], v.mousemove = v[N], v.mouseup = v[E]), D || (l.allowPanToNext = !1) } } });
            var Xt, Jt, Gt, Kt, Vt, Qt, en, tn = function(t, n, i, a) { Xt && clearTimeout(Xt), Kt = !0, Gt = !0;
                    var s;
                    t.initialLayout ? (s = t.initialLayout, t.initialLayout = null) : s = l.getThumbBoundsFn && l.getThumbBoundsFn(d);
                    var u = i ? l.hideAnimationDuration : l.showAnimationDuration,
                        c = function() { Qe("initialZoom"), i ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (Ie(1), n && (n.style.display = "block"), o.addClass(e, "pswp--animated-in"), Ee("initialZoom" + (i ? "OutEnd" : "InEnd"))), a && a(), Kt = !1 };
                    if (!u || !s || void 0 === s.x) return Ee("initialZoom" + (i ? "Out" : "In")), y = t.initialZoomLevel, He(he, t.initialPosition), De(), e.style.opacity = i ? 0 : 1, Ie(1), void(u ? setTimeout(function() { c() }, u) : c());
                    var f = function() {
                        var n = p,
                            a = !r.currItem.src || r.currItem.loadError || l.showHideOpacity;
                        t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (y = s.w / t.w, he.x = s.x, he.y = s.y - F, r[a ? "template" : "bg"].style.opacity = .001, De()), et("initialZoom"), i && !n && o.removeClass(e, "pswp--animated-in"), a && (i ? o[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() { o.addClass(e, "pswp--animate_opacity") }, 30)), Xt = setTimeout(function() {
                            if (Ee("initialZoom" + (i ? "Out" : "In")), i) {
                                var r = s.w / t.w,
                                    l = { x: he.x, y: he.y },
                                    p = y,
                                    d = le,
                                    f = function(t) { 1 === t ? (y = r, he.x = s.x, he.y = s.y - B) : (y = (r - p) * t + p, he.x = (s.x - l.x) * t + l.x, he.y = (s.y - B - l.y) * t + l.y), De(), a ? e.style.opacity = 1 - t : Ie(d - t * d) };
                                n ? nt("initialZoom", 0, 1, u, o.easing.cubic.out, f, c) : (f(1), Xt = setTimeout(c, u + 20)) } else y = t.initialZoomLevel, He(he, t.initialPosition), De(), Ie(1), a ? e.style.opacity = 1 : Ie(1), Xt = setTimeout(c, u + 20) }, i ? 25 : 90) };
                    f() },
                nn = {},
                on = [],
                rn = { index: 0, errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>', forceProgressiveLoading: !1, preload: [1, 1], getNumItemsFn: function() {
                        return Jt.length } },
                an = function() {
                    return { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } } },
                sn = function(e, t, n) {
                    var i = e.bounds;
                    i.center.x = Math.round((nn.x - t) / 2), i.center.y = Math.round((nn.y - n) / 2) + e.vGap.top, i.max.x = t > nn.x ? Math.round(nn.x - t) : i.center.x, i.max.y = n > nn.y ? Math.round(nn.y - n) + e.vGap.top : i.center.y, i.min.x = t > nn.x ? 0 : i.center.x, i.min.y = n > nn.y ? e.vGap.top : i.center.y },
                ln = function(e, t, n) {
                    if (e.src && !e.loadError) {
                        var i = !n;
                        if (i && (e.vGap || (e.vGap = { top: 0, bottom: 0 }), Ee("parseVerticalMargin", e)), nn.x = t.x, nn.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                            var o = nn.x / e.w,
                                r = nn.y / e.h;
                            e.fitRatio = o < r ? o : r;
                            var a = l.scaleMode; "orig" === a ? n = 1 : "fit" === a && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = an()) }
                        if (!n) return;
                        return sn(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds }
                    return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = an(), e.initialPosition = e.bounds.center, e.bounds },
                un = function(e, t, n, i, o, a) { t.loadError || i && (t.imageAppended = !0, dn(t, i, t === r.currItem && Ae), n.appendChild(i), a && setTimeout(function() { t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null) }, 500)) },
                cn = function(e) { e.loading = !0, e.loaded = !1;
                    var t = e.img = o.createEl("pswp__img", "img"),
                        n = function() { e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null };
                    return t.onload = n, t.onerror = function() { e.loadError = !0, n() }, t.src = e.src, t },
                pn = function(e, t) {
                    if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = l.errorMsg.replace("%url%", e.src), !0 },
                dn = function(e, t, n) {
                    if (e.src) { t || (t = e.container.lastChild);
                        var i = n ? e.w : Math.round(e.w * e.fitRatio),
                            o = n ? e.h : Math.round(e.h * e.fitRatio);
                        e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px" } },
                fn = function() {
                    if (on.length) {
                        for (var e, t = 0; t < on.length; t++) e = on[t], e.holder.index === e.index && un(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
                        on = [] } };
            Ce("Controller", { publicMethods: { lazyLoadItem: function(e) { e = _e(e);
                        var t = Vt(e);
                        t && (!t.loaded && !t.loading || A) && (Ee("gettingData", e, t), t.src && cn(t)) }, initController: function() { o.extend(l, rn, !0), r.items = Jt = n, Vt = r.getItemAt, Qt = l.getNumItemsFn, en = l.loop, Qt() < 3 && (l.loop = !1), Ne("beforeChange", function(e) {
                            var t, n = l.preload,
                                i = null === e || e >= 0,
                                o = Math.min(n[0], Qt()),
                                a = Math.min(n[1], Qt());
                            for (t = 1; t <= (i ? a : o); t++) r.lazyLoadItem(d + t);
                            for (t = 1; t <= (i ? o : a); t++) r.lazyLoadItem(d - t) }), Ne("initialLayout", function() { r.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(d) }), Ne("mainScrollAnimComplete", fn), Ne("initialZoomInEnd", fn), Ne("destroy", function() {
                            for (var e, t = 0; t < Jt.length; t++) e = Jt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                            on = null }) }, getItemAt: function(e) {
                        return e >= 0 && (void 0 !== Jt[e] && Jt[e]) }, allowProgressiveImg: function() {
                        return l.forceProgressiveLoading || !D || l.mouseUsed || screen.width > 1200 }, setContent: function(e, t) { l.loop && (t = _e(t));
                        var n = r.getItemAt(e.index);
                        n && (n.container = null);
                        var i, a = r.getItemAt(t);
                        if (!a) return void(e.el.innerHTML = "");
                        Ee("gettingData", t, a), e.index = t, e.item = a;
                        var s = a.container = o.createEl("pswp__zoom-wrap");
                        if (!a.src && a.html && (a.html.tagName ? s.appendChild(a.html) : s.innerHTML = a.html), pn(a), ln(a, me), !a.src || a.loadError || a.loaded) a.src && !a.loadError && (i = o.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = a.src, dn(a, i), un(t, a, s, i, !0));
                        else {
                            if (a.loadComplete = function(n) {
                                    if (u) {
                                        if (e && e.index === t) {
                                            if (pn(n, !0)) return n.loadComplete = n.img = null, ln(n, me), Le(n), void(e.index === d && r.updateCurrZoomItem());
                                            n.imageAppended ? !Kt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : R.transform && (oe || Kt) ? on.push({ item: n, baseDiv: s, img: n.img, index: t, holder: e, clearPlaceholder: !0 }) : un(t, n, s, n.img, oe || Kt, !0) }
                                        n.loadComplete = null, n.img = null, Ee("imageLoadComplete", t, n) } }, o.features.transform) {
                                var c = "pswp__img pswp__img--placeholder";
                                c += a.msrc ? "" : " pswp__img--placeholder--blank";
                                var p = o.createEl(c, a.msrc ? "img" : "");
                                a.msrc && (p.src = a.msrc), dn(a, p), s.appendChild(p), a.placeholder = p }
                            a.loading || cn(a), r.allowProgressiveImg() && (!Gt && R.transform ? on.push({ item: a, baseDiv: s, img: a.img, index: t, holder: e }) : un(t, a, s, a.img, !0, !0)) }
                        Gt || t !== d ? Le(a) : (ie = s.style, tn(a, i || a.img)), e.el.innerHTML = "", e.el.appendChild(s) }, cleanSlide: function(e) { e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1 } } });
            var hn, mn = {},
                gn = function(e, t, n) {
                    var i = document.createEvent("CustomEvent"),
                        o = { origEvent: e, target: e.target, releasePoint: t, pointerType: n || "touch" };
                    i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i) };
            Ce("Tap", { publicMethods: { initTap: function() { Ne("firstTouchStart", r.onTapStart), Ne("touchRelease", r.onTapRelease), Ne("destroy", function() { mn = {}, hn = null }) }, onTapStart: function(e) { e.length > 1 && (clearTimeout(hn), hn = null) }, onTapRelease: function(e, t) {
                        if (t && !J && !Y && !Ve) {
                            var n = t;
                            if (hn && (clearTimeout(hn), hn = null, Tt(n, mn))) return void Ee("doubleTap", n);
                            if ("mouse" === t.type) return void gn(e, t, "mouse");
                            var i = e.target.tagName.toUpperCase();
                            if ("BUTTON" === i || o.hasClass(e.target, "pswp__single-tap")) return void gn(e, t);
                            He(mn, n), hn = setTimeout(function() { gn(e, t), hn = null }, 300) } } } });
            var vn;
            Ce("DesktopZoom", { publicMethods: { initDesktopZoom: function() { H || (D ? Ne("mouseUsed", function() { r.setupDesktopZoom() }) : r.setupDesktopZoom(!0)) }, setupDesktopZoom: function(t) { vn = {};
                        var n = "wheel mousewheel DOMMouseScroll";
                        Ne("bindEvents", function() { o.bind(e, n, r.handleMouseWheel) }), Ne("unbindEvents", function() { vn && o.unbind(e, n, r.handleMouseWheel) }), r.mouseZoomedIn = !1;
                        var i, a = function() { r.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), y < 1 ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), s() },
                            s = function() { i && (o.removeClass(e, "pswp--dragging"), i = !1) };
                        Ne("resize", a), Ne("afterChange", a), Ne("pointerDown", function() { r.mouseZoomedIn && (i = !0, o.addClass(e, "pswp--dragging")) }), Ne("pointerUp", s), t || a() }, handleMouseWheel: function(e) {
                        if (y <= r.currItem.fitRatio) return l.modal && (!l.closeOnScroll || Ve || $ ? e.preventDefault() : I && Math.abs(e.deltaY) > 2 && (p = !0, r.close())), !0;
                        if (e.stopPropagation(), vn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (vn.x = 18 * e.deltaX, vn.y = 18 * e.deltaY) : (vn.x = e.deltaX, vn.y = e.deltaY);
                        else if ("wheelDelta" in e) e.wheelDeltaX && (vn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? vn.y = -.16 * e.wheelDeltaY : vn.y = -.16 * e.wheelDelta;
                        else {
                            if (!("detail" in e)) return;
                            vn.y = e.detail }
                        Ze(y, !0);
                        var t = he.x - vn.x,
                            n = he.y - vn.y;
                        (l.modal || t <= ne.min.x && t >= ne.max.x && n <= ne.min.y && n >= ne.max.y) && e.preventDefault(), r.panTo(t, n) }, toggleDesktopZoom: function(t) { t = t || { x: me.x / 2 + ve.x, y: me.y / 2 + ve.y };
                        var n = l.getDoubleTapZoom(!0, r.currItem),
                            i = y === n;
                        r.mouseZoomedIn = !i, r.zoomTo(i ? r.currItem.initialZoomLevel : n, t, 333), o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in") } } });
            var yn, bn, wn, xn, Tn, An, Cn, _n, kn, Nn, En, Sn, In = { history: !0, galleryUID: 1 },
                Mn = function() {
                    return En.hash.substring(1) },
                Dn = function() { yn && clearTimeout(yn), wn && clearTimeout(wn) },
                Ln = function() {
                    var e = Mn(),
                        t = {};
                    if (e.length < 5) return t;
                    var n, i = e.split("&");
                    for (n = 0; n < i.length; n++)
                        if (i[n]) {
                            var o = i[n].split("=");
                            o.length < 2 || (t[o[0]] = o[1]) }
                    if (l.galleryPIDs) {
                        var r = t.pid;
                        for (t.pid = 0, n = 0; n < Jt.length; n++)
                            if (Jt[n].pid === r) { t.pid = n;
                                break } } else t.pid = parseInt(t.pid, 10) - 1;
                    return t.pid < 0 && (t.pid = 0), t },
                jn = function() {
                    if (wn && clearTimeout(wn), Ve || $) return void(wn = setTimeout(jn, 500));
                    xn ? clearTimeout(bn) : xn = !0;
                    var e = d + 1,
                        t = Vt(d);
                    t.hasOwnProperty("pid") && (e = t.pid);
                    var n = Cn + "&gid=" + l.galleryUID + "&pid=" + e;
                    _n || En.hash.indexOf(n) === -1 && (Nn = !0);
                    var i = En.href.split("#")[0] + "#" + n;
                    Sn ? "#" + n !== window.location.hash && history[_n ? "replaceState" : "pushState"]("", document.title, i) : _n ? En.replace(i) : En.hash = n, _n = !0, bn = setTimeout(function() { xn = !1 }, 60) };
            Ce("History", { publicMethods: { initHistory: function() {
                        if (o.extend(l, In, !0), l.history) { En = window.location, Nn = !1, kn = !1, _n = !1, Cn = Mn(), Sn = "pushState" in history, Cn.indexOf("gid=") > -1 && (Cn = Cn.split("&gid=")[0], Cn = Cn.split("?gid=")[0]), Ne("afterChange", r.updateURL), Ne("unbindEvents", function() { o.unbind(window, "hashchange", r.onHashChange) });
                            var e = function() { An = !0, kn || (Nn ? history.back() : Cn ? En.hash = Cn : Sn ? history.pushState("", document.title, En.pathname + En.search) : En.hash = ""), Dn() };
                            Ne("unbindEvents", function() { p && e() }), Ne("destroy", function() { An || e() }), Ne("firstUpdate", function() { d = Ln().pid });
                            var t = Cn.indexOf("pid=");
                            t > -1 && (Cn = Cn.substring(0, t), "&" === Cn.slice(-1) && (Cn = Cn.slice(0, -1))), setTimeout(function() { u && o.bind(window, "hashchange", r.onHashChange) }, 40) } }, onHashChange: function() {
                        return Mn() === Cn ? (kn = !0, void r.close()) : void(xn || (Tn = !0, r.goTo(Ln().pid), Tn = !1)) }, updateURL: function() { Dn(), Tn || (_n ? yn = setTimeout(jn, 800) : jn()) } } }), o.extend(r, it) };
        return e })
}]);
