export default function clean(){
    
    const $cleanBtn = document.querySelector(".clean-btn");

    $cleanBtn.addEventListener("click", e => {
        
        const $blocks = document.querySelectorAll(".blocks div");
    
        if($blocks.length > 0){
            $blocks.forEach(el => {
                let nameTask = el.classList[1];
                el.classList.remove(nameTask);
                el.style.background = "var(--second-color)";
            });
        }

        localStorage.removeItem("blocks");

    });
}