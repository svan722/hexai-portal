(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4601],
    {
        15450: function (l, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/solutions",
                function () {
                    return t(97082);
                },
            ]);
        },
        97082: function (l, e, t) {
            "use strict";
            t.r(e);
            var r = t(85893),
                s = t(67294),
                o = t(93962);
            t(36501);
            var i = t(84769);
            t(70497), t(26663);
            var n = t(41664),
                c = t.n(n),
                d = t(2711),
                a = t.n(d);
            t(37611),
                (e.default = () => {
                    let [l, e] = (0, s.useState)(!1),
                    [t, n] = (0, s.useState)(0),
                    [d, x] = (0, s.useState)(0);
                    (0, s.useEffect)(() => {
                        e("true" === localStorage.getItem("darkMode"));
                        let l = (l) => {
                            e(l.detail);
                        };
                        return (
                            window.addEventListener("darkModeChange", l),
                            a().init({
                                duration: 600
                            }),
                            () => {
                                window.removeEventListener("darkModeChange", l);
                            }
                        );
                    }, []),
                    (0, s.useEffect)(() => {
                        let l = () => {
                            x(window.innerWidth);
                        };
                        return (
                            x(window.innerWidth),
                            window.addEventListener("resize", l),
                            () => {
                                window.removeEventListener("resize", l);
                            }
                        );
                    }, []),
                    (0, s.useEffect)(() => {
                        let l = document.getElementsByClassName(
                                "node_rental_section_1"
                            )[0],
                            e = document.getElementsByClassName(
                                "sec-description-body-1"
                            )[0],
                            t = document.getElementsByClassName(
                                "sec-description-body-3"
                            )[0],
                            r = document.getElementsByClassName(
                                "sec-description-body-4"
                            )[0],
                            s = document.getElementsByClassName(
                                "sec-description-body-5"
                            )[0],
                            o = document.getElementsByClassName(
                                "sec-description-body-6"
                            )[0];
                        (e.style.boxShadow = "#000000 0px -100px 50px 0px"),
                        (t.style.boxShadow = "#000000 0px -100px 50px 0px"),
                        (r.style.boxShadow = "#000000 0px -100px 50px 0px"),
                        (s.style.boxShadow = "#000000 0px -100px 50px 0px"),
                        (o.style.boxShadow = "#000000 0px -100px 50px 0px");
                        let i = () => {
                            d <= 500 ?
                                window.scrollY >= 900 && window.scrollY <= 1700 ?
                                ((e.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 900 && window.scrollY <= 1e3 ?
                                    ((l.style.filter = "blur(1px)"),
                                        (e.style.filter = "blur(5px)")) :
                                    window.scrollY >= 1e3 && window.scrollY <= 1100 ?
                                    ((l.style.filter = "blur(3px)"),
                                        (e.style.filter = "blur(3px)")) :
                                    window.scrollY >= 1100 && window.scrollY <= 1300 ?
                                    ((l.style.filter = "blur(5px)"),
                                        (e.style.filter = "blur(1px)")) :
                                    window.scrollY >= 1300 &&
                                    window.scrollY <= 1700 &&
                                    ((l.style.filter = "blur(9px)"),
                                        (e.style.filter = "blur(0px)"))) :
                                window.scrollY >= 1800 && window.scrollY <= 2600 ?
                                ((t.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 1700 && window.scrollY <= 2e3 ?
                                    ((e.style.filter = "blur(1px)"),
                                        (t.style.filter = "blur(5px)")) :
                                    window.scrollY >= 2e3 && window.scrollY <= 2200 ?
                                    ((e.style.filter = "blur(3px)"),
                                        (t.style.filter = "blur(3px)")) :
                                    window.scrollY >= 2200 && window.scrollY <= 2400 ?
                                    ((e.style.filter = "blur(5px)"),
                                        (t.style.filter = "blur(1px)")) :
                                    window.scrollY >= 2400 &&
                                    window.scrollY <= 2600 &&
                                    ((e.style.filter = "blur(9px)"),
                                        (t.style.filter = "blur(0px)"))) :
                                window.scrollY >= 2700 && window.scrollY <= 3500 ?
                                ((r.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 2600 && window.scrollY <= 2800 ?
                                    ((t.style.filter = "blur(1px)"),
                                        (r.style.filter = "blur(5px)")) :
                                    window.scrollY >= 2800 && window.scrollY <= 3e3 ?
                                    ((t.style.filter = "blur(3px)"),
                                        (r.style.filter = "blur(3px)")) :
                                    window.scrollY >= 3e3 && window.scrollY <= 3200 ?
                                    ((t.style.filter = "blur(5px)"),
                                        (r.style.filter = "blur(1px)")) :
                                    window.scrollY >= 3200 &&
                                    window.scrollY <= 3500 &&
                                    ((t.style.filter = "blur(9px)"),
                                        (r.style.filter = "blur(0px)"))) :
                                window.scrollY >= 3400 && window.scrollY <= 4400 ?
                                ((s.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 3500 && window.scrollY <= 3600 ?
                                    ((r.style.filter = "blur(1px)"),
                                        (s.style.filter = "blur(5px)")) :
                                    window.scrollY >= 3600 && window.scrollY <= 3700 ?
                                    ((r.style.filter = "blur(3px)"),
                                        (s.style.filter = "blur(3px)")) :
                                    window.scrollY >= 3700 &&
                                    window.scrollY <= 4400 &&
                                    ((r.style.filter = "blur(5px)"),
                                        (s.style.filter = "blur(0px)"))) :
                                window.scrollY >= 4300 && window.scrollY <= 5300 ?
                                ((o.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 4400 && window.scrollY <= 4500 ?
                                    ((s.style.filter = "blur(1px)"),
                                        (o.style.filter = "blur(5px)")) :
                                    window.scrollY >= 4500 && window.scrollY <= 4700 ?
                                    ((s.style.filter = "blur(3px)"),
                                        (o.style.filter = "blur(3px)")) :
                                    window.scrollY >= 4700 && window.scrollY <= 5e3 ?
                                    ((s.style.filter = "blur(5px)"),
                                        (o.style.filter = "blur(1px)")) :
                                    window.scrollY >= 5e3 &&
                                    window.scrollY <= 5300 &&
                                    ((s.style.filter = "blur(10px)"),
                                        (o.style.filter = "blur(0px)"))) :
                                ((l.style.filter = "blur(0px)"),
                                    (e.style.filter = "blur(0px)"),
                                    (t.style.filter = "blur(0px)"),
                                    (r.style.filter = "blur(0px)"),
                                    (s.style.filter = "blur(0px)")) :
                                d <= 1475 && d >= 501 ?
                                window.scrollY >= 800 && window.scrollY <= 1600 ?
                                ((e.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 800 && window.scrollY <= 900 ?
                                    ((l.style.filter = "blur(1px)"),
                                        (e.style.filter = "blur(5px)")) :
                                    window.scrollY >= 900 && window.scrollY <= 1100 ?
                                    ((l.style.filter = "blur(3px)"),
                                        (e.style.filter = "blur(3px)")) :
                                    window.scrollY >= 1100 && window.scrollY <= 1300 ?
                                    ((l.style.filter = "blur(5px)"),
                                        (e.style.filter = "blur(1px)")) :
                                    window.scrollY >= 1300 &&
                                    window.scrollY <= 1600 &&
                                    ((l.style.filter = "blur(9px)"),
                                        (e.style.filter = "blur(0px)"))) :
                                window.scrollY >= 1700 && window.scrollY <= 2500 ?
                                ((t.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 1700 && window.scrollY <= 1800 ?
                                    ((e.style.filter = "blur(1px)"),
                                        (t.style.filter = "blur(5px)")) :
                                    window.scrollY >= 1800 && window.scrollY <= 2e3 ?
                                    ((e.style.filter = "blur(3px)"),
                                        (t.style.filter = "blur(3px)")) :
                                    window.scrollY >= 2e3 && window.scrollY <= 2200 ?
                                    ((e.style.filter = "blur(5px)"),
                                        (t.style.filter = "blur(1px)")) :
                                    window.scrollY >= 2200 &&
                                    window.scrollY <= 2500 &&
                                    ((e.style.filter = "blur(9px)"),
                                        (t.style.filter = "blur(0px)"))) :
                                window.scrollY >= 2600 && window.scrollY <= 3400 ?
                                ((r.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 2600 && window.scrollY <= 2600 ?
                                    ((t.style.filter = "blur(1px)"),
                                        (r.style.filter = "blur(5px)")) :
                                    window.scrollY >= 2600 && window.scrollY <= 2800 ?
                                    ((t.style.filter = "blur(3px)"),
                                        (r.style.filter = "blur(3px)")) :
                                    window.scrollY >= 2800 && window.scrollY <= 3e3 ?
                                    ((t.style.filter = "blur(5px)"),
                                        (r.style.filter = "blur(1px)")) :
                                    window.scrollY >= 3e3 &&
                                    window.scrollY <= 3400 &&
                                    ((t.style.filter = "blur(9px)"),
                                        (r.style.filter = "blur(0px)"))) :
                                window.scrollY >= 3500 && window.scrollY <= 4200 ?
                                ((s.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 3500 && window.scrollY <= 3600 ?
                                    ((r.style.filter = "blur(1px)"),
                                        (s.style.filter = "blur(5px)")) :
                                    window.scrollY >= 3600 && window.scrollY <= 3700 ?
                                    ((r.style.filter = "blur(3px)"),
                                        (s.style.filter = "blur(3px)")) :
                                    window.scrollY >= 3700 && window.scrollY <= 3900 ?
                                    ((r.style.filter = "blur(5px)"),
                                        (s.style.filter = "blur(1px)")) :
                                    window.scrollY >= 3900 &&
                                    window.scrollY <= 4200 &&
                                    ((r.style.filter = "blur(9px)"),
                                        (s.style.filter = "blur(0px)"))) :
                                window.scrollY >= 4300 && window.scrollY <= 5100 ?
                                ((o.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 4300 && window.scrollY <= 4400 ?
                                    ((s.style.filter = "blur(1px)"),
                                        (o.style.filter = "blur(5px)")) :
                                    window.scrollY >= 4400 && window.scrollY <= 4600 ?
                                    ((s.style.filter = "blur(3px)"),
                                        (o.style.filter = "blur(3px)")) :
                                    window.scrollY >= 4600 && window.scrollY <= 4700 ?
                                    ((s.style.filter = "blur(5px)"),
                                        (o.style.filter = "blur(1px)")) :
                                    window.scrollY >= 4700 &&
                                    window.scrollY <= 5100 &&
                                    ((s.style.filter = "blur(9px)"),
                                        (o.style.filter = "blur(0px)"))) :
                                ((l.style.filter = "blur(0px)"),
                                    (e.style.filter = "blur(0px)"),
                                    (t.style.filter = "blur(0px)"),
                                    (r.style.filter = "blur(0px)"),
                                    (s.style.filter = "blur(0px)")) :
                                d <= 1600 && d >= 1475 ?
                                window.scrollY >= 800 && window.scrollY <= 1500 ?
                                ((e.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 800 && window.scrollY <= 800 ?
                                    ((l.style.filter = "blur(1px)"),
                                        (e.style.filter = "blur(5px)")) :
                                    window.scrollY >= 800 && window.scrollY <= 1e3 ?
                                    ((l.style.filter = "blur(3px)"),
                                        (e.style.filter = "blur(3px)")) :
                                    window.scrollY >= 1e3 && window.scrollY <= 1300 ?
                                    ((l.style.filter = "blur(5px)"),
                                        (e.style.filter = "blur(1px)")) :
                                    window.scrollY >= 1300 &&
                                    window.scrollY <= 1500 &&
                                    ((l.style.filter = "blur(9px)"),
                                        (e.style.filter = "blur(0px)"))) :
                                window.scrollY >= 1600 && window.scrollY <= 2300 ?
                                ((t.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 1600 && window.scrollY <= 1700 ?
                                    ((e.style.filter = "blur(1px)"),
                                        (t.style.filter = "blur(5px)")) :
                                    window.scrollY >= 1700 && window.scrollY <= 2e3 ?
                                    ((e.style.filter = "blur(3px)"),
                                        (t.style.filter = "blur(3px)")) :
                                    window.scrollY >= 2e3 && window.scrollY <= 2100 ?
                                    ((e.style.filter = "blur(5px)"),
                                        (t.style.filter = "blur(1px)")) :
                                    window.scrollY >= 2100 &&
                                    window.scrollY <= 2300 &&
                                    ((e.style.filter = "blur(9px)"),
                                        (t.style.filter = "blur(0px)"))) :
                                window.scrollY >= 2400 && window.scrollY <= 3100 ?
                                ((r.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 2400 && window.scrollY <= 2500 ?
                                    ((t.style.filter = "blur(1px)"),
                                        (r.style.filter = "blur(5px)")) :
                                    window.scrollY >= 2500 && window.scrollY <= 2700 ?
                                    ((t.style.filter = "blur(3px)"),
                                        (r.style.filter = "blur(3px)")) :
                                    window.scrollY >= 2700 && window.scrollY <= 2900 ?
                                    ((t.style.filter = "blur(5px)"),
                                        (r.style.filter = "blur(1px)")) :
                                    window.scrollY >= 2900 &&
                                    window.scrollY <= 3100 &&
                                    ((t.style.filter = "blur(9px)"),
                                        (r.style.filter = "blur(0px)"))) :
                                window.scrollY >= 3200 && window.scrollY <= 4e3 ?
                                ((s.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 3200 && window.scrollY <= 3300 ?
                                    ((r.style.filter = "blur(1px)"),
                                        (s.style.filter = "blur(5px)")) :
                                    window.scrollY >= 3300 && window.scrollY <= 3500 ?
                                    ((r.style.filter = "blur(3px)"),
                                        (s.style.filter = "blur(3px)")) :
                                    window.scrollY >= 3500 && window.scrollY <= 3700 ?
                                    ((r.style.filter = "blur(5px)"),
                                        (s.style.filter = "blur(1px)")) :
                                    window.scrollY >= 3700 &&
                                    window.scrollY <= 4e3 &&
                                    ((r.style.filter = "blur(9px)"),
                                        (s.style.filter = "blur(0px)"))) :
                                window.scrollY >= 4100 && window.scrollY <= 4700 ?
                                ((o.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 4100 && window.scrollY <= 4300 ?
                                    ((s.style.filter = "blur(1px)"),
                                        (o.style.filter = "blur(4px)")) :
                                    window.scrollY >= 4300 && window.scrollY <= 4400 ?
                                    ((s.style.filter = "blur(3px)"),
                                        (o.style.filter = "blur(2px)")) :
                                    window.scrollY >= 4400 &&
                                    window.scrollY <= 4700 &&
                                    ((s.style.filter = "blur(9px)"),
                                        (o.style.filter = "blur(0px)"))) :
                                ((l.style.filter = "blur(0px)"),
                                    (e.style.filter = "blur(0px)"),
                                    (t.style.filter = "blur(0px)"),
                                    (r.style.filter = "blur(0px)"),
                                    (s.style.filter = "blur(0px)")) :
                                window.scrollY >= 1e3 && window.scrollY <= 1800 ?
                                ((e.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 1e3 && window.scrollY <= 1100 ?
                                    ((l.style.filter = "blur(1px)"),
                                        (e.style.filter = "blur(5px)")) :
                                    window.scrollY >= 1100 && window.scrollY <= 1200 ?
                                    ((l.style.filter = "blur(3px)"),
                                        (e.style.filter = "blur(3px)")) :
                                    window.scrollY >= 1200 && window.scrollY <= 1300 ?
                                    ((l.style.filter = "blur(5px)"),
                                        (e.style.filter = "blur(1px)")) :
                                    window.scrollY >= 1300 &&
                                    window.scrollY <= 1800 &&
                                    ((l.style.filter = "blur(9px)"),
                                        (e.style.filter = "blur(0px)"))) :
                                window.scrollY >= 2050 && window.scrollY <= 2700 ?
                                ((t.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 2050 && window.scrollY <= 2200 ?
                                    ((e.style.filter = "blur(1px)"),
                                        (t.style.filter = "blur(5px)")) :
                                    window.scrollY >= 2200 && window.scrollY <= 2300 ?
                                    ((e.style.filter = "blur(3px)"),
                                        (t.style.filter = "blur(3px)")) :
                                    window.scrollY >= 2300 && window.scrollY <= 2400 ?
                                    ((e.style.filter = "blur(5px)"),
                                        (t.style.filter = "blur(1px)")) :
                                    window.scrollY >= 2400 &&
                                    window.scrollY <= 2700 &&
                                    ((e.style.filter = "blur(9px)"),
                                        (t.style.filter = "blur(0px)"))) :
                                window.scrollY >= 2950 && window.scrollY <= 3700 ?
                                ((r.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 3e3 && window.scrollY <= 3100 ?
                                    ((t.style.filter = "blur(1px)"),
                                        (r.style.filter = "blur(5px)")) :
                                    window.scrollY >= 3100 && window.scrollY <= 3200 ?
                                    ((t.style.filter = "blur(3px)"),
                                        (r.style.filter = "blur(3px)")) :
                                    window.scrollY >= 3200 && window.scrollY <= 3300 ?
                                    ((t.style.filter = "blur(5px)"),
                                        (r.style.filter = "blur(1px)")) :
                                    window.scrollY >= 3300 &&
                                    window.scrollY <= 3700 &&
                                    ((t.style.filter = "blur(9px)"),
                                        (r.style.filter = "blur(0px)"))) :
                                window.scrollY >= 3900 && window.scrollY <= 4700 ?
                                ((s.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 3950 && window.scrollY <= 4100 ?
                                    ((r.style.filter = "blur(1px)"),
                                        (s.style.filter = "blur(5px)")) :
                                    window.scrollY >= 4100 && window.scrollY <= 4200 ?
                                    ((r.style.filter = "blur(3px)"),
                                        (s.style.filter = "blur(3px)")) :
                                    window.scrollY >= 4200 && window.scrollY <= 4300 ?
                                    ((r.style.filter = "blur(5px)"),
                                        (s.style.filter = "blur(1px)")) :
                                    window.scrollY >= 4300 &&
                                    window.scrollY <= 4700 &&
                                    ((r.style.filter = "blur(9px)"),
                                        (s.style.filter = "blur(0px)"))) :
                                window.scrollY >= 4900 && window.scrollY <= 5800 ?
                                ((o.style.boxShadow = "#000000 0px -100px 50px 0px"),
                                    window.scrollY >= 4950 && window.scrollY <= 5100 ?
                                    ((s.style.filter = "blur(1px)"),
                                        (o.style.filter = "blur(5px)")) :
                                    window.scrollY >= 5100 && window.scrollY <= 5200 ?
                                    ((s.style.filter = "blur(3px)"),
                                        (o.style.filter = "blur(3px)")) :
                                    window.scrollY >= 5200 && window.scrollY <= 5300 ?
                                    ((s.style.filter = "blur(5px)"),
                                        (o.style.filter = "blur(1px)")) :
                                    window.scrollY >= 5300 &&
                                    window.scrollY <= 5800 &&
                                    ((s.style.filter = "blur(9px)"),
                                        (o.style.filter = "blur(0px)"))) :
                                ((l.style.filter = "blur(0px)"),
                                    (e.style.filter = "blur(0px)"),
                                    (t.style.filter = "blur(0px)"),
                                    (r.style.filter = "blur(0px)"),
                                    (s.style.filter = "blur(0px)"));
                        };
                        return (
                            window.addEventListener("scroll", i),
                            () => {
                                window.removeEventListener("scroll", i);
                            }
                        );
                    }, [d]);
                    let w = () => {
                            window.open(
                                "https://pancakeswap.finance/swap?outputCurrency=0xcomingsoontoken",
                                "_blank"
                            );
                        },
                        p = () => {
                            window.location.href = "/node-rental-form";
                        },
                        u = () => {
                            window.location.href = "/hardware";
                        },
                        b = () => {
                            window.open("https://app.hexaibsc.online/", "_blank");
                        };
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(o.Z, {
                                title: "Explore Hex AI's Solutions: Your Perfect Node Power Partner",
                                metaTitle: "Discover Hex AI's Node Rentals, Leases, Purchases & Crypto Exclusives",
                                metaDescription: "Discover a world of possibilities with Hex AI! Explore our secure node rental, leasing, and purchase options. Learn about our unique community share pool and token benefits. Find the perfect solution for your crypto goals!",
                            }),
                            (0, r.jsxs)(i.Z, {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: "bg-"
                                            .concat(!0 == l ? "white" : "black", " text-")
                                            .concat(!0 == l ? "black" : "white", " solutions-sec"),
                                        children: [
                                            (0, r.jsxs)("section", {
                                                className: "heroSection home d-flex text-left align-items-start flex-column orbitron-txt",
                                                children: [
                                                    (0, r.jsx)("video", {
                                                        muted: !0,
                                                        loop: !0,
                                                        autoPlay: !0,
                                                        id: "myVideo",
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        playsInline: !0,
                                                        children: (0, r.jsx)("source", {
                                                            src: "".concat(
                                                                "https://hashai.s3.eu-west-2.amazonaws.com/storage/solutions/solution_bg.mp4"
                                                            ),
                                                            type: "video/mp4",
                                                        }),
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: "content w-100",
                                                        children: (0, r.jsx)("div", {
                                                            className: "container-fluid px-3 px-lg-5 d-flex justify-content-center",
                                                            children: (0, r.jsxs)("h1", {
                                                                className: "text-".concat(
                                                                    l ? "black" : "white",
                                                                    " main-heading-home text-center"
                                                                ),
                                                                children: [
                                                                    "Take Control of Your Future Projects With Our Node Power",
                                                                    " ",
                                                                    (0, r.jsx)("br", {}),
                                                                    (0, r.jsx)("br", {}),
                                                                    "Explore Our Solutions at Hex AI",
                                                                ],
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("section", {
                                                className: "sec-content position-relative z-1",
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: "row node_rental_section_1 m-0 p-0  first-sticky-gap",
                                                        children: (0, r.jsxs)("div", {
                                                            className: "col-lg-12 text-center position-relative top-bottom-margin",
                                                            children: [
                                                                (0, r.jsx)("h2", {
                                                                    className: "orbitron-txt h1 sec-description-body-title mobile-text",
                                                                    children: "Node Rental",
                                                                }),
                                                                (0, r.jsx)("video", {
                                                                    muted: !0,
                                                                    loop: !0,
                                                                    autoPlay: !0,
                                                                    id: "node_rental_new",
                                                                    style: {
                                                                        maxWidth: "512px",
                                                                        width: "100%"
                                                                    },
                                                                    playsInline: !0,
                                                                    children: (0, r.jsx)("source", {
                                                                        src: "".concat(
                                                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/solutions/node_rental_new.mp4"
                                                                        ),
                                                                        type: "video/mp4",
                                                                    }),
                                                                }),
                                                                (0, r.jsx)("div", {
                                                                    className: "container-styled-list container-styled-list-1 position-absolute",
                                                                    children: (0, r.jsxs)("ul", {
                                                                        class: "bg-black list-group border-color text-start",
                                                                        children: [
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "AI Computing",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Animation",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Gaming",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Graphic Rendering",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "IoT",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Mining",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "+More",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                        className: "margin-top-mobile px-lg-0 px-3 sec-description-body-1 text-center position-relative text-white mb-5 second-sticky-gap",
                                                        children: [
                                                            (0, r.jsx)("h2", {
                                                                className: "orbitron-txt h1 sec-description-body-title destop-text",
                                                                children: "Node Rental",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                className: "h6 metrophobic-txt fs-strong-600",
                                                                children: "We Are Industry Leaders in Computing Power.",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                children: "Offering you the most: Secure, Reliable, Profitable Rental and Leasing Solutions.",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                className: "m-0 h6 metrophobic-txt fs-strong-600",
                                                                children: "Our 2 Node Solution Options:",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                className: "m-0 metrophobic-txt",
                                                                children: "Short Term Hourly Renting",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                className: "metrophobic-txt",
                                                                children: "Flexible Long-term Leasing",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                className: "metrophobic-txt",
                                                                children: "Hex AI has the most flexible integration of nodes, with a wide range of applications.",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                className: "metrophobic-txt",
                                                                children: "With our Node Power, the possibilities are endless!",
                                                            })
                                                        ],
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: "row node_rental_section_2 m-0 p-0 sec-description-body-3 third-sticky-gap",
                                                        children: (0, r.jsxs)("div", {
                                                            className: "col-lg-12 text-center position-relative buy-hardware-sec padding-100",
                                                            children: [
                                                                (0, r.jsx)("h2", {
                                                                    className: "orbitron-txt h1 sec-description-body-title mobile-text",
                                                                    children: "Buy Hardware",
                                                                }),
                                                                (0, r.jsx)("video", {
                                                                    muted: !0,
                                                                    loop: !0,
                                                                    autoPlay: !0,
                                                                    id: "hardware_n",
                                                                    playsInline: !0,
                                                                    children: (0, r.jsx)("source", {
                                                                        src: "".concat(
                                                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/solutions/hardware_n.mp4"
                                                                        ),
                                                                        type: "video/mp4",
                                                                    }),
                                                                }),
                                                                (0, r.jsx)("div", {
                                                                    className: "container-styled-list container-styled-list-2 position-absolute",
                                                                    children: (0, r.jsxs)("ul", {
                                                                        class: "bg-black list-group border-color text-start",
                                                                        children: [
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Competitive Pricing",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Full Turnkey Solutions",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Global Provider",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Reliable Technology",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Remote Support",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Tried & Tested\xa0",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Trusted Expertise",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                        className: "margin-top-mobile px-lg-0 px-3 sec-description-body-2 sec-description-body-4 text-center  d-flex flex-column justify-content-center align-items-center position-relative text-white mb-5 four-sticky-gap",
                                                        children: [
                                                            (0, r.jsx)("h2", {
                                                                className: "orbitron-txt h1 sec-description-body-title destop-text",
                                                                children: "Buy Hardware",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                style: {
                                                                    maxWidth: "800px"
                                                                },
                                                                className: "metrophobic-txt",
                                                                children: "Looking for the perfect mining rig? We've got you covered, whether you're a seasoned crypto pro or just starting your journey, we are the expert partner you’ve been looking for.",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                style: {
                                                                    maxWidth: "800px"
                                                                },
                                                                className: "metrophobic-txt",
                                                                children: "From base rigs to get you started, all the way up to customizable projects with support and maintenance, we offer expert full-breadth solutions for your hardware needs.",
                                                            }),
                                                            (0, r.jsx)(c(), {
                                                                href: "/hardware",
                                                                children: (0, r.jsx)("button", {
                                                                    className: "text-".concat(
                                                                        l ? "white" : "black",
                                                                        " custom-btn orbitron-txt mb-5 my-2 px-4 text-nowrap w-auto d-inline-block"
                                                                    ),
                                                                    children: "Buy Hardware",
                                                                }),
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                className: "container-fluid",
                                                                children: (0, r.jsx)("div", {
                                                                    className: "row m-0 text-center d-flex justify-content-center align-items-center cursor-pointer",
                                                                    onClick: () => u(),
                                                                    children: (0, r.jsxs)("div", {
                                                                        "data-desc": "Buy Hardware",
                                                                        class: "col-lg-8 col-12 after-desc-body py-4 px-lg-5 px-0 h-100 hover-text",
                                                                        children: [
                                                                            (0, r.jsx)("h2", {
                                                                                class: "orbitron-txt",
                                                                                children: "Don't settle for less.",
                                                                            }),
                                                                            (0, r.jsx)("p", {
                                                                                children: "Choose Hex AI and experience the difference a trusted partner can make. Browse our selection of high-performance hardware today!",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: "row node_rental_section_3 m-0 p-0 five-sticky-gap sec-description-body-5",
                                                        children: (0, r.jsxs)("div", {
                                                            className: "col-lg-12 text-center position-relative buy-hardware-sec padding-100",
                                                            children: [
                                                                (0, r.jsx)("h2", {
                                                                    className: "orbitron-txt h1 sec-description-body-title mobile-text",
                                                                    children: "Buy Token",
                                                                }),
                                                                (0, r.jsx)("video", {
                                                                    muted: !0,
                                                                    loop: !0,
                                                                    autoPlay: !0,
                                                                    id: "hash_coin_option",
                                                                    playsInline: !0,
                                                                    children: (0, r.jsx)("source", {
                                                                        src: "".concat(
                                                                            "https://hashai.s3.eu-west-2.amazonaws.com/storage/solutions/hash_coin_option.mp4"
                                                                        ),
                                                                        type: "video/mp4",
                                                                    }),
                                                                }),
                                                                (0, r.jsx)("div", {
                                                                    className: "container-styled-list container-styled-list-3 position-absolute",
                                                                    children: (0, r.jsxs)("ul", {
                                                                        class: "bg-black list-group border-color text-start",
                                                                        children: [
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "AI-Powered",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Community Share Pool",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Data-Driven",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Evolving Project",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Expert Founding Team",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Growing Community",
                                                                            }),
                                                                            (0, r.jsx)("li", {
                                                                                className: "list-group-item",
                                                                                children: "Innovative Technology",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                        className: "sec-description-body-6 margin-top-mobile px-lg-0 px-3 sec-description-body-3 text-center  d-flex flex-column justify-content-center align-items-center position-relative text-white mb-5 six-sticky-gap",
                                                        children: [
                                                            (0, r.jsx)("h2", {
                                                                className: "orbitron-txt h1 sec-description-body-title destop-text",
                                                                children: "Buy Token",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                className: "h6 fs-weight-600 metrophobic-txt",
                                                                children: "Own a Piece of the Future: Invest in $HEXAI",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                style: {
                                                                    maxWidth: "800px"
                                                                },
                                                                className: "metrophobic-txt",
                                                                children: "Looking to take your crypto journey to the next level? Our token is your gateway to our thriving, in-demand ecosystem and exciting rewards.",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                className: "m-0 h6 fs-weight-600 metrophobic-txt",
                                                                children: "Why Invest in $HEXAI?",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                style: {
                                                                    maxWidth: "800px"
                                                                },
                                                                className: "metrophobic-txt",
                                                                children: "AI-Driven Growth: $HEXAI is empowered by Artificial Intelligence and rapidly growing. Earn a Share of our Community Mining Pool Rewards: Over $5,000 has already been distributed to token holders to date.",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                className: "metrophobic-txt",
                                                                children: "Invest in a Growing Ecosystem: Backed by innovation, cutting-edge technology, and an expert team.",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                className: "metrophobic-txt",
                                                                children: "Become a part of the Hex AI community and invest in your crypto future today!",
                                                            }),
                                                            (0, r.jsxs)("div", {
                                                                className: "row",
                                                                children: [
                                                                    (0, r.jsx)("div", {
                                                                        className: "col-lg-6 col-md-6 col-sm-6 col-6",
                                                                        children: (0, r.jsx)("button", {
                                                                            onClick: () => w(),
                                                                            className: "text-".concat(
                                                                                l ? "white" : "black",
                                                                                " custom-btn orbitron-txt mb-5 my-2 px-4 text-nowrap w-auto d-inline-block"
                                                                            ),
                                                                            children: "Buy $HEXAI",
                                                                        }),
                                                                    }),
                                                                    (0, r.jsx)("div", {
                                                                        className: "col-lg-6 col-md-6 col-sm-6 col-6",
                                                                        children: (0, r.jsx)(c(), {
                                                                            href: "/about",
                                                                            children: (0, r.jsx)("button", {
                                                                                className: "text-".concat(
                                                                                    l ? "white" : "black",
                                                                                    " custom-btn orbitron-txt mb-5 my-2 px-4 text-nowrap w-auto d-inline-block"
                                                                                ),
                                                                                children: "Learn More",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                className: "container-fluid pb-5",
                                                                children: (0, r.jsx)("div", {
                                                                    className: "row m-0 text-center d-flex justify-content-center align-items-center pb-5 cursor-pointer",
                                                                    onClick: () => b(),
                                                                    children: (0, r.jsxs)("div", {
                                                                        "data-desc": "Launch DApp",
                                                                        class: "col-lg-8 col-12 after-desc-body py-4 px-lg-5 px-2 h-100 hover-text",
                                                                        children: [
                                                                            (0, r.jsx)("h2", {
                                                                                class: "orbitron-txt",
                                                                                children: "Community Share Pool",
                                                                            }),
                                                                            (0, r.jsx)("p", {
                                                                                className: "metrophobic-txt",
                                                                                children: "Do you have $HEXAI? Take part in the community share pool, invest your tokens and reap the rewards!",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: "hand-shake-sec text-left d-flex justify-content-center align-items-center bg-black text-white hand-shake-img-sec pb-5",
                                        children: (0, r.jsx)("div", {
                                            className: "container-fluid",
                                            children: (0, r.jsxs)("div", {
                                                className: "row w-100",
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: "col-lg-6 p-lg-5 p-3",
                                                        children: [
                                                            (0, r.jsx)("h3", {
                                                                className: "orbitron-txt hand-shake-title",
                                                                children: "Are you looking to get involved in the Hex AI project?",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                                className: "metrophobic-txt",
                                                                children: "Contact us today and let us know how you envision a partnership with us!",
                                                            })
                                                        ],
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: "col-lg-6"
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
        },
        70497: function () {},
    },
    function (l) {
        l.O(0, [1664, 1110, 3724, 9123, 2116, 2888, 9774, 179], function () {
                return l((l.s = 15450));
            }),
            (_N_E = l.O());
    },
]);