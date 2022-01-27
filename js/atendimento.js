/* --------------Desktop-------------- */







/* --------------Tablet-------------- */


let imgMenuTablet = document.querySelector(".header-menu-img-tablet");
let navTablet = document.querySelector(".header-nav-tablet");


function mostrarNavTablet() {
    if (getComputedStyle(navTablet).display == "none") {
        navTablet.style.display = "flex";
    }else{
        navTablet.style.display = "none";
    }
}





/* --------------Smartphone-------------- */


let divBarraPesquisaSmartphone = document.querySelector('.form-pesquisa-smartphone');

function mostrarBarraPesquisaSmartphone() {
    if (getComputedStyle(divBarraPesquisaSmartphone).display == "none") {
        divBarraPesquisaSmartphone.style.display = "flex";
    }else{
        divBarraPesquisaSmartphone.style.display = "none";
    }
}



let imgMenuSmartphone = document.querySelector(".header-menu-img-smartphone");
let navSmartphone = document.querySelector(".header-nav-smartphone");


function mostrarNavSmartphone() {
    if (getComputedStyle(navSmartphone).display == "none") {
        navSmartphone.style.display = "flex";
    }else{
        navSmartphone.style.display = "none";
    }
}


