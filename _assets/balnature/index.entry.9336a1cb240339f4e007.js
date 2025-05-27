(window.webpackJsonp = window.webpackJsonp || []).push([
  [689],
  {
    "+QRC": function(e, t, a) {
      "use strict";
      var n = a("E9nw"),
        r = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function(e, t) {
        var a,
          i,
          s,
          o,
          c,
          l,
          m = !1;
        t || (t = {}), (a = t.debug || !1);
        try {
          if (
            (
              (s = n()),
              (o = document.createRange()),
              (c = document.getSelection()),
              ((l = document.createElement("span")).textContent = e),
              (l.style.all = "unset"),
              (l.style.position = "fixed"),
              (l.style.top = 0),
              (l.style.clip = "rect(0, 0, 0, 0)"),
              (l.style.whiteSpace = "pre"),
              (l.style.webkitUserSelect = "text"),
              (l.style.MozUserSelect = "text"),
              (l.style.msUserSelect = "text"),
              (l.style.userSelect = "text"),
              l.addEventListener("copy", function(n) {
                if ((n.stopPropagation(), t.format))
                  if ((n.preventDefault(), void 0 === n.clipboardData)) {
                    a && console.warn("unable to use e.clipboardData"), a &&
                      console.warn(
                        "trying IE specific stuff"
                      ), window.clipboardData.clearData();
                    var i = r[t.format] || r.default;
                    window.clipboardData.setData(i, e);
                  } else
                    n.clipboardData.clearData(), n.clipboardData.setData(
                      t.format,
                      e
                    );
                t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
              }),
              document.body.appendChild(l),
              o.selectNodeContents(l),
              c.addRange(o),
              !document.execCommand("copy")
            )
          )
            throw new Error("copy command was unsuccessful");
          m = !0;
        } catch (n) {
          a && console.error("unable to copy using execCommand: ", n), a &&
            console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e), t.onCopy &&
              t.onCopy(window.clipboardData), (m = !0);
          } catch (n) {
            a && console.error("unable to copy using clipboardData: ", n), a &&
              console.error("falling back to prompt"), (i = (function(e) {
              var t =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
              return e.replace(/#{\s*key\s*}/g, t);
            })(
              "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
            )), window.prompt(i, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(o)
              : c.removeAllRanges()), l && document.body.removeChild(l), s();
        }
        return m;
      };
    },
    "+iWg": function(e, t, a) {
      "use strict";
      var n = a("Wfk0"),
        r = a("q1tI"),
        i = a.n(r),
        s = a("TSYQ"),
        o = a.n(s),
        c = a("HoRD"),
        l = a("ZEpC"),
        m = a("6mC5"),
        d = a("a45L"),
        p = a("CeUd"),
        u = a("YyOh"),
        f = a("lX8u"),
        g = (
          a("pIps"),
          Object(p.a)(function() {
            var e = Object(m.a)();
            return i.a.createElement(
              c.b,
              { id: "sign-up" },
              i.a.createElement(
                "div",
                {
                  className: o()(
                    Object(c.g)({ justify: "center" }),
                    "jb-text-center"
                  )
                },
                i.a.createElement(
                  "div",
                  { className: Object(c.f)(11) },
                  i.a.createElement(
                    "h2",
                    { className: o()(e("wt-h1")) },
                    i.a.createElement(n.b, {
                      id: "Get started with Space today"
                    })
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: Object(c.f)(10) },
                  i.a.createElement(
                    "p",
                    {
                      className: o()(
                        e("wt-text-1", { hardness: "hard" }),
                        "wt-offset-top-32"
                      )
                    },
                    i.a.createElement(n.b, {
                      id:
                        "Çevre bilinci kazandırmayı amaçlayan bir SEAZER projesi"
                    })
                  ),
                  i.a.createElement(
                    d.a,
                    {
                      href: "/balnature/download/",
                      mode: "contrast",
                      className: "wt-offset-top-32"
                    },
                    i.a.createElement(n.b, { id: "Bize katıl" })
                  )
                )
              )
            );
          })
        ),
        h = function() {
          var e = Object(l.f)();
          return i.a.createElement(
            c.e,
            { className: "form-section" },
            e
              ? i.a.createElement(g, null)
              : i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(f.a, {
                    src: "/balnature/img/form-section/space-get-started.webp",
                    fallback: "/balnature/img/form-section/space-get-started.svg",
                    alt: "",
                    className: "form-section__boy"
                  }),
                  i.a.createElement("div", {
                    id: "sign-up",
                    className: "form-section__anchor"
                  }),
                  i.a.createElement(
                    c.b,
                    null,
                    i.a.createElement(
                      "div",
                      { className: Object(c.g)({ justify: "center" }) },
                      i.a.createElement(
                        "div",
                        { className: Object(c.f)({ default: 12, md: 5 }) },
                        i.a.createElement(u.a, { mode: "main-section" })
                      )
                    )
                  )
                )
          );
        };
      a.d(t, "a", function() {
        return h;
      });
    },
    "1ACl": function(e, t, a) {},
    "1U1J": function(e, t, a) {},
    "2VS/": function(e, t, a) {
      "use strict";
      var n = a("q1tI"),
        r = a.n(n),
        i = a("17x9"),
        s = a.n(i),
        o = a("vUPH"),
        c = a("HoRD"),
        l = a("35Ri"),
        m = a("TSYQ"),
        d = a.n(m),
        p = a("I3Lj"),
        u = (
          a("Vu8W"),
          function(e) {
            var t = e.theme,
              a = void 0 === t ? "light" : t;
            return r.a.createElement(
              l.c,
              { theme: a },
              r.a.createElement(
                c.e,
                {
                  background: "dark" === a ? "gray-dark" : "gray-light",
                  className: d()(
                    "space-social-footer",
                    "space-social-footer__theme_".concat(a)
                  ),
                  id: "social-footer"
                },
                r.a.createElement(o.a, {
                  formData: {
                    id: 4007,
                    title: p.i18n._(
                      p.i18n._(
                        "Yeni özellikler çıktıkça bana E-Posta ile gönder."
                      )
                    ),
                    name: "Space Newsletter",
                    newsletter: "spaceNewsletter",
                    additionalSubscribe: {
                      value: "spaceBlog",
                      name: "Space Blog",
                      text: p.i18n._(
                        p.i18n._("Yeni çıkan makaleleri de bana bildir")
                      )
                    },
                    afterSubmitText: p.i18n._(
                      p.i18n._("Thank you for signing up!")
                    ),
                    useNewEndpoint: !0,
                    sampleNewsletterLink:
                      "https://info.jetbrains.com/rs/426-QVD-114/images/space-sample.html"
                  },
                  socialLinks: [
                    {
                      href:
                        "https://space-support.jetbrains.com/hc/en-us/community/topics",
                      type: "forum"
                    },
                    {
                      href:
                        "https://youtrack.jetbrains.com/newIssue?project=CRL",
                      type: "bug"
                    },
                    {
                      href: "https://blog.jetbrains.com/space",
                      type: "blog",
                      text: p.i18n._(p.i18n._("BalNature bloğu"))
                    }
                  ],
                  socialNetworksLinks: [
                    {
                      href: "https://twitter.com/jetbrains_space",
                      type: "twitter"
                    }
                  ],
                  socialTitle: p.i18n._(p.i18n._("Bizle temasa geçin"))
                })
              )
            );
          }
        );
      (u.propTypes = { theme: s.a.oneOf(["dark", "light"]) }), (t.a = u);
    },
    "3YVU": function(e, t, a) {},
    "3dk/": function(e, t, a) {
      "use strict";
      a("pNMO"), a("4Brf"), a("mRH6");
      var n = a("FLGM"),
        r = a.n(n),
        i = a("Wfk0"),
        s = a("q1tI"),
        o = a.n(s),
        c = a("17x9"),
        l = a.n(c),
        m = a("TSYQ"),
        d = a.n(m),
        p = a("ZEpC"),
        u = a("1nw9"),
        f = (a("dd+g"), a("HoRD")),
        g = function(e) {
          var t = e.data,
            a = t.title,
            n = t.learnMore,
            s = t.slides,
            c = void 0 === s ? [] : s,
            l = Object(u.e)(),
            m = Object(p.e)();
          return o.a.createElement(
            "div",
            { className: "continuous-carousel" },
            o.a.createElement(
              "div",
              {
                className: d()("continuous-carousel__group", "wt-offset-top-24")
              },
              a &&
                o.a.createElement(
                  "h3",
                  {
                    className: d()(
                      l("rs-h3"),
                      "wt-offset-top-24 wt-offset-top-sm-32 continuous-carousel__title",
                      !m && "jb-text-center"
                    )
                  },
                  n
                    ? o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(i.b, { id: "to" }),
                        " ",
                        o.a.createElement(
                          "a",
                          {
                            href: n.link,
                            className: "continuous-carousel__link",
                            title: n.title
                          },
                          a
                        ),
                        " "
                      )
                    : a
                ),
              o.a.createElement(
                "div",
                { className: "continuous-carousel__slides" },
                r()(c).call(c, function(e) {
                  var t = e.id,
                    a = e.title,
                    n = e.description,
                    r = e.img;
                  return o.a.createElement(
                    "div",
                    { className: "continuous-carousel__slide", key: t },
                    o.a.createElement("img", {
                      src: r.src,
                      alt: r.alt,
                      loading: "lazy",
                      className: "continuous-carousel__img"
                    }),
                    o.a.createElement(
                      "p",
                      {
                        className: d()(
                          l("rs-text-2", { hardness: "hard" }),
                          "wt-offset-top-12",
                          "jb-text-center",
                          "continuous-carousel__text"
                        )
                      },
                      a
                    ),
                    n &&
                      o.a.createElement(
                        "div",
                        {
                          className: d()(
                            Object(f.g)({ justify: "center" }),
                            "wt-offset-top-12"
                          )
                        },
                        o.a.createElement(
                          "div",
                          { className: Object(f.f)({ default: 8 }) },
                          o.a.createElement(
                            "p",
                            {
                              className: d()(
                                l("rs-text-3", { hardness: "hard" }),
                                "jb-text-center",
                                "continuous-carousel__text"
                              )
                            },
                            n
                          )
                        )
                      )
                  );
                })
              )
            )
          );
        };
      g.propTypes = {
        data: l.a.shape({
          id: l.a.string,
          title: l.a.node,
          learnMore: l.a.shape({
            title: l.a.string.isRequired,
            link: l.a.string.isRequired
          }),
          slides: l.a.arrayOf(
            l.a.shape({
              id: l.a.string.isRequired,
              title: l.a.node.isRequired,
              description: l.a.node,
              img: l.a.shape({
                src: l.a.string.isRequired,
                alt: l.a.string.isRequired
              }).isRequired
            })
          )
        })
      };
      var h = g;
      a.d(t, "a", function() {
        return h;
      });
    },
    "3r9m": function(e, t, a) {},
    "4sSH": function(e, t, a) {
      "use strict";
      var n = a("Kwsy"),
        r = a.n(n),
        i = a("5Yf3"),
        s = (a("I3Lj"), a("q1tI")),
        o = a.n(s),
        c = a("17x9"),
        l = a.n(c),
        m = a("+QRC"),
        d = a.n(m),
        p = a("Wfk0"),
        u = a("bJbh"),
        f = a("ZmuA"),
        g = a("a45L"),
        h = (
          a("kC/l"),
          function(e) {
            var t = e.i18n,
              a = e.text,
              n = e.icon,
              c = e.theme,
              l = void 0 === c ? "light" : c,
              m = e.isButton,
              p = void 0 !== m && m,
              h = e.buttonText,
              v = void 0 === h ? "" : h,
              b = e.buttonMode,
              w = void 0 === b ? "nude" : b,
              E = Object(s.useState)(!1),
              _ = Object(i.a)(E, 2),
              y = _[0],
              N = _[1],
              j = Object(s.useState)(null),
              O = Object(i.a)(j, 2),
              k = O[0],
              x = O[1],
              S = function() {
                d()(a) &&
                  (
                    N(!0),
                    k && clearTimeout(k),
                    x(
                      r()(function() {
                        N(!1);
                      }, 2e3)
                    )
                  );
              };
            return o.a.createElement(
              f.a,
              {
                content: t._(t._("Copied")),
                isVisible: y,
                className: "copy-tooltip",
                placement: "bottom"
              },
              p
                ? o.a.createElement(
                    g.a,
                    {
                      className: "copy-button",
                      mode: w,
                      theme: l,
                      tabIndex: 0,
                      onClick: S,
                      onKeyDown: S,
                      icon: n || o.a.createElement(u.a, null)
                    },
                    v
                  )
                : o.a.createElement(
                    "div",
                    {
                      className: "copy-button",
                      role: "button",
                      tabIndex: 0,
                      onClick: S,
                      onKeyDown: S
                    },
                    n || o.a.createElement(u.a, null)
                  )
            );
          }
        );
      (h.propTypes = {
        i18n: l.a.shape({ _: l.a.func }),
        text: l.a.string,
        icon: l.a.node,
        theme: l.a.string,
        isButton: l.a.bool,
        buttonText: l.a.node,
        buttonMode: l.a.string
      }), (t.a = Object(p.d)()(h));
    },
    "5EML": function(e, t, a) {},
    "5QlP": function(e, t, a) {},
    "5mIx": function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return g;
      });
      a("gjZv");
      var n = a("LK4Q"),
        r = a("39/O"),
        i = a("q1tI"),
        s = a.n(i),
        o = a("17x9"),
        c = a.n(o),
        l = a("TSYQ"),
        m = a.n(l),
        d = a("5+di"),
        p = d.a["wt-icon"],
        u = "xs",
        f = s.a.forwardRef(function(e, t) {
          var a = e.theme,
            i = e.size,
            o = e.className,
            c = Object(r.a)(e, ["theme", "size", "className"]);
          return i === u
            ? s.a.createElement(
                "svg",
                Object(n.a)({ viewBox: "0 0 16 16" }, c, {
                  className: m()(p, d.a[a], d.a[i], o),
                  ref: t
                }),
                s.a.createElement("path", {
                  d:
                    "M14.094 3.801a3.093 3.093 0 0 0-4.373 0L6.653 6.87l.964.964 3.068-3.069A1.729 1.729 0 0 1 13.13 7.21l-3.068 3.069.964.964 3.068-3.068a3.093 3.093 0 0 0 0-4.374z"
                }),
                s.a.createElement("path", {
                  d:
                    "M5.313 11.618a1.729 1.729 0 0 1-2.445-2.445l3.068-3.068-.964-.964-3.068 3.068a3.092 3.092 0 0 0 4.373 4.374l3.069-3.069-.965-.964z"
                })
              )
            : s.a.createElement(
                "svg",
                Object(n.a)({ viewBox: "0 0 24 24" }, c, {
                  className: m()(p, d.a[a], d.a[i], o),
                  ref: t
                }),
                s.a.createElement("path", {
                  d:
                    "M21.207 4.793a4.536 4.536 0 0 0-6.414 0l-4.5 4.5 1.414 1.414 4.5-4.5a2.536 2.536 0 0 1 3.586 3.586l-4.5 4.5 1.414 1.414 4.5-4.5a4.536 4.536 0 0 0 0-6.414z"
                }),
                s.a.createElement("path", {
                  d:
                    "M8.328 16.258a2.536 2.536 0 1 1-3.586-3.586l4.5-4.5-1.414-1.414-4.5 4.5a4.535 4.535 0 0 0 6.414 6.414l4.5-4.5-1.414-1.414z"
                })
              );
        });
      (f.propTypes = {
        className: c.a.string,
        theme: c.a.oneOf(["light", "dark"]),
        size: c.a.oneOf(["xs", "s", "m", "l"])
      }), (f.defaultProps = { size: "m" });
      var g = f;
    },
    687: function(e, t, a) {
      a("ctTR"), (e.exports = a("kB7H"));
    },
    "6MAW": function(e, t, a) {
      e.exports =
        a.p +
        "common-ui/components/space-feedback/img/krishna-avatar.67d97f1b92334c9f1c849a47ebba4525.jpg";
    },
    "7A8Y": function(e, t, a) {},
    "7tit": function(e, t, a) {
      "use strict";
      var n = a("TVie"),
        r = a("hQI6"),
        i = a("LK4Q"),
        s = a("FLGM"),
        o = a.n(s),
        c = a("5Yf3"),
        l = a("Wfk0"),
        m = a("q1tI"),
        d = a.n(m),
        p = a("17x9"),
        u = a.n(p),
        f = a("TSYQ"),
        g = a.n(f),
        h = a("HoRD"),
        v = a("ZEpC"),
        b = a("6mC5"),
        w = a("a45L"),
        E = a("3dk/"),
        _ = a("60d8"),
        y = a("tKqw"),
        N = (
          a("3r9m"),
          function(e) {
            var t = e.tabs,
              a = e.slideshowDuration,
              r = void 0 === a ? 5e3 : a,
              s = e.slideshowClassName,
              p = e.className,
              u = Object(v.e)(),
              f = Object(v.f)(),
              N = Object(m.useState)(0),
              j = Object(c.a)(N, 2),
              O = j[0],
              k = j[1],
              x = Object(b.a)(),
              S = Object(_.a)({ size: t[O].slides.length, delay: r }),
              C = Object(c.a)(S, 4),
              I = C[0],
              T = C[1],
              R = C[2],
              L = C[3],
              D = L.resetSelfStop,
              A = L.wasStopped;
            return Object(m.useEffect)(
              function() {
                R(0), D();
              },
              [O]
            ), u
              ? d.a.createElement(
                  "div",
                  { className: "carousel-wrapper" },
                  !f &&
                    d.a.createElement(
                      d.a.Fragment,
                      null,
                      d.a.createElement("img", {
                        src:
                          "/balnature/img/slideshow-section/space-big-person.svg",
                        alt: "",
                        className: "slideshow-section__man"
                      }),
                      d.a.createElement("img", {
                        src:
                          "/balnature/img/slideshow-section/space-big-person-hand.svg",
                        alt: "",
                        className: "slideshow-section__hand"
                      })
                    ),
                  f &&
                    d.a.createElement("img", {
                      src: "/balnature/img/slideshow-section/bubbles_left.svg",
                      alt: "",
                      className: "slideshow-section__bubbles"
                    }),
                  o()(t).call(t, function(e) {
                    return d.a.createElement(E.a, {
                      key: e.id,
                      data: e,
                      className: p
                    });
                  })
                )
              : d.a.createElement(
                  "div",
                  { className: g()("slideshow-with-tabs", p) },
                  d.a.createElement("img", {
                    src: "/balnature/img/slideshow-section/space-big-person.svg",
                    alt: "",
                    className: "slideshow-section__man"
                  }),
                  d.a.createElement("img", {
                    src:
                      "/balnature/img/slideshow-section/space-big-person-hand.svg",
                    alt: "",
                    className: "slideshow-section__hand"
                  }),
                  d.a.createElement(
                    "div",
                    {
                      className: g()(
                        Object(h.g)({
                          size: { default: "s", lg: "xs" },
                          justify: "center",
                          alignItems: "baseline"
                        }),
                        "slideshow-with-tabs__tabs"
                      )
                    },
                    d.a.createElement(
                      "span",
                      {
                        className: g()(
                          x("wt-text-1", { hardness: "hard" }),
                          Object(h.f)("inline"),
                          "wt-offset-top-12"
                        )
                      },
                      d.a.createElement(l.b, { id: "to" })
                    ),
                    o()(t).call(t, function(e, t) {
                      var a = e.id,
                        n = e.title;
                      return d.a.createElement(
                        m.Fragment,
                        { key: "tab-".concat(a) },
                        d.a.createElement(
                          w.a,
                          {
                            size: "s",
                            mode: "contrast",
                            theme: t === O ? "light" : "dark",
                            onClick: function() {
                              return k(t);
                            },
                            className: g()(
                              Object(h.f)("inline"),
                              "wt-offset-top-12"
                            )
                          },
                          n
                        )
                      );
                    })
                  ),
                  d.a.createElement(
                    "ul",
                    {
                      className: g()(
                        "slideshow-with-tabs__content",
                        "wt-offset-top-12",
                        "wt-offset-top-lg-24"
                      )
                    },
                    o()(t).call(t, function(e, t) {
                      var a = e.id,
                        c = e.learnMore,
                        l = e.slides;
                      return d.a.createElement(
                        "li",
                        {
                          key: "li-".concat(a),
                          className: "slideshow-with-tabs__slideshow slideshow-with-tabs__slideshow_".concat(
                            t === O ? "visible" : "hidden"
                          )
                        },
                        d.a.createElement(
                          n.a,
                          {
                            ref: I,
                            activeSlideIndex: t === O ? T : -1,
                            onActiveSlideChange: R,
                            progressDuration: !A && r,
                            learnMore: c,
                            className: s
                          },
                          o()(l).call(l, function(e) {
                            return d.a.createElement(
                              y.a,
                              Object(i.a)({ key: e.id }, e)
                            );
                          })
                        )
                      );
                    })
                  )
                );
          }
        );
      (N.propTypes = {
        tabs: u.a.arrayOf(
          u.a.shape({
            id: u.a.string.isRequired,
            title: u.a.node.isRequired,
            learnMore: u.a.shape({
              title: u.a.string.isRequired,
              link: u.a.string.isRequired
            }),
            slides: u.a.arrayOf(
              u.a.shape({
                id: u.a.string.isRequired,
                title: u.a.node.isRequired,
                img: u.a.shape({ src: u.a.string, alt: u.a.string }).isRequired
              })
            )
          })
        ),
        slideshowDuration: u.a.number,
        slideshowClassName: u.a.string
      }), a.d(t, "a", function() {
        return r.a;
      }), a.d(t, "b", function() {
        return N;
      });
    },
    "9HjU": function(e, t, a) {
      "use strict";
      var n = a("5Yf3"),
        r = a("i5y0"),
        i = a.n(r),
        s = a("FLGM"),
        o = a.n(s),
        c = a("q1tI"),
        l = a.n(c),
        m = a("17x9"),
        d = a.n(m),
        p = a("TSYQ"),
        u = a.n(p),
        f = a("I3Lj"),
        g = a("1nw9"),
        h = a("UtpJ"),
        v = a.n(h),
        b = a("Wfk0"),
        w = a("p/hv"),
        E = a("35Ri"),
        _ = (a("sMBO"), a("R8cT")),
        y = a.n(_);
      function N(e) {
        var t = e.className;
        return l.a.createElement(
          "svg",
          {
            className: t,
            width: "56",
            height: "56",
            viewBox: "0 0 56 56",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          },
          l.a.createElement("path", { d: "M0 0H56V56H0V0Z", fill: "#2A3EF9" }),
          l.a.createElement("path", {
            d:
              "M20.3469 40C28.8922 39.2529 36.3869 33.9996 40.0058 26.2248C35.0794 19.1971 26.7909 15.3447 18.2456 16.0918C14.6267 23.8666 15.4205 32.9723 20.3469 40Z",
            stroke: "white",
            strokeLinejoin: "round"
          }),
          l.a.createElement("path", {
            d:
              "M30.8768 26.2248H39.9825C39.9825 26.2248 39.9825 26.2481 39.9825 26.2248C35.0794 19.1971 26.7909 15.3447 18.2456 16.0918C18.2456 16.0918 25.857 18.7768 30.8768 26.2248Z",
            stroke: "white",
            strokeLinejoin: "round"
          }),
          l.a.createElement("path", {
            d:
              "M40.0057 26.2249H30.9C29.6859 33.4627 20.3701 40.0001 20.3701 40.0001C28.8687 39.253 36.3634 33.9763 40.0057 26.2249Z",
            stroke: "white",
            strokeLinejoin: "round"
          })
        );
      }
      function j(e) {
        var t = e.className,
          a = e.iconUrl,
          r = e.name,
          i = Object(c.useState)(!a),
          s = Object(n.a)(i, 2),
          o = s[0],
          m = s[1],
          d = Object(c.useCallback)(
            function() {
              m(!0);
            },
            [m]
          );
        return o
          ? l.a.createElement(N, { className: t })
          : l.a.createElement("img", {
              className: t,
              src: a,
              onError: d,
              alt: "".concat(r, " logo")
            });
      }
      j.propTypes = {
        iconUrl: d.a.string,
        name: d.a.string,
        className: d.a.string
      };
      var O = d.a.shape({
          id: d.a.string.isRequired,
          name: d.a.string.isRequired,
          domain: d.a.string.isRequired,
          profileId: d.a.string,
          logoUrl: d.a.string.isRequired,
          orgUrl: d.a.string.isRequired,
          signUpUrl: d.a.string,
          invitationToken: d.a.string
        }),
        k = (
          a("K1xC"),
          function(e) {
            var t = e.workspace,
              a = t.logoUrl,
              n = t.orgUrl,
              r = t.signUpUrl,
              i = t.name,
              s = t.className,
              o = t.profileId,
              c = Object(g.e)(),
              m = Object(E.d)();
            return l.a.createElement(
              "li",
              {
                className: u()(
                  "space-workspace-item",
                  "space-workspace-item_theme_".concat(m),
                  s
                )
              },
              l.a.createElement(j, {
                className: "space-workspace-item__icon",
                iconUrl: a,
                name: i
              }),
              l.a.createElement(
                "div",
                { className: "space-workspace-item__text" },
                l.a.createElement(
                  "div",
                  {
                    className: u()(
                      "space-workspace-item__name",
                      c("rs-text-2", { hardness: "hard" })
                    )
                  },
                  i
                ),
                l.a.createElement(
                  "div",
                  {
                    className: u()(
                      "space-workspace-item__url",
                      c("rs-text-3", { hardness: "pale" })
                    )
                  },
                  new y.a(n).hostname
                )
              ),
              l.a.createElement(
                w.a,
                {
                  href: o ? n : r,
                  rel: "noreferrer noopener",
                  size: "s",
                  mode: o ? "classic" : "outline",
                  className: "space-workspace-item__button"
                },
                o
                  ? l.a.createElement(b.b, { id: "Open" })
                  : f.i18n._(
                      f.i18n._({ id: "dup__Join__Space", message: "Join" })
                    )
              )
            );
          }
        );
      k.propTypes = { workspace: O };
      var x = k,
        S = (
          a("vcNZ"),
          function(e) {
            var t = e.workspaces,
              a = void 0 === t ? [] : t,
              n = e.className,
              r = e.theme,
              i = void 0 === r ? "light" : r;
            return l.a.createElement(
              E.c,
              { theme: i },
              l.a.createElement(
                "ul",
                { className: u()("space-workspaces-list", n) },
                o()(a).call(a, function(e) {
                  return l.a.createElement(x, { key: e.id, workspace: e });
                })
              )
            );
          }
        );
      S.propTypes = {
        workspaces: d.a.arrayOf(O).isRequired,
        theme: d.a.string
      };
      var C = S,
        I = (
          a("SyKh"),
          function(e) {
            var t = e.workspaces,
              a = void 0 === t ? [] : t,
              n = e.shownItems,
              r = void 0 === n ? 3 : n,
              i = a.length > r,
              s = Object(c.useMemo)(
                function() {
                  return v()(a).call(a, 0, r);
                },
                [a, r]
              );
            return l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(C, { workspaces: s, theme: "light" }),
              i &&
                l.a.createElement(
                  w.a,
                  {
                    mode: "outline",
                    className: "space-workspaces-toggle wt-offset-top-12",
                    href: "/balnature/app/my/",
                    theme: "dark"
                  },
                  l.a.createElement(b.b, { id: "Daha fazla" })
                )
            );
          }
        );
      I.propTypes = {
        workspaces: d.a.arrayOf(O).isRequired,
        shownItems: d.a.number
      };
      var T = I,
        R = a("STz3"),
        L = a.n(R),
        D = a("cdeZ"),
        A = a.n(D),
        z = function(e) {
          var t;
          return 0 !== A()((t = L()(e))).call(t).length;
        },
        H = (
          a("poYY"),
          {
            hasAccountIn: f.i18n._(f.i18n._("Log in to")),
            invitedIn: f.i18n._(f.i18n._("Join an existing organization")),
            canSignInBecauseOfEmailDomain: f.i18n._(
              f.i18n._("Accept pending invitations")
            )
          }
        ),
        M = function(e) {
          var t,
            a = e.workspaceSections,
            r = Object(g.e)();
          return z(a)
            ? l.a.createElement(
                "ul",
                { className: "space-workspaces" },
                o()((t = i()(a))).call(t, function(e, t) {
                  var a = Object(n.a)(e, 2),
                    i = a[0],
                    s = a[1],
                    o = H[i];
                  return s && 0 !== s.length
                    ? l.a.createElement(
                        "li",
                        {
                          key: i,
                          className: u()(0 !== t && "wt-offset-top-24")
                        },
                        l.a.createElement(
                          "h2",
                          {
                            className: u()(r("rs-text-2", { hardness: "hard" }))
                          },
                          o
                        ),
                        l.a.createElement(T, { workspaces: s })
                      )
                    : null;
                })
              )
            : null;
        };
      M.propTypes = {
        workspaceSections: d.a.shape({
          hasAccountIn: d.a.arrayOf(O),
          invitedIn: d.a.arrayOf(O),
          canSignInBecauseOfEmailDomain: d.a.arrayOf(O)
        })
      };
      var F = M,
        P = a("LYCE"),
        U = a.n(P),
        G = a("HnXd"),
        q = a.n(G),
        B = a("qjzJ"),
        W = a.n(B),
        Y = a("fHi0"),
        Q = a.n(Y),
        V = a("5PDf"),
        K = a.n(V),
        J = a("OWCx"),
        Z = a.n(J),
        X = a("+oHS"),
        $ = a.n(X),
        ee = a("L6fE"),
        te = a("KYsz"),
        ae = a.n(te),
        ne = a("ZbhI"),
        re = a.n(ne),
        ie = a("RXMP"),
        se = a.n(ie),
        oe = a("iYwg");
      function ce(e, t) {
        var a = $()(e);
        if (Z.a) {
          var n = Z()(e);
          t &&
            (n = K()(n).call(n, function(t) {
              return Q()(e, t).enumerable;
            })), a.push.apply(a, n);
        }
        return a;
      }
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a,
            n = null != arguments[t] ? arguments[t] : {};
          if (t % 2)
            se()((a = ce(Object(n), !0))).call(a, function(t) {
              Object(ee.a)(e, t, n[t]);
            });
          else if (W.a) q()(e, W()(n));
          else {
            var r;
            se()((r = ce(Object(n)))).call(r, function(t) {
              U()(e, t, Q()(n, t));
            });
          }
        }
        return e;
      }
      var me = function() {
        var e = Object(oe.b)("/balnature/app/api/orgs-for-me", {
            init: { origin: "client", credentials: "include" }
          }),
          t = e.data,
          a = Object(c.useMemo)(
            function() {
              return (function() {
                var e,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  a = t.myOrgs,
                  n = void 0 === a ? [] : a,
                  r = [
                    "hasAccountIn",
                    "invitedIn",
                    "canSignInBecauseOfEmailDomain"
                  ],
                  i = {};
                return se()(n).call(n, function(e) {
                  se()(r).call(r, function(t, a) {
                    var n = e[t];
                    n &&
                      n.length &&
                      se()(n).call(n, function(e) {
                        (!i[e.id] ||
                          re()(r).call(r, i[e.id].sectionName) > a) &&
                          (i[e.id] = { sectionName: t, workspace: e });
                      });
                  });
                }), ae()((e = L()(i))).call(
                  e,
                  function(e, t) {
                    var a = t.sectionName,
                      n = t.workspace;
                    return e[a] || (e[a] = []), e[a].push(n), e;
                  },
                  {}
                );
              })(t);
            },
            [t]
          );
        return le(le({}, e), {}, { data: a });
      };
      a.d(t, "b", function() {
        return F;
      }), a.d(t, "e", function() {
        return me;
      }), a.d(t, "a", function() {
        return j;
      }), a.d(t, "d", function() {
        return O;
      }), a.d(t, "c", function() {
        return z;
      });
    },
    "9UGV": function(e, t, a) {},
    ANXU: function(e, t, a) {},
    AzkY: function(e, t, a) {
      "use strict";
      var n = a("q1tI"),
        r = a.n(n),
        i = a("17x9"),
        s = a.n(i),
        o = a("lX8u"),
        c = a("sWQv"),
        l = a("Wfk0"),
        m = a("HoRD"),
        d = a("6mC5"),
        p = a("TSYQ"),
        u = a.n(p),
        f = a("p8ej"),
        g = (
          a("emn0"),
          function(e) {
            var t = e.isPromo,
              a = Object(d.a)();
            return r.a.createElement(
              m.e,
              { background: "dark", className: "software-development-section" },
              r.a.createElement(
                m.b,
                { className: "jb-text-center jb-text-sm-left" },
                r.a.createElement(
                  "h2",
                  { className: u()(a("wt-h1", { flow: !0 }), "soft-hyphens") },
                  r.a.createElement(l.b, {
                    id: "Your entire software development pipeline in one tool"
                  })
                ),
                r.a.createElement(f.a, { isPromo: t })
              )
            );
          }
        );
      g.propTypes = { isPromo: s.a.bool };
      var h = a("itpT"),
        v = a("OXK2"),
        b = a("t28y"),
        w = a("b/1s"),
        E = a("+iWg"),
        _ = a("jEdN"),
        y = (a("pNMO"), a("4Brf"), a("FLGM")),
        N = a.n(y),
        j = a("ZEpC"),
        O = a("a45L"),
        k = a("aQfe"),
        x = a("p0cW"),
        S = a("1//O"),
        C = a("CeUd"),
        I = a("SsmJ"),
        T = (
          a("5QlP"),
          function(e) {
            var t = e.img,
              a = e.title,
              n = e.description,
              i = Object(d.a)();
            return r.a.createElement(
              "div",
              {
                className: u()(
                  Object(m.f)({ default: 3, md: 4, sm: 6 }),
                  "wt-offset-top-48 wt-offset-top-sm-32 application-card"
                )
              },
              r.a.createElement("img", {
                src: "/balnature/img/extend-section/icons/".concat(t, ".svg"),
                alt: "",
                className: "application-card__img"
              }),
              r.a.createElement(
                "h3",
                {
                  className: u()(
                    i("wt-h3"),
                    "wt-offset-top-12 application-card__title"
                  )
                },
                a
              ),
              r.a.createElement(
                "p",
                {
                  className: u()(
                    i("wt-text-2", { hardness: "hard" }),
                    "wt-offset-top-16 wt-offset-top-sm-8 application-card__description"
                  )
                },
                n
              )
            );
          }
        );
      T.propTypes = {
        img: s.a.string.isRequired,
        title: s.a.string.isRequired,
        description: s.a.string.isRequired
      };
      var R = a("I3Lj"),
        L = [
          {
            img: "applications",
            title: R.i18n._(R.i18n._("Uygulamalar")),
            description: R.i18n._(
              R.i18n._(
                "Şu anlık BalNAture projesinin kullanıcıya sunulu sadece bir uygulaması vardır. Fakat BalNature Mağzasında zamanla daha fazla uygulama göreceğinize emin olabilirsiniz."
              )
            )
          },
          {
            img: "space-client-SDK",
            title: R.i18n._(R.i18n._("BalNature SDK")),
            description: R.i18n._(
              R.i18n._(
                "Kotlin ve .NET için resmi bir BalNature İstemci SDK'sı sağlıyoruz, böylece kaynak kodu düzeyinde BalNature ile daha da sıkı bir şekilde bütünleşebilirsiniz."
              )
            )
          },
          {
            img: "http-api",
            title: R.i18n._(R.i18n._("HTTP API")),
            description: R.i18n._(
              R.i18n._(
                "Harici hizmetlerden Uzay sohbetlerine bildirim göndermek, sohbet botları oluşturmak, verileri içe aktarmak, harici Git depolarıyla entegre etmek ve çok daha fazlası için zengin ve iyi belgelenmiş bir HTTP API kullanın."
              )
            )
          },
          {
            img: "Interactive-bots",
            title: R.i18n._(R.i18n._("Etkileşimli botlar")),
            description: R.i18n._(
              R.i18n._(
                "Uygulamalar, doğrudan Sohbetlerde mesajlara yanıt verecek botları kaydedebilir ve metin ve akıllı eylemler yoluyla onlarla etkileşime girebileceksiniz."
              )
            )
          },
          {
            img: "import-data-into-space",
            title: R.i18n._(R.i18n._("BalNature'ye veri ekle")),
            description: R.i18n._(
              R.i18n._(
                "BalNature'ye veri ekle using APIs. Use our custom import scripts designed to help you import issues from GitHub and YouTrack as an example for similar import use cases."
              )
            )
          },
          {
            img: "no-code",
            title: R.i18n._(R.i18n._("Tüm cihazlarda canlı veri aktarımı")),
            description: R.i18n._(
              R.i18n._(
                "Uygulamanızda bir değişiklik yapın ve taaaak. diğer cihazınızda eş zamanlı uygulanmış.Uygulamalarda yaptığınız değişiklikler BAlNAture altyapısıyla tüm cihazlarda etkisini gösterir."
              )
            )
          },
          {
            img: "webhooks",
            title: R.i18n._(R.i18n._("Webhooks")),
            description: R.i18n._(
              R.i18n._(
                "Web sitesinin kaynaklarından yararlanın : Okulunuzun,kendinizin harcamalarını görün,bilgiler öğrenin,forumda tartışın,verilerimizi okuyun."
              )
            )
          }
        ],
        D = (
          a("MzLV"),
          Object(C.a)(function() {
            var e = Object(d.a)(),
              t = Object(S.a)(I.a),
              a = Object(j.f)();
            return r.a.createElement(
              m.e,
              { className: "extend-section", id: "extend" },
              r.a.createElement(
                m.b,
                { className: "wt-offset-top-md-96 wt-offset-top-sm-0" },
                a &&
                  r.a.createElement("img", {
                    src: "/balnature/img/header-section/space-platform-lady.svg",
                    alt: "",
                    className: "extend-section__girl"
                  }),
                r.a.createElement(
                  "div",
                  { className: Object(m.g)({ justify: "center" }) },
                  r.a.createElement(
                    "div",
                    { className: u()(Object(m.f)(12), "jb-text-center") },
                    r.a.createElement(
                      "h2",
                      { className: e("wt-h1") },
                      r.a.createElement(l.b, {
                        id: "Alanı Genişletin  <0/> ve Özelleştirin",
                        components: {
                          0: r.a.createElement("br", {
                            className: "wt-display-none wt-display-md-block"
                          })
                        }
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className: u()(
                        Object(m.f)({ default: 8, md: 11, sm: 12 }),
                        "jb-text-center",
                        "wt-offset-top-24"
                      )
                    },
                    r.a.createElement(
                      "p",
                      { className: e("wt-text-1", { hardness: "hard" }) },
                      r.a.createElement(l.b, {
                        id:
                          "BalNature genişletilebilir bir platformdur ve çok çeşitli uzantılar ve entegrasyonlar için birinci sınıf destek sağlamaya kararlıyız."
                      })
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  {
                    className: Object(m.g)({
                      alignItems: "stretch",
                      justify: "center"
                    })
                  },
                  r.a.createElement(
                    "a",
                    {
                      className: u()(
                        Object(m.f)(12),
                        Object(x.a)({ theme: "dark", isClickable: !0 }),
                        "card-marketplace",
                        "jb-vertical-flex",
                        "wt-offset-top-48"
                      ),
                      ref: t,
                      href: "https://plugins.jetbrains.com/space"
                    },
                    r.a.createElement(
                      "div",
                      {
                        className: u()(Object(m.g)(), "jb-vertical-flex__grow")
                      },
                      r.a.createElement(
                        "div",
                        { className: Object(m.f)({ default: 11, md: 12 }) },
                        r.a.createElement(
                          "p",
                          { className: e("wt-subtitle-2") },
                          r.a.createElement(l.b, {
                            id:
                              "Kendi uygulamalarınızı oluşturun veya BalNature'nin  <0><1>Uygulama Mağzasındaki  </1> <2>Beta</2></0> uygulamaları kullanın.",
                            components: {
                              0: r.a.createElement("span", {
                                className: "jb-text-nowrap"
                              }),
                              1: r.a.createElement("b", {
                                className: "card-marketplace__text-primary"
                              }),
                              2: r.a.createElement(k.c, {
                                color: "",
                                className: "tag-beta"
                              })
                            }
                          })
                        )
                      )
                    ),
                    r.a.createElement(
                      O.a,
                      { className: "wt-offset-top-24", mode: "outline" },
                      r.a.createElement(l.b, { id: "Daha fazla" })
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: Object(m.g)() },
                  N()(L).call(L, function(e) {
                    return r.a.createElement(T, {
                      key: e.img,
                      img: e.img,
                      title: e.title,
                      description: e.description
                    });
                  })
                )
              )
            );
          })
        ),
        A = a("uGGg");
      a("wDSE");
      a.d(t, "a", function() {
        return M;
      });
      var z = r.a.createContext({ pageInstance: null, tocInstance: null }),
        H = function(e) {
          var t = e.isPromo;
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              "div",
              { className: "header-bg" },
              r.a.createElement(
                "div",
                { className: "header-bg__main-image-wrapper" },
                r.a.createElement(o.a, {
                  className: "header-bg__main-image",
                  src: "/balnature/img/header-section/space-platform-galaxy.webp",
                  fallback:
                    "/balnature/img/header-section/space-platform-galaxy.svg",
                  alt: ""
                })
              ),
              r.a.createElement("img", {
                src: "/balnature/img/header-section/space-platform-boy.svg",
                alt: "",
                className: "header-bg__boy"
              }),
              r.a.createElement("img", {
                src: "/balnature/img/header-section/space-platform-lady.svg",
                alt: "",
                className: "header-bg__girl"
              }),
              r.a.createElement(c.a, null),
              r.a.createElement(w.a, null)
            ),
            r.a.createElement(_.a, null),
            t && r.a.createElement(g, { isPromo: t }),
            r.a.createElement(b.a, null),
            r.a.createElement(D, null),
            r.a.createElement(h.a, null),
            r.a.createElement(A.a, null),
            r.a.createElement(v.a, null),
            r.a.createElement(E.a, null)
          );
        };
      H.propTypes = { isPromo: s.a.bool };
      var M = function(e) {
        var t = e.pageId,
          a = e.tocId,
          i = e.isPromo;
        return Object(n.useEffect)(
          function() {
            var e = document.getElementById(a);
            e && e.classList.add("overview-menu");
          },
          [a]
        ), r.a.createElement(
          z.Provider,
          {
            value: {
              pageInstance: document.getElementById(t),
              tocInstance: document.getElementById(a)
            }
          },
          r.a.createElement(H, { isPromo: i })
        );
      };
      M.propTypes = {
        pageId: s.a.string,
        tocId: s.a.string,
        isPromo: s.a.bool
      };
    },
    E9nw: function(e, t) {
      e.exports = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (
          var t = document.activeElement, a = [], n = 0;
          n < e.rangeCount;
          n++
        )
          a.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return e.removeAllRanges(), function() {
          "Caret" === e.type && e.removeAllRanges(), e.rangeCount ||
            a.forEach(function(t) {
              e.addRange(t);
            }), t && t.focus();
        };
      };
    },
    J8KR: function(e, t, a) {},
    K1xC: function(e, t, a) {},
    ME1N: function(e, t, a) {
      var n = a("4BeY"),
        r = a("IaFt"),
        i = new n({
          id: "app-store",
          use: "app-store-usage",
          viewBox: "0 0 21 27",
          content:
            '<symbol fill="none" viewBox="0 0 21 27" xmlns="http://www.w3.org/2000/svg" id="app-store"><g fill="#0c0c0d"><path d="m21 19.2454c-.1243.2587-.1243.388-.1243.5174-.497 1.4229-1.2426 2.7164-2.1124 3.8806-.3728.5174-.8698 1.0348-1.3669 1.4229-.3727.2587-.6213.5174-.994.7761-.2486.1294-.6213.2587-.8699.2587h-.7455c-.3728 0-.7456-.1293-.9941-.2587l-1.1183-.3881c-.2486-.1293-.3728-.1293-.6213-.2587-.2486-.1293-.6213-.1293-.8699-.1293-.3728 0-.7455 0-1.1183.1293-.49705.1294-.99409.2587-1.49114.5175-.24852.1293-.37278.1293-.6213.2587-.37278.1293-.74556.2587-1.11834.2587h-.49704c-.37278 0-.74556-.1294-.99409-.3881-.49704-.2587-.99408-.6468-1.36686-1.0348-.37278-.3881-.74556-.7761-.99408-1.2936-.6213-.7761-1.11835-1.6816-1.49113-2.587-.497038-1.0349-.869818-2.0697-1.118339-3.2339-.12426-.5174-.24852-1.0348-.24852-1.6816 0-.388-.124261-.7761-.124261-1.1641v-1.1642c0-.2587.00000047-.5174.124261-.9055 0-.3881.12426-.9055.24852-1.2935.248521-1.1642.745559-2.06969 1.491129-2.97517.74556-.90547 1.73964-1.55224 2.73372-1.81095.49704-.12935 1.11835-.25871 1.61539-.25871h1.2426c.37278 0 .74556.12936 1.11834.25871.24852.12935.62131.25871.86983.38806s.49704.25871.74551.25871c.2486.12935.6213.12935.8699.12935.2485 0 .6213-.12935.8698-.25871l1.1183-.38806c.6213-.2587 1.3669-.38806 2.1125-.38806.6213 0 1.2426 0 1.7396.12936.6213.12935 1.1183.2587 1.6154.64676.8698.38807 1.4911 1.03483 2.1124 1.81095-.3728.25871-.7455.64677-1.1183 1.03486-.4971.5174-.8698 1.0348-1.1184 1.5522-.2485.6468-.497 1.1642-.497 1.811v.9054c0 .3881.1243.6468.1243 1.0349.2485 1.0348.7455 1.8109 1.4911 2.587.3728.3881.8698.7762 1.4911 1.1642-.2485 0-.1243 0 0 .1294z" /><path d="m15.2807.359822v1.034828c0 .90547-.3728 1.81095-.8698 2.58707-.4971.77612-1.1184 1.42289-1.8639 1.81095-.4971.38806-1.1184.51741-1.7397.64677h-.6213v-.64677c0-.51742 0-.90548.1243-1.42289.1243-.64677.497-1.16418.8698-1.6816.4971-.64676.9941-1.16418 1.6154-1.55224.6213-.388058 1.2426-.776118 1.9882-.905471.1242.129353.2485.129353.497.129353z" /></g></symbol>'
        });
      r.add(i);
      e.exports = i;
    },
    MzLV: function(e, t, a) {},
    "OQ0+": function(e, t, a) {},
    OXK2: function(e, t, a) {
      "use strict";
      var n = a("Wfk0"),
        r = a("q1tI"),
        i = a.n(r),
        s = a("TSYQ"),
        o = a.n(s),
        c = a("HoRD"),
        l = a("6mC5"),
        m = a("a45L"),
        d = (a("gjZv"), a("LK4Q")),
        p = a("39/O"),
        u = a("17x9"),
        f = a.n(u),
        g = a("5+di"),
        h = g.a["wt-icon"],
        v = "xs",
        b = i.a.forwardRef(function(e, t) {
          var a = e.theme,
            n = e.size,
            r = e.className,
            s = Object(p.a)(e, ["theme", "size", "className"]);
          return n === v
            ? i.a.createElement(
                "svg",
                Object(d.a)({ viewBox: "0 0 16 16" }, s, {
                  className: o()(h, g.a[a], g.a[n], r),
                  ref: t
                }),
                i.a.createElement("path", {
                  d:
                    "M14.09 3.866a3.186 3.186 0 0 0-4.664.157L8.01 5.427 6.585 4.045A3.164 3.164 0 0 0 1.94 3.9a3.322 3.322 0 0 0 .165 4.782l5.907 5.655 5.849-5.743a3.262 3.262 0 0 0 .23-4.727z"
                })
              )
            : i.a.createElement(
                "svg",
                Object(d.a)({ viewBox: "0 0 24 24" }, s, {
                  className: o()(h, g.a[a], g.a[n], r),
                  ref: t
                }),
                i.a.createElement("path", {
                  d:
                    "M20.128 6.26a4.26 4.26 0 0 0-6.237.21l-1.892 1.877L10.093 6.5a4.23 4.23 0 0 0-6.213-.196 4.442 4.442 0 0 0 .22 6.394l7.899 7.562 7.82-7.68c1.815-1.814 2.123-4.506.309-6.32z"
                })
              );
        });
      (b.propTypes = {
        className: f.a.string,
        theme: f.a.oneOf(["light", "dark"]),
        size: f.a.oneOf(["xs", "s", "m", "l"])
      }), (b.defaultProps = { size: "m" });
      var w = b,
        E = a("jVSK"),
        _ = a("Wf5J"),
        y = a("I3Lj"),
        N = a("CeUd"),
        j = a("FLGM"),
        O = a.n(j),
        k = a("UtpJ"),
        x = a.n(k),
        S = a("5Yf3"),
        C = a("ZEpC"),
        I = a("Tg5Q"),
        T = (
          a("e0rA"),
          [
            "makery",
            "ensign",
            "codeOps",
            "instil",
            "ambercore",
            "techMachineryLabs"
          ]
        ),
        R = function() {
          var e,
            t = Object(r.useState)(!1),
            a = Object(S.a)(t, 2),
            s = a[0],
            l = a[1],
            d = Object(C.f)(),
            p = Object(C.e)();
          e = d ? 1 : p ? 2 : 3;
          var u = Object(r.useMemo)(
              function() {
                return s ? T : x()(T).call(T, 0, e);
              },
              [s, e]
            ),
            f = Object(r.useCallback)(function() {
              return l(function(e) {
                return !e;
              });
            }, []);
          return i.a.createElement(
            "div",
            {
              className: o()(
                "feedback-list",
                "wt-offset-top-24",
                Object(c.g)("m")
              )
            },
            O()(u).call(u, function(t) {
              return i.a.createElement(I.b, {
                key: t,
                company: t,
                className: o()(
                  "feedback-list__item",
                  Object(c.f)(12 / e),
                  "wt-offset-top-24"
                )
              });
            }),
            !s &&
              i.a.createElement(
                "div",
                { className: o()("wt-offset-top-24", Object(c.f)(12)) },
                i.a.createElement(
                  m.a,
                  {
                    onClick: f,
                    mode: "outline",
                    className: "feedback-list__button"
                  },
                  i.a.createElement(n.b, { id: "Daha fazla" })
                )
              )
          );
        },
        L = (
          a("VR/2"),
          Object(N.a)(function() {
            var e = Object(l.a)();
            return i.a.createElement(
              c.e,
              { className: "feedback-section", id: "customers" },
              i.a.createElement(
                c.b,
                null,
                i.a.createElement(
                  "div",
                  {
                    className: Object(c.g)({
                      justify: "center",
                      align: "center"
                    })
                  },
                  i.a.createElement(
                    "div",
                    { className: o()(Object(c.f)(12), "jb-text-center") },
                    i.a.createElement(w, {
                      theme: "dark",
                      className: "feedback-section__icon"
                    })
                  ),
                  i.a.createElement(
                    "div",
                    {
                      className: o()(
                        Object(c.f)({ default: 6, md: 8, sm: 12 }),
                        "wt-offset-top-48"
                      )
                    },
                    i.a.createElement(
                      "h2",
                      { className: o()(e("wt-h1"), "jb-text-center") },
                      i.a.createElement(n.b, {
                        id:
                          "300 Bursa Anadolu Lisesi öğrencisi BAlNAture'yi kullanıyor!"
                      })
                    )
                  ),
                  i.a.createElement("div", { className: Object(c.f)("break") }),
                  i.a.createElement(
                    "div",
                    {
                      className: o()(Object(c.f)("inline"), "wt-offset-top-48")
                    },
                    i.a.createElement(
                      m.a,
                      {
                        href: Object(y.i18nHref)(
                          "/company/customers/experience/#products=space"
                        ),
                        mode: "contrast"
                      },
                      i.a.createElement(n.b, { id: "Kullananları görüntüle" })
                    )
                  ),
                  i.a.createElement(
                    "div",
                    {
                      className: o()(
                        Object(c.f)("inline", { alignSelf: "end" }),
                        "wt-offset-top-48 wt-offset-top-sm-12"
                      )
                    },
                    i.a.createElement(
                      _.a,
                      {
                        videoId: "phV4cF66Q-0",
                        videoImgAlt: y.i18n._(
                          y.i18n._(
                            "The Space Experience: What Our Customers Are Saying"
                          )
                        )
                      },
                      function(e) {
                        var t = e.onClick;
                        return i.a.createElement(
                          m.a,
                          {
                            mode: "outline",
                            onClick: t,
                            icon: i.a.createElement(E.a, null)
                          },
                          i.a.createElement(n.b, {
                            id: "Tanıtım videomuzu izle"
                          })
                        );
                      }
                    )
                  )
                ),
                i.a.createElement(R, null)
              )
            );
          })
        );
      a.d(t, "a", function() {
        return L;
      });
    },
    Rlvl: function(e, t, a) {
      e.exports =
        a.p +
        "common-ui/components/space-feedback/img/gilmour-avatar.f2ee797b42e6cae6be29eec3a6b8776b.png";
    },
    SsmJ: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return n;
      });
      var n = { lightColor: "#00A3FF", lightSize: 160 };
    },
    SyKh: function(e, t, a) {},
    TVie: function(e, t, a) {
      "use strict";
      a("pNMO"), a("4Brf"), a("mRH6");
      var n = a("lHQ6"),
        r = a.n(n),
        i = a("FLGM"),
        s = a.n(i),
        o = a("Wfk0"),
        c = a("q1tI"),
        l = a.n(c),
        m = a("17x9"),
        d = a.n(m),
        p = a("TSYQ"),
        u = a.n(p),
        f = a("ZEpC"),
        g = a("1nw9"),
        h = a("a45L"),
        v = (
          a("oB7g"),
          function(e) {
            var t = e.shouldRun,
              a = e.duration,
              n = Object(c.useRef)(null);
            return Object(c.useEffect)(
              function() {
                var e,
                  r = n.current;
                return r &&
                  (t
                    ? (e = requestAnimationFrame(function() {
                        (r.style.transitionDuration = "".concat(
                          a,
                          "ms"
                        )), r.classList.add("animated-tab__indicator--active");
                      }))
                    : (
                        (r.style.transitionDuration = "0ms"),
                        r.classList.remove("animated-tab__indicator--active")
                      )), function() {
                  cancelAnimationFrame(e);
                };
              },
              [t]
            ), l.a.createElement(
              "div",
              { className: "animated-tab" },
              l.a.createElement("div", {
                className: "animated-tab__indicator",
                ref: n
              })
            );
          }
        );
      v.propTypes = { shouldRun: d.a.bool, duration: d.a.number };
      a("qpjT");
      a.d(t, "a", function() {
        return b;
      });
      var b = l.a.forwardRef(function(e, t) {
        var a = e.children,
          n = e.learnMore,
          i = e.activeSlideIndex,
          m = e.onActiveSlideChange,
          d = e.progressDuration,
          p = e.theme,
          b = void 0 === p ? "dark" : p,
          w = e.className,
          E = e.panelLeft,
          _ = void 0 !== E && E,
          y = Object(g.a)(b),
          N = Object(f.d)(),
          j = s()(a).call(a, function() {
            return Object(c.createRef)();
          });
        return Object(c.useEffect)(function() {
          if (-1 !== i) {
            var e = j[i] && j[i].current;
            if (e && e.parentElement) {
              var t = e.parentElement,
                a = t.scrollHeight - t.clientHeight;
              if (a) {
                var n = r()(window.getComputedStyle(e).marginTop, 10),
                  s = e.offsetTop - n,
                  o = s > a ? a : s;
                ((t.scrollTop < a && o) || o < t.scrollTop) &&
                  requestAnimationFrame(function() {
                    t.scrollTo
                      ? t.scrollTo({ top: o, behavior: "smooth" })
                      : (t.scrollTop = o);
                  });
              }
            }
          }
        }, [i, j]), l.a.createElement(
          "div",
          {
            ref: t,
            className: u()("slideshow", w, { "slideshow_panel-left": _ })
          },
          l.a.createElement(
            "div",
            { className: "slideshow__slides" },
            s()(c.Children).call(c.Children, a, function(e, t) {
              return l.a.createElement(
                "div",
                {
                  key: e.props.id,
                  className: "slideshow__slide slideshow__slide_".concat(
                    t === i || (-1 === i && 0 === t) ? "visible" : "hidden"
                  )
                },
                e
              );
            })
          ),
          m &&
            l.a.createElement(
              "div",
              { className: "slideshow__slides-panel" },
              l.a.createElement(
                "ul",
                { className: "slideshow__slides-switcher" },
                s()(c.Children).call(c.Children, a, function(e, t) {
                  return l.a.createElement(
                    "li",
                    {
                      className: "wt-offset-top-12",
                      key: e.props.id,
                      ref: j[t]
                    },
                    l.a.createElement(
                      "div",
                      {
                        tabIndex: 0,
                        role: "button",
                        onKeyDown: function(e) {
                          return (function(e, t) {
                            13 === e.keyCode && t(e);
                          })(e, function() {
                            return m(t);
                          });
                        },
                        onClick: function() {
                          return m(t);
                        },
                        className: "slideshow__tab ".concat(
                          t !== i || d ? "" : "slideshow__tab_active"
                        )
                      },
                      d &&
                        l.a.createElement(v, {
                          duration: d,
                          shouldRun: t === i
                        }),
                      l.a.createElement(
                        "p",
                        {
                          className: y(N ? "rs-text-3" : "rs-text-2", {
                            hardness: "hard"
                          })
                        },
                        e.props.title
                      ),
                      e.props.description &&
                        l.a.createElement(
                          "p",
                          {
                            className: u()(
                              y("rs-text-3", { hardness: "hard" }),
                              "wt-offset-top-8",
                              t === i ? "wt-display-block" : "wt-display-none"
                            )
                          },
                          e.props.description
                        )
                    )
                  );
                })
              ),
              n &&
                l.a.createElement(
                  "div",
                  { className: "slideshow__learn-more" },
                  l.a.createElement(
                    h.a,
                    {
                      href: n.link,
                      mode: "outline",
                      narrow: !0,
                      size: N ? "s" : "m",
                      className: "wt-offset-top-12 slideshow__learn-more_btn",
                      title: n.title
                    },
                    l.a.createElement(o.b, { id: "Daha fazla" })
                  )
                )
            )
        );
      });
      (b.displayName = "Slideshow"), (b.propTypes = {
        activeSlideIndex: d.a.number,
        onActiveSlideChange: d.a.func,
        progressDuration: d.a.oneOfType([d.a.bool, d.a.number]),
        learnMore: d.a.shape({
          title: d.a.string.isRequired,
          link: d.a.string.isRequired
        }),
        theme: d.a.string,
        panelLeft: d.a.bool
      });
    },
    Tg5Q: function(e, t, a) {
      "use strict";
      a("sMBO"), a("mRH6");
      var n = a("q1tI"),
        r = a.n(n),
        i = a("17x9"),
        s = a.n(i),
        o = a("TSYQ"),
        c = a.n(o),
        l = a("HoRD"),
        m = a("6mC5"),
        d = a("I3Lj"),
        p = a("lqnL"),
        u = a.n(p),
        f = a("xvql"),
        g = a.n(f),
        h = a("Rlvl"),
        v = a.n(h),
        b = a("nHco"),
        w = a.n(b),
        E = a("ZRMA"),
        _ = a.n(E),
        y = a("6MAW"),
        N = a.n(y),
        j = {
          makery: {
            id: "makery",
            company: d.i18n._(d.i18n._("Makery")),
            story: d.i18n._(
              d.i18n._(
                "Uygulamanın Windows,Linux,Android,Web ve İOS bölümlerini hazırlayan senior Developerdir. Aynı zamanda uygulamanın yöneticiliğini ve ayarlanmasını ve database işlemlerini de yürütmektedir. "
              )
            ),
            link: {
              url: Object(d.i18nHref)("/company/customers/experience/makery/"),
              text: d.i18n._(d.i18n._("Bilgileri Gör"))
            },
            author: {
              avatar: u.a,
              name: d.i18n._(d.i18n._("Salih Etka Akagündüz")),
              position: d.i18n._(d.i18n._("Senior Developer"))
            }
          },
          instil: {
            id: "instil",
            company: d.i18n._(d.i18n._("Instil")),
            story: d.i18n._(
              d.i18n._(
                "When the social distancing restrictions were introduced in March 2020 we needed a tool that would let us collaborate online with students as part of virtual deliveries, and Space was the obvious choice."
              )
            ),
            link: {
              url: Object(d.i18nHref)("/company/customers/experience/instil/"),
              text: d.i18n._(d.i18n._("Bilgileri Gör"))
            },
            author: {
              avatar: v.a,
              name: d.i18n._(d.i18n._("Garth Gilmour")),
              position: d.i18n._(d.i18n._("Head of Learning"))
            }
          },
          ambercore: {
            id: "ambercore",
            company: d.i18n._(d.i18n._("AmberCore Software Ltd")),
            story: d.i18n._(
              d.i18n._(
                "Communication has become faster since we started using Space. I think the deciding factors in choosing to go with Space were its ease of use and versatility."
              )
            ),
            link: {
              url: Object(d.i18nHref)(
                "/company/customers/experience/ambercore/"
              ),
              text: d.i18n._(d.i18n._("Bilgileri Gör"))
            },
            author: {
              avatar: g.a,
              name: d.i18n._(d.i18n._("Anna Vinogradova")),
              position: d.i18n._(d.i18n._("Chief Marketing Officer"))
            }
          },
          ensign: {
            id: "ensign",
            company: d.i18n._(d.i18n._("Takım Yöneticisi")),
            story: d.i18n._(
              d.i18n._(
                "Takımımızın her türlü oyunlunun geliştirmesine katkı sağlayan ve tüm oyun projelerinin başında olan Game Developerdir.Kendisi tam 11 oyun projesi yönetmiş olup takımımıza her yönden destek olmuştur."
              )
            ),
            link: {
              url: Object(d.i18nHref)("/company/customers/experience/ensign/"),
              text: d.i18n._(d.i18n._("Bilgileri Gör"))
            },
            author: {
              avatar: w.a,
              name: d.i18n._(d.i18n._("Bahrican Sezer")),
              position: d.i18n._(d.i18n._("Game Developer"))
            }
          },
          techMachineryLabs: {
            id: "techMachineryLabs",
            company: d.i18n._(d.i18n._("TechMachinery Labs")),
            story: d.i18n._(
              d.i18n._(
                "We replaced multiple existing and other future tools with a single collaboration tool. Plus, it removed all of the admin and maintenance overheads for us."
              )
            ),
            link: {
              url: Object(d.i18nHref)(
                "/company/customers/experience/TechMachineryLabs/"
              ),
              text: d.i18n._(d.i18n._("Bilgileri Gör"))
            },
            author: {
              avatar: N.a,
              name: d.i18n._(d.i18n._("Nishant Krishna")),
              position: d.i18n._(d.i18n._("CTO and Chief Architect"))
            }
          },
          codeOps: {
            id: "codeOps",
            company: d.i18n._(d.i18n._("Game Developer")),
            story: d.i18n._(
              d.i18n._(
                "BalNature projesinin kurulumunda ve gelişiminde büyük önem sahibi olan bu şahsiyet BalNAture için tam 2 oyun geliştirm 8'inin de gelişiminde etkisi olmuştur."
              )
            ),
            link: {
              url: Object(d.i18nHref)("/company/customers/experience/CodeOps/"),
              text: d.i18n._(d.i18n._("Bilgileri Gör"))
            },
            author: {
              avatar: _.a,
              name: d.i18n._(d.i18n._("Enes Sarıkaya")),
              position: d.i18n._(d.i18n._("Senior Developer"))
            }
          }
        },
        O = (
          a("ANXU"),
          function(e) {
            var t = e.company,
              a = e.showTitle,
              n = void 0 !== a && a,
              i = e.className,
              s = (function(e) {
                if (!j[e])
                  throw new Error(
                    "No feedback data for ".concat(e, " company")
                  );
                return j[e];
              })(t),
              o = s.company,
              d = s.story,
              p = s.link,
              u = s.author,
              f = Object(m.a)();
            return r.a.createElement(
              "div",
              { className: c()("space-feedback", i) },
              n &&
                r.a.createElement("h3", { className: f("wt-subtitle-2") }, o),
              r.a.createElement(
                "p",
                {
                  className: c()(f("wt-text-2", { hardness: "hard" }), {
                    "wt-offset-top-12": n
                  })
                },
                d,
                " ",
                r.a.createElement(
                  "a",
                  { href: p.url, className: f("wt-link") },
                  p.text
                )
              ),
              r.a.createElement(
                "div",
                {
                  className: c()(
                    Object(l.g)({ size: { default: "l", md: "xs" } }),
                    "wt-offset-top-24"
                  )
                },
                r.a.createElement("img", {
                  src: u.avatar,
                  alt: u.name,
                  className: c()(
                    Object(l.f)("inline"),
                    "space-feedback__avatar"
                  )
                }),
                r.a.createElement(
                  "div",
                  { className: Object(l.f)("auto-fill") },
                  r.a.createElement(
                    "p",
                    { className: f("wt-text-2", { hardness: "hard" }) },
                    u.name,
                    ","
                  ),
                  r.a.createElement(
                    "p",
                    { className: f("wt-text-2") },
                    u.position,
                    ",",
                    r.a.createElement("br", null),
                    o
                  )
                )
              )
            );
          }
        );
      O.propTypes = {
        showTitle: s.a.bool,
        company: s.a.oneOf([
          "makery",
          "instil",
          "ambercore",
          "ensign",
          "techMachineryLabs",
          "codeOps"
        ]),
        className: s.a.string
      };
      var k = O,
        x = a("a45L"),
        S = a("VH9H"),
        C = a("SsmJ"),
        I = (
          a("1U1J"),
          function(e) {
            var t = e.company,
              a = e.className,
              n = (function(e) {
                if (!j[e])
                  throw new Error(
                    "No feedback data for ".concat(e, " company")
                  );
                return j[e];
              })(t),
              i = n.company,
              s = n.story,
              o = n.link,
              d = n.author,
              p = Object(m.a)();
            return r.a.createElement(
              S.a,
              {
                className: c()("space-feedback-glass", a),
                glowHoverOptions: C.a
              },
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "div",
                  {
                    className: Object(l.g)({ size: { default: "s", md: "xs" } })
                  },
                  r.a.createElement("img", {
                    src: d.avatar,
                    alt: d.name,
                    className: c()(
                      Object(l.f)("inline"),
                      "space-feedback-glass__avatar"
                    )
                  }),
                  r.a.createElement(
                    "div",
                    { className: Object(l.f)("auto-fill") },
                    r.a.createElement(
                      "p",
                      { className: p("wt-text-2", { hardness: "hard" }) },
                      r.a.createElement("b", null, d.name)
                    ),
                    r.a.createElement(
                      "p",
                      { className: p("wt-text-2", { hardness: "hard" }) },
                      d.position,
                      ", ",
                      i
                    )
                  )
                ),
                r.a.createElement(
                  "p",
                  {
                    className: c()(
                      p("wt-text-2", { hardness: "hard" }),
                      "wt-offset-top-24"
                    )
                  },
                  s
                )
              ),
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  x.a,
                  {
                    href: o.url,
                    mode: "outline",
                    className: "wt-offset-top-24"
                  },
                  o.text
                )
              )
            );
          }
        );
      I.propTypes = {
        company: s.a.oneOf([
          "makery",
          "instil",
          "ambercore",
          "ensign",
          "techMachineryLabs",
          "codeOps"
        ]),
        className: s.a.string
      };
      var T = I;
      a.d(t, "a", function() {
        return k;
      }), a.d(t, "b", function() {
        return T;
      }), a.d(t, "c", function() {
        return j;
      });
    },
    VBb6: function(e, t, a) {},
    VH9H: function(e, t, a) {
      "use strict";
      var n = a("LYCE"),
        r = a.n(n),
        i = a("HnXd"),
        s = a.n(i),
        o = a("qjzJ"),
        c = a.n(o),
        l = a("RXMP"),
        m = a.n(l),
        d = a("fHi0"),
        p = a.n(d),
        u = a("5PDf"),
        f = a.n(u),
        g = a("OWCx"),
        h = a.n(g),
        v = a("+oHS"),
        b = a.n(v),
        w = a("L6fE"),
        E = a("q1tI"),
        _ = a.n(E),
        y = a("17x9"),
        N = a.n(y),
        j = a("TSYQ"),
        O = a.n(j),
        k = a("35Ri"),
        x = a("1//O");
      a("9UGV");
      function S(e, t) {
        var a = b()(e);
        if (h.a) {
          var n = h()(e);
          t &&
            (n = f()(n).call(n, function(t) {
              return p()(e, t).enumerable;
            })), a.push.apply(a, n);
        }
        return a;
      }
      var C = function(e) {
        var t = e.className,
          a = e.blur,
          n = e.children,
          i = e.glowHoverOptions,
          o = Object(k.d)(),
          l = Object(x.a)(
            (function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var a,
                  n = null != arguments[t] ? arguments[t] : {};
                if (t % 2)
                  m()((a = S(Object(n), !0))).call(a, function(t) {
                    Object(w.a)(e, t, n[t]);
                  });
                else if (c.a) s()(e, c()(n));
                else {
                  var i;
                  m()((i = S(Object(n)))).call(i, function(t) {
                    r()(e, t, p()(n, t));
                  });
                }
              }
              return e;
            })({}, i)
          );
        return _.a.createElement(
          "div",
          {
            className: O()(
              "space-blur-card",
              { "space-blur-card_blur": a },
              "space-blur-card_theme_".concat(o),
              t
            ),
            ref: l
          },
          n
        );
      };
      C.propTypes = {
        blur: N.a.bool,
        theme: N.a.oneOf(["light", "dark"]),
        glowHoverOptions: N.a.shape({
          lightColor: N.a.string,
          lightSize: N.a.number
        })
      };
      var I = C;
      a.d(t, "a", function() {
        return I;
      });
    },
    "VR/2": function(e, t, a) {},
    Vu8W: function(e, t, a) {},
    YyOh: function(e, t, a) {
      "use strict";
      var n = a("q1tI"),
        r = a.n(n),
        i = a("17x9"),
        s = a.n(i),
        o = a("TSYQ"),
        c = a.n(o),
        l = a("LYCE"),
        m = a.n(l),
        d = a("HnXd"),
        p = a.n(d),
        u = a("qjzJ"),
        f = a.n(u),
        g = a("RXMP"),
        h = a.n(g),
        v = a("fHi0"),
        b = a.n(v),
        w = a("5PDf"),
        E = a.n(w),
        _ = a("OWCx"),
        y = a.n(_),
        N = a("+oHS"),
        j = a.n(N),
        O = a("LK4Q"),
        k = a("39/O"),
        x = a("L6fE"),
        S = a("6mC5"),
        C = a("a45L"),
        I = a("I3Lj");
      function T(e, t) {
        var a = j()(e);
        if (y.a) {
          var n = y()(e);
          t &&
            (n = E()(n).call(n, function(t) {
              return b()(e, t).enumerable;
            })), a.push.apply(a, n);
        }
        return a;
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a,
            n = null != arguments[t] ? arguments[t] : {};
          if (t % 2)
            h()((a = T(Object(n), !0))).call(a, function(t) {
              Object(x.a)(e, t, n[t]);
            });
          else if (f.a) p()(e, f()(n));
          else {
            var r;
            h()((r = T(Object(n)))).call(r, function(t) {
              m()(e, t, b()(n, t));
            });
          }
        }
        return e;
      }
      var L = {
          title: I.i18n._(I.i18n._("BalNature'yi kullanmaya bugün başla")),
          subtitle: I.i18n._(
            I.i18n._("Bir SEAZER çevre bilinci ve gönüllülük projesi")
          ),
          button: I.i18n._(I.i18n._("Bize katıl"))
        },
        D = R({}, L),
        A = R({}, L),
        z = R(
          R({}, L),
          {},
          { button: I.i18n._(I.i18n._("Create a new organization")) }
        ),
        H = R(
          R({}, L),
          {},
          {
            title: I.i18n._(I.i18n._("BalNature'yi kullanmaya bugün başla")),
            subtitle: I.i18n._(
              I.i18n._("Give Your Software Team a Digital Home for Free")
            )
          }
        ),
        M = R(
          R({}, L),
          {},
          {
            title: I.i18n._(
              I.i18n._("Give Your Software Team a Digital Home for Free")
            )
          }
        ),
        F = R({}, L),
        P = R({}, L),
        U = R({}, L),
        G = R({}, L),
        q = function(e) {
          var t = e.className,
            a = e.children,
            n = Object(S.a)();
          return r.a.createElement("h2", { className: c()(n("wt-h2"), t) }, a);
        },
        B = function(e) {
          var t = e.className,
            a = void 0 === t ? "wt-offset-top-12" : t,
            n = e.children,
            i = Object(S.a)();
          return r.a.createElement(
            "p",
            { className: c()(i("wt-text-1", { hardness: "hard" }), a) },
            n
          );
        },
        W = function(e) {
          var t = e.className,
            a = e.children,
            n = Object(k.a)(e, ["className", "children"]);
          return r.a.createElement(
            C.a,
            Object(O.a)(
              { href: "/balnature/download/", mode: "contrast", className: t },
              n
            ),
            a
          );
        },
        Y = r.a.createElement(
          "div",
          { className: "jb-text-center" },
          r.a.createElement(q, null, D.title),
          r.a.createElement(B, null, D.subtitle),
          r.a.createElement(W, { className: "wt-offset-top-24" }, D.button)
        ),
        Q = r.a.createElement(W, null, A.button),
        V = r.a.createElement(W, null, z.button),
        K = r.a.createElement(
          "div",
          { className: "jb-text-center" },
          r.a.createElement(q, null, H.title),
          r.a.createElement(B, { className: "wt-offset-top-12" }, H.subtitle),
          r.a.createElement(W, { className: "wt-offset-top-24" }, H.button)
        ),
        J = r.a.createElement(
          "div",
          { className: "jb-text-center" },
          r.a.createElement(q, null, M.title),
          r.a.createElement(W, { className: "wt-offset-top-24" }, M.button)
        ),
        Z = r.a.createElement(
          "div",
          { className: "jb-text-center" },
          r.a.createElement(q, null, F.title),
          r.a.createElement(B, { className: "wt-offset-top-12" }, F.subtitle),
          r.a.createElement(W, { className: "wt-offset-top-24" }, F.button)
        ),
        X = r.a.createElement(W, { mode: "outline" }, P.button),
        $ = r.a.createElement(W, { mode: "primary" }, U.button),
        ee = r.a.createElement(W, { mode: "primary" }, G.button),
        te = (
          a("1ACl"),
          function(e) {
            var t = e.className,
              a = e.mode,
              n = void 0 === a ? "main-section" : a,
              i = (function(e) {
                switch (e) {
                  case "main-section":
                    return Y;
                  case "main-header":
                    return Q;
                  case "main-header-logged-in":
                    return V;
                  case "solutions-section":
                    return K;
                  case "solutions-header":
                    return J;
                  case "footer-section":
                    return Z;
                  case "remote-idea":
                    return X;
                  case "buy-space":
                    return $;
                  case "roadmap-toolbox":
                    return ee;
                  default:
                    return Y;
                }
              })(n);
            return r.a.createElement(
              "div",
              {
                className: c()(
                  "jb-space-sign-up",
                  "jb-space-sign-up_mode_".concat(n),
                  t
                )
              },
              i
            );
          }
        );
      te.propTypes = {
        className: s.a.string,
        mode: s.a.oneOf([
          "main-section",
          "main-header",
          "main-header-logged-in",
          "solutions-section",
          "solutions-header",
          "footer-section",
          "buy-space",
          "roadmap-toolbox"
        ])
      };
      var ae = te;
      a.d(t, "a", function() {
        return ae;
      });
    },
    ZJkI: function(e, t, a) {},
    ZRMA: function(e, t, a) {
      e.exports = a.p + "kisi/enes.png";
    },
    ZbKm: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return f;
      }), a.d(t, "b", function() {
        return w;
      });
      var n = a("q1tI"),
        r = a.n(n),
        i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        s = function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        },
        o = (function() {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var n = t[a];
              (n.enumerable =
                n.enumerable || !1), (n.configurable = !0), "value" in n &&
                (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
          };
        })(),
        c =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          },
        l = function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })), t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
        },
        m = function(e, t) {
          var a = {};
          for (var n in e)
            t.indexOf(n) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]));
          return a;
        },
        d = function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        },
        p = { addEventListener: function() {} },
        u = (function(e, t) {
          var a = function() {
            s.log(
              2,
              "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene."
            );
          };
          (a.version =
            "2.0.7"), e.addEventListener("mousewheel", function() {});
          a.Controller = function(r) {
            var i,
              o,
              c = "ScrollMagic.Controller",
              l = n.defaults,
              m = this,
              d = s.extend({}, l, r),
              p = [],
              u = !1,
              f = 0,
              g = "PAUSED",
              h = !0,
              v = 0,
              b = !0,
              w = function() {
                d.refreshInterval > 0 &&
                  (o = e.setTimeout(k, d.refreshInterval));
              },
              E = function() {
                return d.vertical
                  ? s.get.scrollTop(d.container)
                  : s.get.scrollLeft(d.container);
              },
              _ = function() {
                return d.vertical
                  ? s.get.height(d.container)
                  : s.get.width(d.container);
              },
              y = (this._setScrollPos = function(t) {
                d.vertical
                  ? h
                    ? e.scrollTo(s.get.scrollLeft(), t)
                    : (d.container.scrollTop = t)
                  : h
                    ? e.scrollTo(t, s.get.scrollTop())
                    : (d.container.scrollLeft = t);
              }),
              N = function() {
                if (b && u) {
                  var e = s.type.Array(u) ? u : p.slice(0);
                  u = !1;
                  var t = f,
                    a = (f = m.scrollPos()) - t;
                  0 !== a && (g = a > 0 ? "FORWARD" : "REVERSE"), "REVERSE" ===
                    g && e.reverse(), e.forEach(function(t, a) {
                    x(
                      3,
                      "updating Scene " +
                        (a + 1) +
                        "/" +
                        e.length +
                        " (" +
                        p.length +
                        " total)"
                    ), t.update(!0);
                  }), 0 === e.length &&
                    d.loglevel >= 3 &&
                    x(3, "updating 0 Scenes (nothing added to controller)");
                }
              },
              j = function() {
                i = s.rAF(N);
              },
              O = function(e) {
                x(3, "event fired causing an update:", e.type), "resize" ==
                  e.type && ((v = _()), (g = "PAUSED")), !0 !== u &&
                  ((u = !0), j());
              },
              k = function() {
                if (!h && v != _()) {
                  var e;
                  try {
                    e = new Event("resize", { bubbles: !1, cancelable: !1 });
                  } catch (a) {
                    (e = t.createEvent("Event")).initEvent("resize", !1, !1);
                  }
                  d.container.dispatchEvent(e);
                }
                p.forEach(function(e, t) {
                  e.refresh();
                }), w();
              },
              x = (this._log = function(t, a) {
                d.loglevel >= t &&
                  (
                    Array.prototype.splice.call(
                      arguments,
                      1,
                      0,
                      "(" + c + ") ->"
                    ),
                    s.log.apply(e, arguments)
                  );
              });
            this._options = d;
            var S = function(e) {
              if (e.length <= 1) return e;
              var t = e.slice(0);
              return t.sort(function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
              }), t;
            };
            return (this.addScene = function(e) {
              if (s.type.Array(e))
                e.forEach(function(e, t) {
                  m.addScene(e);
                });
              else if (e instanceof a.Scene) {
                if (e.controller() !== m) e.addTo(m);
                else if (p.indexOf(e) < 0) {
                  for (var t in (
                    p.push(e),
                    (p = S(p)),
                    e.on("shift.controller_sort", function() {
                      p = S(p);
                    }),
                    d.globalSceneOptions
                  ))
                    e[t] && e[t].call(e, d.globalSceneOptions[t]);
                  x(3, "adding Scene (now " + p.length + " total)");
                }
              } else x(1, "ERROR: invalid argument supplied for '.addScene()'");
              return m;
            }), (this.removeScene = function(e) {
              if (s.type.Array(e))
                e.forEach(function(e, t) {
                  m.removeScene(e);
                });
              else {
                var t = p.indexOf(e);
                t > -1 &&
                  (
                    e.off("shift.controller_sort"),
                    p.splice(t, 1),
                    x(3, "removing Scene (now " + p.length + " left)"),
                    e.remove()
                  );
              }
              return m;
            }), (this.updateScene = function(e, t) {
              return s.type.Array(e)
                ? e.forEach(function(e, a) {
                    m.updateScene(e, t);
                  })
                : t
                  ? e.update(!0)
                  : !0 !== u &&
                    e instanceof a.Scene &&
                    (
                      -1 == (u = u || []).indexOf(e) && u.push(e),
                      (u = S(u)),
                      j()
                    ), m;
            }), (this.update = function(e) {
              return O({ type: "resize" }), e && N(), m;
            }), (this.scrollTo = function(e, t) {
              if (s.type.Number(e)) y.call(d.container, e, t);
              else if (e instanceof a.Scene)
                e.controller() === m
                  ? m.scrollTo(e.scrollOffset(), t)
                  : x(
                      2,
                      "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",
                      e
                    );
              else if (s.type.Function(e)) y = e;
              else {
                var n = s.get.elements(e)[0];
                if (n) {
                  for (
                    ;
                    n.parentNode.hasAttribute("data-scrollmagic-pin-spacer");

                  )
                    n = n.parentNode;
                  var r = d.vertical ? "top" : "left",
                    i = s.get.offset(d.container),
                    o = s.get.offset(n);
                  h || (i[r] -= m.scrollPos()), m.scrollTo(o[r] - i[r], t);
                } else
                  x(
                    2,
                    "scrollTo(): The supplied argument is invalid. Scroll cancelled.",
                    e
                  );
              }
              return m;
            }), (this.scrollPos = function(e) {
              return arguments.length
                ? (
                    s.type.Function(e)
                      ? (E = e)
                      : x(
                          2,
                          "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."
                        ),
                    m
                  )
                : E.call(m);
            }), (this.info = function(e) {
              var t = {
                size: v,
                vertical: d.vertical,
                scrollPos: f,
                scrollDirection: g,
                container: d.container,
                isDocument: h
              };
              return arguments.length
                ? void 0 !== t[e]
                  ? t[e]
                  : void x(1, 'ERROR: option "' + e + '" is not available')
                : t;
            }), (this.loglevel = function(e) {
              return arguments.length
                ? (d.loglevel != e && (d.loglevel = e), m)
                : d.loglevel;
            }), (this.enabled = function(e) {
              return arguments.length
                ? (b != e && ((b = !!e), m.updateScene(p, !0)), m)
                : b;
            }), (this.destroy = function(t) {
              e.clearTimeout(o);
              for (var a = p.length; a--; ) p[a].destroy(t);
              return d.container.removeEventListener(
                "resize",
                O
              ), d.container.removeEventListener("scroll", O), s.cAF(i), x(
                3,
                "destroyed " + c + " (reset: " + (t ? "true" : "false") + ")"
              ), null;
            }), (function() {
              for (var n in d)
                l.hasOwnProperty(n) ||
                  (x(2, 'WARNING: Unknown option "' + n + '"'), delete d[n]);
              if (
                ((d.container = s.get.elements(d.container)[0]), !d.container)
              )
                throw (
                  x(
                    1,
                    "ERROR creating object " +
                      c +
                      ": No valid scroll container supplied"
                  ),
                  c + " init failed."
                );
              (h =
                d.container === e ||
                d.container === t.body ||
                !t.body.contains(d.container)) &&
                (d.container = e), (v = _()), d.container.addEventListener(
                "resize",
                O
              ), d.container.addEventListener("scroll", O);
              var r = parseInt(d.refreshInterval, 10);
              (d.refreshInterval = s.type.Number(r)
                ? r
                : l.refreshInterval), w(), x(
                3,
                "added new " + c + " controller (v" + a.version + ")"
              );
            })(), m;
          };
          var n = {
            defaults: {
              container: e,
              vertical: !0,
              globalSceneOptions: {},
              loglevel: 2,
              refreshInterval: 100
            }
          };
          (a.Controller.addOption = function(e, t) {
            n.defaults[e] = t;
          }), (a.Controller.extend = function(e) {
            var t = this;
            (a.Controller = function() {
              return t.apply(this, arguments), (this.$super = s.extend(
                {},
                this
              )), e.apply(this, arguments) || this;
            }), s.extend(a.Controller, t), (a.Controller.prototype =
              t.prototype), (a.Controller.prototype.constructor = a.Controller);
          }), (a.Scene = function(n) {
            var i,
              o,
              c = "ScrollMagic.Scene",
              l = r.defaults,
              m = this,
              d = s.extend({}, l, n),
              p = "BEFORE",
              u = 0,
              f = { start: 0, end: 0 },
              g = 0,
              h = !0,
              v = {};
            (this.on = function(e, t) {
              return s.type.Function(t)
                ? (e = e.trim().split(" ")).forEach(function(e) {
                    var a = e.split("."),
                      n = a[0],
                      r = a[1];
                    "*" != n &&
                      (
                        v[n] || (v[n] = []),
                        v[n].push({ namespace: r || "", callback: t })
                      );
                  })
                : b(
                    1,
                    "ERROR when calling '.on()': Supplied callback for '" +
                      e +
                      "' is not a valid function!"
                  ), m;
            }), (this.off = function(e, t) {
              return e
                ? (
                    (e = e.trim().split(" ")).forEach(function(e, a) {
                      var n = e.split("."),
                        r = n[0],
                        i = n[1] || "";
                      ("*" === r ? Object.keys(v) : [r]).forEach(function(e) {
                        for (var a = v[e] || [], n = a.length; n--; ) {
                          var r = a[n];
                          !r ||
                            (i !== r.namespace && "*" !== i) ||
                            (t && t != r.callback) ||
                            a.splice(n, 1);
                        }
                        a.length || delete v[e];
                      });
                    }),
                    m
                  )
                : (b(1, "ERROR: Invalid event name supplied."), m);
            }), (this.trigger = function(e, t) {
              if (e) {
                var n = e.trim().split("."),
                  r = n[0],
                  i = n[1],
                  s = v[r];
                b(3, "event fired:", r, t ? "->" : "", t || ""), s &&
                  s.forEach(function(e, n) {
                    (i && i !== e.namespace) ||
                      e.callback.call(m, new a.Event(r, e.namespace, m, t));
                  });
              } else b(1, "ERROR: Invalid event name supplied.");
              return m;
            }), m
              .on("change.internal", function(e) {
                "loglevel" !== e.what &&
                  "tweenChanges" !== e.what &&
                  ("triggerElement" === e.what
                    ? N()
                    : "reverse" === e.what && m.update());
              })
              .on("shift.internal", function(e) {
                _(), m.update();
              });
            var b = (this._log = function(t, a) {
              d.loglevel >= t &&
                (
                  Array.prototype.splice.call(
                    arguments,
                    1,
                    0,
                    "(" + c + ") ->"
                  ),
                  s.log.apply(e, arguments)
                );
            });
            (this.addTo = function(e) {
              return e instanceof a.Controller
                ? o != e &&
                  (
                    o && o.removeScene(m),
                    (o = e),
                    k(),
                    y(!0),
                    N(!0),
                    _(),
                    o.info("container").addEventListener("resize", j),
                    e.addScene(m),
                    m.trigger("add", { controller: o }),
                    b(3, "added " + c + " to controller"),
                    m.update()
                  )
                : b(
                    1,
                    "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"
                  ), m;
            }), (this.enabled = function(e) {
              return arguments.length
                ? (h != e && ((h = !!e), m.update(!0)), m)
                : h;
            }), (this.remove = function() {
              if (o) {
                o.info("container").removeEventListener("resize", j);
                var e = o;
                (o = void 0), e.removeScene(m), m.trigger("remove"), b(
                  3,
                  "removed " + c + " from controller"
                );
              }
              return m;
            }), (this.destroy = function(e) {
              return m.trigger("destroy", { reset: e }), m.remove(), m.off(
                "*.*"
              ), b(
                3,
                "destroyed " + c + " (reset: " + (e ? "true" : "false") + ")"
              ), null;
            }), (this.update = function(e) {
              if (o)
                if (e)
                  if (o.enabled() && h) {
                    var t,
                      a = o.info("scrollPos");
                    (t =
                      d.duration > 0
                        ? (a - f.start) / (f.end - f.start)
                        : a >= f.start ? 1 : 0), m.trigger("update", {
                      startPos: f.start,
                      endPos: f.end,
                      scrollPos: a
                    }), m.progress(t);
                  } else w && "DURING" === p && C(!0);
                else o.updateScene(m, !1);
              return m;
            }), (this.refresh = function() {
              return y(), N(), m;
            }), (this.progress = function(e) {
              if (arguments.length) {
                var t = !1,
                  a = p,
                  n = o ? o.info("scrollDirection") : "PAUSED",
                  r = d.reverse || e >= u;
                if (
                  (
                    0 === d.duration
                      ? (
                          (t = u != e),
                          (p =
                            0 === (u = e < 1 && r ? 0 : 1)
                              ? "BEFORE"
                              : "DURING")
                        )
                      : e < 0 && "BEFORE" !== p && r
                        ? ((u = 0), (p = "BEFORE"), (t = !0))
                        : e >= 0 && e < 1 && r
                          ? ((u = e), (p = "DURING"), (t = !0))
                          : e >= 1 && "AFTER" !== p
                            ? ((u = 1), (p = "AFTER"), (t = !0))
                            : "DURING" !== p || r || C(),
                    t
                  )
                ) {
                  var i = { progress: u, state: p, scrollDirection: n },
                    s = p != a,
                    c = function(e) {
                      m.trigger(e, i);
                    };
                  s &&
                    "DURING" !== a &&
                    (c("enter"), c("BEFORE" === a ? "start" : "end")), c(
                    "progress"
                  ), s &&
                    "DURING" !== p &&
                    (c("BEFORE" === p ? "start" : "end"), c("leave"));
                }
                return m;
              }
              return u;
            });
            var w,
              E,
              _ = function() {
                (f = { start: g + d.offset }), o &&
                  d.triggerElement &&
                  (f.start -= o.info("size") * d.triggerHook), (f.end =
                  f.start + d.duration);
              },
              y = function(e) {
                if (i) {
                  x("duration", i.call(m)) &&
                    !e &&
                    (
                      m.trigger("change", {
                        what: "duration",
                        newval: d.duration
                      }),
                      m.trigger("shift", { reason: "duration" })
                    );
                }
              },
              N = function(e) {
                var t = 0,
                  a = d.triggerElement;
                if (o && (a || g > 0)) {
                  if (a)
                    if (a.parentNode) {
                      for (
                        var n = o.info(),
                          r = s.get.offset(n.container),
                          i = n.vertical ? "top" : "left";
                        a.parentNode.hasAttribute(
                          "data-scrollmagic-pin-spacer"
                        );

                      )
                        a = a.parentNode;
                      var c = s.get.offset(a);
                      n.isDocument || (r[i] -= o.scrollPos()), (t =
                        c[i] - r[i]);
                    } else
                      b(
                        2,
                        "WARNING: triggerElement was removed from DOM and will be reset to",
                        void 0
                      ), m.triggerElement(void 0);
                  var l = t != g;
                  (g = t), l &&
                    !e &&
                    m.trigger("shift", { reason: "triggerElementPosition" });
                }
              },
              j = function(e) {
                d.triggerHook > 0 &&
                  m.trigger("shift", { reason: "containerResize" });
              },
              O = s.extend(r.validate, {
                duration: function(e) {
                  if (s.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                    var t = parseFloat(e) / 100;
                    e = function() {
                      return o ? o.info("size") * t : 0;
                    };
                  }
                  if (s.type.Function(e)) {
                    i = e;
                    try {
                      e = parseFloat(i.call(m));
                    } catch (t) {
                      e = -1;
                    }
                  }
                  if (((e = parseFloat(e)), !s.type.Number(e) || e < 0))
                    throw i
                      ? (
                          (i = void 0),
                          [
                            'Invalid return value of supplied function for option "duration":',
                            e
                          ]
                        )
                      : ['Invalid value for option "duration":', e];
                  return e;
                }
              }),
              k = function(e) {
                (e = arguments.length ? [e] : Object.keys(O)).forEach(function(
                  e,
                  t
                ) {
                  var a;
                  if (O[e])
                    try {
                      a = O[e](d[e]);
                    } catch (t) {
                      a = l[e];
                      var n = s.type.String(t) ? [t] : t;
                      s.type.Array(n)
                        ? (
                            (n[0] = "ERROR: " + n[0]),
                            n.unshift(1),
                            b.apply(this, n)
                          )
                        : b(
                            1,
                            "ERROR: Problem executing validation callback for option '" +
                              e +
                              "':",
                            t.message
                          );
                    } finally {
                      d[e] = a;
                    }
                });
              },
              x = function(e, t) {
                var a = !1,
                  n = d[e];
                return d[e] != t && ((d[e] = t), k(e), (a = n != d[e])), a;
              },
              S = function(e) {
                m[e] ||
                  (m[e] = function(t) {
                    return arguments.length
                      ? (
                          "duration" === e && (i = void 0),
                          x(e, t) &&
                            (
                              m.trigger("change", { what: e, newval: d[e] }),
                              r.shifts.indexOf(e) > -1 &&
                                m.trigger("shift", { reason: e })
                            ),
                          m
                        )
                      : d[e];
                  });
              };
            (this.controller = function() {
              return o;
            }), (this.state = function() {
              return p;
            }), (this.scrollOffset = function() {
              return f.start;
            }), (this.triggerPosition = function() {
              var e = d.offset;
              return o &&
                (d.triggerElement
                  ? (e += g)
                  : (e += o.info("size") * m.triggerHook())), e;
            }), m
              .on("shift.internal", function(e) {
                var t = "duration" === e.reason;
                (("AFTER" === p && t) ||
                  ("DURING" === p && 0 === d.duration)) &&
                  C(), t && I();
              })
              .on("progress.internal", function(e) {
                C();
              })
              .on("add.internal", function(e) {
                I();
              })
              .on("destroy.internal", function(e) {
                m.removePin(e.reset);
              });
            var C = function(e) {
                if (w && o) {
                  var t = o.info(),
                    a = E.spacer.firstChild;
                  if (e || "DURING" !== p) {
                    var n = {
                        position: E.inFlow ? "relative" : "absolute",
                        top: 0,
                        left: 0
                      },
                      r = s.css(a, "position") != n.position;
                    E.pushFollowers
                      ? d.duration > 0 &&
                        (("AFTER" === p &&
                          0 === parseFloat(s.css(E.spacer, "padding-top"))) ||
                          ("BEFORE" === p &&
                            0 ===
                              parseFloat(s.css(E.spacer, "padding-bottom")))) &&
                        (r = !0)
                      : (n[t.vertical ? "top" : "left"] =
                          d.duration * u), s.css(a, n), r && I();
                  } else {
                    "fixed" != s.css(a, "position") &&
                      (s.css(a, { position: "fixed" }), I());
                    var i = s.get.offset(E.spacer, !0),
                      c =
                        d.reverse || 0 === d.duration
                          ? t.scrollPos - f.start
                          : Math.round(u * d.duration * 10) / 10;
                    (i[t.vertical ? "top" : "left"] += c), s.css(
                      E.spacer.firstChild,
                      { top: i.top, left: i.left }
                    );
                  }
                }
              },
              I = function() {
                if (w && o && E.inFlow) {
                  var e = "DURING" === p,
                    t = o.info("vertical"),
                    a = E.spacer.firstChild,
                    n = s.isMarginCollapseType(s.css(E.spacer, "display")),
                    r = {};
                  E.relSize.width || E.relSize.autoFullWidth
                    ? e
                      ? s.css(w, { width: s.get.width(E.spacer) })
                      : s.css(w, { width: "100%" })
                    : (
                        (r["min-width"] = s.get.width(t ? w : a, !0, !0)),
                        (r.width = e ? r["min-width"] : "auto")
                      ), E.relSize.height
                    ? e
                      ? s.css(w, {
                          height:
                            s.get.height(E.spacer) -
                            (E.pushFollowers ? d.duration : 0)
                        })
                      : s.css(w, { height: "100%" })
                    : (
                        (r["min-height"] = s.get.height(t ? a : w, !0, !n)),
                        (r.height = e ? r["min-height"] : "auto")
                      ), E.pushFollowers &&
                    (
                      (r["padding" + (t ? "Top" : "Left")] = d.duration * u),
                      (r["padding" + (t ? "Bottom" : "Right")] =
                        d.duration * (1 - u))
                    ), s.css(E.spacer, r);
                }
              },
              T = function() {
                o && w && "DURING" === p && !o.info("isDocument") && C();
              },
              R = function() {
                o &&
                  w &&
                  "DURING" === p &&
                  (((E.relSize.width || E.relSize.autoFullWidth) &&
                    s.get.width(e) != s.get.width(E.spacer.parentNode)) ||
                    (E.relSize.height &&
                      s.get.height(e) != s.get.height(E.spacer.parentNode))) &&
                  I();
              },
              L = function(e) {
                o &&
                  w &&
                  "DURING" === p &&
                  !o.info("isDocument") &&
                  (
                    e.preventDefault(),
                    o._setScrollPos(
                      o.info("scrollPos") -
                        ((e.wheelDelta ||
                          e[
                            o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"
                          ]) / 3 || 30 * -e.detail)
                    )
                  );
              };
            (this.setPin = function(a, n) {
              var r = n && n.hasOwnProperty("pushFollowers");
              if (
                (
                  (n = s.extend(
                    {},
                    {
                      pushFollowers: !0,
                      spacerClass: "scrollmagic-pin-spacer"
                    },
                    n
                  )),
                  !(a = s.get.elements(a)[0])
                )
              )
                return b(
                  1,
                  "ERROR calling method 'setPin()': Invalid pin element supplied."
                ), m;
              if ("fixed" === s.css(a, "position"))
                return b(
                  1,
                  "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."
                ), m;
              if (w) {
                if (w === a) return m;
                m.removePin();
              }
              var i = (w = a).parentNode.style.display,
                o = [
                  "top",
                  "left",
                  "bottom",
                  "right",
                  "margin",
                  "marginLeft",
                  "marginRight",
                  "marginTop",
                  "marginBottom"
                ];
              w.parentNode.style.display = "none";
              var c = "absolute" != s.css(w, "position"),
                l = s.css(w, o.concat(["display"])),
                p = s.css(w, ["width", "height"]);
              (w.parentNode.style.display = i), !c &&
                n.pushFollowers &&
                (
                  b(
                    2,
                    "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."
                  ),
                  (n.pushFollowers = !1)
                ), e.setTimeout(function() {
                w &&
                  0 === d.duration &&
                  r &&
                  n.pushFollowers &&
                  b(
                    2,
                    "WARNING: pushFollowers =",
                    !0,
                    "has no effect, when scene duration is 0."
                  );
              }, 0);
              var u = w.parentNode.insertBefore(t.createElement("div"), w),
                f = s.extend(l, {
                  position: c ? "relative" : "absolute",
                  boxSizing: "content-box",
                  mozBoxSizing: "content-box",
                  webkitBoxSizing: "content-box"
                });
              if (
                (
                  c || s.extend(f, s.css(w, ["width", "height"])),
                  s.css(u, f),
                  u.setAttribute("data-scrollmagic-pin-spacer", ""),
                  s.addClass(u, n.spacerClass),
                  (E = {
                    spacer: u,
                    relSize: {
                      width: "%" === p.width.slice(-1),
                      height: "%" === p.height.slice(-1),
                      autoFullWidth:
                        "auto" === p.width &&
                        c &&
                        s.isMarginCollapseType(l.display)
                    },
                    pushFollowers: n.pushFollowers,
                    inFlow: c
                  }),
                  !w.___origStyle
                )
              ) {
                w.___origStyle = {};
                var g = w.style;
                o
                  .concat([
                    "width",
                    "height",
                    "position",
                    "boxSizing",
                    "mozBoxSizing",
                    "webkitBoxSizing"
                  ])
                  .forEach(function(e) {
                    w.___origStyle[e] = g[e] || "";
                  });
              }
              return E.relSize.width && s.css(u, { width: p.width }), E.relSize
                .height && s.css(u, { height: p.height }), u.appendChild(
                w
              ), s.css(w, {
                position: c ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
              }), (E.relSize.width || E.relSize.autoFullWidth) &&
                s.css(w, {
                  boxSizing: "border-box",
                  mozBoxSizing: "border-box",
                  webkitBoxSizing: "border-box"
                }), e.addEventListener("scroll", T), e.addEventListener(
                "resize",
                T
              ), e.addEventListener("resize", R), w.addEventListener(
                "mousewheel",
                L
              ), w.addEventListener("DOMMouseScroll", L), b(
                3,
                "added pin"
              ), C(), m;
            }), (this.removePin = function(t) {
              if (w) {
                if (("DURING" === p && C(!0), t || !o)) {
                  var a = E.spacer.firstChild;
                  if (a.hasAttribute("data-scrollmagic-pin-spacer")) {
                    var n = E.spacer.style,
                      r = {};
                    [
                      "margin",
                      "marginLeft",
                      "marginRight",
                      "marginTop",
                      "marginBottom"
                    ].forEach(function(e) {
                      r[e] = n[e] || "";
                    }), s.css(a, r);
                  }
                  E.spacer.parentNode.insertBefore(
                    a,
                    E.spacer
                  ), E.spacer.parentNode.removeChild(
                    E.spacer
                  ), w.parentNode.hasAttribute("data-scrollmagic-pin-spacer") ||
                    (s.css(w, w.___origStyle), delete w.___origStyle);
                }
                e.removeEventListener("scroll", T), e.removeEventListener(
                  "resize",
                  T
                ), e.removeEventListener("resize", R), w.removeEventListener(
                  "mousewheel",
                  L
                ), w.removeEventListener("DOMMouseScroll", L), (w = void 0), b(
                  3,
                  "removed pin (reset: " + (t ? "true" : "false") + ")"
                );
              }
              return m;
            });
            var D,
              A = [];
            return m.on("destroy.internal", function(e) {
              m.removeClassToggle(e.reset);
            }), (this.setClassToggle = function(e, t) {
              var a = s.get.elements(e);
              return 0 !== a.length && s.type.String(t)
                ? (
                    A.length > 0 && m.removeClassToggle(),
                    (D = t),
                    (A = a),
                    m.on("enter.internal_class leave.internal_class", function(
                      e
                    ) {
                      var t = "enter" === e.type ? s.addClass : s.removeClass;
                      A.forEach(function(e, a) {
                        t(e, D);
                      });
                    }),
                    m
                  )
                : (
                    b(
                      1,
                      "ERROR calling method 'setClassToggle()': Invalid " +
                        (0 === a.length ? "element" : "classes") +
                        " supplied."
                    ),
                    m
                  );
            }), (this.removeClassToggle = function(e) {
              return e &&
                A.forEach(function(e, t) {
                  s.removeClass(e, D);
                }), m.off(
                "start.internal_class end.internal_class"
              ), (D = void 0), (A = []), m;
            }), (function() {
              for (var e in d)
                l.hasOwnProperty(e) ||
                  (b(2, 'WARNING: Unknown option "' + e + '"'), delete d[e]);
              for (var t in l) S(t);
              k();
            })(), m;
          });
          var r = {
            defaults: {
              duration: 0,
              offset: 0,
              triggerElement: void 0,
              triggerHook: 0.5,
              reverse: !0,
              loglevel: 2
            },
            validate: {
              offset: function(e) {
                if (((e = parseFloat(e)), !s.type.Number(e)))
                  throw ['Invalid value for option "offset":', e];
                return e;
              },
              triggerElement: function(e) {
                if ((e = e || void 0)) {
                  var t = s.get.elements(e)[0];
                  if (!t || !t.parentNode)
                    throw [
                      'Element defined in option "triggerElement" was not found:',
                      e
                    ];
                  e = t;
                }
                return e;
              },
              triggerHook: function(e) {
                var t = { onCenter: 0.5, onEnter: 1, onLeave: 0 };
                if (s.type.Number(e))
                  e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                  if (!(e in t))
                    throw ['Invalid value for option "triggerHook": ', e];
                  e = t[e];
                }
                return e;
              },
              reverse: function(e) {
                return !!e;
              },
              loglevel: function(e) {
                if (((e = parseInt(e)), !s.type.Number(e) || e < 0 || e > 3))
                  throw ['Invalid value for option "loglevel":', e];
                return e;
              }
            },
            shifts: ["duration", "offset", "triggerHook"]
          };
          (a.Scene.addOption = function(e, t, n, i) {
            e in r.defaults
              ? a._util.log(
                  1,
                  "[static] ScrollMagic.Scene -> Cannot add Scene option '" +
                    e +
                    "', because it already exists."
                )
              : (
                  (r.defaults[e] = t),
                  (r.validate[e] = n),
                  i && r.shifts.push(e)
                );
          }), (a.Scene.extend = function(e) {
            var t = this;
            (a.Scene = function() {
              return t.apply(this, arguments), (this.$super = s.extend(
                {},
                this
              )), e.apply(this, arguments) || this;
            }), s.extend(a.Scene, t), (a.Scene.prototype =
              t.prototype), (a.Scene.prototype.constructor = a.Scene);
          }), (a.Event = function(e, t, a, n) {
            for (var r in (n = n || {})) this[r] = n[r];
            return (this.type = e), (this.target = this.currentTarget = a), (this.namespace =
              t || ""), (this.timeStamp = this.timestamp = Date.now()), this;
          });
          var s = (a._util = (function(e) {
            var a,
              n = {},
              r = function(e) {
                return parseFloat(e) || 0;
              },
              s = function(t) {
                return t.currentStyle ? t.currentStyle : e.getComputedStyle(t);
              },
              o = function(a, n, i, o) {
                if ((n = n === t ? e : n) === e) o = !1;
                else if (!h.DomElement(n)) return 0;
                a = a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
                var c =
                  (i
                    ? n["offset" + a] || n["outer" + a]
                    : n["client" + a] || n["inner" + a]) || 0;
                if (i && o) {
                  var l = s(n);
                  c +=
                    "Height" === a
                      ? r(l.marginTop) + r(l.marginBottom)
                      : r(l.marginLeft) + r(l.marginRight);
                }
                return c;
              },
              c = function(e) {
                return e
                  .replace(/^[^a-z]+([a-z])/g, "$1")
                  .replace(/-([a-z])/g, function(e) {
                    return e[1].toUpperCase();
                  });
              };
            (n.extend = function(e) {
              for (e = e || {}, a = 1; a < arguments.length; a++)
                if (arguments[a])
                  for (var t in arguments[a])
                    arguments[a].hasOwnProperty(t) && (e[t] = arguments[a][t]);
              return e;
            }), (n.isMarginCollapseType = function(e) {
              return (
                ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(
                  e
                ) > -1
              );
            });
            var l = 0,
              m = ["ms", "moz", "webkit", "o"],
              d = e.requestAnimationFrame,
              p = e.cancelAnimationFrame;
            for (a = 0; !d && a < m.length; ++a)
              (d = e[m[a] + "RequestAnimationFrame"]), (p =
                e[m[a] + "CancelAnimationFrame"] ||
                e[m[a] + "CancelRequestAnimationFrame"]);
            d ||
              (d = function(t) {
                var a = new Date().getTime(),
                  n = Math.max(0, 16 - (a - l)),
                  r = e.setTimeout(function() {
                    t(a + n);
                  }, n);
                return (l = a + n), r;
              }), p ||
              (p = function(t) {
                e.clearTimeout(t);
              }), (n.rAF = d.bind(e)), (n.cAF = p.bind(e));
            var u = ["error", "warn", "log"],
              f = e.console || {};
            for (f.log = f.log || function() {}, a = 0; a < u.length; a++) {
              var g = u[a];
              f[g] || (f[g] = f.log);
            }
            n.log = function(e) {
              (e > u.length || e <= 0) && (e = u.length);
              var t = new Date(),
                a =
                  ("0" + t.getHours()).slice(-2) +
                  ":" +
                  ("0" + t.getMinutes()).slice(-2) +
                  ":" +
                  ("0" + t.getSeconds()).slice(-2) +
                  ":" +
                  ("00" + t.getMilliseconds()).slice(-3),
                n = u[e - 1],
                r = Array.prototype.splice.call(arguments, 1),
                i = Function.prototype.bind.call(f[n], f);
              r.unshift(a), i.apply(f, r);
            };
            var h = (n.type = function(e) {
              return Object.prototype.toString
                .call(e)
                .replace(/^\[object (.+)\]$/, "$1")
                .toLowerCase();
            });
            (h.String = function(e) {
              return "string" === h(e);
            }), (h.Function = function(e) {
              return "function" === h(e);
            }), (h.Array = function(e) {
              return Array.isArray(e);
            }), (h.Number = function(e) {
              return !h.Array(e) && e - parseFloat(e) + 1 >= 0;
            }), (h.DomElement = function(e) {
              return "object" ===
                ("undefined" == typeof HTMLElement
                  ? "undefined"
                  : i(HTMLElement)) || "function" == typeof HTMLElement
                ? e instanceof HTMLElement || e instanceof SVGElement
                : e &&
                  "object" === (void 0 === e ? "undefined" : i(e)) &&
                  null !== e &&
                  1 === e.nodeType &&
                  "string" == typeof e.nodeName;
            });
            var v = (n.get = {});
            return (v.elements = function(a) {
              var n = [];
              if (h.String(a))
                try {
                  a = t.querySelectorAll(a);
                } catch (e) {
                  return n;
                }
              if ("nodelist" === h(a) || h.Array(a) || a instanceof NodeList)
                for (var r = 0, i = (n.length = a.length); r < i; r++) {
                  var s = a[r];
                  n[r] = h.DomElement(s) ? s : v.elements(s);
                }
              else (h.DomElement(a) || a === t || a === e) && (n = [a]);
              return n;
            }), (v.scrollTop = function(t) {
              return t && "number" == typeof t.scrollTop
                ? t.scrollTop
                : e.pageYOffset || 0;
            }), (v.scrollLeft = function(t) {
              return t && "number" == typeof t.scrollLeft
                ? t.scrollLeft
                : e.pageXOffset || 0;
            }), (v.width = function(e, t, a) {
              return o("width", e, t, a);
            }), (v.height = function(e, t, a) {
              return o("height", e, t, a);
            }), (v.offset = function(e, t) {
              var a = { top: 0, left: 0 };
              if (e && e.getBoundingClientRect) {
                var n = e.getBoundingClientRect();
                (a.top = n.top), (a.left = n.left), t ||
                  ((a.top += v.scrollTop()), (a.left += v.scrollLeft()));
              }
              return a;
            }), (n.addClass = function(e, t) {
              t &&
                (e.classList ? e.classList.add(t) : (e.className += " " + t));
            }), (n.removeClass = function(e, t) {
              t &&
                (e.classList
                  ? e.classList.remove(t)
                  : (e.className = e.className.replace(
                      new RegExp(
                        "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                        "gi"
                      ),
                      " "
                    )));
            }), (n.css = function(e, t) {
              if (h.String(t)) return s(e)[c(t)];
              if (h.Array(t)) {
                var a = {},
                  n = s(e);
                return t.forEach(function(e, t) {
                  a[e] = n[c(e)];
                }), a;
              }
              for (var r in t) {
                var i = t[r];
                i == parseFloat(i) && (i += "px"), (e.style[c(r)] = i);
              }
            }), n;
          })(e || {}));
          return a;
        })(
          "undefined" == typeof window ? p : window,
          "undefined" == typeof document ? {} : document
        ),
        f = (function(e) {
          function t() {
            var e, a, n;
            s(this, t);
            for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (a = n = d(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(i)
              )
            )), (n.state = { controller: null }), d(n, a);
          }
          return l(t, e), o(t, [
            {
              key: "componentDidMount",
              value: function() {
                var e = this.props,
                  t = (e.children, m(e, ["children"]));
                this.setState({ controller: new u.Controller(t) });
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                this.controller = null;
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.props.children,
                  t = this.state.controller;
                return t
                  ? r.a.Children.map(e, function(e) {
                      if ("Scene" !== e.type.displayName) return e;
                      var a = c({}, e.props, { controller: t });
                      return r.a.createElement(e.type, a);
                    })
                  : e;
              }
            }
          ]), t;
        })(r.a.Component);
      !/*!
 * ScrollMagic v2.0.7 (2019-05-07)
 * The javascript library for magical scroll interactions.
 * (c) 2019 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.7
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file Debug Extension for ScrollMagic.
 */
      (function(e) {
        var t = "debug.addIndicators";
        if (void 0 === a) var a = { addEventListener: function() {} };
        var n = a.console || {},
          r = Function.prototype.bind.call(
            n.error || n.log || function() {},
            n
          );
        e ||
          r(
            "(" +
              t +
              ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."
          );
        var i = e._util,
          s = 0;
        e.Scene.extend(function() {
          var e,
            t = this;
          (t.addIndicators = function(a) {
            if (!e) {
              var n = {
                name: "",
                indent: 0,
                parent: void 0,
                colorStart: "green",
                colorEnd: "red",
                colorTrigger: "blue"
              };
              (a = i.extend({}, n, a)), s++, (e = new o(t, a)), t.on(
                "add.plugin_addIndicators",
                e.add
              ), t.on("remove.plugin_addIndicators", e.remove), t.on(
                "destroy.plugin_addIndicators",
                t.removeIndicators
              ), t.controller() && e.add();
            }
            return t;
          }), (t.removeIndicators = function() {
            return e &&
              (e.remove(), this.off("*.plugin_addIndicators"), (e = void 0)), t;
          });
        }), e.Controller.addOption(
          "addIndicators",
          !1
        ), e.Controller.extend(function() {
          var n = this,
            r = n.info(),
            s = r.container,
            o = r.isDocument,
            c = r.vertical,
            l = { groups: [] };
          n._indicators &&
            (function() {
              n._log &&
                (
                  Array.prototype.splice.call(
                    arguments,
                    1,
                    0,
                    "(" + t + ")",
                    "->"
                  ),
                  n._log.apply(this, arguments)
                );
            })(
              2,
              "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin."
            ), (this._indicators = l);
          var m = function() {
              l.updateBoundsPositions();
            },
            d = function() {
              l.updateTriggerGroupPositions();
            };
          return s.addEventListener(
            "resize",
            d
          ), o || (a.addEventListener("resize", d), a.addEventListener("scroll", d)), s.addEventListener("resize", m), s.addEventListener("scroll", m), (this._indicators.updateBoundsPositions = function(
            e
          ) {
            for (
              var t,
                a,
                n,
                r = e
                  ? [i.extend({}, e.triggerGroup, { members: [e] })]
                  : l.groups,
                o = r.length,
                m = {},
                d = c ? "left" : "top",
                p = c ? "width" : "height",
                u = c
                  ? i.get.scrollLeft(s) + i.get.width(s) - 15
                  : i.get.scrollTop(s) + i.get.height(s) - 15;
              o--;

            )
              for (
                t = (n = r[o]).members.length, a = i.get[p](
                  n.element.firstChild
                );
                t--;

              )
                (m[d] = u - a), i.css(n.members[t].bounds, m);
          }), (this._indicators.updateTriggerGroupPositions = function(e) {
            for (
              var t,
                a,
                r,
                m,
                d = e ? [e] : l.groups,
                p = d.length,
                u = o ? document.body : s,
                f = o ? { top: 0, left: 0 } : i.get.offset(u, !0),
                g = c ? i.get.width(s) - 15 : i.get.height(s) - 15,
                h = c ? "width" : "height",
                v = c ? "Y" : "X";
              p--;

            )
              (a = (t = d[p]).element), (m =
                (r = t.triggerHook * n.info("size")) >
                i.get[h](a.firstChild.firstChild)
                  ? "translate" + v + "(-100%)"
                  : ""), i.css(a, {
                top: f.top + (c ? r : g - t.members[0].options.indent),
                left: f.left + (c ? g - t.members[0].options.indent : r)
              }), i.css(a.firstChild.firstChild, {
                "-ms-transform": m,
                "-webkit-transform": m,
                transform: m
              });
          }), (this._indicators.updateTriggerGroupLabel = function(e) {
            var t =
                "trigger" +
                (e.members.length > 1 ? "" : " " + e.members[0].options.name),
              a = e.element.firstChild.firstChild;
            a.textContent !== t &&
              ((a.textContent = t), c && l.updateBoundsPositions());
          }), (this.addScene = function(t) {
            this._options.addIndicators &&
              t instanceof e.Scene &&
              t.controller() === n &&
              t.addIndicators(), this.$super.addScene.apply(this, arguments);
          }), (this.destroy = function() {
            s.removeEventListener("resize", d), o ||
              (
                a.removeEventListener("resize", d),
                a.removeEventListener("scroll", d)
              ), s.removeEventListener("resize", m), s.removeEventListener(
              "scroll",
              m
            ), this.$super.destroy.apply(this, arguments);
          }), n;
        });
        var o = function(e, a) {
            var n,
              r,
              o = this,
              l = c.bounds(),
              m = c.start(a.colorStart),
              d = c.end(a.colorEnd),
              p = a.parent && i.get.elements(a.parent)[0],
              u = function() {
                e._log &&
                  (
                    Array.prototype.splice.call(
                      arguments,
                      1,
                      0,
                      "(" + t + ")",
                      "->"
                    ),
                    e._log.apply(this, arguments)
                  );
              };
            (a.name = a.name || s), (m.firstChild.textContent +=
              " " + a.name), (d.textContent += " " + a.name), l.appendChild(
              m
            ), l.appendChild(
              d
            ), (o.options = a), (o.bounds = l), (o.triggerGroup = void 0), (this.add = function() {
              (r = e.controller()), (n = r.info("vertical"));
              var t = r.info("isDocument");
              p || (p = t ? document.body : r.info("container")), t ||
                "static" !== i.css(p, "position") ||
                i.css(p, { position: "relative" }), e.on(
                "change.plugin_addIndicators",
                g
              ), e.on(
                "shift.plugin_addIndicators",
                f
              ), w(), v(), setTimeout(function() {
                r._indicators.updateBoundsPositions(o);
              }, 0), u(3, "added indicators");
            }), (this.remove = function() {
              if (o.triggerGroup) {
                if (
                  (
                    e.off("change.plugin_addIndicators", g),
                    e.off("shift.plugin_addIndicators", f),
                    o.triggerGroup.members.length > 1
                  )
                ) {
                  var t = o.triggerGroup;
                  t.members.splice(
                    t.members.indexOf(o),
                    1
                  ), r._indicators.updateTriggerGroupLabel(
                    t
                  ), r._indicators.updateTriggerGroupPositions(
                    t
                  ), (o.triggerGroup = void 0);
                } else b();
                h(), u(3, "removed indicators");
              }
            });
            var f = function() {
                v();
              },
              g = function(e) {
                "triggerHook" === e.what && w();
              },
              h = function() {
                l.parentNode.removeChild(l);
              },
              v = function() {
                var t;
                l.parentNode !== p &&
                  (
                    (t = r.info("vertical")),
                    i.css(m.firstChild, {
                      "border-bottom-width": t ? 1 : 0,
                      "border-right-width": t ? 0 : 1,
                      bottom: t ? -1 : a.indent,
                      right: t ? a.indent : -1,
                      padding: t ? "0 8px" : "2px 4px"
                    }),
                    i.css(d, {
                      "border-top-width": t ? 1 : 0,
                      "border-left-width": t ? 0 : 1,
                      top: t ? "100%" : "",
                      right: t ? a.indent : "",
                      bottom: t ? "" : a.indent,
                      left: t ? "" : "100%",
                      padding: t ? "0 8px" : "2px 4px"
                    }),
                    p.appendChild(l)
                  );
                var s = {};
                (s[n ? "top" : "left"] = e.triggerPosition()), (s[
                  n ? "height" : "width"
                ] = e.duration()), i.css(l, s), i.css(d, {
                  display: e.duration() > 0 ? "" : "none"
                });
              },
              b = function() {
                r._indicators.groups.splice(
                  r._indicators.groups.indexOf(o.triggerGroup),
                  1
                ), o.triggerGroup.element.parentNode.removeChild(
                  o.triggerGroup.element
                ), (o.triggerGroup = void 0);
              },
              w = function() {
                var t = e.triggerHook();
                if (
                  !(
                    o.triggerGroup &&
                    Math.abs(o.triggerGroup.triggerHook - t) < 1e-4
                  )
                ) {
                  for (var s, l = r._indicators.groups, m = l.length; m--; )
                    if (((s = l[m]), Math.abs(s.triggerHook - t) < 1e-4))
                      return o.triggerGroup &&
                        (1 === o.triggerGroup.members.length
                          ? b()
                          : (
                              o.triggerGroup.members.splice(
                                o.triggerGroup.members.indexOf(o),
                                1
                              ),
                              r._indicators.updateTriggerGroupLabel(
                                o.triggerGroup
                              ),
                              r._indicators.updateTriggerGroupPositions(
                                o.triggerGroup
                              )
                            )), s.members.push(
                        o
                      ), (o.triggerGroup = s), void r._indicators.updateTriggerGroupLabel(
                        s
                      );
                  if (o.triggerGroup) {
                    if (1 === o.triggerGroup.members.length)
                      return (o.triggerGroup.triggerHook = t), void r._indicators.updateTriggerGroupPositions(
                        o.triggerGroup
                      );
                    o.triggerGroup.members.splice(
                      o.triggerGroup.members.indexOf(o),
                      1
                    ), r._indicators.updateTriggerGroupLabel(
                      o.triggerGroup
                    ), r._indicators.updateTriggerGroupPositions(
                      o.triggerGroup
                    ), (o.triggerGroup = void 0);
                  }
                  !(function() {
                    var t = c.trigger(a.colorTrigger),
                      s = {};
                    (s[n ? "right" : "bottom"] = 0), (s[
                      n ? "border-top-width" : "border-left-width"
                    ] = 1), i.css(t.firstChild, s), i.css(
                      t.firstChild.firstChild,
                      { padding: n ? "0 8px 3px 8px" : "3px 4px" }
                    ), document.body.appendChild(t);
                    var l = {
                      triggerHook: e.triggerHook(),
                      element: t,
                      members: [o]
                    };
                    r._indicators.groups.push(
                      l
                    ), (o.triggerGroup = l), r._indicators.updateTriggerGroupLabel(
                      l
                    ), r._indicators.updateTriggerGroupPositions(l);
                  })();
                }
              };
          },
          c = {
            start: function(e) {
              var t = document.createElement("div");
              (t.textContent = "start"), i.css(t, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: e,
                "border-color": e
              });
              var a = document.createElement("div");
              return i.css(a, {
                position: "absolute",
                overflow: "visible",
                width: 0,
                height: 0
              }), a.appendChild(t), a;
            },
            end: function(e) {
              var t = document.createElement("div");
              return (t.textContent = "end"), i.css(t, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: e,
                "border-color": e
              }), t;
            },
            bounds: function() {
              var e = document.createElement("div");
              return i.css(e, {
                position: "absolute",
                overflow: "visible",
                "white-space": "nowrap",
                "pointer-events": "none",
                "font-size": "0.85em"
              }), (e.style.zIndex = "9999"), e;
            },
            trigger: function(e) {
              var t = document.createElement("div");
              (t.textContent = "trigger"), i.css(t, { position: "relative" });
              var a = document.createElement("div");
              i.css(a, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: e,
                "border-color": e
              }), a.appendChild(t);
              var n = document.createElement("div");
              return i.css(n, {
                position: "fixed",
                overflow: "visible",
                "white-space": "nowrap",
                "pointer-events": "none",
                "font-size": "0.85em"
              }), (n.style.zIndex = "9999"), n.appendChild(a), n;
            }
          };
      })(u);
      var g = function(e) {
          return !(
            1 !== r.a.Children.count(e) ||
            !e.type ||
            ("Tween" !== e.type.displayName &&
              "Timeline" !== e.type.displayName)
          );
        },
        h = function(e, t, a) {
          return e && "function" == typeof e ? e(t, a) : e;
        },
        v = function(e, t, a) {
          return (e = (function(e, t, a) {
            if (g(e)) {
              var n = c({}, e.props, { totalProgress: t, paused: !0 });
              return r.a.createElement(
                "div",
                null,
                r.a.createElement(e.type, n)
              );
            }
            return e;
          })(e, t)), (e = h(e, t, a)), r.a.Children.only(e);
        },
        b = (function(e) {
          function t() {
            var e, a, n;
            s(this, t);
            for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (a = n = d(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(i)
              )
            )), (n.state = { event: "init", progress: 0 }), d(n, a);
          }
          return l(t, e), o(t, [
            {
              key: "componentDidMount",
              value: function() {
                var e = this.props,
                  t = (e.children, e.controller),
                  a = e.classToggle,
                  n = e.pin,
                  r = e.pinSettings,
                  i = e.indicators,
                  s = e.enabled,
                  o = m(e, [
                    "children",
                    "controller",
                    "classToggle",
                    "pin",
                    "pinSettings",
                    "indicators",
                    "enabled"
                  ]),
                  c = this.ref;
                (o.triggerElement =
                  null === o.triggerElement
                    ? null
                    : o.triggerElement || c), (this.scene = new u.Scene(
                  o
                )), this.initEventHandlers(), a &&
                  this.setClassToggle(this.scene, c, a), (n || r) &&
                  this.setPin(this.scene, c, n, r), i &&
                  this.scene.addIndicators({ name: " " }), void 0 !== s &&
                  this.scene.enabled(s), this.scene.addTo(t);
              }
            },
            {
              key: "componentDidUpdate",
              value: function(e) {
                var t = this.props,
                  a = t.duration,
                  n = t.offset,
                  r = t.triggerElement,
                  i = t.triggerHook,
                  s = t.reverse,
                  o = t.enabled;
                void 0 !== a &&
                  a !== e.duration &&
                  this.scene.duration(a), void 0 !== n &&
                  n !== e.offset &&
                  this.scene.offset(n), void 0 !== r &&
                  e.triggerElement, void 0 !== i &&
                  i !== e.triggerHook &&
                  this.scene.triggerHook(i), void 0 !== s &&
                  s !== e.reverse &&
                  this.scene.reverse(s), void 0 !== o &&
                  o !== e.enabled &&
                  this.scene.enabled(o);
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                this.scene.destroy();
              }
            },
            {
              key: "setClassToggle",
              value: function(e, t, a) {
                Array.isArray(a) && 2 === a.length
                  ? e.setClassToggle(a[0], a[1])
                  : e.setClassToggle(t, a);
              }
            },
            {
              key: "setPin",
              value: function(e, t, a, n) {
                (t = (function(e) {
                  return "string" == typeof e || e instanceof String;
                })(a)
                  ? a
                  : t), e.setPin(t, n);
              }
            },
            {
              key: "initEventHandlers",
              value: function() {
                var e = this,
                  t = this.props.children;
                ("function" == typeof t || g(h(t, 0, "init"))) &&
                  (
                    this.scene.on("start end enter leave", function(t) {
                      e.setState({ event: t });
                    }),
                    this.scene.on("progress", function(t) {
                      e.setState({ progress: t.progress });
                    })
                  );
              }
            },
            {
              key: "render",
              value: function() {
                var e,
                  t,
                  a,
                  n = this,
                  i = this.props.children,
                  s = this.state,
                  o = s.progress,
                  c = s.event,
                  l = v(i, o, c);
                return r.a.cloneElement(
                  l,
                  (
                    (e = {}),
                    (t = (function(e) {
                      return e.type &&
                      e.type.$$typeof &&
                      "Symbol(react.forward_ref)" === e.type.$$typeof.toString()
                        ? "ref"
                        : e.type && e.type.styledComponentId
                          ? "innerRef"
                          : "ref";
                    })(l)),
                    (a = function(e) {
                      return (n.ref = e);
                    }),
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: a,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                        })
                      : (e[t] = a),
                    e
                  )
                );
              }
            }
          ]), t;
        })(r.a.PureComponent),
        w = (function(e) {
          function t() {
            return s(this, t), d(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            );
          }
          return l(t, e), o(t, [
            {
              key: "render",
              value: function() {
                if (!this.props.controller) {
                  var e = this.props.children;
                  return v(e, 0, "init");
                }
                return r.a.createElement(b, this.props);
              }
            }
          ]), t;
        })(r.a.PureComponent);
      w.displayName = "Scene";
    },
    "b/1s": function(e, t, a) {
      "use strict";
      a("mRH6");
      var n = a("FLGM"),
        r = a.n(n),
        i = a("Wfk0"),
        s = a("q1tI"),
        o = a.n(s),
        c = a("TSYQ"),
        l = a.n(c),
        m = a("I3Lj"),
        d = a("ZbKm"),
        p = a("HoRD"),
        u = a("6mC5"),
        f = a("p/hv"),
        g = a("aQfe"),
        h = a("CeUd"),
        v = [
          {
            id: "git-hosting",
            img: "/balnature/img/roadmap-section/new/git-hosting.svg",
            alt: m.i18n._(m.i18n._("Git hosting")),
            link: Object(m.i18nHref)(
              "/balnature/features/source-code-management.html"
            )
          },
          {
            id: "code-review",
            img: "/balnature/img/roadmap-section/new/code-review.svg",
            alt: m.i18n._(m.i18n._("Code review")),
            link: Object(m.i18nHref)("/balnature/features/code-reviews.html")
          },
          {
            id: "ci-cd-pipelines",
            img: "/balnature/img/roadmap-section/new/ci-cd-pipelines.svg",
            alt: m.i18n._(m.i18n._("CI/CD pipelines")),
            link: Object(m.i18nHref)(
              "/balnature/features/software-development.html#a-automation"
            )
          },
          {
            id: "package-management",
            img: "/balnature/img/roadmap-section/new/package-management.svg",
            alt: m.i18n._(m.i18n._("Package management")),
            link: Object(m.i18nHref)(
              "/balnature/features/software-development.html#a-package-management"
            )
          },
          {
            id: "ide-plugin",
            img: "/balnature/img/roadmap-section/new/ide-plugin.svg",
            alt: m.i18n._(m.i18n._("Ide plugin")),
            link: Object(m.i18nHref)(
              "/balnature/features/software-development.html#a-ide-integrations"
            )
          },
          {
            id: "dev-environments",
            img: "/balnature/img/roadmap-section/new/cloud-dev-enviroments.svg",
            alt: m.i18n._(m.i18n._("Cloud dev environments")),
            link: Object(m.i18nHref)("/balnature/features/dev-environments.html")
          },
          {
            id: "documents",
            img: "/balnature/img/roadmap-section/new/documents.svg",
            alt: m.i18n._(m.i18n._("Documents")),
            link: Object(m.i18nHref)(
              "/balnature/features/chats-and-documents.html#a-documentation"
            )
          },
          {
            id: "drive",
            img: "/balnature/img/roadmap-section/new/drive.svg",
            alt: m.i18n._(m.i18n._("File storage")),
            link:
              "https://blog.jetbrains.com/balnature/2022/03/29/new-documents-upload-preview-share-files/"
          },
          {
            id: "issue-tracker",
            img: "/balnature/img/roadmap-section/new/issue-tracker.svg",
            alt: m.i18n._(m.i18n._("Issue tracker")),
            link: Object(m.i18nHref)(
              "/balnature/features/project-management.html#a-issue-tracking"
            )
          },
          {
            id: "chats",
            img: "/balnature/img/roadmap-section/new/rr.svg",
            alt: m.i18n._(m.i18n._("Chats")),
            link: Object(m.i18nHref)(
              "/balnature/features/chats-and-documents.html#a-channels"
            )
          },
          {
            id: "guest-users",
            img: "/balnature/img/roadmap-section/new/guest-users.svg",
            alt: m.i18n._(m.i18n._("Guest users")),
            link: "https://blog.jetbrains.com/balnature/2022/12/21/guest-users/"
          },
          {
            id: "teams",
            img: "/balnature/img/roadmap-section/new/teams.svg",
            alt: m.i18n._(m.i18n._("Teams")),
            link: Object(m.i18nHref)("/balnature/features/team-management.html")
          }
        ],
        b = (
          a("7A8Y"),
          Object(h.a)(function() {
            var e = Object(u.a)();
            return o.a.createElement(
              p.e,
              { className: "roadmap-section", theme: "dark" },
              o.a.createElement(
                p.b,
                { id: "Yol Haritası" },
                o.a.createElement(
                  d.a,
                  null,
                  o.a.createElement(
                    d.b,
                    {
                      classToggle: "roadmap-section__links_animated",
                      offset: 100,
                      triggerHook: "onEnter",
                      reverse: !1
                    },
                    o.a.createElement(
                      "div",
                      {
                        className: l()(
                          Object(p.g)({ size: "s" }),
                          "wt-offset-top-12",
                          "roadmap-section__links"
                        )
                      },
                      o.a.createElement(
                        "div",
                        {
                          className: l()(
                            Object(p.f)(12),
                            "roadmap-section__link-wrap",
                            "roadmap-banner"
                          )
                        },
                        o.a.createElement(
                          g.c,
                          {
                            color: "#ffffff",
                            backgroundColor: "#ED417C",
                            size: "xs",
                            className: "roadmap-banner__tag"
                          },
                          o.a.createElement("img", {
                            src:
                              "/balnature/img/roadmap-section/new/stars-icon.svg",
                            alt: "",
                            className: "roadmap-banner__icon"
                          }),
                          o.a.createElement(i.b, { id: "Yeni Güncelleme" })
                        ),
                        o.a.createElement(
                          "span",
                          {
                            className: l()(e("wt-h3"), "roadmap-banner__text")
                          },
                          o.a.createElement(i.b, {
                            id: "Kali Linux Live Usb şimdi satışta"
                          })
                        ),
                        o.a.createElement(
                          f.a,
                          {
                            href: Object(m.i18nHref)("/balnature/download/"),
                            mode: "outline",
                            theme: "light",
                            size: "s",
                            className: "roadmap-banner__button"
                          },
                          o.a.createElement(i.b, { id: "Keşfet" })
                        )
                      ),
                      o.a.createElement(
                        "div",
                        {
                          className: l()(
                            Object(p.f)(12),
                            "roadmap-section__links-wrapper"
                          )
                        },
                        o.a.createElement(
                          "div",
                          { className: Object(p.g)({ size: "s" }) },
                          r()(v).call(v, function(e, t) {
                            return o.a.createElement(
                              "span",
                              {
                                key: e.id,
                                className: l()(
                                  Object(p.f)({ default: 2, md: 3, sm: 4 }),
                                  "roadmap-section__link-wrap"
                                ),
                                style: {
                                  transitionDelay: "".concat(
                                    200 * (t + 1),
                                    "ms"
                                  )
                                }
                              },
                              o.a.createElement(
                                "a",
                                {
                                  className: "roadmap-section__link",
                                  href: e.link
                                },
                                o.a.createElement("img", {
                                  src: e.img,
                                  alt: e.alt,
                                  className: "roadmap-section__img"
                                })
                              )
                            );
                          })
                        )
                      )
                    )
                  )
                )
              )
            );
          })
        );
      a.d(t, "a", function() {
        return b;
      });
    },
    "dd+g": function(e, t, a) {},
    e0rA: function(e, t, a) {},
    emn0: function(e, t, a) {},
    hQI6: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return h;
      });
      var n = a("LK4Q"),
        r = a("FLGM"),
        i = a.n(r),
        s = a("5Yf3"),
        o = a("q1tI"),
        c = a.n(o),
        l = a("17x9"),
        m = a.n(l),
        d = a("ZEpC"),
        p = a("3dk/"),
        u = a("60d8"),
        f = a("TVie"),
        g = a("tKqw"),
        h = function(e) {
          var t = e.slides,
            a = e.learnMore,
            r = e.initialActiveSlideIndex,
            o = void 0 === r ? 0 : r,
            l = e.onActiveSlideChange,
            m = void 0 === l ? function() {} : l,
            h = e.slideshowDuration,
            v = void 0 === h ? 5e3 : h,
            b = e.autorunWhenInView,
            w = void 0 === b || b,
            E = e.className,
            _ = Object(d.e)(),
            y = Object(u.a)({
              initialIndex: o,
              delay: v,
              onChange: m,
              size: t.length,
              autorunWhenInView: w
            }),
            N = Object(s.a)(y, 4),
            j = N[0],
            O = N[1],
            k = N[2],
            x = N[3].wasStopped;
          return _
            ? c.a.createElement(p.a, { data: { slides: t }, className: E })
            : c.a.createElement(
                f.a,
                {
                  ref: j,
                  learnMore: a,
                  activeSlideIndex: O,
                  onActiveSlideChange: k,
                  progressDuration: x ? null : v,
                  className: E
                },
                i()(t).call(t, function(e) {
                  return c.a.createElement(g.a, Object(n.a)({ key: e.id }, e));
                })
              );
        };
      h.propTypes = {
        slides: m.a.arrayOf(
          m.a.shape({
            id: m.a.string.isRequired,
            title: m.a.node.isRequired,
            img: m.a.shape({ src: m.a.string, alt: m.a.string }).isRequired
          })
        ),
        initialActiveSlideIndex: m.a.number,
        slideshowDuration: m.a.number,
        onActiveSlideChange: m.a.func,
        autorunWhenInView: m.a.bool,
        className: m.a.string,
        learnMore: m.a.shape({
          title: m.a.string.isRequired,
          link: m.a.string.isRequired
        })
      };
    },
    itpT: function(e, t, a) {
      "use strict";
      var n = a("Wfk0"),
        r = a("q1tI"),
        i = a.n(r),
        s = a("17x9"),
        o = a.n(s),
        c = a("TSYQ"),
        l = a.n(c),
        m = a("I3Lj"),
        d = a("HoRD"),
        p = a("ZEpC"),
        u = a("6mC5"),
        f = a("1//O"),
        g = a("CeUd"),
        h = a("VH9H"),
        v = a("lX8u"),
        b = a("1hVQ"),
        w = a("SsmJ"),
        E = a("mnMc"),
        _ = a.n(E),
        y = a("nwUI"),
        N = a("BxIP"),
        j = a("5mIx"),
        O = a("4sSH"),
        k = [
          {
            title: m.i18n._(m.i18n._("Windows (.exe)")),
            href: "https://download.jetbrains.com/balnature/jetbrains-space.exe",
            suffix: ".exe",
            defaultForOs: N.a.windows
          },
          {
            title: m.i18n._(m.i18n._("macOS (.dmg)")),
            href: "https://download.jetbrains.com/balnature/jetbrains-space.dmg",
            suffix: ".dmg",
            defaultForOs: N.a.macos
          },
          {
            title: m.i18n._(m.i18n._("Linux (snap)")),
            href: "https://snapcraft.io/space",
            suffix: "snap",
            defaultForOs: N.a.linux
          },
          {
            title: m.i18n._(m.i18n._("Linux (AppImage)")),
            href:
              "https://download.jetbrains.com/balnature/jetbrains-space.AppImage",
            suffix: "AppImage",
            defaultForOs: N.a.linux
          }
        ],
        x = function() {
          var e,
            t,
            a,
            r = (
              (e = Object(p.d)()),
              (t = Object(p.e)()),
              (a = ["de-de", "ja-jp"]),
              e && !t && _()(a).call(a, m.i18n.locale)
            ),
            s = Object(u.a)(),
            o = Object(p.f)(),
            c = Object(N.e)(),
            l = c === N.a.android,
            f = c === N.a.ios;
          return i.a.createElement(
            "div",
            { className: "wt-offset-top-24 wt-offset-top-sm-32" },
            o
              ? i.a.createElement(
                  "div",
                  { className: Object(d.g)({ justify: "center" }) },
                  l || f
                    ? i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                          "div",
                          { className: Object(d.f)(12) },
                          i.a.createElement(O.a, {
                            text: k[1].href,
                            isButton: !0,
                            buttonText: m.i18n._(
                              m.i18n._("Copy link to MacOS app")
                            ),
                            icon: i.a.createElement(j.a, null),
                            theme: "dark"
                          })
                        ),
                        i.a.createElement(
                          "div",
                          { className: Object(d.f)(12) },
                          i.a.createElement(O.a, {
                            text: k[0].href,
                            isButton: !0,
                            buttonText: m.i18n._(
                              m.i18n._("Copy link to Windows app")
                            ),
                            icon: i.a.createElement(j.a, null),
                            theme: "dark"
                          })
                        )
                      )
                    : i.a.createElement(
                        "div",
                        { className: Object(d.f)(12) },
                        i.a.createElement(
                          "p",
                          { className: s("wt-text-2", { hardness: "hard" }) },
                          i.a.createElement(n.b, {
                            id: "Windows, macOS,<0/>or Linux",
                            components: { 0: i.a.createElement("br", null) }
                          })
                        ),
                        i.a.createElement(y.a, {
                          title: m.i18n._(m.i18n._("İndir")),
                          options: k,
                          size: r ? "xs" : "s",
                          mode: "rock",
                          className: "wt-offset-top-12"
                        })
                      )
                )
              : i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    "p",
                    { className: s("wt-text-2", { hardness: "hard" }) },
                    i.a.createElement(n.b, {
                      id: "Windows, macOS,<0/>or Linux",
                      components: { 0: i.a.createElement("br", null) }
                    })
                  ),
                  i.a.createElement(y.a, {
                    title: m.i18n._(m.i18n._("İndir")),
                    options: k,
                    size: r ? "xs" : "s",
                    mode: "rock",
                    className: "wt-offset-top-12"
                  })
                )
          );
        },
        S = a("a45L"),
        C = a("tlYG"),
        I = a("ME1N"),
        T = a.n(I),
        R = a("mFFw"),
        L = a.n(R),
        D = function(e) {
          var t = e.className;
          return i.a.createElement(
            S.a,
            {
              href:
                "https://apps.apple.com/us/app/jetbrains-space/id1474043444",
              rel: "noopener noreferrer",
              target: "_blank",
              mode: "contrast",
              className: t,
              size: "s",
              icon: i.a.createElement(C.a, { spriteId: T.a.id })
            },
            i.a.createElement(n.b, { id: "App Store" })
          );
        };
      D.propTypes = { className: o.a.string };
      var A = function(e) {
        var t = e.className;
        return i.a.createElement(
          S.a,
          {
            href:
              "https://play.google.com/store/apps/details?id=com.jetbrains.space",
            rel: "noopener noreferrer",
            target: "_blank",
            mode: "contrast",
            size: "s",
            className: t,
            icon: i.a.createElement(C.a, { spriteId: L.a.id })
          },
          i.a.createElement(n.b, { id: "Google Play" })
        );
      };
      A.propTypes = { className: o.a.string };
      var z = function() {
          var e = Object(N.e)(),
            t = !(e === N.a.android),
            a = !(e === N.a.ios),
            n = Object(p.f)();
          return i.a.createElement(
            "div",
            { className: "wt-offset-top-12" },
            i.a.createElement(
              "div",
              { className: Object(d.g)({ size: "xs", direction: "column" }) },
              n
                ? i.a.createElement(
                    i.a.Fragment,
                    null,
                    t &&
                      i.a.createElement(
                        "div",
                        { className: l()(Object(d.f)(12), "wt-offset-top-12") },
                        i.a.createElement(D, null)
                      ),
                    a &&
                      i.a.createElement(
                        "div",
                        { className: l()(Object(d.f)(12), "wt-offset-top-12") },
                        i.a.createElement(A, null)
                      )
                  )
                : i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      "div",
                      { className: l()(Object(d.f)(12), "wt-offset-top-12") },
                      i.a.createElement(D, null)
                    ),
                    i.a.createElement(
                      "div",
                      { className: l()(Object(d.f)(12), "wt-offset-top-12") },
                      i.a.createElement(A, null)
                    )
                  )
            )
          );
        },
        H = (
          a("ytUy"),
          function(e) {
            var t = e.imgSrc,
              a = e.imgAlt,
              n = void 0 === a ? "" : a,
              r = e.title,
              s = e.footer,
              o = e.className,
              c = Object(u.a)(),
              m = Object(f.a)(w.a);
            return i.a.createElement(
              h.a,
              { className: l()(o, "space-apps-card") },
              i.a.createElement(
                "div",
                {
                  className: l()("jb-vertical-flex", "space-apps-card__inner"),
                  ref: m
                },
                i.a.createElement(
                  "div",
                  { className: "jb-vertical-flex__grow" },
                  i.a.createElement("img", {
                    src: t,
                    alt: n,
                    className: "space-apps-card__icon"
                  }),
                  i.a.createElement(
                    "h3",
                    { className: l()(c("wt-h3"), "wt-offset-top-24") },
                    r
                  )
                ),
                i.a.createElement("div", null, s)
              )
            );
          }
        );
      H.propTypes = {
        imgSrc: o.a.string.isRequired,
        imgAlt: o.a.string,
        title: o.a.node.isRequired,
        className: o.a.string,
        footer: o.a.node
      };
      var M = function(e) {
        var t = e.className,
          a = Object(p.e)(),
          r = Object(p.f)(),
          s = Object(u.a)();
        return i.a.createElement(
          "div",
          { className: l()(!r && "jb-text-sm-center", t) },
          i.a.createElement(
            "h2",
            { className: s(a ? "wt-h1" : "wt-h2") },
            i.a.createElement(n.b, { id: "BalNature ile bağlantıda kalın." })
          ),
          i.a.createElement(
            "p",
            {
              className: l()(
                s(r ? "wt-text-2" : "wt-text-1", { hardness: "hard" }),
                "wt-offset-top-12"
              )
            },
            i.a.createElement(n.b, {
              id:
                "BalNature ile İstediğiniz yerde istediğinz cihazla bağlantıda kalın."
            })
          )
        );
      };
      M.propTypes = { className: o.a.string };
      var F = Object(g.a)(function() {
        var e = Object(p.f)();
        return i.a.createElement(
          d.e,
          { className: "space-apps-section" },
          e
            ? i.a.createElement("img", {
                src: "/balnature/img/space-apps-section/space-hand-mobile.svg",
                alt: "",
                className: "space-apps-section__hands"
              })
            : i.a.createElement(v.a, {
                src: "/balnature/img/space-apps-section/space-hands.webp",
                fallback: "/balnature/img/space-apps-section/space-hands.svg",
                alt: "",
                className: "space-apps-section__hands"
              }),
          i.a.createElement(
            d.b,
            { id: "apps" },
            i.a.createElement(
              "div",
              { className: Object(d.g)() },
              e &&
                i.a.createElement(
                  "div",
                  { className: l()(Object(d.f)(12)) },
                  i.a.createElement(M, {
                    className: "space-apps-section__content"
                  })
                ),
              i.a.createElement(
                "div",
                {
                  className: l()(
                    Object(d.f)({ default: 6, md: 5, sm: 12 }),
                    "space-apps-phone",
                    "jb-text-center",
                    "wt-offset-top-sm-48"
                  )
                },
                i.a.createElement(
                  "div",
                  { className: "space-apps-phone__screen" },
                  i.a.createElement(
                    "video",
                    {
                      autoPlay: !0,
                      playsInline: !0,
                      muted: !0,
                      loop: !0,
                      className: "space-apps-phone__video"
                    },
                    i.a.createElement("source", {
                      src: "".concat(
                        "https://resources.seazer.xyz/storage/products/space/video/phone-screen-v4.mp4"
                      ),
                      type: "video/mp4"
                    })
                  )
                )
              ),
              i.a.createElement(
                "div",
                {
                  className: l()(
                    Object(d.f)(
                      { default: 5, lg: 6, md: 7, sm: 12 },
                      { offsetLeft: { default: 1, lg: 0 } }
                    )
                  )
                },
                i.a.createElement(
                  "div",
                  null,
                  !e && i.a.createElement(M, { className: "wt-offset-top-48" }),
                  i.a.createElement(
                    "div",
                    {
                      className: Object(d.g)({
                        alignItems: "stretch",
                        size: "s"
                      })
                    },
                    e
                      ? i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            "div",
                            {
                              className: l()(
                                Object(d.f)(12),
                                "jb-text-sm-center"
                              )
                            },
                            i.a.createElement(z, null)
                          ),
                          i.a.createElement(
                            "div",
                            {
                              className: l()(
                                Object(d.f)(12),
                                "jb-text-sm-center"
                              )
                            },
                            i.a.createElement(x, null)
                          )
                        )
                      : i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(H, {
                            imgSrc:
                              "/balnature/img/space-apps-section/mobile-icon.png",
                            imgAlt: m.i18n._(m.i18n._("Mobile Apps")),
                            title: i.a.createElement(n.b, {
                              id: "Mobile Apps"
                            }),
                            footer: i.a.createElement(z, null),
                            className: l()(
                              Object(d.f)({ default: 6, sm: 12 }),
                              "wt-offset-top-16"
                            )
                          }),
                          i.a.createElement(H, {
                            imgSrc: "/balnature/img/space-apps-section/pc-icon.png",
                            imgAlt: m.i18n._(m.i18n._("Desktop Apps")),
                            title: i.a.createElement(n.b, {
                              id: "Desktop Apps"
                            }),
                            footer: i.a.createElement(x, null),
                            className: l()(
                              Object(d.f)({ default: 6, sm: 12 }),
                              "wt-offset-top-16"
                            )
                          })
                        )
                  )
                )
              )
            )
          )
        );
      });
      a.d(t, "a", function() {
        return F;
      });
    },
    jEdN: function(e, t, a) {
      "use strict";
      var n = a("q1tI"),
        r = a.n(n),
        i = a("HoRD"),
        s = a("CeUd"),
        o = a("7tit"),
        c = a("Wfk0"),
        l = a("17x9"),
        m = a.n(l),
        d = a("TSYQ"),
        p = a.n(d),
        u = a("6mC5"),
        f = a("ZEpC"),
        g = a("ZbKm"),
        h = function(e) {
          var t = e.className;
          return r.a.createElement(
            g.a,
            null,
            r.a.createElement(
              g.b,
              {
                classToggle: "second-intro-circle_animated",
                offset: 100,
                duration: "100%",
                triggerHook: "onEnter"
              },
              r.a.createElement(
                "svg",
                {
                  className: p()(t, "second-intro-circle"),
                  width: "32",
                  height: "32",
                  viewBox: "0 0 32 32",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                },
                r.a.createElement("circle", {
                  cx: "16",
                  cy: "16",
                  r: "7",
                  fill: "#fff"
                }),
                r.a.createElement("circle", {
                  cx: "16",
                  cy: "16",
                  r: "15",
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: "1",
                  className: "second-intro-circle__outer"
                })
              )
            )
          );
        },
        v = function(e) {
          var t = e.className,
            a = Object(u.a)(),
            n = r.a.createElement(c.b, {
              id: "Kullanıcılar için hepsi bir arada çözümler"
            }),
            s = a("wt-h1"),
            o = Object(f.e)();
          return r.a.createElement(
            "div",
            { className: t, id: "all-in-one" },
            !o && r.a.createElement(h, null),
            r.a.createElement(
              "div",
              { className: Object(i.g)({ justify: o ? "start" : "center" }) },
              r.a.createElement(
                "h2",
                {
                  className: p()(
                    Object(i.f)({ default: 10, md: 8, sm: 12 }),
                    s,
                    "wt-offset-top-24",
                    "wt-offset-top-md-48",
                    "wt-offset-sm-0"
                  )
                },
                n
              )
            )
          );
        };
      v.propTypes = { className: m.a.string };
      var b = a("I3Lj"),
        w = a("1hVQ"),
        E = (
          a("5EML"),
          [
            {
              id: "build-and-deliver",
              title: r.a.createElement(c.b, { id: "normal kullanıcılar" }),
              learnMore: {
                title: b.i18n._(
                  b.i18n._("Learn more about software development tools")
                ),
                link: Object(b.i18nHref)(
                  "/balnature/features/software-development.html"
                )
              },
              slides: [
                {
                  id: "host-and-manage-git-repositories",
                  title: r.a.createElement(c.b, {
                    id: "Host and manage Git repositories"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/build-and-deliver/host-and-manage-git-repositories.jpeg"
                    ),
                    alt: b.i18n._(b.i18n._("Host and manage Git repositories"))
                  }
                },
                {
                  id: "review-code-and-manage-merge-requests",
                  title: r.a.createElement(c.b, {
                    id: "Review code and manage merge requests"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/build-and-deliver/review-code-and-manage-merge-requests.jpeg"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Review code and manage merge requests")
                    )
                  }
                },
                {
                  id: "automate-ci-cd-pipelines",
                  title: r.a.createElement(c.b, {
                    id: "Automate CI/CD pipelines"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/build-and-deliver/automate-ci-cd-pipelines.jpeg"
                    ),
                    alt: b.i18n._(b.i18n._("Automate CI/CD pipelines"))
                  }
                },
                {
                  id: "store-artifacts-in-package-repositories",
                  title: r.a.createElement(c.b, {
                    id: "Store artifacts in package repositories"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/build-and-deliver/store-artifacts-in-package-repositories.jpeg"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Store artifacts in package repositories")
                    )
                  }
                },
                {
                  id: "ide",
                  title: r.a.createElement(c.b, {
                    id: "Connect JetBrains IDEs to Space"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/build-and-deliver/connect_your_jetbrains_ide.jpeg"
                    ),
                    alt: b.i18n._(b.i18n._("Connect JetBrains IDEs to Space"))
                  }
                },
                {
                  id: "chat",
                  title: r.a.createElement(c.b, {
                    id: "Get chat notifications on code reviews, and issues"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/build-and-deliver/geet-chat-notifications.jpeg"
                    ),
                    alt: b.i18n._(
                      b.i18n._(
                        "Get chat notifications on code reviews, and issues"
                      )
                    )
                  }
                }
              ]
            },
            {
              id: "develop-remotely",
              title: r.a.createElement(c.b, { id: "İçerik yürütücüler" }),
              learnMore: {
                title: b.i18n._(
                  b.i18n._("Learn more about remote development")
                ),
                link: Object(b.i18nHref)(
                  "/remote-development/space-dev-environments/"
                )
              },
              slides: [
                {
                  id: "Speed-up-onboarding-with-dev-environments",
                  title: r.a.createElement(c.b, {
                    id: "Speed up onboarding with dev environments"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/develop-remotely/speed-up-onboarding.jpg"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Speed up onboarding with dev environments")
                    )
                  }
                },
                {
                  id: "Start-using-IDE-in-seconds-with-prebuilt-snapshots",
                  title: r.a.createElement(c.b, {
                    id: "Start using IDE in seconds with prebuilt snapshots"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/develop-remotely/get-ready-to-use-ide.jpg"
                    ),
                    alt: b.i18n._(
                      b.i18n._(
                        "Start using IDE in seconds with prebuilt snapshots"
                      )
                    )
                  }
                },
                {
                  id: "Manage-dev-environments-centrally",
                  title: r.a.createElement(c.b, {
                    id: "Manage dev environments centrally"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/develop-remotely/manage-dev-env.jpg"
                    ),
                    alt: b.i18n._(b.i18n._("Manage dev environments centrally"))
                  }
                },
                {
                  id: "Choose-VM-type-to-fit-your-project-size",
                  title: r.a.createElement(c.b, {
                    id: "Choose the VM type to fit your project size"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/develop-remotely/choose-the-vm-type.jpg"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Choose the VM type to fit your project size")
                    )
                  }
                },
                {
                  id: "Save-resources-with-automatic-hibernation",
                  title: r.a.createElement(c.b, {
                    id: "Save resources with automatic hibernation"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/develop-remotely/save-resources.jpg"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Save resources with automatic hibernation")
                    )
                  }
                },
                {
                  id: "Collaborate-on-code-with-your-teammates",
                  title: r.a.createElement(c.b, {
                    id: "Collaborate on code with your teammates"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/develop-remotely/collaborate-on-code.jpg"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Collaborate on code with your teammates")
                    )
                  }
                }
              ]
            },
            {
              id: "manage-projects",
              title: r.a.createElement(c.b, { id: "okullar ve kurumlar" }),
              learnMore: {
                title: b.i18n._(
                  b.i18n._("Learn more about project management tools")
                ),
                link: Object(b.i18nHref)(
                  "/balnature/features/project-management.html"
                )
              },
              slides: [
                {
                  id: "Share-knowledge-and-functional-requirements",
                  title: r.a.createElement(c.b, {
                    id: "Share knowledge and functional requirements"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/manage-projects/create-functional-requirement.jpg"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Share knowledge and functional requirements")
                    )
                  }
                },
                {
                  id: "Create-collaborate-and-manage-documents",
                  title: r.a.createElement(c.b, {
                    id: "Create, collaborate on, and manage documents"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/manage-projects/create-collaborate-and-manage-docs.png"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Create, collaborate on, and manage documents")
                    )
                  }
                },
                {
                  id: "Break-down-project-phases-into-tasks",
                  title: r.a.createElement(c.b, {
                    id: "Break down project phases into tasks"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/manage-projects/break-down-major-project-phases-into-actionable-tasks.jpeg"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Break down project phases into tasks")
                    )
                  }
                },
                {
                  id: "track-and-resolve-issues",
                  title: r.a.createElement(c.b, {
                    id: "Track and resolve issues"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/manage-projects/track-and-resolve-issues.jpeg"
                    ),
                    alt: b.i18n._(b.i18n._("Track and resolve issues"))
                  }
                },
                {
                  id: "visualize-your-progress-with-issue-boards",
                  title: r.a.createElement(c.b, {
                    id: "Visualize your progress with issue boards"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/manage-projects/visualize-your-progress-with-issue-boards.jpeg"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Visualize your progress with issue boards")
                    )
                  }
                },
                {
                  id: "Track-time-spent-on-issues",
                  title: r.a.createElement(c.b, {
                    id: "Track time spent on issues"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/manage-projects/track-time-spent.jpg"
                    ),
                    alt: b.i18n._(b.i18n._("Track time spent on issues"))
                  }
                },
                {
                  id: "Store-share-and-download-any-files",
                  title: r.a.createElement(c.b, {
                    id: "Store, share, and download any files"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/manage-projects/store-share-and-download-any-files.jpg"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Store, share, and download any files")
                    )
                  }
                }
              ]
            },
            {
              id: "oyuncular",
              title: r.a.createElement(c.b, { id: "oyuncular" }),
              learnMore: {
                title: b.i18n._(
                  b.i18n._("Learn more about the power of collaborate")
                ),
                link: Object(b.i18nHref)(
                  "/balnature/features/chats-and-documents.html"
                )
              },
              slides: [
                {
                  id: "talk-to-your-teammates-privately-or-in-groups",
                  title: r.a.createElement(c.b, {
                    id: "Talk to your teammates privately or in groups"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/chat-and-collaborate/talk-to-your-teammates-privately-or-in-groups.jpeg"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Talk to your teammates privately or in groups")
                    )
                  }
                },
                {
                  id: "invite-clients-and-freelancers-to-collaborate",
                  title: r.a.createElement(c.b, {
                    id: "Invite clients and freelancers to collaborate"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/chat-and-collaborate/invite-clients-and-freelancers-to-collaborate.png"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Invite clients and freelancers to collaborate")
                    )
                  }
                },
                {
                  id: "keep-your-team-updated-with-channel-notifications",
                  title: r.a.createElement(c.b, {
                    id: "Keep your team updated with channel notifications"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/chat-and-collaborate/keep-your-team-updated-with-channel-notifications.jpeg"
                    ),
                    alt: b.i18n._(
                      b.i18n._(
                        "Keep your team updated with channel notifications"
                      )
                    )
                  }
                },
                {
                  id: "Review-code-issues-and-documents-in-chats",
                  title: r.a.createElement(c.b, {
                    id: "Review code, issues, and documents in chats"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/chat-and-collaborate/review-code-issues-and-docs.jpg"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Review code, issues, and documents in chats")
                    )
                  }
                },
                {
                  id: "create-a-transparent-company-structure",
                  title: r.a.createElement(c.b, {
                    id: "Create a transparent company structure"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/manage-teams/create-a-transparent-company-structure.jpeg"
                    ),
                    alt: b.i18n._(
                      b.i18n._("Create a transparent company structure")
                    )
                  }
                },
                {
                  id: "unify-user-and-access-management",
                  title: r.a.createElement(c.b, {
                    id: "Unify user and access management"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/manage-teams/unify-user-and-access-management.jpeg"
                    ),
                    alt: b.i18n._(b.i18n._("Unify user and access management"))
                  }
                },
                {
                  id: "Manage-your-teams-time-effectively-with-calendars",
                  title: r.a.createElement(c.b, {
                    id: "Manage your team’s time effectively with calendars"
                  }),
                  img: {
                    src: "".concat(
                      w.storageUrl,
                      "/products/space/slideshow/chat-and-collaborate/manage-your-teams-time-effectively.jpeg"
                    ),
                    alt: b.i18n._(
                      b.i18n._(
                        "Manage your team’s time effectively with calendars"
                      )
                    )
                  }
                }
              ]
            }
          ]
        ),
        _ = Object(s.a)(function() {
          return r.a.createElement(
            i.e,
            { className: "slideshow-section", id: "all-in-one" },
            r.a.createElement(
              i.b,
              { id: "slideshow-section" },
              r.a.createElement(v, { className: "slideshow-section__intro" }),
              r.a.createElement(o.b, {
                tabs: E,
                className:
                  "wt-offset-top-48 slideshow-section__slideshow-wrapper",
                slideshowClassName: "slideshow-section__slideshow"
              })
            )
          );
        });
      a.d(t, "a", function() {
        return _;
      });
    },
    kB7H: function(e, t, a) {
      "use strict";
      a.r(t);
      a("rB9j"), a("UxlC");
      var n = a("mnMc"),
        r = a.n(n),
        i = a("q1tI"),
        s = a.n(i),
        o = a("nB0T"),
        c = a("AzkY"),
        l = a("2VS/");
      if ("undefined" != typeof window) {
        var m = window.location.hash;
        m &&
          r()(m).call(m, "request-eap-invite") &&
          window.location.replace("/balnature/#sign-up");
      }
      Object(o.default)(
        s.a.createElement(c.a, {
          tocId: "js-menu-second",
          pageId: "overview-page"
        }),
        "space-overview-page"
      ), Object(o.default)(
        s.a.createElement(l.a, { theme: "dark" }),
        "Haberler"
      );
    },
    "kC/l": function(e, t, a) {},
    lX8u: function(e, t, a) {
      "use strict";
      var n = a("q1tI"),
        r = a.n(n),
        i = a("17x9"),
        s = a.n(i),
        o = function(e) {
          var t = e.src,
            a = e.fallback,
            n = e.className,
            i = e.alt;
          return r.a.createElement(
            "picture",
            null,
            r.a.createElement("source", { srcSet: t, type: "image/webp" }),
            r.a.createElement("img", { src: a, alt: i, className: n })
          );
        };
      (o.propTypes = {
        className: s.a.string,
        src: s.a.string.isRequired,
        fallback: s.a.string.isRequired,
        alt: s.a.string.isRequired
      }), a.d(t, "a", function() {
        return o;
      });
    },
    lqnL: function(e, t, a) {
      e.exports = a.p + "kisi/salih.png";
    },
    mFFw: function(e, t, a) {
      var n = a("4BeY"),
        r = a("IaFt"),
        i = new n({
          id: "google-play",
          use: "google-play-usage",
          viewBox: "0 0 22 25",
          content:
            '<symbol fill="none" viewBox="0 0 22 25" xmlns="http://www.w3.org/2000/svg" id="google-play"><path d="m.0751953 22.5265v-20.59157c0-.71464.4118397-1.344497 1.0174647-1.635217l11.93094 11.930987-11.93094 11.931c-.605625-.3028-1.0174647-.9206-1.0174647-1.6352zm16.7276047-6.5166-13.03324 7.5341 10.28364-10.2837zm4.0578-5.2206c.4118.3271.7146.8358.7146 1.4414 0 .6057-.2665 1.0902-.6904 1.4293l-2.7738 1.5989-3.0282-3.0282 3.0282-3.02815zm-17.09104-9.871827 13.03324 7.534077-2.7496 2.74955z" fill="#0c0c0d" /></symbol>'
        });
      r.add(i);
      e.exports = i;
    },
    nHco: function(e, t, a) {
      e.exports = a.p + "kisi/bahri.png";
    },
    oB7g: function(e, t, a) {},
    p8ej: function(e, t, a) {
      "use strict";
      var n = a("Wfk0"),
        r = a("q1tI"),
        i = a.n(r),
        s = a("17x9"),
        o = a.n(s),
        c = a("HoRD"),
        l = a("a+XR"),
        m = a("6mC5"),
        d = a("TSYQ"),
        p = a.n(d),
        u = a("I3Lj"),
        f = (
          a("OQ0+"),
          function(e) {
            var t = e.isPromo,
              a = Object(m.a)();
            return i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(
                "div",
                { className: Object(c.g)({ justify: t ? "center" : "start" }) },
                i.a.createElement(
                  "div",
                  { className: Object(c.f)({ default: 9, md: 12 }) },
                  i.a.createElement(
                    "p",
                    { className: a("wt-subtitle-2", { flow: !0 }) },
                    i.a.createElement(n.b, {
                      id:
                        "Commit code and explore changes. Review code and create merge requests. Create, manage, share, and reproduce cloud dev environments. Automate your workflows and CI/CD pipelines. Store and manage package repositories. Connect JetBrains IDEs to Space."
                    })
                  )
                )
              ),
              i.a.createElement(
                "div",
                { className: Object(c.g)() },
                i.a.createElement(
                  l.a,
                  {
                    className: p()(
                      Object(c.f)({ default: 4, md: 6, sm: 12 }),
                      "wt-offset-top-48"
                    ),
                    isLink: !0,
                    theme: "dark",
                    href: Object(u.i18nHref)(
                      "/balnature/features/software-development.html#a-source-code"
                    )
                  },
                  i.a.createElement(
                    l.c,
                    null,
                    i.a.createElement("img", {
                      src: "/balnature/features/img/projects/icon_settings.svg",
                      alt: u.i18n._(u.i18n._("Source code management"))
                    }),
                    i.a.createElement(
                      "h3",
                      { className: "wt-h3 wt-h3_theme_dark wt-offset-top-12" },
                      i.a.createElement(n.b, { id: "Source code management" })
                    ),
                    i.a.createElement(
                      "p",
                      {
                        className:
                          "wt-text-2 wt-text-2_theme_dark wt-offset-top-12"
                      },
                      i.a.createElement(n.b, {
                        id:
                          "Fast and scalable Git hosting with flexible permissions, CI integrations, quality gates, a web-based UI, and multiple IDE integrations."
                      })
                    )
                  )
                ),
                i.a.createElement(
                  l.a,
                  {
                    className: p()(
                      Object(c.f)({ default: 4, md: 6, sm: 12 }),
                      "wt-offset-top-48"
                    ),
                    isLink: !0,
                    theme: "dark",
                    href: Object(u.i18nHref)(
                      "/balnature/features/software-development.html#a-code-review"
                    )
                  },
                  i.a.createElement(
                    l.c,
                    null,
                    i.a.createElement("img", {
                      src: "/balnature/features/img/projects/icon_search.svg",
                      alt: u.i18n._(u.i18n._("Code review"))
                    }),
                    i.a.createElement(
                      "h3",
                      { className: "wt-h3 wt-h3_theme_dark wt-offset-top-12" },
                      i.a.createElement(n.b, { id: "Code review" })
                    ),
                    i.a.createElement(
                      "p",
                      {
                        className:
                          "wt-text-2 wt-text-2_theme_dark wt-offset-top-12"
                      },
                      i.a.createElement(n.b, {
                        id:
                          "Integrate code reviews seamlessly into your development pipeline, and review code from JetBrains IDEs, the Space UI, and mobile."
                      })
                    )
                  )
                ),
                i.a.createElement(
                  l.a,
                  {
                    className: p()(
                      Object(c.f)({ default: 4, md: 6, sm: 12 }),
                      "wt-offset-top-48"
                    ),
                    isLink: !0,
                    theme: "dark",
                    href: Object(u.i18nHref)(
                      "/balnature/features/software-development.html#a-ide-integrations"
                    )
                  },
                  i.a.createElement(
                    l.c,
                    null,
                    i.a.createElement("img", {
                      src: "/balnature/features/img/projects/icon_integration.svg",
                      alt: u.i18n._(u.i18n._("IntelliJ-based IDE integration"))
                    }),
                    i.a.createElement(
                      "h3",
                      { className: "wt-h3 wt-h3_theme_dark wt-offset-top-12" },
                      i.a.createElement(n.b, {
                        id: "IntelliJ-based IDE integration"
                      })
                    ),
                    i.a.createElement(
                      "p",
                      {
                        className:
                          "wt-text-2 wt-text-2_theme_dark wt-offset-top-12"
                      },
                      i.a.createElement(n.b, {
                        id:
                          "Connect IntelliJ IDEA or any other IntelliJ-based IDE to Space to get access to your projects, repositories, CI builds, and teams."
                      })
                    )
                  )
                ),
                i.a.createElement(
                  l.a,
                  {
                    className: p()(
                      Object(c.f)({ default: 4, md: 6, sm: 12 }),
                      "wt-offset-top-48"
                    ),
                    isLink: !0,
                    theme: "dark",
                    href: Object(u.i18nHref)(
                      "/balnature/features/software-development.html#a-cloud-dev-environments"
                    )
                  },
                  i.a.createElement(
                    l.c,
                    null,
                    i.a.createElement("img", {
                      src: "/balnature/features/img/projects/icon_dev_env.svg",
                      alt: u.i18n._(u.i18n._("Cloud dev environments"))
                    }),
                    i.a.createElement(
                      "h3",
                      { className: "wt-h3 wt-h3_theme_dark wt-offset-top-12" },
                      i.a.createElement(n.b, { id: "Cloud dev environments" })
                    ),
                    i.a.createElement(
                      "p",
                      {
                        className:
                          "wt-text-2 wt-text-2_theme_dark wt-offset-top-12"
                      },
                      i.a.createElement(n.b, {
                        id:
                          "Build your remote development process with ready-to-use cloud dev environments. Spin up a preconfigured workspace, connect to your IDE, and start coding in seconds."
                      })
                    )
                  )
                ),
                i.a.createElement(
                  l.a,
                  {
                    className: p()(
                      Object(c.f)({ default: 4, md: 6, sm: 12 }),
                      "wt-offset-top-48"
                    ),
                    isLink: !0,
                    theme: "dark",
                    href: Object(u.i18nHref)(
                      "/balnature/features/software-development.html#a-automation"
                    )
                  },
                  i.a.createElement(
                    l.c,
                    null,
                    i.a.createElement("img", {
                      src: "/balnature/features/img/projects/icon_automation.svg",
                      alt: u.i18n._(u.i18n._("Automation"))
                    }),
                    i.a.createElement(
                      "h3",
                      { className: "wt-h3 wt-h3_theme_dark wt-offset-top-12" },
                      i.a.createElement(n.b, { id: "Automation" })
                    ),
                    i.a.createElement(
                      "p",
                      {
                        className:
                          "wt-text-2 wt-text-2_theme_dark wt-offset-top-12"
                      },
                      i.a.createElement(n.b, {
                        id:
                          "Modern and intuitive ways to organize your continuous delivery pipelines along with a solution for a broad spectrum of automation tasks."
                      })
                    )
                  )
                ),
                i.a.createElement(
                  l.a,
                  {
                    className: p()(
                      Object(c.f)({ default: 4, md: 6, sm: 12 }),
                      "wt-offset-top-48"
                    ),
                    isLink: !0,
                    theme: "dark",
                    href: Object(u.i18nHref)(
                      "/balnature/features/software-development.html#a-package-management"
                    )
                  },
                  i.a.createElement(
                    l.c,
                    null,
                    i.a.createElement("img", {
                      src: "/balnature/features/img/projects/icon_package.svg",
                      alt: u.i18n._(u.i18n._("Package management"))
                    }),
                    i.a.createElement(
                      "h3",
                      { className: "wt-h3 wt-h3_theme_dark wt-offset-top-12" },
                      i.a.createElement(n.b, { id: "Package management" })
                    ),
                    i.a.createElement(
                      "p",
                      {
                        className:
                          "wt-text-2 wt-text-2_theme_dark wt-offset-top-12"
                      },
                      i.a.createElement(n.b, {
                        id:
                          "Create and use package repositories in your CI/CD pipelines or from your local machine. Share packages and files between products using Container, Maven, NuGet, Python, Composer, Dart, Rust, npm, and File repositories."
                      })
                    )
                  )
                )
              )
            );
          }
        );
      (f.propTypes = { isPromo: o.a.bool }), (t.a = f);
    },
    pIps: function(e, t, a) {},
    poYY: function(e, t, a) {},
    qpjT: function(e, t, a) {},
    s0Lc: function(e, t, a) {},
    sWQv: function(e, t, a) {
      "use strict";
      var n = a("Wfk0"),
        r = a("q1tI"),
        i = a.n(r),
        s = a("I3Lj"),
        o = a("TSYQ"),
        c = a.n(o),
        l = a("17x9"),
        m = a.n(l),
        d = a("HoRD"),
        p = a("ZEpC"),
        u = a("6mC5"),
        f = a("a45L"),
        g = a("jVSK"),
        h = a("CeUd"),
        v = a("9HjU"),
        b = a("YyOh"),
        w = a("VH9H"),
        E = a("Wf5J"),
        _ = (a("J8KR"), a("lX8u")),
        y = i.a.createElement(
          E.a,
          {
            videoId: "utW0-mMYUL4",
            videoImgAlt: s.i18n._(s.i18n._("Space Overview"))
          },
          function(e) {
            var t = e.onClick;
            return i.a.createElement(
              f.a,
              {
                mode: "outline",
                onClick: t,
                icon: i.a.createElement(g.a, null)
              },
              i.a.createElement(n.b, { id: "Faaliyetleimizi izle" })
            );
          }
        ),
        N = Object(h.a)(function(e) {
          var t = e.startups,
            a = void 0 !== t && t,
            r = Object(p.e)(),
            s = Object(p.f)(),
            o = Object(u.a)(),
            l = Object(v.e)(),
            m = l.data,
            f = void 0 === m ? {} : m,
            g = l.error;
          g && console.error(g);
          var h = Object(v.c)(f);
          return i.a.createElement(
            d.e,
            { className: "header-section" },
            i.a.createElement(
              d.b,
              { className: "wt-offset-top-96 wt-offset-top-lg-48" },
              i.a.createElement(_.a, {
                className: "header-section__swirl",
                src: "/balnature/img/header-section/space-swirl.webp",
                fallback: "/balnature/img/header-section/space-swirl.svg",
                alt: ""
              }),
              h
                ? i.a.createElement(
                    "div",
                    { className: Object(d.g)({ justify: "center" }) },
                    i.a.createElement(
                      "div",
                      {
                        className: c()(
                          Object(d.f)({ default: 7, lg: 9, md: 11, sm: 12 }),
                          "space-workspaces-block"
                        )
                      },
                      i.a.createElement(
                        "h2",
                        {
                          className: c()(
                            o("wt-h1"),
                            "space-workspaces-block__header"
                          )
                        },
                        i.a.createElement(n.b, { id: "Good to see you again!" })
                      ),
                      i.a.createElement(
                        "p",
                        {
                          className: c()(
                            o("wt-subtitle-2"),
                            "space-custom__title",
                            "wt-offset-top-24",
                            "space-workspaces-block__text"
                          )
                        },
                        i.a.createElement(n.b, { id: "Looking to reconnect?" })
                      ),
                      i.a.createElement(
                        w.a,
                        {
                          blur: !0,
                          className: "wt-offset-top-24 header-section__signed"
                        },
                        i.a.createElement(v.b, { workspaceSections: f })
                      ),
                      i.a.createElement(
                        "p",
                        {
                          className: c()(
                            o("wt-subtitle-2"),
                            "wt-offset-top-48",
                            "space-workspaces-block__text"
                          )
                        },
                        i.a.createElement(n.b, {
                          id: "Want to use Space with a different team?"
                        })
                      ),
                      i.a.createElement(
                        "div",
                        {
                          className: Object(d.g)({
                            alignItems: "center",
                            justify: "center"
                          })
                        },
                        i.a.createElement(
                          "div",
                          {
                            className: c()(
                              Object(d.f)("inline"),
                              "wt-offset-top-24"
                            )
                          },
                          i.a.createElement(b.a, {
                            className: "header-section__form",
                            mode: "main-header-logged-in"
                          })
                        ),
                        i.a.createElement(
                          "div",
                          {
                            className: c()(
                              Object(d.f)("inline"),
                              "wt-offset-top-24"
                            )
                          },
                          y
                        )
                      )
                    )
                  )
                : i.a.createElement(
                    "div",
                    { className: Object(d.g)() },
                    i.a.createElement(
                      "div",
                      {
                        className: Object(d.f)({ default: 12, md: 10, sm: 12 })
                      },
                      i.a.createElement(
                        "h1",
                        {
                          className: c()(
                            o("wt-hero"),
                            "space-custom__title space-custom__title_main"
                          )
                        },
                        a
                          ? i.a.createElement(n.b, {
                              id:
                                "Everything you need to develop software and collaborate in one place"
                            })
                          : i.a.createElement(n.b, {
                              id: "BalNature bir çevresel farkındalık projesidir"
                            })
                      ),
                      i.a.createElement(
                        "p",
                        {
                          className: c()(
                            o(r && !s ? "wt-text-1" : "wt-subtitle-2", {
                              hardness: "hard"
                            }),
                            "space-custom__title",
                            "wt-offset-top-24"
                          )
                        },
                        i.a.createElement(n.b, {
                          id: "Erasmus+ tarafından desteklenmektedir"
                        })
                      ),
                      i.a.createElement(
                        "div",
                        {
                          className: Object(d.g)({
                            direction: s ? "column" : "row",
                            alignItems: s ? "stretch" : "center",
                            justify: s ? "center" : "start"
                          })
                        },
                        i.a.createElement(
                          "div",
                          {
                            className: c()(
                              Object(d.f)({ default: "inline" }),
                              "wt-offset-top-24 wt-offset-top-sm-32 header-section__button"
                            )
                          },
                          i.a.createElement(b.a, {
                            className: "header-section__form",
                            mode: "main-header"
                          })
                        ),
                        i.a.createElement(
                          "div",
                          {
                            className: c()(
                              Object(d.f)({ default: "inline" }),
                              "wt-offset-top-24 wt-offset-top-sm-32 header-section__button"
                            )
                          },
                          y
                        )
                      )
                    )
                  )
            )
          );
        });
      (N.propTypes = { startups: m.a.bool }), a.d(t, "a", function() {
        return N;
      });
    },
    t28y: function(e, t, a) {
      "use strict";
      a("pNMO"), a("4Brf");
      var n = a("LK4Q"),
        r = a("FLGM"),
        i = a.n(r),
        s = a("Wfk0"),
        o = a("q1tI"),
        c = a.n(o),
        l = a("17x9"),
        m = a.n(l),
        d = a("TSYQ"),
        p = a.n(d),
        u = a("HoRD"),
        f = a("ZEpC"),
        g = a("6mC5"),
        h = a("1//O"),
        v = a("CeUd"),
        b = a("ZbKm"),
        w = (
          a("s0Lc"),
          function(e) {
            var t = e.className;
            return c.a.createElement(
              b.a,
              null,
              c.a.createElement(
                b.b,
                {
                  classToggle: "space-icon-intro_animated",
                  offset: 100,
                  duration: "100%",
                  triggerHook: "onEnter"
                },
                c.a.createElement(
                  "svg",
                  {
                    className: p()(t, "space-icon-intro"),
                    width: "36",
                    height: "36",
                    viewBox: "0 0 36 36",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  },
                  c.a.createElement("circle", {
                    cx: "5",
                    cy: "5",
                    r: "5",
                    fill: "#fff",
                    className: "space-icon-intro__left-top"
                  }),
                  c.a.createElement("circle", {
                    cx: "31",
                    cy: "5",
                    r: "5",
                    fill: "#fff",
                    className: "space-icon-intro__right-top"
                  }),
                  c.a.createElement("circle", {
                    cx: "5",
                    cy: "31",
                    r: "5",
                    fill: "#fff",
                    className: "space-icon-intro__left-bottom"
                  }),
                  c.a.createElement("circle", {
                    cx: "31",
                    cy: "31",
                    r: "5",
                    fill: "#fff",
                    className: "space-icon-intro__right-bottom"
                  }),
                  c.a.createElement("circle", {
                    cx: "18",
                    cy: "18",
                    r: "5",
                    fill: "#fff",
                    className: "space-icon-intro__center"
                  }),
                  c.a.createElement(
                    "g",
                    { className: "space-icon-intro__lines" },
                    c.a.createElement("line", {
                      x1: "5",
                      y1: "5",
                      x2: "31",
                      y2: "31",
                      stroke: "#fff",
                      strokeOpacity: ".5",
                      strokeMiterlimit: "10",
                      className: "space-icon-intro__line-1"
                    }),
                    c.a.createElement("line", {
                      x1: "31",
                      y1: "5",
                      x2: "5",
                      y2: "31",
                      stroke: "#fff",
                      strokeOpacity: ".5",
                      strokeMiterlimit: "10",
                      className: "space-icon-intro__line-2"
                    })
                  )
                )
              )
            );
          }
        ),
        E = a("SsmJ"),
        _ = a("I3Lj"),
        y = [
          {
            id: "everything-in-one-place",
            img: "/balnature/img/features-section/all-in-one.svg",
            title: _.i18n._(_.i18n._("Herzaman ve heryerde")),
            description: _.i18n._(
              _.i18n._(
                "Get a single, complete platform for the entire software development pipeline and team collaboration."
              )
            )
          },
          {
            id: "distractions-minimized",
            img: "/balnature/img/features-section/distractions.svg",
            title: _.i18n._(_.i18n._("Maximum odak")),
            description: _.i18n._(
              _.i18n._(
                "Uygulamanızı kendinizize göre optimize ederk kullanımınız rutinleştirin ve dikkatinizin dağılmasına izin vermeyin"
              )
            )
          },
          {
            id: "remote-development-toolset",
            img: "/balnature/img/features-section/environments.svg",
            title: _.i18n._(_.i18n._("Tonlarca bilgi tek hesap")),
            description: _.i18n._(
              _.i18n._(
                "Tek bir hesap oluşturun ve veri eklemeye başlayın bu hesaptan her türlü etkinliği kontrol et,düzenle,istersen paylaş ve bir birikim elde et BalNature özel bilgilerini kullanmaz ama verilerini istatistik için kullanabilir."
              )
            )
          },
          {
            id: "extensible-and-customizable",
            img: "/balnature/img/features-section/plugin.svg",
            title: _.i18n._(_.i18n._("Genişletilebilir ve özelleştirilebilir")),
            description: _.i18n._(
              _.i18n._(
                "Zengin bir HTTP API'si,Bağımlılıklar ve bir İstemci SDK'sı kullanarak tek bir platform üzerinde entegrasyonlar oluşturun ve BalNature ile iş süreçlerini otomatikleştirin."
              )
            )
          },
          {
            id: "easy-start-up",
            img: "/balnature/img/features-section/speed.svg",
            title: _.i18n._(_.i18n._("Kolay başlatma")),
            description: _.i18n._(
              _.i18n._(
                "Uygulamanızı indirin ve işlemlerinizi başlatın BalNature uygulamasını indirdikten sonra kolayca kullanıma başlayabilirsiniz.BalNature uygulamasını kullanmak birikim istemez herkese hitap eder"
              )
            )
          },
          {
            id: "native-integration-with-ide",
            img: "/balnature/img/features-section/IJ.svg",
            title: _.i18n._(_.i18n._("IDE'lerle yerel entegrasyon ")),
            description: _.i18n._(
              _.i18n._(
                "Balnature uygulamasını her türlü IDE'den geliştirip düzenleyebilirsiniz yazlnız BalNature bunları yaymanıza izin vermez ama kullanmanızada karışmaz."
              )
            )
          },
          {
            id: "scales-with-your-business",
            img: "/balnature/img/features-section/business.svg",
            title: _.i18n._(_.i18n._("Büyütebildiğince büyüt")),
            description: _.i18n._(
              _.i18n._(
                "BalNature açık kaynaklı bir yazılımdır kendiniz istediğiniz zaman GitHub üzerinden kodları indirip projeyi büyütüp paylaşabilirsiniz BalNature bir gönüllülük projesidir ve herkese ihtiyaç duyar."
              )
            )
          },
          {
            id: "cost-saving-solution",
            img: "/balnature/img/features-section/money.svg",
            title: _.i18n._(_.i18n._("Maliyet tasarrufu sağlayan çözüm")),
            description: _.i18n._(
              _.i18n._(
                "BalNature sizin verileriniz inceliyip ortalamalr hesaplar ve çıkarımlar yapıp öneriler sunar böylece atık kullanımınız konusunda bilinçlenmenize ve ona göre davranmanıza yadımcı olur ayrıca öneriler sayesinde debinizden çıkan parayı azaltmış olur."
              )
            )
          }
        ],
        N = (
          a("ZJkI"),
          function(e) {
            var t = e.img,
              a = e.title,
              n = e.description,
              r = e.className,
              i = Object(g.a)(),
              s = Object(h.a)(E.a);
            return c.a.createElement(
              "div",
              {
                className: p()(r, "features-section__feature feature"),
                ref: s
              },
              c.a.createElement("img", {
                src: t,
                alt: a,
                className: "feature__img"
              }),
              c.a.createElement(
                "h3",
                {
                  className: p()(i("wt-h3"), "wt-offset-top-12 feature__title")
                },
                a
              ),
              c.a.createElement(
                "p",
                {
                  className: p()(
                    i("wt-text-2"),
                    "wt-offset-top-24 wt-offset-top-sm-8 feature__description"
                  )
                },
                n
              )
            );
          }
        );
      N.propTypes = {
        img: m.a.string,
        title: m.a.string,
        description: m.a.string
      };
      var j = Object(v.a)(function() {
        var e = Object(g.a)(),
          t = Object(f.e)(),
          a = Object(f.f)();
        return c.a.createElement(
          u.e,
          { className: "features-section", id: "why-space", theme: "dark" },
          c.a.createElement(
            u.b,
            null,
            t &&
              !a &&
              c.a.createElement("img", {
                src: "/balnature/img/header-section/space-platform-lady.svg",
                alt: "",
                className: "features-section__girl"
              }),
            c.a.createElement(
              "div",
              { className: Object(u.g)({ size: "m", justify: "center" }) },
              c.a.createElement(
                "div",
                {
                  className: p()(
                    Object(u.f)({ default: 12 }),
                    "jb-text-center",
                    "wt-offset-top-96"
                  )
                },
                c.a.createElement(w, {
                  className: "roadmap-section__intro-icon"
                })
              ),
              c.a.createElement(
                "div",
                {
                  className: p()(
                    Object(u.f)({ default: 8, md: 10, sm: 12 }),
                    "wt-offset-top-24"
                  )
                },
                c.a.createElement(
                  "h2",
                  { className: p()(e("wt-h1"), "jb-text-center") },
                  c.a.createElement(s.b, { id: "Neden BalNature" })
                )
              )
            ),
            c.a.createElement(
              "div",
              {
                className: p()(Object(u.g)({ size: "s" }), "wt-offset-top-48")
              },
              i()(y).call(y, function(e) {
                return c.a.createElement(
                  N,
                  Object(n.a)({}, e, {
                    key: e.id,
                    className: Object(u.f)({ default: 3, md: 4, sm: 6 })
                  })
                );
              })
            )
          )
        );
      });
      a.d(t, "a", function() {
        return j;
      });
    },
    tKqw: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return l;
      });
      var n = a("q1tI"),
        r = a.n(n),
        i = a("17x9"),
        s = a.n(i),
        o = a("TSYQ"),
        c = a.n(o),
        l = (
          a("VBb6"),
          function(e) {
            var t = e.img,
              a = e.panelLeft,
              n = void 0 !== a && a;
            return r.a.createElement(
              "div",
              { className: c()("slide", { "slide_panel-left": n }) },
              r.a.createElement("img", {
                src: t.src,
                alt: t.alt,
                loading: "lazy"
              })
            );
          }
        );
      l.propTypes = {
        img: s.a.shape({ src: s.a.string, alt: s.a.string }),
        panelLeft: s.a.bool
      };
    },
    uGGg: function(e, t, a) {
      "use strict";
      var n = a("Wfk0"),
        r = a("q1tI"),
        i = a.n(r),
        s = a("TSYQ"),
        o = a.n(s),
        c = a("I3Lj"),
        l = a("HoRD"),
        m = a("ZEpC"),
        d = a("6mC5"),
        p = a("a45L"),
        u = a("p0cW"),
        f = a("CeUd"),
        g = (
          a("3YVU"),
          Object(f.a)(function() {
            var e = Object(d.a)(),
              t = Object(m.f)();
            return i.a.createElement(
              l.e,
              { className: "host-section", id: "versions" },
              i.a.createElement(
                l.b,
                null,
                i.a.createElement(
                  "div",
                  { className: Object(l.g)({ justify: "center" }) },
                  i.a.createElement(
                    "div",
                    { className: o()(Object(l.f)(12), "jb-text-center") },
                    i.a.createElement(
                      "h2",
                      { className: e("wt-h1") },
                      i.a.createElement(n.b, { id: "Kendi planını kendin seç" })
                    )
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: Object(l.g)() },
                  i.a.createElement(
                    "div",
                    {
                      className: o()(
                        Object(l.f)({ default: 6, sm: 12 }),
                        "wt-offset-top-48"
                      )
                    },
                    i.a.createElement(
                      "a",
                      {
                        className: o()(
                          Object(u.a)({
                            theme: "dark",
                            borderRadius: 8,
                            isClickable: !0
                          }),
                          "card-host",
                          "card-host__cloud",
                          "jb-vertical-flex"
                        ),
                        href: "/balnature/download/"
                      },
                      i.a.createElement(
                        "div",
                        { className: "jb-vertical-flex__grow" },
                        i.a.createElement(
                          "div",
                          { className: o()(Object(l.g)()) },
                          i.a.createElement(
                            "div",
                            {
                              className: Object(l.f)({
                                default: 8,
                                lg: 10,
                                sm: 12
                              })
                            },
                            i.a.createElement(
                              "h3",
                              { className: e(t ? "wt-h3" : "wt-h2") },
                              i.a.createElement(n.b, {
                                id: "Bireysel <0/>Kullanım",
                                components: {
                                  0: i.a.createElement("br", {
                                    className: "wt-display-sm-none"
                                  })
                                }
                              })
                            ),
                            i.a.createElement(
                              "p",
                              {
                                className: o()(
                                  e(t ? "wt-text-2" : "wt-h3", {
                                    hardness: t && "hard"
                                  }),
                                  "wt-offset-top-24 wt-offset-top-sm-12"
                                )
                              },
                              i.a.createElement(n.b, {
                                id:
                                  "Bireysel kullanım için BalNature size kolay ve işlevsel bir kullanım sunar"
                              })
                            ),
                            i.a.createElement(
                              "p",
                              {
                                className: o()(
                                  e(t ? "wt-text-2" : "wt-h3", {
                                    hardness: t && "hard"
                                  }),
                                  "wt-offset-top-0"
                                )
                              },
                              i.a.createElement(n.b, {
                                id: "SEAZER tarafından bulutta barındırılır."
                              })
                            )
                          ),
                          i.a.createElement(
                            "div",
                            {
                              className: Object(l.f)({
                                default: 7,
                                lg: 10,
                                sm: 12
                              })
                            },
                            i.a.createElement(
                              "ul",
                              {
                                className: o()(
                                  e("wt-text-2", { hardness: "hard" }),
                                  "card-host-ul",
                                  "wt-offset-top-24"
                                )
                              },
                              i.a.createElement(
                                "li",
                                null,
                                i.a.createElement(n.b, {
                                  id: "Bir dakika içinde kullanmaya başlayın."
                                })
                              ),
                              i.a.createElement(
                                "li",
                                null,
                                i.a.createElement(n.b, {
                                  id: "Hızlı ve işlevsel basit uygulamalar."
                                })
                              ),
                              i.a.createElement(
                                "li",
                                null,
                                i.a.createElement(n.b, {
                                  id: "Tüm BalNature oyunlarına tam erişim."
                                })
                              ),
                              i.a.createElement(
                                "li",
                                null,
                                i.a.createElement(n.b, {
                                  id: "Profesyonel grafik ve takip."
                                })
                              ),
                              i.a.createElement(
                                "li",
                                null,
                                i.a.createElement(n.b, {
                                  id:
                                    "7/24 müşteri hizmetleri,gelişmiş dökümantasyon ve forum  ile kolay çözümler."
                                })
                              ),
                              i.a.createElement(
                                "li",
                                null,
                                i.a.createElement(n.b, {
                                  id: "Sınırsız kullanıma ücretsiz erişim."
                                })
                              )
                            )
                          )
                        )
                      ),
                      i.a.createElement(
                        "div",
                        null,
                        i.a.createElement(
                          p.a,
                          {
                            className:
                              "wt-offset-top-24 wt-offset-top-sm-48 jb-vertical-flex__grow",
                            mode: "contrast"
                          },
                          i.a.createElement(n.b, { id: "Hemen katıl" })
                        )
                      )
                    )
                  ),
                  i.a.createElement(
                    "div",
                    {
                      className: o()(
                        Object(l.f)({ default: 6, sm: 12 }),
                        "wt-offset-top-48"
                      )
                    },
                    i.a.createElement(
                      "a",
                      {
                        className: o()(
                          Object(u.a)({
                            theme: "dark",
                            borderRadius: 8,
                            isClickable: !0
                          }),
                          "card-host",
                          "card-host__onPremises",
                          "jb-vertical-flex"
                        ),
                        href: Object(c.i18nHref)("/balnature/download/")
                      },
                      i.a.createElement(
                        "div",
                        {
                          className: o()(
                            Object(l.g)(),
                            "jb-vertical-flex__grow"
                          )
                        },
                        i.a.createElement(
                          "div",
                          {
                            className: Object(l.f)({
                              default: 8,
                              lg: 10,
                              sm: 12
                            })
                          },
                          i.a.createElement(
                            "h3",
                            { className: e(t ? "wt-h3" : "wt-h2") },
                            i.a.createElement(n.b, {
                              id: "Kurumsal <br> Kullanım ",
                              components: { 0: i.a.createElement("br", null) }
                            })
                          ),
                          i.a.createElement(
                            "p",
                            {
                              className: o()(
                                e(t ? "wt-text-2" : "wt-h3", {
                                  hardness: t && "hard"
                                }),
                                "wt-offset-top-24 wt-offset-top-sm-12"
                              )
                            },
                            i.a.createElement(n.b, {
                              id:
                                "Kurumlar,Okullar ve büyük topluluklar için özel plan."
                            })
                          ),
                          i.a.createElement(
                            "p",
                            {
                              className: o()(
                                e(t ? "wt-text-2" : "wt-h3", {
                                  hardness: t && "hard"
                                }),
                                "wt-offset-top-0"
                              )
                            },
                            i.a.createElement(n.b, {
                              id: "Kuruma ait sunucularda<0/>barındırılır.",
                              components: { 0: i.a.createElement("br", null) }
                            })
                          )
                        ),
                        i.a.createElement(
                          "div",
                          { className: Object(l.f)(12) },
                          i.a.createElement(
                            "div",
                            { className: o()(Object(l.g)(), "width-100") },
                            i.a.createElement(
                              "div",
                              {
                                className: Object(l.f)({
                                  default: 7,
                                  lg: 10,
                                  sm: 12
                                })
                              },
                              i.a.createElement(
                                "ul",
                                {
                                  className: o()(
                                    e("wt-text-2", { hardness: "hard" }),
                                    "card-host-ul",
                                    "wt-offset-top-24"
                                  )
                                },
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(n.b, {
                                    id: "Kendi datanızı kendiniz koruyun."
                                  })
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(n.b, {
                                    id:
                                      "Kullanıcılarınızın tüm verilerine tam erişme imkanı."
                                  })
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(n.b, {
                                    id: "Barındırma hesabınız kadar veri tutun."
                                  })
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(n.b, {
                                    id:
                                      "Kurumunuza ait özel istatistikler,öneriler ve kuruma ait yapay zeka konfigirasyonu."
                                  })
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(n.b, {
                                    id:
                                      "Kurumsal yönetim paneli ve uygulamaları."
                                  })
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(n.b, {
                                    id:
                                      "Milli Eğitime bağlı tüm kurumlarda ücretsiz."
                                  })
                                )
                              )
                            )
                          )
                        )
                      ),
                      i.a.createElement(
                        "div",
                        null,
                        i.a.createElement(
                          p.a,
                          {
                            className:
                              "wt-offset-top-24 wt-offset-top-sm-48 jb-vertical-flex__grow",
                            mode: "outline"
                          },
                          i.a.createElement(n.b, { id: "Keşfet" })
                        )
                      )
                    )
                  )
                )
              )
            );
          })
        );
      a.d(t, "a", function() {
        return g;
      });
    },
    vcNZ: function(e, t, a) {},
    wDSE: function(e, t, a) {},
    xvql: function(e, t, a) {
      e.exports =
        a.p +
        "common-ui/components/space-feedback/img/vinogradova-avatar.c410be4d24099df636473077adecde0d.png";
    },
    ytUy: function(e, t, a) {}
  },
  [[687, 0]]
]);
//# sourceMappingURL=index.entry.9336a1cb240339f4e007.js.map
