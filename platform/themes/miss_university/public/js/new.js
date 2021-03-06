!function (a) {
    "use strict";

    function i(a, i) {
        a.hasClass(i) || a.addClass(i)
    }

    function n(a, i) {
        a.hasClass(i) && a.removeClass(i)
    }

    function t() {
        var i = a("[data-background]");
        i.each(function () {
            if (a(this).attr("data-background")) {
                var i = a(this).attr("data-background");
                a(this).css({background: "url(" + i + ")"})
            }
        })
    }

    function e() {
        a(".bg-parallax").each(function () {
            u.any() ? a(this).css("background-attachment", "scroll") : a(this).parallax("50%", .2)
        })
    }

    function o() {
        var t = a(".navigation-toggle"), e = a(".navigation");
        t.length > 0 && t.on("click", function () {
            var t = a(this);
            t.hasClass("navigation-toggle--active") ? (t.removeClass("navigation-toggle--active"), n(e, "navigation--mobile--active")) : (t.addClass("navigation-toggle--active"), i(e, "navigation--mobile--active"))
        })
    }

    function s() {
        var i = a(".navigation--mobile");
        i.find(".menu-item-has-children");
        a("body").on("click", ".navigation--mobile .menu-item-has-children a .toggle-icon", function (i) {
            i.preventDefault(), console.log(!0);
            var n = a(this).closest('li').children(".sub-menu");
            a(this).closest('li').toggleClass("menu-item--active"), a(this).closest('li').siblings().removeClass("menu-item--active"), n.toggleClass("sub-menu--active"), a(this).closest('li').siblings().children(".sub-menu").removeClass("sub-menu--active")
        })
    }

    function r() {
        var t = a(".page-header"), e = t.data("responsive"), o = a(".navigation-toggle"), s = a(window).innerWidth();
        e > s ? (i(t.find(".navigation"), "navigation--mobile"), o.show()) : (o.hide(), n(t.find(".navigation"), "navigation--mobile"))
    }

    function l() {
        var i = 0, t = a(".page-header"), e = t.data("sticky"), o = t.data("sticky-checkpoint"), s = a(".navigation"),
            r = a(".page-searchbox"), l = a(".navigation-toggle");
        t.length > 0 && 1 == e && a(window).scroll(function () {
            var e = a(this).scrollTop();
            i > e ? 0 == e ? t.removeClass("header--sticky header--sticky-unpin header--sticky-pin") : e > o && (t.removeClass("header--sticky-unpin").addClass("header--sticky header--sticky-pin"), n(s, "navigation--mobile--active"), n(l, "navigation-toggle--active")) : e > o && (t.addClass("header--sticky-unpin").removeClass("header--sticky-pin"), r.removeClass("is__active"), n(s, "navigation--mobile--active"), n(l, "navigation-toggle--active")), i = e
        })
    }

    function c() {
        var i = a(".owl-slider");
        i.length > 0 && i.each(function () {
            var i = a(this), n = i.data("owl-auto"), t = i.data("owl-loop"), e = i.data("owl-speed"),
                o = i.data("owl-gap"), s = i.data("owl-nav"), r = i.data("owl-dots"), l = i.data("owl-animate-in"),
                c = i.data("owl-animate-out"), d = i.data("owl-item"), u = i.data("owl-item-xs"),
                v = i.data("owl-item-sm"), g = i.data("owl-item-md"), m = i.data("owl-item-lg"),
                h = i.data("owl-nav-left"), f = i.data("owl-nav-right");
            i.owlCarousel({
                animateIn: l,
                animateOut: c,
                margin: o,
                autoplay: n,
                autoplayTimeout: e,
                autoplayHoverPause: !0,
                loop: t,
                nav: s,
                mouseDrag: !0,
                touchDrag: !0,
                navText: [h, f],
                dots: r,
                items: d,
                responsive: {0: {items: u}, 480: {items: v}, 768: {items: g}, 992: {items: m}, 1200: {items: d}}
            })
        })
    }

    function d() {
        var i = 0, n = a("#back2top");
        a(window).scroll(function () {
            var t = a(window).scrollTop();
            t > i && t > 500 ? n.addClass("active") : n.removeClass("active"), i = t
        }), n.on("click", function () {
            a("html, body").animate({scrollTop: "0px"}, 800)
        })
    }

    var u = {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        }, BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        }, iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        }, Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        }, Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        }, any: function () {
            return u.Android() || u.BlackBerry() || u.iOS() || u.Opera() || u.Windows()
        }
    };
    a(document).ready(function () {
        t(), e(), l(), o(), s(), c(), d()
    }), a(window).on("load", function () {
    }), a(window).on("load resize", function () {
        r()
    }), a(window).on("resize", function () {
    })
}(jQuery);
