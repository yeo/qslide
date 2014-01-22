'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js'],
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },

    watch: {
      dev: {
        files: ['coffee/*.coffee'],
        tasks: ['coffee', 'shell:requirejs'],
        options: {
          debounceDelay: 250,
        },
      },
      
      server: {
        files: ['*.go'],
        tasks: ['shell:restartServer'],
        options: {
          debounceDelay: 250,
        },
      },

    },

    coffee: {
      //compile: {
        //files: {
          //'lib/nct-downloader.ks': 'lib/coffee/nct-downloader.coffee', // 1:1 compile
          ////'path/to/another.js': ['path/to/sources/*.coffee', 'path/to/more/*.coffee'] // compile and concat into single file
        //}
      //},
      
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: 'coffee',
        src: ['*.coffee'],
        dest: 'public/javascripts',
        ext: '.js'
      }
    },

    shell: {                                // Task
        requirejs: {                      // Target
            options: {                      // Options
                stdout: true
            },
            command: 'node public/javascripts/r.js -o public/javascripts/build/main.js'
        },

        restartServer: {                      // Target
            options: {                      // Options
                stdout: true
            },
            command: 'killall go && go run qs.go &'
        },
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee')
   // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit']);
 
  // run custom coomand
  grunt.loadNpmTasks('grunt-shell')
  grunt.registerTask('default', ['shell']);


};
