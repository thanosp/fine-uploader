/* jshint node: true */
module.exports = function(grunt) {
    "use strict";

    grunt.registerTask(
        "build",
        "Build from latest source",
        [
            "jshint:source",
            "jshint:tests",
            "jscs:src",
            "jscs:tests",
            "concat",
            "umd",
            "minify",
            "usebanner:allhead",
            "usebanner:allfoot",
            "copy:images"
        ]);

};
