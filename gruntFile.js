'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      amos: {
        src: 'sample_svg/svg16/*.svg',  // file 16개
        // src: 'sample_svg/svg50/*.svg',  // file 50개
        // src: 'sample_svg/svg180/*.svg',  // file 180개
        // src: 'sample_svg/svg251/*.svg',  // file 251개
        dest: 'dest/svg16fontforge/font',
        destCss: 'dest/svg16fontforge/css',
        options: {
          //default: 'fontforge' should install fontforge
          // engine: 'node',
          stylesheet: 'sass',

           // if (ture) Append font file names with unique string to flush browser cache when you update your icons.
          hashes: false,

          // if convert to woff2, read this 'https://github.com/sapegin/grunt-webfont/wiki/WOFF2-support'
          types: ['eot', 'woff', 'woff2', 'ttf', 'svg'],

          destHtml: './dest/svg16fontforge/'
        }
      },
      amos2: {
        // src: 'sample_svg/svg16/*.svg',  // file 16개
        src: 'sample_svg/svg50/*.svg',  // file 50개
        // src: 'sample_svg/svg180/*.svg',  // file 180개
        // src: 'sample_svg/svg251/*.svg',  // file 251개
        dest: 'dest/svg50fontforge/font',
        destCss: 'dest/svg50fontforge/css',
        options: {
          //default: 'fontforge' should install fontforge
          // engine: 'node',
          stylesheet: 'sass',

           // if (ture) Append font file names with unique string to flush browser cache when you update your icons.
          hashes: false,

          // if convert to woff2, read this 'https://github.com/sapegin/grunt-webfont/wiki/WOFF2-support'
          types: ['eot', 'woff', 'woff2', 'ttf', 'svg'],

          destHtml: './dest/svg50fontforge/'
        }
      }
    },

    clean: ['dest/svg50fontforge/*']
  })

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['clean', 'webfont']);
};
