function teste() {
  const botao = document.querySelector("button span");
  botao.innerHTML = "Oi";
}

function selecionarAlimento(alimento) {
  const alimentoAnterior = document.querySelector(".prato .selecionado");
  if (alimentoAnterior !== null) {
    alimentoAnterior.classList.remove("selecionado");
  }

  console.log(alimento);
  alimento.classList.add("selecionado");
}

function selecionarBebida(bebida) {
  const alimentoAnterior = document.querySelector(".bebida .selecionado");
  if (alimentoAnterior !== null) {
    alimentoAnterior.classList.remove("selecionado");
  }

  console.log(bebida);
  bebida.classList.add("selecionado");
}
function selecionarSobremesa(sobremesa) {
  const alimentoAnterior = document.querySelector(".sobremesa .selecionado");
  if (alimentoAnterior !== null) {
    alimentoAnterior.classList.remove("selecionado");
  }

  console.log(sobremesa);
  sobremesa.classList.add("selecionado");
}
