/*jslint node:true, sloppy:true, indent:2 */
module.exports = function (grunt) {

  // All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Minification of scripts:
    uglify: {
      development: {
        options: {
          sourceMap: true,
          mangle: false,
          compress: false,
          preserveComments: 'all'
        },
        files: [
          {
            src: [
              'static/_js/vendor/modernizr-custom.min.js',
              'static/_js/head.js'
            ],
            dest: 'static/js/head.min.js'
          },
          {
            src: [
              'static/_js/vendor/html5shiv-printshiv.js',
              'static/_js/vendor/respond.src.js'
            ],
            dest: 'static/js/head.oldie.min.js'
          },
          {
            src: [
              'static/_js/vendor/jquery-1.11.0.js',
//              'static/_js/jquery.exampleplugin.js',
              'static/_js/engine.js'
            ],
            dest: 'static/js/engine.min.js'
          }
        ]
      },

      deploy: {
        options: {
          sourceMap: true,
          mangle: false,
          compress: true,
          report: 'gzip',
          preserveComments: 'some'
        },
        files: '<%= uglify.development.files %>'
      }
    },

    // define settings to generate CSS from Sass-files
    // NOTE: Requires (Ruby)Sass to be installed locally!
    sass: {
      development: {
        options: {
          sourcemap: true,
          lineNumbers: true,
          style: 'expanded'
        },
        files: [
          {
            src: ['static/_scss/main.scss'],
            dest: 'static/css/main.max.css'
          }
        ]
      },
      deploy: {
        options: {
          style: 'compressed'
        },
        files: [
          {
            src: ['static/_scss/main.scss'],
            dest: 'static/css/main.min.css'
          }
        ]
      }
    },
    
    // Optimize images
    imagemin: {
      deploy: {
        files: [{
          expand: true,
          cwd: 'static/_img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'static/img/'
        }]
      }
    },

    // Automate tasks when files change.
    watch: {
      options: {
        livereload: true
      },
      self: {
        files: ['Gruntfile.js'],
        tasks: ['grunt', 'watch']
      },
      js: {
        files: ['static/_js/*.js', 'static/_js/**/*.js'],
        tasks: ['uglify:development'],
        options: {
          spawn: true
        }
      },
      css: {
        files: ['static/_scss/*.scss', 'static/_scss/**/*.scss'],
        tasks: ['sass:development'],
        options: {
          spawn: true
        }
      }
    },
    
    // Run shell commands
    shell: {
      bake: {
        command: '../piecrust/bin/chef bake --portable --output=../templates-output --force',
        options: {
          stdout: true,
          failOnError: true
        }
      }
    },

    // Deploy to FTP staging-server
    'ftp-deploy': {
      staging: {
        auth: {
          host: 'staging.fabriquehq.nl',
          port: 21,
          authKey: 'FabHQ'
        },
        src: '../templates-output',
        dest: '/public_html/elwin/test/'
      }
    }

  });

  // Load all plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-shell');
  grunt.loadNpmTasks('grunt-ftp-deploy');

  // Define Grunt Tasks
  grunt.registerTask('default', ['uglify:development', 'sass:development']);
  grunt.registerTask('deploy', ['uglify:deploy', 'sass:deploy', 'imagemin:deploy', 'shell:bake', 'ftp-deploy']);

};
 