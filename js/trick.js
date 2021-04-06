export default function trick() {
    
    let $trick = document.querySelector(".trick");
    $trick.addEventListener("click", e => {
        
        if($trick.classList.contains("select-trick")){
            $trick.classList.remove("select-trick");

            let $first = document.querySelector(".first");
            if($first != null) $first.classList.remove("first");
        }
        else{
            $trick.classList.add("select-trick");
        }
    });
}