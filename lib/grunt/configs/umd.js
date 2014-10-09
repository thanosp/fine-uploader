/* jshint node:true */
/* globals module */
var path = require("path");

module.exports = function(paths) {
    "use strict";

    function sourceFilesToUmdify() {
        var result = {},
            baseOptions = {
                objectToExport: "qq",
                amdModuleId: "FineUploader",
                globalAlias: "qq",
                indent: "    "
            };

        ["all", "azure", "s3", "base"].forEach(function(moduleName) {
            var src = (moduleName === "base" ? "" : moduleName + ".") + "fineuploader.js";

            console.log(moduleName);
            result[moduleName] = baseOptions;
            result[moduleName].src = path.join(paths.build, src);

            console.log(result);
        });

        return result;
    }

    //console.log(sourceFilesToUmdify());
    //return {};
    //var result = sourceFilesToUmdify();
    //return result;
    //
    return {
        base: {
            src: path.join(paths.build,  "fineuploader.js"),
            objectToExport: "qq",
            amdModuleId: "FineUploader",
            globalAlias: "qq"
        },
        azure: {
            src: path.join(paths.build, "azure.fineuploader.js"),
            objectToExport: "qq",
            amdModuleId: "FineUploader",
            globalAlias: "qq"
        },
        s3: {
            src: path.join(paths.build, "s3.fineuploader.js"),
            objectToExport: "qq",
            amdModuleId: "FineUploader",
            globalAlias: "qq"
        },
        all: {
            src: path.join(paths.build, "all.fineuploader.js"),
            objectToExport: "qq",
            amdModuleId: "FineUploader",
            globalAlias: "qq"
        }
    };
};
