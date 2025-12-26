module.exports = [
"[project]/src/app/profil/Profil.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "grid": "Profil-module__7LuqTW__grid",
  "leftColumn": "Profil-module__7LuqTW__leftColumn",
  "rightColumn": "Profil-module__7LuqTW__rightColumn",
  "wrapper": "Profil-module__7LuqTW__wrapper",
});
}),
"[project]/src/components/profile/ProfileHeader/ProfileHeader.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatarSection": "ProfileHeader-module__jJzh7G__avatarSection",
  "avatarWrapper": "ProfileHeader-module__jJzh7G__avatarWrapper",
  "bio": "ProfileHeader-module__jJzh7G__bio",
  "defaultAvatar": "ProfileHeader-module__jJzh7G__defaultAvatar",
  "editBtn": "ProfileHeader-module__jJzh7G__editBtn",
  "info": "ProfileHeader-module__jJzh7G__info",
  "nameRow": "ProfileHeader-module__jJzh7G__nameRow",
  "offline": "ProfileHeader-module__jJzh7G__offline",
  "online": "ProfileHeader-module__jJzh7G__online",
  "profileHeader": "ProfileHeader-module__jJzh7G__profileHeader",
  "statusIndicator": "ProfileHeader-module__jJzh7G__statusIndicator",
});
}),
"[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/profile/ProfileHeader/ProfileHeader.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
function ProfileHeader({ username, bio, avatar, isOnline = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileHeader,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatarSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatarWrapper,
                    children: [
                        avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: avatar,
                            alt: username,
                            width: 120,
                            height: 120
                        }, void 0, false, {
                            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                            lineNumber: 17,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].defaultAvatar,
                            children: username.charAt(0).toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                            lineNumber: 19,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusIndicator} ${isOnline ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].online : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offline}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].info,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nameRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: username
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editBtn,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        width: "18",
                                        height: "18",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                                                lineNumber: 31,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                                                lineNumber: 32,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                                        lineNumber: 30,
                                        columnNumber: 25
                                    }, this),
                                    "Edit Profile"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bio,
                        children: bio
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/profile/ProfileStats/ProfileStats.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "profileStats": "ProfileStats-module__UVT-9W__profileStats",
  "statCard": "ProfileStats-module__UVT-9W__statCard",
  "statLabel": "ProfileStats-module__UVT-9W__statLabel",
  "statValue": "ProfileStats-module__UVT-9W__statValue",
  "statsGrid": "ProfileStats-module__UVT-9W__statsGrid",
});
}),
"[project]/src/components/profile/ProfileStats/ProfileStats.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/profile/ProfileStats/ProfileStats.module.css [app-ssr] (css module)");
;
;
function ProfileStats({ wins, losses, winRate, gamesPlayed }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileStats,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Statistics"
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statsGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                children: gamesPlayed
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                                lineNumber: 16,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Games Played"
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                                lineNumber: 17,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                children: wins
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                                lineNumber: 20,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Wins"
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                                lineNumber: 21,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                children: losses
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                                lineNumber: 24,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Losses"
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                children: [
                                    winRate,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Win Rate"
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/profile/MatchHistory/MatchHistory.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "date": "MatchHistory-module__DX-ZTa__date",
  "loss": "MatchHistory-module__DX-ZTa__loss",
  "matchDetails": "MatchHistory-module__DX-ZTa__matchDetails",
  "matchHistory": "MatchHistory-module__DX-ZTa__matchHistory",
  "matchInfo": "MatchHistory-module__DX-ZTa__matchInfo",
  "matchItem": "MatchHistory-module__DX-ZTa__matchItem",
  "matchList": "MatchHistory-module__DX-ZTa__matchList",
  "opponent": "MatchHistory-module__DX-ZTa__opponent",
  "opponentAvatar": "MatchHistory-module__DX-ZTa__opponentAvatar",
  "opponentName": "MatchHistory-module__DX-ZTa__opponentName",
  "result": "MatchHistory-module__DX-ZTa__result",
  "score": "MatchHistory-module__DX-ZTa__score",
  "win": "MatchHistory-module__DX-ZTa__win",
});
}),
"[project]/src/components/profile/MatchHistory/MatchHistory.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatchHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/profile/MatchHistory/MatchHistory.module.css [app-ssr] (css module)");
;
;
function MatchHistory({ matches }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].matchHistory,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Match History"
            }, void 0, false, {
                fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].matchList,
                children: matches.map((match, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].matchItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].matchInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].opponent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].opponentAvatar,
                                                children: match.opponent.charAt(0).toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                                                lineNumber: 23,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].opponentName,
                                                children: match.opponent
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                                                lineNumber: 26,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                                        lineNumber: 22,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].matchDetails,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].score,
                                                children: match.score
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                                                lineNumber: 29,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].date,
                                                children: new Date(match.date).toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                                                lineNumber: 30,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                                        lineNumber: 28,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                                lineNumber: 21,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].result} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][match.result]}`,
                                children: match.result === 'win' ? 'Win' : 'Loss'
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                                lineNumber: 33,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                        lineNumber: 20,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/profile/FriendsList/FriendsList.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "friendAvatar": "FriendsList-module__3JGjWW__friendAvatar",
  "friendCard": "FriendsList-module__3JGjWW__friendCard",
  "friendName": "FriendsList-module__3JGjWW__friendName",
  "friendsGrid": "FriendsList-module__3JGjWW__friendsGrid",
  "friendsList": "FriendsList-module__3JGjWW__friendsList",
});
}),
"[project]/src/components/profile/FriendsList/FriendsList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FriendsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/profile/FriendsList/FriendsList.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
function FriendsList({ friends }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].friendsList,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Friends"
            }, void 0, false, {
                fileName: "[project]/src/components/profile/FriendsList/FriendsList.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].friendsGrid,
                children: friends.map((friend, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/profil/${friend.username}`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].friendCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].friendAvatar,
                                children: friend.avatar
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/FriendsList/FriendsList.tsx",
                                lineNumber: 20,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].friendName,
                                children: friend.username
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/FriendsList/FriendsList.tsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/profile/FriendsList/FriendsList.tsx",
                        lineNumber: 19,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/profile/FriendsList/FriendsList.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/profile/FriendsList/FriendsList.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/profile/ProfileStats/ProfileStats.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/profile/MatchHistory/MatchHistory.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/profile/FriendsList/FriendsList.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
// Base de données fictive d'utilisateurs
const usersDatabase = {
    Magnus: {
        username: 'Magnus',
        avatar: 'M',
        status: 'online',
        bio: 'World Chess Champion, always ready for a challenge 🏆',
        stats: {
            wins: 156,
            losses: 23,
            winRate: 87.2,
            gamesPlayed: 179
        },
        matchHistory: [
            {
                opponent: 'JALBISER',
                result: 'loss',
                score: '0-1',
                date: '2025-12-21'
            },
            {
                opponent: 'Hikaru',
                result: 'win',
                score: '1-0',
                date: '2025-12-20'
            },
            {
                opponent: 'Fabiano',
                result: 'win',
                score: '1-0',
                date: '2025-12-19'
            },
            {
                opponent: 'Wesley',
                result: 'win',
                score: '1-0',
                date: '2025-12-18'
            }
        ],
        friends: [
            {
                username: 'JALBISER',
                avatar: 'J'
            },
            {
                username: 'Hikaru',
                avatar: 'H'
            },
            {
                username: 'Fabiano',
                avatar: 'F'
            },
            {
                username: 'Wesley',
                avatar: 'W'
            }
        ]
    },
    Hikaru: {
        username: 'Hikaru',
        avatar: 'H',
        status: 'online',
        bio: 'Speed chess specialist, streaming daily on Twitch 🎮',
        stats: {
            wins: 203,
            losses: 45,
            winRate: 81.9,
            gamesPlayed: 248
        },
        matchHistory: [
            {
                opponent: 'JALBISER',
                result: 'loss',
                score: '0-1',
                date: '2025-12-20'
            },
            {
                opponent: 'Magnus',
                result: 'loss',
                score: '0-1',
                date: '2025-12-20'
            },
            {
                opponent: 'Levon',
                result: 'win',
                score: '1-0',
                date: '2025-12-19'
            },
            {
                opponent: 'Fabiano',
                result: 'win',
                score: '1-0',
                date: '2025-12-18'
            }
        ],
        friends: [
            {
                username: 'JALBISER',
                avatar: 'J'
            },
            {
                username: 'Magnus',
                avatar: 'M'
            },
            {
                username: 'Wesley',
                avatar: 'W'
            }
        ]
    },
    Fabiano: {
        username: 'Fabiano',
        avatar: 'F',
        status: 'offline',
        bio: 'Classical chess master, precision is key 🎯',
        stats: {
            wins: 134,
            losses: 52,
            winRate: 72.0,
            gamesPlayed: 186
        },
        matchHistory: [
            {
                opponent: 'JALBISER',
                result: 'win',
                score: '1-0',
                date: '2025-12-19'
            },
            {
                opponent: 'Magnus',
                result: 'loss',
                score: '0-1',
                date: '2025-12-19'
            },
            {
                opponent: 'Hikaru',
                result: 'loss',
                score: '0-1',
                date: '2025-12-18'
            },
            {
                opponent: 'Wesley',
                result: 'win',
                score: '1-0',
                date: '2025-12-17'
            }
        ],
        friends: [
            {
                username: 'JALBISER',
                avatar: 'J'
            },
            {
                username: 'Magnus',
                avatar: 'M'
            },
            {
                username: 'Maxime',
                avatar: 'M'
            }
        ]
    },
    Wesley: {
        username: 'Wesley',
        avatar: 'W',
        status: 'online',
        bio: 'Tactical genius, playing for the win every time 💪',
        stats: {
            wins: 98,
            losses: 41,
            winRate: 70.5,
            gamesPlayed: 139
        },
        matchHistory: [
            {
                opponent: 'JALBISER',
                result: 'loss',
                score: '0-1',
                date: '2025-12-18'
            },
            {
                opponent: 'Magnus',
                result: 'loss',
                score: '0-1',
                date: '2025-12-18'
            },
            {
                opponent: 'Fabiano',
                result: 'loss',
                score: '0-1',
                date: '2025-12-17'
            },
            {
                opponent: 'Levon',
                result: 'win',
                score: '1-0',
                date: '2025-12-16'
            }
        ],
        friends: [
            {
                username: 'JALBISER',
                avatar: 'J'
            },
            {
                username: 'Magnus',
                avatar: 'M'
            },
            {
                username: 'Hikaru',
                avatar: 'H'
            }
        ]
    },
    Levon: {
        username: 'Levon',
        avatar: 'L',
        status: 'offline',
        bio: 'Endgame specialist, patient and deadly 👑',
        stats: {
            wins: 112,
            losses: 38,
            winRate: 74.7,
            gamesPlayed: 150
        },
        matchHistory: [
            {
                opponent: 'JALBISER',
                result: 'win',
                score: '1-0',
                date: '2025-12-17'
            },
            {
                opponent: 'Hikaru',
                result: 'loss',
                score: '0-1',
                date: '2025-12-19'
            },
            {
                opponent: 'Wesley',
                result: 'loss',
                score: '0-1',
                date: '2025-12-16'
            },
            {
                opponent: 'Maxime',
                result: 'win',
                score: '1-0',
                date: '2025-12-15'
            }
        ],
        friends: [
            {
                username: 'JALBISER',
                avatar: 'J'
            },
            {
                username: 'Maxime',
                avatar: 'M'
            },
            {
                username: 'Fabiano',
                avatar: 'F'
            }
        ]
    },
    Maxime: {
        username: 'Maxime',
        avatar: 'M',
        status: 'online',
        bio: 'French chess prodigy, rising star ⭐',
        stats: {
            wins: 87,
            losses: 44,
            winRate: 66.4,
            gamesPlayed: 131
        },
        matchHistory: [
            {
                opponent: 'JALBISER',
                result: 'loss',
                score: '0-1',
                date: '2025-12-16'
            },
            {
                opponent: 'Levon',
                result: 'loss',
                score: '0-1',
                date: '2025-12-15'
            },
            {
                opponent: 'Fabiano',
                result: 'win',
                score: '1-0',
                date: '2025-12-14'
            },
            {
                opponent: 'Wesley',
                result: 'win',
                score: '1-0',
                date: '2025-12-13'
            }
        ],
        friends: [
            {
                username: 'JALBISER',
                avatar: 'J'
            },
            {
                username: 'Levon',
                avatar: 'L'
            },
            {
                username: 'Fabiano',
                avatar: 'F'
            }
        ]
    }
};
function UserProfilPage({ params }) {
    const { username } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const user = usersDatabase[username];
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#21201D',
                    padding: '2rem',
                    borderRadius: '8px',
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            color: 'white',
                            marginBottom: '1rem'
                        },
                        children: "Utilisateur non trouvé"
                    }, void 0, false, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#90908E',
                            marginBottom: '1.5rem'
                        },
                        children: [
                            "L'utilisateur \"",
                            username,
                            "\" n'existe pas."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/profil",
                        style: {
                            color: '#739552',
                            textDecoration: 'none'
                        },
                        children: "← Retour à mon profil"
                    }, void 0, false, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 166,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                username: user.username,
                bio: user.bio,
                isOnline: user.status === 'online'
            }, void 0, false, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                wins: user.stats.wins,
                losses: user.stats.losses,
                winRate: user.stats.winRate,
                gamesPlayed: user.stats.gamesPlayed
            }, void 0, false, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftColumn,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            matches: user.matchHistory
                        }, void 0, false, {
                            fileName: "[project]/src/app/profil/[username]/page.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rightColumn,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            friends: user.friends
                        }, void 0, false, {
                            fileName: "[project]/src/app/profil/[username]/page.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/profil/[username]/page.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/profil/[username]/page.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_b1a77143._.js.map