import { colorSelector } from "./main.js";

export default function addTask(addBtn) {
    
    document.addEventListener("click", e => {
        
        const $input = document.querySelector(".name-input");
        let text = $input.value;

         if(e.target.matches(addBtn)){

            if(text != "" && !$input.classList.contains("color-red")){
                
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

                $divBtn.appendChild($button);
                $divBtn.appendChild($img);
                $div.appendChild($p);
                $div.appendChild($divBtn);

                $list.prepend($div);

                $input.value = "";
            }
            else{
                $input.classList.add("color-red");
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