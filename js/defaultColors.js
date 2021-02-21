export default function defaultColors() {

    const colors = ["#c43e4b","#e38690", "#f04732", "#f89b31", "#f9ea2c", "#c4e61b", "#5bb31f", "#1292d1", "#3074fc", "#4f4ea9", "#a45bb4", "#000000"];

    let $fragment = document.createDocumentFragment(),
        $Colors = document.querySelector(".colors");

    colors.forEach(el => {

        let $div = document.createElement("div");
        let $inputColor = document.querySelector(".color-input");

        $div.style.backgroundColor = el;
        $div.addEventListener("click", () => {
            $inputColor.value = el;
            let $inputText = document.querySelector(".name-input");
            $inputText.focus();
        });

        $fragment.appendChild($div);
    });

    
    $Colors.appendChild($fragment);
}
