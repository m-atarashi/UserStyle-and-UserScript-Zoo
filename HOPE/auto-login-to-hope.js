// ==UserScript==
// @name         auto-login-to-hope
// @namespace    https://github.com/m-atarashi/UserStyle-and-UserScript-Zoo/tree/main/HOPE
// @version      0.1
// @description  Login to HOPE automatically.
// @author       m-atarashi

// @match        https://hope.fun.ac.jp
// @match        https://hope.fun.ac.jp/local/hope/login.php*
// @match        https://sso.fun.ac.jp/my.policy

// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(() => {
    'use strict'

    async function automaticLogin() {
        const cred = await navigator.credentials.get({ password: true })

        document.querySelector(`#auth_form input[name="username"]`).value = cred.id
        document.querySelector(`#auth_form input[name="password"]`).value = cred.password
        document.querySelector(`#auth_form`).submit()
    }

    void (async function main () {
        const loginPagePattern = /https:\/\/hope\.fun\.ac\.jp(\/local\/hope\/login\.php.*)?/
        if (location.href.match(loginPagePattern)) {
            location.href = 'https://hope.fun.ac.jp/auth/saml2/login.php?idp=1bec319bca7458548c77d545a2a1b3de'
        } else if (location.href === 'https://sso.fun.ac.jp/my.policy') {
            automaticLogin()
        }
    })()
})()
