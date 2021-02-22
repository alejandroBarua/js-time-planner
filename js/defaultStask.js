import { colorSelector } from "./main.js";

export default function defaultTask() {

    const taskContent = [
        {
            name: "sleep",
            color:"rgb(8, 178, 201)"
        },
        {
            name: "work",
            color:"rgb(211, 120, 0)"
        },
        {
            name: "free",
            color:"rgb(158, 0, 158)"
        },
        {
            name: "study",
            color:"rgb(219, 235, 4)"
        },
        {
            name: "gym",    
            color: "green"
        }
    ];

    let $fragment = document.createDocumentFragment(),
        $listTask = document.querySelector(".list-task");

    taskContent.forEach(el => {

        let $div = document.createElement("div"),
            $button = document.createElement("button"),
            $p = document.createElement("p");
        
        $div.style.backgroundColor = el.color;
        $div.classList.add(el.name.replace(/ /g, ""));
        $div.addEventListener("click", () => colorSelector($div));

        $button.textContent = "x";
        $button.classList.add("delete-btn");
        $p.textContent = el.name;

        $div.appendChild($button);
        $div.appendChild($p);
        $fragment.appendChild($div);
    });

    
    $listTask.appendChild($fragment);
    colorSelector($listTask.firstElementChild);
}
