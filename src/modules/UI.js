import { LocalStorage } from "./localStorage"
import { State } from "./state"

const render = () => {
    const content = document.querySelector('#content')
    console.log('init')
    content.innerHTML = ''
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
        <div class='Main'>
            ${Task()}  
        </div>
    `
    return node.innerHTML
}

const Task = () => {
    const node = document.createElement('div')
    const today = `${new Date().getFullYear()}${new Date().getMonth()+1}${new Date().getDate()}`
    const tomorrow = `${new Date().getFullYear()}${new Date().getMonth()+1}${new Date().setDate(new Date().getDate()+1)}`
    const todayToDoList = State.readToDo().filter(element=>{
        return (element.dueDate === today && element.status !== 'end')
    })
    const tomorrowToDoList = State.readToDo().filter(element=>{
        return (element.dueDate === tomorrow && element.status !== 'end')
    })
    const upcomingToDoList = State.readToDo().filter(element=>{
        return (element.dueDate !== today && element.dueDate !== tomorrow && element.dueDate && element.status !== 'end')
    })
    const somedayToDoList = State.readToDo().filter(element=> {
        return (element.dueDate === null && element.status !== 'end')
    })
    const archives = State.readToDo().filter(element=>{
        return element.status === 'end'
    })
    node.innerHTML =`
        <div class='Task'>
            <div class='task-category'>
                <div class='today'>Today</div>
                <span class="material-symbols-outlined add-task" data-key='today'>
                    add
                </span>
            </div>
            <div class='task-list-today'>
                ${todayToDoList.map(element=>{
                    return TaskCard({title:element.title, UUID:element.UUID})
                }).join('')}
            </div>
            <div class='task-category'>
                <div class='tomorrow'>Tomorrow</div>
                <span class="material-symbols-outlined add-task" data-key='tomorrow'>
                    add
                </span>
            </div>
            <div class='task-list-tomorrow'>
                ${tomorrowToDoList.map(element=>{
                    return TaskCard({title:element.title, UUID:element.UUID})
                }).join('')}
            </div>
            <div class='task-category'>
                <div class='upcoming'>Upcoming</div>
                <span class="material-symbols-outlined add-task" data-key='upcoming'>
                    add
                </span>
            </div>
            <div class='task-list-upcoming'>
                ${upcomingToDoList.map(element=>{
                    return TaskCard({title:element.title, UUID:element.UUID})
                }).join('')}
            </div>
            <div class='task-category'>
                <div class='someday'>Someday</div>
                <span class="material-symbols-outlined add-task" data-key='someday'>
                    add
            </span>
            </div>
            <div class='task-list-someday'>
                ${somedayToDoList.map(element=>{
                    return TaskCard({title:element.title, UUID:element.UUID})
                }).join('')}
            </div>
            <div class='task-category'>
            <div class='archives'>Archives</div>
            <span class="material-symbols-outlined add-task" data-key='archives'>
                add
            </span>
            </div>
            <div class='task-list-archives'>
                ${archives.map(element=>{
                    return TaskCard({title:element.title, UUID:element.UUID, status:element.status})
                }).join('')}
            </div>
        </div>  
    `
    return node.innerHTML
}

const TaskCard = ({ title, UUID , status}) => {
    const node = document.createElement('div')
    const done = status === 'end' ? 'done-task' : null
    const checked = !done ? null : 'checked'
    node.innerHTML =`
        <div class='TaskCard'>
            <input type='checkbox' class='task-checkmark' ${checked} data-UUID='${UUID}'></input>
            <div class='card-title ${done}'>${title}</div>
        </div>
    `
    return node.innerHTML
}

export {
    render
}