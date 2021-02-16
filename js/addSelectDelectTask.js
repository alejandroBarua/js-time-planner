export let colorSelect;

export function newTask(addBtn) {
    
    document.addEventListener("click", e => {

         if(e.target.matches(addBtn)){


            let color = document.querySelector(".color-input").value;
            let text = document.querySelector(".name-input").value;

            let $list = document.querySelector(".list-task"),
                $div = document.createElement("div"),
                $button = document.createElement("button"),
                $p = document.createElement("p");

            $div.style.backgroundColor = color;
            colorSelector($div);
            $div.addEventListener("click", () => colorSelector($div));

            $button.textContent = "x";
            $button.classList.add("delete-btn");
            $button.classList.add(`${text}`);
            $p.textContent = text;

            $div.appendChild($button);
            $div.appendChild($p);

            $list.prepend($div);

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
    
    let $divs = document.querySelectorAll(".list-task div");
    $divs.forEach(el => el.addEventListener("click", () => colorSelector(el)));
    
}

function colorSelector($div) {
    
    let $divPrev = document.querySelector(".select-task");
    if($divPrev != null) $divPrev.classList.remove("select-task");
                
    $div.classList.add("select-task");
    colorSelect = $div.style.backgroundColor;

}