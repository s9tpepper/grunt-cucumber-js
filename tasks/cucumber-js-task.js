module.exports = function (grunt) {

    grunt.registerTask("cucumberjs", "Runs cucumber.js", function () {

        var cucumberPath = grunt.config("cucumberjs.executable") || 'cucumber';
        var Cucumber = require(cucumberPath);

        var features    = grunt.config("cucumberjs.features") || 'features';
        var steps       = grunt.config("cucumberjs.steps") || 'features/step_definitions';
        var tags        = grunt.config("cucumberjs.tags") || '~@Pending';

        var options = [ 'node',
            'cucumber-js-task.js',
            features,
            '-r',
            steps,
            '-t',
            tags ];

        var cli = Cucumber.Cli(options);

        var done = this.async();
        cli.run(function(succeeded) {
            var code = succeeded ? 0 : 1;
            var exitFunction = function() {
                if (code !== 0) {
                    process.exit(code);
                } else {
                    done();
                }
            };

            // --- exit after waiting for all pending output ---
            var waitingIO = false;
            process.stdout.on('drain', function() {
                if (waitingIO) {
                    // the kernel buffer is now empty
                    exitFunction();
                }
            });
            if (process.stdout.write("")) {
                // no buffer left, exit now:
                exitFunction();
            } else {
                // write() returned false, kernel buffer is not empty yet...
                waitingIO = true;
            }
        });

    });

};
