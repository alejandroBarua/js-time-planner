import pointTime from "./point.js";
import  { newTask , deleteTask} from "./newAndDeleteTask.js";
import  {colorSelect} from "./newAndDeleteTask.js";


document.addEventListener("DOMContentLoaded", e => {
    newTask(".add-btn");
    deleteTask(".delete-btn");

});


pointTime();
