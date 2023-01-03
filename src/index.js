import './modules/style.css';
import { State } from './modules/state';
import { LocalStorage } from './modules/localStorage';
import { render } from './modules/UI';

// sync model to DB
State.readCategories()
State.readToDo()
// LocalStorage.setStorage('ToDo',)
// populate model if empty
if (!State.readCategories()) {
    State.createCategories({ name:'personal' })
}
if (!State.readToDo()) {
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'Trials' })
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'Trials2' })
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'Trials3' })
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'Trials4', dueDate:20221229 })
}


// bind events
const controller = ()=>{
    console.log('controller')
    // render DOM
    render()

    // bind events
    document.querySelector('.Footer').addEventListener('pointerdown', (e)=>{
        document.querySelectorAll('.Footer > *').forEach(element=>{
            console.log(element.classList)
            element.classList.remove('active')
        })
        e.target.classList.add('active')
    })

    document.querySelectorAll('.task-checkmark').forEach(element=>{
        element.addEventListener('pointerdown', (e)=>{
            const node = document.querySelector(`[data-uuid='${e.target.dataset.uuid}'] ~ div`)
            if (node.classList.contains('done-task')){
                node.classList.remove('done-task')
                State.updateToDo({ UUID:e.target.dataset.uuid, status:'queue' })
            } else {
                node.classList.add('done-task')
                State.updateToDo({ UUID:e.target.dataset.uuid, status:'end' })
            }
            controller()
        })
    })
}

controller()