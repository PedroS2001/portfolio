const sheetsWrite = document.querySelectorAll(".sheet-write"); sheetsWrite.forEach((e => { const t = e.dataset; let l = JSON.parse(t.words), i = l.reduce(((e, t) => (t && "" != t.trim() && e.push(t), e)), []), n = i.filter(((e, t) => { let n = []; if (t >= 0) { if (!(i.length > 1)) return n.push(e), n; if (l[t - 1] != l[t] && e) return n.push(e), n } })), s = n.length; if (!n) return; let r = document.createElement("span"); r.classList.add("blink-cursor"), r.textContent = "|", e.parentElement.appendChild(r); let a = t.initdelay ? t.initdelay : 10, d = t.writespeed ? t.writespeed : 100, c = t.deletespeed ? t.deletespeed : 40, o = t.delaydelete ? t.delaydelete : 5e3, p = !t.infinite, u = !0, f = !0, h = 0, m = 0, v = 0; setInterval((function () { if (u && m++, m >= a * v) { u = !1; let t = n[v].split(""), l = t.length, i = 0, a = setInterval((function () { i >= h && (e.innerHTML += t[i]), i++, i >= l && (r.classList.add("stop-write"), (v >= s && !p || s <= 1) && (f = !1), f && setTimeout((function () { r.classList.remove("stop-write"); let t = setInterval((function () { let l = "", r = ""; v >= s && (l = n[v - 1].split(""), r = n[0].split("")), v > 0 && v < s && (l = n[v].split(""), r = n[v - 1].split("")), h = 0; let a = 0; for (; r[a] == l[a];)h++, a++; i >= h && (e.innerHTML = n[v - 1].slice(0, i)), i--, i < 0 && (v >= s ? setTimeout((function () { v = 0, m = 0, u = !0 }), d) : u = !0, clearInterval(t)) }), c) }), o), clearInterval(a)) }), d); v++ } })) }));



let pepe;

window.onscroll = function () {

    let nav = document.querySelector(".navb");// document.getElementById("navb");

    pepe = window.scrollY;
    console.log("Y" + window.scrollY);
    if (pepe > 0) {
        nav.style.backgroundColor = "red";
        console.log("COLOR OSCURO");
    }
    else {
        nav.style.backgroundColor = "black";
        console.log("COLOR CLARO");
    }
};

/*************************MAQUINA DE ESCRIBIR********************************* */
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