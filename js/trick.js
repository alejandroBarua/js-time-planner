export default function trick(trickBtn) {
    
    document.addEventListener("click", e => {

        if(e.target.matches(trickBtn)){

            let $trick = document.querySelector(trickBtn);
            
            if($trick.classList.contains("select-trick")){
                $trick.classList.remove("select-trick");
            }
            else{
                $trick.classList.add("select-trick");
            }
        }

    });
}