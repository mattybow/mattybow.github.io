module.exports = function(grunt) {
  require('time-grunt')(grunt);
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
      vulcan:{
        cmd: 'grunt build'
      },
      sass:{
        cmd: 'grunt sass:dist'
      },
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
        "_sass/**/*",
        "css/**/*",
        "elements/**/*",
        "js/**/*",
        "_config.yml",
        "*.html",
        "*.md",
      ],
      tasks:[
        "exec:sass",
        "exec:build"
      ]
    },
    sass: {
      options: {
        includePaths: [
          '_sass'
        ]
      },
      vendor: {
        files: {
          "_sass/_bootstrap.scss":"bower_components/bootstrap-sass-official/assets/stylesheets/bootstrap"
        }
      },
      dist: {
        options: {
          style: 'compressed',
          sourceMap: true,
        },
        files: [{
          expand: true,
          cwd:'.',
          src: ['elements/{,*/}*.{scss,sass}'],
          dest: '.',
          ext: '.css'
        }]
      }
    },
    vulcanize: {
      default: {
        options: {
          strip: true
        },
        files: {
          'elements/elements.vulcanized.html': [
            'elements/elements.html','index.html'
          ]
        }
      }
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
  grunt.registerTask('build',['sass:vendor','sass:dist','vulcanize','exec:build']);
  grunt.registerTask('serve',['build','connect:server','watch']);

};