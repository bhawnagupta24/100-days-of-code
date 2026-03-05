let main = document.querySelector("#main");
let imageContainer = document.querySelector(".image-container")
let heading1 = document.querySelector("#heading1")
let heading2 = document.querySelector("#heading2")
let heading3 = document.querySelector("#heading3")
let heading4 = document.querySelector("#heading4")
let heading5 = document.querySelector("#heading5")
let wrapper = document.querySelector("#image-wrapper")

main.addEventListener("mousemove", (e)=>{
    imageContainer.style.top = e.clientY +"px";
    imageContainer.style.left = e.clientX +"px";
})

heading1.addEventListener("mousemove", ()=>{
    wrapper.style.transform = "translateY(0%)";
})
heading2.addEventListener("mousemove", ()=>{
    wrapper.style.transform = "translateY(-20%)";
})
heading3.addEventListener("mousemove", ()=>{
    wrapper.style.transform = "translateY(-40%)";
})
heading4.addEventListener("mousemove", ()=>{
    wrapper.style.transform = "translateY(-60%)";
})
heading5.addEventListener("mousemove", ()=>{
    wrapper.style.transform = "translateY(-80%)";
})