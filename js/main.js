let openerSideNav=document.querySelector("button#hamburger");
let sideNav=document.querySelector("div.sideNav");
let subPage=document.querySelector("div.subPage");
let menuButtonIcon=document.querySelector("button#hamburger>img:first-of-type");
let closeButtonIcon=document.querySelector("button#hamburger>img:nth-of-type(2)");
let searchButtonLg =document.querySelector("button#MglassLG");
let seacrhBarLg=document.querySelector("div.searchLG");
let subSearchPage=document.querySelector("div.subSearchPage");

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
searchButtonLg.addEventListener("click",function(){
    seacrhBarLg.classList.toggle("active-flex");
    subSearchPage.classList.toggle("active-delayed");
});
subSearchPage.addEventListener("click",function(){
    seacrhBarLg.classList.toggle("active-flex");
    subSearchPage.classList.toggle("active-delayed");
});

let buttonMenuProducts = document.querySelector("div.navButton>button.products");
let buttonMenuUser = document.querySelector("div.navButton>button.user");

buttonMenuProducts.addEventListener("click",function(){
    this.classList.add("clickButtonMenu");
    buttonMenuUser.classList.remove("clickButtonMenu");
});
if(buttonMenuProducts.autofocus){
    buttonMenuProducts.click();
};
buttonMenuUser.addEventListener("click" , function(){
    this.classList.add("clickButtonMenu")
    buttonMenuProducts.classList.remove("clickButtonMenu");
});
