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






let linkInstitucional = document.getElementById("rodape-links-institucional-smartphone");


function mostarInstitucionalSmartphone() {
    if (getComputedStyle(linkInstitucional).display == "none") {
        linkInstitucional.style.display = "flex";

        if (getComputedStyle(linkInformacoes).display == "flex") {
            linkInformacoes.style.display = "none";
        }

    }else{
        linkInstitucional.style.display = "none";
    }

}


let linkInformacoes = document.getElementById("rodape-links-informacoes-smartphone");


function mostarInformacoesSmartphone() {
    if (getComputedStyle(linkInformacoes).display == "none") {
        linkInformacoes.style.display = "flex";

        if (getComputedStyle(linkInstitucional).display == "flex") {
            linkInstitucional.style.display = "none";
        }

    }else{
        linkInformacoes.style.display = "none";
    }

}