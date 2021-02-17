import { colorSelector } from "./main.js";

export default function deleteTask(deleteBtn) {

    document.addEventListener("click", e => {

        if(e.target.matches(deleteBtn)){
            
            let $divDelete = e.target.parentNode;
            let $divFatherDelete = $divDelete.parentNode;
            
            if($divDelete.classList.contains("select-task")){
                
                let $divNext = $divDelete.nextElementSibling;

                if($divNext != null) {
                    colorSelector($divNext);
                }
                else{
                    let $divPrevious = $divDelete.previousElementSibling;
                    
                    if($divPrevious != null){
                        colorSelector($divPrevious);
                    }
                }
                
            }

            $divFatherDelete.removeChild($divDelete);
            e.stopPropagation();

        }
    }, true);
}