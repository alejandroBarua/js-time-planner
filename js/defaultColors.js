export default function defaultColors() {

    const colors = ["#c43e4b", "#f04732", "#f15132", "#f89b31", "#fdbd30", "#f9ea2c", "#c4e61b", "#5bb31f", "#1292d1", "#3074fc", "#4f4ea9", "#a45bb4"];

    let $fragment = document.createDocumentFragment(),
        $Colors = document.querySelector(".colors");

    colors.forEach(el => {

        let $div = document.createElement("div");
        let $input = document.querySelector(".color-input");

        $div.style.backgroundColor = el;
        $div.addEventListener("click", () => {
            $input.value = el;
        });

        $fragment.appendChild($div);
    });

    
    $Colors.appendChild($fragment);
}
