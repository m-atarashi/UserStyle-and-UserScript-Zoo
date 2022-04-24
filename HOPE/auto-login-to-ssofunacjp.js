// ==UserScript==
// @name         Auto Login sso.fun.ac.jp
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  auto login sso.fun.ac.jp
// @author       m-atarashi
// @match        https://sso.fun.ac.jp/my.policy
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fun.ac.jp
// @grant        none
// ==/UserScript==

(() => {
    function waitOnInputCompleted(inputElement, intervalms) {
        return new Promise((resolve, reject) => {
            setInterval(() => {
                if (inputElement.value !== "") resolve()
                else console.log('まだにぇ？')
            }, intervalms)
        })
    }

    async function main() {
        const authFormElement = document.querySelector('#auth_form')
        const usernameElement = authFormElement.querySelector('[name="username"]')
        const passwordElement = authFormElement.querySelector('[name="password"]')
        await waitOnInputCompleted(usernameElement, 100)
        await waitOnInputCompleted(passwordElement, 100)

        const submitElement = authFormElement.querySelector('[type="submit"]', authFormElement)
        authFormElement.submit()
    }

    main()
})()
