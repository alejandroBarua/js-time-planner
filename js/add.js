import { colorSelector } from "./main.js";

export default function addTask(addBtn) {
    
    document.addEventListener("click", e => {
        
        const $input = document.querySelector(".name-input");
        let text = $input.value;

         if(e.target.matches(addBtn)){

            let $tasks = document.querySelectorAll(".list-task > div p");

            $tasks.forEach(el => {
                if(text == el.textContent || text == ""){
                    $input.classList.add("color-red");
                }
            });

            if(!$input.classList.contains("color-red")){
                
                let $inputColor = document.querySelector(".color-input");
                let color = $inputColor.value;

                let $divColors = document.querySelector(".colors");
                const $colors = document.querySelectorAll(".colors div")

                $colors.forEach((el, index) => {
                    
                    if(el.style.backgroundColor == hexToRgb(color.slice(1, 7))){
                        $divColors.removeChild($divColors.children[index]);

                        if($colors.length != 1) $inputColor.value = rgbToHex($divColors.children[0].style.backgroundColor);
                        
                    }
                });

                let $add = e.target;
                
                if($add.textContent == "Ok"){
                    
                    let $task = document.querySelector(".edit");
                    $task.children[0].textContent= text;
                    $task.style.backgroundColor = color;
                    let textAnt;
                    if($task.classList[0] != "select-task"){

                        textAnt = $task.classList[0];
                    }
                    else{
                        textAnt = $task.classList[1];
                    }
                    $task.classList.remove(textAnt);
                    text = text.replace(/ /g, "");
                    $task.classList.add(text);
                    $task.classList.remove("edit");
                    $add.textContent = "Add";

                    let $blocks = document.querySelectorAll(".blocks div"); 
                    let history = new Array();
                    
                    $blocks.forEach(el => {
                            
                        if(el.classList.contains(textAnt)){
                            history.push(el.classList[0]);
                        }
                    });
                    
                    history.forEach(el => {
                        let $block = document.querySelector(`.${el}`);
                        $block.classList.remove(textAnt);
                        $block.classList.add(text);
                        $block.style.backgroundColor = color;
                    });
                }
                else{

                    let $list = document.querySelector(".list-task"),
                    $div = document.createElement("div"),
                    $button = document.createElement("button"),
                    $divBtn = document.createElement("div"),
                    $img = document.createElement("img"),
                    $p = document.createElement("p");
    
                    $div.style.backgroundColor = color;
                    colorSelector($div);
                    $div.addEventListener("click", () => colorSelector($div));
                    
                    $button.textContent = "x";
                    $button.classList.add("delete-btn");
                    $p.textContent = text;
                    $div.classList.add(text.replace(/ /g, ""));
                    $img.setAttribute("src", "images/colors.png");
                    $img.classList.add("edit-btn");
    
                    $divBtn.appendChild($img);
                    $divBtn.appendChild($button);
                    $div.appendChild($p);
                    $div.appendChild($divBtn);
    
                    $list.prepend($div);

                    let task = {
                        name: text,
                        color: color,
                        date: null
                    }
                    let taskContent = JSON.parse(localStorage.getItem("tasks"));
                    taskContent.unshift(task);
                    localStorage.setItem("tasks", JSON.stringify(taskContent));
                }
    
                $input.value = "";
            }
         
            $input.focus();
        }
    });
}

function hexToRgb(hex) {
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return `rgb(${r}, ${g}, ${b})`;
}

function rgbToHex(rgb) {

    rgb = rgb.slice(4, ).split(",");

    let r = parseInt(rgb[0]),
        g = parseInt(rgb[1]),
        b = parseInt(rgb[2]);

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}