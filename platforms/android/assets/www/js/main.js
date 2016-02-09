/**
 * Documentation: https://www.npmjs.com/package/cordova-plugin-apiai
 */


/**
 * App
 */

var App = {};


/**
 * CONFIGURATION
 */

var config = {
    SUBSCRIPTION_KEY: 'd3709222-1ad8-4822-9516-09514307a2ab',
    CLIENT_ACCESS_TOKEN: '0cf6321f96df472b962ce9275c6cf1f6',
    LANG: 'ru',
    INIT_ERROR_MSG: 'Error initializing speech recognition engine'
}


/**
 * INITIALIZATION
 */

function init() {

    App.viewport = document.getElementById('viewport');

    ApiAIPlugin.init(
        {
            subscriptionKey: config.SUBSCRIPTION_KEY,
            clientAccessToken: config.CLIENT_ACCESS_TOKEN,
            lang: config.LANG
        }, 
        function(result) {
            start();
        },
        function(error) {
            showInitError();
        }
    );

}


/**
 * STARTUP
 */

function start() {

    App.viewport.innerHTML = '<div id="text_list"><div></div></div><div id="listening">Listening...</div><div id="processing">Processing...</div><div id="tap">Tap to speak</div><div class="engine">Using engine ApiAI</div>';

    App.text_list = App.viewport.childNodes[0],
    App.text_list_inner = text_list.firstChild,
    App.listening = App.viewport.childNodes[1],
    App.processing = App.viewport.childNodes[2],
    App.tap = App.viewport.childNodes[3];

    ApiAIPlugin.setListeningFinishCallback(function() {
        App.listening.style.display = '';
        App.processing.style.display = 'block';
    });

    tap.onclick = function() {
        App.listen();
    }

}


/**
 * LISTEN
 */

App.listen = function() {

    App.processing.style.display = '';
    App.listening.style.display = 'block';

    try {     
      ApiAIPlugin.requestVoice(
        {}, // empty for simple requests, some optional parameters can be here 
        function (result) {
            console.info('Success', result);
            App.addText(result.result.resolvedQuery);
            App.processing.style.display = '';
            App.listening.style.display = '';
        },
        function (result) {
            console.info('Fail', result);
            App.addText('<em>Could not recognize</em>');
            App.processing.style.display = '';
            App.listening.style.display = '';
        });                
    } catch (e) {
        console.info('Error', e);
        App.addText('<em>An error happened</em>');
        App.processing.style.display = '';
        App.listening.style.display = '';
    }

}


/**
 * ADD TEXT
 */

App.addText = function(text) {
        App.text_list_inner.innerHTML += '<div class="last">' + text + '</div>';
        App.text_list.scrollTop = App.text_list_inner.offsetHeight;
        window.setTimeout(function() {
            App.text_list_inner.lastChild.className = '';
        }, 500);
    }


/**
 * INIT ERROR MESSAGE
 */

function showInitError() {
    
    App.viewport.innerHTML = '<div class="msg">' + config.INIT_ERROR_MSG + '</div>';
    var msg = App.viewport.childNodes[0];
    msg.style.top = (App.viewport.offsetHeight / 2) - (msg.offsetHeight / 2) + 'px';
}

document.addEventListener('deviceready', init, false);