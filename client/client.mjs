import * as alt from 'alt-client';

const webView = new alt.WebView('resource/client/html/ui.html');

alt.onServer('server:notify', (msg, time, type) => {
    webView.emit('notify', msg, time, type);
});

alt.on('client:notify', (msg, time, type) => {
    webView.emit('notify', msg, time, type);
  });
  
