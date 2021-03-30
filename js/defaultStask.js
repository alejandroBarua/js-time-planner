import { colorSelector } from "./main.js";

export default function defaultTask() {

    let taskContent;

    if(window.localStorage.tasks == undefined){

        taskContent = [ 
            {
                name: "sleep",
                color: "rgb(8, 178, 201)",
                date: null
            },
            {
                name: "work",
                color:"rgb(211, 120, 0)",
                date: null
            },
            {
                name: "free",
                color:"rgb(158, 0, 158)",
                date: null
            },
            {
                name: "study",
                color:"rgb(219, 235, 4)",
                date: null
            }
        ];

        localStorage.setItem("tasks", JSON.stringify(taskContent));
    }
    else{
        taskContent = JSON.parse(localStorage.getItem("tasks"));
    }

    console.log(taskContent);

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

        $divBtn.appendChild($button);
        $divBtn.appendChild($img);
        $div.appendChild($p);
        $div.appendChild($divBtn);

        $fragment.appendChild($div);
    });

    
    $listTask.appendChild($fragment);
    colorSelector($listTask.firstElementChild);
}
