import pointTime from "./point.js";
import selectBlock from "./select.js";
import defaultTask from "./defaultStask.js";
import dark from "./dark.js";
import addTaskContent from "./addTaskContent.js";
import addTask from "./add.js";
import edit from "./edit.js";
import deleteTask from "./delete.js";
import deleteAll from "./deleteAll.js";
import defaultBlocks from "./defaultBlocks.js";

const colorSelector = ($div) => {

    if($div == null) return;
    
    const $divPrev = document.querySelector(".select-task");
    if($divPrev != null) $divPrev.classList.remove("select-task");
                
    $div.classList.add("select-task");

    const $first = document.querySelector(".first");
    if($first != null){
        $first.style.backgroundColor = "rgb(219, 216, 216)";
        $first.classList.remove("first");
    }
}

const setBlocksStorage = () => {
    
    const $divs = document.querySelectorAll(".blocks div");
    let blocks = new Array();
    $divs.forEach(el => {
                            
        if(el.classList.contains("point")) el.classList.remove("point");        
        if(el.classList.length != 1) blocks.push(el.classList.value);
    });
                
    localStorage.setItem("blocks", JSON.stringify(blocks));
}

const getBlockStorage = () => {
    
        let blocks = JSON.parse(localStorage.getItem("blocks"));

        blocks.forEach(el => {
            let content = el.split(" ");
            const $block = document.querySelector(`.${content[0]}`),
                $color = document.querySelector(`.${content[1]}`);
            $block.classList.add(content[1]);
            $block.style.backgroundColor = $color.style.backgroundColor;
        });
}

const colorPalet = () => {
    
    const $fragment = document.createDocumentFragment(),
        $colors = document.querySelector(".colors"),
        colors = ["#c43e4b","#e38690", "#f04732", "#f89b31", "#f9ea2c", "#c4e61b", "#5bb31f", "#1292d1", "#3074fc", "#4f4ea9", "#a45bb4", "#000000"];

    colors.forEach(el => {
        const $div = document.createElement("div");
        $div.style.backgroundColor = el;
        $fragment.appendChild($div);
    }); 
    $colors.appendChild($fragment);
}

const addContent = () => {

    const content = `
        <div>
            <p class="escape">Esc</p>
            <input type="color" class="color-input" value="#ffffff">
            <input type="text" class="name-input" placeholder="name">
            <button class="add-btn btn">Add</button>
        </div>

        <div class="colors">

        </div>`;

    document.querySelector(".addTask").innerHTML = content;

    const $escape = document.querySelector(".escape"),
        $dark = document.querySelector(".dark-btn");

    if($dark.classList.contains("active")) $escape.classList.add("white");
    colorPalet();
}

const rgbToHex = (rgb) => {
    
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

const $firstTask =  document.querySelector(".list-task").firstElementChild,
selectFirst = () => colorSelector($firstTask);

dark();

document.addEventListener("DOMContentLoaded", e => {
        
    defaultBlocks();
    defaultTask(getBlockStorage);
    //pointTime();
    selectFirst();
    edit(".edit-btn", addContent, rgbToHex);
    selectBlock(setBlocksStorage);
    addTaskContent(addContent);
});

 document.addEventListener("click", e => {
    
    if(e.target.matches(".btnActive"))  e.target.classList.toggle("active");
    if(e.target.matches(".container-task")) colorSelector(e.target);
    if(e.target.matches(".delete-btn")) deleteTask(e, colorSelector, setBlocksStorage);

    if(e.target.matches(".colors > div")) {

        const $inputColor = document.querySelector(".color-input"),
            $inputText = document.querySelector(".name-input");

            $inputColor.value = rgbToHex(e.target.style.backgroundColor);
            $inputColor.classList.remove("color-red");
            $inputText.focus();
            $inputText.classList.remove("color-red");
    }
    
    if(e.target.matches(".deleteAll-btn")) {
        deleteAll();
        addContent();
    }
    
    if(e.target.matches(".add-btn")) {
        addTask(e, setBlocksStorage, rgbToHex);
        selectFirst();
    }

    if(e.target.matches(".clean-btn")){

        const $blocks = document.querySelectorAll(".blocks div");
    
        if($blocks.length > 0){
            $blocks.forEach(el => {
                let nameTask = el.classList[1];
                el.classList.remove(nameTask);
                el.style.background = "var(--second-color)";
            });
        }
        localStorage.removeItem("blocks");
    }

    if(e.target.matches(".trick")){

        const $trick = document.querySelector(".trick");
        
        if($trick.classList.contains("select-trick")){
            $trick.classList.remove("select-trick");

            const $first = document.querySelector(".first");
            if($first != null) $first.classList.remove("first");
        }
        else{
            $trick.classList.add("select-trick");
        }
    }
    


});

document.addEventListener("input", e => e.target.classList.remove("color-red"));
