import pointTime from "./point.js";
import selectBlock from "./select.js";

import defaultTask from "./defaultStask.js";
import dark from "./dark.js";
import btnActive from "./btnActive.js";
import addTaskContent from "./addTaskContent.js";
import addTask from "./add.js";

import edit from "./edit.js";
import deleteTask from "./delete.js";
import trick from "./trick.js";

import  clean from "./clean.js";
import deleteAll from "./deleteAll.js";

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
    selectBlock();
    trick();
    addTaskContent();
    clean();
    deleteAll();
});

dark();
pointTime();
defaultTask();