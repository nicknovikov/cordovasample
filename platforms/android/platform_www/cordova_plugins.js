cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-apiai/www/lib/q.js",
        "id": "cordova-plugin-apiai.Q",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-apiai/www/ApiAIPlugin.js",
        "id": "cordova-plugin-apiai.ApiAIPlugin",
        "clobbers": [
            "window.ApiAIPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-apiai/www/ApiAIPromises.js",
        "id": "cordova-plugin-apiai.ApiAIPromises",
        "clobbers": [
            "window.ApiAIPromises"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});