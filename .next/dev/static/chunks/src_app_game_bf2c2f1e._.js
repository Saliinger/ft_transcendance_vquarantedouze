(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/game/Game.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Game-module__uyjN4W__active",
  "content": "Game-module__uyjN4W__content",
  "grid": "Game-module__uyjN4W__grid",
  "headerInfo": "Game-module__uyjN4W__headerInfo",
  "itemHeader": "Game-module__uyjN4W__itemHeader",
  "wrapper": "Game-module__uyjN4W__wrapper",
});
}),
"[project]/src/app/game/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Game
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/game/Game.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Game() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "44fe17117c3c9b892290971ed985e6af789ee3be138f0a57a695643109960c7e") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "44fe17117c3c9b892290971ed985e6af789ee3be138f0a57a695643109960c7e";
    }
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("analysis");
    let t0;
    if ($[1] !== activeTab) {
        t0 = ({
            "Game[getActiveIndex]": ()=>{
                switch(activeTab){
                    case "analysis":
                        {
                            return 0;
                        }
                    case "newgame":
                        {
                            return 1;
                        }
                    case "game":
                        {
                            return 2;
                        }
                    case "players":
                        {
                            return 3;
                        }
                    default:
                        {
                            return 0;
                        }
                }
            }
        })["Game[getActiveIndex]"];
        $[1] = activeTab;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const getActiveIndex = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].col,
            children: "d"
        }, void 0, false, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const t2 = getActiveIndex();
    const t3 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemHeader} ${activeTab === "analysis" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Game[<div>.onClick]": ()=>setActiveTab("analysis")
        })["Game[<div>.onClick]"];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "24",
            height: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                d: "M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h5.25a.75.75 0 000-1.5H10.5z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "[project]/src/app/game/page.tsx",
                lineNumber: 69,
                columnNumber: 113
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== t3) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            onClick: t4,
            children: [
                t5,
                "Analysis"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const t7 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemHeader} ${activeTab === "newgame" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "Game[<div>.onClick]": ()=>setActiveTab("newgame")
        })["Game[<div>.onClick]"];
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "24",
            height: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "[project]/src/app/game/page.tsx",
                lineNumber: 94,
                columnNumber: 113
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] !== t7) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            onClick: t8,
            children: [
                t9,
                "New Game"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[10] = t7;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    const t11 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemHeader} ${activeTab === "game" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t12;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "Game[<div>.onClick]": ()=>setActiveTab("game")
        })["Game[<div>.onClick]"];
        $[12] = t12;
    } else {
        t12 = $[12];
    }
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "24",
            height: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                d: "M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "[project]/src/app/game/page.tsx",
                lineNumber: 119,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[13] = t13;
    } else {
        t13 = $[13];
    }
    let t14;
    if ($[14] !== t11) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            onClick: t12,
            children: [
                t13,
                "Game"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[14] = t11;
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    const t15 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemHeader} ${activeTab === "players" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t16;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "Game[<div>.onClick]": ()=>setActiveTab("players")
        })["Game[<div>.onClick]"];
        $[16] = t16;
    } else {
        t16 = $[16];
    }
    let t17;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "24",
            height: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"
            }, void 0, false, {
                fileName: "[project]/src/app/game/page.tsx",
                lineNumber: 144,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[17] = t17;
    } else {
        t17 = $[17];
    }
    let t18;
    if ($[18] !== t15) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15,
            onClick: t16,
            children: [
                t17,
                "Players"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[18] = t15;
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] !== t10 || $[21] !== t14 || $[22] !== t18 || $[23] !== t2 || $[24] !== t6) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerInfo,
            "data-active": t2,
            children: [
                t6,
                t10,
                t14,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t14;
        $[22] = t18;
        $[23] = t2;
        $[24] = t6;
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] !== activeTab) {
        t20 = activeTab === "analysis" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Analysis content"
        }, void 0, false, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 171,
            columnNumber: 39
        }, this);
        $[26] = activeTab;
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    let t21;
    if ($[28] !== activeTab) {
        t21 = activeTab === "newgame" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "New Game content"
        }, void 0, false, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 179,
            columnNumber: 38
        }, this);
        $[28] = activeTab;
        $[29] = t21;
    } else {
        t21 = $[29];
    }
    let t22;
    if ($[30] !== activeTab) {
        t22 = activeTab === "game" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Game content"
        }, void 0, false, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 187,
            columnNumber: 35
        }, this);
        $[30] = activeTab;
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    let t23;
    if ($[32] !== activeTab) {
        t23 = activeTab === "players" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Players content"
        }, void 0, false, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 195,
            columnNumber: 38
        }, this);
        $[32] = activeTab;
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    let t24;
    if ($[34] !== t20 || $[35] !== t21 || $[36] !== t22 || $[37] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
            children: [
                t20,
                t21,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[34] = t20;
        $[35] = t21;
        $[36] = t22;
        $[37] = t23;
        $[38] = t24;
    } else {
        t24 = $[38];
    }
    let t25;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemBot,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "20",
                height: "20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z"
                }, void 0, false, {
                    fileName: "[project]/src/app/game/page.tsx",
                    lineNumber: 214,
                    columnNumber: 146
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/game/page.tsx",
                lineNumber: 214,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[39] = t25;
    } else {
        t25 = $[39];
    }
    let t26;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemBot,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "20",
                height: "20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-8.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z"
                }, void 0, false, {
                    fileName: "[project]/src/app/game/page.tsx",
                    lineNumber: 221,
                    columnNumber: 146
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/game/page.tsx",
                lineNumber: 221,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[40] = t26;
    } else {
        t26 = $[40];
    }
    let t27;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemBot,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "20",
                height: "20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    d: "M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z",
                    clipRule: "evenodd"
                }, void 0, false, {
                    fileName: "[project]/src/app/game/page.tsx",
                    lineNumber: 228,
                    columnNumber: 146
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/game/page.tsx",
                lineNumber: 228,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[41] = t27;
    } else {
        t27 = $[41];
    }
    let t28;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemBot,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "20",
                height: "20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z"
                }, void 0, false, {
                    fileName: "[project]/src/app/game/page.tsx",
                    lineNumber: 235,
                    columnNumber: 146
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/game/page.tsx",
                lineNumber: 235,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[42] = t28;
    } else {
        t28 = $[42];
    }
    let t29;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottom,
            children: [
                t25,
                t26,
                t27,
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemBot,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "20",
                        height: "20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L5.055 7.06zM12.775 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/game/page.tsx",
                            lineNumber: 242,
                            columnNumber: 197
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/game/page.tsx",
                        lineNumber: 242,
                        columnNumber: 94
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/game/page.tsx",
                    lineNumber: 242,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[43] = t29;
    } else {
        t29 = $[43];
    }
    let t30;
    if ($[44] !== t19 || $[45] !== t24) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].col,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$game$2f$Game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].partInfo,
                            children: [
                                t19,
                                t24,
                                t29
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/game/page.tsx",
                            lineNumber: 249,
                            columnNumber: 104
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/game/page.tsx",
                        lineNumber: 249,
                        columnNumber: 76
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/game/page.tsx",
                lineNumber: 249,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/game/page.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[44] = t19;
        $[45] = t24;
        $[46] = t30;
    } else {
        t30 = $[46];
    }
    return t30;
}
_s(Game, "SF8CLrVv7MfCEqdM4RMvvpUjJFg=");
_c = Game;
var _c;
__turbopack_context__.k.register(_c, "Game");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_game_bf2c2f1e._.js.map