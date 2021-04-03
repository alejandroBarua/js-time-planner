export let history = new Array();

export default function selectBlock() {
 
    let $blocks = document.querySelectorAll(".blocks div");

    $blocks.forEach(el => {

        let day = el.classList[0].slice(0,3);
        let number = el.classList[0].slice(3,5);
            
        let $day = document.querySelector(`.${day}`);
        let $number = document.querySelector(`.id${number}`);

        el.addEventListener("mouseover", e => {
            $day.classList.add("color-blue");
            $number.classList.add("color-blue");

                      
            let $task = document.querySelector(".select-task");
            let $block = e.target;
            
            if($task != null){
                    
                let $first = document.querySelector(".first");
                
                if($first != null){
                    
                    let color = $task.style.backgroundColor;

                    let dayFirst = dayToNumber($first.classList[0].slice(0,3));
                    let numberFirst = parseInt($first.classList[0].slice(3,5));

                    let daySecond = dayToNumber($block.classList[0].slice(0,3));
                    let numberSecond = parseInt($block.classList[0].slice(3,5));

                    if(dayFirst > daySecond){
                        let a = daySecond;
                        daySecond = dayFirst;
                        dayFirst = a;
                    }
                    if(numberFirst > numberSecond){
                        let a = numberSecond;
                        numberSecond = numberFirst;
                        numberFirst = a;
                    }

                    for(let i= dayFirst; i <= daySecond; i++){

                        for(let j = numberFirst; j <= numberSecond; j++){

                            let $blockTrick = document.querySelector(`.${numbeToDay(i)}${j}`);
                            
                            if($first != $blockTrick) $blockTrick.style.backgroundColor= color;
                        }
                    }
                }
            }



        });
        
        el.addEventListener("mouseout", e => {
            
            $day.classList.remove("color-blue");
            $number.classList.remove("color-blue");

            let $task = document.querySelector(".select-task");
            let $block = e.target;
            
            if($task != null){
                    
                let $first = document.querySelector(".first");

                if($first != null){

                    if($first.style.backgroundColor != "var(--second-color)"){
                        
                        let dayFirst = dayToNumber($first.classList[0].slice(0,3));
                        let numberFirst = parseInt($first.classList[0].slice(3,5));

                        let daySecond = dayToNumber($block.classList[0].slice(0,3));
                        let numberSecond = parseInt($block.classList[0].slice(3,5));

                        if(dayFirst > daySecond){
                            let a = daySecond;
                            daySecond = dayFirst;
                            dayFirst = a;
                        }
                        if(numberFirst > numberSecond){
                            let a = numberSecond;
                            numberSecond = numberFirst;
                            numberFirst = a;
                        }

                        for(let i= dayFirst; i <= daySecond; i++){

                            for(let j = numberFirst; j <= numberSecond; j++){

                                let $blockTrick = document.querySelector(`.${numbeToDay(i)}${j}`);
                            
                                if($first != $blockTrick){ 
                                    $blockTrick.style.backgroundColor= "var(--second-color)";
                                
                                    if($blockTrick.classList.length == 3){
                                        
                                        if($blockTrick.classList[1] != "point"){
                                    
                                         $blockTrick.classList.remove(`${$blockTrick.classList[1]}`);
                                        }
                                        else{
                                            $blockTrick.classList.remove(`${$blockTrick.classList[2]}`);
                                        }
                                    }

                                    if($blockTrick.classList.length == 2 && !$blockTrick.classList.contains("point")){
                                        $blockTrick.classList.remove(`${$blockTrick.classList[1]}`);
                                    }        
                                }
                            
                            }
                        }
                    }
                    else{
                        $first.classList.remove("first");
                    }
                }
            }

        });

        el.addEventListener("click", e => {
            
            let $block = e.target;
            let $task = document.querySelector(".select-task");

            if($task != null){

                let $trick = document.querySelector(".trick");
                if($trick.classList.contains("select-trick")){
                    let $first = document.querySelector(".first");
                    if($first == null) {
                        history = [];
                        let $divs = document.querySelectorAll(".blocks div"); 
                        $divs.forEach(el => {
                            
                            if(el.classList.contains("point")) el.classList.remove("point");
                            
                            if(el.classList.length != 1){
                                history.push(el.classList.value);
                            }
                        });
                    }
                }
            

                let color = $task.style.backgroundColor;
                
                if($block.classList.length == 3){
                    if($block.classList[1] != "point"){
                
                        $block.classList.remove(`${$block.classList[1]}`);
                    }
                    else{
                        $block.classList.remove(`${$block.classList[2]}`);
                    }
                }

                if($block.classList.length == 2 && !$block.classList.contains("point")){
                    $block.classList.remove(`${$block.classList[1]}`);
                }
                
                if(el.style.backgroundColor == color){
                    
                    el.style.backgroundColor = "var(--second-color)";
                }
                else{
                    el.style.backgroundColor = color;
                    $block.classList.add(`${$task.children[0].textContent.replace(/ /g, "")}`);
                }
                

                if($trick.classList.contains("select-trick")){
    
                    let $first = document.querySelector(".first");
                    if($first == null){
                        
                        $block.classList.add("first");            
                    }
                    else{
                        
                        let dayFirst = dayToNumber($first.classList[0].slice(0,3));
                        let numberFirst = parseInt($first.classList[0].slice(3,5));

                        let daySecond = dayToNumber($block.classList[0].slice(0,3));
                        let numberSecond = parseInt($block.classList[0].slice(3,5));

                        if(dayFirst > daySecond){
                            let a = daySecond;
                            daySecond = dayFirst;
                            dayFirst = a;
                        }
                        if(numberFirst > numberSecond){
                            let a = numberSecond;
                            numberSecond = numberFirst;
                            numberFirst = a;
                        }

                        for(let i= dayFirst; i <= daySecond; i++){

                            for(let j = numberFirst; j <= numberSecond; j++){

                                let $blockTrick = document.querySelector(`.${numbeToDay(i)}${j}`);

                                if($blockTrick.classList.length == 3){
                                    if($blockTrick.classList[1] != "point"){
                                    
                                        $blockTrick.classList.remove(`${$blockTrick.classList[1]}`);
                                    }
                                    else{
                                        $blockTrick.classList.remove(`${$blockTrick.classList[2]}`);
                                    }
                                }

                                if($blockTrick.classList.length == 2 && !$blockTrick.classList.contains("point")){
                                    $blockTrick.classList.remove(`${$blockTrick.classList[1]}`);
                                } 

                                $blockTrick.classList.add(`${$task.children[0].textContent.replace(/ /g, "")}`);
                                $blockTrick.style.backgroundColor = $first.style.backgroundColor;
                            }
                        }
                        $first.classList.remove("first");
                        //let $back = document.querySelector(".back");
                        //$back.classList.remove("back-none");
                    }
                }

                blocksStorage();
            }
                
        });
    });
    
}


function numbeToDay(number) {

    let day;
     
    switch (number) {
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

function dayToNumber(day) {

    let number;
     
    switch (day) {
        case "sun":
            number = 0;
            break;
        case "mon":
            number = 1;
            break;
        case "tue":
            number = 2;
            break;
        case "wed":
            number = 3;
            break;
        case "thu":
            number = 4;
            break;
        case "fri":
            number = 5;
            break;
        case "sat":
            number = 6;
            break;
    }  

    return number;
}

function blocksStorage() {
    
    let $divs = document.querySelectorAll(".blocks div");
    let blocks = new Array();
    $divs.forEach(el => {
                            
        if(el.classList.contains("point")) el.classList.remove("point");        
        if(el.classList.length != 1) blocks.push(el.classList.value);
    });
                
    localStorage.setItem("blocks", JSON.stringify(blocks));
}