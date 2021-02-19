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
            }
        });
    });
    
}