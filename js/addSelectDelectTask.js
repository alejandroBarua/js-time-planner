export let colorSelect;

export function newTask(addBtn) {
    
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


export function deleteTask(deleteBtn) {

    document.addEventListener("click", e => {

        if(e.target.matches(deleteBtn)){
            
            let $divDelete = document.querySelector(`.${e.target.classList[1]}`).parentNode;
            let $divFatherDelete = $divDelete.parentNode;
            
            if($divDelete.classList.contains("select-task")){
                
                let $divNext = $divDelete.nextElementSibling;
                if($divNext != null) colorSelector($divNext);
            }

            $divFatherDelete.removeChild($divDelete);
            e.stopPropagation();

        }
    }, true);
}

export function EventDefault() {

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
        $div.addEventListener("click", () => colorSelector($div));

        $button.textContent = "x";
        $button.classList.add("delete-btn");
        $button.classList.add(`${el.name}`);
        $p.textContent = el.name;

        $div.appendChild($button);
        $div.appendChild($p);
        $fragment.appendChild($div);
    });

    
    $listTask.appendChild($fragment);
    colorSelector($listTask.firstElementChild);
}

function colorSelector($div) {
    
    let $divPrev = document.querySelector(".select-task");
    if($divPrev != null) $divPrev.classList.remove("select-task");
                
    $div.classList.add("select-task");
    colorSelect = $div.style.backgroundColor;

}