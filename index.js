const { XSNotification, XSNotifier } = require('xsnotifier');
const http = require('http');

let notifier = new XSNotifier();

http.createServer((req, res) => {
    let text = decodeURIComponent(req.url.replace('/?', ''));
    if(!text)return;

    notifier.SendNotification(new XSNotification({
        Title: text,
        MessageType: 2
    })).then(data => { console.log('Updated Music: \n'+text) })

    res.end('yes');
}).listen(8053);