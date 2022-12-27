import { LocalStorage } from "./localStorage"
import { State } from "./state"

const init = () => {
    const content = document.querySelector('#content')
    content.innerHTML = `
    ${Header()}
    ${Main()}
    ${Footer()}
    `
}

const Header = () => {
    const node = document.createElement('div')
    node.innerHTML = `
        <div class='Header'>
            ${Categories()}
        </div>
    `
    return node.innerHTML
}

const Categories = () => {
    const node = document.createElement('div')
    node.innerHTML = `<div class='Categories'>`
    State.readCategories().map(item=>{
        node.innerHTML += Category(item)
    })
    node.innerHTML += `</div>`
    return node.innerHTML
}

const Category = (arg) => {
    const node = document.createElement('div')
    node.innerHTML = `<div class='Category' data-id='${arg.UUID}'>'${item.name}'</div>`
    node.addEventListener('pointerdown', ()=>{
        console.log('clicked')
    })
    return node.innerHTML
}

const Footer = () => {
    const node = document.createElement('div')
    node.innerHTML = `
        <div class='Footer'>
            <div class='NavCategories'></div>
            <div class='NavToDoList'></div>
            <div class='NavSetting'></div>
            <div class='NavDashBoard'></div>
        </div>
    `
}


const Main = () => {
    const node = document.createElement('div')
    node.innerHTML =` 
        <div class='Main'>
            <div class='Categories'>Categories</div>
            <div class='MainContent'>MainContent</div>
            <div class='Navigations'>Navigations</div>
        </div>
    `
    return node.innerHTML
}

export {
    init,
}