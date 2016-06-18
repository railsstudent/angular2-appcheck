/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'ng2-material': 'node_modules/ng2-material',
    'lodash': 'node_modules/lodash/lodash.js',
    'ng2-charts': 'node_modules/ng2-charts',
    'chance': 'node_modules/chance/chance.js',
    '@angular2-material':  'node_modules/@angular2-material'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'ng2-material': {
       defaultExtension: 'js', main: 'index.js'
    },
    'ng2-charts': {
       defaultExtension: 'js', main: 'ng2-charts.js'
    },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    '@angular2-material/core': {defaultExtension: 'js', main: 'core.js'},
    '@angular2-material/sidenav': {defaultExtension: 'js', main: 'sidenav.js'},
    '@angular2-material/radio': {defaultExtension: 'js', main: 'radio.js'},
    '@angular2-material/checkbox': {defaultExtension: 'js', main: 'checkbox.js'},
    '@angular2-material/toolbar': {defaultExtension: 'js', main: 'toolbar.js'}
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
//  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  var setPackageConfig = packIndex;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
