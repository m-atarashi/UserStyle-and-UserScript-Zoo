(() => {
const url_stems = Array.from(document.querySelector(".images-grid-view").getElementsByClassName("view-operation")).map(e => `https://i.gyazo.com${e.attributes.href.textContent}`)
const exts = Array.from(document.querySelector(".images-grid-view").getElementsByClassName("thumb loaded")).map(e => e.attributes.src.textContent.slice(-7,-4))

const urls = url_stems.map((e, i) =>`${e}.${exts[i]}`)
const titles = Array.from(document.querySelector(".images-grid-view").getElementsByClassName("metadata")).map(e => e.innerHTML)

const bgs = urls.map((e, i) => `{"description": "${titles[i]}", "url": "${e}"}`)

console.log(bgs)
})()
