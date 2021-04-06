import pointTime from "./point.js";
import selectBlock from "./select.js";
import defaultTask from "./defaultStask.js";
import dark from "./dark.js";
import btnActive from "./btnActive.js";
import addTaskContent from "./addTaskContent.js";
import addTask from "./add.js";
import edit from "./edit.js";
import deleteTask from "./delete.js";
import trick from "./trick.js";
import  clean from "./clean.js";
import deleteAll from "./deleteAll.js";

export function colorSelector($div) {
    
    let $divPrev = document.querySelector(".select-task");
    if($divPrev != null) $divPrev.classList.remove("select-task");
                
    $div.classList.add("select-task");

    let $first = document.querySelector(".first");
    if($first != null){

        $first.style.backgroundColor = "rgb(219, 216, 216)";
        $first.classList.remove("first");

    }
}

export function setBlocksStorage() {
    
    const $divs = document.querySelectorAll(".blocks div");
    let blocks = new Array();
    $divs.forEach(el => {
                            
        if(el.classList.contains("point")) el.classList.remove("point");        
        if(el.classList.length != 1) blocks.push(el.classList.value);
    });
                
    localStorage.setItem("blocks", JSON.stringify(blocks));
}

export function getBlockStorage() {
    
        let blocks = JSON.parse(localStorage.getItem("blocks"));

        blocks.forEach(el => {
            let content = el.split(" ");
            const $block = document.querySelector(`.${content[0]}`),
                $color = document.querySelector(`.${content[1]}`);
            $block.classList.add(content[1]);
            $block.style.backgroundColor = $color.style.backgroundColor;
        });
}


export function addContent() {

    const content = `
        <div>
            <p class="escape">Esc</p>
            <input type="color" class="color-input" value="#ffffff">
            <input type="text" class="name-input" placeholder="name">
            <button class="add-btn btn">Add</button>
        </div>

        <div class="colors">

        </div>`;

    const $addTask = document.querySelector(".addTask");
    $addTask.innerHTML = content;

    const $escape = document.querySelector(".escape"),
        $dark = document.querySelector(".dark-btn");

    if($dark.classList.contains("active")) $escape.classList.add("white");
    
    colorPalet();
}

function colorPalet() {
    
    const colors = ["#c43e4b","#e38690", "#f04732", "#f89b31", "#f9ea2c", "#c4e61b", "#5bb31f", "#1292d1", "#3074fc", "#4f4ea9", "#a45bb4", "#000000"];

    const $fragment = document.createDocumentFragment(),
        $colors = document.querySelector(".colors");

    colors.forEach(el => {

        const $div = document.createElement("div");
        const $inputColor = document.querySelector(".color-input");

        $div.style.backgroundColor = el;
        $div.addEventListener("click", () => {
            $inputColor.value = el;
            $inputColor.classList.remove("color-red");
            const $inputText = document.querySelector(".name-input");
            $inputText.focus();
            $inputText.classList.remove("color-red");
        });

        $fragment.appendChild($div);
    }); 

    $colors.appendChild($fragment);
}

export function rgbToHex(rgb) {
    
    rgb = rgb.slice(4, ).split(",");
    
    let r = parseInt(rgb[0]),
    g = parseInt(rgb[1]),
    b = parseInt(rgb[2]);
    
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/*export function hexToRgb(hex) {
    hex = hex.slice(1, 7);
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return `rgb(${r}, ${g}, ${b})`;
} */


export function numbeToDay(number) {

    let day;
     
    switch (number) {
        case 0:
            day = "sun";
            break;
        case 1:
            day = "mon";
            break;
        case 2:
            day = "tue";
            break;
        case 3:
            day = "wed";
            break;
        case 4:
            day = "thu"
            break;
        case 5:
            day = "fri";
            break;
        case 6:
            day = "sat";
            break;
    }  

    return day;
}

export function dayToNumber(day) {

    let number;
     
    switch (day) {
        case "sun":
            number = 0;
            break;
        case "mon":
            number = 1;
            break;
        case "tue":
            number = 2;
            break;
        case "wed":
            number = 3;
            break;
        case "thu":
            number = 4;
            break;
        case "fri":
            number = 5;
            break;
        case "sat":
            number = 6;
            break;
    }  

    return number;
}

defaultTask();
pointTime();
dark();

document.addEventListener("DOMContentLoaded", e => {
    addTask(".add-btn");
    deleteTask(".delete-btn");
    edit(".edit-btn");
    btnActive(".btnActive")
    selectBlock();
    trick();
    addTaskContent();
    clean();
    deleteAll();
});