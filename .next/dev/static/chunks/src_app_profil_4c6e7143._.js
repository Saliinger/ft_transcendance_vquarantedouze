(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/profil/Profil.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "grid": "Profil-module__7LuqTW__grid",
  "leftColumn": "Profil-module__7LuqTW__leftColumn",
  "rightColumn": "Profil-module__7LuqTW__rightColumn",
  "wrapper": "Profil-module__7LuqTW__wrapper",
});
}),
"[project]/src/app/profil/[username]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserProfilPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/profil/Profil.module.css [app-client] (css module)");
'use client';
;
;
;
;
;
// Base de données fictive d'utilisateurs
const usersDatabase = {
    john_doe: {
        username: 'john_doe',
        avatar: 'J',
        status: 'online',
        bio: 'Joueur compétitif, champion régional d\'échecs 2024 🏆',
        stats: {
            wins: 89,
            losses: 31,
            winRate: 74.2,
            gamesPlayed: 120
        },
        matchHistory: [
            {
                opponent: 'moi',
                result: 'loss',
                score: '0-1',
                date: '2025-12-21'
            },
            {
                opponent: 'alice_wonder',
                result: 'win',
                score: '1-0',
                date: '2025-12-20'
            },
            {
                opponent: 'bob_builder',
                result: 'win',
                score: '1-0',
                date: '2025-12-19'
            },
            {
                opponent: 'charlie_chess',
                result: 'loss',
                score: '0-1',
                date: '2025-12-18'
            }
        ],
        friends: [
            {
                username: 'moi',
                avatar: 'M'
            },
            {
                username: 'alice_wonder',
                avatar: 'A'
            },
            {
                username: 'charlie_chess',
                avatar: 'C'
            }
        ]
    },
    alice_wonder: {
        username: 'alice_wonder',
        avatar: 'A',
        status: 'offline',
        bio: 'Amatrice de stratégie et de belles parties 🎮',
        stats: {
            wins: 34,
            losses: 28,
            winRate: 54.8,
            gamesPlayed: 62
        },
        matchHistory: [
            {
                opponent: 'moi',
                result: 'loss',
                score: '0-1',
                date: '2025-12-20'
            },
            {
                opponent: 'john_doe',
                result: 'loss',
                score: '0-1',
                date: '2025-12-20'
            },
            {
                opponent: 'bob_builder',
                result: 'win',
                score: '1-0',
                date: '2025-12-19'
            }
        ],
        friends: [
            {
                username: 'moi',
                avatar: 'M'
            },
            {
                username: 'john_doe',
                avatar: 'J'
            },
            {
                username: 'emma_pro',
                avatar: 'E'
            }
        ]
    },
    bob_builder: {
        username: 'bob_builder',
        avatar: 'B',
        status: 'online',
        bio: 'Construction de victoires, une brique à la fois 🧱',
        stats: {
            wins: 56,
            losses: 44,
            winRate: 56.0,
            gamesPlayed: 100
        },
        matchHistory: [
            {
                opponent: 'moi',
                result: 'win',
                score: '1-0',
                date: '2025-12-19'
            },
            {
                opponent: 'john_doe',
                result: 'loss',
                score: '0-1',
                date: '2025-12-19'
            },
            {
                opponent: 'alice_wonder',
                result: 'loss',
                score: '0-1',
                date: '2025-12-19'
            }
        ],
        friends: [
            {
                username: 'moi',
                avatar: 'M'
            },
            {
                username: 'diana_master',
                avatar: 'D'
            }
        ]
    },
    charlie_chess: {
        username: 'charlie_chess',
        avatar: 'C',
        status: 'online',
        bio: 'Les échecs, c\'est la vie ! Toujours prêt pour un défi 💪',
        stats: {
            wins: 67,
            losses: 38,
            winRate: 63.8,
            gamesPlayed: 105
        },
        matchHistory: [
            {
                opponent: 'moi',
                result: 'loss',
                score: '0-1',
                date: '2025-12-18'
            },
            {
                opponent: 'john_doe',
                result: 'win',
                score: '1-0',
                date: '2025-12-18'
            },
            {
                opponent: 'emma_pro',
                result: 'win',
                score: '1-0',
                date: '2025-12-17'
            }
        ],
        friends: [
            {
                username: 'moi',
                avatar: 'M'
            },
            {
                username: 'john_doe',
                avatar: 'J'
            },
            {
                username: 'diana_master',
                avatar: 'D'
            }
        ]
    },
    diana_master: {
        username: 'diana_master',
        avatar: 'D',
        status: 'offline',
        bio: 'Grande Maître d\'échecs, imbattable sur l\'échiquier 👑',
        stats: {
            wins: 103,
            losses: 22,
            winRate: 82.4,
            gamesPlayed: 125
        },
        matchHistory: [
            {
                opponent: 'moi',
                result: 'win',
                score: '1-0',
                date: '2025-12-17'
            },
            {
                opponent: 'emma_pro',
                result: 'win',
                score: '1-0',
                date: '2025-12-16'
            },
            {
                opponent: 'charlie_chess',
                result: 'win',
                score: '1-0',
                date: '2025-12-15'
            }
        ],
        friends: [
            {
                username: 'moi',
                avatar: 'M'
            },
            {
                username: 'bob_builder',
                avatar: 'B'
            },
            {
                username: 'charlie_chess',
                avatar: 'C'
            }
        ]
    },
    emma_pro: {
        username: 'emma_pro',
        avatar: 'E',
        status: 'online',
        bio: 'Pro player en devenir, entraînement quotidien 🔥',
        stats: {
            wins: 78,
            losses: 35,
            winRate: 69.0,
            gamesPlayed: 113
        },
        matchHistory: [
            {
                opponent: 'diana_master',
                result: 'loss',
                score: '0-1',
                date: '2025-12-16'
            },
            {
                opponent: 'charlie_chess',
                result: 'loss',
                score: '0-1',
                date: '2025-12-17'
            },
            {
                opponent: 'bob_builder',
                result: 'win',
                score: '1-0',
                date: '2025-12-15'
            }
        ],
        friends: [
            {
                username: 'moi',
                avatar: 'M'
            },
            {
                username: 'alice_wonder',
                avatar: 'A'
            }
        ]
    }
};
function UserProfilPage(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "39a190398dcdf57449d13d8556703cedfa5d2743f62422e1d4c50df88685af8a") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "39a190398dcdf57449d13d8556703cedfa5d2743f62422e1d4c50df88685af8a";
    }
    const { params } = t0;
    const { username } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const user = usersDatabase[username];
    if (!user) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/profil",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
                children: "← Retour à mon profil"
            }, void 0, false, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 261,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        let t2;
        if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Utilisateur non trouvé"
            }, void 0, false, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 268,
                columnNumber: 12
            }, this);
            $[2] = t2;
        } else {
            t2 = $[2];
        }
        let t3;
        if ($[3] !== username) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileCard,
                        children: [
                            t2,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "L'utilisateur \"",
                                    username,
                                    "\" n'existe pas."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/profil/[username]/page.tsx",
                                lineNumber: 275,
                                columnNumber: 90
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 275,
                        columnNumber: 50
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 275,
                columnNumber: 12
            }, this);
            $[3] = username;
            $[4] = t3;
        } else {
            t3 = $[4];
        }
        return t3;
    }
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/profil",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
            children: "← Retour à mon profil"
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 285,
            columnNumber: 10
        }, this);
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== user.avatar) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
            children: user.avatar
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 292,
            columnNumber: 10
        }, this);
        $[6] = user.avatar;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== user.username) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].username,
            children: user.username
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 300,
            columnNumber: 10
        }, this);
        $[8] = user.username;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const t4 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][user.status]}`;
    const t5 = user.status === "online" ? "\uD83D\uDFE2 En ligne" : "\u26AB Hors ligne";
    let t6;
    if ($[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 310,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== user.bio) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bio,
            children: user.bio
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 319,
            columnNumber: 10
        }, this);
        $[13] = user.bio;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t3 || $[16] !== t6 || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileInfo,
            children: [
                t3,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 327,
            columnNumber: 10
        }, this);
        $[15] = t3;
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t2 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileCard,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileHeader,
                children: [
                    t2,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 337,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 337,
            columnNumber: 10
        }, this);
        $[19] = t2;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== user.stats.wins) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
            children: user.stats.wins
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[22] = user.stats.wins;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
            children: "Victoires"
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== user.stats.losses) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
            children: user.stats.losses
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 369,
            columnNumber: 11
        }, this);
        $[27] = user.stats.losses;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
            children: "Défaites"
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, this);
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[30] = t13;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== user.stats.winRate) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
            children: [
                user.stats.winRate,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 392,
            columnNumber: 11
        }, this);
        $[32] = user.stats.winRate;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
            children: "Taux de victoire"
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 400,
            columnNumber: 11
        }, this);
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[35] = t16;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== user.stats.gamesPlayed) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
            children: user.stats.gamesPlayed
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 415,
            columnNumber: 11
        }, this);
        $[37] = user.stats.gamesPlayed;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
            children: "Parties jouées"
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, this);
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    if ($[40] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 430,
            columnNumber: 11
        }, this);
        $[40] = t19;
        $[41] = t21;
    } else {
        t21 = $[41];
    }
    let t22;
    if ($[42] !== t12 || $[43] !== t15 || $[44] !== t18 || $[45] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsGrid,
            children: [
                t12,
                t15,
                t18,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[42] = t12;
        $[43] = t15;
        $[44] = t18;
        $[45] = t21;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
            children: "Historique des matchs"
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    let t24;
    if ($[48] !== user.matchHistory) {
        t24 = user.matchHistory.map(_UserProfilPageUserMatchHistoryMap);
        $[48] = user.matchHistory;
        $[49] = t24;
    } else {
        t24 = $[49];
    }
    let t25;
    if ($[50] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].matchHistory,
                    children: t24
                }, void 0, false, {
                    fileName: "[project]/src/app/profil/[username]/page.tsx",
                    lineNumber: 464,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 464,
            columnNumber: 11
        }, this);
        $[50] = t24;
        $[51] = t25;
    } else {
        t25 = $[51];
    }
    let t26;
    if ($[52] !== user.friends.length) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
            children: [
                "Amis (",
                user.friends.length,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        $[52] = user.friends.length;
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    let t27;
    if ($[54] !== user.friends) {
        t27 = user.friends.map(_UserProfilPageUserFriendsMap);
        $[54] = user.friends;
        $[55] = t27;
    } else {
        t27 = $[55];
    }
    let t28;
    if ($[56] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].friendsList,
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        $[56] = t27;
        $[57] = t28;
    } else {
        t28 = $[57];
    }
    let t29;
    if ($[58] !== t26 || $[59] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            children: [
                t26,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 496,
            columnNumber: 11
        }, this);
        $[58] = t26;
        $[59] = t28;
        $[60] = t29;
    } else {
        t29 = $[60];
    }
    let t30;
    if ($[61] !== t22 || $[62] !== t25 || $[63] !== t29 || $[64] !== t9) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t1,
                t9,
                t22,
                t25,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 505,
            columnNumber: 11
        }, this);
        $[61] = t22;
        $[62] = t25;
        $[63] = t29;
        $[64] = t9;
        $[65] = t30;
    } else {
        t30 = $[65];
    }
    return t30;
}
_c = UserProfilPage;
function _UserProfilPageUserFriendsMap(friend) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/profil/${friend.username}`,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].friendCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].friendAvatar,
                children: friend.avatar
            }, void 0, false, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 517,
                columnNumber: 104
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].friendName,
                children: friend.username
            }, void 0, false, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 517,
                columnNumber: 162
            }, this)
        ]
    }, friend.username, true, {
        fileName: "[project]/src/app/profil/[username]/page.tsx",
        lineNumber: 517,
        columnNumber: 10
    }, this);
}
function _UserProfilPageUserMatchHistoryMap(match, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].matchCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][match.result]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].matchInfo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/profil/${match.opponent}`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opponent,
                        children: [
                            "vs ",
                            match.opponent
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 520,
                        columnNumber: 119
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].matchDate,
                        children: match.date
                    }, void 0, false, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 520,
                        columnNumber: 214
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 520,
                columnNumber: 85
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].score,
                children: match.score
            }, void 0, false, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 520,
                columnNumber: 274
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/profil/[username]/page.tsx",
        lineNumber: 520,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "UserProfilPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_profil_4c6e7143._.js.map