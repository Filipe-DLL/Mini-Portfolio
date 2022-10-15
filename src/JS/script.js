
function selecionarSobre() {
    let abaSobre = document.getElementById("abaSobre")
    let abaRedes = document.getElementById("abaRedes")
    let conteudoSobre = document.getElementById("conteudoSobre")
    let conteudoRedes = document.getElementById("conteudoRedes")

    abaSobre.classList.add("selecionado")
    abaRedes.classList.remove("selecionado")
    conteudoSobre.classList.add("selecionado")
    conteudoRedes.classList.remove("selecionado")
}

function selecionarRedes() {
    let abaSobre = document.getElementById("abaSobre")
    let abaRedes = document.getElementById("abaRedes")
    let conteudoSobre = document.getElementById("conteudoSobre")
    let conteudoRedes = document.getElementById("conteudoRedes")

    abaSobre.classList.remove("selecionado")
    abaRedes.classList.add("selecionado")
    conteudoSobre.classList.remove("selecionado")
    conteudoRedes.classList.add("selecionado")
}

