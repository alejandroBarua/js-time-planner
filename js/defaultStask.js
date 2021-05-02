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
        $listTask = document.querySelector(".list-task"),
        $templateTask = document.querySelector(".template-task").content;

    taskContent.forEach(el => {

        $templateTask.querySelector(".container-task").style.backgroundColor = el.color;
        $templateTask.querySelector(".container-task").dataset.name = el.name;
        $templateTask.querySelector("p").textContent = el.name;
        $templateTask.querySelector(".edit-btn").dataset.name = el.name;
        $templateTask.querySelector(".edit-btn").dataset.color = el.color;
        $templateTask.querySelector(".delete-btn").dataset.name = el.name;

        let $clone = document.importNode($templateTask, true);
        $fragment.appendChild($clone);
    });
    
    $listTask.appendChild($fragment);
    if(window.localStorage.blocks != undefined) getBlockStorage();
}

