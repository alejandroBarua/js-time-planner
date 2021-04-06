export default function deleteAll() {
    
    const $deleteAllBtn = document.querySelector(".deleteAll-btn");

    $deleteAllBtn.addEventListener("click", e => {

        const $divTask = document.querySelector(".list-task");
        $divTask.textContent = "";

        const $blocks = document.querySelectorAll(".blocks div");
    
        if($blocks.length > 0){
            $blocks.forEach(el => {
                let nameTask = el.classList[1];
                el.classList.remove(nameTask);
                el.style.background = "var(--second-color)";
            });
        }

        localStorage.removeItem("tasks");
        localStorage.removeItem("blocks");
        
        addContent();
        
        const $addTaskBtn = document.querySelector(".addTask-btn"),
            $addTask = document.querySelector(".addTask");

        $addTaskBtn.classList.add("active");
        $addTask.classList.add("addTaskActive");

        const $inputText = document.querySelector(".name-input");
        $inputText.focus();
    });
}


function addContent() {

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
            const $inputText = document.querySelector(".name-input");
            $inputText.focus();
            $inputText.classList.remove("color-red");
        });

        $fragment.appendChild($div);
    }); 

    $colors.appendChild($fragment);
}