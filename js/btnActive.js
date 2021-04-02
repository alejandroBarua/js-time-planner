export default function btnActive(menu) {
    
    document.addEventListener("click", e => {

         if(e.target.matches(menu)) {

             e.target.classList.toggle("active");
         }
    });
}