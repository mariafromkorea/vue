# Gulp file usage

### Latest updates

- Added javascript linter for Browsersync task (5.31.2017 - Tan)
- Setup Browsersync for watching changes (5.22.2017 - Tan)

## Using Browsersync

Browsersync allows you to test your site across multiple devices simultaneously. It creates a proxy to your local site, which can be share with devices on the local network. Browser sync also watches for changes and automatically reloads the site across all devices. For documentations and more info, visit: https://www.browsersync.io/

### Usage

#### Run script

```shell
# Run with default options (see config.js)
$ npm run browsersync

# Or use the shorthand alias
$ npm run bs
```

#### Pass in the hostname and custom options for Browsersync

By default Browsersync will proxy the hostname set in `config.js` (`vue.dev`). In order to proxy other sites, you must pass in the hostname of that site. Make sure to include the port in your hostname if you are not using the default port 80. Protocols are not necessary for non secure hosts.

```shell
# Proxy hostname http://bluetent.dev:8888
$ npm run bs --hostname=bluetent.dev:8888

# Use custom port for the proxy server. Default is 8080
$ npm run bs --hostname=bluetent.dev:8888 --port=9999

# Auto open the proxy site in your browser.
# By default you have to manually type in http://localhost:8080 in your browser.
$ npm run bs --hostname=bluetent.dev:8888 --port=9999 --autoOpen=true
```

#### Access using devices on network

Once the service has started, it will output the local and external url for the proxy service. You can access the site via other devices on the network using the `External` address. The settings dashboard can be accessed by visiting the url provided with the `UI` address.

```shell
 -------------------------------------
       Local: http://localhost:8080
    External: http://192.168.1.75:8080
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.1.75:3001
 -------------------------------------
```

#### Gotchas and things to be aware of

Since Browsersync will proxy your site at http:localhost:8080, you will not be able to carry over the session information for the original hostname. So you will have to login again when accessing the site using Browsersync.

Also beware of harcoding hostnames for assets such as javascript or image files, because you will get cross origin request warnings and errors.

#### Using javascript linter

You may pass in a custom options to lint javascript files on changes.

```shell
$ npm run bs --jslint=true
```

By default, the linter will watch for files within the `[theme]/js` directory and the `sites/all/modules/custom/[custom-module]/js/` directory. See `config.js` for these paths.

Custom rules for the linter are set by the `.eslintrc.js` files in the site root directory. The default rules provided by Drupal within `.eslintec` are outdated and use depecated rules and should not be used.

## Gulp watch dev flag

You may now pass a flag to `gulp watch` to generate stylesheet with source map. Not passing a flag will generate a compressed stylesheet. See [styles.js](tasks/styles.js)

```shell
$ gulp watch --dev
```

The sourcemap will be generated in the `css/maps` directory which as been added to `.gitignore`

This is using [yargs](https://www.npmjs.com/package/yargs) to parse passed arguments.

```javascript
// Require yargs
argv = require('yargs').argv;

// Within the watch task
if (argv.dev) {
    gulp.watch(paths.sass, ['sassdev']);
} else {
    gulp.watch(paths.sass, ['sass']);
}
```

## Gulp auto load plugins

Plugins are now autoloaded from `package.json` using [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins). They are loaded into a `plugins` object. Use plugins as you normally woudl but within the scope of `plugins`

```javascript
// Instead of using
.sass()

// Now use
plugins.sass()
```

## External task files

To reduce bloat within the `gulpfile.js` tasks are placed within a separate files inside the `tasts/` directory [here](tasks). There is a example file in `tasks/template.js` that can be used as a starter for new tasks. Tasks are exported from the external file using module.export

```javascript
// Export your task so you can require it within gulfile.js
exports.yourtaskname = function(gulp, plugins, paths) {

    // Task methods
    return function() {
        gulp.src(paths.YOUR_PATH)
            .pipe(plugins.YOUR_PLUGIN());
    }
}
```

And loaded within the gulpfile using require. Be sure pass the `gulp`, `plugins`, and `path` variables.

```javascript
gulp.task('yourtaskname', require('./tasks/yourtaskfile').yourtaskname(gulp, plugins, paths));
```
