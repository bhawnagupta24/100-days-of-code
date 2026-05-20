 document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!

  let time = gsap.timeline({
    paused: true
  })


  time.to("#square1", {
    rotation:360,
    duration:3,
    borderRadius:"50px",
    color:"blue",
    boxShadow: "0 0 20px white",
    backgroundColor: "rgb(225, 220, 220)"
  })

  time.to("#square2", {
    rotation:360,
    duration:3,
    borderRadius:"50px",
    boxShadow: "0 0 20px white",
    backgroundColor: "rgb(141, 140, 140)"
  })

  time.to("#square3", {
    rotation:360,
    duration:3,
    borderRadius:"50px",
    boxShadow: "0 0 20px white",
    backgroundColor: "rgb(86, 81, 81)"
  })


  

 let play = document.querySelector("#button1")
 let pause = document.querySelector("#button2")
 let restart = document.querySelector("#button3")
 let timeline = document.querySelector("#button4")
 let reverse = document.querySelector("#button5")
 let resume = document.querySelector("#button6")

 button1.addEventListener("click",()=>{
    time.play()
 })

  button2.addEventListener("click",()=>{
    time.pause()
 })

  button3.addEventListener("click",()=>{
    time.restart()
 })

  button4.addEventListener("click",()=>{
    time.timeScale()
 })

  button5.addEventListener("click",()=>{
    time.reverse()
 })
  button6.addEventListener("click",()=>{
    time.resume()
 })

 });
