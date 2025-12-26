(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/settings/Settings.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Settings-module__h9_rbW__active",
  "avatarActions": "Settings-module__h9_rbW__avatarActions",
  "avatarPreview": "Settings-module__h9_rbW__avatarPreview",
  "avatarUpload": "Settings-module__h9_rbW__avatarUpload",
  "btnDanger": "Settings-module__h9_rbW__btnDanger",
  "btnDangerSmall": "Settings-module__h9_rbW__btnDangerSmall",
  "btnPrimary": "Settings-module__h9_rbW__btnPrimary",
  "btnSecondary": "Settings-module__h9_rbW__btnSecondary",
  "btnWarning": "Settings-module__h9_rbW__btnWarning",
  "confirmActions": "Settings-module__h9_rbW__confirmActions",
  "confirmBox": "Settings-module__h9_rbW__confirmBox",
  "confirmList": "Settings-module__h9_rbW__confirmList",
  "confirmText": "Settings-module__h9_rbW__confirmText",
  "confirmTitle": "Settings-module__h9_rbW__confirmTitle",
  "container": "Settings-module__h9_rbW__container",
  "content": "Settings-module__h9_rbW__content",
  "currentSession": "Settings-module__h9_rbW__currentSession",
  "dataSection": "Settings-module__h9_rbW__dataSection",
  "description": "Settings-module__h9_rbW__description",
  "divider": "Settings-module__h9_rbW__divider",
  "formGroup": "Settings-module__h9_rbW__formGroup",
  "hint": "Settings-module__h9_rbW__hint",
  "input": "Settings-module__h9_rbW__input",
  "label": "Settings-module__h9_rbW__label",
  "link": "Settings-module__h9_rbW__link",
  "rgpdList": "Settings-module__h9_rbW__rgpdList",
  "section": "Settings-module__h9_rbW__section",
  "sectionTitle": "Settings-module__h9_rbW__sectionTitle",
  "select": "Settings-module__h9_rbW__select",
  "sessionDevice": "Settings-module__h9_rbW__sessionDevice",
  "sessionInfo": "Settings-module__h9_rbW__sessionInfo",
  "sessionItem": "Settings-module__h9_rbW__sessionItem",
  "sessionsList": "Settings-module__h9_rbW__sessionsList",
  "settingDescription": "Settings-module__h9_rbW__settingDescription",
  "settingItem": "Settings-module__h9_rbW__settingItem",
  "settingLabel": "Settings-module__h9_rbW__settingLabel",
  "sidebar": "Settings-module__h9_rbW__sidebar",
  "sidebarItem": "Settings-module__h9_rbW__sidebarItem",
  "slider": "Settings-module__h9_rbW__slider",
  "subsectionTitle": "Settings-module__h9_rbW__subsectionTitle",
  "switch": "Settings-module__h9_rbW__switch",
  "textarea": "Settings-module__h9_rbW__textarea",
  "title": "Settings-module__h9_rbW__title",
  "wrapper": "Settings-module__h9_rbW__wrapper",
});
}),
"[project]/src/app/settings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/settings/Settings.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SettingsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "e9883cf165c1f130dd94e89f114b48456096d0003f1fed3f0a675c7a83261f50") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e9883cf165c1f130dd94e89f114b48456096d0003f1fed3f0a675c7a83261f50";
    }
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("account");
    const [showDeleteConfirm, setShowDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAnonymizeConfirm, setShowAnonymizeConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== activeSection) {
        t0 = activeSection === "account" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                    children: "Informations du compte"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 19,
                    columnNumber: 73
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                            children: "Photo de profil"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 19,
                            columnNumber: 170
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarUpload,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarPreview,
                                    children: "J"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 19,
                                    columnNumber: 262
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarActions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSecondary,
                                            children: "Changer la photo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 19,
                                            columnNumber: 345
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnDanger,
                                            children: "Supprimer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 19,
                                            columnNumber: 410
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 19,
                                    columnNumber: 307
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 19,
                            columnNumber: 225
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 19,
                    columnNumber: 136
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                            htmlFor: "username",
                            children: "Nom d'utilisateur"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 19,
                            columnNumber: 517
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            id: "username",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                            defaultValue: "JALBISER"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 19,
                            columnNumber: 593
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 19,
                    columnNumber: 483
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                            htmlFor: "email",
                            children: "Adresse email"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 19,
                            columnNumber: 717
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            id: "email",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                            defaultValue: "jalbiser@example.com"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 19,
                            columnNumber: 786
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                            children: "Utilisée pour la récupération de compte et les notifications importantes"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 19,
                            columnNumber: 880
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 19,
                    columnNumber: 683
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                            htmlFor: "bio",
                            children: "Biographie"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 19,
                            columnNumber: 1023
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            id: "bio",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                            rows: 4,
                            defaultValue: "Passionn\xE9 d'\xE9checs depuis toujours ! Toujours pr\xEAt pour une partie enflamm\xE9e \u265F\uFE0F"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 19,
                            columnNumber: 1087
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 19,
                    columnNumber: 989
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnPrimary,
                    children: "Enregistrer les modifications"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 19,
                    columnNumber: 1270
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 19,
            columnNumber: 41
        }, this);
        $[1] = activeSection;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== activeSection) {
        t1 = activeSection === "security" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                    children: "Sécurité"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 27,
                    columnNumber: 74
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                            htmlFor: "currentPassword",
                            children: "Mot de passe actuel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 27,
                            columnNumber: 157
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            id: "currentPassword",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 27,
                            columnNumber: 242
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 27,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                            htmlFor: "newPassword",
                            children: "Nouveau mot de passe"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 27,
                            columnNumber: 418
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            id: "newPassword",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 27,
                            columnNumber: 500
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 27,
                    columnNumber: 384
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                            htmlFor: "confirmPassword",
                            children: "Confirmer le mot de passe"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 27,
                            columnNumber: 672
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            id: "confirmPassword",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 27,
                            columnNumber: 763
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                            children: "Le mot de passe doit contenir au moins 8 caractères"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 27,
                            columnNumber: 899
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 27,
                    columnNumber: 638
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnPrimary,
                    children: "Changer le mot de passe"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 27,
                    columnNumber: 987
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 27,
                    columnNumber: 1057
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subsectionTitle,
                    children: "Authentification à deux facteurs"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 27,
                    columnNumber: 1091
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                    children: "Ajoutez une couche de sécurité supplémentaire à votre compte"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 27,
                    columnNumber: 1167
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSecondary,
                    children: "Activer 2FA"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 27,
                    columnNumber: 1265
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 27,
                    columnNumber: 1325
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subsectionTitle,
                    children: "Sessions actives"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 27,
                    columnNumber: 1359
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sessionsList,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sessionItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sessionDevice,
                                            children: "MacBook Pro - Chrome"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 27,
                                            columnNumber: 1497
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sessionInfo,
                                            children: "Paris, France • Actif maintenant"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 27,
                                            columnNumber: 1561
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 1492
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].currentSession,
                                    children: "Session actuelle"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 1641
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 27,
                            columnNumber: 1456
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sessionItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sessionDevice,
                                            children: "iPhone - Safari"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 27,
                                            columnNumber: 1751
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sessionInfo,
                                            children: "Paris, France • Il y a 2 heures"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 27,
                                            columnNumber: 1810
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 1746
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnDangerSmall,
                                    children: "Déconnecter"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 1889
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 27,
                            columnNumber: 1710
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 27,
                    columnNumber: 1419
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnDanger,
                    children: "Déconnecter toutes les sessions"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 27,
                    columnNumber: 1963
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 27,
            columnNumber: 42
        }, this);
        $[3] = activeSection;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== activeSection) {
        t2 = activeSection === "privacy" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                    children: "Confidentialité"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 35,
                    columnNumber: 73
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingLabel,
                                    children: "Profil public"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 170
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingDescription,
                                    children: "Permettre aux autres utilisateurs de voir votre profil"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 226
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 35,
                            columnNumber: 165
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 368
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 415
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 35,
                            columnNumber: 335
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 35,
                    columnNumber: 129
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingLabel,
                                    children: "Afficher les statistiques"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 504
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingDescription,
                                    children: "Rendre vos statistiques visibles sur votre profil public"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 572
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 35,
                            columnNumber: 499
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 716
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 763
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 35,
                            columnNumber: 683
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 35,
                    columnNumber: 463
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingLabel,
                                    children: "Historique des parties"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 852
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingDescription,
                                    children: "Permettre aux autres de voir vos parties précédentes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 917
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 35,
                            columnNumber: 847
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 1057
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 1104
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 35,
                            columnNumber: 1024
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 35,
                    columnNumber: 811
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingLabel,
                                    children: "Statut en ligne"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 1193
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingDescription,
                                    children: "Afficher quand vous êtes en ligne"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 1251
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 35,
                            columnNumber: 1188
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 1372
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 1419
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 35,
                            columnNumber: 1339
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 35,
                    columnNumber: 1152
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingLabel,
                                    children: "Invitations de parties"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 1508
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingDescription,
                                    children: "Qui peut vous inviter à jouer"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 1573
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 35,
                            columnNumber: 1503
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Tout le monde"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 1691
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Amis uniquement"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 1721
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Personne"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 1753
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 35,
                            columnNumber: 1657
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 35,
                    columnNumber: 1467
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 35,
            columnNumber: 41
        }, this);
        $[5] = activeSection;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== activeSection) {
        t3 = activeSection === "notifications" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                    children: "Notifications"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 43,
                    columnNumber: 79
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subsectionTitle,
                    children: "Notifications par email"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 43,
                    columnNumber: 133
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingLabel,
                                    children: "Nouvelles parties"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 241
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingDescription,
                                    children: "Recevoir un email quand quelqu'un vous invite à jouer"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 301
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 43,
                            columnNumber: 236
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 442
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 489
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 43,
                            columnNumber: 409
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 43,
                    columnNumber: 200
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingLabel,
                                    children: "Messages privés"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 578
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingDescription,
                                    children: "Être notifié des nouveaux messages"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 636
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 43,
                            columnNumber: 573
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 758
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 805
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 43,
                            columnNumber: 725
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 43,
                    columnNumber: 537
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingLabel,
                                    children: "Demandes d'amis"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 894
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingDescription,
                                    children: "Notifications des nouvelles demandes d'amis"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 952
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 43,
                            columnNumber: 889
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 1083
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 1130
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 43,
                            columnNumber: 1050
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 43,
                    columnNumber: 853
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 43,
                    columnNumber: 1178
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subsectionTitle,
                    children: "Notifications push"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 43,
                    columnNumber: 1212
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingLabel,
                                    children: "Activer les notifications push"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 1315
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingDescription,
                                    children: "Recevoir des notifications dans votre navigateur"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 1388
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 43,
                            columnNumber: 1310
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 1524
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 1549
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 43,
                            columnNumber: 1491
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 43,
                    columnNumber: 1274
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 43,
                    columnNumber: 1597
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subsectionTitle,
                    children: "Newsletter"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 43,
                    columnNumber: 1631
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingLabel,
                                    children: "Newsletter hebdomadaire"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 1726
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingDescription,
                                    children: "Recevoir un résumé de vos parties et actualités"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 1792
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 43,
                            columnNumber: 1721
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 1927
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 1974
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 43,
                            columnNumber: 1894
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 43,
                    columnNumber: 1685
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 43,
            columnNumber: 47
        }, this);
        $[7] = activeSection;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== activeSection || $[10] !== showAnonymizeConfirm || $[11] !== showDeleteConfirm) {
        t4 = activeSection === "data" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                    children: "Gestion des données"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 51,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                    children: "Conformément au RGPD, vous avez le droit de gérer vos données personnelles"
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 51,
                    columnNumber: 130
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dataSection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subsectionTitle,
                            children: "Exporter mes données"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 51,
                            columnNumber: 278
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            children: "Téléchargez une copie de toutes vos données personnelles (profil, statistiques, parties, messages)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 51,
                            columnNumber: 342
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSecondary,
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
                                        lineNumber: 51,
                                        columnNumber: 586
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 518
                                }, this),
                                "Télécharger mes données"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 51,
                            columnNumber: 478
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 51,
                    columnNumber: 242
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 51,
                    columnNumber: 757
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dataSection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subsectionTitle,
                            children: "Anonymiser mon compte"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 51,
                            columnNumber: 827
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            children: "Remplacer toutes vos informations personnelles par des données anonymes. Vos parties et statistiques seront conservées mais ne seront plus liées à votre identité."
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 51,
                            columnNumber: 892
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnWarning,
                            onClick: {
                                "SettingsPage[<button>.onClick]": ()=>setShowAnonymizeConfirm(true)
                            }["SettingsPage[<button>.onClick]"],
                            children: "Anonymiser mon compte"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 51,
                            columnNumber: 1092
                        }, this),
                        showAnonymizeConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmBox,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmTitle,
                                    children: "⚠️ Confirmer l'anonymisation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 136
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmText,
                                    children: "Cette action remplacera vos informations personnelles (nom, email, photo) par des données anonymes. Vous pourrez toujours vous connecter mais votre identité ne sera plus visible."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 205
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmText,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Cette action est irréversible."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/settings/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 455
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 421
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmActions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSecondary,
                                            onClick: {
                                                "SettingsPage[<button>.onClick]": ()=>setShowAnonymizeConfirm(false)
                                            }["SettingsPage[<button>.onClick]"],
                                            children: "Annuler"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 53,
                                            columnNumber: 545
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnWarning,
                                            children: "Confirmer l'anonymisation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 66
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 506
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 53,
                            columnNumber: 101
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 51,
                    columnNumber: 791
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 55,
                    columnNumber: 157
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dataSection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subsectionTitle,
                            children: "Supprimer mon compte"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 55,
                            columnNumber: 227
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            children: "Supprimer définitivement votre compte et toutes vos données. Cette action est irréversible."
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 55,
                            columnNumber: 291
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnDanger,
                            onClick: {
                                "SettingsPage[<button>.onClick]": ()=>setShowDeleteConfirm(true)
                            }["SettingsPage[<button>.onClick]"],
                            children: "Supprimer mon compte"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 55,
                            columnNumber: 420
                        }, this),
                        showDeleteConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmBox,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmTitle,
                                    children: "⚠️ Confirmer la suppression"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 132
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmText,
                                    children: "Êtes-vous sûr de vouloir supprimer votre compte ? Cette action supprimera :"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 200
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmList,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Votre profil et toutes vos informations personnelles"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 348
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Toutes vos statistiques et historiques de parties"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 409
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Vos amis et messages"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 467
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Tous vos paramètres et préférences"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 496
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 313
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmText,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Cette action est définitive et irréversible."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/settings/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 578
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 544
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                            children: 'Tapez "SUPPRIMER" pour confirmer'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 677
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                            placeholder: "SUPPRIMER"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 749
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 643
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmActions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSecondary,
                                            onClick: {
                                                "SettingsPage[<button>.onClick]": ()=>setShowDeleteConfirm(false)
                                            }["SettingsPage[<button>.onClick]"],
                                            children: "Annuler"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 864
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnDanger,
                                            children: "Supprimer définitivement"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 66
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 825
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 57,
                            columnNumber: 97
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 55,
                    columnNumber: 191
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 59,
                    columnNumber: 155
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dataSection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subsectionTitle,
                            children: "Vos droits RGPD"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 59,
                            columnNumber: 225
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rgpdList,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✓ Droit d'accès à vos données"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 316
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✓ Droit de rectification"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 354
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✓ Droit à l'effacement (\"droit à l'oubli\")"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 387
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✓ Droit à la limitation du traitement"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 438
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✓ Droit à la portabilité des données"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 484
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "✓ Droit d'opposition"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 529
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 59,
                            columnNumber: 284
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            children: [
                                "Pour toute question concernant vos données personnelles, contactez-nous à ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:privacy@example.com",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                                    children: "privacy@example.com"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 671
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 59,
                            columnNumber: 563
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 59,
                    columnNumber: 189
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 51,
            columnNumber: 38
        }, this);
        $[9] = activeSection;
        $[10] = showAnonymizeConfirm;
        $[11] = showDeleteConfirm;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t0 || $[14] !== t1 || $[15] !== t2 || $[16] !== t3 || $[17] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
            children: [
                t0,
                t1,
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[13] = t0;
        $[14] = t1;
        $[15] = t2;
        $[16] = t3;
        $[17] = t4;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    const t6 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarItem} ${activeSection === "account" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t7;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "SettingsPage[<button>.onClick]": ()=>setActiveSection("account")
        })["SettingsPage[<button>.onClick]"];
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            }, void 0, false, {
                fileName: "[project]/src/app/settings/page.tsx",
                lineNumber: 91,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== t6) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t6,
            onClick: t7,
            children: [
                t8,
                "Compte"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[21] = t6;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    const t10 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarItem} ${activeSection === "security" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t11;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "SettingsPage[<button>.onClick]": ()=>setActiveSection("security")
        })["SettingsPage[<button>.onClick]"];
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
            }, void 0, false, {
                fileName: "[project]/src/app/settings/page.tsx",
                lineNumber: 116,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t10) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t10,
            onClick: t11,
            children: [
                t12,
                "Sécurité"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    const t14 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarItem} ${activeSection === "privacy" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t15;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "SettingsPage[<button>.onClick]": ()=>setActiveSection("privacy")
        })["SettingsPage[<button>.onClick]"];
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
            }, void 0, false, {
                fileName: "[project]/src/app/settings/page.tsx",
                lineNumber: 141,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== t14) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t14,
            onClick: t15,
            children: [
                t16,
                "Confidentialité"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[29] = t14;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    const t18 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarItem} ${activeSection === "notifications" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t19;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "SettingsPage[<button>.onClick]": ()=>setActiveSection("notifications")
        })["SettingsPage[<button>.onClick]"];
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            }, void 0, false, {
                fileName: "[project]/src/app/settings/page.tsx",
                lineNumber: 166,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    let t21;
    if ($[33] !== t18) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t18,
            onClick: t19,
            children: [
                t20,
                "Notifications"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[33] = t18;
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    const t22 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarItem} ${activeSection === "data" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t23;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = ({
            "SettingsPage[<button>.onClick]": ()=>setActiveSection("data")
        })["SettingsPage[<button>.onClick]"];
        $[35] = t23;
    } else {
        t23 = $[35];
    }
    let t24;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"
            }, void 0, false, {
                fileName: "[project]/src/app/settings/page.tsx",
                lineNumber: 191,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[36] = t24;
    } else {
        t24 = $[36];
    }
    let t25;
    if ($[37] !== t22) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t22,
            onClick: t23,
            children: [
                t24,
                "Mes données"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[37] = t22;
        $[38] = t25;
    } else {
        t25 = $[38];
    }
    let t26;
    if ($[39] !== t13 || $[40] !== t17 || $[41] !== t21 || $[42] !== t25 || $[43] !== t9) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: [
                    t9,
                    t13,
                    t17,
                    t21,
                    t25
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/settings/page.tsx",
                lineNumber: 206,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[39] = t13;
        $[40] = t17;
        $[41] = t21;
        $[42] = t25;
        $[43] = t9;
        $[44] = t26;
    } else {
        t26 = $[44];
    }
    let t27;
    if ($[45] !== t26 || $[46] !== t5) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$settings$2f$Settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: [
                    t5,
                    t26
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/settings/page.tsx",
                lineNumber: 218,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[45] = t26;
        $[46] = t5;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    return t27;
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

//# sourceMappingURL=src_app_settings_0fc9de78._.js.map