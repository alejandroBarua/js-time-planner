import pointTime from "./point.js";
import addTask from "./add.js";
import deleteTask from "./delete.js";
import defaultTask from "./defaultStask.js";
import validation from "./validation.js";
import selectBlock from "./select.js";
import defaultColors from "./defaultColors.js";
import trick from "./trick.js";
import edit from "./edit.js";
import btnActive from "./btnActive.js";
import dark from "./dark.js";

export function colorSelector($div) {
    
    let $divPrev = document.querySelector(".select-task");
    if($divPrev != null) $divPrev.classList.remove("select-task");
                
    $div.classList.add("select-task");

    let $first = document.querySelector(".first");
    if($first != null){

        $first.style.backgroundColor = "rgb(219, 216, 216)";
        $first.classList.remove("first");

    }
}

document.addEventListener("DOMContentLoaded", e => {
    addTask(".add-btn");
    deleteTask(".delete-btn");
    edit(".edit-btn");
    btnActive(".btnActive")
    validation();
    selectBlock();
    defaultColors();
    trick();
});

dark();
pointTime();
defaultTask();
const $input = document.querySelector(".name-input");
$input.focus();
