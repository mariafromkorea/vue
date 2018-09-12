// Export your task so you can require it within gulfile.js

// Minify images and set up the folder for livereload. First run
// will minify all images, subsequent runs will minify only new or
// modified files
exports.img = function(gulp, plugins, paths) {

    // Task methods
    return function() {
        gulp.src(paths.imgmin)
            .pipe(plugins.clean())
            .pipe(plugins.imagemin({
                optimizationLevel: 3,
                verbose: true
            }))
            .pipe(gulp.dest(paths.img));
    };
};
