import { formatISO, add } from "date-fns"
import { TaskSuggestions } from "./helper"
import { State } from "./state"

class UI {
    static nav = 'task'
    static dragged
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
        setTimeout(()=>{
            document.querySelector('.nav-apps').addEventListener('click',()=>{
                UI.nav = 'apps'
                UI.render()
            })
            document.querySelector('.nav-notif').addEventListener('click',()=>{
                UI.nav = 'notif'
                UI.render()
            })
            document.querySelector('.nav-sort').addEventListener('click',()=>{
                UI.nav = 'sort'
                UI.render()
            })
        },100)

        return `
        <div class='Header'>
            <span class="material-symbols-outlined nav-apps">
                apps
            </span>
            <div id="title" class='Title'>Title</div>
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
            document.querySelector('.nav-calendar').addEventListener('click', ()=>{
                UI.nav = 'calendar'
                UI.render()
            })
            document.querySelector('.nav-settings').addEventListener('click', ()=>{
                UI.nav = 'settings'
                UI.render()
            })
        },100)
        return `
        <div class='Footer'>
            <span class="material-symbols-outlined nav-task">
                task_alt
            </span>
            <span class="material-symbols-outlined nav-calendar">
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
        <div class="clear"></div>
        `
    }

    static AddTaskButton = () => {
        setTimeout(()=>{
            document.querySelector('.AddTaskButton').addEventListener('click', ()=>{
                const content = document.querySelector('#content')
                const dueDate = null
                content.innerHTML =`
                    ${this.AddTask({ dueDate })}
                    ${this.AutoSuggestions()}
                `
            })
        },100)
        return `
        <div class='AddTaskButton'>
            <span class="material-symbols-outlined nav-addTask">
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
                    const date = new Date()
                    let dueDate
                    switch (true){
                        case e.target.dataset.key === 'today':
                            dueDate = formatISO(date, { representation: 'date' })
                            break
                        case e.target.dataset.key === 'tomorrow':
                            dueDate = formatISO(add(date, { days:1 }), { representation: 'date' })
                            break
                        case e.target.dataset.key === 'upcoming':
                            dueDate = formatISO(add(date, { weeks:1 }), { representation: 'date' })
                            break
                        case e.target.dataset.key === 'someday':
                            dueDate = null
                            break
                    }
                    const content = document.querySelector('#content')
                    content.innerHTML =`
                        ${this.AddTask({ dueDate })}
                        ${this.AutoSuggestions()}
                    `
                })
            })

            /* events fired on the drop targets */
            document.querySelectorAll(".drop-container").forEach(target=>{
                target.addEventListener("dragover", (event) => {
                    // prevent default to allow drop
                    event.preventDefault();
                }, false);
                  
                target.addEventListener("dragenter", (event) => {
                    event.preventDefault();
                    // highlight potential drop target when the draggable element enters it
                    // if (event.target.closest(".drop-container").classList.contains("drop-container")) {
                        event.target.classList.add("dragover");
                    // }
                });
                
                target.addEventListener("dragleave", (event) => {
                    // reset background of potential drop target when the draggable element leaves it
                    // if (event.target.closest(".drop-container").classList.contains("drop-container")) {
                        event.target.classList.remove("dragover");
                    // }
                });
                
                target.addEventListener("drop", (event) => {
                    // prevent default action (open as link for some elements)
                    event.preventDefault();
                    // move dragged element to the selected drop target
                    if (event.target.closest(".drop-container").classList.contains("drop-container")) {
                        event.target.classList.remove("dragover");
                        event.target.closest(`.drop-container`).appendChild(this.dragged)
                    }
                });
            });
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
            <div class='task-list-today drop-container'>
                <div class='task-category'>
                    <div class='today'>Today</div>
                    <span class="material-symbols-outlined add-task" data-key='today'>
                        add
                    </span>
                </div>
                ${todayToDoList.map(element=>{
                    return this.TaskCard({title:element.title, UUID:element.UUID})
                }).join('')}
            </div>
            <div class='task-list-tomorrow drop-container'>
                <div class='task-category'>
                    <div class='tomorrow'>Tomorrow</div>
                    <span class="material-symbols-outlined add-task" data-key='tomorrow'>
                        add
                    </span>
                </div>
                ${tomorrowToDoList.map(element=>{
                    return this.TaskCard({title:element.title, UUID:element.UUID})
                }).join('')}
            </div>
            <div class='task-list-upcoming drop-container'>
                <div class='task-category'>
                    <div class='upcoming'>Upcoming</div>
                    <span class="material-symbols-outlined add-task" data-key='upcoming'>
                        add
                    </span>
                </div>
                ${upcomingToDoList.map(element=>{
                    return this.TaskCard({title:element.title, UUID:element.UUID})
                }).join('')}
            </div>
            <div class='task-list-someday drop-container'>
                <div class='task-category'>
                    <div class='someday'>Someday</div>
                    <span class="material-symbols-outlined add-task" data-key='someday'>
                        add
                    </span>
                </div>
                ${somedayToDoList.map(element=>{
                    return this.TaskCard({title:element.title, UUID:element.UUID})
                }).join('')}
            </div>
            <div class='task-list-archives drop-container'>
                <div class='task-category'>
                <div class='archives'>Archives</div>
                </div>
                ${archives.map(element=>{
                    return this.TaskCard({title:element.title, UUID:element.UUID, status:element.status})
                }).join('')}
            </div>
        </div>
        ${this.AddTaskButton()}
        `
    }

    static AddTask = ({ dueDate }) => {
        setTimeout(()=>{
            const input = document.querySelector('.AddTaskInput > input')
            document.querySelector('.AddTaskInput > input').addEventListener('input', (e)=>{
                document.querySelector('.AutoSuggestions').outerHTML = this.AutoSuggestions(e.target.value)
                document.querySelectorAll('.TaskSuggestionItem').forEach(item=>{
                    item.addEventListener('click', (e)=>{
                        const autoComplete = e.currentTarget.querySelector('span:last-child').textContent
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
                State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:input.value ,dueDate })
                console.log(State.readToDo())
                UI.nav = 'task'
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

            /* events fired on the draggable target */
            const source = document.querySelector(`.TaskCard[data-uuid="${UUID}"]`)
            source.addEventListener("drag", (event) => {
            });
            
            source.addEventListener("dragstart", (event) => {
                // store a ref. on the dragged elem
                this.dragged = event.target
                // make it half transparent
                event.target.classList.add("dragging");
            });
            
            source.addEventListener("dragend", (event) => {
                // reset the transparency
                event.target.classList.remove("dragging");
            });
            
        },100)
        const node = document.createElement('div')
        const done = status === 'end' ? 'done-task' : null
        const checked = !done ? null : 'checked'
        return `
        <div class='TaskCard' data-UUID='${UUID}'  draggable="true">
            <input type='checkbox' class='task-checkmark' ${checked} data-UUID='${UUID}'></input>
            <div class='card-title ${done}' data-UUID='${UUID}'>${title}</div>
        </div>
        `
    }
}

export {
    UI
}