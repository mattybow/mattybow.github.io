module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      js: {
        options: {
          baseUrl: "js",
          mainConfigFile: "js/main.js",
          name: "main",
          out: "js/main.min.js",
          preserveLicenseComments:false,
          paths:{
            requireLib:'bower_components/require'
          },
          include: 'requireLib'
        }
      }
    },
    copy:{
      main:{
        files:[
          {expand:true,src:['bower_components/**'],dest:'_site/'}
        ]
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'public/js/main.js',
        dest: 'dist/vapor.min.js'
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'js/*.js']
    },
    exec: {
      build: {
        cmd: 'jekyll build --drafts --trace'
      },
      serve: {
        cmd: 'jekyll serve --watch'
      }
    },
    watch:{
      options:{
        livereload:true
      },
      files:[
        "_drafts/**/*",
        "_includes/**/*",
        "_layouts/**/*",
        "_posts/**/*",
        "css/**/*",
        "js/**/*",
        "_config.yml",
        "*.html",
        "*.md",
      ],
      tasks:[
        "exec:build"
      ]
    },
    connect:{
      server:{
        options:{
          port:4000,
          base:'_site',
          livereload:true
        }
      }
    }
  });

  // Default task(s).
  grunt.registerTask('something', ['requirejs:js']);
  grunt.registerTask('build',['exec:build','copy']);
  grunt.registerTask('serve',['build','connect:server','watch']);

};