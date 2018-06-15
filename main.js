(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AddPost/addpost.component.css":
/*!***********************************************!*\
  !*** ./src/app/AddPost/addpost.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    width:70%;\r\n    margin: auto;\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/AddPost/addpost.component.html":
/*!************************************************!*\
  !*** ./src/app/AddPost/addpost.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n        <p>\r\n            <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n                <mat-label>Nội dung bài đăng</mat-label>\r\n                <textarea ngModel name=\"content\" matInput rows=\"15\"></textarea>\r\n                <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n                <mat-hint>(Bắt buộc)</mat-hint>\r\n            </mat-form-field>\r\n        </p>\r\n        <button mat-raised-button color=\"primary\">Đăng</button>\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/AddPost/addpost.component.ts":
/*!**********************************************!*\
  !*** ./src/app/AddPost/addpost.component.ts ***!
  \**********************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var _post_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../post.model */ "./src/app/post.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../post.service */ "./src/app/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPostComponent = /** @class */ (function () {
    function AddPostComponent(postService, router) {
        this.postService = postService;
        this.router = router;
    }
    AddPostComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var newPost = new _post_model__WEBPACK_IMPORTED_MODULE_0__["Post"](f.value.content);
        this.postService.addPost(newPost).subscribe(function (res) {
            _this.router.navigate(['/']);
        });
    };
    AddPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-post',
            template: __webpack_require__(/*! ./addpost.component.html */ "./src/app/AddPost/addpost.component.html"),
            styles: [__webpack_require__(/*! ./addpost.component.css */ "./src/app/AddPost/addpost.component.css")]
        }),
        __metadata("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddPostComponent);
    return AddPostComponent;
}());



/***/ }),

/***/ "./src/app/AddPost/material/material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/AddPost/material/material.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _user_user_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.resolver */ "./src/app/user/user.resolver.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _AddPost_addpost_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddPost/addpost.component */ "./src/app/AddPost/addpost.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'add-post', component: _AddPost_addpost_component__WEBPACK_IMPORTED_MODULE_2__["AddPostComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"], resolve: { data: _user_user_resolver__WEBPACK_IMPORTED_MODULE_0__["UserResolver"] } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sss {\r\n    width:70%;\r\n    margin: auto;\r\n}\r\n.example-icon {\r\n    padding: 0 25px;\r\n  }\r\n.example-spacer {\r\n    flex: 1 1 auto;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" >\r\n  <mat-toolbar-row class=\"sss\">\r\n    <span>\r\n      <a routerLink=\"/\">\r\n        <img src=\"https://78.media.tumblr.com/0003030a33d68812095c422cf802b9cd/tumblr_og919rS4Hr1vf6rzdo1_500.gif\" style=\"width:64px;\">\r\n      </a>\r\n    </span>\r\n\r\n    <span class=\"example-spacer\"></span>\r\n    <button mat-button routerLink=\"/login\"><mat-icon class=\"example-icon\">person_add</mat-icon> Đăng nhập</button>\r\n    <button mat-button routerLink=\"add-post\"><mat-icon class=\"example-icon\">create</mat-icon> Viết bài</button>\r\n    <button mat-button>Đăng kí</button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.navHome = function () {
        this.router.navigate(['/']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebase, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _user_user_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.resolver */ "./src/app/user/user.resolver.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _login_AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/AuthService */ "./src/app/login/AuthService.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post.service */ "./src/app/post.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _AddPost_material_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AddPost/material/material.module */ "./src/app/AddPost/material/material.module.ts");
/* harmony import */ var _AddPost_addpost_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AddPost/addpost.component */ "./src/app/AddPost/addpost.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var firebase = {
    firebase: {
        apiKey: "AIzaSyC5y-e7x9Y_eWNrDf6p3-9kZrq8TAhx-kw",
        authDomain: "ngblog-a6835.firebaseapp.com",
        databaseURL: "https://ngblog-a6835.firebaseio.com",
        projectId: "ngblog-a6835",
        storageBucket: "ngblog-a6835.appspot.com",
        messagingSenderId: "1060454062184"
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _AddPost_addpost_component__WEBPACK_IMPORTED_MODULE_17__["AddPostComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_20__["UserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _AddPost_material_material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabaseModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ],
            providers: [_post_service__WEBPACK_IMPORTED_MODULE_14__["PostService"], _login_AuthService__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _user_user_resolver__WEBPACK_IMPORTED_MODULE_0__["UserResolver"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .sss {\r\n      width:70%;\r\n      margin: auto;\r\n  }\r\n  \r\n  .example-card {\r\n  }\r\n  \r\n  .rows {\r\n    display: flex;\r\n  }\r\n  \r\n  .align-items-center {\r\n    align-items: center;\r\n  }\r\n  \r\n  mat-card-content {\r\n      display: block;\r\n  }\r\n  \r\n  mat-icon{}\r\n  \r\n  /* .bubble {\r\n    position: absolute;\r\n    list-style: none;\r\n    display: block;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: hsla(0,0%,100%,.15);\r\n    bottom: -160px;\r\n    -webkit-animation: square 25s infinite;\r\n    animation: square 25s infinite;\r\n    transition-timing-function: linear;\r\n    box-sizing: border-box;\r\n    border: 1px solid black;\r\n  }\r\n@keyframes square{\r\n    0% {\r\n        -webkit-transform: translateY(0);\r\n        transform: translateY(0);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateY(-700px) rotate(600deg);\r\n        transform: translateY(-700px) rotate(600deg);\r\n    }\r\n} */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group class=\"sss\">\n  <mat-tab mat-stretch-tabs>\n    <ng-template mat-tab-label>\n      Bài mới\n    </ng-template>\n    <!-- <mat-card class=\"example-card\" *ngFor=\"let post of posts, let i = index\">\n      <mat-card-header>\n          \n      </mat-card-header>\n      <mat-card-content>\n          <p>{{ post.content }}</p>\n      </mat-card-content>\n      <mat-card-actions>\n        \n      </mat-card-actions> -->\n    <mat-card class=\"example-card\" *ngFor=\"let post of posts, let i = index\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>{{ post.createdDate | date: 'dd/MM/yyyy H:mm:ss' }}</mat-card-title>\n        <div class=\"rows align-items-center\"><mat-card-subtitle><mat-icon>visibility</mat-icon>    {{ post.viewCount }}</mat-card-subtitle>\n        </div>\n        \n      </mat-card-header>\n      <!-- cho nay` de img ne` -->\n      <mat-card-content>\n        <p>\n          {{ post.content }}\n          <!-- The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes\n          very well with mountainous terrain, the Shiba Inu was originally bred for hunting. -->\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <h4>\n          <div class=\"rows align-items-center\">\n            <button mat-button (click)=\"onLike(i)\"><mat-icon>thumb_up_alt</mat-icon>{{ post.like }}</button>\n            <button mat-button><mat-icon>comment</mat-icon>{{ post.comment }}</button> <button mat-button>Xem</button>\n          </div>\n        </h4>\n      </mat-card-actions>\n    </mat-card>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon>thumb_down</mat-icon> Bài hot\n    </ng-template>\n    <h1>...</h1>\n    <p>...</p>\n  </mat-tab>\n</mat-tab-group>\n\n<!-- <div class=\"bubble\">\n  \n</div> -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(postService, angularFire) {
        this.postService = postService;
        this.angularFire = angularFire;
        this.posts = [];
        this.firebase = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.onInitApp();
    };
    HomeComponent.prototype.onLike = function (id) {
        if (!this.posts[id].isLiked) {
            this.posts[id].like++;
            this.posts[id].isLiked = true;
        }
        else {
            this.posts[id].like--;
            this.posts[id].isLiked = false;
        }
    };
    HomeComponent.prototype.addToPostLists = function (post) {
        this.posts.push(post);
    };
    HomeComponent.prototype.onInitApp = function () {
        var _this = this;
        this.subs = this.postService.getAllPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_0__["PostService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/AuthService.ts":
/*!**************************************!*\
  !*** ./src/app/login/AuthService.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.fbLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
            provider.addScope('public_profile');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                var token = res.credential.accessToken;
                var user = res.user;
                console.log(token);
                console.log(user);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.ggLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doRegister = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) { return resolve(res); }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.login = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser) {
                _this.afAuth.auth.signOut();
                resolve();
            }
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    text-align: center;\r\n    font-size: 30px;\r\n    margin-bottom: 40px;\r\n  }\r\n  \r\n  .row{\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .error{\r\n    color: red;\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header\">Login with Firebase or Social Providers</h1>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-3\">\n      <form [formGroup]=\"loginForm\">\n        <div class=\"form-group\">\n          <label>Email address</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n          <label class=\"error\">{{errorMessage}}</label>\n        </div>\n        <button type=\"submit\" (click)=\"tryLogin(loginForm.value)\" class=\"btn btn-default\">Login</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 offset-4\">\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"tryFacebookLogin()\">\n        <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> Login with Facebook\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 offset-4\">\n      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"tryGoogleLogin()\">\n        <i class=\"fa fa-google\" aria-hidden=\"true\"></i>Login with Google\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthService */ "./src/app/login/AuthService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { moveIn } from '../router.animations';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, fb, router) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.errorMessage = "";
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoginComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.fbLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        });
    };
    LoginComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.ggLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        });
    };
    LoginComponent.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.login(value)
            .then(function (res) {
            _this.router.navigate(['/user']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_AuthService__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/post.model.ts":
/*!*******************************!*\
  !*** ./src/app/post.model.ts ***!
  \*******************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(content) {
        this.content = content;
        this.like = 0;
        this.comment = 0;
        this.createdDate = new Date();
        this.viewCount = 0;
        this.isLiked = false;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = /** @class */ (function () {
    function PostService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = "https://5b1c9da8a1c56c001458c5ca.mockapi.io/api/v1/Post/";
    }
    PostService.prototype.ngOnInit = function () {
    };
    // database
    PostService.prototype.getAllPosts = function () {
        return this.httpClient.get(this.apiUrl);
    };
    PostService.prototype.addPost = function (data) {
        return this.httpClient.post(this.apiUrl, data);
    };
    PostService.prototype.putAllPosts = function (post) {
        return this.httpClient.put("https://ngblog-a6835.firebaseio.com/posts.json", post);
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <div class=\"card\" style=\"width: 20rem;\">\n        <img class=\"card-img-top image\" [src]=\"user.image\" alt=\"Card image cap\">\n        <div *ngIf='user.provider != \"password\"'class=\"card-body\">\n          <h4 class=\"card-title\">{{user.name}}</h4>\n          <p class=\"card-text\"> </p>\n        </div>\n        <div *ngIf='user.provider == \"password\"'class=\"card-body\">\n          <form [formGroup]=\"profileForm\">\n            <div class=\"form-group\">\n              <label>Your name</label>\n              <input type=\"text\" formControlName=\"name\" class=\"form-control\" required>\n            </div>\n          </form>\n          <a (click)=\"save(profileForm.value)\" class=\"btn btn-primary\">Save</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <button type=\"button\" (click)=\"logout()\" class=\"btn btn-link\">Logout</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _login_AuthService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../login/AuthService */ "./src/app/login/AuthService.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "./src/app/user/user.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserComponent = /** @class */ (function () {
    function UserComponent(userService, authService, route, location, fb) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_2__["FirebaseUserModel"]();
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.user = data;
                _this.createForm(_this.user.name);
            }
        });
    };
    UserComponent.prototype.createForm = function (name) {
        this.profileForm = this.fb.group({
            name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    };
    UserComponent.prototype.save = function (value) {
        this.userService.updateCurrentUser(value)
            .then(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); });
    };
    UserComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout()
            .then(function (res) {
            _this.location.back();
        }, function (error) {
            console.log("Logout error", error);
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _login_AuthService__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.model.ts":
/*!************************************!*\
  !*** ./src/app/user/user.model.ts ***!
  \************************************/
/*! exports provided: FirebaseUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserModel", function() { return FirebaseUserModel; });
var FirebaseUserModel = /** @class */ (function () {
    function FirebaseUserModel() {
        this.image = "";
        this.name = "";
        this.provider = "";
    }
    return FirebaseUserModel;
}());



/***/ }),

/***/ "./src/app/user/user.resolver.ts":
/*!***************************************!*\
  !*** ./src/app/user/user.resolver.ts ***!
  \***************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.model */ "./src/app/user/user.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserResolver = /** @class */ (function () {
    function UserResolver(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserResolver.prototype.resolve = function (route) {
        var _this = this;
        var user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["FirebaseUserModel"]();
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUser()
                .then(function (res) {
                if (res.providerData[0].providerId == 'password') {
                    user.image = 'http://dsi-vd.github.io/patternlab-vd/images/fpo_avatar.png';
                    user.name = res.displayName;
                    user.provider = res.providerData[0].providerId;
                    return resolve(user);
                }
                else {
                    user.image = res.photoURL;
                    user.name = res.displayName;
                    user.provider = res.providerData[0].providerId;
                    return resolve(user);
                }
            }, function (err) {
                _this.router.navigate(['/login']);
                return reject(err);
            });
        });
    };
    UserResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserResolver);
    return UserResolver;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(afAuth) {
        this.afAuth = afAuth;
    }
    UserService.prototype.getCurrentUser = function () {
        return new Promise(function (resolve, reject) {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(user);
                }
                else {
                    reject('No user logged in');
                }
            });
        });
    };
    UserService.prototype.updateCurrentUser = function (value) {
        return new Promise(function (resolve, reject) {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
            user.updateProfile({
                displayName: value.name,
                photoURL: user.photoURL
            }).then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC5y-e7x9Y_eWNrDf6p3-9kZrq8TAhx-kw",
        authDomain: "ngblog-a6835.firebaseapp.com",
        databaseURL: "https://ngblog-a6835.firebaseio.com",
        projectId: "ngblog-a6835",
        storageBucket: "ngblog-a6835.appspot.com",
        messagingSenderId: "1060454062184"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Download\Lap trinh\Angular_Project\PublicBlog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map