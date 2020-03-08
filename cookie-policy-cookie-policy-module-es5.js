function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cookie-policy-cookie-policy-module"], {
  /***/
  "./src/app/cookie-policy/cookie-policy-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/cookie-policy/cookie-policy-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CookiePolicyRoutingModule */

  /***/
  function srcAppCookiePolicyCookiePolicyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CookiePolicyRoutingModule", function () {
      return CookiePolicyRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cookie_policy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cookie-policy.component */
    "./src/app/cookie-policy/cookie-policy.component.ts");

    var routes = [{
      path: '',
      component: _cookie_policy_component__WEBPACK_IMPORTED_MODULE_2__["CookiePolicyComponent"]
    }];

    var CookiePolicyRoutingModule = function CookiePolicyRoutingModule() {
      _classCallCheck(this, CookiePolicyRoutingModule);
    };

    CookiePolicyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CookiePolicyRoutingModule
    });
    CookiePolicyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CookiePolicyRoutingModule_Factory(t) {
        return new (t || CookiePolicyRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CookiePolicyRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookiePolicyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cookie-policy/cookie-policy.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/cookie-policy/cookie-policy.component.ts ***!
    \**********************************************************/

  /*! exports provided: CookiePolicyComponent */

  /***/
  function srcAppCookiePolicyCookiePolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CookiePolicyComponent", function () {
      return CookiePolicyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CookiePolicyComponent =
    /*#__PURE__*/
    function () {
      function CookiePolicyComponent() {
        _classCallCheck(this, CookiePolicyComponent);
      }

      _createClass(CookiePolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CookiePolicyComponent;
    }();

    CookiePolicyComponent.ɵfac = function CookiePolicyComponent_Factory(t) {
      return new (t || CookiePolicyComponent)();
    };

    CookiePolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CookiePolicyComponent,
      selectors: [["app-cookie-policy"]],
      decls: 86,
      vars: 0,
      consts: [[1, "mt-16", "md:py-24"], [1, "container", "mx-auto"], [1, "header"], [1, "text-5xl", "font-bold"], [1, "date", "italic"], [1, "mt-8"], [1, "paragraph-title", "text-xl", "font-medium"], [1, "paragraph", "leading-relaxed"], [1, "mt-4"], [1, "text-orange-700", "text-lg"], ["href", "www.aboutcookies.org"], ["href", " www.allaboutcookies.org"], ["href", "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&redirectslug=Cookies"], ["href", "http://windows.microsoft.com/en-GB/internet-explorer/delete-manage-cookies%22%20%5Cl%20%22ie=ie-10"], ["href", "https://support.google.com/chrome/answer/95647?hl=en&ref_topic=14666"], [1, "mt-4", "text-orange-700", "text-lg"], ["href", "www.allaboutcookies.org/faqs/beacons.html"], [1, "mt-8", "text-lg"]],
      template: function CookiePolicyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cookie Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Last Update March 8, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cookies and other technologies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "We use, and allow certain other companies to use, cookies, web beacons and other similar technologies on our sites, applications and communications. We do this to understand your use of our services, improve your user experience, enable personalized features and content, optimize our advertising and marketing and to enable third party advertising companies to assist us in serving you advertisements specific to your interests across the internet. The technologies we use do not collect any information which directly identifies you in the real world, such as your name, email address, address or phone number.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "What are \u2018Cookies\u2019?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " A cookie is a small text file that we, and in certain circumstances third parties, place on your browser (for example, Internet Explorer or Safari) when you visit our sites or open some of our emails. Cookies are useful in enabling us to better serve you because, among other things, they allow us to recognize you each time you re-visit one of our sites. The entity that places cookies on your browser can then read the information on the cookie that it set. Cookies are typically classified as either \"session cookies\" which do not stay on your device after you close your browser or \"persistent cookies\" which will usually remain on your device until you delete them or they expire. You can find more detailed information about these technologies at: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "www.aboutcookies.org");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " www.allaboutcookies.org");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "How we and third parties use cookies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "We use cookies that are essential in order to enable you to move around our sites and use their features, such as accessing secure areas. Without these cookies, features that you use, like shopping baskets, cannot be provided. Certain cookies, however, while useful, are not essential, and we require your consent before we can use these cookies. By continuing to browse on our sites you agree to the use of these non-essential cookies unless you specifically set your browser to reject them. Please see How to manage or refuse cookies and similar technologies below for further details on your choices. Different cookies are used to perform different functions which we explain below. A visit to any of our sites could generate the following types of cookie: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Site performance cookies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "We use cookies that are essential in order to enable you to move around our We use cookies to remember your selections on our sites: These cookies allow us to remember choices you make on our sites and provide enhanced, more personalized features. These cookies can also be used to remember changes you have made to text size, fonts and other parts of web pages that you can customize. They can also be used to provide services you have asked for such as watching a video or commenting on a blog. These cookies cannot track your browsing activity on other sites. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Analytics cookies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " We use cookies to personalize your experience and for targeting advertisements: We use cookies (and allow data management platform providers to use cookies on our behalf) to collect information about your browsing habits across our sites in order to provide personalized content, services and communications, as well as targeted advertising on our sites, sites operated by our group companies and selected partner sites. For example, we could show you advertisements for relevant publications or products and services if we know you have been browsing sections about related products or services on our sites. If you use more than one device or computer on a regular basis, we can link cookies together so that you can still receive a personalized online experience. We also personalize the information you see based on what already know about you or presume about you based on your online activities, so that you spend less time looking for things. With the use of cookies, each visitor to our site can have a web experience that is unique to them. Cookies can also be linked with other information we hold or presume about you for these purposes. For example, if you are a registered user or provide us with your name, email address, social media log-in details or other contact information (e.g. by entering a competition or signing up to our newsletter) or interact with our email communications (e.g. by clicking on links within the emails), this information can be linked with your browsing activity across all your devices to tailor content, services, advertising and offers for you. We also obtain information from third party service providers such as demographics and interest categories created from a combination of sources that permit us to provide you with more relevant and useful content, communications and advertising. This information does not identify you personally. You can opt out of receiving interest-based advertising on our sites by blocking these cookies as described below in the section on How to manage or refuse cookies and similar technologies. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Third party advertising cookies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " We partner with advertisers, ad network providers and ad serving companies to place cookies on our sites to allow them to show you advertisements both on and off our sites that are more relevant and useful to you, limit the number of times you see a particular ad and to customize ads. We do not share any information with these third parties that will directly identify you in the real world, such as your name, email address, address or phone number. However, these third parties can assume that users who interact with or click on a personalized advertisement or content are part of the group that the advertisement or content is directed towards. The third parties that generate these cookies have their own privacy policies and we have no access to read or write these cookies. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Social media cookies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Cookies are also used when you share information using a social media sharing button on the sites. The social network will record that you have done this. This information can be linked to targeting and advertising activities. The types of cookies used by these third parties and how they use the information generated by them will be governed by those companies\u2019 privacy policies. For information on how to opt out of targeting advertising, please go to How to manage or refuse cookies and similar technologies. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "How we and third parties use web beacons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " We use and permit selected third parties to use web beacons (usually in combination with cookies) to compile aggregate information about your site usage and your interaction with email and other communications to measure performance and to provide content and advertisements that are more relevant to you. A web beacon (also called a web bug, clear GIF or pixel tag) can be embedded in online content, videos and emails, and allows a server to read certain types of information from your device, to know when you have viewed the beacon and the IP address of your device. The type of information collected includes, but is not limited to, information relating to advertising responses, page views, promotion views and purchases made. We will include web beacons in certain promotional email messages and newsletters to determine whether the messages have been opened or acted upon and whether our mailing tools are working correctly. The web beacons can be used to recognize cookies generated by third parties and inform us and third parties of which advertisement or link brought you to our site, allowing us to monitor the efficacy of our business relationships with third parties. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "How to manage or refuse cookies and similar technologies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " If you do not want your browser to accept cookies and use them in the ways described above, you can change your browser settings. You can also delete existing cookies from your browser. However, blocking all cookies will affect your web experience and can result in parts of our sites not functioning properly. Certain cookies are designed to help save you time by, for example, remembering your contact details when you place an order. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "The procedure for modifying your privacy preferences is different for each internet browser and the following links will be helpful:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Cookie setting in Firefox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Cookie setting in Safari");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Cookie setting in Internet Explorer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Cookie setting in Chrome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " You can opt out of Google Analytics without affecting how you visit our site \u2013 for more information on opting out of being tracked by Google Analytics across all websites you use, visit this Google page. For Google Analytics Advertising Features, you can opt-out through Google Ads Settings or by visiting the Network Advertising Initiative opt out page. You can find more information about how Google uses information from our sites here. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Web beacons ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " As web beacons are the same as any other content request included in the architecture of a website page, you cannot opt out or refuse them. However, you are able to disable web beacons in email messages by not downloading images contained in messages you receive (this feature varies depending on the email software used on your personal computer). However, doing this will not always disable a web beacon or other tracking technologies in the email message due to specific email software capabilities. For more information about this, please refer to the information provided by your email software or service provider. Web beacons can also be rendered ineffective in certain circumstances by opting out of cookies or amending your cookie settings in your browser. Further details on web beacons, and how to manage them, can be found here: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "www.allaboutcookies.org/faqs/beacons.html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " If you have any other queries about our use of cookies, you can contact us at ronald@sleepy-labs.com. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".banner[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 69%);\n  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 69%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29va2llLXBvbGljeS9DOlxcd3NcXHNsZWVweS1sYWJzL3NyY1xcYXBwXFxjb29raWUtcG9saWN5XFxjb29raWUtcG9saWN5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb29raWUtcG9saWN5L2Nvb2tpZS1wb2xpY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwREFBQTtFQUNBLGtEQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb29raWUtcG9saWN5L2Nvb2tpZS1wb2xpY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyIHtcclxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCUsIDEwMCUgMTAwJSwgMCA2OSUpO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCUsIDEwMCUgMTAwJSwgMCA2OSUpO1xyXG5cclxufVxyXG4iLCIuYmFubmVyIHtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDAgNjklKTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwIDY5JSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookiePolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cookie-policy',
          templateUrl: './cookie-policy.component.html',
          styleUrls: ['./cookie-policy.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cookie-policy/cookie-policy.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/cookie-policy/cookie-policy.module.ts ***!
    \*******************************************************/

  /*! exports provided: CookiePolicyModule */

  /***/
  function srcAppCookiePolicyCookiePolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CookiePolicyModule", function () {
      return CookiePolicyModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _cookie_policy_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cookie-policy-routing.module */
    "./src/app/cookie-policy/cookie-policy-routing.module.ts");
    /* harmony import */


    var _cookie_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cookie-policy.component */
    "./src/app/cookie-policy/cookie-policy.component.ts");

    var CookiePolicyModule = function CookiePolicyModule() {
      _classCallCheck(this, CookiePolicyModule);
    };

    CookiePolicyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CookiePolicyModule
    });
    CookiePolicyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CookiePolicyModule_Factory(t) {
        return new (t || CookiePolicyModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _cookie_policy_routing_module__WEBPACK_IMPORTED_MODULE_2__["CookiePolicyRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CookiePolicyModule, {
        declarations: [_cookie_policy_component__WEBPACK_IMPORTED_MODULE_3__["CookiePolicyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _cookie_policy_routing_module__WEBPACK_IMPORTED_MODULE_2__["CookiePolicyRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookiePolicyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_cookie_policy_component__WEBPACK_IMPORTED_MODULE_3__["CookiePolicyComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _cookie_policy_routing_module__WEBPACK_IMPORTED_MODULE_2__["CookiePolicyRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=cookie-policy-cookie-policy-module-es5.js.map