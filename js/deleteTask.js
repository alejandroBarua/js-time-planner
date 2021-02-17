import { colorSelector } from "./main.js";

export default function deleteTask(deleteBtn) {

    document.addEventListener("click", e => {

        if(e.target.matches(deleteBtn)){
            
            let $divDelete = document.querySelector(`.${e.target.classList[1]}`).parentNode;
            let $divFatherDelete = $divDelete.parentNode;
            
            if($divDelete.classList.contains("select-task")){
                
                let $divNext = $divDelete.nextElementSibling;
                if($divNext != null) colorSelector($divNext);
            }

            $divFatherDelete.removeChild($divDelete);
            e.stopPropagation();

        }
    }, true);
}