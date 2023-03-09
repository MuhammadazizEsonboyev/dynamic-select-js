import { countries } from "./countries.js"

let select = document.querySelector("select")

select.innerHTML = countries.map((res) => {
    return `<option class="options">${res.name}</option>`
})
