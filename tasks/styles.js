// Export your task so you can require it within gulfile.js

// Generate production stylesheet without sourcemap
exports.sass = function(gulp, plugins, paths) {

  function errorAlert(error) {
    plugins.notify.onError({
      title: 'SCSS Error',
      message: 'Check your terminal',
      sound: 'Sosumi'
    })(error);
    console.log(error.toString()); //Prints Error to Console
    this.emit('end'); //End function
  }

  // Task methods
  return function() {
    gulp.src(paths.sass)
      .pipe(plugins.plumber({
        errorHandler: errorAlert
      }))
      .pipe(plugins.changed(paths.css))
      .pipe(plugins.sass({
        style: 'expanded',
        sourceComments: 'normal'
      }))
      .on("error", plugins.notify.onError({
        message: 'Error: <%= error.message %>'
      }))
      .pipe(plugins.autoprefixer('last 2 versions', 'ie 8', 'ie 9', 'android 4'))
      .pipe(gulp.dest(paths.css));
  };
};

// Duplicating due to limited time, eventually may want to combine these two methods and
// use a conditional to return a prodcution or dev stylesheet

// Generate dev stylesheet with sourcemap
exports.sassdev = function(gulp, plugins, paths) {

  function errorAlert(error) {
    plugins.notify.onError({
      title: 'SCSS Error',
      message: 'Check your terminal',
      sound: 'Sosumi'
    })(error);
    console.log(error.toString()); //Prints Error to Console
    this.emit('end'); //End function
  }

  // Task methods
  return function() {
    gulp.src(paths.sass)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.plumber({
        errorHandler: errorAlert
      }))
      .pipe(plugins.sass({
        style: 'expanded',
        sourceComments: 'normal'
      }))
      .on("error", plugins.notify.onError({
        message: 'Error: <%= error.message %>'
      }))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(paths.css));
  };
};
