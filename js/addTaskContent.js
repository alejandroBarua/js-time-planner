import { addContent } from "./main.js";

export default function addTaskContent() {
    
    const $addTaskBtn = document.querySelector(".addTask-btn"),
        $addTask = document.querySelector(".addTask");

    const addHide = () => {
        $addTask.innerHTML = "";
        const $editPrev = document.querySelector(".edit");
        if($editPrev) $editPrev.classList.remove("edit");
    }

    $addTaskBtn.addEventListener("click", e => {
        
        $addTask.classList.toggle("addTaskActive");
        if($addTaskBtn.classList.contains("active")) return addHide(); 
        addContent();
        const $inputText = document.querySelector(".name-input");
        $inputText.focus();
    });

    document.addEventListener("keydown", e => {
        
        if(e.keyCode == 27 && $addTaskBtn.classList.contains("active")){
        
            $addTaskBtn.classList.remove("active");
            $addTask.classList.remove("addTaskActive");
            addHide();
            const $editPrev = document.querySelector(".edit");
            if($editPrev) $editPrev.classList.remove("edit");
        }
    });
}