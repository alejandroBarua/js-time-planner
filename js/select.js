export default function selectBlock() {
 
    let $blocks = document.querySelectorAll(".blocks div");

    $blocks.forEach(el => {

        let day = el.classList[0].slice(0,3);
        let number = el.classList[0].slice(3,5);
            
        let $day = document.querySelector(`.${day}`);
        let $number = document.querySelector(`.id${number}`);

        el.addEventListener("mouseover", e => {
            $day.classList.add("color-gray");
            $number.classList.add("color-gray");
        });
        
        el.addEventListener("mouseout", e => {
            
            $day.classList.remove("color-gray");
            $number.classList.remove("color-gray");        
        });

        el.addEventListener("click", e => {

            
            let $task = document.querySelector(".select-task");
            let $block = e.target;
            
            if($task != null){
                    
                let color = $task.style.backgroundColor;
                
                if($block.classList.length == 3){
                    if($block.classList[1] != "point"){
                
                        $block.classList.remove(`${$block.classList[1]}`);
                    }
                    else{
                        $block.classList.remove(`${$block.classList[2]}`);
                    }
                }
                
                if(el.style.backgroundColor == color){
                    
                    el.style.backgroundColor = "rgb(219, 216, 216)";
                }
                else{
                    el.style.backgroundColor = color;
                    $block.classList.add(`${$task.children[1].textContent.replace(/ /g, "")}`);
                }

                
                let $trick = document.querySelector(".trick");

                if($trick.classList.contains("select-trick")){

                    let $first = document.querySelector(".first");

                    if($first == null){
                    
                        $block.classList.add("first");
                    }
                    else if($first != $block && $first.style.backgroundColor == $block.style.backgroundColor){

                        console.log($first.classList[0], $block.classList[0]);

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
                                $blockTrick.style.backgroundColor= color;

                            }
                        }
                        
                        
                        $first.classList.remove("first");
                    }
                    else{
                        $first.classList.remove("first");
                    }

                }
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