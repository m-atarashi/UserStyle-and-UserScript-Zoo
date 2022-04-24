// ==UserScript==
// @name         auto-login-to-sso.fun.ac.jp
// @namespace    https://github.com/m-atarashi/UserStyle-Zoo/tree/main/HOPE
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
                if (inputElement.value !== "") return resolve()
            }, intervalms)
        })
    }

    function waitForElement(selector, intervalms) {
        return new Promise((resolve, reject) => {
            setInterval(() => {
                const element = document.querySelector(selector)
                if (element !== null && element !== undefined) return resolve(element)
            }, intervalms)
        })
    }

    async function main() {
        const authFormElement = await waitForElement('#auth_form')
        const usernameElement = await waitForElement('input[name="username"]')
        const passwordElement = await waitForElement('input[name="password"]')

        await Promise.all([waitOnInputCompleted(usernameElement, 100), waitOnInputCompleted(passwordElement, 100)])
            .then(() => authFormElement.submit())
    }

    main()
})()
