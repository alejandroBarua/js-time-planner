import pointTime from "./point.js";
import addTask from "./add.js";
import deleteTask from "./delete.js";
import defaultTask from "./defaultStask.js";
import validation from "./validation.js";
import selectBlock from "./select.js";
import defaultColors from "./defaultColors.js";
import trick from "./trick.js";

export function colorSelector($div) {
    
    let $divPrev = document.querySelector(".select-task");
    if($divPrev != null) $divPrev.classList.remove("select-task");
                
    $div.classList.add("select-task");
}

document.addEventListener("DOMContentLoaded", e => {
    addTask(".add-btn");
    deleteTask(".delete-btn");
    validation();
    selectBlock();
    defaultColors();
    trick(".trick");
});

pointTime();
defaultTask();
const $input = document.querySelector(".name-input");
$input.focus();

/* setInterval(() => {
    let $task = document.querySelector(".select-task");
    console.log($task)
    if($task != null){

        console.log($task.style.backgroundColor); 
    }
}, 1000); */