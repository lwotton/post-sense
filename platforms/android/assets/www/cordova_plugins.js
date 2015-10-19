cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.plugin.tts/www/tts.js",
        "id": "org.apache.cordova.plugin.tts.tts",
        "clobbers": [
            "navigator.tts"
        ]
    },
    {
        "file": "plugins/com.wordsbaking.cordova.tts/www/tts.js",
        "id": "com.wordsbaking.cordova.tts.tts",
        "clobbers": [
            "TTS"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.insomnia/www/Insomnia.js",
        "id": "nl.x-services.plugins.insomnia.Insomnia",
        "clobbers": [
            "window.plugins.insomnia"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.plugin.tts": "0.2.1",
    "com.wordsbaking.cordova.tts": "0.2.1",
    "nl.x-services.plugins.insomnia": "4.0.1"
}
// BOTTOM OF METADATA
});