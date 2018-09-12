// Starter template for a task file
// Feel free to duplicate and add your new task using this

// Export your task so you can require it within gulfile.js
exports.yourtaskname = function(gulp, plugins, paths) {

    // Task methods
    return function() {
        gulp.src(paths.YOUR_PATH)
            .pipe(plugins.YOUR_PLUGIN());
    };
};
