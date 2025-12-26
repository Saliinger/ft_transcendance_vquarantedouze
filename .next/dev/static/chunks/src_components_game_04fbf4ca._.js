(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/game/PartInfo/PartInfo.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "PartInfo-module__WSLPHq__active",
  "content": "PartInfo-module__WSLPHq__content",
  "headerInfo": "PartInfo-module__WSLPHq__headerInfo",
  "itemHeader": "PartInfo-module__WSLPHq__itemHeader",
  "partInfo": "PartInfo-module__WSLPHq__partInfo",
});
}),
"[project]/src/components/game/PartInfo/PartInfo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PartInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$PartInfo$2f$PartInfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/game/PartInfo/PartInfo.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function PartInfo() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(41);
    if ($[0] !== "669b4802ead555f05904b4297d12cf2ed707530e7f8fa0d4c01040cd4916eea6") {
        for(let $i = 0; $i < 41; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "669b4802ead555f05904b4297d12cf2ed707530e7f8fa0d4c01040cd4916eea6";
    }
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("analysis");
    let t0;
    if ($[1] !== activeTab) {
        t0 = ({
            "PartInfo[getActiveIndex]": ()=>{
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
        })["PartInfo[getActiveIndex]"];
        $[1] = activeTab;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const getActiveIndex = t0;
    const t1 = getActiveIndex();
    const t2 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$PartInfo$2f$PartInfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemHeader} ${activeTab === "analysis" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$PartInfo$2f$PartInfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "PartInfo[<div>.onClick]": ()=>setActiveTab("analysis")
        })["PartInfo[<div>.onClick]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
                lineNumber: 62,
                columnNumber: 113
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t2) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            onClick: t3,
            children: [
                t4,
                "Analysis"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$PartInfo$2f$PartInfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemHeader} ${activeTab === "newgame" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$PartInfo$2f$PartInfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "PartInfo[<div>.onClick]": ()=>setActiveTab("newgame")
        })["PartInfo[<div>.onClick]"];
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
                lineNumber: 87,
                columnNumber: 113
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] !== t6) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            onClick: t7,
            children: [
                t8,
                "New Game"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    const t10 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$PartInfo$2f$PartInfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemHeader} ${activeTab === "game" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$PartInfo$2f$PartInfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t11;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "PartInfo[<div>.onClick]": ()=>setActiveTab("game")
        })["PartInfo[<div>.onClick]"];
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    let t12;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
                lineNumber: 112,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[12] = t12;
    } else {
        t12 = $[12];
    }
    let t13;
    if ($[13] !== t10) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            onClick: t11,
            children: [
                t12,
                "Game"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    const t14 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$PartInfo$2f$PartInfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemHeader} ${activeTab === "players" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$PartInfo$2f$PartInfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t15;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "PartInfo[<div>.onClick]": ()=>setActiveTab("players")
        })["PartInfo[<div>.onClick]"];
        $[15] = t15;
    } else {
        t15 = $[15];
    }
    let t16;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "24",
            height: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"
            }, void 0, false, {
                fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
                lineNumber: 137,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[16] = t16;
    } else {
        t16 = $[16];
    }
    let t17;
    if ($[17] !== t14) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t14,
            onClick: t15,
            children: [
                t16,
                "Players"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[17] = t14;
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] !== t1 || $[20] !== t13 || $[21] !== t17 || $[22] !== t5 || $[23] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$PartInfo$2f$PartInfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerInfo,
            "data-active": t1,
            children: [
                t5,
                t9,
                t13,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[19] = t1;
        $[20] = t13;
        $[21] = t17;
        $[22] = t5;
        $[23] = t9;
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    let t19;
    if ($[25] !== activeTab) {
        t19 = activeTab === "analysis" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Analysis content"
        }, void 0, false, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 164,
            columnNumber: 39
        }, this);
        $[25] = activeTab;
        $[26] = t19;
    } else {
        t19 = $[26];
    }
    let t20;
    if ($[27] !== activeTab) {
        t20 = activeTab === "newgame" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "New Game content"
        }, void 0, false, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 172,
            columnNumber: 38
        }, this);
        $[27] = activeTab;
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] !== activeTab) {
        t21 = activeTab === "game" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Game content"
        }, void 0, false, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 180,
            columnNumber: 35
        }, this);
        $[29] = activeTab;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== activeTab) {
        t22 = activeTab === "players" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Players content"
        }, void 0, false, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 188,
            columnNumber: 38
        }, this);
        $[31] = activeTab;
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] !== t19 || $[34] !== t20 || $[35] !== t21 || $[36] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$PartInfo$2f$PartInfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
            children: [
                t19,
                t20,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[33] = t19;
        $[34] = t20;
        $[35] = t21;
        $[36] = t22;
        $[37] = t23;
    } else {
        t23 = $[37];
    }
    let t24;
    if ($[38] !== t18 || $[39] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$PartInfo$2f$PartInfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].partInfo,
            children: [
                t18,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/PartInfo/PartInfo.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[38] = t18;
        $[39] = t23;
        $[40] = t24;
    } else {
        t24 = $[40];
    }
    return t24;
}
_s(PartInfo, "SF8CLrVv7MfCEqdM4RMvvpUjJFg=");
_c = PartInfo;
var _c;
__turbopack_context__.k.register(_c, "PartInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/Chat/Chat.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chatContainer": "Chat-module__rHO9oa__chatContainer",
  "chatHeader": "Chat-module__rHO9oa__chatHeader",
  "chatInput": "Chat-module__rHO9oa__chatInput",
  "chatMessages": "Chat-module__rHO9oa__chatMessages",
  "controlBtn": "Chat-module__rHO9oa__controlBtn",
  "controls": "Chat-module__rHO9oa__controls",
  "emojiBtn": "Chat-module__rHO9oa__emojiBtn",
  "messageContent": "Chat-module__rHO9oa__messageContent",
  "messageHeader": "Chat-module__rHO9oa__messageHeader",
  "messageText": "Chat-module__rHO9oa__messageText",
  "messageTime": "Chat-module__rHO9oa__messageTime",
  "moreBtn": "Chat-module__rHO9oa__moreBtn",
  "systemMessage": "Chat-module__rHO9oa__systemMessage",
  "systemText": "Chat-module__rHO9oa__systemText",
  "timer": "Chat-module__rHO9oa__timer",
  "userMessage": "Chat-module__rHO9oa__userMessage",
  "username": "Chat-module__rHO9oa__username",
});
}),
"[project]/src/components/game/Chat/Chat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/game/Chat/Chat.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Chat() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "3e3ea06a4e965bf12372841a89ed8a156fac73fdb32cdf24df1858ce66c5d069") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e3ea06a4e965bf12372841a89ed8a156fac73fdb32cdf24df1858ce66c5d069";
    }
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: 1,
                text: "Game started",
                time: new Date().toLocaleTimeString("fr-FR", {
                    hour: "2-digit",
                    minute: "2-digit"
                }),
                type: "system"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Chat[scrollToBottom]": ()=>{
                messagesEndRef.current?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        })["Chat[scrollToBottom]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const scrollToBottom = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Chat[useEffect()]": ()=>{
                scrollToBottom();
            }
        })["Chat[useEffect()]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== messages) {
        t3 = [
            messages
        ];
        $[4] = messages;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] !== message || $[7] !== messages) {
        const handleSendMessage = {
            "Chat[handleSendMessage]": (e)=>{
                e.preventDefault();
                if (message.trim()) {
                    const newMessage = {
                        id: messages.length + 1,
                        text: message,
                        time: new Date().toLocaleTimeString("fr-FR", {
                            hour: "2-digit",
                            minute: "2-digit"
                        }),
                        type: "user",
                        username: "You"
                    };
                    setMessages([
                        ...messages,
                        newMessage
                    ]);
                    setMessage("");
                }
            }
        }["Chat[handleSendMessage]"];
        t4 = ({
            "Chat[handleKeyPress]": (e_0)=>{
                if (e_0.key === "Enter") {
                    handleSendMessage(e_0);
                }
            }
        })["Chat[handleKeyPress]"];
        $[6] = message;
        $[7] = messages;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleKeyPress = t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    width: "20",
                    height: "20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z",
                        clipRule: "evenodd"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Chat/Chat.tsx",
                        lineNumber: 110,
                        columnNumber: 143
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Chat/Chat.tsx",
                    lineNumber: 110,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "15:10"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Chat/Chat.tsx",
                    lineNumber: 110,
                    columnNumber: 379
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/Chat/Chat.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlBtn,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "18",
                height: "18",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Chat/Chat.tsx",
                    lineNumber: 117,
                    columnNumber: 151
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/Chat/Chat.tsx",
                lineNumber: 117,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/game/Chat/Chat.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlBtn,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "18",
                height: "18",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    d: "M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z",
                    clipRule: "evenodd"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Chat/Chat.tsx",
                    lineNumber: 124,
                    columnNumber: 151
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/Chat/Chat.tsx",
                lineNumber: 124,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/game/Chat/Chat.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatHeader,
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
                    children: [
                        t6,
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlBtn,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                width: "18",
                                height: "18",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/Chat/Chat.tsx",
                                    lineNumber: 131,
                                    columnNumber: 231
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/Chat/Chat.tsx",
                                lineNumber: 131,
                                columnNumber: 128
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Chat/Chat.tsx",
                            lineNumber: 131,
                            columnNumber: 90
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/Chat/Chat.tsx",
                    lineNumber: 131,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/Chat/Chat.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== messages) {
        t9 = messages.map(_ChatMessagesMap);
        $[13] = messages;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: messagesEndRef
        }, void 0, false, {
            fileName: "[project]/src/components/game/Chat/Chat.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatMessages,
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/Chat/Chat.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[16] = t9;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "Chat[<input>.onChange]": (e_1)=>setMessage(e_1.target.value)
        })["Chat[<input>.onChange]"];
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== handleKeyPress || $[20] !== message) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Send a message...",
            value: message,
            onChange: t12,
            onKeyPress: handleKeyPress
        }, void 0, false, {
            fileName: "[project]/src/components/game/Chat/Chat.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[19] = handleKeyPress;
        $[20] = message;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emojiBtn,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "20",
                height: "20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z",
                    clipRule: "evenodd"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Chat/Chat.tsx",
                    lineNumber: 179,
                    columnNumber: 150
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/Chat/Chat.tsx",
                lineNumber: 179,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/game/Chat/Chat.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].moreBtn,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "20",
                height: "20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    d: "M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
                    clipRule: "evenodd"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Chat/Chat.tsx",
                    lineNumber: 186,
                    columnNumber: 149
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/Chat/Chat.tsx",
                lineNumber: 186,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/game/Chat/Chat.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== t13) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatInput,
            children: [
                t13,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/Chat/Chat.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[24] = t13;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== t11 || $[27] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatContainer,
            children: [
                t8,
                t11,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/Chat/Chat.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[26] = t11;
        $[27] = t16;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    return t17;
}
_s(Chat, "aUTnkiVGbIpDIYit54u1N+X6Shk=");
_c = Chat;
function _ChatMessagesMap(msg) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: msg.type === "system" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].systemMessage : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userMessage,
        children: msg.type === "system" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].systemText,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: msg.text
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Chat/Chat.tsx",
                    lineNumber: 211,
                    columnNumber: 166
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageTime,
                    children: msg.time
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Chat/Chat.tsx",
                    lineNumber: 211,
                    columnNumber: 189
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/Chat/Chat.tsx",
            lineNumber: 211,
            columnNumber: 131
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageContent,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].username,
                            children: msg.username
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Chat/Chat.tsx",
                            lineNumber: 211,
                            columnNumber: 329
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageTime,
                            children: msg.time
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Chat/Chat.tsx",
                            lineNumber: 211,
                            columnNumber: 384
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/Chat/Chat.tsx",
                    lineNumber: 211,
                    columnNumber: 291
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Chat$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageText,
                    children: msg.text
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Chat/Chat.tsx",
                    lineNumber: 211,
                    columnNumber: 444
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/Chat/Chat.tsx",
            lineNumber: 211,
            columnNumber: 252
        }, this)
    }, msg.id, false, {
        fileName: "[project]/src/components/game/Chat/Chat.tsx",
        lineNumber: 211,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Chat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_game_04fbf4ca._.js.map