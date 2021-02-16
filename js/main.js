import pointTime from "./point.js";
import  { newTask , deleteTask, EventDefault} from "./addSelectDelectTask.js";
import  {colorSelect} from "./addSelectDelectTask.js";


document.addEventListener("DOMContentLoaded", e => {
    newTask(".add-btn");
    deleteTask(".delete-btn");

});


pointTime();
EventDefault();



/* setInterval(() => {
    console.log(colorSelect);
    
}, 2000); */