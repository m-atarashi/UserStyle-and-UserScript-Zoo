// ==UserScript==
// @name         Scrapbox Backgound Slideshow
// @namespace    https://github.com/m-atarashi/UserStyle-Zoo/tree/main/Scrapbox
// @version      1.1
// @description  An implementation of background image slideshow on scrapbox.io.
// @author       m-atarashi
// @match        https://scrapbox.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=scrapbox.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict'

    // image files of Twiter, Gyazo, Google Photo and etc. are available. Pixiv is not so.
    const BG_URLS = [
        {"description": "sample hoge", "url": "https://sample.com/image1.jpg"},
        {"description": "sample hoge", "url": "https://sample.com/image2.jpg"},
        {"description": "sample hoge", "url": "https://sample.com/image3.jpg"},
    ];
    
    // interval of slideshow (ms)
    const BG_INTERVAL = 60000

    const get_bg_url_rand = (bg_urls) => {
        const i = Math.floor(Math.random() * bg_urls.length)
        return bg_urls[i].url
    }
    const change_bg = url => document.querySelector(`:root`).style.setProperty(`--stylus-bg-url`, `url(${url})`)

    let img = new Image()
    img.src = get_bg_url_rand(BG_URLS)
    setInterval(() => {
        change_bg(img.src)
        img.src = get_bg_url_rand(BG_URLS)
    }, BG_INTERVAL)
})()
