// ==UserScript==
// @name        XSOverlay Youtube - youtube.com
// @description Shows your youtube currently playing in XSOverlay
// @author      Phaze#6193
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/watch
// @grant       none
// @version     1.0
// ==/UserScript==

setInterval(() => {
    fetch('http://localhost:8053?'+document.querySelector('h1.ytd-watch-metadata').innerText)
}, 2500)