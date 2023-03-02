let openerSideNav = document.querySelector("button#hamburger");
let sideNav = document.querySelector("div.sideNav");
let subPage = document.querySelector("div.subPage");
let menuButtonIcon = document.querySelector(
  "button#hamburger>img:first-of-type"
);
let closeButtonIcon = document.querySelector(
  "button#hamburger>img:nth-of-type(2)"
);
let searchButtonLg = document.querySelector("button#MglassLG");
let seacrhBarLg = document.querySelector("div.searchLG");
let subSearchPage = document.querySelector("div.subSearchPage");

openerSideNav.addEventListener("click", function () {
  sideNav.classList.toggle("active-flex");
  subPage.classList.toggle("active-delayed");
  menuButtonIcon.classList.toggle("close");
  closeButtonIcon.classList.toggle("active-delayed");
});
subPage.addEventListener("click", function () {
  sideNav.classList.toggle("active-flex");
  subPage.classList.toggle("active-delayed");
  menuButtonIcon.classList.toggle("close");
  closeButtonIcon.classList.toggle("active-delayed");
});
searchButtonLg.addEventListener("click", function () {
  seacrhBarLg.classList.toggle("active-flex");
  subSearchPage.classList.toggle("active-delayed");
});
subSearchPage.addEventListener("click", function () {
  seacrhBarLg.classList.toggle("active-flex");
  subSearchPage.classList.toggle("active-delayed");
});

let buttonMenuProducts = document.querySelector(
  "div.navButton>button.products"
);
let buttonMenuUser = document.querySelector("div.navButton>button.user");
let accordionMenu = document.querySelector("div.accordionMenu");

buttonMenuProducts.addEventListener("click", function () {
  this.classList.add("clickButtonMenu");
  accordionMenu.classList.add("active-flex");
  buttonMenuUser.classList.remove("clickButtonMenu");
});
if (buttonMenuProducts.autofocus) {
  buttonMenuProducts.click();
}
buttonMenuUser.addEventListener("click", function () {
  this.classList.add("clickButtonMenu");
  accordionMenu.classList.remove("active-flex");
  buttonMenuProducts.classList.remove("clickButtonMenu");
});

/* accordion menu elements */

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active-accordion");
    let panel = this.nextElementSibling;
    panel.classList.toggle("active-flex");
  });
}
let subAcc = document.getElementsByClassName("sub-accordion");

for (let i = 0; i < subAcc.length; i++) {
  subAcc[i].addEventListener("click", function () {
    this.classList.toggle("active-sub-accordion");
    let panel = this.nextElementSibling;
    panel.classList.toggle("active-flex");
  });
}

let accColorSkin = document.querySelector(".accordion-color-skin");

accColorSkin.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-skin");
});

let accColorMake = document.querySelector(".accordion-color-make");

accColorMake.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-make");
});
let accColorFrag = document.querySelector(".accordion-color-frag");

accColorFrag.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-frag");
});
let accColorBath = document.querySelector(".accordion-color-bath");

accColorBath.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-bath");
});
let accColorHair = document.querySelector(".accordion-color-hair");

accColorHair.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-hair");
});
let accColorAcc = document.querySelector(".accordion-color-accessories");

accColorAcc.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-accessories");
});
let accColorWellness = document.querySelector(".accordion-color-wellness");

accColorWellness.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-wellness");
});
let accColorMen = document.querySelector(".accordion-color-men");

accColorMen.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-men");
});
let accColorKids = document.querySelector(".accordion-color-kids");

accColorKids.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-kids");
});
/* End accordion menu elements */
