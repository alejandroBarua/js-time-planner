import { colorSelector } from "./main.js";

export default function addTask(addBtn) {
    
    document.addEventListener("click", e => {
        
        const $input = document.querySelector(".name-input");
        let text = $input.value;

         if(e.target.matches(addBtn) && !$input.classList.contains("color-red")){

            if(text != ""){
                
                let color = document.querySelector(".color-input").value;

                let $list = document.querySelector(".list-task"),
                $div = document.createElement("div"),
                $button = document.createElement("button"),
                $p = document.createElement("p");

                $div.style.backgroundColor = color;
                colorSelector($div);
                $div.addEventListener("click", () => colorSelector($div));

                $button.textContent = "x";
                $button.classList.add("delete-btn");
                $button.classList.add(`${text.replace(/ /g, "")}`);
                $p.textContent = text;

                $div.appendChild($button);
                $div.appendChild($p);

                $list.prepend($div);

                $input.value = "";
            }
            else{
                $input.classList.add("color-red");
            }
            
        }

    });
}
