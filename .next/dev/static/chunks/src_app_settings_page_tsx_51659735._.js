(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/settings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './Settings.module.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SettingsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(49);
    if ($[0] !== "c6ef2e6498f1d2ce1e890abd521a810289ed1f68025f757a358df5635d5a47db") {
        for(let $i = 0; $i < 49; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c6ef2e6498f1d2ce1e890abd521a810289ed1f68025f757a358df5635d5a47db";
    }
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("account");
    const [showDeleteConfirm, setShowDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAnonymizeConfirm, setShowAnonymizeConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: styles.title,
            children: "Paramètres"
        }, void 0, false, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const t1 = `${styles.sidebarItem} ${activeSection === "account" ? styles.active : ""}`;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "SettingsPage[<button>.onClick]": ()=>setActiveSection("account")
        })["SettingsPage[<button>.onClick]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            }, void 0, false, {
                fileName: "[project]/src/app/settings/page.tsx",
                lineNumber: 36,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== t1) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t1,
            onClick: t2,
            children: [
                t3,
                "Compte"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = `${styles.sidebarItem} ${activeSection === "security" ? styles.active : ""}`;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "SettingsPage[<button>.onClick]": ()=>setActiveSection("security")
        })["SettingsPage[<button>.onClick]"];
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
            }, void 0, false, {
                fileName: "[project]/src/app/settings/page.tsx",
                lineNumber: 61,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== t5) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t5,
            onClick: t6,
            children: [
                t7,
                "Sécurité"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    const t9 = `${styles.sidebarItem} ${activeSection === "privacy" ? styles.active : ""}`;
    let t10;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "SettingsPage[<button>.onClick]": ()=>setActiveSection("privacy")
        })["SettingsPage[<button>.onClick]"];
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
            }, void 0, false, {
                fileName: "[project]/src/app/settings/page.tsx",
                lineNumber: 86,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 86,
            columnNumber: 11
        }, this);
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    let t12;
    if ($[12] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t9,
            onClick: t10,
            children: [
                t11,
                "Confidentialité"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[12] = t9;
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    const t13 = `${styles.sidebarItem} ${activeSection === "notifications" ? styles.active : ""}`;
    let t14;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "SettingsPage[<button>.onClick]": ()=>setActiveSection("notifications")
        })["SettingsPage[<button>.onClick]"];
        $[14] = t14;
    } else {
        t14 = $[14];
    }
    let t15;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            }, void 0, false, {
                fileName: "[project]/src/app/settings/page.tsx",
                lineNumber: 111,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, this);
        $[15] = t15;
    } else {
        t15 = $[15];
    }
    let t16;
    if ($[16] !== t13) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t13,
            onClick: t14,
            children: [
                t15,
                "Notifications"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[16] = t13;
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    const t17 = `${styles.sidebarItem} ${activeSection === "data" ? styles.active : ""}`;
    let t18;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "SettingsPage[<button>.onClick]": ()=>setActiveSection("data")
        })["SettingsPage[<button>.onClick]"];
        $[18] = t18;
    } else {
        t18 = $[18];
    }
    let t19;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"
            }, void 0, false, {
                fileName: "[project]/src/app/settings/page.tsx",
                lineNumber: 136,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[19] = t19;
    } else {
        t19 = $[19];
    }
    let t20;
    if ($[20] !== t17) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t17,
            onClick: t18,
            children: [
                t19,
                "Mes données"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[20] = t17;
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] !== t12 || $[23] !== t16 || $[24] !== t20 || $[25] !== t4 || $[26] !== t8) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: styles.sidebar,
            children: [
                t4,
                t8,
                t12,
                t16,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[22] = t12;
        $[23] = t16;
        $[24] = t20;
        $[25] = t4;
        $[26] = t8;
        $[27] = t21;
    } else {
        t21 = $[27];
    }
    let t22;
    if ($[28] !== activeSection) {
        t22 = activeSection === "account" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: styles.section,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: styles.sectionTitle,
                    children: "Informations du compte"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 163,
                    columnNumber: 74
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.label,
                            children: "Photo de profil"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 163,
                            columnNumber: 171
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: styles.avatarUpload,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.avatarPreview,
                                    children: "J"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 263
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.avatarActions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: styles.btnSecondary,
                                            children: "Changer la photo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 346
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: styles.btnDanger,
                                            children: "Supprimer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 411
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 308
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 163,
                            columnNumber: 226
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 163,
                    columnNumber: 137
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.label,
                            htmlFor: "username",
                            children: "Nom d'utilisateur"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 163,
                            columnNumber: 518
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            id: "username",
                            className: styles.input,
                            defaultValue: "JALBISER"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 163,
                            columnNumber: 594
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 163,
                    columnNumber: 484
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.label,
                            htmlFor: "email",
                            children: "Adresse email"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 163,
                            columnNumber: 718
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            id: "email",
                            className: styles.input,
                            defaultValue: "jalbiser@example.com"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 163,
                            columnNumber: 787
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: styles.hint,
                            children: "Utilisée pour la récupération de compte et les notifications importantes"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 163,
                            columnNumber: 881
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 163,
                    columnNumber: 684
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.label,
                            htmlFor: "bio",
                            children: "Biographie"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 163,
                            columnNumber: 1024
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            id: "bio",
                            className: styles.textarea,
                            rows: 4,
                            defaultValue: "Passionn\xE9 d'\xE9checs depuis toujours ! Toujours pr\xEAt pour une partie enflamm\xE9e \u265F\uFE0F"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 163,
                            columnNumber: 1088
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 163,
                    columnNumber: 990
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: styles.btnPrimary,
                    children: "Enregistrer les modifications"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 163,
                    columnNumber: 1271
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 163,
            columnNumber: 42
        }, this);
        $[28] = activeSection;
        $[29] = t22;
    } else {
        t22 = $[29];
    }
    let t23;
    if ($[30] !== activeSection) {
        t23 = activeSection === "security" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: styles.section,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: styles.sectionTitle,
                    children: "Sécurité"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 171,
                    columnNumber: 75
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.label,
                            htmlFor: "currentPassword",
                            children: "Mot de passe actuel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 171,
                            columnNumber: 158
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            id: "currentPassword",
                            className: styles.input,
                            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 171,
                            columnNumber: 243
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 171,
                    columnNumber: 124
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.label,
                            htmlFor: "newPassword",
                            children: "Nouveau mot de passe"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 171,
                            columnNumber: 419
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            id: "newPassword",
                            className: styles.input,
                            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 171,
                            columnNumber: 501
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 171,
                    columnNumber: 385
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.label,
                            htmlFor: "confirmPassword",
                            children: "Confirmer le mot de passe"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 171,
                            columnNumber: 673
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            id: "confirmPassword",
                            className: styles.input,
                            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 171,
                            columnNumber: 764
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: styles.hint,
                            children: "Le mot de passe doit contenir au moins 8 caractères"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 171,
                            columnNumber: 900
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 171,
                    columnNumber: 639
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: styles.btnPrimary,
                    children: "Changer le mot de passe"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 171,
                    columnNumber: 988
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.divider
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 171,
                    columnNumber: 1058
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: styles.subsectionTitle,
                    children: "Authentification à deux facteurs"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 171,
                    columnNumber: 1092
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: styles.description,
                    children: "Ajoutez une couche de sécurité supplémentaire à votre compte"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 171,
                    columnNumber: 1168
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: styles.btnSecondary,
                    children: "Activer 2FA"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 171,
                    columnNumber: 1266
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.divider
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 171,
                    columnNumber: 1326
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: styles.subsectionTitle,
                    children: "Sessions actives"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 171,
                    columnNumber: 1360
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.sessionsList,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: styles.sessionItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: styles.sessionDevice,
                                            children: "MacBook Pro - Chrome"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 1498
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: styles.sessionInfo,
                                            children: "Paris, France • Actif maintenant"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 1562
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 1493
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: styles.currentSession,
                                    children: "Session actuelle"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 1642
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 171,
                            columnNumber: 1457
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: styles.sessionItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: styles.sessionDevice,
                                            children: "iPhone - Safari"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 1752
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: styles.sessionInfo,
                                            children: "Paris, France • Il y a 2 heures"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 1811
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 1747
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: styles.btnDangerSmall,
                                    children: "Déconnecter"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 1890
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 171,
                            columnNumber: 1711
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 171,
                    columnNumber: 1420
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: styles.btnDanger,
                    children: "Déconnecter toutes les sessions"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 171,
                    columnNumber: 1964
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 171,
            columnNumber: 43
        }, this);
        $[30] = activeSection;
        $[31] = t23;
    } else {
        t23 = $[31];
    }
    let t24;
    if ($[32] !== activeSection) {
        t24 = activeSection === "privacy" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: styles.section,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: styles.sectionTitle,
                    children: "Confidentialité"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 179,
                    columnNumber: 74
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingLabel,
                                    children: "Profil public"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 171
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingDescription,
                                    children: "Permettre aux autres utilisateurs de voir votre profil"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 227
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 179,
                            columnNumber: 166
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 369
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: styles.slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 416
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 179,
                            columnNumber: 336
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 179,
                    columnNumber: 130
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingLabel,
                                    children: "Afficher les statistiques"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 505
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingDescription,
                                    children: "Rendre vos statistiques visibles sur votre profil public"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 573
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 179,
                            columnNumber: 500
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 717
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: styles.slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 764
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 179,
                            columnNumber: 684
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 179,
                    columnNumber: 464
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingLabel,
                                    children: "Historique des parties"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 853
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingDescription,
                                    children: "Permettre aux autres de voir vos parties précédentes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 918
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 179,
                            columnNumber: 848
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 1058
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: styles.slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 1105
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 179,
                            columnNumber: 1025
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 179,
                    columnNumber: 812
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingLabel,
                                    children: "Statut en ligne"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 1194
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingDescription,
                                    children: "Afficher quand vous êtes en ligne"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 1252
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 179,
                            columnNumber: 1189
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 1373
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: styles.slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 1420
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 179,
                            columnNumber: 1340
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 179,
                    columnNumber: 1153
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingLabel,
                                    children: "Invitations de parties"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 1509
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingDescription,
                                    children: "Qui peut vous inviter à jouer"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 1574
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 179,
                            columnNumber: 1504
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: styles.select,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Tout le monde"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 1692
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Amis uniquement"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 1722
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Personne"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 1754
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 179,
                            columnNumber: 1658
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 179,
                    columnNumber: 1468
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 179,
            columnNumber: 42
        }, this);
        $[32] = activeSection;
        $[33] = t24;
    } else {
        t24 = $[33];
    }
    let t25;
    if ($[34] !== activeSection) {
        t25 = activeSection === "notifications" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: styles.section,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: styles.sectionTitle,
                    children: "Notifications"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 187,
                    columnNumber: 80
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: styles.subsectionTitle,
                    children: "Notifications par email"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 187,
                    columnNumber: 134
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingLabel,
                                    children: "Nouvelles parties"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 242
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingDescription,
                                    children: "Recevoir un email quand quelqu'un vous invite à jouer"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 302
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 187,
                            columnNumber: 237
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 443
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: styles.slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 490
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 187,
                            columnNumber: 410
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 187,
                    columnNumber: 201
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingLabel,
                                    children: "Messages privés"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 579
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingDescription,
                                    children: "Être notifié des nouveaux messages"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 637
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 187,
                            columnNumber: 574
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 759
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: styles.slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 806
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 187,
                            columnNumber: 726
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 187,
                    columnNumber: 538
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingLabel,
                                    children: "Demandes d'amis"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 895
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingDescription,
                                    children: "Notifications des nouvelles demandes d'amis"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 953
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 187,
                            columnNumber: 890
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 1084
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: styles.slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 1131
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 187,
                            columnNumber: 1051
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 187,
                    columnNumber: 854
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.divider
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 187,
                    columnNumber: 1179
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: styles.subsectionTitle,
                    children: "Notifications push"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 187,
                    columnNumber: 1213
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingLabel,
                                    children: "Activer les notifications push"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 1316
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingDescription,
                                    children: "Recevoir des notifications dans votre navigateur"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 1389
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 187,
                            columnNumber: 1311
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 1525
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: styles.slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 1550
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 187,
                            columnNumber: 1492
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 187,
                    columnNumber: 1275
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.divider
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 187,
                    columnNumber: 1598
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: styles.subsectionTitle,
                    children: "Newsletter"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 187,
                    columnNumber: 1632
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingLabel,
                                    children: "Newsletter hebdomadaire"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 1727
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.settingDescription,
                                    children: "Recevoir un résumé de vos parties et actualités"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 1793
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 187,
                            columnNumber: 1722
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: styles.switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 1928
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: styles.slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 1975
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 187,
                            columnNumber: 1895
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 187,
                    columnNumber: 1686
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 187,
            columnNumber: 48
        }, this);
        $[34] = activeSection;
        $[35] = t25;
    } else {
        t25 = $[35];
    }
    let t26;
    if ($[36] !== activeSection || $[37] !== showAnonymizeConfirm || $[38] !== showDeleteConfirm) {
        t26 = activeSection === "data" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: styles.section,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: styles.sectionTitle,
                    children: "Gestion des données"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 195,
                    columnNumber: 71
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: styles.description,
                    children: "Conformément au RGPD, vous avez le droit de gérer vos données personnelles"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 195,
                    columnNumber: 131
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.dataSection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: styles.subsectionTitle,
                            children: "Exporter mes données"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 195,
                            columnNumber: 279
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: styles.description,
                            children: "Téléchargez une copie de toutes vos données personnelles (profil, statistiques, parties, messages)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 195,
                            columnNumber: 343
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: styles.btnSecondary,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/settings/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 587
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 519
                                }, this),
                                "Télécharger mes données"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 195,
                            columnNumber: 479
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 195,
                    columnNumber: 243
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.divider
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 195,
                    columnNumber: 758
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.dataSection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: styles.subsectionTitle,
                            children: "Anonymiser mon compte"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 195,
                            columnNumber: 828
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: styles.description,
                            children: "Remplacer toutes vos informations personnelles par des données anonymes. Vos parties et statistiques seront conservées mais ne seront plus liées à votre identité."
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 195,
                            columnNumber: 893
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: styles.btnWarning,
                            onClick: {
                                "SettingsPage[<button>.onClick]": ()=>setShowAnonymizeConfirm(true)
                            }["SettingsPage[<button>.onClick]"],
                            children: "Anonymiser mon compte"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 195,
                            columnNumber: 1093
                        }, this),
                        showAnonymizeConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: styles.confirmBox,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: styles.confirmTitle,
                                    children: "⚠️ Confirmer l'anonymisation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 136
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: styles.confirmText,
                                    children: "Cette action remplacera vos informations personnelles (nom, email, photo) par des données anonymes. Vous pourrez toujours vous connecter mais votre identité ne sera plus visible."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 205
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: styles.confirmText,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Cette action est irréversible."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/settings/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 455
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 421
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.confirmActions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: styles.btnSecondary,
                                            onClick: {
                                                "SettingsPage[<button>.onClick]": ()=>setShowAnonymizeConfirm(false)
                                            }["SettingsPage[<button>.onClick]"],
                                            children: "Annuler"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 545
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: styles.btnWarning,
                                            children: "Confirmer l'anonymisation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 66
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 506
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 197,
                            columnNumber: 101
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 195,
                    columnNumber: 792
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.divider
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 199,
                    columnNumber: 157
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.dataSection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: styles.subsectionTitle,
                            children: "Supprimer mon compte"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 199,
                            columnNumber: 227
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: styles.description,
                            children: "Supprimer définitivement votre compte et toutes vos données. Cette action est irréversible."
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 199,
                            columnNumber: 291
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: styles.btnDanger,
                            onClick: {
                                "SettingsPage[<button>.onClick]": ()=>setShowDeleteConfirm(true)
                            }["SettingsPage[<button>.onClick]"],
                            children: "Supprimer mon compte"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 199,
                            columnNumber: 420
                        }, this),
                        showDeleteConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: styles.confirmBox,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: styles.confirmTitle,
                                    children: "⚠️ Confirmer la suppression"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 132
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: styles.confirmText,
                                    children: "Êtes-vous sûr de vouloir supprimer votre compte ? Cette action supprimera :"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 200
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: styles.confirmList,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Votre profil et toutes vos informations personnelles"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 348
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Toutes vos statistiques et historiques de parties"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 409
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Vos amis et messages"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 467
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Tous vos paramètres et préférences"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 496
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 313
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: styles.confirmText,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Cette action est définitive et irréversible."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/settings/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 578
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 544
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: styles.label,
                                            children: 'Tapez "SUPPRIMER" pour confirmer'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 677
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: styles.input,
                                            placeholder: "SUPPRIMER"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 749
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 643
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: styles.confirmActions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: styles.btnSecondary,
                                            onClick: {
                                                "SettingsPage[<button>.onClick]": ()=>setShowDeleteConfirm(false)
                                            }["SettingsPage[<button>.onClick]"],
                                            children: "Annuler"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 864
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: styles.btnDanger,
                                            children: "Supprimer définitivement"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 66
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 825
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 201,
                            columnNumber: 97
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 199,
                    columnNumber: 191
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.divider
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 203,
                    columnNumber: 155
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.dataSection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: styles.subsectionTitle,
                            children: "Vos droits RGPD"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 203,
                            columnNumber: 225
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: styles.rgpdList,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✓ Droit d'accès à vos données"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 316
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✓ Droit de rectification"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 354
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✓ Droit à l'effacement (\"droit à l'oubli\")"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 387
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✓ Droit à la limitation du traitement"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 438
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✓ Droit à la portabilité des données"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 484
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✓ Droit d'opposition"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 529
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 203,
                            columnNumber: 284
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: styles.description,
                            children: [
                                "Pour toute question concernant vos données personnelles, contactez-nous à ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:privacy@example.com",
                                    className: styles.link,
                                    children: "privacy@example.com"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 671
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 203,
                            columnNumber: 563
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 203,
                    columnNumber: 189
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 195,
            columnNumber: 39
        }, this);
        $[36] = activeSection;
        $[37] = showAnonymizeConfirm;
        $[38] = showDeleteConfirm;
        $[39] = t26;
    } else {
        t26 = $[39];
    }
    let t27;
    if ($[40] !== t22 || $[41] !== t23 || $[42] !== t24 || $[43] !== t25 || $[44] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: styles.content,
            children: [
                t22,
                t23,
                t24,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[40] = t22;
        $[41] = t23;
        $[42] = t24;
        $[43] = t25;
        $[44] = t26;
        $[45] = t27;
    } else {
        t27 = $[45];
    }
    let t28;
    if ($[46] !== t21 || $[47] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: styles.wrapper,
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.container,
                    children: [
                        t21,
                        t27
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 225,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[46] = t21;
        $[47] = t27;
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    return t28;
}
_s(SettingsPage, "6/iWT8bn394I9gg+IvGzMRM3GU8=");
_c = SettingsPage;
var _c;
__turbopack_context__.k.register(_c, "SettingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_settings_page_tsx_51659735._.js.map