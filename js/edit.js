export default function edit(editBtn) {
    
    document.addEventListener("click", e => {

        if(e.target.matches(editBtn)){
            e.stopPropagation();

            const $input = document.querySelector(".name-input"),
                $color = document.querySelector(".color-input"),
                $add = document.querySelector(".add-btn");

            let $task = e.target.parentNode.parentNode,
                text = $task.children[0].textContent,
                color = $task.style.backgroundColor;
            
            $input.value = text;
            $color.value = rgbToHex(color);
            $add.textContent = "ok";
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