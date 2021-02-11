
function pointTime() {
    
    let date = new Date();

    let $days = document.querySelectorAll(".days ul li");
    $days[date.getDay()].classList.add("color-red");
    $days[date.getDay()-1].classList.remove("color-red");

    let $hours = document.querySelectorAll(".numbers div")
    $hours[date.getHours()].classList.add("color-red");
    $hours[date.getHours()-1].classList.remove("color-red");
}
    
pointTime();

setInterval(() => {
    
    pointTime();
    
}, 1000);