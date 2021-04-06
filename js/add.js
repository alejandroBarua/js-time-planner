import { colorSelector, setBlocksStorage, rgbToHex } from "./main.js";

export default function addTask(addBtn) {
    
    document.addEventListener("click", e => {

        if(e.target.matches(addBtn)){
        
            const $inputName = document.querySelector(".name-input"),
                $inputColor = document.querySelector(".color-input"),
                color = $inputColor.value;
            
            let text = $inputName.value.trim();

            let $tasks = document.querySelectorAll(".list-task > div p");
            if($tasks.length != 0){

                let positionEdit = null;
    
                $inputName.classList.remove("color-red");
                
                $tasks.forEach((el, index) => {
                    if(el.parentNode.classList.contains("edit")) positionEdit = index;
                });
    
                $tasks.forEach((el, index) => {
                    if(text == el.textContent && positionEdit != index) $inputName.classList.add("color-red");
                });
            }
            
            if(text == "") $inputName.classList.add("color-red");
            if(color == "#ffffff") $inputColor.classList.add("color-red");
            
            if(!$inputName.classList.contains("color-red") && !$inputColor.classList.contains("color-red")){
                
                const $add = e.target,
                    taskContent = JSON.parse(localStorage.getItem("tasks"));

                if($add.textContent == "Ok"){
                    
                    const $task = document.querySelector(".edit");
                    let colorAnt = $task.style.backgroundColor;
                    
                    if(colorAnt.includes("rgb")) colorAnt = rgbToHex(colorAnt);

                    $task.style.backgroundColor = color;
                    if(taskContent != null ) taskContent.forEach(el => {
                        if(el.color == colorAnt) el.color = color;
                    });

                    let textAnt;
                    if($task.classList[0] != "select-task"){
                        
                        textAnt = $task.classList[0];
                    }
                    else{
                        textAnt = $task.classList[1];
                    }


                    $task.classList.remove(textAnt);
    
                    $task.children[0].textContent= text;
                    text = text.replace(/ /g, "");
                    $task.classList.add(text);
                    $task.classList.remove("edit");
                        
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

                    taskContent.forEach(el => {
                        if(el.name == textAnt) el.name = text;
                    });
                    
                    $add.textContent = "Add";
                    localStorage.setItem("tasks", JSON.stringify(taskContent));
                    setBlocksStorage();
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
                    if(taskContent == undefined) taskContent = [];
                    taskContent.unshift(task);
                    localStorage.setItem("tasks", JSON.stringify(taskContent));
                }
    
                $inputName.value = "";
            }
         
            $inputName.focus();
        }
    });

    document.addEventListener("input", e => {

        if(e.target.matches(".name-input")){

            let $inputName = e.target;
            $inputName.classList.remove("color-red");
        }

        if(e.target.matches(".color-input")){

            let $inputColor = e.target;
            $inputColor.classList.remove("color-red");
        }
    });
}