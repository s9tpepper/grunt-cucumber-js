module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    jshint: {
      files: ['grunt.js', 'tasks/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    cucumberjs: {
      test1: {
        files: 'features',
        options: {
          steps: 'features/step_definitions',
          format: 'pretty'
        }
      },
      test2: {
        files: 'features/tags.feature',
        options: {
          steps: 'features/step_definitions',
          format: 'pretty',
          tags: '@tag'
        }
      },
      test3: {
        files: 'features/tags.feature',
        options: {
          steps: 'features/step_definitions',
          format: 'pretty',
          tags: ['@wip', '~@tag']
        }
      },
      test4: {
        files: 'features/tags.feature',
        options: {
          steps: 'features/step_definitions',
          format: 'pretty',
          tags: ['@wip', '@tag']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['jshint', 'cucumberjs:test1']);

  grunt.registerTask('tag-tests', ['cucumberjs:test2', 'cucumberjs:test3', 'cucumberjs:test4'])
};
