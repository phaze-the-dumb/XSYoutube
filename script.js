// ==UserScript==
// @name        XSOverlay Youtube - youtube.com
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/watch
// @grant       none
// @version     1.0
// @author      Phaze#6193
// @description 02/01/2023, 15:18:26
// ==/UserScript==

setInterval(() => {
    fetch('http://localhost:8053?'+document.querySelector('h1.ytd-watch-metadata').innerText)
}, 2500)