(window.webpackJsonp = window.webpackJsonp || []).push([
  [584],
  {
    582: function(e, t, a) {
      a("ctTR"), (e.exports = a("88xq"));
    },
    "88xq": function(e, t, a) {
      "use strict";
      a.r(t);
      a("sMBO");
      var n = a("Wfk0"),
        l = a("q1tI"),
        r = a.n(l),
        o = a("Ty5D"),
        s = a("pF6c"),
        i = a.n(s),
        c = a("nB0T"),
        m = a("fnmH"),
        d = a("uVzL"),
        p = a("xVTM"),
        u = a("qD4r"),
        f = a("z7j/"),
        h = a("ZEpC"),
        w = a("kJEl"),
        E = a("I3Lj"),
        b = a("HoRD"),
        S = a("nwUI"),
        k = a("p/hv"),
        g = a("yOes"),
        j = {
          mac: { os: "mac", title: "macOS x64" },
          linux: { os: "linux", title: "Linux x64" },
          windows: { os: "windows", title: "Windows" },
        },
        v = function() {
          var e = Object(f.useMedia)(h.a.md, !1),
            t = Object(d.b)().releaseInfo;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "p",
              { className: "wt-offset-top-24 wt-text-1" },
              r.a.createElement(n.b, {
                id:
                  "<0>Tamamen ücretsiz</0>, uygulama içi satın alım yok. ",
                components: { 0: r.a.createElement("strong", null) },
              })
            ),
            r.a.createElement(
              "div",
              { className: "wt-offset-top-24" },
              r.a.createElement(
                k.a,
                {
                  href: Object(E.i18nHref)(
                    "/resharper/download/download-thanks.html?platform=windows&code=RSU"
                  ),
                },
                r.a.createElement(n.b, { id: "Hemen İndir" })
              )
            ),
            r.a.createElement(
              b.d,
              null,
              r.a.createElement(
                b.a,
                {
                  span: e ? 12 : 8,
                  className: "wt-offset-top-12 wt-text-3 wt-text-3_flow",
                },
                r.a.createElement(
                  "p",
                  null,
                  r.a.createElement(n.b, {
                    id:
                      "Lütfen <0>Bal Nature Yükleyicisi</0>'nde eksik olan paketlerinizi seçin ve seçili paketleri kaldırmayınız.",
                    components: {
                      0: r.a.createElement("a", {
                        className: "wt-link",
                        href: Object(E.i18nHref)("/dotnet"),
                      }),
                    },
                  })
                ),
                r.a.createElement(
                  "p",
                  null,
                  r.a.createElement(n.b, {
                    id:
                      "BalNature 2023.2 yalnızca Anroid , İOS , Linux Karnel ,Ubuntu 20+ ve Windows 7+ destekler.",
                    values: { 0: t.version },
                  })
                ),
                r.a.createElement(
                  "p",
                  null,
                  r.a.createElement(n.b, {
                    id:
                      "Eğer nasıl kuracağınızı bilmiyorsanız bakınız <0>BAlNature kullanım talimatları</0>.",
                    components: {
                      0: r.a.createElement("a", {
                        className: "wt-link",
                        href:
                          "http://resharper-support.jetbrains.com/hc/en-us/articles/207243185",
                      }),
                    },
                  })
                )
              )
            )
          );
        },
        O = function() {
          var e = Object(f.useMedia)(h.a.md, !1),
            t = Object(d.b)().releaseInfo;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "p",
              { className: "wt-offset-top-24 wt-text-1" },
              r.a.createElement(n.b, {
                id: "<0>Tamamen ücretsiz</0>, uygulama içi satın alım yok.",
                components: { 0: r.a.createElement("strong", null) },
              })
            ),
            r.a.createElement(
              "div",
              { className: "wt-offset-top-24" },
              r.a.createElement(
                k.a,
                {
                  href: Object(E.i18nHref)(
                    "/resharper/download/download-thanks.html?platform=windowsWeb"
                  ),
                },
                r.a.createElement(n.b, { id: "Hemen İndir" })
              )
            ),
            r.a.createElement(
              b.d,
              null,
              r.a.createElement(
                b.a,
                {
                  span: e ? 12 : 8,
                  className: "wt-offset-top-12 wt-text-3 wt-text-3_flow",
                },
                r.a.createElement(
                  "p",
                  null,
                  r.a.createElement(n.b, {
                    id:
                      "Kurulumu tamamlayabilmek için aktif internet bağlantınız olmalıdır.",
                  })
                ),
                r.a.createElement(
                  "p",
                  null,
                  r.a.createElement(n.b, {
                    id:
                      "BalNature 2023.2 yalnızca Anroid , İOS , Linux Karnel ,Ubuntu 20+ ve Windows 7+ destekler.",
                    values: { 0: t.version },
                  })
                ),
                r.a.createElement(
                  "p",
                  null,
                  r.a.createElement(n.b, {
                    id:
                      "Eğer nasıl kuracağınızı bilmiyorsanız bakınız <0>BAlNature kullanım talimatları</0>.",
                    components: {
                      0: r.a.createElement("a", {
                        className: "wt-link",
                        href:
                          "http://resharper-support.jetbrains.com/hc/en-us/articles/207243185",
                      }),
                    },
                  }),
                  "."
                )
              )
            )
          );
        },
        x = function() {
          var e = Object(f.useMedia)(h.a.md, !1);
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              k.a,
              {
                className: "wt-offset-top-24",
                href: "http://www.nuget.org/packages/JetBrains.BalNature.SDK",
              },
              r.a.createElement(n.b, { id: "BalNature SDK" })
            ),
            r.a.createElement(
              b.d,
              null,
              r.a.createElement(
                b.a,
                { span: e ? 12 : 8, className: "wt-offset-top-12 wt-text-3" },
                r.a.createElement(n.b, {
                  id:
                    "<0>BalNature Software Development Kit</0> mevcut BalNature uygulamalarının kodlarını zip olarak indirir Visual Studio 2019 ve 2022 ,Android Studio ve Visual Studio Code desteklenmektedir.Daha fazlası için <1>GitHub Depolarımıza </1> bakabilirsiniz",
                  components: {
                    0: r.a.createElement("strong", null),
                    1: r.a.createElement("a", {
                      className: "wt-link",
                      href: "//www.jetbrains.com/resharper/devguide/",
                    }),
                  },
                })
              )
            )
          );
        },
        y = function() {
          var e = Object(g.c)(j),
            t = Object(f.useMedia)(h.a.md, !1);
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "wt-offset-top-24" },
              r.a.createElement(S.d, {
                href: Object(E.i18nHref)(
                  "/resharper/download/download-thanks.html?platform=".concat(
                    e.os,
                    "&code=RSCLT"
                  )
                ),
                title: E.i18n._(E.i18n._("Hemen İndir")),
                dropdownTitle: e.title,
                options: [
                  {
                    title: "Windows",
                    href: Object(E.i18nHref)(
                      "/resharper/download/download-thanks.html?platform=windows&code=RSCLT"
                    ),
                  },
                  {
                    title: "macOS x64",
                    href: Object(E.i18nHref)(
                      "/resharper/download/download-thanks.html?platform=mac&code=RSCLT"
                    ),
                  },
                  {
                    title: "Linux x64",
                    href: Object(E.i18nHref)(
                      "/resharper/download/download-thanks.html?platform=linux&code=RSCLT"
                    ),
                  },
                ],
              })
            ),
            r.a.createElement(
              b.d,
              null,
              r.a.createElement(
                b.a,
                {
                  span: t ? 12 : 8,
                  className: "wt-offset-top-12 wt-text-3 wt-text-3_flow",
                },
                r.a.createElement(
                  "p",
                  null,
                  r.a.createElement(n.b, {
                    id:
                      "<0>BalNature Command Line Tools</0> (CLT) ile Linux'ta Terminal üzerinden ve Windows ta CMD üzerinden tüm projelerimizi indirebilirsiniz.",
                    components: { 0: r.a.createElement("strong", null) },
                  })
                ),
                r.a.createElement(
                  "p",
                  null,
                  r.a.createElement(n.b, {
                    id:
                      "BalNature Command Line Tools tamamen ücretsizdir.",
                    components: { 0: r.a.createElement("strong", null) },
                  })
                ),
                r.a.createElement(
                  "p",
                  null,
                  r.a.createElement(n.b, {
                    id:
                      "Daha fazllasını öğrenmek için lütfen bakınız <0>BalNature Command Line Tools</0>.",
                    components: {
                      0: r.a.createElement("a", {
                        className: "wt-link",
                        href:
                          "https://www.jetbrains.com/help/resharper/BalNature_Command_Line_Tools.html",
                      }),
                    },
                  })
                ),
                r.a.createElement(
                  "p",
                  null,
                  r.a.createElement(n.b, {
                    id:
                      "Not: CLT yi indirdiğinizde size xt dosyası iner ve indire basınca kabul etmiş olursunuz <0>BalNature Command Line Tools License Agreement</0>.",
                    components: {
                      0: r.a.createElement("a", {
                        className: "wt-link",
                        href: Object(E.i18nHref)(
                          "/legal/docs/resharper/resharper_clt_license.html"
                        ),
                      }),
                    },
                  })
                )
              )
            )
          );
        },
        R = {
          installer: {
            label: E.i18n._(E.i18n._("Web indirici")),
            url: "web-installer",
          },
          ultimate: {
            label: E.i18n._(E.i18n._("Çevrimdışı indirici")),
            url: "offline-installer",
          },
          sdk: {
            label: E.i18n._(E.i18n._("BalNature SDK")),
            url: "resharper-sdk",
          },
          clt: {
            label: E.i18n._(E.i18n._("Komut satırı indiricisi")),
            url: "commandline",
          },
        },
        N = function() {
          var e = Object(f.useMedia)(h.a.sm, !1),
            t = Object(d.b)().productCode;
          return r.a.createElement(
            u.a,
            { size: e ? "m" : "s", mode: "nude" },
            r.a.createElement(
              u.b,
              null,
              r.a.createElement(
                "a",
                {
                  className: "wt-link",
                  href: Object(E.i18nHref)(
                    "/dotnet/download/system-requirements/#section-resharper"
                  ),
                },
                r.a.createElement(n.b, { id: "Sistem Gereksimleri" })
              )
            ),
            r.a.createElement(
              u.b,
              null,
              r.a.createElement(
                "a",
                {
                  className: "wt-link wt-link_external",
                  href:
                    "https://resharper-support.jetbrains.com/hc/en-us/articles/207243185",
                },
                r.a.createElement(n.b, { id: "Sürüm Notları" })
              )
            ),
            r.a.createElement(
              u.b,
              null,
              r.a.createElement(
                "a",
                {
                  className: "wt-link wt-link_external",
                  href:
                    "//www.jetbrains.com/help/resharper/Installation_Guide.html",
                },
                r.a.createElement(n.b, { id: "İndirme Rehberi" })
              )
            ),
            r.a.createElement(
              u.b,
              null,
              r.a.createElement(
                "a",
                {
                  className: "wt-link wt-link_external",
                  href:
                    "//www.jetbrains.com/help/resharper/Speeding_Up_BalNature.html",
                },
                r.a.createElement(n.b, { id: "Performnas Bilgileri" })
              )
            ),
            r.a.createElement(
              u.b,
              null,
              r.a.createElement(
                "a",
                {
                  className: "wt-link",
                  href: Object(E.i18nHref)("/resharper/download/other.html"),
                },
                r.a.createElement(n.b, { id: "Diğer Sürümler" })
              )
            ),
            r.a.createElement(
              u.b,
              null,
              r.a.createElement(
                "a",
                {
                  className: "wt-link",
                  href: Object(E.i18nHref)(
                    "/legal/third-party-software/?product=".concat(
                      t.toLowerCase()
                    )
                  ),
                },
                r.a.createElement(n.b, { id: "Ek Yazılımlar" })
              )
            )
          );
        },
        _ = function() {
          var e = Object(d.b)().name;
          return r.a.createElement(p.a, {
            name: e,
            className: "wt-offset-top-48",
          });
        };
      Object(c.default)(
        r.a.createElement(function() {
          return r.a.createElement(
            m.c,
            {
              productCode: i.a.resharper,
              links: r.a.createElement(N, null),
              banners: r.a.createElement(_, null),
            },
            r.a.createElement(
              m.i,
              { editions: R },
              r.a.createElement(
                w.c,
                null,
                r.a.createElement(
                  w.b,
                  { path: "/section=".concat(R.installer.url) },
                  r.a.createElement(O, null)
                ),
                r.a.createElement(
                  w.b,
                  { path: "/section=".concat(R.ultimate.url) },
                  r.a.createElement(v, null)
                ),
                r.a.createElement(
                  w.b,
                  { path: "/section=".concat(R.sdk.url) },
                  r.a.createElement(x, null)
                ),
                r.a.createElement(
                  w.b,
                  { path: "/section=".concat(R.clt.url) },
                  r.a.createElement(y, null)
                ),
                r.a.createElement(o.a, {
                  to: "/section=".concat(R.installer.url),
                })
              )
            )
          );
        }, null),
        "download-block"
      );
    },
  },
  [[582, 0]],
]);
//# sourceMappingURL=index.entry.a1bcb4833243238dcd44.js.map
