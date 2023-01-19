const navLinks = document.getElementById("navLinks");
const openMenu = document.querySelector(".fa-solid.fa-bars");
const closeMenu = document.querySelector(".fa-solid.fa-xmark");

openMenu.addEventListener("click", function () {
  navLinks.classList.add("hidden");
});
closeMenu.addEventListener("click", function () {
  navLinks.classList.remove("hidden");
});

const navbar = document.querySelector(".header--navbar-nav");
navbar.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("header--navbar-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("hidden");
  }
});

const header = document.querySelector(".header");
const nav = document.querySelector(".header--navbar");
const navHeight = nav.getBoundingClientRect().height;
const brandLogo = document.querySelector(".header--navbar--brand");
const navCon = document.querySelector(".nav-container");
const headerLink = document.querySelector(".header--navbar-nav");
const navConLinks = document.querySelectorAll(".header--navbar-link");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    openMenu.style.color = "hsl(275, 54%, 33%)";
  } else {
    openMenu.style.color = "white";
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    brandLogo.style.color = "hsl(275, 54%, 33%)";
  } else {
    brandLogo.style.color = "white";
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    const link = headerLink;
    const siblings = link
      .closest(".header--navbar")
      .querySelectorAll(".header--navbar-link");
    siblings.forEach((el) => {
      el.style.color = "hsl(275, 54%, 33%)";
    });
  } else {
    const link = headerLink;
    const siblings = link
      .closest(".header--navbar")
      .querySelectorAll(".header--navbar-link");
    siblings.forEach((el) => {
      el.style.color = "white";
    });
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    headerLink.style.setProperty("--afterBack", "hsl(335, 87%, 51%)");
  } else {
    headerLink.style.setProperty("--afterBack", "hsl(0, 0%, 90%)");
  }
});

const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  sectionObserver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
