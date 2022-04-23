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
    'use strict';

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
    setInterval(() => {
        change_bg(img.src)
        img.src = get_bg_url_rand(BG_URLS)
    }, BG_INTERVAL)
})();


// GyazoのコレクションのBG_URLSを出力する関数
// コレクションのページを開き、ブラウザのコンソールで実行する
/*
(function() {
const url_stems = Array.from(document.querySelector(".images-grid-view").getElementsByClassName("view-operation")).map(e => `https://i.gyazo.com${e.attributes.href.textContent}`);
const exts = Array.from(document.querySelector(".images-grid-view").getElementsByClassName("thumb loaded")).map(e => e.attributes.src.textContent.slice(-7,-4));
const urls = url_stems.map((e, i) =>`${e}.${exts[i]}`);
const titles = Array.from(document.querySelector(".images-grid-view").getElementsByClassName("metadata")).map(e => e.innerHTML);
const bgs = urls.map((e, i) => `{"url": "${e}", "description": "${titles[i]}"}`);
console.log(bgs);
})()
*/
