document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger, SplitText);

  let split = SplitText.create("#p1",
    { type: "words, chars", mask: "words" });

  t1.from(split.chars, {
    duration: 0.5,
    y: 100,
    stagger: 0.05
  });

  t1.to(".img1", {
    x: 0,
    duration: 1
  })

  t1.to(".img2", {
    x: 0,
    duration: 1
  })

  t1.from("#image", {
    opacity: 0,
    duration: 4
  })

  t1.from("#h2", {
    opacity: 0,
    duration: 2
  })

  t1.to("#h1",
    {
      x: 0,
      duration: 2,
      opacity: 1,
    }
  );

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section1",
      start: "50% 50%",
      end: "90% 40%",
      markers: true,
      pin: true,
      scrub: 4
    }
  })

  

  // gsap.to("#h1", {
  //   scrollTrigger: "#h1",
  //   x: 0,
  //   duration:2
  // });

});