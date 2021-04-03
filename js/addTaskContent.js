export default function addTaskContent() {
    
    const $addTaskBtn = document.querySelector(".addTask-btn"),
        $addTask = document.querySelector(".addTask");

    const colorPalet = () => {

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


    const addContent = () => {

        const text = `
            <div>
                <p class="escape">Esc</p>
                <input type="color" class="color-input" value="#ffffff">
                <input type="text" class="name-input" placeholder="name">
                <button class="add-btn btn">Add</button>
            </div>

            <div class="colors">

            </div>`;

        $addTask.innerHTML = text;
        colorPalet();
    };

    const addHide = () => $addTask.innerHTML = "";


    $addTaskBtn.addEventListener("click", e => {
        
        $addTask.classList.toggle("addTaskActive");
        if($addTaskBtn.classList.contains("active")) return addHide(); 
        addContent();
        const $inputText = document.querySelector(".name-input");
        $inputText.focus();
    });

    document.addEventListener("keydown", e => {
        
        if(e.keyCode == 27 && $addTaskBtn.classList.contains("active")){
        
            $addTaskBtn.classList.remove("active");
            $addTask.classList.remove("addTaskActive");
            addHide(); 
        }
    });
}
