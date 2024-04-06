// CARROSEL DE IMAGENS

let contador = 1;

setInterval(function() {
document.getElementById('slide' + contador).checked = true;
contador++;

if(contador > 3) {
    contador = 1;
}

},3000)

// FIM DO CARROSEL DE IMAGENS




//---------------------------------------------------------



// MENU-MOBILE

const menu = document.querySelector(".menu-mobile");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav .a");

menu.addEventListener("click", () => nav.classList.toggle("active"));

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// FIM MENU-MOBILE




//--------------------------------------------------------





// EFEITO SCROLL (SESSÃO CABELOS)

const Myobserve = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
} )

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => Myobserve.observe(element))

// FIM DO EFEITO SCROLL (SESSÃO CABELOS)



//---------------------------------------------------------
