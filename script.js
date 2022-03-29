let slide_exchange_position = 0;
let slide_options_position = 1;


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
let arrowleftoptions = document.getElementById("arrow-left-options");
let arrowrightoptions = document.getElementById("arrow-right-options");
let slidesoptions = document.getElementsByClassName("options-grid-pane");


let month = document.getElementById('month');
let year = document.getElementById('year');
let life = document.getElementById('life');


function slide_options_left(){
    slide_options_position -= 1;
    if (slide_options_position == 0) {
        arrowleftoptions.style.visibility = "hidden";
        arrowrightoptions.style.visibility = "visible";
        slidesoptions[0].style.gridArea = "two";
        slidesoptions[1].style.gridArea = "one";
        slidesoptions[2].style.gridArea = "three";
        month.style.visibility = "visible"
        year.style.visibility = "hidden"
    }

    if (slide_options_position == 1) {
        arrowleftoptions.style.visibility = "visible";
        arrowrightoptions.style.visibility = "visible";
        slidesoptions[0].style.gridArea = "one";
        slidesoptions[1].style.gridArea = "two";
        slidesoptions[2].style.gridArea = "three";
        year.style.visibility = "visible"
        life.style.visibility = "hidden"
    }
}
function slide_options_right(){
    slide_options_position += 1;
    if (slide_options_position == 2) {
        arrowrightoptions.style.visibility = "hidden";
        arrowleftoptions.style.visibility = "visible";
        slidesoptions[0].style.gridArea = "one";
        slidesoptions[1].style.gridArea = "three";
        slidesoptions[2].style.gridArea = "two";
        life.style.visibility = "visible"
        year.style.visibility = "hidden"
    }
    if (slide_options_position == 1) {
        arrowrightoptions.style.visibility = "visible";
        arrowleftoptions.style.visibility = "visible";
        slidesoptions[0].style.gridArea = "one";
        slidesoptions[1].style.gridArea = "two";
        slidesoptions[2].style.gridArea = "three";
        year.style.visibility = "visible"
        month.style.visibility = "hidden"
    }
}