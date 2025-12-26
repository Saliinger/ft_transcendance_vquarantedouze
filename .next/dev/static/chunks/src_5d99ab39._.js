(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/profil/Profil.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "grid": "Profil-module__7LuqTW__grid",
  "leftColumn": "Profil-module__7LuqTW__leftColumn",
  "rightColumn": "Profil-module__7LuqTW__rightColumn",
  "wrapper": "Profil-module__7LuqTW__wrapper",
});
}),
"[project]/src/components/profile/ProfileHeader/ProfileHeader.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/profile/ProfileHeader/ProfileHeader.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
;
function ProfileHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "c037dcedcc36d479e9905024435d8fe005b4fecb45f5d6a1aac63e5b76cce2ec") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c037dcedcc36d479e9905024435d8fe005b4fecb45f5d6a1aac63e5b76cce2ec";
    }
    const { username, bio, avatar, isOnline: t1 } = t0;
    const isOnline = t1 === undefined ? true : t1;
    let t2;
    if ($[1] !== avatar || $[2] !== username) {
        t2 = avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: avatar,
            alt: username,
            width: 120,
            height: 120
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
            lineNumber: 27,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].defaultAvatar,
            children: username.charAt(0).toUpperCase()
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
            lineNumber: 27,
            columnNumber: 84
        }, this);
        $[1] = avatar;
        $[2] = username;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusIndicator} ${isOnline ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].online : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offline}`;
    let t4;
    if ($[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t2 || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarSection,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarWrapper,
                children: [
                    t2,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                lineNumber: 45,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== username) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: username
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[9] = username;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editBtn,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    width: "18",
                    height: "18",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                            lineNumber: 62,
                            columnNumber: 148
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                            lineNumber: 62,
                            columnNumber: 394
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
                    lineNumber: 62,
                    columnNumber: 45
                }, this),
                "Edit Profile"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nameRow,
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[12] = t6;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== bio) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bio,
            children: bio
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[14] = bio;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t8 || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
            lineNumber: 85,
            columnNumber: 11
        }, this);
        $[16] = t8;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t5) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileHeader,
            children: [
                t5,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx",
            lineNumber: 94,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t5;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    return t11;
}
_c = ProfileHeader;
var _c;
__turbopack_context__.k.register(_c, "ProfileHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/profile/ProfileStats/ProfileStats.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "profileStats": "ProfileStats-module__UVT-9W__profileStats",
  "statCard": "ProfileStats-module__UVT-9W__statCard",
  "statLabel": "ProfileStats-module__UVT-9W__statLabel",
  "statValue": "ProfileStats-module__UVT-9W__statValue",
  "statsGrid": "ProfileStats-module__UVT-9W__statsGrid",
});
}),
"[project]/src/components/profile/ProfileStats/ProfileStats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/profile/ProfileStats/ProfileStats.module.css [app-client] (css module)");
;
;
;
function ProfileStats(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "65ce7e8a29d11463f9bb3f634c87e480f504784336b44571a6064f0833427e3e") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65ce7e8a29d11463f9bb3f634c87e480f504784336b44571a6064f0833427e3e";
    }
    const { wins, losses, winRate, gamesPlayed } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "Statistics"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== gamesPlayed) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
            children: gamesPlayed
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[2] = gamesPlayed;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
            children: "Games Played"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== wins) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
            children: wins
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[7] = wins;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
            children: "Wins"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== losses) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
            children: losses
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[12] = losses;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
            children: "Losses"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[15] = t8;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== winRate) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
            children: [
                winRate,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[17] = winRate;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
            children: "Win Rate"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== t10 || $[23] !== t13 || $[24] !== t4 || $[25] !== t7) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileStats,
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsGrid,
                    children: [
                        t4,
                        t7,
                        t10,
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
                    lineNumber: 124,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileStats/ProfileStats.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t13;
        $[24] = t4;
        $[25] = t7;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    return t14;
}
_c = ProfileStats;
var _c;
__turbopack_context__.k.register(_c, "ProfileStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/profile/MatchHistory/MatchHistory.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/profile/MatchHistory/MatchHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatchHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/profile/MatchHistory/MatchHistory.module.css [app-client] (css module)");
;
;
;
function MatchHistory(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "2ca4e713718a312d6633d421f7cf3c1455bff23d9fc0620ea08d2c67511a40a0") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2ca4e713718a312d6633d421f7cf3c1455bff23d9fc0620ea08d2c67511a40a0";
    }
    const { matches } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "Match History"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== matches) {
        t2 = matches.map(_MatchHistoryMatchesMap);
        $[2] = matches;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].matchHistory,
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].matchList,
                    children: t2
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                    lineNumber: 40,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_c = MatchHistory;
function _MatchHistoryMatchesMap(match, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].matchItem,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].matchInfo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opponent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opponentAvatar,
                                children: match.opponent.charAt(0).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                                lineNumber: 49,
                                columnNumber: 123
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opponentName,
                                children: match.opponent
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                                lineNumber: 49,
                                columnNumber: 208
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                        lineNumber: 49,
                        columnNumber: 90
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].matchDetails,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].score,
                                children: match.score
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                                lineNumber: 49,
                                columnNumber: 312
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].date,
                                children: new Date(match.date).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                                lineNumber: 49,
                                columnNumber: 363
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                        lineNumber: 49,
                        columnNumber: 275
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                lineNumber: 49,
                columnNumber: 56
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].result} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][match.result]}`,
                children: match.result === "win" ? "Win" : "Loss"
            }, void 0, false, {
                fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
                lineNumber: 49,
                columnNumber: 455
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/profile/MatchHistory/MatchHistory.tsx",
        lineNumber: 49,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "MatchHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/profile/FriendsList/FriendsList.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "friendAvatar": "FriendsList-module__3JGjWW__friendAvatar",
  "friendCard": "FriendsList-module__3JGjWW__friendCard",
  "friendName": "FriendsList-module__3JGjWW__friendName",
  "friendsGrid": "FriendsList-module__3JGjWW__friendsGrid",
  "friendsList": "FriendsList-module__3JGjWW__friendsList",
});
}),
"[project]/src/components/profile/FriendsList/FriendsList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FriendsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/profile/FriendsList/FriendsList.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
function FriendsList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "59213361e0cbb6943aa75f8b283f7c845e001d9fcabdfffb13021050523f8cee") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "59213361e0cbb6943aa75f8b283f7c845e001d9fcabdfffb13021050523f8cee";
    }
    const { friends } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "Friends"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/FriendsList/FriendsList.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== friends) {
        t2 = friends.map(_FriendsListFriendsMap);
        $[2] = friends;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].friendsList,
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].friendsGrid,
                    children: t2
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/FriendsList/FriendsList.tsx",
                    lineNumber: 39,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/FriendsList/FriendsList.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_c = FriendsList;
function _FriendsListFriendsMap(friend, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/profil/${friend.username}`,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].friendCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].friendAvatar,
                children: friend.avatar
            }, void 0, false, {
                fileName: "[project]/src/components/profile/FriendsList/FriendsList.tsx",
                lineNumber: 48,
                columnNumber: 94
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].friendName,
                children: friend.username
            }, void 0, false, {
                fileName: "[project]/src/components/profile/FriendsList/FriendsList.tsx",
                lineNumber: 48,
                columnNumber: 152
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/profile/FriendsList/FriendsList.tsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "FriendsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/profile/ProfileHeader/ProfileHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/profile/ProfileStats/ProfileStats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/profile/MatchHistory/MatchHistory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/profile/FriendsList/FriendsList.tsx [app-client] (ecmascript)");
'use client';
;
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
function UserProfilPage(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "54ccc0adbe9f3a43dc8de4351c1b866f80dd69a867a2dfbb53346a474c22809e") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "54ccc0adbe9f3a43dc8de4351c1b866f80dd69a867a2dfbb53346a474c22809e";
    }
    const { params } = t0;
    const { username } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const user = usersDatabase[username];
    if (!user) {
        let t1;
        let t2;
        let t3;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = {
                background: "#21201D",
                padding: "2rem",
                borderRadius: "8px",
                textAlign: "center"
            };
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    color: "white",
                    marginBottom: "1rem"
                },
                children: "Utilisateur non trouvé"
            }, void 0, false, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 303,
                columnNumber: 12
            }, this);
            t3 = {
                color: "#90908E",
                marginBottom: "1.5rem"
            };
            $[1] = t1;
            $[2] = t2;
            $[3] = t3;
        } else {
            t1 = $[1];
            t2 = $[2];
            t3 = $[3];
        }
        let t4;
        if ($[4] !== username) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: t3,
                children: [
                    "L'utilisateur \"",
                    username,
                    "\" n'existe pas."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 321,
                columnNumber: 12
            }, this);
            $[4] = username;
            $[5] = t4;
        } else {
            t4 = $[5];
        }
        let t5;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/profil",
                style: {
                    color: "#739552",
                    textDecoration: "none"
                },
                children: "← Retour à mon profil"
            }, void 0, false, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 329,
                columnNumber: 12
            }, this);
            $[6] = t5;
        } else {
            t5 = $[6];
        }
        let t6;
        if ($[7] !== t4) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t1,
                    children: [
                        t2,
                        t4,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/profil/[username]/page.tsx",
                    lineNumber: 339,
                    columnNumber: 44
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 339,
                columnNumber: 12
            }, this);
            $[7] = t4;
            $[8] = t6;
        } else {
            t6 = $[8];
        }
        return t6;
    }
    const t1 = user.status === "online";
    let t2;
    if ($[9] !== t1 || $[10] !== user.bio || $[11] !== user.username) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileHeader$2f$ProfileHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            username: user.username,
            bio: user.bio,
            isOnline: t1
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 350,
            columnNumber: 10
        }, this);
        $[9] = t1;
        $[10] = user.bio;
        $[11] = user.username;
        $[12] = t2;
    } else {
        t2 = $[12];
    }
    let t3;
    if ($[13] !== user.stats.gamesPlayed || $[14] !== user.stats.losses || $[15] !== user.stats.winRate || $[16] !== user.stats.wins) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$ProfileStats$2f$ProfileStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            wins: user.stats.wins,
            losses: user.stats.losses,
            winRate: user.stats.winRate,
            gamesPlayed: user.stats.gamesPlayed
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 360,
            columnNumber: 10
        }, this);
        $[13] = user.stats.gamesPlayed;
        $[14] = user.stats.losses;
        $[15] = user.stats.winRate;
        $[16] = user.stats.wins;
        $[17] = t3;
    } else {
        t3 = $[17];
    }
    let t4;
    if ($[18] !== user.matchHistory) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftColumn,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$MatchHistory$2f$MatchHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                matches: user.matchHistory
            }, void 0, false, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 371,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 371,
            columnNumber: 10
        }, this);
        $[18] = user.matchHistory;
        $[19] = t4;
    } else {
        t4 = $[19];
    }
    let t5;
    if ($[20] !== user.friends) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightColumn,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2f$FriendsList$2f$FriendsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                friends: user.friends
            }, void 0, false, {
                fileName: "[project]/src/app/profil/[username]/page.tsx",
                lineNumber: 379,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 379,
            columnNumber: 10
        }, this);
        $[20] = user.friends;
        $[21] = t5;
    } else {
        t5 = $[21];
    }
    let t6;
    if ($[22] !== t4 || $[23] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 387,
            columnNumber: 10
        }, this);
        $[22] = t4;
        $[23] = t5;
        $[24] = t6;
    } else {
        t6 = $[24];
    }
    let t7;
    if ($[25] !== t2 || $[26] !== t3 || $[27] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profil$2f$Profil$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
            children: [
                t2,
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profil/[username]/page.tsx",
            lineNumber: 396,
            columnNumber: 10
        }, this);
        $[25] = t2;
        $[26] = t3;
        $[27] = t6;
        $[28] = t7;
    } else {
        t7 = $[28];
    }
    return t7;
}
_c = UserProfilPage;
var _c;
__turbopack_context__.k.register(_c, "UserProfilPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5d99ab39._.js.map