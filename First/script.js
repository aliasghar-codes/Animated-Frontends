document.addEventListener("mousemove", (dets) => {
  let cursor = document.getElementById("cursor");
  let blurCursor = document.getElementById("blur-cursor");

  if (dets.target.id == "detect-link") {
    cursor.style.top = dets.y - 40 + "px";
    cursor.style.left = dets.x - 40 + "px";
  } else {
    cursor.style.top = dets.y - 10 + "px";
    cursor.style.left = dets.x - 10 + "px";
  }

  blurCursor.style.top = dets.y - 125 + "px";
  blurCursor.style.left = dets.x - 125 + "px";
});

const anchors = Array.from(document.querySelectorAll("a"));

anchors.forEach((anchor) => {
  anchor.addEventListener("mousemove", () => {
    let cursor = document.getElementById("cursor");
    cursor.style.width = "80px";
    cursor.style.height = "80px";
    cursor.style.border = "1px solid white";
    cursor.style.backgroundColor = "transparent";
    cursor.style.transition = "all .2s ease";
  });

  anchor.addEventListener("mouseleave", () => {
    let cursor = document.getElementById("cursor");
    cursor.style.width = "25px";
    cursor.style.height = "25px";
    cursor.style.border = "none";
    cursor.style.backgroundColor = "hsl(265, 72%, 44%)";
    cursor.style.transition = "none";
  });
});

const arrowDown = document.querySelector(".arrow-down i");

arrowDown.addEventListener("mousemove", () => {
  arrowDown.style.padding = "1.5rem";
  arrowDown.style.fontSize = "3rem";
  arrowDown.style.backgroundColor = "hsl(265, 58%, 34%)";
  arrowDown.style.border = "none";
  arrowDown.style.transition = "all .5s linear";
})
arrowDown.addEventListener("mouseleave", () => {
  arrowDown.style.padding = "2rem";
  arrowDown.style.fontSize = "4.5rem";
  arrowDown.style.backgroundColor = "transparent";
  arrowDown.style.border = "1px solid white";
  arrowDown.style.transition = "all .1s linear";
})

const image = document.querySelector(".third-last-left img");
const dots = document.querySelectorAll(".dot");
let count = 0;

dots.forEach(dot => {
  dot.addEventListener("click", handleSlider)
});

function handleSlider(event) {

  count = event ? event.target.getAttribute("data-value") : (count + 1) % 3;

  image.style.opacity = "0";

  dots.forEach(dot => {
    dot.firstElementChild.style.backgroundColor = "hsla(0, 0%, 100%, 0.808)";
    dot.style.padding = "0";
    dot.style.border = "none";
  })

  const selectedDot = dots[count];

  selectedDot.style.padding = ".7rem";
  selectedDot.style.border = "2px solid hsl(265, 80%, 57%)";
  selectedDot.firstElementChild.style.backgroundColor = "hsl(265, 80%, 57%)";

  if (count == 0) {
    image.src = "./assets/images/other-1.png";
    image.style.opacity = "1";

  } else if (count == 1) {

    image.src = "./assets/images/other-2.png";
    image.style.opacity = "1";

  } else if (count == 2) {

    image.src = "./assets/images/other-3.png";
    image.style.opacity = "1";

  }

}

setInterval(() => {

  handleSlider();

}, 4000);

const lastCards = document.querySelectorAll(".last-card");

lastCards.forEach( card => { 
  const h2 = document.querySelector(".last h2");

  card.addEventListener("mousemove", () => {
    h2.id = "change-stroke";
  })
  
  card.addEventListener("mouseleave", () => {
    h2.id = "";
  })

})

gsap.to("header", {
  backgroundColor: "black",
  duration: 0.5,
  height: "12vh",
  scrollTrigger: {
    trigger: "header",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to(".overlay", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".overlay",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from(".about-us .about-image, .about-us .content", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    start: "top 90%",
    end: "top 60%",
    scrub: 1
  },
});

gsap.from(".cards-container #about-card1, .cards-container #about-card2, .cards-container #about-card3", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  scrollTrigger: {
    trigger: ".cards-container",
    scroller: "body",
    start: "top 90%",
    end: "top 65%",
    scrub: 1
  },
});

gsap.to(".second-last #top", {
  y: 50,
  x: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".second-last",
    scroller: "body",
    start: "top 60%",
    end: "top 50%",
    scrub: 1
  },
});

gsap.to(".second-last #bottom", {
  y: -50,
  x: -50,
  duration: 1,
  scrollTrigger: {
    trigger: ".second-last",
    scroller: "body",
    start: "top 60%",
    end: "top 50%",
    scrub: 1
  },
});

gsap.to(".last h2", {
  y: -30,
  duration: 0.3,
  scrollTrigger: {
    trigger: ".last",
    scroller: "body",
    start: "top 80%",
    end: "top 75%",
    scrub: 1
  },
});
