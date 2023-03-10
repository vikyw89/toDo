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
// LocalStorage.setStorage('ToDo')
// LocalStorage.setStorage('Categories')
// populate model if empty
if (!State.readCategories()) {
    State.createCategories({ name:'personal' })
    State.createCategories({ name:'work' })
}
if (!State.readToDo()) {
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'drag and drop task', dueDate:formatISO(new Date(), { representation: 'date' }) })
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'press check if you\'re finished with me', dueDate:formatISO(new Date(), { representation: 'date' }) })
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'you can edit me by clicking', dueDate:formatISO(new Date(), { representation: 'date' }) })
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'have fun', dueDate:formatISO(new Date(), { representation: 'date' }) })
}

// init
UI.render()