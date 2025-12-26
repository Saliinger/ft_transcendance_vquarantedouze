module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/profil/Profil.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "Profil-module__7LuqTW__avatar",
  "backButton": "Profil-module__7LuqTW__backButton",
  "bio": "Profil-module__7LuqTW__bio",
  "container": "Profil-module__7LuqTW__container",
  "friendAvatar": "Profil-module__7LuqTW__friendAvatar",
  "friendCard": "Profil-module__7LuqTW__friendCard",
  "friendName": "Profil-module__7LuqTW__friendName",
  "friendsList": "Profil-module__7LuqTW__friendsList",
  "loss": "Profil-module__7LuqTW__loss",
  "matchCard": "Profil-module__7LuqTW__matchCard",
  "matchDate": "Profil-module__7LuqTW__matchDate",
  "matchHistory": "Profil-module__7LuqTW__matchHistory",
  "matchInfo": "Profil-module__7LuqTW__matchInfo",
  "offline": "Profil-module__7LuqTW__offline",
  "online": "Profil-module__7LuqTW__online",
  "opponent": "Profil-module__7LuqTW__opponent",
  "profileCard": "Profil-module__7LuqTW__profileCard",
  "profileHeader": "Profil-module__7LuqTW__profileHeader",
  "profileInfo": "Profil-module__7LuqTW__profileInfo",
  "score": "Profil-module__7LuqTW__score",
  "section": "Profil-module__7LuqTW__section",
  "sectionTitle": "Profil-module__7LuqTW__sectionTitle",
  "statCard": "Profil-module__7LuqTW__statCard",
  "statLabel": "Profil-module__7LuqTW__statLabel",
  "statValue": "Profil-module__7LuqTW__statValue",
  "statsGrid": "Profil-module__7LuqTW__statsGrid",
  "status": "Profil-module__7LuqTW__status",
  "username": "Profil-module__7LuqTW__username",
  "win": "Profil-module__7LuqTW__win",
});
}),
"[project]/src/app/profil/[username]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserProfilPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/profil/Profil.module.css [app-ssr] (css module)");
'use client';
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
        bio: 'Joueur compétitif, champion régional 2024 🏆',
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
                score: '7-11',
                date: '2025-12-21'
            },
            {
                opponent: 'alice_wonder',
                result: 'win',
                score: '11-6',
                date: '2025-12-20'
            },
            {
                opponent: 'bob_builder',
                result: 'win',
                score: '11-8',
                date: '2025-12-19'
            },
            {
                opponent: 'charlie_pong',
                result: 'loss',
                score: '9-11',
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
                username: 'charlie_pong',
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
                score: '9-11',
                date: '2025-12-20'
            },
            {
                opponent: 'john_doe',
                result: 'loss',
                score: '6-11',
                date: '2025-12-20'
            },
            {
                opponent: 'bob_builder',
                result: 'win',
                score: '11-7',
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
                score: '11-8',
                date: '2025-12-19'
            },
            {
                opponent: 'john_doe',
                result: 'loss',
                score: '8-11',
                date: '2025-12-19'
            },
            {
                opponent: 'alice_wonder',
                result: 'loss',
                score: '7-11',
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
    charlie_pong: {
        username: 'charlie_pong',
        avatar: 'C',
        status: 'online',
        bio: 'Le Pong, c\'est la vie ! Toujours prêt pour un défi 💪',
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
                score: '5-11',
                date: '2025-12-18'
            },
            {
                opponent: 'john_doe',
                result: 'win',
                score: '11-9',
                date: '2025-12-18'
            },
            {
                opponent: 'emma_pro',
                result: 'win',
                score: '11-6',
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
        bio: 'Maîtresse du jeu, imbattable sur mon terrain 👑',
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
                score: '11-9',
                date: '2025-12-17'
            },
            {
                opponent: 'emma_pro',
                result: 'win',
                score: '11-4',
                date: '2025-12-16'
            },
            {
                opponent: 'charlie_pong',
                result: 'win',
                score: '11-7',
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
                username: 'charlie_pong',
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
                score: '4-11',
                date: '2025-12-16'
            },
            {
                opponent: 'charlie_pong',
                result: 'loss',
                score: '6-11',
                date: '2025-12-17'
            },
            {
                opponent: 'bob_builder',
                result: 'win',
                score: '11-8',
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
function UserProfilPage({ params }) {
    const { username } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const user = usersDatabase[username];
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/profil",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backButton,
                    children: "← Retour à mon profil"
                }, void 0, false, {
                    fileName: "[project]/src/app/profil/[username]/page.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileCard,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Utilisateur non trouvé"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profil/[username]/page.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "L'utilisateur \"",
                                username,
                                "\" n'existe pas."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profil/[username]/page.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/profil/[username]/page.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/profil",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backButton,
                children: "← Retour à mon profil"
            }, void 0, false, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileCard,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                            children: user.avatar
                        }, void 0, false, {
                            fileName: "[project]/src/app/profil/[username]/page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileInfo,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].username,
                                    children: user.username
                                }, void 0, false, {
                                    fileName: "[project]/src/app/profil/[username]/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].status} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][user.status]}`,
                                    children: user.status === 'online' ? '🟢 En ligne' : '⚫ Hors ligne'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/profil/[username]/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bio,
                                    children: user.bio
                                }, void 0, false, {
                                    fileName: "[project]/src/app/profil/[username]/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profil/[username]/page.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/profil/[username]/page.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statsGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                children: user.stats.wins
                            }, void 0, false, {
                                fileName: "[project]/src/app/profil/[username]/page.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Victoires"
                            }, void 0, false, {
                                fileName: "[project]/src/app/profil/[username]/page.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                children: user.stats.losses
                            }, void 0, false, {
                                fileName: "[project]/src/app/profil/[username]/page.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Défaites"
                            }, void 0, false, {
                                fileName: "[project]/src/app/profil/[username]/page.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                children: [
                                    user.stats.winRate,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/profil/[username]/page.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Taux de victoire"
                            }, void 0, false, {
                                fileName: "[project]/src/app/profil/[username]/page.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                children: user.stats.gamesPlayed
                            }, void 0, false, {
                                fileName: "[project]/src/app/profil/[username]/page.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Parties jouées"
                            }, void 0, false, {
                                fileName: "[project]/src/app/profil/[username]/page.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: "Historique des matchs"
                    }, void 0, false, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].matchHistory,
                        children: user.matchHistory.map((match, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].matchCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][match.result]}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].matchInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/profil/${match.opponent}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].opponent,
                                                children: [
                                                    "vs ",
                                                    match.opponent
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/profil/[username]/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].matchDate,
                                                children: match.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profil/[username]/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].score,
                                        children: match.score
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/profil/[username]/page.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: [
                            "Amis (",
                            user.friends.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].friendsList,
                        children: user.friends.map((friend)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/profil/${friend.username}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].friendCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].friendAvatar,
                                        children: friend.avatar
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].friendName,
                                        children: friend.username
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, friend.username, true, {
                                fileName: "[project]/src/app/profil/[username]/page.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/profil/[username]/page.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2a499e8a._.js.map