var dest = "./build";
var src = './app';

module.exports = {
  javascript: {
    src: src + '/js/**/*.js',
    dest: dest + '/js/',
    entry: src + '/js/entry.js',
    outputFilename: 'main.js'
  },
  assets: {
    src: src + "/assets/**/*",
    dest: dest + '/assets/'
  },
  sass: {
    src: src + "/styles/**/*.{sass,scss}",
    dest: dest,
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
    }
  },
  fonts: {
    src: src + '/styles/fonts/*',
    dest: dest + "/styles/fonts/",
    extensions: ['woff2', 'woff', 'eot', 'ttf', 'svg']
  },
  html: {
    src: src + '/**/*.html',
    dest: dest
  },
  server: {
    src: dest,
    host: '0.0.0.0',
    livereload: true,
    directoryListing: false,
    open: false,
    port: 9000
  },
  production: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/*.js',
    cssDest: dest + '/css/',
    jsDest: dest + '/js/',
  }
};
