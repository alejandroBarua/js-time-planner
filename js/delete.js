export default function deleteTask(e, colorSelector, setBlocksStorage){

    const $deleteBtn = e.target,
        $divDelete = e.target.parentNode.parentNode,
        $divFatherDelete = document.querySelector(".list-task");
    
    if($divDelete.classList.contains("select-task")){
        
        const $divNext = $divDelete.nextElementSibling;
        if(!$divNext) return colorSelector($divNext);
        
        const $divPrevious = $divDelete.previousElementSibling;
        if(!$divPrevious) return colorSelector($divPrevious);
    }

    let taskContent = JSON.parse(localStorage.getItem("tasks"));

    taskContent.forEach((el, index) => {
        if(el.name == $deleteBtn.dataset.name){
            taskContent.splice(index, 1);
        } 
    });

    localStorage.setItem("tasks", JSON.stringify(taskContent));

    $divFatherDelete.removeChild($divDelete);
    
    let nameStask = $deleteBtn.dataset.name.replace(/ /g, "");
    const $blocks = document.querySelectorAll(`.${nameStask}`);

    if($blocks.length != 0){
        $blocks.forEach(el => {
            el.classList.remove(nameStask);
            el.style.background = "var(--second-color)";
        });
    }
    setBlocksStorage();
}