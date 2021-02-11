
export default function pointTime() {
    
    setInterval(() => {
    
        let date = new Date();
    
        let day = numbeToDay(date.getDay());

        let $box = document.querySelector(`.${day}${date.getHours()}`);
        $box.classList.add("point");

        let $boxAnt = document.querySelector(`.${day}${date.getHours()-1}`);
        $boxAnt.classList.remove("point");
    
    }, 1000);
}

function numbeToDay(value) {

    let day;
     
    switch (value) {
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

    return day;
}
