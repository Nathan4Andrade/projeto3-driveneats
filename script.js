let boxAlimento = null;
let boxBebida = null;
let boxSobremesa = null;
let pedidoPronto = false;
let nameAlimento = null;
let priceAlimento = null;
let nameBebida = null;
let priceBebida = null;
let nameSobremesa = null;
let priceSobremesa = null;
let totalPrice = 0;
totalPrice = (
  Number(priceAlimento) +
  Number(priceBebida) +
  Number(priceSobremesa)
).toFixed(2);
let msg = "";

function selecionarAlimento(alimento) {
  boxAlimento = alimento.innerHTML;
  const alimentoAnterior = document.querySelector(".prato .selecionado");
  if (alimentoAnterior !== null) {
    alimentoAnterior.classList.remove("selecionado");
  }

  alimento.classList.add("selecionado");

  nameAlimento = document.querySelector(".prato .selecionado h3").textContent;

  priceAlimento = document
    .querySelector(".prato .selecionado p span")
    .textContent.replace(",", ".");

  confirmarPedido();
}

function selecionarBebida(bebida) {
  boxBebida = bebida.innerHTML;
  const alimentoAnterior = document.querySelector(".bebida .selecionado");
  if (alimentoAnterior !== null) {
    alimentoAnterior.classList.remove("selecionado");
  }
  bebida.classList.add("selecionado");

  nameBebida = document.querySelector(".bebida .selecionado h3").textContent;
  priceBebida = document
    .querySelector(".bebida .selecionado p span")
    .textContent.replace(",", ".");
  confirmarPedido();
}
function selecionarSobremesa(sobremesa) {
  boxSobremesa = sobremesa.innerHTML;
  const alimentoAnterior = document.querySelector(".sobremesa .selecionado");
  if (alimentoAnterior !== null) {
    alimentoAnterior.classList.remove("selecionado");
  }

  sobremesa.classList.add("selecionado");

  nameSobremesa = document.querySelector(
    ".sobremesa .selecionado h3"
  ).textContent;
  priceSobremesa = document
    .querySelector(".sobremesa .selecionado p span")
    .textContent.replace(",", ".");
  confirmarPedido();
}

function confirmarPedido() {
  console.log(nameAlimento);
  console.log(nameBebida);
  console.log(nameSobremesa);
  totalPrice = (
    Number(priceAlimento) +
    Number(priceBebida) +
    Number(priceSobremesa)
  ).toFixed(2);
  console.log(totalPrice);
  if (boxAlimento !== null && boxBebida !== null && boxSobremesa !== null) {
    const confirmar = document.querySelector("button");
    const confirmarTexto = document.querySelector("button span");
    confirmar.disabled = false;
    confirmar.classList.add("liberado");
    confirmarTexto.innerHTML = "Fechar pedido";
    pedidoPronto = true;
  }
}

function fecharPedido() {
  if (pedidoPronto) {
    const fundo = document.querySelector(".fundo-tela");
    fundo.classList.remove("nao-confirmado");

    msg = `Olá, gostaria de fazer o pedido: \n - Prato: ${nameAlimento} \n- Bebida: ${nameBebida} \n- Sobremesa: ${nameSobremesa} \nTotal: R$ ${totalPrice}`;
    console.log(msg);

    finalizarPedido();
  }
}

function finalizarPedido() {
  const alimentoFinal = document.querySelector(
    ".informacoes-pedidos .alimento h4"
  );
  alimentoFinal.innerHTML = nameAlimento;
  const valorAlimentoFinal = document.querySelector(
    ".informacoes-pedidos .alimento h5"
  );
  valorAlimentoFinal.innerHTML = priceAlimento.replace(".", ",");

  const bebidaFinal = document.querySelector(".informacoes-pedidos .bebida h4");
  bebidaFinal.innerHTML = nameBebida;
  const valorBebidaFinal = document.querySelector(
    ".informacoes-pedidos .bebida h5"
  );
  valorBebidaFinal.innerHTML = priceBebida.replace(".", ",");

  const sobremesaFinal = document.querySelector(
    ".informacoes-pedidos .sobremesa h4"
  );
  sobremesaFinal.innerHTML = nameSobremesa;
  const valorSobremesaFinal = document.querySelector(
    ".informacoes-pedidos .sobremesa h5"
  );
  valorSobremesaFinal.innerHTML = priceSobremesa.replace(".", ",");

  const valorTotal = document.querySelector(".informacoes-pedidos .total h5");
  valorTotal.innerHTML = totalPrice.replace(".", ",");
}

function cancelar() {
  const fundo = document.querySelector(".fundo-tela");
  fundo.classList.add("nao-confirmado");
}

function finalizar() {
  window.open("https://wa.me/5583987241377?text=" + encodeURI(msg));
}
