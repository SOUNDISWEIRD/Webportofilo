function buttonClickHandler() {
    var element = document.getElementById('Musikk_bilde_sh');
    var element2 = document.getElementById('M_knapp');
    var element3 = document.getElementById('fnaf_bilde_sh');
    var element4 = document.getElementById('F_knapp');
    var element5 = document.getElementById('ps_bilde_sh');
    element.classList.add('Musikk_bilde_sh2');
    element2.classList.add('Musikk_bilde_sh2');
    element3.classList.add('Musikk_bilde_hd');
    element4.classList.add('Musikk_bilde_hd')
    element5.classList.add('Musikk_bilde_hd')
    element5.classList.remove('Musikk_bilde_sh2');
    element.classList.remove('Musikk_bilde_hd');
    element2.classList.remove('Musikk_bilde_hd');
    element3.classList.remove('Musikk_bilde_sh2');
    element4.classList.remove('Musikk_bilde_sh2');
}

function buttonClickHandler2() {
    var element = document.getElementById('Musikk_bilde_sh');
    var element2 = document.getElementById('M_knapp');
    var element3 = document.getElementById('fnaf_bilde_sh');
    var element4 = document.getElementById('F_knapp');
    var element5 = document.getElementById('ps_bilde_sh');
    element3.classList.add('Musikk_bilde_sh2');
    element4.classList.add('Musikk_bilde_sh2');
    element.classList.add('Musikk_bilde_hd');
    element2.classList.add('Musikk_bilde_hd')
    element5.classList.add('Musikk_bilde_hd')
    element5.classList.remove('Musikk_bilde_sh2');
    element3.classList.remove('Musikk_bilde_hd');
    element4.classList.remove('Musikk_bilde_hd');
    element.classList.remove('Musikk_bilde_sh2');
    element2.classList.remove('Musikk_bilde_sh2');
}

function buttonClickHandler3() {
    var element = document.getElementById('Musikk_bilde_sh');
    var element2 = document.getElementById('M_knapp');
    var element3 = document.getElementById('fnaf_bilde_sh');
    var element4 = document.getElementById('F_knapp');
    var element5 = document.getElementById('ps_bilde_sh');
    element3.classList.add('Musikk_bilde_hd');
    element4.classList.add('Musikk_bilde_hd');
    element.classList.add('Musikk_bilde_hd');
    element2.classList.add('Musikk_bilde_hd');
    element5.classList.add('Musikk_bilde_sh2');
    element3.classList.remove('Musikk_bilde_sh2');
    element4.classList.remove('Musikk_bilde_sh2');
    element.classList.remove('Musikk_bilde_sh2');
    element2.classList.remove('Musikk_bilde_sh2');
    element5.classList.remove('Musikk_bilde_hd');
}


document.getElementById('buttonClick').addEventListener('click', buttonClickHandler);
document.getElementById('buttonClick2').addEventListener('click', buttonClickHandler2);
document.getElementById('buttonClick3').addEventListener('click', buttonClickHandler3);

window.onload = function() {
    var element = document.getElementById('Musikk_bilde_sh');
    var element2 = document.getElementById('M_knapp');
    var element3 = document.getElementById('fnaf_bilde_sh');
    var element4 = document.getElementById('F_knapp');
    var element5 = document.getElementById('ps_bilde_sh');
    element.classList.add('Musikk_bilde_hd');
    element2.classList.add('Musikk_bilde_hd');
    element3.classList.add('Musikk_bilde_hd');
    element4.classList.add('Musikk_bilde_hd');
    element5.classList.add('Musikk_bilde_hd');
}