(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [327],
    {
        4478: function(a, b, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/projects",
                function() {
                    return c(4296);
                },
            ]);
        },
        2718: function(a, b, c) {
            "use strict";
            var d = c(5893);
            c(7294),
                (b.Z = function(a) {
                    var b = a.tag;
                    return (0, d.jsxs)("div", {
                        className: "".concat(
                            b ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20",
                            " w-full text-center relative"
                        ),
                        children: [
                            b ?
                            (0, d.jsx)(d.Fragment, {
                                children: (0, d.jsxs)("h1", {
                                    className: "text-3xl sm:text-4xl inline-block w-auto mx-auto mb-8 relative text-fun-gray dark:text-white",
                                    children: [
                                        "Projects built with ",
                                        (0, d.jsx)("b", { children: b }),
                                        (0, d.jsx)("img", {
                                            className: "sqD w-8 sm:w-10 -top-6 -right-2 sm:-right-8 sm:-top-8 absolute",
                                            src: "/static/doodles/hero/code.svg",
                                        }),
                                    ],
                                }),
                            }) :
                            (0, d.jsxs)("h1", {
                                className: "text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative text-black dark:text-white",
                                children: [
                                    "Projects",
                                    (0, d.jsx)("img", {
                                        className: "sqD w-10 -top-8 -right-8 absolute",
                                        src: "/static/doodles/hero/code.svg",
                                    }),
                                ],
                            }), !b &&
                            (0, d.jsx)("p", {
                                className: "text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto",
                                children: "As a graphic designer with 3 years of experience, I specialize in creating visually appealing social media designs. I've worked on a variety of projects, including designing banners, posts, and ads that grab attention.Some of my favorite projects include Phones DZ , Medad school courses and much more.",
                            }),
                        ],
                    });
                });
        },
        9662: function(a, b, c) {
            "use strict";
            var d = c(5893);
            c(7294);
            var e = c(5653),
                f = c(7312);
            b.Z = function(a) {
                var b = a.overwriteProjects || e.ZP;
                return (0, d.jsx)("div", {
                    className: "grid grid-cols-1 gap-8 md:grid-cols-3 items-start",
                    children: b.map(function(a) {
                        return (0, d.jsx)(f.Z, { project: a }, a.id);
                    }),
                });
            };
        },
        4296: function(a, b, c) {
            "use strict";
            c.r(b),
                c.d(b, {
                    default: function() {
                        return i;
                    },
                });
            var d = c(5893),
                e = c(2718),
                f = c(1664);
            c(7294);
            var g = c(3365),
                h = c(9662),
                i = function() {
                    return (0, d.jsxs)(g.Z, {
                        currentPage: "Projects",
                        meta: {
                            title: "Projects",
                            desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
                        },
                        children: [
                            (0, d.jsx)(e.Z, {}),
                            (0, d.jsx)(h.Z, {}),
                            (0, d.jsx)(function() {
                                return (0,
                                    d.jsx)("div", { className: "my-20 w-[200px] md:w-[300px] border mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full bg-fun-pink-darkerer font-bold text-black border-2 hover:bg-fun-pink hover:text-white hover:border-fun-pink dark:text-white transition-colors cursor-pointer", children: (0, d.jsx)(f.default, { href: "https://drive.google.com/drive/folders/1LNR4dsE8EscXqSaXAqXOdP2xhQDq6DSi?fbclid=IwAR0GT_HPcEkdRYkK5sbX2WXe8sDWTZ77pluwU0dL-lL04tnDVvbWxecVrKY", children: (0, d.jsx)("a", { target: "_blank", children: "View All in Drive" }) }) });
                            }, {}),
                        ],
                    });
                };
        },
    },
    function(a) {
        a.O(0, [13, 82, 468, 774, 888, 179], function() {
                return a((a.s = 4478));
            }),
            (_N_E = a.O());
    },
]);