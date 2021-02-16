export default function validation() {
    
    document.addEventListener("input", e => {

        if(e.target.matches(".name-input")){

            let $input = e.target,
                pattern = $input.pattern;

            if(pattern){

                let regex = new RegExp(pattern);
                
                return !regex.exec($input.value)
                    ? $input.classList.add("color-red")
                    : $input.classList.remove("color-red");
            }
        }
    });
}