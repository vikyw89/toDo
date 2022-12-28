import { node } from "webpack"
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
        <span class="material-symbols-outlined nav-apps">
            apps
        </span>
        <div class='Title'>Title</div>
        <span class="material-symbols-outlined nav-notif">
            circle_notifications
        </span>
        <span class="material-symbols-outlined nav-sort">
            sort
        </span>
    </div>
    `
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
        <div class='Main Task'>
            <div class='task-today'>
                <div class='task-due'>Today</div>
                ${TaskCard()}
            </div>
        </div>
    `
    return node.innerHTML
}

const TaskCard = () => {
    const node = document.createElement('div')
    node.innerHTML =`
        <div class='TaskCard'>
            <input type='radio' class='task-checkmark'></input>
            <div class='card-title'>This title</div>
        </div>
    `
    return node.innerHTML
}

export {
    init,
}