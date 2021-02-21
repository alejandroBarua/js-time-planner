import { $history } from "./select.js";

export default function trick() {
    
    let $trick = document.querySelector(".trick");
    let $back = document.querySelector(".back");

    $trick.addEventListener("click", e => {
        
        if($trick.classList.contains("select-trick")){
            $trick.classList.remove("select-trick");
            $back.classList.add("back-none");

            let $first = document.querySelector(".first");
            if($first != null) $first.classList.remove("first");
        }
        else{
            $trick.classList.add("select-trick");
        }
    });

    $back.addEventListener("click", e => {

        e.stopPropagation();
        console.log($history);
        $back.classList.add("back-none");
    });

}