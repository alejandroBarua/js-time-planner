import { colorSelector } from "./main.js";

export default function deleteTask(deleteBtn) {

    document.addEventListener("click", e => {

        if(e.target.matches(deleteBtn)){
            
            let $divDelete = e.target.parentNode;
            $divDelete = $divDelete.parentNode;
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

            let taskContent = JSON.parse(localStorage.getItem("tasks"));
            let i;

            taskContent.forEach((el, index) => {
                if(el.name == $divDelete.children[0].textContent){
                    i = index;
                } 
            });

            taskContent.splice(i, 1);

            localStorage.setItem("tasks", JSON.stringify(taskContent));

            $divFatherDelete.removeChild($divDelete);
            e.stopPropagation();
            
            let nameStask = $divDelete.children[0].textContent.replace(/ /g, "");
            let $blocks = document.querySelectorAll(`.${nameStask}`);

            if($blocks.length != 0){
                $blocks.forEach(el => {
                    el.classList.remove(nameStask);
                    el.style.background = "var(--second-color)";
                });
            }

            let $trick = document.querySelector(".trick");
            if($trick != null){
                /* let $back = document.querySelector(".back");
                $back.classList.add("back-none"); */
            }

            blocksStorage();
        }
    });
}

function blocksStorage() {
    
    let $divs = document.querySelectorAll(".blocks div");
    let blocks = new Array();
    $divs.forEach(el => {
                            
        if(el.classList.contains("point")) el.classList.remove("point");        
        if(el.classList.length != 1) blocks.push(el.classList.value);
    });
                
    localStorage.setItem("blocks", JSON.stringify(blocks));
}