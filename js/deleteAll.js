export default function deleteAll() {
    
    const $blocks = document.querySelectorAll(".blocks div");

    if($blocks.length > 0){
        $blocks.forEach(el => {
            let nameTask = el.classList[1];
            el.classList.remove(nameTask);
            el.style.background = "var(--second-color)";
        });
    }
    
    localStorage.removeItem("tasks");
    localStorage.removeItem("blocks");
    
    document.querySelector(".list-task").textContent = "";
    document.querySelector(".addTask-btn").classList.add("active");
    document.querySelector(".addTask").classList.add("addTaskActive");
}