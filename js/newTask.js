
export let colorSelect;


export default function newTask(addBtn, deleteBtn) {
    
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
            $div.addEventListener("click", () => {
                console.log('select');
                console.log(colorSelect);
                colorSelector($div)});

            $button.textContent = "x";
            $button.classList.add("delete-btn");
            $p.textContent = text;

            $div.appendChild($button);
            $div.appendChild($p);

            $list.prepend($div);

        }

         if(e.target.matches(deleteBtn)){
         
            console.log(deleteBtn);
        
        
        }
    
    });
}

function colorSelector($div) {
    
    let $divPrev = document.querySelector(".select-task");
    if($divPrev != null) $divPrev.classList.remove("select-task");
                
    $div.classList.add("select-task");
    colorSelect = $div.style.backgroundColor;

}