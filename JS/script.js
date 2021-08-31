var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}
let mode = localStorage.getItem("mode")
console.log(mode)
const toggleMode = () => {
    if (mode === "dark") {
        localStorage.setItem('mode', 'dark')
        document.querySelector(".main-wrapper").classList.add("dark");
        document.querySelector(".toggler").classList.remove("white");
        document.querySelector("html").style.backgroundColor = "rgb(22, 22, 37)";
        mode = "light"

    } else {
        localStorage.setItem('mode', 'light')
        console.log(mode)
        document.querySelector(".main-wrapper").classList.remove("dark");
        document.querySelector(".toggler").classList.add("white");
        document.querySelector("html").style.backgroundColor = "#fff";
        mode = "dark"

    }
}
if (mode === "undefined") {
    mode = "light"
}
window.onload = toggleMode()
