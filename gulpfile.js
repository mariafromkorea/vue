/**
 * Front end tasks for rezFusion.
 */

var gulp = require('gulp'),
  config = require('./config.js'),
  plugins = require('gulp-load-plugins')(config.gulpLoadPlugins),
  paths = config.paths,
  _ = plugins._,
  util = plugins.util,
  ulog = util.log,
  ugreen = util.colors.green,
  uyellow = util.colors.yellow,
  ured = util.colors.red;

// Sass stylesheet tasks
gulp.task('sass', require('./tasks/styles').sass(gulp, plugins, paths));
gulp.task('sassdev', require('./tasks/styles').sassdev(gulp, plugins, paths));

// Minify images
gulp.task('img', require('./tasks/images').img(gulp, plugins, paths));

// Create icon font from a folder of SVGs (icons/*.svg). Has to be run separately from default task
gulp.task('icons', require('./tasks/icons').icons(gulp, plugins, paths));

// Clear the gulp cache - run `gulp clear`
gulp.task('clear', function(done) {
  return plugins.cache.clearAll(done);
});

// Watch function
// Pass flag --dev to generate sourcemap
gulp.task('watch', function() {
  if (plugins.yargs.argv.dev) {
    gulp.watch(paths.sass, ['sassdev']);
  } else {
    gulp.watch(paths.sass, ['sass']);
  }
  gulp.watch(paths.imgmin, ['img']);
  plugins.livereload.listen({
    basePath: './**'
  });
  gulp.watch(['./css/*.css', 'templates/*.php', 'js/*.js', 'images/*.{jpg,png,gif,svg}', 'imging/*.{jpg,png,gif,svg}']).on('change', plugins.livereload.changed);

});

// Browsersync
// Usage:
// npm run browsersync (or npm run bs)
// pass options using -- for example:
// npm run bs --hostname=bluetent.dev:8888 --port=1234  --autoOpen=ture
gulp.task('browsersync', () => {
  if (!process.env.npm_config_hostname) {
    ulog(ured(`Warning:`));
    ulog(ured(`You did not pass in a hostname. Using default host of ${config.browserSync.hostname}`));
    ulog(ured(`Use the --hostname flag to pass in the hostname of your site.`));
    ulog(uyellow(`Example: npm run bs --hostname=bluetent.dev:8888`));
  }
  // Start Browsersync
  plugins.sync({
    proxy: process.env.npm_config_hostname || config.browserSync.hostname,
    port: process.env.npm_config_port || config.browserSync.port,
    open: process.env.npm_config_autoOpen || config.browserSync.autoOpen
  });

  // Get default watchable paths
  let watchPath = [
      paths.css,
      _.concat(paths.files),
      paths.theme,
      paths.img
    ];

  // Watch sass files
  gulp.watch(paths.sass, ['sassdev']).on('change', plugins.sync.reload);

  // Image minifier
  gulp.watch(paths.imgmin, ['img']);

  // Lint javascript
  if (process.env.npm_config_jslint && process.env.npm_config_jslint === 'true') {
    gulp.watch([paths.js, paths.drupalCustomModule], (e) => {
      let path = e.path;
      gulp.src([path])
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format());
    }).on('change', plugins.sync.reload);
  }else {
    // Still watch javascript files for changes if no linting was enabled
    watchPath.push(paths.js, paths.drupalCustomModule);
  }

  // Watch images, php, templates, etc files
  gulp.watch(watchPath, (e) => {
    ulog(ugreen(`Changed ${e.path}`));
  }).on('change', plugins.sync.reload);
});

gulp.task('test', () => {
  gulp.watch([paths.js], (e) => {
    console.log(e.path);
  });
});

// Define default task
gulp.task('default', ['watch']);
