let boxAlimento = null;
let boxBebida = null;
let boxSobremesa = null;

function confirmarPedido() {
  console.log(boxAlimento);
  console.log(boxBebida);
  console.log(boxSobremesa);
  if (boxAlimento !== null && boxBebida !== null && boxSobremesa !== null) {
    const confirmar = document.querySelector("button");
    const confirmarTexto = document.querySelector("button span");
    confirmar.disabled = false;
    confirmar.classList.add("liberado");
    confirmarTexto.innerHTML = "Fechar pedido";
  }
}

function selecionarAlimento(alimento) {
  boxAlimento = alimento.innerHTML;
  const alimentoAnterior = document.querySelector(".prato .selecionado");
  if (alimentoAnterior !== null) {
    alimentoAnterior.classList.remove("selecionado");
  }

  alimento.classList.add("selecionado");
  confirmarPedido();
}

function selecionarBebida(bebida) {
  boxBebida = bebida.innerHTML;
  const alimentoAnterior = document.querySelector(".bebida .selecionado");
  if (alimentoAnterior !== null) {
    alimentoAnterior.classList.remove("selecionado");
  }

  bebida.classList.add("selecionado");
  confirmarPedido();
}
function selecionarSobremesa(sobremesa) {
  boxSobremesa = sobremesa.innerHTML;
  const alimentoAnterior = document.querySelector(".sobremesa .selecionado");
  if (alimentoAnterior !== null) {
    alimentoAnterior.classList.remove("selecionado");
  }

  sobremesa.classList.add("selecionado");
  confirmarPedido();
}
