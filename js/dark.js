export default function dark() {

    const $dark = document.querySelector(".dark-btn"),
        $body = document.querySelector("body"),
        $addTask = document.querySelector(".addTask"),
        $escape = document.querySelector(".escape"),
        $now = document.querySelector(".now");

    const lightMode = () => {
        $body.classList.remove("body-dark");
        if($addTask) $addTask.classList.remove("mode-dark");
        if($escape) $escape.classList.remove("mode-dark");
        $now.classList.remove("mode-dark");
        localStorage.setItem("theme", "light");
    };

    const darkMode = () => {
        $body.classList.add("body-dark");
        if($addTask) $addTask.classList.add("mode-dark");
        if($escape) $escape.classList.add("mode-dark");
        $now.classList.add("mode-dark");
        localStorage.setItem("theme", "dark");
    };

    $dark.addEventListener("click", e => {
        
        $dark.classList.contains("active") ? lightMode() : darkMode();
    });

     document.addEventListener("DOMContentLoaded", e => {

        if(localStorage.getItem("theme") === null) localStorage.setItem("theme", "light");
        if(localStorage.getItem("theme") === "light") lightMode();
        if(localStorage.getItem("theme") === "dark") {
            $dark.classList.add("active");
            darkMode();
        };

    });

}