
window.onscroll = function () {

    let elemento = document.querySelectorAll(".list li");

    let contacto = document.querySelector('#contacto').getBoundingClientRect().y;
    let acerca = document.querySelector('#acerca').getBoundingClientRect().y;
    let tecnologias = document.querySelector('#tecnologias').getBoundingClientRect().y;
    let proyectos = document.querySelector('#proyectos').getBoundingClientRect().y;

    if (contacto < 50 && contacto > -50) {
        setColor(elemento, 3);
    }
    else if (proyectos < 50 && proyectos > -50) {
        setColor(elemento, 2);
    }
    else if (tecnologias < 50 && tecnologias > -50) {
        setColor(elemento, 1);
    }
    else if (acerca < 50 && acerca > -50) {
        setColor(elemento, 0);
    }
};

function setColor(element, position) {
    element.forEach(el => {
        el.classList.remove("onView")
    });
    element[position].classList.add("onView")
}

//#region MAQUINA DE ESCRIBIR
let timer;
let i = 0;

window.onload = function () {
    const palabras = ["Tecnico en Programacion", "Estudiante", "Desarrollador"];

    function typeWriter() {
        let numero = palabras[i].split("");
        var loopTyping = function () {
            if (numero.length > 0) {
                document.getElementById("text").innerHTML += numero.shift();
            } else {
                deletingEffect();
                return false;
            }
            timer = setTimeout(loopTyping, 100);
        }
        loopTyping();
    }

    function deletingEffect() {
        let numero = palabras[i].split("");
        var loopDelete = function () {
            if (numero.length > 0) {
                numero.pop();
                document.getElementById("text").innerHTML = numero.join("");
            } else {
                if (palabras.length > (i + 1)) {
                    i++;
                    typeWriter();
                } else {
                    i = 0;
                    typeWriter();
                }
                return false;
            }

            timer = setTimeout(loopDelete, 100);
        }
        setTimeout(() => {
            loopDelete();
        }, 1000);
    }

    typeWriter();
}

//#endregion