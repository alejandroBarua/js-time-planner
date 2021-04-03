export default function edit(editBtn) {
    
    document.addEventListener("click", e => {

        if(e.target.matches(editBtn)){
            e.stopPropagation();

            const $editPrev = document.querySelector(".edit");
            if($editPrev) $editPrev.classList.remove("edit");

            const $addTaskBtn = document.querySelector(".addTask-btn");

            if(!$addTaskBtn.classList.contains("active")){

                $addTaskBtn.classList.add("active");
                addContent();
                const $addTask = document.querySelector(".addTask");
                $addTask.classList.add("addTaskActive");
            }

            const $inputName = document.querySelector(".name-input"),
                $color = document.querySelector(".color-input"),
                $add = document.querySelector(".add-btn");

            let $task = e.target.parentNode.parentNode,
                text = $task.children[0].textContent,
                color = $task.style.backgroundColor;

            $inputName.value = text;
            $color.value = rgbToHex(color);
            $add.textContent = "Ok";
            $task.classList.add("edit");
            $inputName.focus();
        }
    }, true);
}

function rgbToHex(rgb) {

    rgb = rgb.slice(4, ).split(",");

    let r = parseInt(rgb[0]),
        g = parseInt(rgb[1]),
        b = parseInt(rgb[2]);

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
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