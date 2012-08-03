# grunt-cucumber-js

A grunt.js task to run your cucumber.js feature suite.

## Getting Started
Install this grunt plugin next to your project's grunt.js gruntfile with: `npm install grunt-cucumber-js`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.initConfig({
  cucumberjs: {
    features: "path/to/features",
    steps: "path/to/step_definitions",
    tags: "@dev"
  }
});

grunt.loadNpmTasks('grunt-cucumber-js');

grunt.registerTask('default', 'cucumberjs');
```

## Bugs

Help us squash them by submitting an issue that describes how you encountered it; please be as specific as possible including operating system, node, grunt, and grunt-contrib versions.

## Release History

see [CHANGELOG](/s9tpepper/grunt-cucumber-js/blob/master/CHANGELOG).

## License
Copyright (c) 2012 "s9tpepper" Omar Gonzalez & contributors.
Licensed under the MIT license.