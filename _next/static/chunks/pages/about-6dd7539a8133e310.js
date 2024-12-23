(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2521],
  {
    81233: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return s(60490);
        },
      ]);
    },
    60490: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s(85893),
        i = s(2711),
        n = s.n(i);
      s(37611);
      var o = s(67294),
        c = s(84769),
        r = s(93962);
      s(26663), s(28911), s(36501);
      var l = s(25675),
        d = s.n(l),
        h = s(41664),
        m = s.n(h);
      s(46066), s(42175), s(12637);
      var u = s(10990),
        g = s(56546),
        p = s(2261);
      s(65299), s(9e4), s(65083);
      var x = s(99304),
        v = s(65823);
      t.default = () => {
        var e, t, i, l, h, b;
        let j;
        let w = (0, o.useRef)(),
          [y, f] = (0, o.useState)(!1),
          [N, k] = (0, o.useState)(1),
          [z, L] = (function () {
            let e = (0, o.useRef)([]);
            return (e.current = []), [e, (t) => t && e.current.push(t)];
          })(),
          A = (0, o.useRef)(null),
          _ = (0, o.useRef)(null),
          C = (0, o.useRef)(null);
        (0, o.useRef)(!1), (0, o.useRef)(null);
        let [S, T] = (0, o.useState)(0),
          [I, E] = (0, o.useState)(0),
          P = (0, o.useRef)(null);
        u.ZP.registerPlugin(g.ScrollTrigger);
        let O = (0, o.useRef)(null),
          H = (0, o.useRef)(null);
        (0, o.useRef)(null);
        let M = (0, o.useRef)(null),
          [R, W] = (0, o.useState)(0),
          [F, D] = (0, o.useState)(null),
          [B, G] = (0, o.useState)(0),
          q = (0, o.useCallback)(() => {
            if (H.current && M.current) {
              let e = H.current.getBoundingClientRect(),
                t = window.scrollY,
                s = null;
              t >= 1300 && t < 1400
                ? (s = 1)
                : t >= 1400 && t < 1500
                ? (s = 2)
                : t >= 1500 && t < 1600
                ? (s = 3)
                : t >= 1600 && t < 1700
                ? (s = 4)
                : t >= 1700 && (s = 5),
                s !== F && D(s),
                e.top < 50 &&
                t < 2e3 &&
                !H.current.classList.contains("sticky-top")
                  ? (H.current.classList.add("sticky-top"),
                    M.current.classList.add("team-section-sticky-pd"),
                    M.current.classList.remove("team-section-visible"))
                  : H.current.classList.contains("sticky-top") &&
                    t > 2e3 &&
                    (H.current.classList.remove("sticky-top"),
                    M.current.classList.remove("team-section-sticky-pd"),
                    M.current.classList.add("team-section-visible"));
            }
          }, [F]);
        (0, o.useEffect)(
          () => (
            q(),
            window.addEventListener("scroll", q),
            window.addEventListener("resize", q),
            () => {
              window.removeEventListener("scroll", q),
                window.removeEventListener("resize", q);
            }
          ),
          [q]
        ),
          (0, o.useEffect)(() => {
            {
              let e = u.ZP.to(z.current, {
                scrollTrigger: {
                  trigger: O.current,
                  scrub: !0,
                  start: "top bottom",
                  end: "+=100%",
                },
                color: "#FFFFFF",
                textShadow: "0px 0px 10.8px rgba(255, 255, 255, 0.9)",
                duration: 0.01,
                stagger: 5,
                delay: 0,
              });
              return () => {
                e.kill();
              };
            }
          }, []);
        let [U, J] = (0, o.useState)(0),
          X = [
            {
              role: "CEO & Co Founder",
              name: "Adam",
              twitterLink: "https://x.com/",
              instagramLink: "",
              linkdinLink: "",
              content:
                "Adam has been immersed in the cryptocurrency world for many years, building on a foundational experience in Bitcoin mining. Over this period, Adam has established a strong reputation as a leading marketing strategist and advisor in the crypto space. Leveraging his extensive knowledge and network, he has successfully guided numerous projects through their launch strategies and provided ongoing advisory services. His expertise in connecting teams with the right marketing resources has significantly enhanced their visibility and attracted investment, ultimately boosting the overall valuation of their projects.",
            },
            {
              role: "CTO & Co-Founder",
              name: "Irun",
              twitterLink: "https://x.com/",
              instagramLink: "",
              linkdinLink: "",
              content:
                "Irun is a seasoned engineer with a robust background in mechanical and electrical engineering, now making significant strides in the cryptocurrency mining industry. His journey began with a masters degree in engineering, where he developed a keen interest in emerging technologies and their applications. Transitioning into the world of cryptocurrency, Irun applied his engineering expertise to optimise mining operations, focusing on enhancing hardware performance and reducing energy consumption. He ran a successful company producing and selling mining rigs over the last 6 years, distributing rigs all over the world. Irun is dedicated to advancing the industry through cutting-edge solutions as demonstrated at Hex AI.",
            },
            {
              role: "CMO & Co-Founder",
              name: "Andy",
              twitterLink: "https://x.com/",
              instagramLink: "",
              linkdinLink: "",
              content:
                "Since discovering cryptocurrency in 2020 through Instagram, Andy has been deeply involved in the industry. After joining a project’s Telegram group and conducting thorough research, Andy quickly became an active and enthusiastic participant. This dedication led to an offer for a role as a moderator. Through effective networking, Andy transitioned to other projects and expanded into marketing. Over the past 3.5 years, Andy has worked with protocols such as Squidgrow and Befe, contributing to their significant market cap growth. The natural progression of Andy’s career culminated in Co-founding Hex AI, marking the beginning of an exciting new journey.",
            },
            {
              role: "COO",
              name: "Luke",
              twitterLink: "",
              instagramLink: "",
              linkdinLink: "",
              content:
                "Luke is a seasoned business and blockchain professional with more than a decade of business experience, having created, launched, and led multiple businesses within the health and well-being, e-commerce, fintech, finance, and cryptocurrency industries. He is dedicated to driving innovation in the digital asset space and the blockchain industry. Joining the Hex AI team as COO, Luke is ready to step up the pace of the business’ growth.",
            },
            {
              role: "CSO",
              name: "Larry",
              twitterLink:
                "https://x.com/larrymetatrust?s=11&t=99LU5XxpCPGBcpK2QUuO4g",
              instagramLink: "",
              linkdinLink: "",
              content:
                "Larry has been a prolific presence within Ethereum and BTC ecosystems both in research and policy. He is a proud alumni of Georgetown University with his undergrad in Law and Foreign trade and his masters in applied intelligence. He also has diverse insight as he was formerly Head BDM Certik APAC, Director of Business Development at Salus Labs and is the current CSO at Metatrust Labs Special Security Services division giving him broad exposure to all the top protocols in the space. Larry is a co-founder of Nautilus Labs, a think tank and asymmetric solutions provider founded during the light coin period. He is a prolific speaker within web3/blockchain with numerous engagements at major live events, television, and on social media.",
            },
          ];
        null == X || X.length;
        let [Z, Y] = (0, o.useState)(0),
          [K, V] = (0, o.useState)(!1),
          [Q, $] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            n().init({ duration: 400 }),
              V("true" === localStorage.getItem("darkMode"));
            let e = (e) => {
              V(e.detail);
            };
            return (
              window.addEventListener("darkModeChange", e),
              () => {
                window.removeEventListener("darkModeChange", e);
              }
            );
          }, []),
          (0, o.useEffect)(
            () => () => {
              clearInterval(j);
            },
            []
          ),
          (0, o.useEffect)(() => {
            let e = (e) => {
                let t = e.target.parentElement.nextElementSibling;
                document
                  .querySelectorAll(".item-circle .tooltip-main")
                  .forEach((e) => {
                    e.classList.remove("tooltip-show");
                  }),
                  t && t.classList.toggle("tooltip-show");
              },
              t = document.querySelectorAll(
                ".item-circle .content .item-circle-index"
              );
            return (
              t.forEach((t) => {
                t.addEventListener("click", e);
              }),
              () => {
                t.forEach((t) => {
                  t.removeEventListener("click", e);
                });
              }
            );
          }, []),
          (0, o.useEffect)(() => {
            {
              let t = A.current,
                s = t.getContext("2d"),
                a = "rgba(240, 240, 255, ".concat(
                  0.3 * Math.random() + 0.3,
                  ")"
                ),
                i = [],
                n = (t.width = window.innerWidth),
                o = (t.height = window.innerHeight);
              function e() {
                (n = t.width = window.innerWidth),
                  (o = t.height = window.innerHeight);
              }
              window.addEventListener("resize", e);
              class c {
                update() {
                  (this.x += this.speedX),
                    (this.y += this.speedY),
                    (this.x > n || this.x < 0) && (this.speedX *= -1),
                    (this.y > o || this.y < 0) && (this.speedY *= -1);
                }
                draw() {
                  (s.fillStyle = this.color),
                    s.beginPath(),
                    s.arc(this.x, this.y, this.size, 0, 2 * Math.PI),
                    s.fill();
                }
                constructor() {
                  (this.x = Math.random() * n),
                    (this.y = Math.random() * o),
                    (this.size = 5 * Math.random() + 1),
                    (this.speedX = 3 * Math.random() - 1.5),
                    (this.speedY = 3 * Math.random() - 1.5),
                    (this.color = a);
                }
              }
              return (
                (function () {
                  for (let e = 0; e < 100; e++) i.push(new c());
                })(),
                (function e() {
                  s.clearRect(0, 0, n, o),
                    i.forEach((e) => {
                      e.update(), e.draw();
                    }),
                    requestAnimationFrame(e);
                })(),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }
          }, []),
          (0, o.useEffect)(() => {
            P.current.style.transform = "rotateY(".concat(S, "deg)");
          }, [S]),
          (0, o.useEffect)(() => {
            (async () => {
              {
                let e = new (
                  await s.e(840).then(s.t.bind(s, 50840, 23))
                ).default(P.current);
                return (
                  e.on("swipeleft", () => {
                    T((e) => e - 72), J((e) => (e < X.length - 1 ? e + 1 : 0));
                  }),
                  e.on("swiperight", () => {
                    T((e) => e + 72),
                      J((e) => (0 === e ? X.length - 1 : e - 1));
                  }),
                  () => {
                    e.destroy();
                  }
                );
              }
            })();
          }, []),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(c.Z, {
              children: [
                (0, a.jsx)(r.Z, {
                  title:
                    "About Hex AI: Redefining Crypto Mining & Node Rentals",
                  metaTitle:
                    "Hex AI: The Leading Innovator in Secure & Scalable Crypto Solutions - About Us",
                  metaDescription:
                    "Discover Hex AI's story: Pioneering AI-powered mining and secure node rentals. Uncover our mission, vision, and commitment to a sustainable crypto future. Learn more!",
                }),
                (0, a.jsxs)("div", {
                  className: "bg-"
                    .concat(K ? "white" : "black", " text-")
                    .concat(K ? "black" : "white", " py-lg-5 py-0 about-page"),
                  children: [
                    (0, a.jsx)("div", {
                      className: "container-fluid px-0 px-lg-5",
                      children: (0, a.jsxs)("div", {
                        className: "row px-0 m-0",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "col-lg-5 col-md-12 col-sm-12 px-0 responsive-img d-flex justify-content-lg-start justify-content-center position-relative",
                            children: [
                              (0, a.jsx)("video", {
                                muted: !0,
                                loop: !0,
                                autoPlay: !0,
                                id: "myVideo",
                                style: { width: "100%", maxWidth: "512px" },
                                playsInline: !0,
                                children: (0, a.jsx)("source", {
                                  src: "".concat(
                                    "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/node_rental_option.mp4"
                                  ),
                                  type: "video/mp4",
                                }),
                              }),
                              (0, a.jsx)("audio", {
                                ref: w,
                                src: "".concat(
                                  "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/ask_hash_opt_6.mp3"
                                ),
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "video-container-shadow cursor-pointer",
                                onClick: () => {
                                  w.current && w.current.play();
                                },
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "col-lg-7 col-md-12 col-sm-12 d-flex justify-content-center align-items-center align-items-lg-start text-left flex-column ",
                            "data-aos": "fade-up",
                            children: [
                              (0, a.jsx)("h1", {
                                className:
                                  "fw-bold orbitron-txt display-6 py-4 py-lg-0 text-center text-lg-start",
                                children:
                                  "Get Direct Updates & Join Our Community",
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "my-5 d-flex gap-4 justify-content-center justify-content-lg-start",
                                children: [
                                  (0, a.jsx)(m(), {
                                    className: "",
                                    href: "https://etherscan.io/token/0xttttttttttttttttttttttttttt",
                                    target: "_blank",
                                    children: (0, a.jsxs)("button", {
                                      className: "orbitron-txt text-".concat(
                                        K ? "white" : "black",
                                        " custom-btn"
                                      ),
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "".concat(
                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/contract-img.svg"
                                          ),
                                          alt: "contract-img",
                                          height: "36px",
                                          width: "36px",
                                          unoptimized: !0,
                                        }),
                                        " ",
                                        "Contract",
                                      ],
                                    }),
                                  }),
                                  (0, a.jsx)(m(), {
                                    className: "",
                                    href: "https://t.me/",
                                    target: "_blank",
                                    children: (0, a.jsxs)("button", {
                                      className: "orbitron-txt text-".concat(
                                        K ? "white" : "black",
                                        " custom-btn"
                                      ),
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "".concat(
                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/telegram-img.svg"
                                          ),
                                          alt: "telegram-img",
                                          height: "36px",
                                          width: "38px",
                                          unoptimized: !0,
                                        }),
                                        " ",
                                        "Community",
                                      ],
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
                      className: "slider-container py-5",
                      children: (0, a.jsx)(v.default, {}),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "container-fluid p-lg-5 mission-statement-sec w-100",
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "orbitron-txt text-white mission-statement-heading fw-bold",
                          "data-aos": "fade-up",
                          children: "Mission",
                        }),
                        (0, a.jsx)("div", { className: "spacing-small" }),
                        (0, a.jsx)("div", {
                          className: "reveal",
                          "data-aos": "fade-up",
                          children: (0, a.jsx)("div", {
                            ref: O,
                            children:
                              "To be the world-leading ecosystem for successful, evolutionary AI crypto mining, empowering individuals and businesses with the infrastructure to thrive."
                                .split("")
                                .map((e, t) =>
                                  (0, a.jsx)(
                                    "span",
                                    {
                                      className:
                                        "reveal-text metrophobic-txt display-3",
                                      ref: (e) => (z.current[t] = e),
                                      children: e,
                                    },
                                    t
                                  )
                                ),
                          }),
                        }),
                        (0, a.jsx)("div", { className: "spacing" }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      ref: H,
                      className:
                        "container-fluid px-sm-5 px-md-5 section-values",
                      children: (0, a.jsxs)("div", {
                        className:
                          "row ps-4 mx-0 px-0 mb-5 value-sec d-flex justify-content-center text-center align-items-center position-relative",
                        children: [
                          (0, a.jsx)("canvas", {
                            ref: A,
                            className: "z-1 d-none d-lg-block",
                          }),
                          (0, a.jsx)("div", {
                            className: "circle-slider-img d-none d-lg-block",
                            children: (0, a.jsx)("video", {
                              muted: !0,
                              loop: !0,
                              autoPlay: !0,
                              id: "face_hash",
                              style: { width: "100%" },
                              playsInline: !0,
                              children: (0, a.jsx)("source", {
                                src: "".concat(
                                  "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/face_hash.mp4"
                                ),
                                type: "video/mp4",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "circle-body z-2",
                            "data-aos": "zoom-in-right",
                            children: (0, a.jsxs)("div", {
                              className: "half-circle",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "item-circle metrophobic-txt reliability ".concat(
                                      1 === F ? "tooltip-show" : ""
                                    ),
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "content",
                                      children: [
                                        (0, a.jsx)("p", {
                                          children: "Reliability",
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "item-circle-index",
                                          children: "1",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "tooltip-main tooltip-circle ".concat(
                                          1 === F ? "tooltip-show" : ""
                                        ),
                                      children:
                                        "Reliability: We provide secure, dependable infrastructure for your crypto mining journey with a focus on minimizing downtime and maximizing your profits.",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "item-circle metrophobic-txt transparency ".concat(
                                      2 === F ? "tooltip-show" : ""
                                    ),
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "content",
                                      children: [
                                        (0, a.jsx)("p", {
                                          children: "Transparency",
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "item-circle-index",
                                          children: "2",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "tooltip-main tooltip-circle ".concat(
                                          2 === F ? "tooltip-show" : ""
                                        ),
                                      children:
                                        "Transparency: We believe in open communication and building trust with our community through verifiable data, clear information, and actions.",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "item-circle metrophobic-txt decentralized ".concat(
                                      3 === F ? "tooltip-show" : ""
                                    ),
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "content",
                                      children: [
                                        (0, a.jsx)("p", {
                                          children: "Decentralized by Design",
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "item-circle-index",
                                          children: "3",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "tooltip-main tooltip-circle ".concat(
                                          3 === F ? "tooltip-show" : ""
                                        ),
                                      children:
                                        "Decentralized by Design: We champion the collaborative spirit of crypto and foster a community-driven approach to innovation.",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "item-circle metrophobic-txt innovation ".concat(
                                      4 === F ? "tooltip-show" : ""
                                    ),
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "content",
                                      children: [
                                        (0, a.jsx)("p", {
                                          children: "Future-Proof Innovation",
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "item-circle-index",
                                          children: "4",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "tooltip-main tooltip-circle-right ".concat(
                                          4 === F ? "tooltip-show" : ""
                                        ),
                                      children:
                                        "Future-Proof Innovation: We utilize ever-evolving artificial intelligence and proactively develop mining solutions that meet the diverse needs of crypto.",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "item-circle metrophobic-txt sustainability ".concat(
                                      5 === F ? "tooltip-show" : ""
                                    ),
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "content",
                                      children: [
                                        (0, a.jsx)("p", {
                                          children: "Sustainability by Nature",
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "item-circle-index",
                                          children: "5",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "tooltip-main tooltip-circle-right ".concat(
                                          5 === F ? "tooltip-show" : ""
                                        ),
                                      children:
                                        "Sustainability by Nature: We advocate for responsible mining practices, eco-friendly energy resources, and invest in solutions for a greener crypto future.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "mobile-circle-silder metrophobic-txt w-100 position-relative",
                            children: [
                              (0, a.jsx)("div", {
                                className: "d-lg-none",
                                children: (0, a.jsx)("video", {
                                  muted: !0,
                                  loop: !0,
                                  autoPlay: !0,
                                  id: "mobile-video",
                                  style: { width: "100%" },
                                  playsInline: !0,
                                  className: "z-0",
                                  children: (0, a.jsx)("source", {
                                    src: "".concat(
                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/face_hash.mp4"
                                    ),
                                    type: "video/mp4",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "mobile-circle-item z-2 bg-".concat(
                                  K ? "white" : "black"
                                ),
                                "data-number": "1",
                                children: [
                                  (0, a.jsx)("h2", {
                                    className: "orbitron-txt fw-semibold",
                                    children: "Decentralized by Design",
                                  }),
                                  (0, a.jsx)("p", {
                                    children:
                                      "We champion the collaborative spirit of crypto and foster a community-driven approach to innovation.",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "mobile-circle-item z-2 bg-".concat(
                                  K ? "white" : "black"
                                ),
                                "data-number": "2",
                                children: [
                                  (0, a.jsx)("h2", {
                                    className: "orbitron-txt fw-semibold",
                                    children: "Future-Proof Innovation",
                                  }),
                                  (0, a.jsx)("p", {
                                    children:
                                      "We utilize ever-evolving artificial intelligence and proactively develop mining solutions that meet the diverse needs of crypto.",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "mobile-circle-item z-2 bg-".concat(
                                  K ? "white" : "black"
                                ),
                                "data-number": "3",
                                children: [
                                  (0, a.jsx)("h2", {
                                    className: "orbitron-txt fw-semibold",
                                    children: "Reliability",
                                  }),
                                  (0, a.jsx)("p", {
                                    children:
                                      "We provide secure, dependable infrastructure for your crypto mining journey with a focus on minimizing downtime and maximizing your profits.",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "mobile-circle-item z-2 bg-".concat(
                                  K ? "white" : "black"
                                ),
                                "data-number": "4",
                                children: [
                                  (0, a.jsx)("h2", {
                                    className: "orbitron-txt fw-semibold",
                                    children: "Sustainability by Nature",
                                  }),
                                  (0, a.jsx)("p", {
                                    children:
                                      "We advocate for responsible mining practices, eco-friendly energy resources, and invest in solutions for a greener crypto future.",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "mobile-circle-item  bg-".concat(
                                  K ? "white" : "black"
                                ),
                                "data-number": "5",
                                children: [
                                  (0, a.jsx)("h2", {
                                    className: "orbitron-txt fw-semibold",
                                    children: "Transparency",
                                  }),
                                  (0, a.jsx)("p", {
                                    children:
                                      "We believe in open communication and building trust with our community through verifiable data, clear information, and actions.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "mobile-circle-item-shadow z-1 d-block d-lg-none",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      ref: M,
                      className: "container-fluid px-sm-5 px-md-5 team-section",
                      id: "team",
                      "data-aos": "fade-up",
                      "data-aos-duration": "2500",
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "text-center orbitron-txt text-center mt-5 display-6 pb-5",
                          "data-aos": "zoom-in-down",
                          children: "Team",
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "row px-0 mx-0 my-lg-5 team-sec d-flex justify-content-center",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "col-lg-6 text-center align-items-start",
                              "data-aos": "fade-down",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "wrapper",
                                  children: (0, a.jsx)("div", {
                                    class: "team-container",
                                    children: (0, a.jsx)("div", {
                                      ref: P,
                                      class: "team-carousel",
                                      children:
                                        null == X
                                          ? void 0
                                          : X.map((e, t) =>
                                              (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsx)(
                                                  "div",
                                                  {
                                                    className: "team-item bg-"
                                                      .concat(
                                                        !0 == K
                                                          ? "white"
                                                          : "black",
                                                        " text-"
                                                      )
                                                      .concat(
                                                        !0 == K
                                                          ? "black"
                                                          : "white"
                                                      ),
                                                    children: (0, a.jsx)(
                                                      "div",
                                                      {
                                                        className:
                                                          "border-class",
                                                        children: (0, a.jsxs)(
                                                          "div",
                                                          {
                                                            className:
                                                              "team_card",
                                                            children: [
                                                              (0, a.jsxs)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "team_img",
                                                                  children: [
                                                                    (0, a.jsx)(
                                                                      "img",
                                                                      {
                                                                        className:
                                                                          "adam_image",
                                                                        src: "".concat(
                                                                          "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/adam.svg"
                                                                        ),
                                                                        alt: "COOL CAT",
                                                                      }
                                                                    ),
                                                                    (0, a.jsxs)(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "team_social_icons",
                                                                        children:
                                                                          [
                                                                            (
                                                                              null ==
                                                                              e
                                                                                ? void 0
                                                                                : e.instagramLink
                                                                            )
                                                                              ? (0,
                                                                                a.jsx)(
                                                                                  m(),
                                                                                  {
                                                                                    href: e.instagramLink,
                                                                                    target:
                                                                                      "_blank",
                                                                                    children:
                                                                                      (0,
                                                                                      a.jsx)(
                                                                                        "img",
                                                                                        {
                                                                                          className:
                                                                                            "mx-2 small-icon",
                                                                                          src: "".concat(
                                                                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/instagram-light-img.svg"
                                                                                          ),
                                                                                          alt: "twiter-img",
                                                                                          unoptimized:
                                                                                            !0,
                                                                                        }
                                                                                      ),
                                                                                  }
                                                                                )
                                                                              : "",
                                                                            (
                                                                              null ==
                                                                              e
                                                                                ? void 0
                                                                                : e.twitterLink
                                                                            )
                                                                              ? (0,
                                                                                a.jsx)(
                                                                                  m(),
                                                                                  {
                                                                                    href: e.twitterLink,
                                                                                    target:
                                                                                      "_blank",
                                                                                    children:
                                                                                      (0,
                                                                                      a.jsx)(
                                                                                        "img",
                                                                                        {
                                                                                          className:
                                                                                            "mx-2 small-icon",
                                                                                          src: "".concat(
                                                                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/twiter-light-img.svg"
                                                                                          ),
                                                                                          alt: "twiter-img",
                                                                                          unoptimized:
                                                                                            !0,
                                                                                        }
                                                                                      ),
                                                                                  }
                                                                                )
                                                                              : "",
                                                                            (
                                                                              null ==
                                                                              e
                                                                                ? void 0
                                                                                : e.linkdinLink
                                                                            )
                                                                              ? (0,
                                                                                a.jsx)(
                                                                                  m(),
                                                                                  {
                                                                                    href: e.linkdinLink,
                                                                                    target:
                                                                                      "_blank",
                                                                                    children:
                                                                                      (0,
                                                                                      a.jsx)(
                                                                                        "img",
                                                                                        {
                                                                                          src: "".concat(
                                                                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/linkdin-light-img.svg"
                                                                                          ),
                                                                                          className:
                                                                                            "small-icons",
                                                                                          alt: "twiter-img",
                                                                                          unoptimized:
                                                                                            !0,
                                                                                        }
                                                                                      ),
                                                                                  }
                                                                                )
                                                                              : "",
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, a.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "team_role h6 m-0 text-start",
                                                                  children:
                                                                    null == e
                                                                      ? void 0
                                                                      : e.role,
                                                                }
                                                              ),
                                                              (0, a.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "team_member_name m-0 orbitron-txt h2 text-start py-2",
                                                                  children:
                                                                    null == e
                                                                      ? void 0
                                                                      : e.name,
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  },
                                                  t
                                                ),
                                              })
                                            ),
                                    }),
                                  }),
                                }),
                                (0, a.jsxs)("p", {
                                  className:
                                    "buttonGroup d-flex align-items-center justify-content-center gap-3",
                                  children: [
                                    (0, a.jsx)("img", {
                                      role: "button",
                                      src: "".concat(
                                        "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/prev-icon.svg"
                                      ),
                                      alt: "COOL CAT",
                                      onClick: () => {
                                        T((e) => e + 72),
                                          0 == U ? J(X.length - 1) : J(U - 1);
                                      },
                                    }),
                                    (0, a.jsx)("img", {
                                      role: "button",
                                      src: "".concat(
                                        "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/next-icon.svg"
                                      ),
                                      alt: "COOL CAT",
                                      onClick: () => {
                                        T((e) => e - 72),
                                          U < X.length - 1
                                            ? J((e) => e + 1)
                                            : J(0);
                                      },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "col-lg-5 text-lg-start text-center",
                              "data-aos": "fade-up",
                              children: [
                                X.map((e, t) =>
                                  (0, a.jsx)(a.Fragment, {
                                    children:
                                      U == t &&
                                      (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          (0, a.jsx)("h1", {
                                            className:
                                              "orbitron-txt d-lg-block d-none",
                                            children: e.name,
                                          }),
                                          (0, a.jsx)("p", {
                                            className: "metrophobic-txt my-4",
                                            children: e.content,
                                          }),
                                        ],
                                      }),
                                  })
                                ),
                                (0, a.jsxs)("div", {
                                  className:
                                    "d-flex justify-content-lg-start justify-content-center align-items-baseline",
                                  children: [
                                    (
                                      null === (e = X[U]) || void 0 === e
                                        ? void 0
                                        : e.instagramLink
                                    )
                                      ? (0, a.jsx)(m(), {
                                          href:
                                            null === (t = X[U]) || void 0 === t
                                              ? void 0
                                              : t.instagramLink,
                                          target: "_blank",
                                          children: (0, a.jsx)("img", {
                                            className: "mx-2 small-icon",
                                            src: "".concat(
                                              "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/instagram-light-img.svg"
                                            ),
                                            alt: "twiter-img",
                                            unoptimized: !0,
                                          }),
                                        })
                                      : "",
                                    (
                                      null === (i = X[U]) || void 0 === i
                                        ? void 0
                                        : i.twitterLink
                                    )
                                      ? (0, a.jsx)(m(), {
                                          href:
                                            null === (l = X[U]) || void 0 === l
                                              ? void 0
                                              : l.twitterLink,
                                          target: "_blank",
                                          children: (0, a.jsx)("img", {
                                            className: "mx-2 small-icon",
                                            src: "".concat(
                                              "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/twiter-light-img.svg"
                                            ),
                                            alt: "twiter-img",
                                            unoptimized: !0,
                                          }),
                                        })
                                      : "",
                                    (
                                      null === (h = X[U]) || void 0 === h
                                        ? void 0
                                        : h.linkdinLink
                                    )
                                      ? (0, a.jsx)(m(), {
                                          href:
                                            null === (b = X[U]) || void 0 === b
                                              ? void 0
                                              : b.linkdinLink,
                                          target: "_blank",
                                          children: (0, a.jsx)("img", {
                                            src: "".concat(
                                              "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/linkdin-light-img.svg"
                                            ),
                                            className: "small-icons",
                                            alt: "twiter-img",
                                            unoptimized: !0,
                                          }),
                                        })
                                      : "",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "container-fluid px-sm-5 px-md-5 d-none d-lg-block learn-more-sec-body",
                      children: (0, a.jsx)("div", {
                        className:
                          "row px-0 my-5 mx-2 d-flex justify-content-center align-items-center learn_more_section",
                        "data-aos": "fade-down",
                        children: (0, a.jsxs)("div", {
                          className:
                            "col-lg-8 col-12 learn-more-sec p-4 d-flex justify-content-evenly align-items-center cursor-pointer",
                          onClick: () => {
                            window.location.href = "/learn-more";
                          },
                          children: [
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h2", {
                                  className: "metrophobic-txt display-3",
                                  children: "Learn More",
                                }),
                                (0, a.jsx)("p", {
                                  className: "my-2",
                                  children:
                                    "Take a dive into the technical foundations of Hex AI with our Litepaper, Roadmap and more…",
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              children: (0, a.jsx)(d(), {
                                src: "".concat(
                                  "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/right-arrow.svg"
                                ),
                                className: "right-arrow-img",
                                alt: "right-img",
                                height: 100,
                                width: 100,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "row justify-content-center m-0 py-5 mySwiperMainContainer",
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "text-center orbitron-txt text-center display-6 padding-top-bottom-partners",
                          "data-aos": "zoom-in-down",
                          children: "Our Partners",
                        }),
                        (0, a.jsx)("div", {
                          className: "col-12",
                          ref: _,
                          children: (0, a.jsx)("div", {
                            ref: C,
                            children: (0, a.jsxs)(p.tq, {
                              direction: "vertical",
                              slidesPerView: 1,
                              spaceBetween: 30,
                              touchReleaseOnEdges: !0,
                              mousewheel: {
                                forceToAxis: !0,
                                sensitivity: 1,
                                releaseOnEdges: !0,
                              },
                              pagination: {
                                clickable: !0,
                                renderBullet: function (e, t) {
                                  return (
                                    '<span class="' +
                                    t +
                                    '">0' +
                                    (e + 1) +
                                    "</span>"
                                  );
                                },
                              },
                              modules: [x.Gk, x.tl],
                              className: "mySwiper-about",
                              children: [
                                (0, a.jsx)(p.o5, {
                                  children: (0, a.jsx)("div", {
                                    children: (0, a.jsx)("div", {
                                      className: "slide-partners",
                                      children: (0, a.jsxs)("div", {
                                        className: "row m-0 p-0",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "col-lg-10 text-lg-start text-center",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className: "pt-5 pb-3 py-lg-5",
                                                children: (0, a.jsx)("img", {
                                                  src: "".concat(
                                                    "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/Omani-big-logo.svg"
                                                  ),
                                                  alt: "About Omni Group",
                                                  unoptimized: !0,
                                                  width: 100,
                                                  height: 100,
                                                  className: "slider-image",
                                                }),
                                              }),
                                              (0, a.jsx)("h2", {
                                                className: "metrophobic-txt",
                                                children: "About Omni Group",
                                              }),
                                              (0, a.jsx)("p", {
                                                className:
                                                  "metrophobic-txt slider-content",
                                                children:
                                                  "Propel your business forward with our innovation, strategy, and tailored marketing services. We craft, nurture, and elevate your businesses to help reach its highest potential. Achieve your goals and see the results you’ve always dreamed of.",
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "col-lg-2",
                                            children: (0, a.jsxs)("div", {
                                              className:
                                                "partners-social-icons justify-content-center",
                                              children: [
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "36",
                                                    height: "36",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-1.svg"
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "35",
                                                    height: "35",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-2.svg"
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "35",
                                                    height: "35",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-3.svg"
                                                    ),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                                (0, a.jsx)(p.o5, {
                                  children: (0, a.jsx)("div", {
                                    children: (0, a.jsx)("div", {
                                      className: "slide-partners",
                                      children: (0, a.jsxs)("div", {
                                        className: "row m-0 p-0",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "col-lg-10 text-lg-start text-center",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className: "pt-5 pb-3 py-lg-5",
                                                children: (0, a.jsx)("img", {
                                                  src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/Neuro Chain.svg",
                                                  alt: "About Neuro Chain",
                                                  unoptimized: !0,
                                                  width: 100,
                                                  height: 100,
                                                  className: "slider-image",
                                                }),
                                              }),
                                              (0, a.jsx)("h2", {
                                                className: "metrophobic-txt",
                                                children: "About Neuro Chain",
                                              }),
                                              (0, a.jsx)("p", {
                                                className:
                                                  "metrophobic-txt slider-content",
                                                children:
                                                  "NeuroChain is a blockchain platform that utilizes fast, self-learning bots to manage the network. These bots collaborate to solve problems and propose solutions, ultimately aiming for autonomous decision-making.",
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "col-lg-2",
                                            children: (0, a.jsxs)("div", {
                                              className:
                                                "partners-social-icons justify-content-center",
                                              children: [
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "36",
                                                    height: "36",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-1.svg"
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "35",
                                                    height: "35",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-2.svg"
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "35",
                                                    height: "35",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-3.svg"
                                                    ),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                                (0, a.jsx)(p.o5, {
                                  children: (0, a.jsx)("div", {
                                    children: (0, a.jsx)("div", {
                                      className: "slide-partners",
                                      children: (0, a.jsxs)("div", {
                                        className: "row m-0 p-0",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "col-lg-10 text-lg-start text-center",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className: "pt-5 pb-3 py-lg-5",
                                                children: (0, a.jsx)("img", {
                                                  unoptimized: !0,
                                                  width: 100,
                                                  height: 100,
                                                  className: "slider-image",
                                                  src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/ChainSwap.webp",
                                                  alt: "About ChainSwap",
                                                }),
                                              }),
                                              (0, a.jsx)("h2", {
                                                className: "metrophobic-txt",
                                                children: "About ChainSwap",
                                              }),
                                              (0, a.jsx)("p", {
                                                className:
                                                  "metrophobic-txt slider-content",
                                                children:
                                                  "ChainSwap aims to be the central hub for all smart chains, allowing users to easily swap assets and access applications across different blockchains. It goes beyond existing solutions by offering higher swap limits, seamless onboarding for new tokens, and an intermediary chain that connects everything in one place.",
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "col-lg-2",
                                            children: (0, a.jsxs)("div", {
                                              className:
                                                "partners-social-icons justify-content-center",
                                              children: [
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "36",
                                                    height: "36",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-1.svg"
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "35",
                                                    height: "35",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-2.svg"
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "35",
                                                    height: "35",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-3.svg"
                                                    ),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                                (0, a.jsx)(p.o5, {
                                  children: (0, a.jsx)("div", {
                                    children: (0, a.jsx)("div", {
                                      className: "slide-partners",
                                      children: (0, a.jsxs)("div", {
                                        className: "row m-0 p-0",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "col-lg-10 text-lg-start text-center",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className: "pt-5 pb-3 py-lg-5",
                                                children: (0, a.jsx)("img", {
                                                  src: "".concat(
                                                    "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/MetaTrust.svg"
                                                  ),
                                                  alt: "About MetaTrust",
                                                  unoptimized: !0,
                                                  width: 100,
                                                  height: 100,
                                                  className: "slider-image",
                                                }),
                                              }),
                                              (0, a.jsx)("h2", {
                                                className: "metrophobic-txt",
                                                children: "About MetaTrust",
                                              }),
                                              (0, a.jsx)("p", {
                                                className:
                                                  "metrophobic-txt slider-content",
                                                children:
                                                  "MetaTrust Labs, founded by security experts from Nanyang Technological University, Singapore, offers AI-powered tools and audits to secure Web3 projects. Their mission is to empower developers with a safe development environment for building the future of Web3.",
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "col-lg-2",
                                            children: (0, a.jsxs)("div", {
                                              className:
                                                "partners-social-icons justify-content-center",
                                              children: [
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "36",
                                                    height: "36",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-1.svg"
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "35",
                                                    height: "35",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-2.svg"
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "35",
                                                    height: "35",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-3.svg"
                                                    ),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                                (0, a.jsx)(p.o5, {
                                  children: (0, a.jsx)("div", {
                                    children: (0, a.jsx)("div", {
                                      className: "slide-partners",
                                      children: (0, a.jsxs)("div", {
                                        className: "row m-0 p-0",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "col-lg-10 text-lg-start text-center",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className: "pt-5 pb-3 py-lg-5",
                                                children: (0, a.jsx)("img", {
                                                  src: "".concat(
                                                    "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/moontropica.svg"
                                                  ),
                                                  alt: "About MoonTropica",
                                                  unoptimized: !0,
                                                  width: 100,
                                                  height: 100,
                                                  className: "slider-image",
                                                }),
                                              }),
                                              (0, a.jsx)("h2", {
                                                className: "metrophobic-txt",
                                                children: "About MoonTropica",
                                              }),
                                              (0, a.jsx)("p", {
                                                className:
                                                  "metrophobic-txt slider-content",
                                                children:
                                                  "Moon Tropica is a competitive battle arena game with diverse modes. Players fight together or solo to upgrade their characters and collect valuable items, all within a vibrant and exciting game world.",
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "col-lg-2",
                                            children: (0, a.jsxs)("div", {
                                              className:
                                                "partners-social-icons justify-content-center",
                                              children: [
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "36",
                                                    height: "36",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-1.svg"
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "35",
                                                    height: "35",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-2.svg"
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "35",
                                                    height: "35",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-3.svg"
                                                    ),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                                (0, a.jsx)(p.o5, {
                                  children: (0, a.jsx)("div", {
                                    children: (0, a.jsx)("div", {
                                      className: "slide-partners",
                                      children: (0, a.jsxs)("div", {
                                        className: "row m-0 p-0",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "col-lg-10 text-lg-start text-center",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className: "pt-5 pb-3 py-lg-5",
                                                children: (0, a.jsx)("img", {
                                                  src: "".concat(
                                                    "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/Three Protocol.svg"
                                                  ),
                                                  alt: "About Three Protocol",
                                                  unoptimized: !0,
                                                  width: 100,
                                                  height: 100,
                                                  className: "slider-image",
                                                }),
                                              }),
                                              (0, a.jsx)("h2", {
                                                className: "metrophobic-txt",
                                                children:
                                                  "About Three Protocol",
                                              }),
                                              (0, a.jsx)("p", {
                                                className:
                                                  "metrophobic-txt slider-content",
                                                children:
                                                  "Three Protocol aims to revolutionize online marketplaces with AI-powered matching. Their system uses various neural network techniques to analyze user queries, product details, and reviews to create a highly accurate matching system.",
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "col-lg-2",
                                            children: (0, a.jsxs)("div", {
                                              className:
                                                "partners-social-icons justify-content-center",
                                              children: [
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "36",
                                                    height: "36",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-1.svg"
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "35",
                                                    height: "35",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-2.svg"
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "35",
                                                    height: "35",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-3.svg"
                                                    ),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                                (0, a.jsx)(p.o5, {
                                  children: (0, a.jsx)("div", {
                                    children: (0, a.jsx)("div", {
                                      className: "slide-partners",
                                      children: (0, a.jsxs)("div", {
                                        className: "row m-0 p-0",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "col-lg-10 text-lg-start text-center",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className: "pt-5 pb-3 py-lg-5",
                                                children: (0, a.jsx)("img", {
                                                  src: "".concat(
                                                    "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/kelp.png"
                                                  ),
                                                  alt: "About Kelp",
                                                  unoptimized: !0,
                                                  width: 100,
                                                  height: 100,
                                                  className: "slider-image",
                                                }),
                                              }),
                                              (0, a.jsx)("h2", {
                                                className: "metrophobic-txt",
                                                children: "About Kelp",
                                              }),
                                              (0, a.jsx)("p", {
                                                className:
                                                  "metrophobic-txt slider-content",
                                                children:
                                                  "Kelp is a cryptocurrency designed to address volatility issues by using monetary policy to adjust supply and achieve price stability. It leverages a combination of algorithmic indicators and market mechanisms to influence market behavior and achieve its goals.",
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "col-lg-2",
                                            children: (0, a.jsxs)("div", {
                                              className:
                                                "partners-social-icons justify-content-center",
                                              children: [
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "36",
                                                    height: "36",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-1.svg"
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "35",
                                                    height: "35",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-2.svg"
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(m(), {
                                                  href: "/about#",
                                                  children: (0, a.jsx)("img", {
                                                    alt: "social-icon",
                                                    loading: "lazy",
                                                    width: "35",
                                                    height: "35",
                                                    decoding: "async",
                                                    "data-nimg": "1",
                                                    className:
                                                      "partners-social-icon",
                                                    style: {
                                                      color: "transparent",
                                                    },
                                                    src: "".concat(
                                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/social-partners-icon-3.svg"
                                                    ),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "container-fluid px-3 px-md-5 mt-5 join-community-section pd-top",
                      children: (0, a.jsxs)("div", {
                        className:
                          "row m-0 p-0 d-flex justify-content-center align-items-start join-discord-sec padding-responsive w-100",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "col-lg-5 p-4 d-flex justify-content-start align-items-start text-lg-left text-start flex-column",
                            "data-aos": "zoom-in-down",
                            children: [
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "col-lg-3 buy-hash-sec-card mx-5 p-4 d-flex justify-content-evenly align-items-center border-color flex-column text-center p-4 center-community-box",
                            "data-aos": "zoom-in-up",
                            children: [
                              (0, a.jsx)("h4", {
                                className: "orbitron-txt",
                                children: "Buy $HEXAI",
                              }),
                              (0, a.jsxs)(m(), {
                                href: "https://app.uniswap.org/explore/tokens/ethereum/0xttttttttttttttttttttttttttttt",
                                target: "_blank",
                                children: [
                                  (0, a.jsx)("video", {
                                    muted: !0,
                                    loop: !0,
                                    autoPlay: !0,
                                    id: "hash_coin_option",
                                    className: "my-3",
                                    style: { width: "100%", maxWidth: "170px" },
                                    playsInline: !0,
                                    children: (0, a.jsx)("source", {
                                      src: "".concat(
                                        "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/hash_coin_option.mp4"
                                      ),
                                      type: "video/mp4",
                                    }),
                                  }),
                                  (0, a.jsx)("button", {
                                    className: "text-".concat(
                                      K ? "white" : "black",
                                      " custom-btn orbitron-txt px-1"
                                    ),
                                    children: "Buy Token",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "container-fluid px-lg-0",
                      children: (0, a.jsxs)("div", {
                        className:
                          "row mt-lg-5 p-0 m-0 d-flex justify-content-center align-items-center node-rental-sec py-5",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "col-lg-5 px-2 px-lg-5 py-5 node-rental-sec-left-".concat(
                                !0 == K ? "white" : "black",
                                " d-flex justify-content-lg-end justify-content-center text-center align-items-center responsive-img"
                              ),
                            children: (0, a.jsx)("video", {
                              muted: !0,
                              loop: !0,
                              autoPlay: !0,
                              id: "node_rental_new",
                              style: { width: "100%", maxWidth: "512px" },
                              playsInline: !0,
                              children: (0, a.jsx)("source", {
                                src: "".concat(
                                  "https://hashai.s3.eu-west-2.amazonaws.com/storage/about/node_rental_new.mp4"
                                ),
                                type: "video/mp4",
                              }),
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "col-lg-7 px-2 px-lg-5 node-rental-sec-right text-center text-lg-start",
                            "data-aos": "fade-up",
                            children: [
                              (0, a.jsx)("h2", {
                                className:
                                  "orbitron-txt display-5 mt-5 mt-lg-0",
                                children: "Node Rental",
                              }),
                              (0, a.jsx)("p", {
                                className: "metrophobic-txt mb-4",
                                children:
                                  "Power your projects with our secure, reliable, efficient nodes! With flexible hourly rates or fixed term leasing for longer projects. We’re your perfect GPU power partner. Explore our options and choose the best solution for you.",
                              })
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    28911: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        8802, 1664, 1110, 5675, 3218, 4585, 3059, 9123, 2116, 5823, 2888, 9774,
        179,
      ],
      function () {
        return e((e.s = 81233));
      }
    ),
      (_N_E = e.O());
  },
]);
