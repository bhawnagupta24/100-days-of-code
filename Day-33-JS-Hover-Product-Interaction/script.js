let main = document.querySelector("#main");
let box1 = document.querySelector("#box1");
let heading1 = document.querySelector("#heading1");
let heading2 = document.querySelector("#heading2");
let heading3 = document.querySelector("#heading3");

box1.addEventListener("mouseenter", ()=>{
    main.style.backgroundColor = "rgba(225, 218, 218, 0.87)";
    heading1.style.color= "blue"
});
box1.addEventListener("mouseleave", ()=>{
    main.style.backgroundColor = "white";
    heading1.style.color= "black"
});

box2.addEventListener("mouseenter", ()=>{
    main.style.backgroundColor = "rgba(225, 218, 218, 0.87)";
    heading2.style.color= "blue"
});
box2.addEventListener("mouseleave", ()=>{
    main.style.backgroundColor = "white";
    heading2.style.color= "black"
});

box3.addEventListener("mouseenter", ()=>{
    main.style.backgroundColor = "rgba(225, 218, 218, 0.87)";
    heading3.style.color= "blue"
});
box3.addEventListener("mouseleave", ()=>{
    main.style.backgroundColor = "white";
    heading3.style.color= "black"
});

box2.addEventListener("mouseenter", ()=>{
    main.style.backgroundColor = "rgba(228, 233, 252, 0.82)";
});
box2.addEventListener("mouseleave", ()=>{
    main.style.backgroundColor = "white";
});

box3.addEventListener("mouseenter", ()=>{
    main.style.backgroundColor = "rgba(191, 191, 193, 0.82)";
});
box3.addEventListener("mouseleave", ()=>{
    main.style.backgroundColor = "white";
});



mouse.addEventListener("mousemove", function(det){
    
})