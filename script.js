const button = document.getElementById('button')


button.addEventListener("click" ,function(){
    document.body.classList.toggle("modo-escuro")

    if (document.body.classList.contains("modo-escuro")) {
        localStorage.setItem("modoExibicao", "escuro");
        document.body.classList.remove("modo-claro")
    } else {
        localStorage.setItem("modoExibicao", "claro");
        document.body.classList.remove("modo-escuro")
    }
})




window.addEventListener("load", function() {
    const modoExibicaoArmazenado = localStorage.getItem("modoExibicao");

    if (modoExibicaoArmazenado === "escuro") {
        document.body.classList.add("modo-escuro");
    }else{
        document.body.classList.add("modo-claro")
    }
});