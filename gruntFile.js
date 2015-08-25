'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      n3n: {
        src: 'iconfont/*.svg',  // file 16개
        dest: 'dest/iconfont',   //font file destinition
        destCss: 'sass/',
        options: {
          //default: 'fontforge' should install fontforge
          // engine: 'node',
          stylesheet: 'sass',

           // if (ture) Append font file names with unique string to flush browser cache when you update your icons.
          // hashes: false,

          // if convert to woff2, read this 'https://github.com/sapegin/grunt-webfont/wiki/WOFF2-support'
          types: ['eot', 'woff', 'woff2', 'ttf', 'svg'],

          relativeFontPath: '/packages/wizeye-ui-controls/client/stylesheet/stylesheets/iconfont',

          destHtml: 'sass/'

        }
      }
      // fontawesome: {
      //   src: 'sample_svg/svg50/*.svg',  // file 50개
      //   dest: 'dest/svg50fontforge/font',
      //   destCss: 'dest/svg50fontforge/css',
      //   options: {
      //     //default: 'fontforge' should install fontforge
      //     // engine: 'node',
      //     stylesheet: 'sass',
      //
      //     // if convert to woff2, read this 'https://github.com/sapegin/grunt-webfont/wiki/WOFF2-support'
      //     types: ['eot', 'woff', 'woff2', 'ttf', 'svg'],
      //
      //     destHtml: './dest/svg50fontforge/'
      //   }
      // }
    },

    clean: [
      'sass/*',
      'dest/*'
    ]
  })

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('default', ['clean', 'webfont']);
};
