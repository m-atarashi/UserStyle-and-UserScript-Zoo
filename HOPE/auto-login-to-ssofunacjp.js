// ==UserScript==
// @name         auto-login-to-sso.fun.ac.jp
// @namespace    https://github.com/m-atarashi/UserStyle-Zoo/tree/main/HOPE
// @version      0.3
// @description  auto login sso.fun.ac.jp
// @author       m-atarashi
// @match        https://sso.fun.ac.jp/my.policy
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fun.ac.jp
// @grant        none
// ==/UserScript==

(async() => {
	const cred = await navigator.credentials.get({
		password: true
	})

	document.querySelector(`#auth_form input[name="username"]`).value = cred.id
	document.querySelector(`#auth_form input[name="password"]`).value = cred.password
	document.querySelector(`#auth_form`).submit()
})()
