import { formatISO } from "date-fns"
import { TaskSuggestions } from "./helper"
import { LocalStorage } from "./localStorage"
import { State } from "./state"

class UI {
    static activePages = 'task'
    static taskDueDate = null
    static html = ''
    static script = []

    static render = () => {
        const content = document.querySelector('#content') 
        switch (true) {
            case UI.activePages === 'task':
                content.innerHTML = `
                ${this.Header()}
                ${this.Main()}
                ${this.Footer()}
                `
                // bind events
                if (UI.activePages === 'task') {
                    document.querySelector('.nav-task').classList.add('active')
                }
                document.querySelectorAll('.task-checkmark').forEach(element=>{
                    element.addEventListener('click', (e)=>{
                        const node = document.querySelector(`[data-uuid='${e.target.dataset.uuid}'] ~ div`)
                        if (node.classList.contains('done-task')){
                            State.updateToDo({ UUID:e.target.dataset.uuid, status:'queue' })
                        } else {
                            State.updateToDo({ UUID:e.target.dataset.uuid, status:'end' })
                        }
                        UI.render()
                    })
                })
                document.querySelectorAll('.card-title').forEach(item=>{
                    item.addEventListener('click', (e)=>{
                        const toDoUuid = e.currentTarget.dataset.uuid
                        const toDo = State.readToDo().filter(item=>{
                            return item.UUID === toDoUuid
                        })
                        console.log(toDo[0])
                        document.querySelector('.Main').innerHTML =`
                            ${this.EditTask(toDo[0])}
                        `
                    })
                    // event listener for edit task
                })
                document.querySelector('.AddTaskButton').addEventListener('click', ()=>{
                    UI.activePages = 'addTask'
                    UI.render()
                })
                document.querySelectorAll('.add-task').forEach(item=>{
                    item.addEventListener('click', (e)=>{
                        console.log(e.target.dataset.key)
                        UI.activePages = 'addTask'
                        switch (true){
                            case e.target.dataset.key === 'today':
                                UI.taskDueDate = null
                                break
                            case e.target.dataset.key === 'tomorrow':
                                UI.taskDueDate = `${new Date().getFullYear()}${new Date().getMonth()+1}${new Date().setDate(new Date().getDate()+1)}`
                                break
                        }
                        UI.render()
                    })
                })
                document.querySelector('.nav-task').addEventListener('click', ()=>{
                    UI.activePages = 'task'
                    UI.render()
                })
                break
            case UI.activePages === 'addTask':
                content.innerHTML = `
                    ${this.AddTask()}
                    ${this.AutoSuggestions()}
                `
                document.querySelectorAll('.TaskSuggestionItem').forEach(item=>{
                    item.addEventListener('click', (e)=>{
                        const autoComplete = e.currentTarget.querySelector('span:last-child').textContent
                        const input = document.querySelector('.AddTaskInput > input')
                        input.value = autoComplete + ' '
                        input.focus()
                    })
                })

                document.querySelector('.AddTaskInput > input').addEventListener('input', (e)=>{
                    document.querySelector('.AutoSuggestions').outerHTML = this.AutoSuggestions(e.target.value)
                    document.querySelectorAll('.TaskSuggestionItem').forEach(item=>{
                        item.addEventListener('click', (e)=>{
                            const autoComplete = e.currentTarget.querySelector('span:last-child').textContent
                            const input = document.querySelector('.AddTaskInput > input')
                            input.value = autoComplete + ' '
                            input.focus()
                        })
                    })
                })

                document.querySelector('.AddTaskInput > span:first-child').addEventListener('click', ()=>{
                    UI.activePages = 'task'
                    UI.render()
                })

                document.querySelector('.AddTaskInput > span:last-child').addEventListener('click', ()=>{
                    console.log('task added')
                    const input = document.querySelector('.AddTaskInput > input')
                    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:input.value ,dueDate:UI.taskDueDate })
                    console.log(State.readToDo())
                    UI.activePages = 'task'
                    UI.taskDueDate = ''
                    UI.render()
                })
                break
        }
    }

    static EditTask = ({ UUID, categoriesUUID, title, description, dueDate, priority , status }) => {
        console.log(UUID)
        const node = document.createElement('div')
        node.innerHTML =`
            <div class="EditTask">
                <div class="EditTaskHeader">
                    <span>TASK DETAILS</span>
                    <span>Save</span>
                </div>
                <div>
                    TITLE
                    ${title}
                </div>
                <div>
                    DESCRIPTION
                    ${description}
                </div>
                <div>
                    DUE DATE
                    ${dueDate}
                </div>
                <div>
                    CATEGORY
                    ${State.readCategories().filter(item=>{
                        return item.UUID === categoriesUUID
                    })[0].name}
                </div>
                <div>
                    PRIORITY
                    ${priority}
                </div>
                <div>
                    STATUS
                    ${status}
                </div>
            </div>
        `
        return node.innerHTML
    }
    
    static Header = () => {
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

    static Footer = () => {
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

    static Main = () => {
        const node = document.createElement('div')
        node.innerHTML =` 
            <div class='Main'>
                ${this.Task()}
            </div>
        `
        return node.innerHTML
    }

    static AddTaskButton = () => {
        const node = document.createElement('div')
        node.innerHTML = `
            <div class='AddTaskButton'>
                <span class="material-symbols-outlined">
                    add_circle
                </span>
            </div>
        `
        return node.innerHTML
    }

    static Calendar = () => {
        const node = document.createElement('div')
        node.innerHTML =`
            <div class='Calendar'>

            </div>
        `
        return node.innerHTML
    }

    static Task = () => {
        const node = document.createElement('div')
        const today = formatISO(new Date(), { representation: 'date' })
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
                        console.log(element)
                        return this.TaskCard({title:element.title, UUID:element.UUID})
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
                        return this.TaskCard({title:element.title, UUID:element.UUID})
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
                        return this.TaskCard({title:element.title, UUID:element.UUID})
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
                        return this.TaskCard({title:element.title, UUID:element.UUID})
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
                        return this.TaskCard({title:element.title, UUID:element.UUID, status:element.status})
                    }).join('')}
                </div>
            </div>
            ${this.AddTaskButton()}
        `
        return node.innerHTML
    }

    static AddTask = () => {
        const node = document.createElement('div')
        node.innerHTML = `
            <div class='AddTask'>
                <div class="AddTaskInput">
                    <span class="material-symbols-outlined">
                        close
                    </span>
                    <input type="text" autocomplete="on" autofocus placeholder="I want to...">
                    </input>
                    <span class="material-symbols-outlined">
                        add_task
                    </span>
                </div>
            </div>
        `
        return node.innerHTML
    }

    static AutoSuggestions = (arg) => {
        const node = document.createElement('div')
        const childNodes = Object.entries(TaskSuggestions.inputCheck(arg)).map(([key, value])=>{
            return `
            <div class="TaskSuggestionItem">
                ${value}
                <span>${key}</span>
            </div>
            `
        })
        node.innerHTML =`
            <div class="AutoSuggestions">
                ${childNodes.join('')}
            </div>
        `
        return node.innerHTML
    }

    static TaskCard = ({ title, UUID , status}) => {
        const node = document.createElement('div')
        const done = status === 'end' ? 'done-task' : null
        const checked = !done ? null : 'checked'
        node.innerHTML =`
            <div class='TaskCard'>
                <input type='checkbox' class='task-checkmark' ${checked} data-UUID='${UUID}'></input>
                <div class='card-title ${done}' data-UUID='${UUID}'>${title}</div>
            </div>
        `
        return node.innerHTML
    }

}

export {
    UI
}