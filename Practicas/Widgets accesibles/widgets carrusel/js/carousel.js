var ci = document.getElementsByClassName("carousel-item");
var cont = 1;

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: false
    });
    
});

function set_false_aria() {
    for(var i = 0; i < ci.length; i++) {
        ci[i].setAttribute('aria-hidden', 'false');
    }
}

function img_sig() {
    set_false_aria();
    var el = document.querySelector(".carousel");
    var l = M.Carousel.getInstance(el);
    console.log(cont);
    
    l.next();
    if(cont == ci.length){
        cont = 1;
        var ce = document.getElementById("ce"+cont);
        ce.setAttribute('aria-hidden', 'true');
    } else {
        cont ++;
        var ce = document.getElementById("ce"+cont);
        ce.setAttribute('aria-hidden', 'true');
    }
}

function img_prev() {
    set_false_aria();
    var el = document.querySelector(".carousel");
    var l = M.Carousel.getInstance(el);
    console.log(cont);
    l.prev();

    if(cont == 1){
        cont = ci.length;
        var ce = document.getElementById("ce"+cont);
        ce.setAttribute('aria-hidden', 'true');
    } else {
        cont --;
        var ce = document.getElementById("ce"+cont);
        ce.setAttribute('aria-hidden', 'true');
    }
}

