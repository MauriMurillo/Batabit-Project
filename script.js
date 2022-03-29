let slide_exchange_position = 0;
let slide_options_position = 0;


function slide(){
    slide_exchange_position = 1 - slide_exchange_position;
    let slides = document.getElementsByClassName("slide");
    let arrowleft = document.getElementById("arrow-left");
    let arrowright = document.getElementById("arrow-right");
    if (slide_exchange_position == 1) {
        arrowleft.style.visibility = "hidden";
        arrowright.style.visibility = "visible";
        slides[0].style.gridArea = "one";
        slides[1].style.gridArea = "two";
    }else{
        arrowleft.style.visibility = "visible";
        arrowright.style.visibility = "hidden";
        slides[1].style.gridArea = "one";
        slides[0].style.gridArea = "two";
    }
    return;
}