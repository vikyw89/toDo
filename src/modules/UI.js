import { formatISO, add } from "date-fns"
import { TaskSuggestions } from "./helper"
import { State } from "./state"

class UI {
    static nav = 'task'
    static taskDueDate = null

    static render = () => {
        const content = document.querySelector('#content')
        switch (true){
            default:
                content.innerHTML = `
                    ${this.Header()}
                    ${this.Main()}
                    ${this.Footer()}
                `
                break
            case UI.nav === 'addTask':
                content.innerHTML =`
                    ${this.AddTask()}
                    ${this.AutoSuggestions()}
                `
                break
        }
        document.querySelector(`.nav-${UI.nav}`).classList.add('active')
    }

    static EditTask = ({ UUID, categoriesUUID, title, description, dueDate, priority , status }) => {
        return `
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
    }
    
    static Header = () => {
        return `
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
    }

    static Footer = () => {
        setTimeout(()=>{
            document.querySelector('.nav-task').addEventListener('click', ()=>{
                UI.nav = 'task'
                UI.render()
            })
        },100)
        return `
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
    }

    static Main = () => {
        return `
        <div class='Main'>
            ${this.Task()}
        </div>
        `
    }

    static AddTaskButton = () => {
        setTimeout(()=>{
            document.querySelector('.AddTaskButton').addEventListener('click', ()=>{
                UI.nav = 'addTask'
                UI.render()
            })
        },100)
        return `
        <div class='AddTaskButton'>
            <span class="material-symbols-outlined">
                add_circle
            </span>
        </div>
        `
    }

    static Calendar = () => {
        return `
        <div class='Calendar'>

        </div>
        `
    }

    static Task = () => {
        setTimeout(()=>{
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
        },100)
        const date = new Date()
        const today = formatISO(date, { representation: 'date' })
        const tomorrow = formatISO(add(date, {days:1}), { representation: 'date'})

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
        return `
        <div class='Task'>
            <div class='task-category'>
                <div class='today'>Today</div>
                <span class="material-symbols-outlined add-task" data-key='today'>
                    add
                </span>
            </div>
            <div class='task-list-today'>
                ${todayToDoList.map(element=>{
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
    }

    static AddTask = () => {
        setTimeout(()=>{
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
                UI.nav = 'task'
                UI.render()
            })
            document.querySelector('.AddTaskInput > span:last-child').addEventListener('click', ()=>{
                const input = document.querySelector('.AddTaskInput > input')
                State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:input.value ,dueDate:UI.taskDueDate })
                console.log(State.readToDo())
                UI.nav = 'task'
                UI.taskDueDate = null
                UI.render()
            })
        },100)
        return `
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
    }

    static AutoSuggestions = (arg) => {
        setTimeout(()=>{
            document.querySelectorAll('.AutoSuggestionItem').forEach(item=>{
                item.addEventListener('click', (e)=>{
                    const autoComplete = e.currentTarget.querySelector('span:last-child').textContent
                    const input = document.querySelector('.AddTaskInput > input')
                    input.value = autoComplete + ' '
                    input.focus()
                })
            })
        },100)
        const childNodes = Object.entries(TaskSuggestions.inputCheck(arg))
        return `
        <div class="AutoSuggestions">
            ${childNodes.map(([key,value])=>{
                return this.AutoSuggestionItem({ key, value })
            }).join('')}
        </div>
        `
    }

    static AutoSuggestionItem = ({ key, value }) =>{
        return `
        <div class="AutoSuggestionItem">
            ${value}
            <span>${key}</span>
        </div>
        `
    }
    static TaskCard = ({ title, UUID , status}) => {
        setTimeout(()=>{
            document.querySelector(`.card-title[data-uuid='${UUID}']`).addEventListener('click', ()=>{
                const toDo = State.readToDo().filter(item=>{
                    return item.UUID === UUID
                })
                document.querySelector('.Main').innerHTML =`
                    ${this.EditTask(toDo[0])}
                `
                document.querySelector(`.nav-${UI.nav}`).classList.remove('active')
            })
            
            document.querySelector(`input[data-uuid='${UUID}']`).addEventListener('click', ()=>{
                const node = document.querySelector(`div[data-uuid='${UUID}']`)
                const toDo = State.readToDo().filter(item=>{
                    return item.UUID === UUID
                })
                if (toDo[0].status === 'queue') {
                    State.updateToDo({ UUID, status:'end' })
                } else {
                    State.updateToDo({ UUID, status:'queue' })
                }
                UI.render()
            })

        },100)
        const node = document.createElement('div')
        const done = status === 'end' ? 'done-task' : null
        const checked = !done ? null : 'checked'
        return `
        <div class='TaskCard'>
            <input type='checkbox' class='task-checkmark' ${checked} data-UUID='${UUID}'></input>
            <div class='card-title ${done}' data-UUID='${UUID}'>${title}</div>
        </div>
        `
    }
}

export {
    UI
}