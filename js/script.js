let slider = document.getElementById("slider");
let slider_container = document.getElementById("slider-container");

let elements = document.querySelectorAll(".slider__element");

let button_left = document.getElementById("button-left");
let button_right = document.getElementById("button-right");


button_right.addEventListener("click", function(){
    slider_container.style.left = "-210px";
    slider_container.classList.add("transition");
    setTimeout(function(){
        slider_container.classList.remove("transition");
        slider_container.appendChild(elements[0]);
        slider_container.style.left="0px";
    }, 1000)
    
    elements = document.querySelectorAll(".slider__element");
});

button_left.addEventListener("click", function(){
    slider_container.style.left = "210px";
    slider_container.classList.add("transition");
    setTimeout(function(){
        slider_container.classList.remove("transition");
        slider_container.insertBefore(elements[elements.length-1], elements[0]);
        slider_container.style.left="0px";
    }, 1000)
    
    elements = document.querySelectorAll(".slider__element");
});
