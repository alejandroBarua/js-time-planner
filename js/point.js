
export default function pointTime() {
    
    setInterval(() => {
    
        let date = new Date();
    
        let day = numbeToDay(date.getDay());

        let $block = document.querySelector(`.${day}${date.getHours()}`);
        $block.classList.add("point");

        if($block.classList.length == 3){

            if($block.classList[1] != "point"){
                
                document.querySelector(".now h2").textContent = $block.classList[1];
            }
            else{
                document.querySelector(".now h2").textContent = $block.classList[2];
            }
        }
        else{
            document.querySelector(".now h2").textContent = "";
        }

        let $blockAnt = document.querySelector(`.${day}${date.getHours()-1}`);
        $blockAnt.classList.remove("point");
    
    }, 1000);
}

function numbeToDay(value) {

    let day;
     
    switch (value) {
        case 0:
            day = "sun";
            break;
        case 1:
            day = "mon";
            break;
        case 2:
            day = "tue";
            break;
        case 3:
            day = "wed";
            break;
        case 4:
            day = "thu"
            break;
        case 5:
            day = "fri";
            break;
        case 6:
            day = "sat";
            break;
    }  

    return day;
}
