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
    node.innerHTML = `
    <div class='Categories'>
        <span class="material-symbols-outlined nav-menu">
            menu
        </span>
        <div class='Title'>Title</div>
        <span class="material-symbols-outlined nav-notif">
            circle_notifications
        </span>
        <span class="material-symbols-outlined nav-sort">
            sort
        </span>
    </div>`
    return node.innerHTML
}

const Category = (arg) => {
    const node = document.createElement('div')
    node.innerHTML = `<div class='Category' data-uuid='${arg.UUID}'>'${arg.name}'</div>`
    node.addEventListener('pointerdown', ()=>{
        
        console.log('clicked')
    })
    return node.innerHTML
}

const Footer = () => {
    const node = document.createElement('div')
    node.innerHTML = `
        <div class='Footer'>
            <span class="material-symbols-outlined nav-task">
                task_alt
            </span>
            <span class="material-symbols-outlined nav-callendar">
                calendar_month
            </span>
            <span class="material-symbols-outlined nav-settings">
                settings
            </span>
        </div>
    `
    return node.innerHTML
}

const Main = () => {
    const node = document.createElement('div')
    node.innerHTML =` 
        <div class='Main'>
        </div>
    `
    return node.innerHTML
}

export {
    init,
}