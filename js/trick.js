import { history } from "./select.js";


export default function trick() {
    
    let $trick = document.querySelector(".trick");
/*     let $back = document.querySelector(".back");
 */
    $trick.addEventListener("click", e => {
        
        if($trick.classList.contains("select-trick")){
            $trick.classList.remove("select-trick");
            //$back.classList.add("back-none");

            let $first = document.querySelector(".first");
            if($first != null) $first.classList.remove("first");
        }
        else{
            $trick.classList.add("select-trick");
        }
    });

    /* $back.addEventListener("click", e => {

        e.stopPropagation();
        $back.classList.add("back-none");
        let $blocks = document.querySelectorAll(".blocks div");
        
        $blocks.forEach(el => {
            if(el.classList.contains("point")) el.classList.remove("point");
                            
            if(el.classList.length != 1){
                el.classList.remove(el.classList[1]);
                el.style.backgroundColor = "rgb(219, 216, 216)"; 
            }
        });

        history.forEach(el => {
            let content = el.split(" ");
            let $block = document.querySelector(`.${content[0]}`);
            $block.classList.add(content[1]);
            let $color = document.querySelector(`.${content[1]}`);
            $block.style.backgroundColor = $color.style.backgroundColor;
        });
    }); */

}