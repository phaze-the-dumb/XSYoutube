const { XSNotification, XSNotifier } = require('xsnotifier');
const { Client } = require('node-osc');
const http = require('http');

let notifier = new XSNotifier();
let prevSong = '';
let newSongNotifs = false;
let vrcSupport = false;

const client = new Client('127.0.0.1', 9000);

http.createServer((req, res) => {
    let text = decodeURIComponent(req.url.split('/?')[1]);
    if(!text)return;

    if(prevSong !== text){
        prevSong = text;

        if(vrcSupport){
            client.send('/chatbox/input', [ '♫ ' + prevSong.split('(')[0].split('[')[0].trim(), true ], () => {
                console.log('Updated VRC');
            });
        }

        notifier.SendNotification(new XSNotification({
            Title: text.split('(')[0].split('[')[0].trim(),
            MessageType: 2
        })).then(() => { console.log('Updated Music: \n'+text) })

        if(newSongNotifs){
            notifier.SendNotification(new XSNotification({
                Title: text.split('(')[0].split('[')[0].trim(),
                Volume: 0.2
            })).then(() => {})
        }
    }

    res.end('yes');
}).listen(8053);

// vrc shit
if(vrcSupport){
    setInterval(() => {
        client.send('/chatbox/input', [ '♫ ' + prevSong.split('(')[0].split('[')[0].trim(), true ], () => {
            console.log('Updated VRC');
        });
    }, 10000);
}