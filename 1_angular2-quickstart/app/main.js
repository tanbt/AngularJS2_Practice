System.register(['angular2/platform/browser', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
//We might wish to render the first page of our application on the server to improve launch performance or facilitate SEO.
//These targets require a different kind of bootstrap function that we'd import from a different library.
//# sourceMappingURL=main.js.map