let openerSideNav=document.querySelector("button#hamburger");
let sideNav=document.querySelector("div.sideNav");
let subPage=document.querySelector("div.subPage");
let menuButtonIcon=document.querySelector("button#hamburger>img:first-of-type");
let closeButtonIcon=document.querySelector("button#hamburger>img:nth-of-type(2)");

openerSideNav.addEventListener("click",function(){
    sideNav.classList.toggle("active-flex");
    subPage.classList.toggle("active-delayed");
    menuButtonIcon.classList.toggle("close");
    closeButtonIcon.classList.toggle("active-delayed");
});
subPage.addEventListener("click",function(){
    sideNav.classList.toggle("active-flex");
    subPage.classList.toggle("active-delayed");
    menuButtonIcon.classList.toggle("close");
    closeButtonIcon.classList.toggle("active-delayed");
});

