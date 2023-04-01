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

function enviarPedido() {
  if (pedidoPronto) {
    let str = `Olá, gostaria de fazer o pedido: \n - Prato: ${nameAlimento} \n- Bebida: ${nameBebida} \n- Sobremesa: ${nameSobremesa} \nTotal: R$ ${totalPrice}`;
    console.log(str);
    window.open("https://wa.me/5583999999999?text=" + encodeURI(str));
  }
}

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
