(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <!--\n  <div id=\"container\">\n    <strong>Ready to create an app?</strong>\n    <p>Start with Ionic <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n  </div>\n  -->\n\n\n      <ion-button (click)=\"createTodo()\">Add Data</ion-button>\n      <ion-list>\n        <ion-item *ngFor=\"let item of todos\">\n          <p>{{item.name}} - {{item.description}}</p>\n        </ion-item>\n      </ion-list>\n\n\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  /*\n    text-align: center;\n\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n  */\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0E7Ozs7Ozs7O0dBQUE7QUFTQTs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0FBREYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbi8qXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuKi9cbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "iO9l":
/*!********************************!*\
  !*** ./src/app/API.service.ts ***!
  \********************************/
/*! exports provided: ModelAttributeTypes, APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelAttributeTypes", function() { return ModelAttributeTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/api-graphql */ "Vh5H");

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.


var ModelAttributeTypes;
(function (ModelAttributeTypes) {
    ModelAttributeTypes["binary"] = "binary";
    ModelAttributeTypes["binarySet"] = "binarySet";
    ModelAttributeTypes["bool"] = "bool";
    ModelAttributeTypes["list"] = "list";
    ModelAttributeTypes["map"] = "map";
    ModelAttributeTypes["number"] = "number";
    ModelAttributeTypes["numberSet"] = "numberSet";
    ModelAttributeTypes["string"] = "string";
    ModelAttributeTypes["stringSet"] = "stringSet";
    ModelAttributeTypes["_null"] = "_null";
})(ModelAttributeTypes || (ModelAttributeTypes = {}));
var APIService = /** @class */ (function () {
    function APIService() {
        this.OnCreateTodoListener = _aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnCreateTodo {\n        onCreateTodo {\n          __typename\n          id\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }"));
        this.OnUpdateTodoListener = _aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnUpdateTodo {\n        onUpdateTodo {\n          __typename\n          id\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }"));
        this.OnDeleteTodoListener = _aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnDeleteTodo {\n        onDeleteTodo {\n          __typename\n          id\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }"));
    }
    APIService.prototype.CreateTodo = function (input, condition) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var statement, gqlAPIServiceArguments, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statement = "mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {\n        createTodo(input: $input, condition: $condition) {\n          __typename\n          id\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }";
                        gqlAPIServiceArguments = {
                            input: input
                        };
                        if (condition) {
                            gqlAPIServiceArguments.condition = condition;
                        }
                        return [4 /*yield*/, _aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments))];
                    case 1:
                        response = (_a.sent());
                        return [2 /*return*/, response.data.createTodo];
                }
            });
        });
    };
    APIService.prototype.UpdateTodo = function (input, condition) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var statement, gqlAPIServiceArguments, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statement = "mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModelTodoConditionInput) {\n        updateTodo(input: $input, condition: $condition) {\n          __typename\n          id\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }";
                        gqlAPIServiceArguments = {
                            input: input
                        };
                        if (condition) {
                            gqlAPIServiceArguments.condition = condition;
                        }
                        return [4 /*yield*/, _aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments))];
                    case 1:
                        response = (_a.sent());
                        return [2 /*return*/, response.data.updateTodo];
                }
            });
        });
    };
    APIService.prototype.DeleteTodo = function (input, condition) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var statement, gqlAPIServiceArguments, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statement = "mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {\n        deleteTodo(input: $input, condition: $condition) {\n          __typename\n          id\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }";
                        gqlAPIServiceArguments = {
                            input: input
                        };
                        if (condition) {
                            gqlAPIServiceArguments.condition = condition;
                        }
                        return [4 /*yield*/, _aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments))];
                    case 1:
                        response = (_a.sent());
                        return [2 /*return*/, response.data.deleteTodo];
                }
            });
        });
    };
    APIService.prototype.GetTodo = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var statement, gqlAPIServiceArguments, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statement = "query GetTodo($id: ID!) {\n        getTodo(id: $id) {\n          __typename\n          id\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }";
                        gqlAPIServiceArguments = {
                            id: id
                        };
                        return [4 /*yield*/, _aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments))];
                    case 1:
                        response = (_a.sent());
                        return [2 /*return*/, response.data.getTodo];
                }
            });
        });
    };
    APIService.prototype.ListTodos = function (filter, limit, nextToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var statement, gqlAPIServiceArguments, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statement = "query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {\n        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {\n          __typename\n          items {\n            __typename\n            id\n            name\n            description\n            createdAt\n            updatedAt\n          }\n          nextToken\n        }\n      }";
                        gqlAPIServiceArguments = {};
                        if (filter) {
                            gqlAPIServiceArguments.filter = filter;
                        }
                        if (limit) {
                            gqlAPIServiceArguments.limit = limit;
                        }
                        if (nextToken) {
                            gqlAPIServiceArguments.nextToken = nextToken;
                        }
                        return [4 /*yield*/, _aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api_graphql__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments))];
                    case 1:
                        response = (_a.sent());
                        return [2 /*return*/, response.data.listTodos];
                }
            });
        });
    };
    APIService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], APIService);
    return APIService;
}());



/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _API_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../API.service */ "iO9l");





var HomePage = /** @class */ (function () {
    function HomePage(apiService) {
        this.apiService = apiService;
        this.initializeApp();
    }
    HomePage.prototype.createTodo = function () {
        this.apiService.CreateTodo({
            name: 'Jo',
            description: 'New Data'
        });
    };
    HomePage.prototype.initializeApp = function () {
        var _this = this;
        this.apiService.ListTodos().then(function (evt) {
            _this.todos = evt.items;
        });
        this.apiService.OnCreateTodoListener.subscribe(function (evt) {
            var data = evt.value.data.onCreateTodo;
            _this.todos = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(_this.todos, [data]);
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _API_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] }
    ]; };
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map