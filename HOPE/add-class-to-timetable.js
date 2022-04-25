// ==UserScript==
// @name         add-class-to-timetable
// @namespace    https://github.com/m-atarashi/UserStyle-and-UserScript-Zoo/tree/main/HOPE
// @version      0.2
// @description  Add custom classes to hope timetable.
// @author       m-atarashi
// @match        https://hope.fun.ac.jp/my*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fun.ac.jp
// @grant        none
// ==/UserScript==


(() => {
    'use strict'

    function waitForElement(selector, intervalms) {
        return new Promise((resolve, reject) => {
            setInterval(() => {
                const element = document.querySelector(selector)
                if (element !== null) resolve(element)
                else console.log('まだにぇ？')
            }, intervalms)
        })
    }

    async function addClassToTimetable(day, unit, class_name, class_url) {
        const tmp = document.createElement('div')
        tmp.innerHTML = `<div class="hopemod__CourseCard" draggable="true"><a href="${class_url}">${class_name}</a></div>`
        const classElement = tmp.firstElementChild

        const referenceNodeSelector = `.hopemod__TimeTable td[data-day-index="${day-1}"][data-unit-index="${unit-1}"]`
        await waitForElement(referenceNodeSelector, 100)
            .then(referenceNode => referenceNode.insertBefore(classElement, referenceNode.firstchild))
    }

    /* examples */
    addClassToTimetable(1, 1, '朝活', 'https://example.com/')
    addClassToTimetable(1, 6, '残業', 'https://example.com/')
    addClassToTimetable(2, 6, '残業', 'https://example.com/')
    addClassToTimetable(3, 6, '残業', 'https://example.com/')
    addClassToTimetable(4, 6, '残業', 'https://example.com/')
    addClassToTimetable(5, 6, '残業', 'https://example.com/')
})()
