var tablink = document.getElementByClassName("tab-link");

function opentab(tabname){
    for(tab of tablink){
        tab.classList.remove("active-link");
    }
}