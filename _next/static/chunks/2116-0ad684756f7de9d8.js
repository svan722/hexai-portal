(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2116],
  {
    84769: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return h;
        },
      });
      var s = t(85893),
        n = t(67294);
      t(65396);
      var o = t(41664),
        l = t.n(o),
        r = t(5152);
      t.n(r)()(() => t.e(8130).then(t.bind(t, 98130)), {
        loadableGenerated: { webpack: () => [98130] },
        ssr: !1,
      });
      var c = () => {
        let [e, a] = (0, n.useState)(!1),
          [t, o] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          a("true" === localStorage.getItem("darkModeIs"));
        }, []);
        let r = (e) => {
            e.preventDefault(),
              window.open(
                "https://app.uniswap.org/explore/tokens/ethereum/0xtttttttttttttttttttttttttttttt",
                "_blank"
              );
          },
          c = (e) => {
            e.preventDefault(),
              window.open("https://hexai-dapp.vercel.app/", "_blank");
          };
        return (0, s.jsxs)("header", {
          className: "header  sticky-top bg-"
            .concat(!0 == e ? "white" : "black", " ")
            .concat(t ? "expanded" : "collapsed"),
          children: [
            (0, s.jsx)("div", {
              className: "container-fluid px-0 h-100",
              children: (0, s.jsxs)("nav", {
                className:
                  "navbar h-100 navbar-expand-lg navbar-white mx-lg-5 px-lg-0 px-3 py-4 align-items-start",
                children: [
                  (0, s.jsx)(l(), {
                    className: "navbar-brand",
                    href: "/",
                    children:
                      !0 == e
                        ? (0, s.jsx)("img", {
                            src: "".concat(
                              "logoNoStretch.png"
                            ),
                            alt: "logo",
                            className: "logo",
                          })
                        : (0, s.jsx)("img", {
                            src: "".concat(
                              "logoNoStretch.png"
                            ),
                            alt: "logo",
                            className: "logo",
                          }),
                  }),
                  (0, s.jsxs)("button", {
                    className: "navbar-toggler collapsed border-0 px-0",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    onClick: () => {
                      o(!t);
                    },
                    children: [
                      (0, s.jsx)("span", { className: "icon-bar" }),
                      (0, s.jsx)("span", { className: "icon-bar" }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "collapse navbar-collapse justify-content-end",
                    id: "navbarSupportedContent",
                    children: [
                      (0, s.jsxs)("ul", {
                        className:
                          "align-items-center d-flex gap-4 gap-lg-3 justify-content-center navbar-center navbar-nav w-100 mt-5 mt-lg-0",
                        "data-toggle": "collapse",
                        "data-target": "#navbar-collapse-x",
                        children: [
                          (0, s.jsx)("li", {
                            className: "nav-item",
                            children: (0, s.jsx)(l(), {
                              className:
                                "nav-link header-nav-link text-".concat(
                                  !0 == e ? "black" : "white"
                                ),
                              href: "/about",
                              children: "About",
                            }),
                          }),
                          (0, s.jsxs)("li", {
                            className: "nav-item dropdown",
                            children: [
                              (0, s.jsx)(l(), {
                                className:
                                  "nav-link header-nav-link text-".concat(
                                    !0 == e ? "black" : "white",
                                    " dropdown-toggle"
                                  ),
                                href: "#",
                                id: "navbarDropdown",
                                role: "button",
                                "data-bs-toggle": "dropdown",
                                "aria-expanded": "false",
                                children: "Learn",
                              }),
                              (0, s.jsxs)("ul", {
                                className:
                                  "gap-4 gap-lg-3 dropdown-menu bg-".concat(
                                    !0 == e ? "white" : "black"
                                  ),
                                "aria-labelledby": "navbarDropdown",
                                children: [
                                  (0, s.jsx)("li", {
                                    children: (0, s.jsx)(l(), {
                                      className: ""
                                        .concat(
                                          !0 == e
                                            ? "lightMode-item"
                                            : "darkMode-item",
                                          " dropdown-item text-center header-nav-link text-"
                                        )
                                        .concat(!0 == e ? "black" : "white"),
                                      href: "/#roadmap",
                                      scroll: !0,
                                      children: "Roadmap",
                                    }),
                                  }),
                                  (0, s.jsx)("li", {
                                    children: (0, s.jsx)(l(), {
                                      className: ""
                                        .concat(
                                          !0 == e
                                            ? "lightMode-item"
                                            : "darkMode-item",
                                          " dropdown-item text-center header-nav-link text-"
                                        )
                                        .concat(!0 == e ? "black" : "white"),
                                      href: "/learn-more",
                                      scroll: !0,
                                      children: "Learn More",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)("li", {
                            className: "nav-item",
                            children: (0, s.jsx)(l(), {
                              className:
                                "nav-link header-nav-link text-".concat(
                                  !0 == e ? "black" : "white"
                                ),
                              href: "/solutions",
                              children: "Solutions",
                            }),
                          }),
                          (0, s.jsx)("li", {
                            className: "nav-item",
                            children: (0, s.jsx)(l(), {
                              className:
                                "nav-link header-nav-link text-".concat(
                                  !0 == e ? "black" : "white"
                                ),
                              href: "/hardware",
                              children: "Hardware",
                            }),
                          })
                        ],
                      }),
                      (0, s.jsxs)("form", {
                        className:
                          "d-flex align-items-center text-center justify-content-center float-right flex-lg-row flex-column gap-3",
                        children: [
                          (0, s.jsx)("button", {
                            onClick: (e) => c(e),
                            className: "text-".concat(
                              !0 == e ? "white" : "black",
                              " launch-dapp-btn orbitron-txt text-white"
                            ),
                            children: "Launch DApp",
                          }),
                          (0, s.jsx)("button", {
                            onClick: (e) => r(e),
                            className: "text-".concat(
                              !0 == e ? "white" : "black",
                              " custom-btn orbitron-txt"
                            ),
                            children: "Buy $HEXAI",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsx)("div", { className: "top-left-shadow z-n1" }),
            (0, s.jsx)("div", { className: "bottom-right-shadow z-n1" }),
          ],
        });
      };
      t(26663);
      var i = () => {
          let [e, a] = (0, n.useState)(!1),
            t = () => {
              let e = Date.now();
              window.open(
                "https://dextools.io/app/en/ether/pair-explorer/0xppppppppppppppppppppp?t=".concat(
                  e
                ),
                "_blank",
                "noopener,noreferrer"
              );
            };
          return (
            (0, n.useEffect)(() => {
              a("true" === localStorage.getItem("darkMode"));
              let e = (e) => {
                a(e.detail);
              };
              return (
                window.addEventListener("darkModeChange", e),
                () => {
                  window.removeEventListener("darkModeChange", e);
                }
              );
            }, []),
            (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)("footer", {
                className: "footer pt-5 position-relative bg-"
                  .concat(!0 == e ? "white" : "black", " text-")
                  .concat(!0 == e ? "black" : "white"),
                children: (0, s.jsxs)("div", {
                  className: "container-fluid px-2 px-lg-5",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "row m-0",
                      children: [
                        (0, s.jsx)("div", {
                          className: "col-lg-8 p-lg-0",
                          children: (0, s.jsxs)("div", {
                            className: "row h-100",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "col-lg-4 d-flex align-items-start text-left flex-column",
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "footer-txt metrophobic-txt",
                                    children: "Follow Us",
                                  }),
                                  (0, s.jsxs)("span", {
                                    className: "d-flex justify-content-between",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className: "px-2 cursor-pointer",
                                        children: (0, s.jsx)(l(), {
                                          href: "https://x.com/",
                                          target: "_blank",
                                          children: (0, s.jsx)("img", {
                                            src: "".concat(
                                              "https://hashai.s3.eu-west-2.amazonaws.com/storage/footer/twiter.svg"
                                            ),
                                            alt: "logo",
                                          }),
                                        }),
                                      }),
                                      (0, s.jsx)("span", {
                                        className: "px-2 cursor-pointer",
                                        children: (0, s.jsx)("img", {
                                          src: "".concat(
                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/footer/DEXTools footer.svg"
                                          ),
                                          alt: "logo",
                                          onClick: () => t(),
                                        }),
                                      }),
                                    ],
                                  })
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "col-lg-4 d-flex justify-content-start align-items-start text-left flex-column",
                                children: (0, s.jsxs)("div", {
                                  className: "row w-100 mt-md-2 mt-sm-2",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: "col-6",
                                      children: [
                                        (0, s.jsx)("span", {
                                          className:
                                            "footer-txt metrophobic-txt footerHeading",
                                          children: "Explore",
                                        }),
                                        (0, s.jsx)("span", {
                                          children: (0, s.jsx)(l(), {
                                            className:
                                              "nav-link footer-nav-link metrophobic-txt",
                                            href: "/",
                                            children: "Home",
                                          }),
                                        }),
                                        (0, s.jsx)("span", {
                                          children: (0, s.jsx)(l(), {
                                            className:
                                              "nav-link footer-nav-link metrophobic-txt",
                                            href: "/about",
                                            children: "About",
                                          }),
                                        }),
                                        (0, s.jsx)("span", {
                                          children: (0, s.jsx)(l(), {
                                            className:
                                              "nav-link footer-nav-link metrophobic-txt",
                                            href: "/hardware",
                                            children: "Hardware",
                                          }),
                                        }),
                                        (0, s.jsx)("span", {
                                          children: (0, s.jsx)(l(), {
                                            className:
                                              "nav-link footer-nav-link metrophobic-txt",
                                            href: "/#roadmap",
                                            children: "Roadmap",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: "col-6",
                                      children: [
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "col-lg-4 d-flex justify-content-start align-items-start text-left flex-column",
                                children: (0, s.jsxs)("div", {
                                  className: "row w-100",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: "col-6",
                                      children: [
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: "col-6",
                                      children: [
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "col-lg-4 d-flex justify-content-around justify-content-lg-end mt-5 mt-lg-0 mt-xl-0",
                          children: (0, s.jsxs)("div", {
                            className:
                              "row py-5 px-lg-5 px-md-3 px-3 footer-image-right footer-text-right d-flex justify-content-evenly align-items-start h-100 w-100 text-".concat(
                                !0 == e ? "black" : "white"
                              ),
                            children: [
                              (0, s.jsx)("div", {
                                className: "col-lg-4 m-0 p-0",
                              }),
                              (0, s.jsxs)("div", {
                                className: "col-lg-8 m-0 p-lg-0 ps-5",
                                children: [
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "copyright py-4 mt-3 text-center orbitron-txt",
                      children: [
                        (0, s.jsx)("p", {
                          className: "contract-address",
                          children:
                            "Contract address: 0xttttttttttttt",
                        }),
                        (0, s.jsxs)("p", {
                          children: [
                            "\xa9",
                            " ",
                            (0, s.jsx)(l(), {
                              className: "text-decoration-none color-purple",
                              href: "/",
                              children: "HexAI.",
                            }),
                            " ",
                            "2024, All rights reserved.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        h = (e) =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(c, {}),
              (0, s.jsx)("div", { children: e.children }),
              (0, s.jsx)(i, {}),
            ],
          });
    },
    93962: function (e, a, t) {
      "use strict";
      var s = t(85893);
      t(67294);
      var n = t(9008),
        o = t.n(n),
        l = t(4298),
        r = t.n(l);
      a.Z = (e) =>
        (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(o(), {
              children: [
                (0, s.jsx)("title", { children: null == e ? void 0 : e.title }),
                (0, s.jsx)("meta", {
                  name: "title",
                  content: null == e ? void 0 : e.metaTitle,
                }),
                (0, s.jsx)("meta", {
                  name: "description",
                  content: null == e ? void 0 : e.metaDescription,
                }),
                (0, s.jsx)("link", {
                  href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
                  rel: "stylesheet",
                  integrity:
                    "sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM",
                  crossOrigin: "anonymous",
                }),
              ],
            }),
            (0, s.jsx)(r(), {
              src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
              integrity:
                "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz",
              crossOrigin: "anonymous",
            }),
          ],
        });
    },
    26663: function () {},
    65396: function () {},
    36501: function () {},
  },
]);
