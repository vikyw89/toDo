import { formatISO, add } from "date-fns"
import { TaskSuggestions } from "./helper"
import { State } from "./state"

class UI {
    static nav = 'task'
    static dragged
    static activeCategory = null
    static render = () => {
        const content = document.querySelector('#content')
        switch (UI.nav){
            default:
                content.innerHTML = `
                    ${this.Header()}
                    ${this.Main()}
                    ${this.Footer()}
                `
                break
            case UI.nav === 'categories':
                content.innerHTML = `
                    ${this.SearchTask()}
                    ${this.Categories()}
                `
                break
        }
        content.innerHTML += `
        <style>
            #content {
                display: flex;
                flex-direction: column;
                z-index: 0;
            }

            .active {
                font-weight: bolder;
                color: var(--darkreader-selection-background2);
                box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
            }
        </style>
        `
        document.querySelector(`.nav-${UI.nav}`).classList.add('active')
    }

    static Categories = () => {
        return `
        `
    }
    static SearchTask = () => {
        return `
        <div class="SearchTask pizza">
            <span class="material-symbols-outlined">
                search
            </span>
            <input placeholder="Search for tasks, events, etc..."></input>
        </div>
        `
    }

    static EditTask = ({ UUID, categoriesUUID, title, dueDate, priority , status }) => {
        setTimeout(()=>{
            // cache DOM
            const titleElement = document.querySelector('.EditTask > .title')
            const dueDateElement = document.querySelector('.EditTask > .dueDate')
            const categoryElement = document.querySelector('.EditTask > .category')
            const saveButton = document.querySelector('.EditTask > .header > .save')
            const priorityElement = document.querySelector('.EditTask > .priority')
            const statusElement = document.querySelector('.EditTask > .status')
            const deleteButton = document.querySelector('.EditTask > .delete')

            saveButton.addEventListener('click',()=>{
                // get all data and update the database
                const updatedDueDate = dueDateElement.value
                const updatedTitle = titleElement.innerText
                const updatedPriority = priorityElement.value
                const updatedStatus = statusElement.value
                const updatedCategory = State.readCategories().filter(item=>{
                    return item.UUID === categoryElement.dataset.uuid
                })[0]

                State.updateToDo({ UUID, categoriesUUID:updatedCategory, title:updatedTitle, dueDate:updatedDueDate, priority:updatedPriority , status:updatedStatus})
                this.render()
            })

            deleteButton.addEventListener('click', ()=>{
                // delete data in model
                State.deleteToDo({ UUID: UUID})
                this.render()
            })

        })
        return `
        <div class="EditTask">
            <div class="header">
                <span>TASK DETAILS</span>
                <span class="save">Save</span>
            </div>
            <div class="title" contenteditable>
                ${title}
            </div>
            <label for="date">Due Date</label>
            <input name="date" type="date" class="dueDate" placeholder="yyyymmdd" value="${dueDate}"/>
            <label for="priority">Priority</label>
            <select name="priority" class="priority">
                <option value="high" ${priority === 'high' && 'selected'}>High</option>
                <option value="medium" ${priority === 'medium' && 'selected'}>Medium</option>
                <option value="low" ${priority === 'high' && 'selected'}>Low</option>
            </select>
            <label for="category">Category</label>
            <select name="category" class="category">
                ${State.readCategories().map(item=>{
                    return `<option value="${item.name}" data-UUID="${item.uuid}">${item.name}x</option>`
                }).join('')}
            </select>
            <label for="status">Status</label>
            <select name="status" class="status">
                <option value="queue" ${status === 'queue' && 'selected'}>Queue</option>
                <option value="progress" ${status === 'progress' && 'selected'}>Progress</option>
                <option value="end" ${status === 'end' && 'selected'}>Done</option>
            </select>
            <button class="delete">Delete Task</button>
        </div>
        <style>
            
        </style>
        `
    }
    
    static Header = () => {
        setTimeout(()=>{
            document.querySelector('.nav-categories').addEventListener('click',()=>{
                UI.nav = 'categories'
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
        },0)

        return `
        <div class='Header'>
            <span class="material-symbols-outlined nav-categories">
                apps
            </span>
            <div class='activeCategory'>${UI.activeCategory ? this.activeCategory.name : 'All Task'}</div>
            <span class="material-symbols-outlined nav-notif">
                circle_notifications
            </span>
            <span class="material-symbols-outlined nav-sort">
                sort
            </span>
        </div>
        <style>
            .Header {
                display: grid;
                grid-template-columns: 2fr 4fr 1fr 1fr;
                background-color: var(--darkreader-neutral-background);
                z-index: 3;
            }
            
            .Header > * {
                padding: 15px;
                padding-top: 20px;
                box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
            }

            .nav-sort, .nav-notif {
                text-align: end;
            }

            .activeCategory {
                text-align: center;
                font-weight: bolder;
                font-size: 1.3rem;
            }
        </style>
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
        })
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
        <style>
            .Footer {
                position: fixed;
                bottom: 0;
                left: 0px;
                width: 100%;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                text-align: center;
                background-color: var(--darkreader-neutral-background);
                z-index: 10;
            }
            
            .Footer > * {
                padding: 10px;
                padding-bottom: 20px;
                box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
                z-index: 5;
            }
        </style>
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
        })
        return `
        <div class='AddTaskButton'>
            <span class="material-symbols-outlined nav-addTask">
                add_circle
            </span>
        </div>
        <style>
            .AddTaskButton {
                position: fixed;
                bottom: 80px;
                right: 30px;
                font-size: 3rem;
                scale: 3;
                z-index: 10;
            }
        </style>
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
                    // if (event.target.closest(".drop-container")) {
                    //     event.target.classList.remove("dragover");
                    //     event.target.closest(`.drop-container`).appendChild(this.dragged)
                    // }
                    console.log(event.target.closest(".drop-container").dataset)
                    State.updateToDo(State.readToDo()
                        .filter(item => {
                            return item.UUID === this.dragged.dataset.uuid
                            if (item.UUID === this.dragged.dataset.uuid){
                                const target = event.target.closest(".drop-container")
                                item.dueDate = target.dataset.duedate
                                item.status = target.dataset.status
                            }
                        })
                        .map(item => {
                            const target = event.target.closest(".drop-container")
                            item.dueDate = target.dataset.duedate === "null"
                                ? null
                                : target.dataset.duedate
                            item.status = target.dataset.status
                            return item
                        })
                    )
                    this.render()
                });
            });
        },0)
        const date = new Date()
        const today = formatISO(date, { representation: 'date' })
        const tomorrow = formatISO(add(date, {days:1}), { representation: 'date'})
        const upcoming = formatISO(add(date, {days:7}), { representation: 'date'})
        const someday = null

        const filteredTask = State.readToDo().filter(element=>{
            if (this.activeCategory) {
                return this.activeCategory.UUID === element.UUID
            } else {
                return element
            }
        })  

        const todayToDoList = filteredTask.filter(element=>{
            return (element.dueDate === today && element.status !== 'end')
        })
        const tomorrowToDoList = filteredTask.filter(element=>{
            return (element.dueDate === tomorrow && element.status !== 'end')
        })
        const upcomingToDoList = filteredTask.filter(element=>{
            return (element.dueDate !== today && element.dueDate !== tomorrow && element.dueDate && element.status !== 'end')
        })
        const somedayToDoList = filteredTask.filter(element=> {
            return (element.dueDate === null && element.status !== 'end')
        })
        const archives = filteredTask.filter(element=>{
            return element.status === 'end'
        })
        return `
        <div class='Task'>
            <div class='task-list-today drop-container' data-dueDate="${today}" data-status="queue">
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
            <div class='task-list-tomorrow drop-container' data-dueDate="${tomorrow}" data-status="queue">
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
            <div class='task-list-upcoming drop-container' data-dueDate="${upcoming}" data-status="queue">
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
            <div class='task-list-someday drop-container' data-dueDate="${someday}" data-status="queue">
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
            <div class='task-list-archives drop-container' data-status="end">
                <div class='task-category'>
                <div class='archives'>Archives</div>
                </div>
                ${archives.map(element=>{
                    return this.TaskCard({title:element.title, UUID:element.UUID, status:element.status})
                }).join('')}
            </div>
        </div>
        ${this.AddTaskButton()}
        <style>
            .task-list-today,
            .task-list-tomorrow,
            .task-list-upcoming,
            .task-list-someday {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap:1px;
            }

            .task-category {
                padding:10px;
                font-weight: bold;
                font-size: 24px;
                display: flex;
                justify-content: space-between;
                color: var(--darkreader-selection-background2);
            }
            .drop-container:has(.dragover) {
                /* border: 2px dashed white; */
                transition:0.3s;
                /* filter:brightness(3); */
                filter:brightness(2);
                color:var(--darkreader-selection-background2)
            }
        </style>
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
                UI.nav = 'task'
                UI.render()
            })

        })
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
        <style>
            .AddTask {
                background-color: var(--darkreader-neutral-background);
            }
            
            .AddTaskInput {
                display: flex;
                align-items: center;
                font-size: 1.2rem;
                margin: 10px;
                background-color: var(--darkreader-neutral-background);
                gap:10px;
            }
            
            .AddTaskInput > input {
                background-color: var(--darkreader-neutral-background);
                color: var(--darkreader-neutral-text);
                flex: 1;
                font-size: 1.2rem;
                border: none;
                outline: none;
            }
            
            .AddTaskInput > span:last-child {
                color: var(--darkreader-selection-background2);
                font-weight: bolder;
            }
        </style>
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
        })
        const childNodes = Object.entries(TaskSuggestions.inputCheck(arg))
        return `
        <div class="AutoSuggestions">
            ${childNodes.map(([key,value])=>{
                return this.AutoSuggestionItem({ key, value })
            }).join('')}
        </div>
        <style>
            .AutoSuggestions {
                display: grid;
                padding: 10px;
                gap:20px;
                background-color: var(--darkreader-neutral-background);
                min-height: 100vh;
                align-content: flex-start;
            }
        </style>
        `
    }

    static AutoSuggestionItem = ({ key, value }) =>{
        return `
        <div class="AutoSuggestionItem">
            ${value}
            <span>${key}</span>
        </div>
        <style>
            .AutoSuggestionItem {
                display: flex;
                gap: 10px;
            }

            .AutoSuggestionItem > span:first-child {
                color: var(--darkreader-selection-background2);
                font-weight: bolder;
            }
        </style>
        `
    }

    static TaskCard = ({ title, UUID , status}) => {
        setTimeout(()=>{
            // cache DOM
            const taskTitle = document.querySelector(`.card-title[data-uuid='${UUID}']`)
            const checkBox = document.querySelector(`input[data-uuid='${UUID}']`)
            const deleteButton = document.querySelector(`.TaskCard > .delete[data-uuid='${UUID}']`)
            const dragTarget = document.querySelector(`.TaskCard[data-uuid="${UUID}"]`)
            
            // Edit Task
            taskTitle.addEventListener('click', ()=>{
                const toDo = State.readToDo().filter(item=>{
                    return item.UUID === UUID
                })
                document.querySelector('.Main').innerHTML =`
                    ${this.EditTask(toDo[0])}
                `
                document.querySelector(`.nav-${UI.nav}`).classList.remove('active')
            })
            
            //Check, uncheck task
            checkBox.addEventListener('click', ()=>{
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

            // Delete button
            if (deleteButton) {
                deleteButton.addEventListener('click',()=>{
                    State.deleteToDo({ UUID: UUID})
                    UI.render()
                })
            }

            /* events fired on the draggable target */
            
            dragTarget.addEventListener("drag", (event) => {
            });
            
            dragTarget.addEventListener("dragstart", (event) => {
                // store a ref. on the dragged elem
                this.dragged = event.target
                // make it half transparent
                event.target.classList.add("dragging");
            });
            
            dragTarget.addEventListener("dragend", (event) => {
                // reset the transparency
                event.target.classList.remove("dragging");
            });
        },0)

        const done = status === 'end' ? 'done-task' : null
        const checked = !done ? null : 'checked'
        const deleteButton = checked
            ? `
            <span class="material-symbols-outlined delete" data-UUID='${UUID}'>
                delete
            </span>
            `
            : ''
        return `
        <div class='TaskCard' data-UUID='${UUID}'  draggable="true">
            <input type='checkbox' class='task-checkmark' ${checked} data-UUID='${UUID}'></input>
            <div class='card-title ${done}' data-UUID='${UUID}'>${title}</div>
            ${deleteButton}
        </div>
        <style>
            .TaskCard {
                padding: 10px;
                z-index: 2;
                background-color: var(--darkreader-neutral-background);
                display: flex;
                gap:10px;
                font-size: 18px;
                box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
            }
            
            .done-task {
                text-decoration:line-through;
                color: var(--darkreader-done-task);
            }

            .dragging {
                opacity: 0.5;
            }

            .TaskCard > .card-title {
                flex:1;
            }
        </style>
        `
    }
}

export {
    UI
}