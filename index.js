// Fix Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = el.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

// Toggle Menu
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});



// Glidejs

const glide = document.querySelector(".glide");

if (glide)
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "linear",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();

AOS.init();

new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("a Manager!", { delay: 500 })
  .pause(1200)
  .delete(10)
  .type("a HVAC Expert!", { delay: 500 })
  .pause(1200)
  .delete(14)
  .type("an Environmentalist!", { delay: 500 })
  .pause(1200)
  .delete(20)
  .type("a Vapor Absorption Machine Expert!", { delay: 500 })
  .pause(1200)
  .delete(34)
  .type("an Entrepreneur!", { delay: 500 })
  .pause(1200)
  .delete(16)
  .type("a Waste Heat Recovery Expert!", { delay: 500 })
  .pause(1200)
  .delete(29)
  .type("a Marketing Expert!", { delay: 500 })
  .pause(1200)
  .delete(19)
  .go();

new TypeIt("#type2", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
.type("a Manager!", { delay: 500 })
  .pause(1200)
  .delete(10)
  .type("a HVAC Expert!", { delay: 500 })
  .pause(1200)
  .delete(14)
  .type("an Environmentalist!", { delay: 500 })
  .pause(1200)
  .delete(20)
  .type("a Vapor Absorption Machine Expert!", { delay: 500 })
  .pause(1200)
  .delete(34)
  .type("an Entrepreneur!", { delay: 500 })
  .pause(1200)
  .delete(16)
  .type("a Waste Heat Recovery Expert!", { delay: 500 })
  .pause(1200)
  .delete(29)
  .type("a Marketing Expert!", { delay: 500 })
  .pause(1200)
  .delete(19)
  .go();

gsap.from(".logo", { opacity: 1, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 0.8, x: 20 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.1, x: -200 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 1.4, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 1.7, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 2.1, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 2.4, y: -10 });


gsap.from(".icons span", {
  opacity: 0,
  duration: 1,
  delay: 2.5,
  x: -30,
  stagger: 0.2,
});
