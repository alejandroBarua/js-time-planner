export default function pointTime() {
    
    setInterval(() => {
    
        let date = new Date();
        const numberToDay = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    
        let day = numberToDay[date.getDay()];

        const $block = document.querySelector(`.${day}${date.getHours()}`);
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

        const $blockAnt = document.querySelector(`.${day}${date.getHours()-1}`);
        if($blockAnt != null) $blockAnt.classList.remove("point");
    
    }, 1000);
}