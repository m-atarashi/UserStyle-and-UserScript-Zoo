// ==UserScript==
// @name         Redirect to sso.fun.ac.jp automatically
// @namespace    https://github.com/m-atarashi/UserStyle-Zoo/tree/main/HOPE
// @version      0.2
// @description  redirect to sso.fun.ac.jp automatically
// @author       m-atarashi
// @match        https://hope.fun.ac.jp
// @match        https://hope.fun.ac.jp/local/hope/login.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fun.ac.jp
// @grant        none
// ==/UserScript==

(() => {
    'use strict'
    location.href = 'https://hope.fun.ac.jp/auth/saml2/login.php?idp=1bec319bca7458548c77d545a2a1b3de'
})()
