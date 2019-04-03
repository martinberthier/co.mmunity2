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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-list/post-list.component */ "./src/app/post-list/post-list.component.ts");
/* harmony import */ var _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-edit/post-edit.component */ "./src/app/post-edit/post-edit.component.ts");
/* harmony import */ var _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-login/form-login.component */ "./src/app/form-login/form-login.component.ts");
/* harmony import */ var _form_register_form_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-register/form-register.component */ "./src/app/form-register/form-register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _post_list_by_category_post_list_by_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post-list-by-category/post-list-by-category.component */ "./src/app/post-list-by-category/post-list-by-category.component.ts");









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    },
    {
        path: 'post-list',
        component: _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__["PostListComponent"]
    },
    {
        path: 'post-add/:idCategory',
        component: _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_4__["PostEditComponent"]
    },
    {
        path: 'post-edit/:id',
        component: _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_4__["PostEditComponent"]
    },
    {
        path: 'form-login',
        component: _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_5__["FormLoginComponent"]
    },
    {
        path: 'form-register',
        component: _form_register_form_register_component__WEBPACK_IMPORTED_MODULE_6__["FormRegisterComponent"]
    },
    {
        path: 'post-list-by-category/:id',
        component: _post_list_by_category_post_list_by_category_component__WEBPACK_IMPORTED_MODULE_8__["PostListByCategoryComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <post-list></post-list> -->\n\n\n<router-outlet></router-outlet>\n<!-- <form-login></form-login>\n\n<form-register></form-register> -->\n\n\n\n\n\n<!-- The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/jwt/jwt.service */ "./src/app/shared/jwt/jwt.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, jwtService) {
        var _this = this;
        this.router = router;
        this.jwtService = jwtService;
        this.title = 'community';
        this.jwtService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    AppComponent.prototype.logout = function () {
        this.jwtService.logout();
        this.router.navigate(['/form-login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_3__["JwtService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/helpers/jwt.interceptor */ "./src/app/shared/helpers/jwt.interceptor.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-login/form-login.component */ "./src/app/form-login/form-login.component.ts");
/* harmony import */ var _form_register_form_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-register/form-register.component */ "./src/app/form-register/form-register.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post-list/post-list.component */ "./src/app/post-list/post-list.component.ts");
/* harmony import */ var _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post-edit/post-edit.component */ "./src/app/post-edit/post-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _post_list_by_category_post_list_by_category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./post-list-by-category/post-list-by-category.component */ "./src/app/post-list-by-category/post-list-by-category.component.ts");
/* harmony import */ var _services_signinService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/signinService */ "./src/app/services/signinService.ts");
/* harmony import */ var _shared_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/helpers/error.interceptor */ "./src/app/shared/helpers/error.interceptor.ts");
/* harmony import */ var _shared_arraySortPipe_array_sort_pipe_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/arraySortPipe/array-sort-pipe.pipe */ "./src/app/shared/arraySortPipe/array-sort-pipe.pipe.ts");

















//service



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_6__["FormLoginComponent"],
                _form_register_form_register_component__WEBPACK_IMPORTED_MODULE_7__["FormRegisterComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"],
                _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_10__["PostListComponent"],
                _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_11__["PostEditComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_15__["SearchbarComponent"],
                _post_list_by_category_post_list_by_category_component__WEBPACK_IMPORTED_MODULE_16__["PostListByCategoryComponent"],
                _shared_arraySortPipe_array_sort_pipe_pipe__WEBPACK_IMPORTED_MODULE_19__["ArraySortPipePipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            ],
            providers: [
                _services_signinService__WEBPACK_IMPORTED_MODULE_17__["SigninService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _shared_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _shared_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_18__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"category-list\"   *ngFor=\"let category of categories\">\n  <!-- <a routerLink=\"/post-list-by-category/\" class=\"category\">  -->\n    <a [routerLink]=\"['/post-list-by-category', category.id]\" class=\"category\"> \n    {{category.name}}\n     <!-- {{category.id}} -->\n  </a>\n\n  <!-- [routerLink]=\"['/post-edit', post.id] -->\n  </div>"

/***/ }),

/***/ "./src/app/category/category.component.scss":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category {\n  display: block;\n  text-align: center;\n  margin: 10px auto;\n  color: #fff;\n  background-color: black;\n  font-weight: bold;\n  font-size: 2rem;\n  border: none;\n  width: 200px;\n  border-radius: 50px; }\n\n.category:hover {\n  color: black;\n  background-color: white;\n  text-decoration: none; }\n\n.category-list:first-child {\n  margin-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvQzpcXHdhbXA2NFxcd3d3XFxhbmd1bGFyXFxjb21tdW5pdHkvc3JjXFxhcHBcXGNhdGVnb3J5XFxjYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnk6aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNhdGVnb3J5LWxpc3Q6Zmlyc3QtY2hpbGR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_category_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/category/category.service */ "./src/app/shared/category/category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService) {
        this.categoryService = categoryService;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getAll()
            .subscribe(function (response) {
            console.log(response);
            _this.categories = response;
        });
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/category/category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_category_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/form-login/form-login.component.html":
/*!******************************************************!*\
  !*** ./src/app/form-login/form-login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"body\">\n    \n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\n\n    <h3>Connexion</h3>\n\n    <p>alexis@mail.com</p>\n    <p>password</p>\n\n  <div *ngIf=\"invalidLogin\" class=\"alert alert-danger\">\n    Adresse mail ou mot de passe incorrect\n  </div>\n\n  <!-- <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div> -->\n\n  <div *ngIf=\"invalidForm\" class=\"alert alert-danger\">\n      Réponse invalide\n    </div>\n\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email</label>\n    <input \n    required \n    formControlName=\"email\"\n    type=\"email\" \n    class=\"form-control\" \n    aria-describedby=\"emailHelp\" \n    placeholder=\"Entrez votre email\"\n    >\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Mot de passe</label>\n    <input \n    required \n    formControlName=\"password\"\n    type=\"password\" \n    class=\"form-control\" \n    placeholder=\"Entrez votre mot de passe\"\n    >\n  </div>\n\n  <button class=\"btn btn-primary \" >Valider</button>\n\n  <p class=\"info-form\">Pas encore de compte ? <span><a [routerLink]=\"['/form-register']\"  class=\"inlineBtn\" >Inscrivez-vous</a></span> </p>\n  \n\n  <a routerLink=\"/home\" class=\"form_link\">Retour</a>\n\n</form>\n\n</div>"

/***/ }),

/***/ "./src/app/form-login/form-login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/form-login/form-login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body#form {\n  background-size: 100%; }\n\nform {\n  padding: 50px 8% 80px 8%;\n  width: 500px;\n  /* margin: 200px auto; */\n  margin: 80px auto;\n  background: white; }\n\n.info-form {\n  margin-top: 30px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: black;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 0.8rem;\n  border: none; }\n\n.btn {\n  float: right;\n  margin-top: 20px;\n  background: black; }\n\na.form_link {\n  list-style: none;\n  text-decoration: none;\n  display: block;\n  font-weight: bold;\n  color: black;\n  margin-top: 30px;\n  width: 50px; }\n\na.form_link:hover {\n  text-decoration: none;\n  color: white;\n  background-color: black; }\n\n.inlineBtn {\n  list-style: none;\n  text-decoration: none;\n  display: inline;\n  font-weight: bold;\n  color: black; }\n\n.inlineBtn:hover {\n  text-decoration: none;\n  color: white;\n  background-color: black; }\n\n::-webkit-file-upload-button {\n  background: black;\n  border: none;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 0.8rem;\n  padding: 5px 10px;\n  cursor: pointer;\n  border-radius: 5px; }\n\n@media (max-width: 640px) {\n  /* CSS mobile ici */\n  form {\n    margin-top: 0;\n    padding: 50px 8% 80px 8%;\n    width: 100%; } }\n\n@media (min-width: 641px) {\n  /* CSS dekstop ici */\n  @-webkit-keyframes Gradient {\n    0% {\n      background-position: 0 50%; }\n    50% {\n      background-position: 100% 50%; }\n    to {\n      background-position: 0 50%; } }\n  @keyframes Gradient {\n    0% {\n      background-position: 0 50%; }\n    50% {\n      background-position: 100% 50%; }\n    to {\n      background-position: 0 50%; } }\n  #body {\n    background: linear-gradient(90deg, #e76973 1.72%, rgba(241, 137, 95, 0.8) 23.88%, rgba(255, 231, 137, 0.8) 49.2%, #99cead 75.2%, #97d1ce 95.93%), #fff;\n    background-size: 600% 600%;\n    overflow-y: scroll;\n    -webkit-animation: Gradient 10s ease infinite;\n    animation: Gradient 10s ease infinite;\n    height: 100vh;\n    width: 100vw;\n    z-index: 100;\n    transition: 1s; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1sb2dpbi9DOlxcd2FtcDY0XFx3d3dcXGFuZ3VsYXJcXGNvbW11bml0eS9zcmNcXGFwcFxcZm9ybS1sb2dpblxcZm9ybS1sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osd0JBQUE7RUFDQSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osdUJBQ0YsRUFBQTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBS2Q7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHVCQUNGLEVBQUE7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG1CQUFBO0VBRUE7SUFDRSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFdBQVcsRUFBQSxFQUNaOztBQUlIO0VBRUUsb0JBQUE7RUFDQTtJQUNFO01BQ0UsMEJBQ0YsRUFBQTtJQUVBO01BQ0UsNkJBQ0YsRUFBQTtJQUVBO01BQ0UsMEJBQ0YsRUFBQSxFQUFBO0VBWEY7SUFDRTtNQUNFLDBCQUNGLEVBQUE7SUFFQTtNQUNFLDZCQUNGLEVBQUE7SUFFQTtNQUNFLDBCQUNGLEVBQUEsRUFBQTtFQUdGO0lBRUUsc0pBQW9KO0lBQ3BKLDBCQUEwQjtJQUUxQixrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFFWixjQUNGLEVBQUEsRUFBQyIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbG9naW4vZm9ybS1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkjZm9ybSB7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9ob21lLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBwYWRkaW5nOiA1MHB4IDglIDgwcHggOCU7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIC8qIG1hcmdpbjogMjAwcHggYXV0bzsgKi9cclxuICBtYXJnaW46IDgwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmluZm8tZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbmEuZm9ybV9saW5rIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuYS5mb3JtX2xpbms6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxufVxyXG5cclxuLmlubGluZUJ0biB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAvLyBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIC8vIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uaW5saW5lQnRuOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXHJcbn1cclxuXHJcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIC8qIENTUyBtb2JpbGUgaWNpICovXHJcblxyXG4gIGZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmc6IDUwcHggOCUgODBweCA4JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDFweCkge1xyXG5cclxuICAvKiBDU1MgZGVrc3RvcCBpY2kgKi9cclxuICBAa2V5ZnJhbWVzIEdyYWRpZW50IHtcclxuICAgIDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCVcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJVxyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCVcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDEuNzIlLCAjZTc2OTczKSwgY29sb3Itc3RvcCgyMy44OCUsIHJnYmEoMjQxLCAxMzcsIDk1LCAuOCkpLCBjb2xvci1zdG9wKDQ5LjIlLCByZ2JhKDI1NSwgMjMxLCAxMzcsIC44KSksIGNvbG9yLXN0b3AoNzUuMiUsICM5OWNlYWQpLCBjb2xvci1zdG9wKDk1LjkzJSwgIzk3ZDFjZSkpLCAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZTc2OTczIDEuNzIlLCByZ2JhKDI0MSwgMTM3LCA5NSwgLjgpIDIzLjg4JSwgcmdiYSgyNTUsIDIzMSwgMTM3LCAuOCkgNDkuMiUsICM5OWNlYWQgNzUuMiUsICM5N2QxY2UgOTUuOTMlKSwgI2ZmZjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNjAwJSA2MDAlO1xyXG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IEdyYWRpZW50IDEwcyBlYXNlIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBHcmFkaWVudCAxMHMgZWFzZSBpbmZpbml0ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDFzO1xyXG4gICAgdHJhbnNpdGlvbjogMXNcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/form-login/form-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/form-login/form-login.component.ts ***!
  \****************************************************/
/*! exports provided: FormLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginComponent", function() { return FormLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/jwt/jwt.service */ "./src/app/shared/jwt/jwt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var FormLoginComponent = /** @class */ (function () {
    function FormLoginComponent(jwtService, formBuilder, route, router) {
        this.jwtService = jwtService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.error = '';
    }
    FormLoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        // reset login status
        this.jwtService.logout();
    };
    Object.defineProperty(FormLoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            this.invalidForm = true;
            return;
        }
        this.jwtService.login(this.f.email.value, this.f.password.value)
            .subscribe(function (data) {
            _this.router.navigate(['/']);
            console.log(data);
        }, function (error) {
            _this.error = error;
            _this.invalidLogin = true;
        });
    };
    FormLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'form-login',
            template: __webpack_require__(/*! ./form-login.component.html */ "./src/app/form-login/form-login.component.html"),
            styles: [__webpack_require__(/*! ./form-login.component.scss */ "./src/app/form-login/form-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FormLoginComponent);
    return FormLoginComponent;
}());



/***/ }),

/***/ "./src/app/form-register/form-register.component.html":
/*!************************************************************!*\
  !*** ./src/app/form-register/form-register.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\n<form>\n\n    <h3>Inscription</h3>\n\n    <div class=\"form-group\">\n        <label for=\"name\">Prénom</label>\n        <input \n        required\n        minlength=\"3\"\n        maxlength=\"15\"\n        [(ngModel)]=\"name\"\n         name=\"name\"\n        type=\"text\"\n        class=\"form-control\" \n        placeholder=\"Entrez votre prénom\"\n        >\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"lastname\">Nom</label>\n        <input \n        required \n        minlength=\"3\"\n        maxlength=\"15\"\n        [(ngModel)]=\"lastname\"\n        name=\"lastname\"\n        type=\"text\"\n        class=\"form-control\" \n        placeholder=\"Entrez votre nom\"\n        >\n    </div>\n\n  <div class=\"form-group\">\n          <label for=\"job\">Position occupée</label>\n          <input \n          required \n          minlength=\"3\"\n          maxlength=\"25\"\n          [(ngModel)]=\"job\"\n          name=\"job\" \n          type=\"text\"\n          class=\"form-control\" \n          placeholder=\"Entrez votre position\"\n          >\n  </div>\n\n  <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email</label>\n      <input \n      required \n      minlength=\"3\"\n      maxlength=\"25\"\n      [(ngModel)]=\"email\"\n      name=\"email\" \n      type=\"email\" \n      class=\"form-control\" \n      aria-describedby=\"emailHelp\" \n      placeholder=\"Entrez votre email\"\n      >\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Mot de passe</label>\n    <input \n    required \n    minlength=\"3\"\n    maxlength=\"15\"\n    [(ngModel)]=\"password\"\n    name=\"password\" \n    type=\"password\" \n    class=\"form-control\" \n    placeholder=\"Entrez votre mot de passe\"\n    >\n  </div>\n\n  <button class=\"btn btn-primary \" (click)=\"register()\">Valider</button>\n\n  <a routerLink=\"/home\" class=\"form_link\">Retour</a>\n\n</form>\n\n</div>"

/***/ }),

/***/ "./src/app/form-register/form-register.component.scss":
/*!************************************************************!*\
  !*** ./src/app/form-register/form-register.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body#form {\n  background-size: 100%; }\n\nform {\n  padding: 50px 100px;\n  width: 500px;\n  /* margin: 200px auto; */\n  margin: 80px auto;\n  background: white; }\n\n.btn-primary {\n  color: #fff;\n  background-color: black;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 0.8rem;\n  border: none; }\n\n.btn {\n  float: right;\n  margin-top: 20px;\n  background: black; }\n\na.form_link {\n  list-style: none;\n  text-decoration: none;\n  display: block;\n  font-weight: bold;\n  color: black;\n  margin-top: 30px;\n  width: 50px; }\n\na.form_link:hover {\n  text-decoration: none;\n  color: white;\n  background-color: black; }\n\n::-webkit-file-upload-button {\n  background: black;\n  border: none;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 0.8rem;\n  padding: 5px 10px;\n  cursor: pointer;\n  border-radius: 5px; }\n\n@media (max-width: 640px) {\n  /* CSS mobile ici */\n  form {\n    margin-top: 0;\n    padding: 50px 8% 80px 8%;\n    width: 100%; } }\n\n@media (min-width: 641px) {\n  /* CSS dekstop ici */\n  @-webkit-keyframes Gradient {\n    0% {\n      background-position: 0 50%; }\n    50% {\n      background-position: 100% 50%; }\n    to {\n      background-position: 0 50%; } }\n  @keyframes Gradient {\n    0% {\n      background-position: 0 50%; }\n    50% {\n      background-position: 100% 50%; }\n    to {\n      background-position: 0 50%; } }\n  #body {\n    background: linear-gradient(90deg, #e76973 1.72%, rgba(241, 137, 95, 0.8) 23.88%, rgba(255, 231, 137, 0.8) 49.2%, #99cead 75.2%, #97d1ce 95.93%), #fff;\n    background-size: 600% 600%;\n    overflow-y: scroll;\n    -webkit-animation: Gradient 10s ease infinite;\n    animation: Gradient 10s ease infinite;\n    height: 100vh;\n    width: 100vw;\n    z-index: 100;\n    transition: 1s; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1yZWdpc3Rlci9DOlxcd2FtcDY0XFx3d3dcXGFuZ3VsYXJcXGNvbW11bml0eS9zcmNcXGFwcFxcZm9ybS1yZWdpc3RlclxcZm9ybS1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osd0JBQUE7RUFDQSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osdUJBQ0YsRUFBQTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsbUJBQUE7RUFFQTtJQUNFLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsV0FBVyxFQUFBLEVBQ1o7O0FBR0g7RUFFRSxvQkFBQTtFQUNBO0lBQ0U7TUFDRSwwQkFDRixFQUFBO0lBRUE7TUFDRSw2QkFDRixFQUFBO0lBRUE7TUFDRSwwQkFDRixFQUFBLEVBQUE7RUFYRjtJQUNFO01BQ0UsMEJBQ0YsRUFBQTtJQUVBO01BQ0UsNkJBQ0YsRUFBQTtJQUVBO01BQ0UsMEJBQ0YsRUFBQSxFQUFBO0VBR0Y7SUFFRSxzSkFBb0o7SUFDcEosMEJBQTBCO0lBRTFCLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUVaLGNBQ0YsRUFBQSxFQUFDIiwiZmlsZSI6InNyYy9hcHAvZm9ybS1yZWdpc3Rlci9mb3JtLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSNmb3JtIHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2hvbWUucG5nKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHBhZGRpbmc6IDUwcHggMTAwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIC8qIG1hcmdpbjogMjAwcHggYXV0bzsgKi9cclxuICBtYXJnaW46IDgwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbmEuZm9ybV9saW5rIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuYS5mb3JtX2xpbms6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxufVxyXG5cclxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLyogQ1NTIG1vYmlsZSBpY2kgKi9cclxuXHJcbiAgZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZzogNTBweCA4JSA4MHB4IDglO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQxcHgpIHtcclxuXHJcbiAgLyogQ1NTIGRla3N0b3AgaWNpICovXHJcbiAgQGtleWZyYW1lcyBHcmFkaWVudCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlXHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCVcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgxLjcyJSwgI2U3Njk3MyksIGNvbG9yLXN0b3AoMjMuODglLCByZ2JhKDI0MSwgMTM3LCA5NSwgLjgpKSwgY29sb3Itc3RvcCg0OS4yJSwgcmdiYSgyNTUsIDIzMSwgMTM3LCAuOCkpLCBjb2xvci1zdG9wKDc1LjIlLCAjOTljZWFkKSwgY29sb3Itc3RvcCg5NS45MyUsICM5N2QxY2UpKSwgI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2U3Njk3MyAxLjcyJSwgcmdiYSgyNDEsIDEzNywgOTUsIC44KSAyMy44OCUsIHJnYmEoMjU1LCAyMzEsIDEzNywgLjgpIDQ5LjIlLCAjOTljZWFkIDc1LjIlLCAjOTdkMWNlIDk1LjkzJSksICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwMCUgNjAwJTtcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBHcmFkaWVudCAxMHMgZWFzZSBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogR3JhZGllbnQgMTBzIGVhc2UgaW5maW5pdGU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcclxuICAgIHRyYW5zaXRpb246IDFzXHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/form-register/form-register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/form-register/form-register.component.ts ***!
  \**********************************************************/
/*! exports provided: FormRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterComponent", function() { return FormRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_signinService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/signinService */ "./src/app/services/signinService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FormRegisterComponent = /** @class */ (function () {
    function FormRegisterComponent(signingSerivce, router) {
        this.signingSerivce = signingSerivce;
        this.router = router;
    }
    FormRegisterComponent.prototype.ngOnInit = function () {
    };
    FormRegisterComponent.prototype.register = function () {
        var _this = this;
        this.signingSerivce.register(this.email, this.lastname, this.name, this.password, this.job).subscribe(function (data) {
            _this.router.navigateByUrl('/home');
        });
    };
    FormRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'form-register',
            template: __webpack_require__(/*! ./form-register.component.html */ "./src/app/form-register/form-register.component.html"),
            styles: [__webpack_require__(/*! ./form-register.component.scss */ "./src/app/form-register/form-register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signinService__WEBPACK_IMPORTED_MODULE_2__["SigninService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FormRegisterComponent);
    return FormRegisterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"body\">\n    <a routerLink=\"app\">\n        <img class=\"logo\" src=\"assets/images/logo_community.svg\" alt=\"logo\">\n    </a>\n    <navbar></navbar>\n<h1  *ngIf=\"jwtService.loggedIn()\">\n    Bonjour \n    {{ userName | titlecase }}\n    {{ userLastName | titlecase }}\n</h1>\n\n<h2 *ngIf=\"jwtService.loggedIn()\">\n    {{ userJob | titlecase }}\n</h2>\n\n<searchbar *ngIf=\"jwtService.loggedIn()\"></searchbar>\n\n<category *ngIf=\"jwtService.loggedIn()\" ></category>\n\n<!-- <post-list></post-list> -->\n\n\n\n<!-- <h1>Hello</h1>\n<h2>C'est un test</h2>\n<p>daokdza dkazo dkazodk azkdaoz kdozak doakzdoazk dokazodka ozkdoazk doazkd okzado </p> -->\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes Gradient {\n  0% {\n    background-position: 0 50%; }\n  50% {\n    background-position: 100% 50%; }\n  to {\n    background-position: 0 50%; } }\n\n@keyframes Gradient {\n  0% {\n    background-position: 0 50%; }\n  50% {\n    background-position: 100% 50%; }\n  to {\n    background-position: 0 50%; } }\n\n#body {\n  background: linear-gradient(90deg, #e76973 1.72%, rgba(241, 137, 95, 0.8) 23.88%, rgba(255, 231, 137, 0.8) 49.2%, #99cead 75.2%, #97d1ce 95.93%), #fff;\n  background-size: 600% 600%;\n  position: fixed;\n  overflow-y: scroll;\n  -webkit-animation: Gradient 10s ease infinite;\n  animation: Gradient 10s ease infinite;\n  height: 100vh;\n  width: 100vw;\n  z-index: 100;\n  transition: 1s; }\n\nh1 {\n  padding-top: 20px; }\n\nh1, h2 {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcd2FtcDY0XFx3d3dcXGFuZ3VsYXJcXGNvbW11bml0eS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksMEJBQ0osRUFBQTtFQUVBO0lBQ0ksNkJBQ0osRUFBQTtFQUVBO0lBQ0ksMEJBQ0osRUFBQSxFQUFBOztBQVhKO0VBQ0k7SUFDSSwwQkFDSixFQUFBO0VBRUE7SUFDSSw2QkFDSixFQUFBO0VBRUE7SUFDSSwwQkFDSixFQUFBLEVBQUE7O0FBR0o7RUFFSSxzSkFBb0o7RUFDcEosMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsNkNBQTZDO0VBQzdDLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFFWixjQUNKLEVBQUE7O0FBRUE7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgR3JhZGllbnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlXHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJVxyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDUwJVxyXG4gICAgfVxyXG59XHJcblxyXG4jYm9keXtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDEuNzIlLCAjZTc2OTczKSwgY29sb3Itc3RvcCgyMy44OCUsIHJnYmEoMjQxLCAxMzcsIDk1LCAuOCkpLCBjb2xvci1zdG9wKDQ5LjIlLCByZ2JhKDI1NSwgMjMxLCAxMzcsIC44KSksIGNvbG9yLXN0b3AoNzUuMiUsICM5OWNlYWQpLCBjb2xvci1zdG9wKDk1LjkzJSwgIzk3ZDFjZSkpLCAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZTc2OTczIDEuNzIlLCByZ2JhKDI0MSwgMTM3LCA5NSwgLjgpIDIzLjg4JSwgcmdiYSgyNTUsIDIzMSwgMTM3LCAuOCkgNDkuMiUsICM5OWNlYWQgNzUuMiUsICM5N2QxY2UgOTUuOTMlKSwgI2ZmZjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNjAwJSA2MDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IEdyYWRpZW50IDEwcyBlYXNlIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBHcmFkaWVudCAxMHMgZWFzZSBpbmZpbml0ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDFzO1xyXG4gICAgdHJhbnNpdGlvbjogMXNcclxufVxyXG5cclxuaDF7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5oMSwgaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/jwt/jwt.service */ "./src/app/shared/jwt/jwt.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(jwtService) {
        this.jwtService = jwtService;
        this.userName = localStorage.getItem('currentUserName');
        this.userLastName = localStorage.getItem('currentUserLastName');
        this.userJob = localStorage.getItem('currentUserJob');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JwtService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  \n  <ul>\n      <!-- <a routerLink=\"home\">\n          <li>Accueil</li>\n      </a> -->\n      <a *ngIf=\"!jwtService.loggedIn()\" [routerLink]=\"['/form-login']\">\n          <li>Connexion</li>\n      </a>\n      <a *ngIf=\"!jwtService.loggedIn()\" [routerLink]=\"['/form-register']\">\n          <li>S'inscrire</li>\n      </a>\n\n    <a *ngIf=\"jwtService.loggedIn()\" (click)=\"logout()\">\n        <li>Se déconnecter</li>\n    </a>\n  </ul>\n\n  \n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav ul {\n  margin-top: 70px;\n  display: flex;\n  justify-content: center; }\n\nnav ul a li {\n  list-style: none;\n  text-decoration: none;\n  display: inline;\n  font-weight: bold;\n  font-size: 1.1em;\n  color: black;\n  margin: 0 30px; }\n\nnav ul a:hover {\n  text-decoration: none;\n  background-color: black;\n  cursor: pointer; }\n\nnav ul a:hover li {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFx3YW1wNjRcXHd3d1xcYW5ndWxhclxcY29tbXVuaXR5L3NyY1xcYXBwXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUVsQjtFQUNJLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYgdWx7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5uYXYgdWwgYSBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IDAgMzBweDtcclxufVxyXG5uYXYgdWwgYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbm5hdiB1bCBhOmhvdmVyIGxpe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/jwt/jwt.service */ "./src/app/shared/jwt/jwt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(jwtService, router) {
        this.jwtService = jwtService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.jwtService.logout();
        this.router.navigate(['/']);
        location.reload();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JwtService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/post-edit/post-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/post-edit/post-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\n  \n  <form #postForm=\"ngForm\" (ngSubmit)=\"save(postForm.value)\">\n   \n      <h3>{{post.content ? 'Editer' : 'Ajouter'}} un commentaire</h3>\n    \n    \n      <!-- <input \n      type=\"hidden\" \n      name=\"userId\" \n      [(ngModel)]=\"userId\"\n      >\n\n      <input \n      type=\"hidden\" \n      name=\"idCategory\" \n      [(ngModel)]=\"idCategory\"\n      >\n\n      <input \n      type=\"hidden\" \n      name=\"href\" \n      [(ngModel)]=\"post.href\"\n      > -->\n      \n        <!-- <input placeholder=\"post Name\" [(ngModel)]=\"post.name\"\n               required name=\"name\" #name> -->\n\n          <textarea \n          placeholder=\"Entre votre message\" \n       [(ngModel)]=\"post.content\"\n          name=\"content\" \n          id=\"\" \n          cols=\"20\" \n          rows=\"10\"\n          #content\n          >\n        </textarea>\n        \n        <br>\n        <br>\n\n     <input \n     placeholder=\"Mot-clé Giphy\" \n     [(ngModel)]=\"post.tag\"\n     name=\"tag\" \n     #tag\n     >\n    \n\n      <!-- <input\n       placeholder=\"Entre votre message\" \n       [(ngModel)]=\"post.content\"\n      required \n      name=\"content\" \n      #content\n      > -->\n \n          <br>\n      <button type=\"submit\"\n              [disabled]=\"!postForm.form.valid\"\n              class=\"btn btn-primary \">Envoyer</button>\n\n      <button (click)=\"remove(post.id)\"\n              *ngIf=\"post.id\" type=\"button\"\n              class=\"btn btn-primary \">Supprimer</button>\n\n              <!-- <br>\n              <br> -->\n\n\n      <a routerLink=\"/home\" class=\"form_link\">Retour</a>\n      <br>\n      <br>\n      <div class=\"giphy\">\n        <img src=\"{{post.giphyUrl}}\" >\n      </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/post-edit/post-edit.component.scss":
/*!****************************************************!*\
  !*** ./src/app/post-edit/post-edit.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  height: 80px; }\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n  max-width: 100%;\n  margin-bottom: 40px; }\n\nbody#form {\n  background-size: 100%; }\n\nform {\n  padding: 50px 8% 0 8%;\n  width: 500px;\n  /* margin: 200px auto; */\n  margin: 80px auto 80px auto;\n  background: white; }\n\n.info-form {\n  margin-top: 30px; }\n\ninput, button, select, optgroup, textarea {\n  margin: 0;\n  width: 100%;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\n.btn-primary {\n  color: #fff;\n  background-color: black;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 0.8rem;\n  border: none; }\n\n.btn {\n  float: right;\n  margin-top: 20px;\n  margin-left: 20px;\n  background: black;\n  width: 60px; }\n\na.form_link {\n  list-style: none;\n  text-decoration: none;\n  display: block;\n  font-weight: bold;\n  color: black;\n  margin-top: 30px;\n  width: 50px; }\n\na.form_link:hover {\n  text-decoration: none;\n  color: white;\n  background-color: black; }\n\n.inlineBtn {\n  list-style: none;\n  text-decoration: none;\n  display: inline;\n  font-weight: bold;\n  color: black; }\n\n.inlineBtn:hover {\n  text-decoration: none;\n  color: white;\n  background-color: black; }\n\n::-webkit-file-upload-button {\n  background: black;\n  border: none;\n  color: white;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 0.8rem;\n  padding: 5px 10px;\n  cursor: pointer;\n  border-radius: 5px; }\n\n@media (max-width: 640px) {\n  /* CSS mobile ici */\n  form {\n    margin-top: 0;\n    padding: 50px 8% 80px 8%;\n    width: 100%; } }\n\n@media (min-width: 641px) {\n  /* CSS dekstop ici */\n  @-webkit-keyframes Gradient {\n    0% {\n      background-position: 0 50%; }\n    50% {\n      background-position: 100% 50%; }\n    to {\n      background-position: 0 50%; } }\n  @keyframes Gradient {\n    0% {\n      background-position: 0 50%; }\n    50% {\n      background-position: 100% 50%; }\n    to {\n      background-position: 0 50%; } }\n  #body {\n    background: linear-gradient(90deg, #e76973 1.72%, rgba(241, 137, 95, 0.8) 23.88%, rgba(255, 231, 137, 0.8) 49.2%, #99cead 75.2%, #97d1ce 95.93%), #fff;\n    background-size: 600% 600%;\n    overflow-y: scroll;\n    -webkit-animation: Gradient 10s ease infinite;\n    animation: Gradient 10s ease infinite;\n    height: 100vh;\n    width: 100vw;\n    z-index: 100;\n    transition: 1s; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1lZGl0L0M6XFx3YW1wNjRcXHd3d1xcYW5ndWxhclxcY29tbXVuaXR5L3NyY1xcYXBwXFxwb3N0LWVkaXRcXHBvc3QtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHckI7RUFFSSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHdCQUFBO0VBQ0EsMkJBQTJCO0VBQzNCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHVCQUNGLEVBQUE7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUtkO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix1QkFDRixFQUFBOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFNdEI7RUFDSSxtQkFBQTtFQUVBO0lBQ0UsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixXQUFXLEVBQUEsRUFDWjs7QUFJSDtFQUVFLG9CQUFBO0VBQ0E7SUFDRTtNQUNFLDBCQUNGLEVBQUE7SUFFQTtNQUNFLDZCQUNGLEVBQUE7SUFFQTtNQUNFLDBCQUNGLEVBQUEsRUFBQTtFQVhGO0lBQ0U7TUFDRSwwQkFDRixFQUFBO0lBRUE7TUFDRSw2QkFDRixFQUFBO0lBRUE7TUFDRSwwQkFDRixFQUFBLEVBQUE7RUFHRjtJQUVFLHNKQUFvSjtJQUNwSiwwQkFBMEI7SUFFMUIsa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3QyxxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBRVosY0FDRixFQUFBLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWVkaXQvcG9zdC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWF7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbmJvZHkjZm9ybSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2hvbWUucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgZm9ybSB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDglIDAgOCU7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAvKiBtYXJnaW46IDIwMHB4IGF1dG87ICovXHJcbiAgICBtYXJnaW46IDgwcHggYXV0byA4MHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmluZm8tZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0LCBvcHRncm91cCwgdGV4dGFyZWEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcbiAgXHJcbiAgLmJ0bi1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0biB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gIH1cclxuICBcclxuICBhLmZvcm1fbGluayB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgYS5mb3JtX2xpbms6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxuICB9XHJcbiAgXHJcbiAgLmlubGluZUJ0biB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgLy8gd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbmxpbmVCdG46aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxuICB9XHJcbiAgXHJcbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIC8qIENTUyBtb2JpbGUgaWNpICovXHJcbiAgXHJcbiAgICBmb3JtIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgcGFkZGluZzogNTBweCA4JSA4MHB4IDglO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDY0MXB4KSB7XHJcbiAgXHJcbiAgICAvKiBDU1MgZGVrc3RvcCBpY2kgKi9cclxuICAgIEBrZXlmcmFtZXMgR3JhZGllbnQge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCVcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICA1MCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgdG8ge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgICNib2R5IHtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMS43MiUsICNlNzY5NzMpLCBjb2xvci1zdG9wKDIzLjg4JSwgcmdiYSgyNDEsIDEzNywgOTUsIC44KSksIGNvbG9yLXN0b3AoNDkuMiUsIHJnYmEoMjU1LCAyMzEsIDEzNywgLjgpKSwgY29sb3Itc3RvcCg3NS4yJSwgIzk5Y2VhZCksIGNvbG9yLXN0b3AoOTUuOTMlLCAjOTdkMWNlKSksICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2U3Njk3MyAxLjcyJSwgcmdiYSgyNDEsIDEzNywgOTUsIC44KSAyMy44OCUsIHJnYmEoMjU1LCAyMzEsIDEzNywgLjgpIDQ5LjIlLCAjOTljZWFkIDc1LjIlLCAjOTdkMWNlIDk1LjkzJSksICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNjAwJSA2MDAlO1xyXG4gICAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IEdyYWRpZW50IDEwcyBlYXNlIGluZmluaXRlO1xyXG4gICAgICBhbmltYXRpb246IEdyYWRpZW50IDEwcyBlYXNlIGluZmluaXRlO1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcclxuICAgICAgdHJhbnNpdGlvbjogMXNcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/post-edit/post-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/post-edit/post-edit.component.ts ***!
  \**************************************************/
/*! exports provided: PostEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditComponent", function() { return PostEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_post_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/post/post.service */ "./src/app/shared/post/post.service.ts");
/* harmony import */ var _shared_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/giphy/giphy.service */ "./src/app/shared/giphy/giphy.service.ts");





var PostEditComponent = /** @class */ (function () {
    // post: {
    //   category: {
    //     idCategory: any
    //   },
    //   content: String,
    //   tag: String,
    //   user: {
    //     userId: any,
    //   }
    // }
    function PostEditComponent(route, router, postService, giphyService) {
        this.route = route;
        this.router = router;
        this.postService = postService;
        this.giphyService = giphyService;
        this.post = {};
    }
    PostEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.postService.get(id).subscribe(function (post) {
                    if (post) {
                        _this.post = post;
                        console.log(_this.post);
                        //this.post.href = post._links.self.href;
                        _this.giphyService.get(post.tag).subscribe(function (url) { return post.giphyUrl = url; });
                    }
                    else {
                        console.log("Post with id '" + id + "' not found, returning to list");
                        _this.gotoList();
                    }
                });
            }
        });
    };
    //   save(form: NgForm) {
    //     this.sub = this.route.params.subscribe(params => {
    //       const idCategory = params['idCategory'];
    //     console.log(form)
    //     this.postService.save(form).subscribe(result => {
    //      // this.gotoList();
    //       this.router.navigate(['/home']);
    //     }, error => console.error(error));
    //     });
    // }
    //A
    PostEditComponent.prototype.save = function (form) {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var idCategory = params['idCategory'];
            console.log(form);
            _this.postService.save(form, idCategory).subscribe(function (result) {
                // this.gotoList();
                _this.router.navigate(['/home']);
            }, function (error) { return console.error(error); });
        });
    };
    PostEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PostEditComponent.prototype.gotoList = function () {
        this.router.navigate(['/home']);
    };
    // save(form: NgForm) {
    //   console.log(form)
    //   this.postService.save(form).subscribe(result => {
    //     //this.gotoList();
    //     this.router.navigate(['/home']);
    //   }, error => console.error(error));
    // }
    PostEditComponent.prototype.remove = function (id) {
        var _this = this;
        this.postService.remove(id).subscribe(function (result) {
            _this.gotoList();
        }, function (error) { return console.error(error); });
    };
    PostEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'post-edit',
            template: __webpack_require__(/*! ./post-edit.component.html */ "./src/app/post-edit/post-edit.component.html"),
            styles: [__webpack_require__(/*! ./post-edit.component.scss */ "./src/app/post-edit/post-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_post_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _shared_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_4__["GiphyService"]])
    ], PostEditComponent);
    return PostEditComponent;
}());



/***/ }),

/***/ "./src/app/post-list-by-category/post-list-by-category.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/post-list-by-category/post-list-by-category.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\n\n  <section class=\"page_content\">\n\n    <h1 id=\"categoryTitle\">{{ category | titlecase }}</h1>\n\n    <hr>\n\n    <article class=\"comment\" *ngFor=\"let post of posts | arraySortPipe : 'id'\">\n\n      <p class=\"authorInfo\">\n        <span class=\"authorName\">\n          {{post.user.name | titlecase }} \n          {{post.user.lastname | titlecase }} \n        </span>\n        <span class=\"authorJob\">\n           - {{post.user.job | titlecase }} \n          </span>\n      </p>\n\n      <img id=\"giphy\" src=\"{{post.giphyUrl}}\"> <br />\n\n      <p class=\"comment_p\"> {{post.content}} </p>\n\n      <button \n      *ngIf=\"AuthorLogged()==post.user.id\"\n      [routerLink]=\"['/post-edit', post.id]\" \n      class=\"btn-edit btn-primary \">Modifier</button>\n\n      <hr>\n\n    </article>\n\n\n    <button [routerLink]=\"['/post-add', categoryId]\" class=\"btn btn-primary \">Ajouter</button>\n\n    <a routerLink=\"/home\" class=\"form_link\">Retour</a>\n\n  </section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/post-list-by-category/post-list-by-category.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/post-list-by-category/post-list-by-category.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#categoryTitle {\n  margin-bottom: 20px; }\n\n.authorInfo {\n  font-size: 1.5rem;\n  margin-bottom: 0; }\n\n.authorName {\n  font-weight: 900; }\n\n.authorJob {\n  font-size: 1.4rem;\n  text-transform: uppercase;\n  font-weight: 300;\n  font-style: italic; }\n\n.comment_p {\n  font-size: 1.3rem; }\n\n#giphy {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  max-width: 100%; }\n\na.form_link {\n  list-style: none;\n  text-decoration: none;\n  display: block;\n  font-weight: bold;\n  color: black;\n  margin-top: 30px;\n  width: 50px; }\n\na.form_link:hover {\n  text-decoration: none;\n  color: white;\n  background-color: black; }\n\n.btn-primary {\n  color: #fff;\n  background-color: black;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 0.8rem;\n  border: none; }\n\n.btn-edit {\n  padding: 1px 3px; }\n\n.btn {\n  float: right;\n  margin-top: 20px;\n  background: black; }\n\n@media (max-width: 640px) {\n  /* CSS mobile ici */\n  .page_content {\n    padding: 0px 8% 80px 8%;\n    margin: 40px auto 80px auto;\n    background: white; }\n  #categoryTitle {\n    padding-top: 0;\n    margin-bottom: 20px; } }\n\n@media (min-width: 641px) {\n  /* CSS dekstop ici */\n  .page_content {\n    padding: 0px 8% 80px 8%;\n    width: 70%;\n    margin: 40px auto 80px auto;\n    background: white; }\n  @-webkit-keyframes Gradient {\n    0% {\n      background-position: 0 50%; }\n    50% {\n      background-position: 100% 50%; }\n    to {\n      background-position: 0 50%; } }\n  @keyframes Gradient {\n    0% {\n      background-position: 0 50%; }\n    50% {\n      background-position: 100% 50%; }\n    to {\n      background-position: 0 50%; } }\n  #body {\n    background: linear-gradient(90deg, #e76973 1.72%, rgba(241, 137, 95, 0.8) 23.88%, rgba(255, 231, 137, 0.8) 49.2%, #99cead 75.2%, #97d1ce 95.93%), #fff;\n    background-size: 600% 600%;\n    overflow-y: scroll;\n    -webkit-animation: Gradient 10s ease infinite;\n    animation: Gradient 10s ease infinite;\n    height: 100vh;\n    width: 100vw;\n    z-index: 100;\n    transition: 1s; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1saXN0LWJ5LWNhdGVnb3J5L0M6XFx3YW1wNjRcXHd3d1xcYW5ndWxhclxcY29tbXVuaXR5L3NyY1xcYXBwXFxwb3N0LWxpc3QtYnktY2F0ZWdvcnlcXHBvc3QtbGlzdC1ieS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDSSxpQkFBaUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHVCQUNGLEVBQUE7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0ksbUJBQUE7RUFFQTtJQUNFLHVCQUF1QjtJQUV2QiwyQkFBMkI7SUFDM0IsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CLEVBQUEsRUFDcEI7O0FBR0w7RUFDRSxvQkFBQTtFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRTtNQUNFLDBCQUNGLEVBQUE7SUFFQTtNQUNFLDZCQUNGLEVBQUE7SUFFQTtNQUNFLDBCQUNGLEVBQUEsRUFBQTtFQVhGO0lBQ0U7TUFDRSwwQkFDRixFQUFBO0lBRUE7TUFDRSw2QkFDRixFQUFBO0lBRUE7TUFDRSwwQkFDRixFQUFBLEVBQUE7RUFHRjtJQUVFLHNKQUFvSjtJQUNwSiwwQkFBMEI7SUFFMUIsa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3QyxxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBRVosY0FDRixFQUFBLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWxpc3QtYnktY2F0ZWdvcnkvcG9zdC1saXN0LWJ5LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4jY2F0ZWdvcnlUaXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmF1dGhvckluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5hdXRob3JOYW1lIHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4uYXV0aG9ySm9iIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5jb21tZW50X3Age1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcblxyXG4jZ2lwaHkge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmEuZm9ybV9saW5rIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuYS5mb3JtX2xpbms6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1lZGl0e1xyXG4gIHBhZGRpbmc6IDFweCAzcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIC8qIENTUyBtb2JpbGUgaWNpICovXHJcbiAgXHJcbiAgICAucGFnZV9jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMHB4IDglIDgwcHggOCU7XHJcbiAgICAgIC8vIHdpZHRoOiA3MCU7XHJcbiAgICAgIG1hcmdpbjogNDBweCBhdXRvIDgwcHggYXV0bztcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjY2F0ZWdvcnlUaXRsZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDFweCkge1xyXG4gIC8qIENTUyBkZWtzdG9wIGljaSAqL1xyXG5cclxuICAucGFnZV9jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDBweCA4JSA4MHB4IDglO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogNDBweCBhdXRvIDgwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBHcmFkaWVudCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlXHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCVcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgxLjcyJSwgI2U3Njk3MyksIGNvbG9yLXN0b3AoMjMuODglLCByZ2JhKDI0MSwgMTM3LCA5NSwgLjgpKSwgY29sb3Itc3RvcCg0OS4yJSwgcmdiYSgyNTUsIDIzMSwgMTM3LCAuOCkpLCBjb2xvci1zdG9wKDc1LjIlLCAjOTljZWFkKSwgY29sb3Itc3RvcCg5NS45MyUsICM5N2QxY2UpKSwgI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2U3Njk3MyAxLjcyJSwgcmdiYSgyNDEsIDEzNywgOTUsIC44KSAyMy44OCUsIHJnYmEoMjU1LCAyMzEsIDEzNywgLjgpIDQ5LjIlLCAjOTljZWFkIDc1LjIlLCAjOTdkMWNlIDk1LjkzJSksICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwMCUgNjAwJTtcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBHcmFkaWVudCAxMHMgZWFzZSBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogR3JhZGllbnQgMTBzIGVhc2UgaW5maW5pdGU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcclxuICAgIHRyYW5zaXRpb246IDFzXHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/post-list-by-category/post-list-by-category.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/post-list-by-category/post-list-by-category.component.ts ***!
  \**************************************************************************/
/*! exports provided: PostListByCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListByCategoryComponent", function() { return PostListByCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_post_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/post/post.service */ "./src/app/shared/post/post.service.ts");
/* harmony import */ var _shared_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/giphy/giphy.service */ "./src/app/shared/giphy/giphy.service.ts");





var PostListByCategoryComponent = /** @class */ (function () {
    function PostListByCategoryComponent(postService, giphyService, route) {
        this.postService = postService;
        this.giphyService = giphyService;
        this.route = route;
    }
    PostListByCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            console.log("id ", id);
            if (id) {
                _this.postService.getAllByCategory(id).subscribe(function (response) {
                    // console.log("response", response);
                    _this.posts = response;
                    _this.category = response[0].category.name;
                    _this.categoryId = response[0].category.id;
                    var _loop_1 = function (post) {
                        if (post.tag === null) {
                            // console.log("tag null");
                        }
                        else {
                            _this.giphyService.get(post.tag).subscribe(function (url) { return post.giphyUrl = url; });
                        }
                    };
                    // console.log(this.category);
                    for (var _i = 0, _a = _this.posts; _i < _a.length; _i++) {
                        var post = _a[_i];
                        _loop_1(post);
                    }
                });
            }
        });
    };
    PostListByCategoryComponent.prototype.AuthorLogged = function () {
        return localStorage.getItem('currentUserId');
    };
    PostListByCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'post-list-by-category',
            template: __webpack_require__(/*! ./post-list-by-category.component.html */ "./src/app/post-list-by-category/post-list-by-category.component.html"),
            styles: [__webpack_require__(/*! ./post-list-by-category.component.scss */ "./src/app/post-list-by-category/post-list-by-category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_post_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"], _shared_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_4__["GiphyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PostListByCategoryComponent);
    return PostListByCategoryComponent;
}());



/***/ }),

/***/ "./src/app/post-list/post-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/post-list/post-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"comment\" *ngFor=\"let post of posts\">\n  \n  <img  id=\"giphy\" src=\"{{post.giphyUrl}}\" > <br/>\n\n  <!-- <p class=\"comment_p\"> {{post.content}} </p> -->\n\n  <a [routerLink]=\"['/post-edit', post.id]\">{{post.content}}</a>\n\n  <!-- <p class=\"comment_name\">\n     <strong> {{post.user.name}}\n  {{post.user.lastname}} </strong>\n  {{post.user.job}}\n</p> -->\n  <hr>\n\n\n</article>\n\n<!-- <input type=\"text\" placeholder=\"Ecrire un commentaire...\" class=\"comment_answer\"> -->\n\n<button [routerLink]=\"['/post-add']\">Add</button>"

/***/ }),

/***/ "./src/app/post-list/post-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/post-list/post-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#giphy {\n  max-width: 500px;\n  max-height: 300px; }\n\n.tag {\n  list-style: none;\n  text-decoration: none;\n  display: inline-block;\n  font-weight: bold;\n  color: black;\n  margin-bottom: 20px;\n  width: 50px;\n  margin-right: 30px; }\n\n.tag:hover {\n  text-decoration: none;\n  color: white;\n  background-color: black; }\n\n.carousel {\n  margin-bottom: 50px; }\n\n.comment_name {\n  font-size: 1.2rem;\n  font-weight: bold; }\n\n.comments {\n  margin-bottom: 200px; }\n\n.comment_answer {\n  margin-top: 10px;\n  background: black;\n  color: white;\n  width: 100%;\n  border: none;\n  padding: 5px 5px 5px 0; }\n\n.comment_answer::-webkit-input-placeholder {\n  color: white;\n  margin-left: 10px; }\n\n.comment_answer::-ms-input-placeholder {\n  color: white;\n  margin-left: 10px; }\n\n.comment_answer::placeholder {\n  color: white;\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1saXN0L0M6XFx3YW1wNjRcXHd3d1xcYW5ndWxhclxcY29tbXVuaXR5L3NyY1xcYXBwXFxwb3N0LWxpc3RcXHBvc3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix1QkFDRixFQUFBOztBQUNBO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUVuQjtFQUNJLG9CQUFvQixFQUFBOztBQUV4QjtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUZyQjtFQUNJLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFGckI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dpcGh5e1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4udGFne1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi50YWc6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xyXG4gIH1cclxuICAuY2Fyb3VzZWx7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG4gIC5jb21tZW50X25hbWV7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuY29tbWVudHN7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gIH1cclxuICAuY29tbWVudF9hbnN3ZXJ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDA7XHJcbiAgfVxyXG4gIC5jb21tZW50X2Fuc3dlcjo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/post-list/post-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/post-list/post-list.component.ts ***!
  \**************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_post_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/post/post.service */ "./src/app/shared/post/post.service.ts");
/* harmony import */ var _shared_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/giphy/giphy.service */ "./src/app/shared/giphy/giphy.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var PostListComponent = /** @class */ (function () {
    function PostListComponent(postService, giphyService) {
        this.postService = postService;
        this.giphyService = giphyService;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getAll()
            .subscribe(function (response) {
            console.log(response);
            _this.posts = response;
            var _loop_1 = function (post) {
                if (post.tag == null) {
                    console.log("tag null");
                }
                else {
                    _this.giphyService.get(post.tag).subscribe(function (url) { return post.giphyUrl = url; });
                }
            };
            for (var _i = 0, _a = _this.posts; _i < _a.length; _i++) {
                var post = _a[_i];
                _loop_1(post);
            }
        });
    };
    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'post-list',
            template: __webpack_require__(/*! ./post-list.component.html */ "./src/app/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.scss */ "./src/app/post-list/post-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_post_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _shared_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_2__["GiphyService"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/searchbar/searchbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center\">\n      <div class=\"searchbar\">\n          <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Rechercher...\">\n          <a href=\"#\" class=\"search_icon\"><i class=\"fas fa-search\"></i></a>\n      </div>\n  </div>\n</div>\n\n<!-- <div class=\"container h-100\">\n  <div class=\"d-flex justify-content-center h-100\">\n      <div class=\"searchbar\">\n          <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Rechercher...\">\n          <a href=\"#\" class=\"search_icon\"><i class=\"fas fa-search\"></i></a>\n      </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.scss":
/*!****************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchbar {\n  margin-top: 20px;\n  height: 60px;\n  background-color: black;\n  border-radius: 30px;\n  padding: 10px; }\n\n.search_input {\n  color: white;\n  border: 0;\n  outline: 0;\n  background: none;\n  width: 0;\n  caret-color: transparent;\n  line-height: 40px;\n  transition: width 0.4s linear; }\n\n.searchbar:hover > .search_input {\n  padding: 0 10px;\n  width: 450px;\n  caret-color: red;\n  transition: width 0.4s linear; }\n\n.searchbar:hover > .search_icon {\n  background: white;\n  color: black; }\n\n.search_icon {\n  height: 40px;\n  width: 40px;\n  float: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  color: white; }\n\n@media (max-width: 640px) {\n  /* CSS mobile ici */\n  .searchbar:hover > .search_input {\n    padding: 0 10px;\n    width: 240px;\n    caret-color: red;\n    transition: width 0.4s linear; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoYmFyL0M6XFx3YW1wNjRcXHd3d1xcYW5ndWxhclxcY29tbXVuaXR5L3NyY1xcYXBwXFxzZWFyY2hiYXJcXHNlYXJjaGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBR2I7RUFDQSxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLHdCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsNkJBQTZCLEVBQUE7O0FBRzdCO0VBQ0EsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZTtFQUNmLDZCQUE2QixFQUFBOztBQUc3QjtFQUNBLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR1o7RUFDQSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBVyxFQUFBOztBQUdYO0VBQ0ksbUJBQUE7RUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWU7SUFDZiw2QkFBNkIsRUFBQSxFQUM1QiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGJhci9zZWFyY2hiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5zZWFyY2hiYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyBcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaF9pbnB1dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBjYXJldC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaW5wdXR7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBjYXJldC1jb2xvcjpyZWQ7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoYmFyOmhvdmVyID4gLnNlYXJjaF9pY29ue1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaF9pY29ue1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgICAgLyogQ1NTIG1vYmlsZSBpY2kgKi9cclxuICAgICAgXHJcbiAgICAgICAgLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaW5wdXR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICBjYXJldC1jb2xvcjpyZWQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgbGluZWFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.ts ***!
  \**************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent() {
    }
    SearchbarComponent.prototype.ngOnInit = function () {
    };
    SearchbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'searchbar',
            template: __webpack_require__(/*! ./searchbar.component.html */ "./src/app/searchbar/searchbar.component.html"),
            styles: [__webpack_require__(/*! ./searchbar.component.scss */ "./src/app/searchbar/searchbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchbarComponent);
    return SearchbarComponent;
}());



/***/ }),

/***/ "./src/app/services/signinService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/signinService.ts ***!
  \*******************************************/
/*! exports provided: SigninService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninService", function() { return SigninService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_bean_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/bean/user */ "./src/app/shared/bean/user.ts");




var SigninService = /** @class */ (function () {
    function SigninService(http) {
        this.http = http;
        this.actionUrl = '/ano/users/';
    }
    SigninService.prototype.register = function (email, lastname, name, password, job) {
        var newUser = new _shared_bean_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        newUser.name = name;
        newUser.lastname = lastname;
        newUser.email = email;
        newUser.password = password;
        newUser.job = job;
        return this.http.post(this.actionUrl, newUser);
    };
    SigninService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SigninService);
    return SigninService;
}());



/***/ }),

/***/ "./src/app/shared/arraySortPipe/array-sort-pipe.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/arraySortPipe/array-sort-pipe.pipe.ts ***!
  \**************************************************************/
/*! exports provided: ArraySortPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArraySortPipePipe", function() { return ArraySortPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArraySortPipePipe = /** @class */ (function () {
    function ArraySortPipePipe() {
    }
    // transform(value: any, args?: any): any {
    //   return null;
    // }
    ArraySortPipePipe.prototype.transform = function (array, field) {
        if (!Array.isArray(array)) {
            return;
        }
        array.sort(function (a, b) {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    ArraySortPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'arraySortPipe',
            pure: false
        })
    ], ArraySortPipePipe);
    return ArraySortPipePipe;
}());

// transform(ary: any, fn: Function = (a,b) => a > b ? 1 : -1): any {
//   return ary.sort(fn)
// }
// }


/***/ }),

/***/ "./src/app/shared/bean/user.ts":
/*!*************************************!*\
  !*** ./src/app/shared/bean/user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/category/category.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/category/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getAll = function () {
        return this.http.get('/community/categories');
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/shared/giphy/giphy.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/giphy/giphy.service.ts ***!
  \***********************************************/
/*! exports provided: GiphyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiphyService", function() { return GiphyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var GiphyService = /** @class */ (function () {
    function GiphyService(http) {
        this.http = http;
        // Public beta key: https://github.com/Giphy/GiphyAPI#public-beta-key
        this.giphyApi = '//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&q=';
    }
    GiphyService.prototype.get = function (searchTerm) {
        var apiLink = this.giphyApi + searchTerm;
        return this.http.get(apiLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response.data.length > 0) {
                return response.data[0].images.original.url;
            }
            else {
                return 'https://media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif'; // dancing cat for 404
            }
        }));
    };
    GiphyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GiphyService);
    return GiphyService;
}());



/***/ }),

/***/ "./src/app/shared/helpers/error.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/helpers/error.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _jwt_jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../jwt/jwt.service */ "./src/app/shared/jwt/jwt.service.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(jwtService) {
        this.jwtService = jwtService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.jwtService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/helpers/jwt.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/helpers/jwt.interceptor.ts ***!
  \***************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _jwt_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../jwt/jwt.service */ "./src/app/shared/jwt/jwt.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(jwtService) {
        this.jwtService = jwtService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.jwtService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/jwt/jwt.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/jwt/jwt.service.ts ***!
  \*******************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var JwtService = /** @class */ (function () {
    function JwtService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(JwtService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    // login(email: string, password: string): Observable<any> {
    //   return this.http.post('//localhost:8080/ano/jwt', { email, password });
    // }
    JwtService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post('/ano/jwt', { email: email, password: password }, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('currentUserToken', user.token);
                localStorage.setItem('currentUserName', user.user.name);
                localStorage.setItem('currentUserLastName', user.user.lastname);
                localStorage.setItem('currentUserJob', user.user.job);
                localStorage.setItem('currentUserId', user.user.id);
                _this.currentUserSubject.next(user);
                console.log(user);
            }
            // console.log(user.json())
            return user;
        }));
    };
    JwtService.prototype.loggedIn = function () {
        return localStorage.getItem('currentUserToken');
    };
    JwtService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUserToken');
        localStorage.removeItem('currentUserName');
        localStorage.removeItem('currentUserLastName');
        localStorage.removeItem('currentUserJob');
        localStorage.removeItem('currentUserId');
        this.currentUserSubject.next(null);
    };
    JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/shared/post/post.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/post/post.service.ts ***!
  \*********************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getAll = function () {
        return this.http.get('/community/comments');
    };
    PostService.prototype.getAllByCategory = function (id) {
        return this.http.get('/community/categories/' + ("" + id) + '/comments');
    };
    PostService.prototype.get = function (id) {
        return this.http.get('/community/comments' + '/' + id);
    };
    //A
    PostService.prototype.save = function (post, idCategory) {
        var result;
        if (post['href']) { //ici il faudrait mettre post.id au lieu de href
            result = this.http.put(post.href, post);
        }
        else {
            //this.post.user.userId = localStorage.getItem('currentUserId');//undefined
            console.log("user id de ce post", localStorage.getItem('currentUserId')); //affiche l'id en question
            console.log("category id de ce post", idCategory); //affiche l'id en question
            result = this.http.post('/community/comments', post);
        }
        return result;
    };
    // save(post: any): Observable<any> {
    //   let result: Observable<Object>;
    //   if (post['href']) {//ici il faudrait mettre post.id au lieu de href
    //     result = this.http.put(post.href, post);
    //   } else {
    //     result = this.http.post('//localhost:8080/community/comments', post);
    //   }
    //   return result;
    // }
    PostService.prototype.remove = function (id) {
        return this.http.delete('/community/comments/' + id);
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\angular\community\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map