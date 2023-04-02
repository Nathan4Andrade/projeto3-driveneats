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
let nomeCliente = null;
let enderecoCliente = null;

totalPrice = (
  Number(priceAlimento) +
  Number(priceBebida) +
  Number(priceSobremesa)
).toFixed(2);
let msg = "";

function selecionarAlimento(alimento) {
  boxAlimento = alimento.innerHTML;
  const alimentoAnterior = document.querySelector(".prato .selecionado");
  const checkedAnterior = document.querySelector(
    ".prato .selecionado ion-icon"
  );
  if (alimentoAnterior !== null && checkedAnterior !== null) {
    alimentoAnterior.classList.remove("selecionado");
    checkedAnterior.classList.add("not-checked");
  }

  alimento.classList.add("selecionado");
  const checked = document.querySelector(".prato .selecionado ion-icon");
  checked.classList.remove("not-checked");

  nameAlimento = document.querySelector(".prato .selecionado h3").textContent;

  priceAlimento = document
    .querySelector(".prato .selecionado p span")
    .textContent.replace(",", ".");

  confirmarPedido();
}

function selecionarBebida(bebida) {
  boxBebida = bebida.innerHTML;
  const alimentoAnterior = document.querySelector(".bebida .selecionado");
  const checkedAnterior = document.querySelector(
    ".bebida .selecionado ion-icon"
  );
  if (alimentoAnterior !== null && checkedAnterior !== null) {
    alimentoAnterior.classList.remove("selecionado");
    checkedAnterior.classList.add("not-checked");
  }
  bebida.classList.add("selecionado");
  const checked = document.querySelector(".bebida .selecionado ion-icon");
  checked.classList.remove("not-checked");

  nameBebida = document.querySelector(".bebida .selecionado h3").textContent;
  priceBebida = document
    .querySelector(".bebida .selecionado p span")
    .textContent.replace(",", ".");
  confirmarPedido();
}
function selecionarSobremesa(sobremesa) {
  boxSobremesa = sobremesa.innerHTML;
  const alimentoAnterior = document.querySelector(".sobremesa .selecionado");
  const checkedAnterior = document.querySelector(
    ".sobremesa .selecionado ion-icon"
  );
  if (alimentoAnterior !== null && checkedAnterior !== null) {
    alimentoAnterior.classList.remove("selecionado");
    checkedAnterior.classList.add("not-checked");
  }

  sobremesa.classList.add("selecionado");
  const checked = document.querySelector(".sobremesa .selecionado ion-icon");
  checked.classList.remove("not-checked");

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

    nomeCliente = prompt("Qual o seu nome?");
    enderecoCliente = prompt("Qual o seu endereço?");

    msg = `Olá, gostaria de fazer o pedido: \n - Prato: ${nameAlimento} \n- Bebida: ${nameBebida} \n- Sobremesa: ${nameSobremesa} \nTotal: R$ ${totalPrice} \n \n Nome: ${nomeCliente} \n Endereço: ${enderecoCliente}`;
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
  valorTotal.innerHTML = "R$ " + totalPrice.replace(".", ",");
}

function cancelar() {
  const fundo = document.querySelector(".fundo-tela");
  fundo.classList.add("nao-confirmado");
}

function finalizar() {
  window.open("https://wa.me/5583987241377?text=" + encodeURI(msg));
}
