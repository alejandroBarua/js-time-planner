import { addContent } from "./main.js";

export default function deleteAll() {
    
    const $deleteAllBtn = document.querySelector(".deleteAll-btn");

    $deleteAllBtn.addEventListener("click", e => {

        const $divTask = document.querySelector(".list-task");
        $divTask.textContent = "";

        const $blocks = document.querySelectorAll(".blocks div");
    
        if($blocks.length > 0){
            $blocks.forEach(el => {
                let nameTask = el.classList[1];
                el.classList.remove(nameTask);
                el.style.background = "var(--second-color)";
            });
        }

        localStorage.removeItem("tasks");
        localStorage.removeItem("blocks");
        
        addContent();
        
        const $addTaskBtn = document.querySelector(".addTask-btn"),
            $addTask = document.querySelector(".addTask");

        $addTaskBtn.classList.add("active");
        $addTask.classList.add("addTaskActive");

        const $inputText = document.querySelector(".name-input");
        $inputText.focus();
    });
}