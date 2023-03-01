"use strict";
(self["webpackChunkangular_course"] = self["webpackChunkangular_course"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ 9698);
/* harmony import */ var _db_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db-data */ 6764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _courses_services_courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses/services/courses.service */ 2342);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _courses_course_card_course_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses/course-card/course-card.component */ 5126);
/* harmony import */ var _courses_course_image_course_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./courses/course-image/course-image.component */ 8360);







function AppComponent_div_8_course_card_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "course-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("courseChanged", function AppComponent_div_8_course_card_3_Template_course_card_courseChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.save($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "course-image", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("course", course_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", course_r2.iconUrl);
  }
}
function AppComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_8_course_card_3_Template, 2, 2, "course-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.courses);
  }
}
// provider manually constructed
//implement a provider factory function
// function coursesServiceProvider(http:HttpClient): CoursesService{
//   return new CoursesService(http);
// }
//
// // Create an injection token (unique name for the courses service)
// export  const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');
//
class AppComponent {
  // @ts-ignore
  constructor(coursesService, config) {
    this.coursesService = coursesService;
    this.config = config;
    //courses$: Observable<Course[]>
    this.courses = _db_data__WEBPACK_IMPORTED_MODULE_1__.COURSES;
    //courses = COURSES;
    this.coursesTotal = this.courses.length;
  }
  ngOnInit() {
    // const params = new HttpParams()
    //   .set("page", "1")
    //   .set("pageSize", "10");
    //
    // this.http.get('/api/courses', {params}).subscribe(
    //   courses => this.courses= courses
    // );
    this.refreshCourses();
    // console.log(this.coursesService)
  }
  // refreshCourses(){
  //   const params = new HttpParams()
  //     .set("page", "1")
  //     .set("pageSize", "10");
  //
  //   this.http.get('/api/courses', {params}).subscribe(courses => this.courses=courses)
  // }
  // refreshCourses(){
  //   const params = new HttpParams()
  //     .set("page", "1")
  //     .set("pageSize", "10");
  //
  //   this.courses$ = this.http.get<Course[]>('/api/courses', {params});
  // }
  refreshCourses() {
    //this.courses$ = this.coursesService.loadCourses();
    // this.coursesService.loadCourses()
    //   .subscribe(courses => this.courses = courses)
  }
  save(course) {
    this.coursesService.saveCourse(course).subscribe(() => console.log('Course Saved!'));
  }
  onEditCourse() {
    // const course= this.courses[0];
    // const newCourse:any = {...course};
    //
    // newCourse.description = 'New Value!';
    //
    // this.courses[0] = newCourse;
    // this.courses = [undefined];
    // const course = this.courses[0];
    //
    // const newCourse = {
    //   ...course,
    //   description: 'ngOnChanges'
    // };
    //
    // this.courses[0] = newCourse;
    this.courses[1].category = 'ADVANCED';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_courses_services_courses_service__WEBPACK_IMPORTED_MODULE_2__.CoursesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG_TOKEN));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 9,
    vars: 3,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_208181907611548740$$SRC_APP_APP_COMPONENT_TS_1 = goog.getMsg("Edit course");
        i18n_0 = MSG_EXTERNAL_208181907611548740$$SRC_APP_APP_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟7a0365e79a11224ac02c4287dbead705ca436a00␟208181907611548740:Edit course`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_143270874109576332$$SRC_APP_APP_COMPONENT_TS_4 = goog.getMsg("{VAR_PLURAL, plural, =0 {No courses available.} =1 {One course is available} other {A total of {INTERPOLATION} courses are available.}}");
        i18n_3 = MSG_EXTERNAL_143270874109576332$$SRC_APP_APP_COMPONENT_TS_4;
      } else {
        i18n_3 = $localize`:␟a427390999e5c6dba858243a317cc8624f6af551␟143270874109576332:{VAR_PLURAL, plural, =0 {No courses available.} =1 {One course is available} other {A total of {INTERPOLATION} courses are available.}}`;
      }
      i18n_3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nPostprocess"](i18n_3, {
        "VAR_PLURAL": "\uFFFD0\uFFFD",
        "INTERPOLATION": "\uFFFD1\uFFFD"
      });
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1257781360804561258$$SRC_APP_APP_COMPONENT_TS_5 = goog.getMsg("{$icu} ", {
          "icu": i18n_3
        }, {
          original_code: {
            "icu": "{coursesTotal, plural,=0 {No courses available.}=1 {One course is available}other {A total of {{coursesTotal}} courses are available.}}"
          }
        });
        i18n_2 = MSG_EXTERNAL_1257781360804561258$$SRC_APP_APP_COMPONENT_TS_5;
      } else {
        i18n_2 = $localize`:␟bff86f68bec76ac076b8ab5561826e0cdb58a27c␟1257781360804561258:${i18n_3}:ICU: `;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Greet the user at the beginning of the course
         * @meaning welcome message
         */
        const MSG_EXTERNAL_3086763205939703216$$SRC_APP_APP_COMPONENT_TS__7 = goog.getMsg("Welcome to Angular Core Deep Dive Course");
        i18n_6 = MSG_EXTERNAL_3086763205939703216$$SRC_APP_APP_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:welcome message|Greet the user at the beginning of the course␟09e49130ef5784465bf11390ac428c7e3ca307cb␟3086763205939703216:Welcome to Angular Core Deep Dive Course`;
      }
      return [[1, "top-menu"], ["alt", "Course Image", "src", "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png", 1, "logo"], [1, "demo"], [3, "click"], i18n_0, i18n_2, ["class", "courses", 4, "ngIf"], [1, "courses"], i18n_6, ["type", "Beginner", 3, "course", "courseChanged", 4, "ngFor", "ngForOf"], ["type", "Beginner", 3, "course", "courseChanged"], [3, "src"]];
    },
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div")(3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() {
          return ctx.onEditCourse();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AppComponent_div_8_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nExp"](ctx.coursesTotal)(ctx.coursesTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nApply"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.courses);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _courses_course_card_course_card_component__WEBPACK_IMPORTED_MODULE_3__.CourseCardComponent, _courses_course_image_course_image_component__WEBPACK_IMPORTED_MODULE_4__.CourseImageComponent],
    styles: [".top-menu[_ngcontent-%COMP%] {\r\n    background: #1976d2;\r\n    padding: 2px 15px;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  max-height: 55px;\r\n}\r\n\r\n\r\n.courses[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n    margin: 50px auto;\r\n}\n/*# sourceURL=webpack://./src/app/app.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50b3AtbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTk3NmQyO1xyXG4gICAgcGFkZGluZzogMnB4IDE1cHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBtYXgtaGVpZ2h0OiA1NXB4O1xyXG59XHJcblxyXG5cclxuLmNvdXJzZXMge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _courses_courses_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses/courses.module */ 3170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _courses_courses_module__WEBPACK_IMPORTED_MODULE_1__.CoursesModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _courses_courses_module__WEBPACK_IMPORTED_MODULE_1__.CoursesModule]
  });
})();

/***/ }),

/***/ 9698:
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_CONFIG": () => (/* binding */ APP_CONFIG),
/* harmony export */   "CONFIG_TOKEN": () => (/* binding */ CONFIG_TOKEN)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const APP_CONFIG = {
  apiUrl: 'http://localhost:9000',
  courseCacheSize: 10
};
const CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CONFIG_TOKEN', {
  providedIn: 'root',
  factory: () => APP_CONFIG
});

/***/ }),

/***/ 5126:
/*!**************************************************************!*\
  !*** ./src/app/courses/course-card/course-card.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseCardComponent": () => (/* binding */ CourseCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_courses_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/courses.service */ 2342);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function CourseCardComponent_div_0_ng_content_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 0, ["*ngIf", "course.iconUrl"]);
  }
}
function CourseCardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1, 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CourseCardComponent_div_0_ng_content_4_Template, 1, 0, "ng-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Edit Title: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CourseCardComponent_div_0_Template_input_keyup_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onTitleChanged(_r3.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](10, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseCardComponent_div_0_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onSaveClicked(_r3.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Save Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.cardIndex || "" + " " + ctx_r0.course.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.course.iconUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.course.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](ctx_r0.course.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](10);
  }
}
const _c4 = [[["course-image"]]];
const _c5 = ["course-image"];
class CourseCardComponent {
  constructor(coursesService, type) {
    this.coursesService = coursesService;
    this.type = type;
    this.courseEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    //console.log(type)
    console.log("constructor", this.course);
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngDoCheck() {
    console.log("ngDoCheck");
  }
  ngOnChanges(changes) {
    console.log("ngOnChanges", changes);
  }
  ngOnInit() {
    console.log("ngOnInit", this.course);
    //console.log("courseService course card", this.coursesService)
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
  onSaveClicked(description) {
    this.courseEmitter.emit({
      ...this.course,
      description
    });
  }
  onTitleChanged(newTitle) {
    this.course.description = newTitle;
  }
  static #_ = this.ɵfac = function CourseCardComponent_Factory(t) {
    return new (t || CourseCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_courses_service__WEBPACK_IMPORTED_MODULE_0__.CoursesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('type'));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CourseCardComponent,
    selectors: [["course-card"]],
    inputs: {
      course: "course",
      cardIndex: "cardIndex"
    },
    outputs: {
      courseEmitter: "courseChanged"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c5,
    decls: 1,
    vars: 1,
    consts: function () {
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7666592539534630094$$SRC_APP_COURSES_COURSE_CARD_COURSE_CARD_COMPONENT_TS__2 = goog.getMsg("{VAR_SELECT, select, BEGINNER {Beginner} INTERMEDIATE {Intermediate} ADVANCED {Advanced}}");
        i18n_1 = MSG_EXTERNAL_7666592539534630094$$SRC_APP_COURSES_COURSE_CARD_COURSE_CARD_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟aa6391506f5181e42027cff69f8e0f4b06979caf␟7666592539534630094:{VAR_SELECT, select, BEGINNER {Beginner} INTERMEDIATE {Intermediate} ADVANCED {Advanced}}`;
      }
      i18n_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nPostprocess"](i18n_1, {
        "VAR_SELECT": "\uFFFD0\uFFFD"
      });
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1057207841968954812$$SRC_APP_COURSES_COURSE_CARD_COURSE_CARD_COMPONENT_TS__3 = goog.getMsg("{$startTagDiv} {$icu} {$closeTagDiv}", {
          "startTagDiv": "\uFFFD#11\uFFFD",
          "closeTagDiv": "\uFFFD/#11\uFFFD",
          "icu": i18n_1
        }, {
          original_code: {
            "startTagDiv": "<div class=\"category\">",
            "closeTagDiv": "</div>",
            "icu": "{\r\n        course.category,\r\n        select,\r\n        BEGINNER {Beginner}\r\n        INTERMEDIATE {Intermediate}\r\n        ADVANCED {Advanced}\r\n      }"
          }
        });
        i18n_0 = MSG_EXTERNAL_1057207841968954812$$SRC_APP_COURSES_COURSE_CARD_COURSE_CARD_COMPONENT_TS__3;
      } else {
        i18n_0 = $localize`:␟2318a05c201de9dd61b3ee1c3c6e369730097c6d␟1057207841968954812:${"\uFFFD#11\uFFFD"}:START_TAG_DIV: ${i18n_1}:ICU@@4587612384756081379: ${"\uFFFD/#11\uFFFD"}:CLOSE_TAG_DIV:`;
      }
      return [["class", "course-card", 4, "ngIf"], [1, "course-card"], ["container", ""], [1, "course-title"], [4, "ngIf"], [1, "course-description"], [3, "value", "keyup"], ["courseTitle", ""], [1, "course-category"], i18n_0, [1, "category"], [3, "click"]];
    },
    template: function CourseCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CourseCardComponent_div_0_Template, 14, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.course);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.is-first[_nghost-%COMP%] {\r\n  border-top: 2px solid grey;\r\n  padding-top: 20px;\r\n}\r\n\r\n.is-last[_nghost-%COMP%] {\r\n  border-bottom: 2px solid grey;\r\n  padding-top: 20px;\r\n}\r\n\r\n.is-even[_nghost-%COMP%] {\r\n  background: lightgray;\r\n}\r\n\r\n.is-odd[_nghost-%COMP%] {\r\n  background: lightcyan;\r\n}\r\n\r\n.salmon-theme[_nghost-%COMP%]   .course-card[_ngcontent-%COMP%], .salmon-theme   [_nghost-%COMP%]   .course-card[_ngcontent-%COMP%] {\r\n  background: lightsalmon;\r\n}\r\n\r\n.course-card[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n  padding: 20px 0;\r\n  box-shadow: 0 1px 16px 0 rgba(0, 0, 0, .2), 0 2px 8px 0 rgba(0, 0, 0, .14), 0 4px 8px -1px rgba(0, 0, 0, .12);\r\n}\r\n\r\n.course-card[_ngcontent-%COMP%]   .course-title[_ngcontent-%COMP%] {\r\n  font-size: 27px;\r\n  font-weight: bold;\r\n}\r\n\r\n.course-card[_ngcontent-%COMP%]   .course-description[_ngcontent-%COMP%] {\r\n  max-width: 360px;\r\n  margin: 0 auto;\r\n  margin-top: 15px;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.course-card[_ngcontent-%COMP%]   .course-description[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\n.course-card[_ngcontent-%COMP%]   .beginner[_ngcontent-%COMP%] {\r\n  background: lightsalmon;\r\n}\n/*# sourceURL=webpack://./src/app/courses/course-card/course-card.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jb3Vyc2UtY2FyZC9jb3Vyc2UtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw2R0FBNkc7QUFDL0c7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG46aG9zdC5pcy1maXJzdCB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXk7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbjpob3N0LmlzLWxhc3Qge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG46aG9zdC5pcy1ldmVuIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbjpob3N0LmlzLW9kZCB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRjeWFuO1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5zYWxtb24tdGhlbWUpIC5jb3Vyc2UtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRzYWxtb247XHJcbn1cclxuXHJcbi5jb3Vyc2UtY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBib3gtc2hhZG93OiAwIDFweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAuMiksIDAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCA0cHggOHB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG59XHJcblxyXG4uY291cnNlLWNhcmQgLmNvdXJzZS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY291cnNlLWNhcmQgLmNvdXJzZS1kZXNjcmlwdGlvbiB7XHJcbiAgbWF4LXdpZHRoOiAzNjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uY291cnNlLWNhcmQgLmNvdXJzZS1kZXNjcmlwdGlvbiBpbnB1dCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uY291cnNlLWNhcmQgLmJlZ2lubmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodHNhbG1vbjtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8360:
/*!****************************************************************!*\
  !*** ./src/app/courses/course-image/course-image.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseImageComponent": () => (/* binding */ CourseImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CourseImageComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function CourseImageComponent_Factory(t) {
    return new (t || CourseImageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CourseImageComponent,
    selectors: [["course-image"]],
    inputs: {
      imageUrl: ["src", "imageUrl"]
    },
    decls: 3,
    vars: 1,
    consts: [[1, "course-image"], ["courseImage", ""], ["width", "300", "alt", "Angular Logo", 3, "src"]],
    template: function CourseImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3170:
/*!*******************************************!*\
  !*** ./src/app/courses/courses.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesModule": () => (/* binding */ CoursesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-card/course-card.component */ 5126);
/* harmony import */ var _course_image_course_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-image/course-image.component */ 8360);
/* harmony import */ var _directives_highlighted_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/highlighted.directive */ 5112);
/* harmony import */ var _directives_ngx_unless_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/ngx-unless.directive */ 4856);
/* harmony import */ var _services_courses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/courses.service */ 2342);
/* harmony import */ var _filter_by_category_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter_by_category.pipe */ 2844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);








class CoursesModule {
  static #_ = this.ɵfac = function CoursesModule_Factory(t) {
    return new (t || CoursesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: CoursesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [_services_courses_service__WEBPACK_IMPORTED_MODULE_4__.CoursesService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CoursesModule, {
    declarations: [_course_card_course_card_component__WEBPACK_IMPORTED_MODULE_0__.CourseCardComponent, _course_image_course_image_component__WEBPACK_IMPORTED_MODULE_1__.CourseImageComponent, _directives_highlighted_directive__WEBPACK_IMPORTED_MODULE_2__.HighlightedDirective, _directives_ngx_unless_directive__WEBPACK_IMPORTED_MODULE_3__.NgxUnlessDirective, _filter_by_category_pipe__WEBPACK_IMPORTED_MODULE_5__.FilterByCategoryPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule],
    exports: [_course_card_course_card_component__WEBPACK_IMPORTED_MODULE_0__.CourseCardComponent, _course_image_course_image_component__WEBPACK_IMPORTED_MODULE_1__.CourseImageComponent, _filter_by_category_pipe__WEBPACK_IMPORTED_MODULE_5__.FilterByCategoryPipe]
  });
})();

/***/ }),

/***/ 5112:
/*!*************************************************************!*\
  !*** ./src/app/courses/directives/highlighted.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightedDirective": () => (/* binding */ HighlightedDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class HighlightedDirective {
  constructor() {
    this.isHighlighted = false;
    this.toggleHighlight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    console.log('Directive created..');
  }
  get cssClasses() {
    return this.isHighlighted;
  }
  mouseOver($event) {
    console.log($event);
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }
  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }
  static #_ = this.ɵfac = function HighlightedDirective_Factory(t) {
    return new (t || HighlightedDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: HighlightedDirective,
    selectors: [["", "highlighted", ""]],
    hostVars: 2,
    hostBindings: function HighlightedDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HighlightedDirective_mouseover_HostBindingHandler($event) {
          return ctx.mouseOver($event);
        })("mouseleave", function HighlightedDirective_mouseleave_HostBindingHandler() {
          return ctx.mouseLeave();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlighted", ctx.cssClasses);
      }
    },
    inputs: {
      isHighlighted: ["highlighted", "isHighlighted"]
    },
    outputs: {
      toggleHighlight: "toggleHighlight"
    },
    exportAs: ["hl"]
  });
}

/***/ }),

/***/ 4856:
/*!************************************************************!*\
  !*** ./src/app/courses/directives/ngx-unless.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxUnlessDirective": () => (/* binding */ NgxUnlessDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class NgxUnlessDirective {
  constructor(templateRef, viewContainer) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
    this.visible = false;
  }
  set ngxUnless(condition) {
    if (!condition && !this.visible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;
    } else if (condition && this.visible) {
      this.viewContainer.clear();
      this.visible = false;
    }
  }
  static #_ = this.ɵfac = function NgxUnlessDirective_Factory(t) {
    return new (t || NgxUnlessDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgxUnlessDirective,
    selectors: [["", "ngxUnless", ""]],
    inputs: {
      ngxUnless: "ngxUnless"
    }
  });
}

/***/ }),

/***/ 2844:
/*!****************************************************!*\
  !*** ./src/app/courses/filter_by_category.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterByCategoryPipe": () => (/* binding */ FilterByCategoryPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FilterByCategoryPipe {
  transform(courses, category) {
    return courses.filter(course => course.category === category);
  }
  static #_ = this.ɵfac = function FilterByCategoryPipe_Factory(t) {
    return new (t || FilterByCategoryPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "filterByCategory",
    type: FilterByCategoryPipe,
    pure: true
  });
}

/***/ }),

/***/ 2342:
/*!*****************************************************!*\
  !*** ./src/app/courses/services/courses.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesService": () => (/* binding */ CoursesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class CoursesService {
  constructor(http) {
    this.http = http;
    console.log("Creating CoursesServices");
  }
  loadCourses() {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set("page", "1").set("pageSize", "10");
    return this.http.get('/api/courses', {
      params
    });
  }
  saveCourse(course) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("X-Auth", "userId");
    return this.http.put(`/api/courses/${course.id}`, course, {
      headers
    });
  }
  static #_ = this.ɵfac = function CoursesService_Factory(t) {
    return new (t || CoursesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CoursesService,
    factory: CoursesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6764:
/*!************************!*\
  !*** ./src/db-data.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COURSES": () => (/* binding */ COURSES),
/* harmony export */   "findCourseById": () => (/* binding */ findCourseById)
/* harmony export */ });
const COURSES = [{
  id: 1,
  description: "Angular Core Deep Dive",
  iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
  longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
  category: 'INTERMEDIATE',
  lessonsCount: 10
}, {
  id: 2,
  description: "RxJs In Practice Course",
  iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
  longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
  category: 'BEGINNER',
  lessonsCount: 10
}, {
  id: 3,
  description: 'NgRx In Depth',
  longDescription: "Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.",
  iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
  category: 'ADVANCED'
}, {
  id: 4,
  description: "Angular for Beginners",
  iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
  longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
  category: 'BEGINNER',
  lessonsCount: 10
}, {
  id: 5,
  description: 'Angular Security Course',
  longDescription: "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
  iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
  category: 'ADVANCED',
  lessonsCount: 11
}, {
  id: 6,
  description: 'Angular PWA Course',
  longDescription: "Learn Angular Progressive Web Applications, build the future of the Web Today.",
  iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
  category: 'ADVANCED',
  lessonsCount: 8
}, {
  id: 7,
  description: 'Angular Advanced Course',
  longDescription: "Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm",
  iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
  category: 'ADVANCED'
}, {
  id: 8,
  description: 'Complete Typescript Course',
  longDescription: "Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.",
  iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
  category: 'BEGINNER'
}, {
  id: 9,
  description: 'Angular Architecture Course',
  longDescription: "Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.",
  iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
  category: 'BEGINNER'
}, {
  id: 10,
  description: "Angular Material Course",
  iconUrl: "https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png",
  longDescription: "Build Applications with the official Angular Widget Library",
  category: 'ADVANCED'
}];
function findCourseById(courseId) {
  return COURSES.find(course => course.id == courseId);
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map