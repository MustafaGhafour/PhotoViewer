require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. You can learn more about the \nNativeScript core theme at https://github.com/nativescript/theme\nThe imported CSS rules must precede all other types of rules.\n"},{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/default.css\""},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "},{"type":"comment","comment":"\nThe following CSS rule changes the font size of all Buttons that have the\n\"-primary\" class modifier.\n"},{"type":"rule","selectors":["Button.-primary"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]}],"parsingErrors":[]}};;
    if (false) {}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _item_item_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/item/item-detail.component.ts");




var routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: _item_items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"] },
    { path: "item/:id", component: _item_item_detail_component__WEBPACK_IMPORTED_MODULE_3__["ItemDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->\n<page-router-outlet></page-router-outlet>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __importDefault(__webpack_require__("./app/app.component.html")).default
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _item_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/item/item-detail.component.ts");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@nativescript/angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_6__);







// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _item_items_component__WEBPACK_IMPORTED_MODULE_4__["ItemsComponent"],
                _item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__["ItemDetailComponent"],
            ],
            providers: [nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_6__["ModalDialogService"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/item/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<StackLayout backgroundColor=\"black\" class=\"page\">\n\n    <GridLayout>\n        <ImageSwipe [items]=\"items\" imageUrlProperty=\"imageUrl\" allowZoom=\"true\" (tap)=\"tapped()\" backgroundColor=\"#000000\"\n                    [pageNumber]=\"pageNumber\" (pageChanged)=\"pageChanged($event)\" >\n        </ImageSwipe>\n    </GridLayout>\n</StackLayout>"

/***/ }),

/***/ "./app/item/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__);


var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(modalDialogParams) {
        this.modalDialogParams = modalDialogParams;
        this.items = [];
        this.pageNumber = 0;
    }
    ItemDetailComponent.prototype.onClose = function () {
        this.modalDialogParams.closeCallback();
    };
    ItemDetailComponent.prototype.ngOnInit = function () {
        this.items.push({ imageUrl: "https://www.nationalgeographic.com/content/dam/photography/rights-exempt/best-of-photo-of-the-day/2017/animals/01_pod-best-animals.jpg" }, { imageUrl: "https://news.nationalgeographic.com/content/dam/news/2016/02/24/01highanimals.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/games/screen-shots/More%20Games/A-G/babyanimal_open.ngsversion.1429194155981.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/koala-closeup-tree.adapt.945.1.jpg" }, { imageUrl: "https://www.nationalgeographic.com/content/dam/photography/rights-exempt/best-of-photo-of-the-day/2017/animals/01_pod-best-animals.jpg" }, { imageUrl: "https://news.nationalgeographic.com/content/dam/news/2016/02/24/01highanimals.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/games/screen-shots/More%20Games/A-G/babyanimal_open.ngsversion.1429194155981.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/koala-closeup-tree.adapt.945.1.jpg" }, { imageUrl: "https://www.nationalgeographic.com/content/dam/photography/rights-exempt/best-of-photo-of-the-day/2017/animals/01_pod-best-animals.jpg" }, { imageUrl: "https://news.nationalgeographic.com/content/dam/news/2016/02/24/01highanimals.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/games/screen-shots/More%20Games/A-G/babyanimal_open.ngsversion.1429194155981.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/koala-closeup-tree.adapt.945.1.jpg" }, { imageUrl: "https://www.nationalgeographic.com/content/dam/photography/rights-exempt/best-of-photo-of-the-day/2017/animals/01_pod-best-animals.jpg" }, { imageUrl: "https://news.nationalgeographic.com/content/dam/news/2016/02/24/01highanimals.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/games/screen-shots/More%20Games/A-G/babyanimal_open.ngsversion.1429194155981.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/koala-closeup-tree.adapt.945.1.jpg" }, { imageUrl: "https://www.nationalgeographic.com/content/dam/photography/rights-exempt/best-of-photo-of-the-day/2017/animals/01_pod-best-animals.jpg" }, { imageUrl: "https://news.nationalgeographic.com/content/dam/news/2016/02/24/01highanimals.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/games/screen-shots/More%20Games/A-G/babyanimal_open.ngsversion.1429194155981.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/koala-closeup-tree.adapt.945.1.jpg" }, { imageUrl: "https://www.nationalgeographic.com/content/dam/photography/rights-exempt/best-of-photo-of-the-day/2017/animals/01_pod-best-animals.jpg" }, { imageUrl: "https://news.nationalgeographic.com/content/dam/news/2016/02/24/01highanimals.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/games/screen-shots/More%20Games/A-G/babyanimal_open.ngsversion.1429194155981.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/koala-closeup-tree.adapt.945.1.jpg" }, { imageUrl: "https://www.nationalgeographic.com/content/dam/photography/rights-exempt/best-of-photo-of-the-day/2017/animals/01_pod-best-animals.jpg" }, { imageUrl: "https://news.nationalgeographic.com/content/dam/news/2016/02/24/01highanimals.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/games/screen-shots/More%20Games/A-G/babyanimal_open.ngsversion.1429194155981.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/koala-closeup-tree.adapt.945.1.jpg" }, { imageUrl: "https://www.nationalgeographic.com/content/dam/photography/rights-exempt/best-of-photo-of-the-day/2017/animals/01_pod-best-animals.jpg" }, { imageUrl: "https://news.nationalgeographic.com/content/dam/news/2016/02/24/01highanimals.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/games/screen-shots/More%20Games/A-G/babyanimal_open.ngsversion.1429194155981.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/koala-closeup-tree.adapt.945.1.jpg" }, { imageUrl: "https://www.nationalgeographic.com/content/dam/photography/rights-exempt/best-of-photo-of-the-day/2017/animals/01_pod-best-animals.jpg" }, { imageUrl: "https://news.nationalgeographic.com/content/dam/news/2016/02/24/01highanimals.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/games/screen-shots/More%20Games/A-G/babyanimal_open.ngsversion.1429194155981.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/koala-closeup-tree.adapt.945.1.jpg" }, { imageUrl: "https://www.nationalgeographic.com/content/dam/photography/rights-exempt/best-of-photo-of-the-day/2017/animals/01_pod-best-animals.jpg" }, { imageUrl: "https://news.nationalgeographic.com/content/dam/news/2016/02/24/01highanimals.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/games/screen-shots/More%20Games/A-G/babyanimal_open.ngsversion.1429194155981.jpg" }, { imageUrl: "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/koala-closeup-tree.adapt.945.1.jpg" });
    };
    ItemDetailComponent.prototype.tapped = function () {
        console.log("tapped");
    };
    ItemDetailComponent.prototype.pageChanged = function (e) {
        console.log("Page changed to " + e.page + ".");
    };
    ItemDetailComponent.ctorParameters = function () { return [
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"] }
    ]; };
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-details",
            template: __importDefault(__webpack_require__("./app/item/item-detail.component.html")).default,
        }),
        __metadata("design:paramtypes", [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./app/item/items.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout class=\"page\" sdkExampleTitle sdkToggleNavButton>\n    <Button text=\"SHOW MODAL\" (tap)=\"onTap()\"></Button>\n</StackLayout>"

/***/ }),

/***/ "./app/item/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/item/item-detail.component.ts");



var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(modalService, vcRef) {
        this.modalService = modalService;
        this.vcRef = vcRef;
    }
    ItemsComponent.prototype.onTap = function () {
        var today = new Date();
        var options = {
            viewContainerRef: this.vcRef,
            context: today.toDateString(),
            fullscreen: false,
        };
        // showModal returns a promise with the received parameters from the modal page
        return this.modalService.showModal(_item_detail_component__WEBPACK_IMPORTED_MODULE_2__["ItemDetailComponent"], options);
    };
    ItemsComponent.ctorParameters = function () { return [
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
    ]; };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-items",
            template: __importDefault(__webpack_require__("./app/item/items.component.html")).default
        }),
        __metadata("design:paramtypes", [nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/angular/platform.js");
/* harmony import */ var _nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/element-registry.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.module.ts");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (false) {}
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        // this import should be first in order to load some required settings (like globals and reflect-metadata)



Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1__["registerElement"])("ImageSwipe", function () { return __webpack_require__("../node_modules/nativescript-image-swipe/image-swipe.js").ImageSwipe; });
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
Object(_nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbXMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7QUNaQSwrR0FBaUUsbUJBQU8sQ0FBQyw0SEFBMEY7QUFDbkssZ0VBQWdFLG1CQUFPLENBQUMsNEhBQTBGO0FBQ2xLLG9FQUFvRSxtQkFBTyxDQUFDLCtIQUE2RjtBQUN6SyxtRUFBbUUsbUJBQU8sQ0FBQywrSEFBNkYsR0FBRyxrQkFBa0Isa0NBQWtDLFVBQVUsa2pCQUFrakIsRUFBRSxpRUFBaUUsRUFBRSxvRUFBb0UsRUFBRSwySkFBMkosRUFBRSx5SUFBeUksRUFBRSwrREFBK0QseURBQXlELEVBQUU7QUFDeDBDLFFBQVEsS0FBVSxFQUFFLEVBS2Y7Ozs7Ozs7Ozs7QUNUTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUV3QjtB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RSxtRkFBbUYsRUFBRSxFQUNqRyxFQUFFLFFBQVEsRUFBRSw4SUFBOEksRUFBRSxFQUM1SixFQUFFLFFBQVEsRUFBRSxvSEFBb0gsRUFBRSxFQUNsSSxFQUFFLFFBQVEsRUFBRSx3SUFBd0ksRUFBRSxFQUN0SixFQUFFLFFBQVEsRUFBRSxtRkFBbUYsRUFBRSxFQUNqRyxFQUFFLFFBQVEsRUFBRSw4SUFBOEksRUFBRSxFQUM1SixFQUFFLFFBQVEsRUFBRSxvSEFBb0gsRUFBRSxFQUNsSSxFQUFFLFFBQVEsRUFBRSx3SUFBd0ksRUFBRSxFQUN0SixFQUFFLFFBQVEsRUFBRSxtRkFBbUYsRUFBRSxFQUNqRyxFQUFFLFFBQVEsRUFBRSw4SUFBOEksRUFBRSxFQUM1SixFQUFFLFFBQVEsRUFBRSxvSEFBb0gsRUFBRSxFQUNsSSxFQUFFLFFBQVEsRUFBRSx3SUFBd0ksRUFBRSxFQUN0SixFQUFFLFFBQVEsRUFBRSxtRkFBbUYsRUFBRSxFQUNqRyxFQUFFLFFBQVEsRUFBRSw4SUFBOEksRUFBRSxFQUM1SixFQUFFLFFBQVEsRUFBRSxvSEFBb0gsRUFBRSxFQUNsSSxFQUFFLFFBQVEsRUFBRSx3SUFBd0ksRUFBRSxFQUN0SixFQUFFLFFBQVEsRUFBRSxtRkFBbUYsRUFBRSxFQUNqRyxFQUFFLFFBQVEsRUFBRSw4SUFBOEksRUFBRSxFQUM1SixFQUFFLFFBQVEsRUFBRSxvSEFBb0gsRUFBRSxFQUNsSSxFQUFFLFFBQVEsRUFBRSx3SUFBd0ksRUFBRSxFQUN0SixFQUFFLFFBQVEsRUFBRSxtRkFBbUYsRUFBRSxFQUNqRyxFQUFFLFFBQVEsRUFBRSw4SUFBOEksRUFBRSxFQUM1SixFQUFFLFFBQVEsRUFBRSxvSEFBb0gsRUFBRSxFQUNsSSxFQUFFLFFBQVEsRUFBRSx3SUFBd0ksRUFBRSxFQUN0SixFQUFFLFFBQVEsRUFBRSxtRkFBbUYsRUFBRSxFQUNqRyxFQUFFLFFBQVEsRUFBRSw4SUFBOEksRUFBRSxFQUM1SixFQUFFLFFBQVEsRUFBRSxvSEFBb0gsRUFBRSxDQUNySSxDQUFDO0lBQ04sQ0FBQztJQUVNLG9DQUFNLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSx5Q0FBVyxHQUFsQixVQUFtQixDQUFzQjtRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixDQUFDLENBQUMsSUFBSSxNQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkE3RHNDLHVFQUFpQjs7SUFKL0MsbUJBQW1CO1FBSi9CLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QiwrRkFBMkM7U0FDOUMsQ0FBQzt5Q0FLeUMsdUVBQWlCO09BSi9DLG1CQUFtQixDQWtFL0I7SUFBRCwwQkFBQztDQUFBO0FBbEUrQjs7Ozs7Ozs7QUNUaEMsK0o7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTREO0FBQytCO0FBQzdCO0FBTTlEO0lBRUksd0JBQW9CLFlBQWdDLEVBQVUsS0FBdUI7UUFBakUsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7SUFDckYsQ0FBQztJQUVPLDhCQUFLLEdBQWI7UUFDSSxJQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQU0sT0FBTyxHQUF1QjtZQUNoQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztZQUM1QixPQUFPLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRTtZQUM3QixVQUFVLEVBQUUsS0FBSztTQUNwQixDQUFDO1FBRUYsK0VBQStFO1FBQy9FLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsMEVBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Z0JBYmlDLG9GQUFrQjtnQkFBaUIsOERBQWdCOztJQUY1RSxjQUFjO1FBSjFCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQix5RkFBcUM7U0FDeEMsQ0FBQzt5Q0FHb0Msb0ZBQWtCLEVBQWlCLDhEQUFnQjtPQUY1RSxjQUFjLENBaUIxQjtJQUFELHFCQUFDO0NBQUE7QUFqQjBCOzs7Ozs7Ozs7QUNSK0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUcsT0FBTyxFQUFFLGlHQUFtQyxDQUFnQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxHQUErRDtBQUV4RSxPQUFPLEVBQUUsR0FBb0M7QUFDN0MsaUJBQWdCLEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXG5cXG4vKlxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgdGhlIFxcbk5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9uYXRpdmVzY3JpcHQvdGhlbWVcXG5UaGUgaW1wb3J0ZWQgQ1NTIHJ1bGVzIG11c3QgcHJlY2VkZSBhbGwgb3RoZXIgdHlwZXMgb2YgcnVsZXMuXFxuXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1xcXCJcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIFBsYWNlIGFueSBDU1MgcnVsZXMgeW91IHdhbnQgdG8gYXBwbHkgb24gYm90aCBpT1MgYW5kIEFuZHJvaWQgaGVyZS5cXG5UaGlzIGlzIHdoZXJlIHRoZSB2YXN0IG1ham9yaXR5IG9mIHlvdXIgQ1NTIGNvZGUgZ29lcy4gXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcblRoZSBmb2xsb3dpbmcgQ1NTIHJ1bGUgY2hhbmdlcyB0aGUgZm9udCBzaXplIG9mIGFsbCBCdXR0b25zIHRoYXQgaGF2ZSB0aGVcXG5cXFwiLXByaW1hcnlcXFwiIGNsYXNzIG1vZGlmaWVyLlxcblwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b24uLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OztcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2l0ZW1zXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJpdGVtLzppZFwiLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvY29yZS1jb25jZXB0cy9hbmd1bGFyLW5hdmlnYXRpb24uaHRtbCNwYWdlLXJvdXRlci1vdXRsZXQgLS0+XFxuPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbTW9kYWxEaWFsb2dTZXJ2aWNlXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcblxcblxcblxcbjxTdGFja0xheW91dCBiYWNrZ3JvdW5kQ29sb3I9XFxcImJsYWNrXFxcIiBjbGFzcz1cXFwicGFnZVxcXCI+XFxuXFxuICAgIDxHcmlkTGF5b3V0PlxcbiAgICAgICAgPEltYWdlU3dpcGUgW2l0ZW1zXT1cXFwiaXRlbXNcXFwiIGltYWdlVXJsUHJvcGVydHk9XFxcImltYWdlVXJsXFxcIiBhbGxvd1pvb209XFxcInRydWVcXFwiICh0YXApPVxcXCJ0YXBwZWQoKVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjMDAwMDAwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgW3BhZ2VOdW1iZXJdPVxcXCJwYWdlTnVtYmVyXFxcIiAocGFnZUNoYW5nZWQpPVxcXCJwYWdlQ2hhbmdlZCgkZXZlbnQpXFxcIiA+XFxuICAgICAgICA8L0ltYWdlU3dpcGU+XFxuICAgIDwvR3JpZExheW91dD5cXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZUNoYW5nZUV2ZW50RGF0YSAgLCBJbWFnZVN3aXBlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlLXN3aXBlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBpdGVtczogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgcGFnZU51bWJlcjogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxEaWFsb2dQYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5tb2RhbERpYWxvZ1BhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG59XG4gXG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goXG4gICAgICAgICAgICB7IGltYWdlVXJsOiBcImh0dHBzOi8vd3d3Lm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0vcGhvdG9ncmFwaHkvcmlnaHRzLWV4ZW1wdC9iZXN0LW9mLXBob3RvLW9mLXRoZS1kYXkvMjAxNy9hbmltYWxzLzAxX3BvZC1iZXN0LWFuaW1hbHMuanBnXCIgfSxcbiAgICAgICAgICAgIHsgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9uZXdzLm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0vbmV3cy8yMDE2LzAyLzI0LzAxaGlnaGFuaW1hbHMuanBnXCIgfSxcbiAgICAgICAgICAgIHsgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9raWRzLm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0va2lkcy9waG90b3MvZ2FtZXMvc2NyZWVuLXNob3RzL01vcmUlMjBHYW1lcy9BLUcvYmFieWFuaW1hbF9vcGVuLm5nc3ZlcnNpb24uMTQyOTE5NDE1NTk4MS5qcGdcIiB9LFxuICAgICAgICAgICAgeyBpbWFnZVVybDogXCJodHRwczovL2tpZHMubmF0aW9uYWxnZW9ncmFwaGljLmNvbS9jb250ZW50L2RhbS9raWRzL3Bob3Rvcy9hbmltYWxzL01hbW1hbHMvSC1QL2tvYWxhLWNsb3NldXAtdHJlZS5hZGFwdC45NDUuMS5qcGdcIiB9LFxuICAgICAgICAgICAgeyBpbWFnZVVybDogXCJodHRwczovL3d3dy5uYXRpb25hbGdlb2dyYXBoaWMuY29tL2NvbnRlbnQvZGFtL3Bob3RvZ3JhcGh5L3JpZ2h0cy1leGVtcHQvYmVzdC1vZi1waG90by1vZi10aGUtZGF5LzIwMTcvYW5pbWFscy8wMV9wb2QtYmVzdC1hbmltYWxzLmpwZ1wiIH0sXG4gICAgICAgICAgICB7IGltYWdlVXJsOiBcImh0dHBzOi8vbmV3cy5uYXRpb25hbGdlb2dyYXBoaWMuY29tL2NvbnRlbnQvZGFtL25ld3MvMjAxNi8wMi8yNC8wMWhpZ2hhbmltYWxzLmpwZ1wiIH0sXG4gICAgICAgICAgICB7IGltYWdlVXJsOiBcImh0dHBzOi8va2lkcy5uYXRpb25hbGdlb2dyYXBoaWMuY29tL2NvbnRlbnQvZGFtL2tpZHMvcGhvdG9zL2dhbWVzL3NjcmVlbi1zaG90cy9Nb3JlJTIwR2FtZXMvQS1HL2JhYnlhbmltYWxfb3Blbi5uZ3N2ZXJzaW9uLjE0MjkxOTQxNTU5ODEuanBnXCIgfSxcbiAgICAgICAgICAgIHsgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9raWRzLm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0va2lkcy9waG90b3MvYW5pbWFscy9NYW1tYWxzL0gtUC9rb2FsYS1jbG9zZXVwLXRyZWUuYWRhcHQuOTQ1LjEuanBnXCIgfSxcbiAgICAgICAgICAgIHsgaW1hZ2VVcmw6IFwiaHR0cHM6Ly93d3cubmF0aW9uYWxnZW9ncmFwaGljLmNvbS9jb250ZW50L2RhbS9waG90b2dyYXBoeS9yaWdodHMtZXhlbXB0L2Jlc3Qtb2YtcGhvdG8tb2YtdGhlLWRheS8yMDE3L2FuaW1hbHMvMDFfcG9kLWJlc3QtYW5pbWFscy5qcGdcIiB9LFxuICAgICAgICAgICAgeyBpbWFnZVVybDogXCJodHRwczovL25ld3MubmF0aW9uYWxnZW9ncmFwaGljLmNvbS9jb250ZW50L2RhbS9uZXdzLzIwMTYvMDIvMjQvMDFoaWdoYW5pbWFscy5qcGdcIiB9LFxuICAgICAgICAgICAgeyBpbWFnZVVybDogXCJodHRwczovL2tpZHMubmF0aW9uYWxnZW9ncmFwaGljLmNvbS9jb250ZW50L2RhbS9raWRzL3Bob3Rvcy9nYW1lcy9zY3JlZW4tc2hvdHMvTW9yZSUyMEdhbWVzL0EtRy9iYWJ5YW5pbWFsX29wZW4ubmdzdmVyc2lvbi4xNDI5MTk0MTU1OTgxLmpwZ1wiIH0sXG4gICAgICAgICAgICB7IGltYWdlVXJsOiBcImh0dHBzOi8va2lkcy5uYXRpb25hbGdlb2dyYXBoaWMuY29tL2NvbnRlbnQvZGFtL2tpZHMvcGhvdG9zL2FuaW1hbHMvTWFtbWFscy9ILVAva29hbGEtY2xvc2V1cC10cmVlLmFkYXB0Ljk0NS4xLmpwZ1wiIH0sXG4gICAgICAgICAgICB7IGltYWdlVXJsOiBcImh0dHBzOi8vd3d3Lm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0vcGhvdG9ncmFwaHkvcmlnaHRzLWV4ZW1wdC9iZXN0LW9mLXBob3RvLW9mLXRoZS1kYXkvMjAxNy9hbmltYWxzLzAxX3BvZC1iZXN0LWFuaW1hbHMuanBnXCIgfSxcbiAgICAgICAgICAgIHsgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9uZXdzLm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0vbmV3cy8yMDE2LzAyLzI0LzAxaGlnaGFuaW1hbHMuanBnXCIgfSxcbiAgICAgICAgICAgIHsgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9raWRzLm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0va2lkcy9waG90b3MvZ2FtZXMvc2NyZWVuLXNob3RzL01vcmUlMjBHYW1lcy9BLUcvYmFieWFuaW1hbF9vcGVuLm5nc3ZlcnNpb24uMTQyOTE5NDE1NTk4MS5qcGdcIiB9LFxuICAgICAgICAgICAgeyBpbWFnZVVybDogXCJodHRwczovL2tpZHMubmF0aW9uYWxnZW9ncmFwaGljLmNvbS9jb250ZW50L2RhbS9raWRzL3Bob3Rvcy9hbmltYWxzL01hbW1hbHMvSC1QL2tvYWxhLWNsb3NldXAtdHJlZS5hZGFwdC45NDUuMS5qcGdcIiB9LFxuICAgICAgICAgICAgeyBpbWFnZVVybDogXCJodHRwczovL3d3dy5uYXRpb25hbGdlb2dyYXBoaWMuY29tL2NvbnRlbnQvZGFtL3Bob3RvZ3JhcGh5L3JpZ2h0cy1leGVtcHQvYmVzdC1vZi1waG90by1vZi10aGUtZGF5LzIwMTcvYW5pbWFscy8wMV9wb2QtYmVzdC1hbmltYWxzLmpwZ1wiIH0sXG4gICAgICAgICAgICB7IGltYWdlVXJsOiBcImh0dHBzOi8vbmV3cy5uYXRpb25hbGdlb2dyYXBoaWMuY29tL2NvbnRlbnQvZGFtL25ld3MvMjAxNi8wMi8yNC8wMWhpZ2hhbmltYWxzLmpwZ1wiIH0sXG4gICAgICAgICAgICB7IGltYWdlVXJsOiBcImh0dHBzOi8va2lkcy5uYXRpb25hbGdlb2dyYXBoaWMuY29tL2NvbnRlbnQvZGFtL2tpZHMvcGhvdG9zL2dhbWVzL3NjcmVlbi1zaG90cy9Nb3JlJTIwR2FtZXMvQS1HL2JhYnlhbmltYWxfb3Blbi5uZ3N2ZXJzaW9uLjE0MjkxOTQxNTU5ODEuanBnXCIgfSxcbiAgICAgICAgICAgIHsgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9raWRzLm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0va2lkcy9waG90b3MvYW5pbWFscy9NYW1tYWxzL0gtUC9rb2FsYS1jbG9zZXVwLXRyZWUuYWRhcHQuOTQ1LjEuanBnXCIgfSxcbiAgICAgICAgICAgIHsgaW1hZ2VVcmw6IFwiaHR0cHM6Ly93d3cubmF0aW9uYWxnZW9ncmFwaGljLmNvbS9jb250ZW50L2RhbS9waG90b2dyYXBoeS9yaWdodHMtZXhlbXB0L2Jlc3Qtb2YtcGhvdG8tb2YtdGhlLWRheS8yMDE3L2FuaW1hbHMvMDFfcG9kLWJlc3QtYW5pbWFscy5qcGdcIiB9LFxuICAgICAgICAgICAgeyBpbWFnZVVybDogXCJodHRwczovL25ld3MubmF0aW9uYWxnZW9ncmFwaGljLmNvbS9jb250ZW50L2RhbS9uZXdzLzIwMTYvMDIvMjQvMDFoaWdoYW5pbWFscy5qcGdcIiB9LFxuICAgICAgICAgICAgeyBpbWFnZVVybDogXCJodHRwczovL2tpZHMubmF0aW9uYWxnZW9ncmFwaGljLmNvbS9jb250ZW50L2RhbS9raWRzL3Bob3Rvcy9nYW1lcy9zY3JlZW4tc2hvdHMvTW9yZSUyMEdhbWVzL0EtRy9iYWJ5YW5pbWFsX29wZW4ubmdzdmVyc2lvbi4xNDI5MTk0MTU1OTgxLmpwZ1wiIH0sXG4gICAgICAgICAgICB7IGltYWdlVXJsOiBcImh0dHBzOi8va2lkcy5uYXRpb25hbGdlb2dyYXBoaWMuY29tL2NvbnRlbnQvZGFtL2tpZHMvcGhvdG9zL2FuaW1hbHMvTWFtbWFscy9ILVAva29hbGEtY2xvc2V1cC10cmVlLmFkYXB0Ljk0NS4xLmpwZ1wiIH0sXG4gICAgICAgICAgICB7IGltYWdlVXJsOiBcImh0dHBzOi8vd3d3Lm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0vcGhvdG9ncmFwaHkvcmlnaHRzLWV4ZW1wdC9iZXN0LW9mLXBob3RvLW9mLXRoZS1kYXkvMjAxNy9hbmltYWxzLzAxX3BvZC1iZXN0LWFuaW1hbHMuanBnXCIgfSxcbiAgICAgICAgICAgIHsgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9uZXdzLm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0vbmV3cy8yMDE2LzAyLzI0LzAxaGlnaGFuaW1hbHMuanBnXCIgfSxcbiAgICAgICAgICAgIHsgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9raWRzLm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0va2lkcy9waG90b3MvZ2FtZXMvc2NyZWVuLXNob3RzL01vcmUlMjBHYW1lcy9BLUcvYmFieWFuaW1hbF9vcGVuLm5nc3ZlcnNpb24uMTQyOTE5NDE1NTk4MS5qcGdcIiB9LFxuICAgICAgICAgICAgeyBpbWFnZVVybDogXCJodHRwczovL2tpZHMubmF0aW9uYWxnZW9ncmFwaGljLmNvbS9jb250ZW50L2RhbS9raWRzL3Bob3Rvcy9hbmltYWxzL01hbW1hbHMvSC1QL2tvYWxhLWNsb3NldXAtdHJlZS5hZGFwdC45NDUuMS5qcGdcIiB9LFxuICAgICAgICAgICAgeyBpbWFnZVVybDogXCJodHRwczovL3d3dy5uYXRpb25hbGdlb2dyYXBoaWMuY29tL2NvbnRlbnQvZGFtL3Bob3RvZ3JhcGh5L3JpZ2h0cy1leGVtcHQvYmVzdC1vZi1waG90by1vZi10aGUtZGF5LzIwMTcvYW5pbWFscy8wMV9wb2QtYmVzdC1hbmltYWxzLmpwZ1wiIH0sXG4gICAgICAgICAgICB7IGltYWdlVXJsOiBcImh0dHBzOi8vbmV3cy5uYXRpb25hbGdlb2dyYXBoaWMuY29tL2NvbnRlbnQvZGFtL25ld3MvMjAxNi8wMi8yNC8wMWhpZ2hhbmltYWxzLmpwZ1wiIH0sXG4gICAgICAgICAgICB7IGltYWdlVXJsOiBcImh0dHBzOi8va2lkcy5uYXRpb25hbGdlb2dyYXBoaWMuY29tL2NvbnRlbnQvZGFtL2tpZHMvcGhvdG9zL2dhbWVzL3NjcmVlbi1zaG90cy9Nb3JlJTIwR2FtZXMvQS1HL2JhYnlhbmltYWxfb3Blbi5uZ3N2ZXJzaW9uLjE0MjkxOTQxNTU5ODEuanBnXCIgfSxcbiAgICAgICAgICAgIHsgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9raWRzLm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0va2lkcy9waG90b3MvYW5pbWFscy9NYW1tYWxzL0gtUC9rb2FsYS1jbG9zZXVwLXRyZWUuYWRhcHQuOTQ1LjEuanBnXCIgfSxcbiAgICAgICAgICAgIHsgaW1hZ2VVcmw6IFwiaHR0cHM6Ly93d3cubmF0aW9uYWxnZW9ncmFwaGljLmNvbS9jb250ZW50L2RhbS9waG90b2dyYXBoeS9yaWdodHMtZXhlbXB0L2Jlc3Qtb2YtcGhvdG8tb2YtdGhlLWRheS8yMDE3L2FuaW1hbHMvMDFfcG9kLWJlc3QtYW5pbWFscy5qcGdcIiB9LFxuICAgICAgICAgICAgeyBpbWFnZVVybDogXCJodHRwczovL25ld3MubmF0aW9uYWxnZW9ncmFwaGljLmNvbS9jb250ZW50L2RhbS9uZXdzLzIwMTYvMDIvMjQvMDFoaWdoYW5pbWFscy5qcGdcIiB9LFxuICAgICAgICAgICAgeyBpbWFnZVVybDogXCJodHRwczovL2tpZHMubmF0aW9uYWxnZW9ncmFwaGljLmNvbS9jb250ZW50L2RhbS9raWRzL3Bob3Rvcy9nYW1lcy9zY3JlZW4tc2hvdHMvTW9yZSUyMEdhbWVzL0EtRy9iYWJ5YW5pbWFsX29wZW4ubmdzdmVyc2lvbi4xNDI5MTk0MTU1OTgxLmpwZ1wiIH0sXG4gICAgICAgICAgICB7IGltYWdlVXJsOiBcImh0dHBzOi8va2lkcy5uYXRpb25hbGdlb2dyYXBoaWMuY29tL2NvbnRlbnQvZGFtL2tpZHMvcGhvdG9zL2FuaW1hbHMvTWFtbWFscy9ILVAva29hbGEtY2xvc2V1cC10cmVlLmFkYXB0Ljk0NS4xLmpwZ1wiIH0sXG4gICAgICAgICAgICB7IGltYWdlVXJsOiBcImh0dHBzOi8vd3d3Lm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0vcGhvdG9ncmFwaHkvcmlnaHRzLWV4ZW1wdC9iZXN0LW9mLXBob3RvLW9mLXRoZS1kYXkvMjAxNy9hbmltYWxzLzAxX3BvZC1iZXN0LWFuaW1hbHMuanBnXCIgfSxcbiAgICAgICAgICAgIHsgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9uZXdzLm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0vbmV3cy8yMDE2LzAyLzI0LzAxaGlnaGFuaW1hbHMuanBnXCIgfSxcbiAgICAgICAgICAgIHsgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9raWRzLm5hdGlvbmFsZ2VvZ3JhcGhpYy5jb20vY29udGVudC9kYW0va2lkcy9waG90b3MvZ2FtZXMvc2NyZWVuLXNob3RzL01vcmUlMjBHYW1lcy9BLUcvYmFieWFuaW1hbF9vcGVuLm5nc3ZlcnNpb24uMTQyOTE5NDE1NTk4MS5qcGdcIiB9LFxuICAgICAgICAgICAgeyBpbWFnZVVybDogXCJodHRwczovL2tpZHMubmF0aW9uYWxnZW9ncmFwaGljLmNvbS9jb250ZW50L2RhbS9raWRzL3Bob3Rvcy9hbmltYWxzL01hbW1hbHMvSC1QL2tvYWxhLWNsb3NldXAtdHJlZS5hZGFwdC45NDUuMS5qcGdcIiB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YXBwZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFwcGVkXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYWdlQ2hhbmdlZChlOiBQYWdlQ2hhbmdlRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQYWdlIGNoYW5nZWQgdG8gJHtlLnBhZ2V9LmApO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiBzZGtFeGFtcGxlVGl0bGUgc2RrVG9nZ2xlTmF2QnV0dG9uPlxcbiAgICA8QnV0dG9uIHRleHQ9XFxcIlNIT1cgTU9EQUxcXFwiICh0YXApPVxcXCJvblRhcCgpXFxcIj48L0J1dHRvbj5cXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjsgXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIH1cblxuICAgIHByaXZhdGUgb25UYXAoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxuICAgICAgICAgICAgY29udGV4dDogdG9kYXkudG9EYXRlU3RyaW5nKCksXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgLy8gc2hvd01vZGFsIHJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHJlY2VpdmVkIHBhcmFtZXRlcnMgZnJvbSB0aGUgbW9kYWwgcGFnZVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKEl0ZW1EZXRhaWxDb21wb25lbnQsIG9wdGlvbnMpO1xuICAgIH1cblxufSIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC9hcHAubW9kdWxlXCI7XG5yZWdpc3RlckVsZW1lbnQoXCJJbWFnZVN3aXBlXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtaW1hZ2Utc3dpcGUvaW1hZ2Utc3dpcGVcIikuSW1hZ2VTd2lwZSk7XG4gXG5cbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsXG4vLyBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLlxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOlxuLy8gbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuXG4vLyBBIE5hdGl2ZVNjcmlwdCBBbmd1bGFyIGFwcCBuZWVkcyB0byBtYWtlIGJvdGggcGFyYWRpZ21zIHdvcmsgdG9nZXRoZXIsXG4vLyBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyxcbi8vIHRoYXQgc2V0cyB1cCBhIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgY2FuIGJvb3RzdHJhcCB0aGUgQW5ndWxhciBmcmFtZXdvcmsuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=