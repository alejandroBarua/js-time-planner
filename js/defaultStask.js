import { colorSelector } from "./main.js";

export default function defaultTask() {

    let taskContent;

    if(window.localStorage.tasks == undefined){

        taskContent = [ 
            {
                name: "sleep",
                color: "#1292d1"
            },
            {
                name: "work",
                color:"#f89b31"
            },
            {
                name: "free",
                color:"#a45bb4"
            },
            {
                name: "study",
                color:"#f9ea2c"
            }
        ];

        localStorage.setItem("tasks", JSON.stringify(taskContent));
    }
    else{
        taskContent = JSON.parse(localStorage.getItem("tasks"));
    }

    let $fragment = document.createDocumentFragment(),
        $listTask = document.querySelector(".list-task");

    taskContent.forEach(el => {

        let $div = document.createElement("div"),
            $button = document.createElement("button"),
            $divBtn = document.createElement("div"),
            $img = document.createElement("img"),
            $p = document.createElement("p");
        
        $div.style.backgroundColor = el.color;
        $div.classList.add(el.name.replace(/ /g, ""));
        $div.addEventListener("click", () => colorSelector($div));

        $button.textContent = "x";
        $button.classList.add("delete-btn");
        $p.textContent = el.name;
        $img.setAttribute("src", "images/colors.png");
        $img.classList.add("edit-btn");

        $divBtn.appendChild($img);
        $divBtn.appendChild($button);
        $div.appendChild($p);
        $div.appendChild($divBtn);

        $fragment.appendChild($div);
    });

    
    $listTask.appendChild($fragment);

    let taskList = JSON.parse(localStorage.getItem("tasks"));
    if(taskList.length != 0) colorSelector($listTask.firstElementChild);

     if(window.localStorage.blocks != undefined) blockStorage();

}


function blockStorage() {
    
        let $blocks = document.querySelectorAll(".blocks div");
        let blocks = JSON.parse(localStorage.getItem("blocks"));
        
        $blocks.forEach(el => {
            if(el.classList.contains("point")) el.classList.remove("point");
                            
            if(el.classList.length != 1){
                el.classList.remove(el.classList[1]);
                el.style.backgroundColor = "var(--second-color)"; 
            }
        });

        blocks.forEach(el => {
            let content = el.split(" ");
            let $block = document.querySelector(`.${content[0]}`);
            $block.classList.add(content[1]);
            let $color = document.querySelector(`.${content[1]}`);
            $block.style.backgroundColor = $color.style.backgroundColor;
        });
}