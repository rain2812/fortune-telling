let navBool = true
let menu = document.getElementsByTagName("menu")[0];
document.getElementsByTagName("nav")[0].addEventListener("click", function(){
    if(navBool){
        menu.style.display = "block";
        this.children[0].style.opacity = 0;
        this.children[1].style.transform = "rotate(45deg)";
        this.children[2].style.transform = "rotate(-45deg)";
        this.children[3].style.opacity = 0;
    } else {
        menu.style.display = "none";
        this.children[0].style.opacity = 1;
        this.children[1].style.transform = "rotate(0deg)";
        this.children[2].style.transform = "rotate(0deg)";
        this.children[3].style.opacity = 1;
    }
    navBool = !navBool;
})