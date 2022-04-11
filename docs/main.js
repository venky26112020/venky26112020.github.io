(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! B:\PWA\mypwa.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "1BFo":
/*!******************************************************!*\
  !*** ./src/app/name-format/name-format.component.ts ***!
  \******************************************************/
/*! exports provided: NameFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameFormatComponent", function() { return NameFormatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NameFormatComponent {
    constructor() { }
    ngOnInit() {
        //this.allAlphabetsInStar();
        this.createElementFunction();
    }
    // JavaScript implementation to print the
    // pattern of alphabets A to Z using *
    // Below height and width variable can be used
    // to create a user-defined sized alphabet's pattern
    allAlphabetsInStar() {
        // Number of lines for the alphabet's pattern
        let height = 5;
        // Number of character width in each line
        let width = (2 * height) - 1;
        // Function to find the absolute value
        // of a number D
        const abs = (d) => {
            return d < 0 ? -1 * d : d;
        };
        // Function to print the pattern of 'A'
        const printA = () => {
            let AStart = "";
            let n = Math.floor(width / 2), i, j;
            for (i = 0; i < height; i++) {
                for (j = 0; j <= width; j++) {
                    if (j == n || j == (width - n)
                        || (i == Math.floor(height / 2) && j > n
                            && j < (width - n)))
                        AStart += "*";
                    else
                        AStart += "&nbsp;&nbsp;";
                }
                AStart += `<br/>`;
                n--;
            }
            return AStart;
        };
        // Function to print the pattern of 'B'
        const printB = () => {
            let BStar = "";
            let i, j, half = Math.floor(height / 2);
            for (i = 0; i < height; i++) {
                BStar += "*";
                for (j = 0; j < width; j++) {
                    if ((i == 0 || i == height - 1 || i == half)
                        && j < (width - 2))
                        BStar += "*";
                    else if (j == (width - 2)
                        && !(i == 0 || i == height - 1
                            || i == half))
                        BStar += "*";
                    else
                        BStar += "&nbsp;&nbsp;";
                }
                BStar += `<br/>`;
            }
            return BStar;
        };
        // Function to print the pattern of 'C'
        const printC = () => {
            let i, j, CStar = "";
            for (i = 0; i < height; i++) {
                CStar += "*";
                for (j = 0; j < (height - 1); j++) {
                    if (i == 0 || i == height - 1)
                        CStar += "*";
                    else
                        continue;
                }
                CStar += `<br/>`;
            }
            return CStar;
        };
        // Function to print the pattern of 'D'
        const printD = () => {
            let i, j, DStar = "";
            for (i = 0; i < height; i++) {
                DStar += "*";
                for (j = 0; j < height; j++) {
                    if ((i == 0 || i == height - 1)
                        && j < height - 1)
                        DStar += "*";
                    else if (j == height - 1 && i != 0
                        && i != height - 1)
                        DStar += "*";
                    else
                        DStar += "&nbsp;&nbsp;";
                }
                DStar += `<br/>`;
            }
            return DStar;
        };
        // Function to print the pattern of 'E'
        const printE = () => {
            let i, j, EStar = "";
            for (i = 0; i < height; i++) {
                EStar += "*";
                for (j = 0; j < height; j++) {
                    if ((i == 0 || i == height - 1)
                        || (i == Math.floor(height / 2)
                            && j <= Math.floor(height / 2)))
                        EStar += "*";
                    else
                        continue;
                }
                EStar += `<br/>`;
            }
            return EStar;
        };
        // Function to print the pattern of 'F'
        const printF = () => {
            let i, j, FStar = "";
            for (i = 0; i < height; i++) {
                FStar += "*";
                for (j = 0; j < height; j++) {
                    if ((i == 0) || (i == Math.floor(height / 2)
                        && j <= Math.floor(height / 2)))
                        FStar += "*";
                    else
                        continue;
                }
                FStar += `<br/>`;
            }
            return FStar;
        };
        // Function to print the pattern of 'G'
        const printG = () => {
            let i, j, GStar = "";
            width--;
            for (i = 0; i < height; i++) {
                for (j = 0; j < width; j++) {
                    if ((i == 0 || i == height - 1)
                        && (j == 0 || j == width - 1))
                        GStar += "&nbsp;&nbsp;";
                    else if (j == 0)
                        GStar += "*";
                    else if (i == 0 && j <= height)
                        GStar += "*";
                    else if (i == Math.floor(height / 2)
                        && j > Math.floor(height / 2))
                        GStar += "*";
                    else if (i > Math.floor(height / 2)
                        && j == width - 1)
                        GStar += "*";
                    else if (i == height - 1
                        && j < width)
                        GStar += "*";
                    else
                        GStar += "&nbsp;&nbsp;";
                }
                GStar += `<br/>`;
            }
            return GStar;
        };
        // Function to print the pattern of 'H'
        const printH = () => {
            let i, j, HStar = "";
            for (i = 0; i < height; i++) {
                HStar += "*";
                for (j = 0; j < height; j++) {
                    if ((j == height - 1)
                        || (i == Math.floor(height / 2)))
                        HStar += "*";
                    else
                        HStar += "&nbsp;&nbsp;";
                }
                HStar += `<br/>`;
            }
            return HStar;
        };
        // Function to print the pattern of 'I'
        const printI = () => {
            let i, j, IStar = "";
            for (i = 0; i < height; i++) {
                for (j = 0; j < height; j++) {
                    if (i == 0 || i == height - 1)
                        IStar += "*";
                    else if (j == Math.floor(height / 2))
                        IStar += "*";
                    else
                        IStar += "&nbsp;&nbsp;";
                }
                IStar += `<br/>`;
            }
            return IStar;
        };
        // Function to print the pattern of 'J'
        const printJ = () => {
            let i, j, JStar = "";
            for (i = 0; i < height; i++) {
                for (j = 0; j < height; j++) {
                    if (i == height - 1 && (j > 0
                        && j < height - 1))
                        JStar += "*";
                    else if ((j == height - 1
                        && i != height - 1)
                        || (i > Math.floor(height / 2) - 1
                            && j == 0 && i != height - 1))
                        JStar += "*";
                    else
                        JStar += "&nbsp;&nbsp;";
                }
                JStar += `<br/>`;
            }
            return JStar;
        };
        // Function to print the pattern of 'K'
        const printK = () => {
            let i, j, half = Math.floor(height / 2), dummy = half, KStar = "";
            for (i = 0; i < height; i++) {
                KStar += "*";
                for (j = 0; j <= half; j++) {
                    if (j == abs(dummy))
                        KStar += "*";
                    else
                        KStar += "&nbsp;&nbsp;";
                }
                KStar += `<br/>`;
                dummy--;
            }
            return KStar;
        };
        // Function to print the pattern of 'L'
        const printL = () => {
            let i, j, LStar = "";
            for (i = 0; i < height; i++) {
                LStar += "*";
                for (j = 0; j <= height; j++) {
                    if (i == height - 1)
                        LStar += "*";
                    else
                        LStar += "&nbsp;&nbsp;";
                }
                LStar += `<br/>`;
            }
            return LStar;
        };
        // Function to print the pattern of 'M'
        const printM = () => {
            let i, j, counter = 0, MStar = "";
            for (i = 0; i < height; i++) {
                MStar += "*";
                for (j = 0; j <= height; j++) {
                    if (j == height)
                        MStar += "*";
                    else if (j == counter
                        || j == height - counter - 1)
                        MStar += "*";
                    else
                        MStar += "&nbsp;&nbsp;";
                }
                if (counter == Math.floor(height / 2)) {
                    counter = -99999;
                }
                else
                    counter++;
                MStar += `<br/>`;
            }
            return MStar;
        };
        // Function to print the pattern of 'N'
        const printN = () => {
            let i, j, counter = 0, NStar = "";
            for (i = 0; i < height; i++) {
                NStar += "*";
                for (j = 0; j <= height; j++) {
                    if (j == height)
                        NStar += "*";
                    else if (j == counter)
                        NStar += "*";
                    else
                        NStar += "&nbsp;&nbsp;";
                }
                counter++;
                NStar += `<br/>`;
            }
            return NStar;
        };
        // Function to print the pattern of 'O'
        const printO = () => {
            let i, j, space = Math.floor(height / 3), OStar = "";
            let width = Math.floor(height / 2) + Math.floor(height / 5) + space + space;
            for (i = 0; i < height; i++) {
                for (j = 0; j <= width; j++) {
                    if (j == width - abs(space)
                        || j == abs(space))
                        OStar += "*";
                    else if ((i == 0
                        || i == height - 1)
                        && j > abs(space)
                        && j < width - abs(space))
                        OStar += "*";
                    else
                        OStar += "&nbsp;&nbsp;";
                }
                if (space != 0
                    && i < Math.floor(height / 2)) {
                    space--;
                }
                else if (i >= (Math.floor(height / 2) + Math.floor(height / 5)))
                    space--;
                OStar += `<br/>`;
            }
            return OStar;
        };
        // Function to print the pattern of 'P'
        const printP = () => {
            let i, j, PStar = "";
            for (i = 0; i < height; i++) {
                PStar += "*";
                for (j = 0; j < height; j++) {
                    if ((i == 0 || i == Math.floor(height / 2))
                        && j < height - 1)
                        PStar += "*";
                    else if (i < Math.floor(height / 2)
                        && j == height - 1 && i != 0)
                        PStar += "*";
                    else
                        PStar += "&nbsp;&nbsp;";
                }
                PStar += `<br/>`;
            }
            return PStar;
        };
        // Function to print the pattern of 'Q'
        const printQ = () => {
            let QStar = printO();
            let i, j, d = height;
            for (i = 0; i < Math.floor(height / 2); i++) {
                for (j = 0; j <= d; j++) {
                    if (j == d)
                        QStar += "*";
                    else
                        QStar += "&nbsp;&nbsp;";
                }
                QStar += `<br/>`;
                d++;
            }
            return QStar;
        };
        // Function to print the pattern of 'R'
        const printR = () => {
            let i, j, half = Math.floor(height / 2), RStar = "";
            for (i = 0; i < height; i++) {
                RStar += "*";
                for (j = 0; j < width; j++) {
                    if ((i == 0 || i == half)
                        && j < (width - 2))
                        RStar += "*";
                    else if (j == (width - 2)
                        && !(i == 0 || i == half))
                        RStar += "*";
                    else
                        RStar += "&nbsp;&nbsp;";
                }
                RStar += `<br/>`;
            }
            return RStar;
        };
        // Function to print the pattern of 'S'
        const printS = () => {
            let i, j, SStar = "";
            for (i = 0; i < height; i++) {
                for (j = 0; j < height; j++) {
                    if ((i == 0 || i == Math.floor(height / 2)
                        || i == height - 1))
                        SStar += "*";
                    else if (i < Math.floor(height / 2)
                        && j == 0)
                        SStar += "*";
                    else if (i > Math.floor(height / 2)
                        && j == height - 1)
                        SStar += "*";
                    else
                        SStar += "&nbsp;&nbsp;";
                }
                SStar += `<br/>`;
            }
            return SStar;
        };
        // Function to print the pattern of 'T'
        const printT = () => {
            let i, j, TStar = "";
            for (i = 0; i < height; i++) {
                for (j = 0; j < height; j++) {
                    if (i == 0)
                        TStar += "*";
                    else if (j == Math.floor(height / 2))
                        TStar += "*";
                    else
                        TStar += "&nbsp;&nbsp;";
                }
                TStar += `<br/>`;
            }
            return TStar;
        };
        // Function to print the pattern of 'U'
        const printU = () => {
            let i, j, UStar = "";
            for (i = 0; i < height; i++) {
                if (i != 0 && i != height - 1)
                    UStar += "*";
                else
                    UStar += "&nbsp;&nbsp;";
                for (j = 0; j < height; j++) {
                    if (((i == height - 1)
                        && j >= 0
                        && j < height - 1))
                        UStar += "*";
                    else if (j == height - 1 && i != 0
                        && i != height - 1)
                        UStar += "*";
                    else
                        UStar += "&nbsp;&nbsp;";
                }
                UStar += `<br/>`;
            }
            return UStar;
        };
        // Function to print the pattern of 'V'
        const printV = () => {
            let i, j, counter = 0, VStar = "";
            for (i = 0; i < height; i++) {
                for (j = 0; j <= width; j++) {
                    if (j == counter
                        || j == width - counter - 1)
                        VStar += "*";
                    else
                        VStar += "&nbsp;&nbsp;";
                }
                counter++;
                VStar += `<br/>`;
            }
            return VStar;
        };
        // Function to print the pattern of 'W'
        const printW = () => {
            let i, j, counter = Math.floor(height / 2), WStar = "";
            for (i = 0; i < height; i++) {
                WStar += "*";
                for (j = 0; j <= height; j++) {
                    if (j == height)
                        WStar += "*";
                    else if ((i >= Math.floor(height / 2))
                        && (j == counter
                            || j == height - counter - 1))
                        WStar += "*";
                    else
                        WStar += "&nbsp;&nbsp;";
                }
                if (i >= Math.floor(height / 2)) {
                    counter++;
                }
                WStar += `<br/>`;
            }
            return WStar;
        };
        // Function to print the pattern of 'X'
        const printX = () => {
            let i, j, counter = 0, XStar = "";
            for (i = 0; i <= height; i++) {
                for (j = 0; j <= height; j++) {
                    if (j == counter
                        || j == height - counter)
                        XStar += "*";
                    else
                        XStar += "&nbsp;&nbsp;";
                }
                counter++;
                XStar += `<br/>`;
            }
            return XStar;
        };
        // Function to print the pattern of 'Y'
        const printY = () => {
            let i, j, counter = 0, YStar = "";
            for (i = 0; i < height; i++) {
                for (j = 0; j <= height; j++) {
                    if (j == counter
                        || j == height - counter
                            && i <= Math.floor(height / 2))
                        YStar += "*";
                    else
                        YStar += "&nbsp;&nbsp;";
                }
                YStar += `<br/>`;
                if (i < Math.floor(height / 2))
                    counter++;
            }
            return YStar;
        };
        // Function to print the pattern of 'Z'
        const printZ = () => {
            let i, j, counter = height - 1, ZStar = "";
            for (i = 0; i < height; i++) {
                for (j = 0; j < height; j++) {
                    if (i == 0 || i == height - 1
                        || j == counter)
                        ZStar += "*";
                    else
                        ZStar += "&nbsp;&nbsp;";
                }
                counter--;
                ZStar += `<br/>`;
            }
            return ZStar;
        };
        // Function print the pattern of the
        // alphabets from A to Z
        const printPattern = (character) => {
            switch (character) {
                case 'A':
                    return printA();
                case 'B':
                    return printB();
                case 'C':
                    return printC();
                case 'D':
                    return printD();
                case 'E':
                    return printE();
                case 'F':
                    return printF();
                case 'G':
                    return printG();
                case 'H':
                    return printH();
                case 'I':
                    return printI();
                case 'J':
                    return printJ();
                case 'K':
                    return printK();
                case 'L':
                    return printL();
                case 'M':
                    return printM();
                case 'N':
                    return printN();
                case 'O':
                    return printO();
                case 'P':
                    return printP();
                case 'Q':
                    return printQ();
                case 'R':
                    return printR();
                case 'S':
                    return printS();
                case 'T':
                    return printT();
                case 'U':
                    return printU();
                case 'V':
                    return printV();
                case 'W':
                    return printW();
                case 'X':
                    return printX();
                case 'Y':
                    return printY();
                case 'Z':
                    return printZ();
                default:
                    return "";
            }
        };
        return printPattern;
    }
    createSpanElement(div, innerHTML = "", color = "red") {
        let content = document.createElement("span");
        content.style.color = color;
        content.style.margin = '10px';
        content.innerHTML = innerHTML;
        div && div.appendChild(content);
    }
    createElementFunction() {
        let allChar = "WISH YOU MANY MORE HAPPY RETURN OF THE DAY ";
        let allColors = ['red', 'green', 'blue', 'black', 'magenta', "orange", 'gold', 'rust', 'purple'];
        let colorId = 0;
        let i, subDiv = document.createElement("div");
        subDiv.style.display = "flex";
        subDiv.style.justifyContent = "center";
        let container = document.getElementById("container");
        for (i = 0; i < allChar.length; i++) {
            if (allChar[i] == ' ') {
                container && container.appendChild(subDiv);
                subDiv = document.createElement("div");
                subDiv.style.display = "flex";
                subDiv.style.justifyContent = "center";
                colorId += 1;
            }
            else {
                this.createSpanElement(subDiv, this.allAlphabetsInStar()(allChar[i]), allColors[colorId]);
            }
        }
    }
}
NameFormatComponent.ɵfac = function NameFormatComponent_Factory(t) { return new (t || NameFormatComponent)(); };
NameFormatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NameFormatComponent, selectors: [["app-name-format"]], decls: 1, vars: 0, consts: [["id", "container", 1, "alignLetters"]], template: function NameFormatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".alignLetters[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbWUtZm9ybWF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEIiLCJmaWxlIjoibmFtZS1mb3JtYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGlnbkxldHRlcnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NameFormatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-name-format',
                templateUrl: './name-format.component.html',
                styleUrls: ['./name-format.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'PWALift';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _name_format_name_format_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./name-format/name-format.component */ "1BFo");
/* harmony import */ var _quations_quations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quations/quations.component */ "lW6v");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _name_format_name_format_component__WEBPACK_IMPORTED_MODULE_6__["NameFormatComponent"],
        _quations_quations_component__WEBPACK_IMPORTED_MODULE_7__["QuationsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _name_format_name_format_component__WEBPACK_IMPORTED_MODULE_6__["NameFormatComponent"],
                    _quations_quations_component__WEBPACK_IMPORTED_MODULE_7__["QuationsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
                        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production,
                        // Register the ServiceWorker as soon as the app is stable
                        // or after 30 seconds (whichever comes first).
                        registrationStrategy: 'registerWhenStable:30000'
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "lW6v":
/*!************************************************!*\
  !*** ./src/app/quations/quations.component.ts ***!
  \************************************************/
/*! exports provided: QuationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuationsComponent", function() { return QuationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function QuationsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quote_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", quote_r1 == null ? null : quote_r1.text, "--", quote_r1 == null ? null : quote_r1.author, " ");
} }
class QuationsComponent {
    constructor() {
        this.allquotes = [];
    }
    ngOnInit() {
        this.getAllQuations();
    }
    getAllQuations() {
        fetch("https://type.fit/api/quotes")
            .then(function (response) {
            return response.json();
        })
            .then((data) => {
            console.log(data);
            this.allquotes = data;
        });
    }
}
QuationsComponent.ɵfac = function QuationsComponent_Factory(t) { return new (t || QuationsComponent)(); };
QuationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuationsComponent, selectors: [["app-quations"]], decls: 1, vars: 1, consts: [["class", "rcorners1", 4, "ngFor", "ngForOf"], [1, "rcorners1"]], template: function QuationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuationsComponent_div_0_Template, 2, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allquotes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".rcorners1[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    margin: 7px;\r\n    padding: 10px;\r\n    border-radius: 50px;\r\n    \r\n    background: #92e56f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJxdWF0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJjb3JuZXJzMSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIC8qIGJvcmRlci1jb2xvcjogcmVkOyAqL1xyXG4gICAgYmFja2dyb3VuZDogIzkyZTU2ZjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quations',
                templateUrl: './quations.component.html',
                styleUrls: ['./quations.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _name_format_name_format_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./name-format/name-format.component */ "1BFo");
/* harmony import */ var _quations_quations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quations/quations.component */ "lW6v");






const routes = [
    {
        path: "",
        redirectTo: "wishes",
        pathMatch: "full",
    },
    {
        path: "quatations",
        component: _quations_quations_component__WEBPACK_IMPORTED_MODULE_3__["QuationsComponent"],
    },
    {
        path: "wishes",
        component: _name_format_name_format_component__WEBPACK_IMPORTED_MODULE_2__["NameFormatComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map