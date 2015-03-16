// Karma configuration

module.exports = function(config) {
    'use strict';
    config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    preprocessors: {
            'public/**/*.html': ['ng-html2js']
        },

    ngHtml2JsPreprocessor: {
       stripPrefix: 'public/',
       moduleName: 'templates'
    },

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        'app/vendor/angular/angular.js',
        'app/vendor/angular-ui-router/release/angular-ui-router.js',
        'app/vendor/angular-resource/angular-resource.js',
        'app/vendor/jquery/dist/jquery.js',
        'app/vendor/bootstrap/dist/js/bootstrap.js',
        'app/vendor/toastr/toastr.js',
        'app/vendor/textAngular/dist/textAngular-sanitize.min.js',
        'app/vendor/textAngular/dist/textAngular-rangy.min.js',
        'app/vendor/textAngular/dist/textAngular.min.js',
        'app/vendor/s3Upload/s3Upload.js',
        'app/main.js',
        'app/modules/**/*.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'test/unit/**/*.js',
        'public/**/*.html'
    ],


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,


    });
};