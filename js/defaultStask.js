import { colorSelector, getBlockStorage } from "./main.js";

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

    if(window.localStorage.blocks != undefined) getBlockStorage();

}