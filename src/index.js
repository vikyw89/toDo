import { init } from './modules/UI';
import './modules/style.css';
import { State } from './modules/state';
import { LocalStorage } from './modules/localStorage';


// LocalStorage.setStorage()
// State.createCategories('trial')
// State.createToDo({ title:'test544', categoryUUID:"a7ab90b4-417d-4998-b28a-b95bf673fa35"})
console.log(State.deleteToDo({categoryUUID:"a7ab90b4-417d-4998-b28a-b95bf673fa35", UUID:"4e8efcbc-e504-426e-979b-33e79ac98b1f"}))
console.log(State.readCategories())
init()