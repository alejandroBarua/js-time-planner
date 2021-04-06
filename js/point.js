import { numbeToDay } from "./main.js";

export default function pointTime() {
    
    setInterval(() => {
    
        let date = new Date();
    
        let day = numbeToDay(date.getDay());

        let $block = document.querySelector(`.${day}${date.getHours()}`);
        $block.classList.add("point");

        if($block.classList.length == 3){

            if($block.classList[1] != "point"){
                let $p = document.querySelector(`.${$block.classList[1]} p`);
                let text = $p.textContent;
                document.querySelector(".now h2").textContent = text;
            }
            else{
                let $p = document.querySelector(`.${$block.classList[2]} p`);
                let text = $p.textContent;
                document.querySelector(".now h2").textContent = text;
            }
        }
        else{
            document.querySelector(".now h2").textContent = "";
        }

        let $blockAnt = document.querySelector(`.${day}${date.getHours()-1}`);
        if($blockAnt != null) $blockAnt.classList.remove("point");
    
    }, 1000);
}