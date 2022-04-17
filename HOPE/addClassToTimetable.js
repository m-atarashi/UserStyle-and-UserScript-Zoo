// ==UserScript==
// @name         HOPE TIMETABLE ADD
// @namespace    https://github.com/m-atarashi/UserStyle-Zoo/tree/main/HOPE
// @version      0.1
// @description  Add custom classes to hope timetable.
// @author       m-atarashi
// @match        https://hope.fun.ac.jp/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fun.ac.jp
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    /* ↓のコピペ！
　　　http://once-and-only.com/programing/javascript/js%E3%81%A7%E5%AF%BE%E8%B1%A1%E3%81%AEdom%E3%81%8C%E5%87%BA%E7%8F%BE%E3%81%99%E3%82%8B%E3%81%BE%E3%81%A7%E5%BE%85%E3%81%A4%EF%BC%88javascript%EF%BC%89/
   */
    function waitForElement(selector, callback, intervalMs, timeoutMs) {
        const startTimeInMs = Date.now();
        findLoop();

        function findLoop() {
            if (document.querySelector(selector) != null) {
                callback();
                return;
            } else {
                setTimeout(() => {
                    if (timeoutMs && Date.now() - startTimeInMs > timeoutMs) return;
                    findLoop();
                }, intervalMs);
            }
        }
    }

    function addClassToTimetable(day, unit, class_name, class_url) {
        const tmp = document.createElement('div');
        tmp.innerHTML = `<div class="hopemod__CourseCard" draggable="true"><a href="${class_url}">${class_name}</a></div>`;
        const child = tmp.firstElementChild;

        const parent_selector = `.hopemod__TimeTable td[data-day-index="${day-1}"][data-unit-index="${unit-1}"]`;
        waitForElement(parent_selector, () => {
            const parent = document.querySelector(parent_selector);
            parent.insertBefore(child, parent.firstchild);
        }, 100, 5000);
    }

    addClassToTimetable(1, 2, 'ラボミーティング', 'https://scrapbox.io/imlab2021/');
    addClassToTimetable(2, 6, 'GCI 2022 Summer', 'https://edu.omnicamp.us/');
})();

