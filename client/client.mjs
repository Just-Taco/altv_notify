// alt:V built-in module that provides client-side API.
import * as alt from 'alt-client';

const webView = new alt.WebView('resource/client/html/ui.html');

// Listen for 'server:notify' event from the server
alt.onServer('server:notify', (msg, time, type) => {
    webView.emit('notify', msg, time, type);
});

// Listen for 'notify' event from the alt:V client
alt.on('client:notify', (msg, time, type) => {
    webView.emit('notify', msg, time, type);
  });
  