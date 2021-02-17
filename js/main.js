import pointTime from "./point.js";
import addTask from "./addTask.js";
import deleteTask from "./deleteTask.js";
import defaultTask from "./defaultTask.js";
import validation from "./validation.js";

export function colorSelector($div) {
    
    let $divPrev = document.querySelector(".select-task");
    if($divPrev != null) $divPrev.classList.remove("select-task");
                
    $div.classList.add("select-task");
}

document.addEventListener("DOMContentLoaded", e => {
    addTask(".add-btn");
    deleteTask(".delete-btn");
    validation();
});

pointTime();
defaultTask();
