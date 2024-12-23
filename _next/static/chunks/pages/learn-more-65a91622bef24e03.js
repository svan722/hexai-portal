(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9855],
  {
    3955: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/learn-more",
        function () {
          return t(92899);
        },
      ]);
    },
    92899: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          __N_SSP: function () {
            return j;
          },
          default: function () {
            return v;
          },
        });
      var a = t(85893),
        n = t(67294),
        i = t(84769),
        r = t(93962);
      t(36501), t(47813);
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var o =
        function (e, s) {
          return (o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, s) {
                e.__proto__ = s;
              }) ||
            function (e, s) {
              for (var t in s) s.hasOwnProperty(t) && (e[t] = s[t]);
            })(e, s);
        };
      function l(e) {
        var s,
          t,
          a,
          i,
          r,
          o,
          l,
          c = e.className,
          d = e.counterClockwise,
          m = e.dashRatio,
          h = e.pathRadius,
          x = e.strokeWidth,
          p = e.style;
        return (0, n.createElement)("path", {
          className: c,
          style: Object.assign(
            {},
            p,
            ((t = (s = { pathRadius: h, dashRatio: m, counterClockwise: d })
              .counterClockwise),
            (i = (1 - s.dashRatio) * (a = 2 * Math.PI * s.pathRadius)),
            {
              strokeDasharray: a + "px " + a + "px",
              strokeDashoffset: (t ? -i : i) + "px",
            })
          ),
          d:
            "\n      M 50,50\n      m 0,-" +
            (o = (r = { pathRadius: h, counterClockwise: d }).pathRadius) +
            "\n      a " +
            o +
            "," +
            o +
            " " +
            (l = r.counterClockwise ? 1 : 0) +
            " 1 1 0," +
            2 * o +
            "\n      a " +
            o +
            "," +
            o +
            " " +
            l +
            " 1 1 0,-" +
            2 * o +
            "\n    ",
          strokeWidth: x,
          fillOpacity: 0,
        });
      }
      var c = (function (e) {
        function s() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          !(function (e, s) {
            function t() {
              this.constructor = e;
            }
            o(e, s),
              (e.prototype =
                null === s
                  ? Object.create(s)
                  : ((t.prototype = s.prototype), new t()));
          })(s, e),
          (s.prototype.getBackgroundPadding = function () {
            return this.props.background ? this.props.backgroundPadding : 0;
          }),
          (s.prototype.getPathRadius = function () {
            return (
              50 - this.props.strokeWidth / 2 - this.getBackgroundPadding()
            );
          }),
          (s.prototype.getPathRatio = function () {
            var e = this.props,
              s = e.value,
              t = e.minValue,
              a = e.maxValue;
            return (Math.min(Math.max(s, t), a) - t) / (a - t);
          }),
          (s.prototype.render = function () {
            var e = this.props,
              s = e.circleRatio,
              t = e.className,
              a = e.classes,
              i = e.counterClockwise,
              r = e.styles,
              o = e.strokeWidth,
              c = e.text,
              d = this.getPathRadius(),
              m = this.getPathRatio();
            return (0, n.createElement)(
              "svg",
              {
                className: a.root + " " + t,
                style: r.root,
                viewBox: "0 0 100 100",
                "data-test-id": "CircularProgressbar",
              },
              this.props.background
                ? (0, n.createElement)("circle", {
                    className: a.background,
                    style: r.background,
                    cx: 50,
                    cy: 50,
                    r: 50,
                  })
                : null,
              (0, n.createElement)(l, {
                className: a.trail,
                counterClockwise: i,
                dashRatio: s,
                pathRadius: d,
                strokeWidth: o,
                style: r.trail,
              }),
              (0, n.createElement)(l, {
                className: a.path,
                counterClockwise: i,
                dashRatio: m * s,
                pathRadius: d,
                strokeWidth: o,
                style: r.path,
              }),
              c
                ? (0, n.createElement)(
                    "text",
                    { className: a.text, style: r.text, x: 50, y: 50 },
                    c
                  )
                : null
            );
          }),
          (s.defaultProps = {
            background: !1,
            backgroundPadding: 0,
            circleRatio: 1,
            classes: {
              root: "CircularProgressbar",
              trail: "CircularProgressbar-trail",
              path: "CircularProgressbar-path",
              text: "CircularProgressbar-text",
              background: "CircularProgressbar-background",
            },
            counterClockwise: !1,
            className: "",
            maxValue: 100,
            minValue: 0,
            strokeWidth: 8,
            styles: { root: {}, trail: {}, path: {}, text: {}, background: {} },
            text: "",
          }),
          s
        );
      })(n.Component);
      function d(e) {
        return (
          Object.keys(e).forEach(function (s) {
            null == e[s] && delete e[s];
          }),
          e
        );
      }
      t(40682);
      var m = t(2261);
      t(65299), t(9e4), t(65083);
      var h = t(2711),
        x = t.n(h);
      t(37611);
      var p = t(41664),
        u = t.n(p),
        g = t(99304),
        j = !0,
        v = (e) => {
          var s, o, l, h, p, j, v, b, y, f, w, N, k, A, C, P, _, z, I, S;
          let { fetchData: E } = e,
            [H, R] = (0, n.useState)(!1),
            [D, B] = (0, n.useState)(0),
            [W, O] = (0, n.useState)([]),
            M = (0, n.useRef)(null),
            T = async () => {
              {
                let e = new (
                  await t.e(840).then(t.t.bind(t, 50840, 23))
                ).default(M.current);
                return (
                  e.on("swipeleft", () => {
                    B((e) => (e < G.length - 1 ? e + 1 : 0));
                  }),
                  e.on("swiperight", () => {
                    B((e) => (0 === e ? G.length - 1 : e - 1));
                  }),
                  () => {
                    e.destroy();
                  }
                );
              }
            };
          function F(e) {
            return "number" == typeof e
              ? (e / 1e3).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : e;
          }
          (0, n.useEffect)(() => {
            E && O(E["30369"]),
              x().init({ duration: 600 }),
              R("true" === localStorage.getItem("darkMode"));
            let e = (e) => {
              R(e.detail);
            };
            window.addEventListener("darkModeChange", e);
            let s = "https://hashai.co.uk/api";
            return (
              window.location.hostname.includes("www") &&
                !s.includes("www") &&
                (s = "https://hashai.co.uk/api".replace(
                  /^https:\/\//,
                  "https://www."
                )),
              T(),
              () => {
                window.removeEventListener("darkModeChange", e);
              }
            );
          }, []);
          let V =
              (v = null == W ? void 0 : W.total_supply) > 0
                ? (v / 1e9).toFixed(2) + "B"
                : 0,
            L = F(null == W ? void 0 : W.circulating_supply),
            $ = F(
              null == W
                ? void 0
                : null === (o = W.quote) || void 0 === o
                ? void 0
                : null === (s = o.USD) || void 0 === s
                ? void 0
                : s.volume_24h
            ),
            q =
              null == W
                ? void 0
                : null === (h = W.quote) || void 0 === h
                ? void 0
                : null === (l = h.USD) || void 0 === l
                ? void 0
                : l.volume_change_24h,
            U =
              "number" !=
              typeof (b =
                null == W
                  ? void 0
                  : null === (j = W.quote) || void 0 === j
                  ? void 0
                  : null === (p = j.USD) || void 0 === p
                  ? void 0
                  : p.market_cap)
                ? b
                : "".concat((b / 1e6).toFixed(2), "M"),
            G = [
              {
                month: "Launched",
                title: "Branding & Web Development",
                desc1: "Futuristic Vision",
                desc2: "New Website",
                desc3: "Revamped Branding",
                mainDesc:
                  "We have launched our brand-new modern website that showcases our new branding, shares our new vision and values, and of course, empowers you to use our world-leading solutions. Plus, we have launched new social media channels so you can engage with the community like never before!",
              },
              {
                month: "Year 1",
                title: "Growth & Partnerships",
                desc1: "Diversifying Services",
                desc2: "Scaling Mining Power",
                desc3: "Strategic Partnerships",
                mainDesc:
                  "Through the launch of new services and solutions such as ASK HASH and Node Rentals, we will be empowering more of our community than ever before! By growing our infrastructure and creating more partnerships, we will have the means to power and supply more of your projects, and more mining!",
              },
              {
                month: "Year 2",
                title: "Infrastructure & Market Access",
                desc1: "Expanding Market Accessibility",
                desc2: "Infrastructure Investment",
                desc3: "Scaling Up",
                mainDesc:
                  "Hex AI aims to acquire and expand our dedicated mining facility for long-term scalability. We will also look to list on additional reputable exchanges, including international ones, to increase liquidity and allow $HEXAI to be more accessible. By scaling up our technology and infrastructure we are ensuring continual evolution of Hex AI.",
              },
              {
                month: "Year 3",
                title: "Global Expansion & Sustainability",
                desc1: "Expand Our Worldwide Team",
                desc2: "Operational Expansion",
                desc3: "Upkeep Sustainability",
                mainDesc:
                  "Hex AI will strategically expand our operations to regions with favorable regulatory environments and access to renewable energy sources. This will diversify our geographic footprint and mitigate potential risks. Plus, we will expand our team with diverse expertise and cultural understanding to effectively navigate the international crypto landscape.",
              },
            ],
            Y = () => {
              0 == D ? B(G.length - 1) : B(D - 1);
            },
            K = () => {
              D < G.length - 1 ? B((e) => e + 1) : B(0);
            },
            X = (e) => {
              e.preventDefault(),
                window.open(
                  "https://app.uniswap.org/explore/tokens/ethereum/0xtttttttttttttttttttttttt",
                  "_blank"
                );
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(r.Z, {}),
              (0, a.jsx)(i.Z, {
                children: (0, a.jsxs)("div", {
                  className: "bg-"
                    .concat(H ? "white" : "black", " text-")
                    .concat(H ? "black" : "white", " pb-5"),
                  children: [
                    (0, a.jsxs)("section", {
                      className:
                        "heroSection learn-sec-top d-flex text-left align-items-start flex-column orbitron-txt justify-content-center",
                      children: [
                        (0, a.jsx)("video", {
                          className: "w-100",
                          muted: !0,
                          loop: !0,
                          autoPlay: !0,
                          id: "myVideo",
                          playsInline: !0,
                          children: (0, a.jsx)("source", {
                            src: "".concat(
                              "https://hashai.s3.eu-west-2.amazonaws.com/storage/learn/learn-top-bg.mp4"
                            ),
                            type: "video/mp4",
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "content w-100",
                          children: (0, a.jsx)("div", {
                            className: "container-fluid px-3 px-lg-5",
                            children: (0, a.jsx)("div", {
                              className: "row",
                              children: (0, a.jsx)("div", {
                                className: "col-lg-12 learn-sec-top-title p-4",
                                "data-aos": "fade-up",
                                children: (0, a.jsxs)("h1", {
                                  className: "orbitron-txt",
                                  children: [
                                    (0, a.jsx)("p", {
                                      children: "Cutting-edge AI",
                                    }),
                                    (0, a.jsx)("p", {
                                      children: "Analyze market conditions",
                                    }),
                                    (0, a.jsx)("p", {
                                      children:
                                        "Identify the most lucrative coins in real-time",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "mb-5 white-paper-sec-desc",
                      "data-aos": "fade-up",
                      children: (0, a.jsxs)("div", {
                        className: "container mb-5 ",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "fan-img-sec position-relative text-center",
                            children: (0, a.jsx)("img", {
                              className: "rotate-fan",
                              src: "".concat(
                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/learn/fan.img.svg"
                              ),
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "row d-flex justify-content-center white-paper-sec-desc-bottom border-on-desc-color m-0",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "col-lg-4 col-sm-12 align-items-start col-md-12 p-5 border-on-desc-right-color fan-desc-box",
                                children: [
                                  (0, a.jsx)("h4", {
                                    className: "orbitron-txt",
                                    children: "Hex",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "metrophobic-txt mt-4",
                                    children:
                                      "Hex AI is a revolutionary force in cryptocurrency mining, pioneering AI-optimized operations, sustainable practices, and a strong community focus. This unique combination positions us as a beacon of innovation and efficiency in the industry.",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "col-lg-4 align-items-start col-sm-12 col-md-12 p-5 border-on-desc-right-color fan-desc-box top-border-section",
                                children: [
                                  (0, a.jsx)("h4", {
                                    className: "orbitron-txt",
                                    children: "AI",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "metrophobic-txt mt-4",
                                    children:
                                      "Our solution leverages cutting-edge AI to analyze market conditions and identify the most lucrative coins in real-time. This allows us to dynamically adjust what your rigs mine, maximizing your returns. Unlike traditional mining operations, our AI ensures there's no downtime for your investment.",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "col-lg-4 align-items-start col-sm-12 col-md-12 p-5 fan-desc-box position-relative top-border-section",
                                children: [
                                  (0, a.jsx)("h4", {
                                    className: "orbitron-txt",
                                    children: "How",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "metrophobic-txt mt-4",
                                    children:
                                      "We operate a combination of NVIDIA and AMD GPUs to ensure we are not limited in our choice of coin that we can mine. By harnessing the power of artificial intelligence, we've developed a world-leading mining algorithm that maximizes hex power, this translates to maximized returns for you, not just raw processing power.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "container my-5 tokenomics-sec-body py-lg-5 my-lg-5",
                      children: [
                        (0, a.jsx)("div", {
                          className: "row d-flex justify-content-center my-5",
                          children: (0, a.jsx)("div", {
                            className: "col-12 text-center",
                            children: (0, a.jsx)("h2", {
                              className: "orbitron-txt",
                              children: "Tokenomnics",
                            }),
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "row d-flex justify-content-center align-items-center",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "col-lg-6 col-md-12 col-sm-12 text-center tokenomics-sec-body p-lg-5 d-flex justify-content-center align-items-center",
                              children: [
                                (0, a.jsxs)("div", {
                                  style: {
                                    transform: "rotate(105deg)",
                                    width: "300px",
                                    position: "absolute",
                                    borderRadius: "50%",
                                  },
                                  className: "d-flex justify-content-center",
                                  children: [
                                    (0, a.jsx)("svg", {
                                      width: "0",
                                      height: "0",
                                      children: (0, a.jsx)("defs", {
                                        children: (0, a.jsxs)(
                                          "linearGradient",
                                          {
                                            id: "linear-gradient",
                                            gradientTransform: "rotate(-15)",
                                            children: [
                                              (0, a.jsx)("stop", {
                                                offset: "0%",
                                                stopColor: "#AA00DF",
                                              }),
                                              (0, a.jsx)("stop", {
                                                offset: "100%",
                                                stopColor:
                                                  "rgba(174, 0, 255, 0)",
                                              }),
                                            ],
                                          }
                                        ),
                                      }),
                                    }),
                                    (0, a.jsx)(c, {
                                      value: 95,
                                      text: "",
                                      styles:
                                        ((f = (y = {
                                          pathColor: "url(#linear-gradient)",
                                          trailColor: "transparent",
                                        }).rotation),
                                        (w = y.strokeLinecap),
                                        (N = y.textColor),
                                        (k = y.textSize),
                                        (A = y.pathColor),
                                        (C = y.pathTransition),
                                        (P = y.pathTransitionDuration),
                                        (_ = y.trailColor),
                                        (z = y.backgroundColor),
                                        {
                                          root: {},
                                          path: d({
                                            stroke: A,
                                            strokeLinecap: w,
                                            transform: (I =
                                              null == f
                                                ? void 0
                                                : "rotate(" + f + "turn)"),
                                            transformOrigin: (S =
                                              null == f
                                                ? void 0
                                                : "center center"),
                                            transition: C,
                                            transitionDuration:
                                              null == P ? void 0 : P + "s",
                                          }),
                                          trail: d({
                                            stroke: _,
                                            strokeLinecap: w,
                                            transform: I,
                                            transformOrigin: S,
                                          }),
                                          text: d({ fill: N, fontSize: k }),
                                          background: d({ fill: z }),
                                        }),
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("img", {
                                  src: "".concat(
                                    "https://hashai.s3.eu-west-2.amazonaws.com/storage/learn/hash-icon-img.svg"
                                  ),
                                  width: "350px",
                                  className: "position-relative hash-icon",
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "col-lg-6 col-md-12 col-sm-12 my-lg-5",
                              children: (0, a.jsxs)("div", {
                                className: "row m-0",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "col-12 my-3 border-left-side d-flex justify-content-between align-items-center token-value-body flex-column py-2 px-4",
                                    "data-aos": "fade-up",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "d-flex justify-content-between align-items-center w-100 my-1",
                                        children: [
                                          (0, a.jsx)("span", {
                                            className:
                                              "token-value orbitron-txt m-0",
                                            children:
                                              "100 000 000",
                                          }),
                                          (0, a.jsx)("span", {
                                            className:
                                              "token-title orbitron-txt text-left",
                                            children: "Total Supply",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "w-100",
                                        children: (0, a.jsx)("span", {
                                          className:
                                            "token-desc metrophobic-txt",
                                          children:
                                            "This is the total supply of $HEXAI",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "col-12 text-center",
                              "data-aos": "fade-up",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "orbitron-txt token-end-sec-txt",
                                  children: "CA:",
                                }),
                                (0, a.jsx)("span", {
                                  className:
                                    "token-end-sec-txt metrophobic-txt",
                                  children:
                                    "\xa00xtttttttttttttttttttttt",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "container my-5 roadmap-sec-body py-lg-5",
                      "data-aos": "fade-up",
                      children: (0, a.jsxs)("div", {
                        className:
                          "row d-flex justify-content-between align-items-start",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "col-lg-6 col-md-12 col-sm-12 roadmap-left-sec px-4 py-lg-3 px-lg-2",
                            children: [
                              (0, a.jsx)("h3", {
                                className: "orbitron-txt",
                                children: "Roadmap",
                              }),
                              null == G
                                ? void 0
                                : G.map((e, s) =>
                                    (0, a.jsx)(a.Fragment, {
                                      children:
                                        D == s &&
                                        (0, a.jsx)(a.Fragment, {
                                          children: (0, a.jsx)("p", {
                                            className: "roadmap-left-sec-desc",
                                            children: e.mainDesc,
                                          }),
                                        }),
                                    })
                                  ),
                              (0, a.jsxs)("div", {
                                className:
                                  "btn-sec d-flex gap-3 my-5 desktop-slider-btn",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "next-prev-btn p-3 arrow-right",
                                    onClick: Y,
                                    children: (0, a.jsx)("img", {
                                      src: "".concat(
                                        "https://hashai.s3.eu-west-2.amazonaws.com/storage/learn/left-arrow-img.svg"
                                      ),
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "next-prev-btn p-3 arrow-left",
                                    onClick: K,
                                    children: (0, a.jsx)("img", {
                                      src: "".concat(
                                        "https://hashai.s3.eu-west-2.amazonaws.com/storage/learn/right-arrow-img.svg"
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "col-lg-6 col-md-12 col-sm-12 px-lg-3",
                            children: [
                              (0, a.jsx)(m.tq, {
                                ref: M,
                                direction: "horizontal",
                                slidesPerView: 1.2,
                                loop: !0,
                                spaceBetween: 20,
                                touchReleaseOnEdges: !0,
                                keyboardControl: !0,
                                watchSlidesVisibility: !0,
                                mousewheel: {
                                  forceToAxis: !0,
                                  sensitivity: 1,
                                  releaseOnEdges: !0,
                                },
                                navigation: {
                                  nextEl: ".arrow-left",
                                  prevEl: ".arrow-right",
                                },
                                modules: [g.W_, g.Gk],
                                className: "mySwiper-learn",
                                children:
                                  null == G
                                    ? void 0
                                    : G.map((e, s) =>
                                        (0, a.jsx)(a.Fragment, {
                                          children: (0, a.jsx)(
                                            m.o5,
                                            {
                                              children: (0, a.jsx)("div", {
                                                children: (0, a.jsxs)("div", {
                                                  className:
                                                    "card-slide d-flex justify-content-between flex-column px-lg-5 py-lg-4 p-4 border-color",
                                                  children: [
                                                    (0, a.jsxs)("div", {
                                                      children: [
                                                        (0, a.jsx)("span", {
                                                          className:
                                                            "metrophobic-txt",
                                                          children: e.month,
                                                        }),
                                                        (0, a.jsx)("h3", {
                                                          className:
                                                            "orbitron-txt my-3",
                                                          children: e.title,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, a.jsxs)("div", {
                                                      className:
                                                        "desc-points my-lg-5",
                                                      children: [
                                                        (0, a.jsxs)("div", {
                                                          className:
                                                            "d-flex gap-2 align-items-center justify-content-start",
                                                          children: [
                                                            (0, a.jsx)("img", {
                                                              src: "".concat(
                                                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/learn/true-icon.svg"
                                                              ),
                                                            }),
                                                            (0, a.jsx)("p", {
                                                              className:
                                                                "m-0 metrophobic-txt",
                                                              children: e.desc1,
                                                            }),
                                                          ],
                                                        }),
                                                        (0, a.jsxs)("div", {
                                                          className:
                                                            "d-flex gap-2 align-items-center justify-content-start my-lg-4 my-2",
                                                          children: [
                                                            (0, a.jsx)("img", {
                                                              src: "".concat(
                                                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/learn/true-icon.svg"
                                                              ),
                                                            }),
                                                            (0, a.jsx)("p", {
                                                              className:
                                                                "m-0 metrophobic-txt",
                                                              children: e.desc2,
                                                            }),
                                                          ],
                                                        }),
                                                        (0, a.jsxs)("div", {
                                                          className:
                                                            "d-flex gap-2 align-items-center justify-content-start my-lg-4 my-2",
                                                          children: [
                                                            (0, a.jsx)("img", {
                                                              src: "".concat(
                                                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/learn/true-icon.svg"
                                                              ),
                                                            }),
                                                            (0, a.jsx)("p", {
                                                              className:
                                                                "m-0 metrophobic-txt",
                                                              children: e.desc3,
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            },
                                            s
                                          ),
                                        })
                                      ),
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "btn-sec d-flex gap-3 my-4 my-lg-5 mobile-slider-btn",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "next-prev-btn p-3 arrow-right",
                                    onClick: Y,
                                    children: (0, a.jsx)("img", {
                                      src: "".concat(
                                        "https://hashai.s3.eu-west-2.amazonaws.com/storage/learn/left-arrow-img.svg"
                                      ),
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "next-prev-btn p-3 arrow-left",
                                    onClick: K,
                                    children: (0, a.jsx)("img", {
                                      src: "".concat(
                                        "https://hashai.s3.eu-west-2.amazonaws.com/storage/learn/right-arrow-img.svg"
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "my-5 cta-graph",
                      children: (0, a.jsxs)("div", {
                        className: "row mx-0",
                        children: [
                          (0, a.jsx)("div", {
                            className: "col-lg-4 p-0",
                            children: (0, a.jsxs)("div", {
                              className: "row mx-0 gap-lg-4",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "col-12 col-md-12 col-sm-12 cta-graph-border-1 p-lg-5 z-1 cta-graph-sec-one d-flex justify-content-center flex-column gap-3 py-4",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "d-flex justify-content-center flex-column px-lg-5 z-3",
                                      children: [
                                        (0, a.jsxs)("h4", {
                                          className: "orbitron-txt",
                                          children: [
                                            "Real-time",
                                            (0, a.jsx)("br", {}),
                                            "Analytics",
                                          ],
                                        }),
                                        (0, a.jsxs)("p", {
                                          className: "m-0 metrophobic-txt py-3",
                                          children: [
                                            "We make data-driven decisions to ",
                                            (0, a.jsx)("br", {}),
                                            "optimize results based on real-time.",
                                          ],
                                        }),
                                        (0, a.jsx)("button", {
                                          className: "text-".concat(
                                            H ? "white" : "black",
                                            " custom-btn orbitron-txt"
                                          ),
                                          onClick: (e) => X(e),
                                          children: "Buy $HEXAI",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      style: { textAlign: "right" },
                                      className: "sec-count",
                                      children: (0, a.jsx)("span", {
                                        className: "metrophobic-txt",
                                        children: "01",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "col-12 col-md-12 col-sm-12 cta-graph-border-1 p-lg-5 z-1 cta-graph-sec-one d-flex justify-content-center flex-column gap-3 py-4",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "d-flex justify-content-center flex-column px-lg-5",
                                      children: [
                                        (0, a.jsxs)("h4", {
                                          className: "orbitron-txt",
                                          children: [
                                            "Evolving ",
                                            (0, a.jsx)("br", {}),
                                            "Algorithms",
                                          ],
                                        }),
                                        (0, a.jsx)("p", {
                                          className: "m-0 metrophobic-txt py-3",
                                          children:
                                            "Our algorithms constantly adapt to changing market conditions.",
                                        }),
                                        (0, a.jsx)("img", {
                                          src: "".concat(
                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/learn/evolving-img.svg"
                                          ),
                                          width: "250px",
                                          className: "w-100",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      style: { textAlign: "right" },
                                      className: "sec-count",
                                      children: (0, a.jsx)("span", {
                                        className: "metrophobic-txt",
                                        children: "02",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "center-frame-sec col-lg-4 position-relative",
                            children: (0, a.jsx)("div", {
                              className: "row",
                              children: (0, a.jsxs)("div", {
                                className:
                                  "col-12 d-flex justify-content-center flex-column align-items-center",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "p-lg-5 my-4",
                                    children: [
                                      (0, a.jsx)("h3", {
                                        className: "orbitron-txt",
                                        children: "Data-Driven Profits",
                                      }),
                                      (0, a.jsxs)("p", {
                                        className: "metrophobic-txt",
                                        children: [
                                          "We leverage data to maximize your ",
                                          (0, a.jsx)("br", {}),
                                          "return on investment.",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    class: "container",
                                    children: (0, a.jsxs)("div", {
                                      class: "bar-graph",
                                      children: [
                                        (0, a.jsx)("div", { class: "bar" }),
                                        (0, a.jsx)("div", {
                                          class: "bar dark",
                                        }),
                                        (0, a.jsx)("div", { class: "bar" }),
                                        (0, a.jsx)("div", {
                                          class: "bar dark",
                                        }),
                                        (0, a.jsx)("div", { class: "bar" }),
                                        (0, a.jsx)("div", {
                                          class: "bar dark",
                                        }),
                                        (0, a.jsx)("div", { class: "bar" }),
                                        (0, a.jsx)("div", {
                                          class: "bar dark",
                                        }),
                                        (0, a.jsx)("div", { class: "bar" }),
                                        (0, a.jsx)("div", {
                                          class: "bar dark",
                                        }),
                                        (0, a.jsx)("div", { class: "bar" }),
                                        (0, a.jsx)("div", {
                                          class: "bar dark",
                                        }),
                                        (0, a.jsx)("div", { class: "bar" }),
                                        (0, a.jsx)("div", {
                                          class: "bar dark",
                                        }),
                                        (0, a.jsx)("div", { class: "bar" }),
                                        (0, a.jsx)("div", {
                                          class: "bar dark",
                                        }),
                                        (0, a.jsx)("div", { class: "bar" }),
                                        (0, a.jsx)("div", {
                                          class: "bar dark",
                                        }),
                                        (0, a.jsx)("div", { class: "bar" }),
                                      ],
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "bottom-0 me-5 pb-5 pe-5 position-absolute text-end w-100 metrophobic-txt display-1 text-3",
                                    children: "03",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-lg-4 p-0",
                            children: (0, a.jsxs)("div", {
                              className: "row mx-0 gap-lg-4 h-100",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "col-12 col-md-12 col-sm-12 cta-graph-border-2 p-lg-5 z-1 cta-graph-sec-one d-flex justify-content-center flex-column gap-3",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "d-flex justify-content-center flex-column px-lg-5",
                                      children: [
                                        (0, a.jsxs)("h4", {
                                          className: "orbitron-txt",
                                          children: [
                                            "Transparent ",
                                            (0, a.jsx)("br", {}),
                                            "Communication",
                                          ],
                                        }),
                                        (0, a.jsx)("p", {
                                          className: "m-0 metrophobic-txt py-3",
                                          children:
                                            "You'll always have clear insights into our technology, our team, and our operations.",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      style: { textAlign: "right" },
                                      className: "sec-count",
                                      children: (0, a.jsx)("span", {
                                        className: "metrophobic-txt",
                                        children: "04",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "col-12 col-md-12 col-sm-12 cta-graph-border-2 p-lg-5 z-1 cta-graph-sec-one d-flex justify-content-center flex-column gap-3",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "d-flex justify-content-center flex-column px-lg-5 py-lg-0 z-1 py-4",
                                      children: [
                                        (0, a.jsx)("h4", {
                                          className: "orbitron-txt",
                                          children: "World-Leading Expertise",
                                        }),
                                        (0, a.jsx)("p", {
                                          className: "m-0 metrophobic-txt py-3",
                                          children:
                                            "Our team of experts ensures you have the best technology at your fingertips.",
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "team-btn-sec d-flex justify-content-center gap-3 px-3 w-75",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className:
                                                "metrophobic-txt no-hover-show-text",
                                              children: "TEAM",
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "metrophobic-txt hover-show-text",
                                              children: "VIEW NOW",
                                            }),
                                            (0, a.jsx)("img", {
                                              src: "".concat(
                                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/learn/right-arrow-img.svg"
                                              ),
                                              className: "team-btn-arrow",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      style: { textAlign: "right" },
                                      className: "sec-count text-5",
                                      children: (0, a.jsx)("span", {
                                        className: "metrophobic-txt",
                                        children: "05",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "container my-5 become-partner-body py-5",
                      "data-aos": "fade-up",
                      children: (0, a.jsxs)("div", {
                        className: "row p-lg-4 py-lg-5 my-lg-5",
                        children: [
                          (0, a.jsx)("div", {
                            className: "col-lg-6 p-4",
                            children: (0, a.jsx)("video", {
                              muted: !0,
                              loop: !0,
                              autoPlay: !0,
                              id: "face_hash",
                              style: { width: "100%" },
                              playsInline: !0,
                              children: (0, a.jsx)("source", {
                                src: "".concat(
                                  "https://hashai.s3.eu-west-2.amazonaws.com/storage/learn/hardware-partners.mp4"
                                ),
                                type: "video/mp4",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "col-lg-6 p-lg-4 d-flex justify-content-center align-items-center ",
                            children: (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", {
                                  className: "orbitron-txt",
                                  children: "Hardware Partner",
                                }),
                                (0, a.jsxs)("p", {
                                  className: "my-3 metrophobic-txt",
                                  children: [
                                    "Power the Next Generation of Mining, Become a ",
                                    (0, a.jsx)("br", {}),
                                    " Hex AI Hardware Partner!",
                                  ],
                                })
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "container my-5 solution-sec-body py-5",
                      "data-aos": "fade-up",
                      children: (0, a.jsxs)("div", {
                        className:
                          "row d-flex justify-content-evenly align-items-center gap-5",
                        children: [
                          (0, a.jsx)("div", {
                            className: "col-12",
                            children: (0, a.jsx)("h3", {
                              className: "text-center orbitron-txt",
                              children: "Solutions",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "col-lg-3",
                            children: [
                              (0, a.jsx)("div", {
                                className: "solution-vid",
                                children: (0, a.jsx)("video", {
                                  muted: !0,
                                  loop: !0,
                                  autoPlay: !0,
                                  id: "myVideo",
                                  style: { width: "100%", maxWidth: "206px" },
                                  playsInline: !0,
                                  children: (0, a.jsx)("source", {
                                    src: "".concat(
                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/node_rental_option.mp4"
                                    ),
                                    type: "video/mp4",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "py-3",
                                children: [
                                  (0, a.jsx)("h6", {
                                    className: "orbitron-txt m-0",
                                    children: "Node Rental",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "m-0 metrophobic-txt py-3",
                                    children:
                                      "For our most flexible node rentals to suit your needs, explore our node availability today. From simple hourly rates to fixed term leasing. Power your projects with Hex AI.",
                                  })
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "col-lg-3",
                            children: [
                              (0, a.jsx)("div", {
                                className: "solution-vid",
                                children: (0, a.jsx)("video", {
                                  muted: !0,
                                  loop: !0,
                                  autoPlay: !0,
                                  id: "myVideo",
                                  style: { width: "100%", maxWidth: "206px" },
                                  playsInline: !0,
                                  children: (0, a.jsx)("source", {
                                    src: "".concat(
                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/hardware_n.mp4"
                                    ),
                                    type: "video/mp4",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "py-3",
                                children: [
                                  (0, a.jsx)("h6", {
                                    className: "orbitron-txt m-0",
                                    children: "Buy Hardware",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "m-0 metrophobic-txt py-3",
                                    children:
                                      "Make the most of your investment with a permanent solution that works even when you don’t! Explore our purchasing options and invest in your future today!",
                                  }),
                                  (0, a.jsx)(u(), {
                                    href: "/hardware",
                                    children: (0, a.jsx)("button", {
                                      className: "text-".concat(
                                        H ? "white" : "black",
                                        " custom-btn orbitron-txt"
                                      ),
                                      children: "Buy Hardware",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "col-lg-3",
                            children: [
                              (0, a.jsx)("div", {
                                className: "solution-vid",
                                children: (0, a.jsx)("video", {
                                  muted: !0,
                                  loop: !0,
                                  autoPlay: !0,
                                  id: "myVideo",
                                  style: { width: "100%", maxWidth: "206px" },
                                  playsInline: !0,
                                  children: (0, a.jsx)("source", {
                                    src: "".concat(
                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/solutions/hash_coin_option.mp4"
                                    ),
                                    type: "video/mp4",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "py-3",
                                children: [
                                  (0, a.jsx)("h6", {
                                    className: "orbitron-txt m-0",
                                    children: "Buy Token",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "m-0 metrophobic-txt py-3",
                                    children:
                                      "Make the most of your Hex AI experience by getting involved with our exclusive token $HEXAI! You can unlock exclusive rates, perks and mining opportunities. Get involved today!",
                                  }),
                                  (0, a.jsx)("button", {
                                    className: "text-".concat(
                                      H ? "white" : "black",
                                      " custom-btn orbitron-txt"
                                    ),
                                    onClick: (e) => X(e),
                                    children: "Buy $HEXAI",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    40682: function () {},
    47813: function () {},
  },
  function (e) {
    e.O(0, [1664, 1110, 3218, 9123, 2116, 2888, 9774, 179], function () {
      return e((e.s = 3955));
    }),
      (_N_E = e.O());
  },
]);
