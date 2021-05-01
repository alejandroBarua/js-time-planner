export default function defaultBlocks() {
    
    const $containerBlocks = document.querySelector(".container-blocks"),
        $fragment = document.createDocumentFragment(),
        $blocksNumber = document.createElement("div");

    $blocksNumber.classList.add("numbers");
    for(let i = 0; i < 24; i++){
        let $div = document.createElement("div");
        $div.classList.add(`id${i}`);
        $div.textContent = i;
        $blocksNumber.appendChild($div);
    }
    $fragment.appendChild($blocksNumber);

    for(let i = 0; i < 7; i++){

        const $blocks = document.createElement("div");
        $blocks.classList.add("blocks");

        const numberToDay = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

        for(let j = 0; j < 24; j++){
            let $div = document.createElement("div");
            $div.classList.add(`${numberToDay[i]}${j}`);
            $blocks.appendChild($div);
        }
        $fragment.appendChild($blocks);
    }
    $containerBlocks.appendChild($fragment);
}