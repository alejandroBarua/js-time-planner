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
            
            let nameStask = $divDelete.children[1].textContent.replace(/ /g, "");
            let $blocks = document.querySelectorAll(`.${nameStask}`);

            if($blocks.length != 0){
                $blocks.forEach(el => {
                    el.classList.remove(nameStask);
                    el.style.background = "rgb(219, 216, 216)";
                });
            }
        }
    });
}