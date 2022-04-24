// ==UserScript==
// @name         Auto Login sso.fun.ac.jp
// @namespace    https://github.com/m-atarashi/UserStyle-Zoo/new/main/HOPE
// @version      0.1
// @description  auto login sso.fun.ac.jp
// @author       m-atarashi
// @match        https://sso.fun.ac.jp/my.policy
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fun.ac.jp
// @grant        none
// ==/UserScript==

(function() {
   /* スマートな方法知りたい…… */
   setTimeout(() => document.querySelector(`#auth_form`).submit(), 1500)
})()
