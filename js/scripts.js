document.querySelector(".botao-continuar-comp").addEventListener('click', function () {
    var carrinho = document.querySelector(".container-carrinho");
    carrinho.classList.add("fechar");
    setTimeout(function () {
        carrinho.style.display = "none";
    }, 500)
})

document.querySelector(".navbar-btn").addEventListener("click", function () {
    var carrinho = document.querySelector(".container-carrinho");
    carrinho.style.display = "block";
    carrinho.classList.remove("fechar");
})
