import pointTime from "./point.js";
import  { newTask , deleteTask, EventDefault} from "./addSelectDelectTask.js";
import  {colorSelect} from "./addSelectDelectTask.js";
import validation from "./validation.js";

document.addEventListener("DOMContentLoaded", e => {
    newTask(".add-btn");
    deleteTask(".delete-btn");
    validation();
});


pointTime();
EventDefault();



/* setInterval(() => {
    console.log(colorSelect);
    
}, 2000); */