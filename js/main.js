
function pointTime() {
    
    let date = new Date();
    let day;

    switch (date.getDay()) {
        case 0:
            day = "sun";
            break;
        case 1:
            day = "mon";
            break;
        case 2:
            day = "tue";
            break;
        case 3:
            day = "wed";
            break;
        case 4:
            day = "thu"
            break;
        case 5:
            day = "fri";
            break;
        case 6:
            day = "sat";
            break;
    }   

    let $box = document.querySelector(`.${day}${date.getHours()}`);
    $box.classList.add("color-red");

    let $boxAnt = document.querySelector(`.${day}${date.getHours()-1}`);
    $boxAnt.classList.remove("color-red");
}
    
pointTime();

setInterval(() => {
    
    pointTime();
    
}, 1000);