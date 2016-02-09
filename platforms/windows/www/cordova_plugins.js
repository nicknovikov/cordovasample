cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-apiai/www/lib/q.js",
        "id": "cordova-plugin-apiai.Q",
        "pluginId": "cordova-plugin-apiai",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-apiai/www/ApiAIPlugin.js",
        "id": "cordova-plugin-apiai.ApiAIPlugin",
        "pluginId": "cordova-plugin-apiai",
        "clobbers": [
            "window.ApiAIPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-apiai/www/ApiAIPromises.js",
        "id": "cordova-plugin-apiai.ApiAIPromises",
        "pluginId": "cordova-plugin-apiai",
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