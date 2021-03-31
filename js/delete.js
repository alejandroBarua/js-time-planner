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

            const colors = ["#c43e4b","#e38690", "#f04732", "#f89b31", "#f9ea2c", "#c4e61b", "#5bb31f", "#1292d1", "#3074fc", "#4f4ea9", "#a45bb4", "#000000"];

            colors.forEach(el => {
                if(el == rgbToHex($divDelete.style.backgroundColor)){
 
                    let $Colors = document.querySelector(".colors");
                    let $div = document.createElement("div");
                    let $inputColor = document.querySelector(".color-input");

                    $div.style.backgroundColor = el;
                    $div.addEventListener("click", () => {
                        $inputColor.value = el;
                    });

                    $Colors.appendChild($div);
                }
            });

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
                    el.style.background = "rgb(219, 216, 216)";
                });
            }

            let $trick = document.querySelector(".trick");
            if($trick != null){
                let $back = document.querySelector(".back");
                $back.classList.add("back-none");
            }
        }
    });
}


function rgbToHex(rgb) {

    rgb = rgb.slice(4, ).split(",");

    let r = parseInt(rgb[0]),
        g = parseInt(rgb[1]),
        b = parseInt(rgb[2]);

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}