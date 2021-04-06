import { addContent, rgbToHex } from "./main.js";

export default function edit(editBtn) {
    
    document.addEventListener("click", e => {

        if(e.target.matches(editBtn)){
            e.stopPropagation();

            const $editPrev = document.querySelector(".edit");
            if($editPrev) $editPrev.classList.remove("edit");

            const $addTaskBtn = document.querySelector(".addTask-btn");

            if(!$addTaskBtn.classList.contains("active")){

                $addTaskBtn.classList.add("active");
                addContent();
                const $addTask = document.querySelector(".addTask");
                $addTask.classList.add("addTaskActive");
            }

            const $inputName = document.querySelector(".name-input"),
                $color = document.querySelector(".color-input"),
                $add = document.querySelector(".add-btn");

            let $task = e.target.parentNode.parentNode,
                text = $task.children[0].textContent,
                color = $task.style.backgroundColor;

            $inputName.value = text;
            $color.value = rgbToHex(color);
            $add.textContent = "Ok";
            $task.classList.add("edit");
            $inputName.focus();
        }
    }, true);
}