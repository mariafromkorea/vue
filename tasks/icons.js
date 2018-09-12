// Export your task so you can require it within gulfile.js

// Create icon font from a folder of SVGs
// Has to be run separately from default task
// To use, run `gulp icons`
exports.icons = function(gulp, plugins, paths) {

    // Task methods
    return function() {
        gulp.src(['icons/*.svg'])
            .pipe(plugins.iconfont({
                fontName: 'vrwicons',
                appendCodepoints: true,
                normalize: true
            }))
            .on('codepoints', function(codepoints, options) {
                gulp.src('scss/fonts/templates/_vrwicons.scss')
                    .pipe(plugins.consolidate('lodash', {
                        glyphs: codepoints,
                        fontName: 'vrwicons',
                        fontPath: '../fonts/vrwicons/',
                        className: 'vrwicon'
                    }))
                    .pipe(gulp.dest('scss/fonts'));
            })
            .pipe(gulp.dest('fonts/vrwicons'));
    };
};
