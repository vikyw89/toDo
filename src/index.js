import './modules/style.css';
import { State } from './modules/state';
import { LocalStorage } from './modules/localStorage';
import { UI } from './modules/UI';
import {polyfill} from "mobile-drag-drop";
import { formatISO } from 'date-fns';

// optional import of scroll behaviour
import {scrollBehaviourDragImageTranslateOverride} from "mobile-drag-drop/scroll-behaviour";

polyfill({
    // use this to make use of the scroll behaviour
    dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
});
// sync model to DB
State.readCategories()
State.readToDo()
LocalStorage.setStorage('ToDo',)
// populate model if empty
if (!State.readCategories()) {
    State.createCategories({ name:'personal' })
}
if (!State.readToDo()) {
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'Trials', dueDate:formatISO(new Date(), { representation: 'date' }) })
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'Trials2', dueDate:formatISO(new Date(), { representation: 'date' }) })
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'Trials3', dueDate:formatISO(new Date(), { representation: 'date' }) })
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'Trials4', dueDate:formatISO(new Date(), { representation: 'date' }) })
}
console.log(State.readToDo())
// init
UI.render()