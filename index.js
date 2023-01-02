const { XSNotification, XSNotifier } = require('xsnotifier');
const http = require('http');

let notifier = new XSNotifier();
let prevSong = '';
let newSongNotifs = false;

http.createServer((req, res) => {
    let text = decodeURIComponent(req.url.split('/?')[1]);
    if(!text)return;

    notifier.SendNotification(new XSNotification({
        Title: text,
        MessageType: 2
    })).then(() => { console.log('Updated Music: \n'+text) })

    if(prevSong !== text && newSongNotifs){
        prevSong = text;

        notifier.SendNotification(new XSNotification({
            Title: text,
            UseBase64Icon: true,
        })).then(() => {})
    }

    res.end('yes');
}).listen(8053);