var elixir = require("laravel-elixir");

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix
    .browserify("app.js", "public/js/app.js", "resources/assets/js")
    .scripts([
        "resources/assets/js/modernizr-2.8.3.min.js",
        "node_modules/jquery/dist/jquery.js",
        "node_modules/vue/dist/vue.min.js",
        "node_modules/vue-resource/dist/vue-resource.min.js",
        "node_modules/bootstrap-sass/assets/javascripts/bootstrap.js",
        "public/js/app.js",
    ], null, "./")
    .sass("app.scss", null, {
        includePaths: [
            "./node_modules/bootstrap-sass/assets/stylesheets",
        ]
    })
    .styles([
        "public/css/app.css",
    ], null, "./");

    var copiedFiles = {
        "node_modules/bootstrap-sass/assets/fonts/bootstrap": "public/fonts",
    };

    Object.keys(copiedFiles).forEach(function (src) {
    	mix.copy(src, copiedFiles[src]);
    });
});
