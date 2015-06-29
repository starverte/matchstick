var grunt = require('grunt');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    autoprefixer: {
      options: {
        browsers: [
          "Android 2.3",
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 24",
          "Explorer >= 8",
          "iOS >= 6",
          "Opera >= 12",
          "Safari >= 6"
        ],
      },
      dist: {
        options: {
          map: true
        },
        src: 'dist/style.css'
      },
    },
    csscomb: {
      options: {
        config: 'less/.csscomb.json'
      },
      less: {
        expand: true,
        cwd: 'less/',
        src: ['*.less'],
        dest: 'less/'
      },
      dist: {
        expand: true,
        cwd: 'dist/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/'
      },
    },
    less: {
      bootstrap: {
        files: {
          'dist/bootstrap.css': 'less/bootstrap.less'
        }
      },
      dist: {
        files: {
          'dist/style.css': 'less/matchstick.less'
        }
      }
    },
    prettify: {
      dist: {
        files: {
          'dist/index.html': ['html/index.html'],
          'dist/blog.html': ['html/blog.html'],
          'dist/formatting.html': ['html/formatting.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-csscomb');

  grunt.registerTask('default', ['less', 'prettify', 'csscomb']);

