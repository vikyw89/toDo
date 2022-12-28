import { init } from './modules/UI';
import './modules/style.css';
import { State } from './modules/state';

// sync model to DB
State.readCategories()
State.readToDo()

// populate model if empty
if (!State.readCategories()) {
    State.createCategories({ name:'personal' })
}
if (!State.readToDo()) {
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'Trial' })
}

// render DOM
init()


