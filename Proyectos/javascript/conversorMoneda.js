const cantidad = document.getElementById("cantidad");
const monedaLocal = document.getElementById("monedaLocal");
const monedaExtranjera = document.getElementById("monedaExtranjera");
const convertir = document.getElementById("botonConvertir");
const h2 = document.querySelector("#resultado");

convertir.addEventListener("click", () => {
  if (monedaLocal.value == "Dolar" && monedaExtranjera.value == "Peso") {
    h2.innerHTML = `Son ${cantidad.value * 57.75} pesos`;
  } else if (monedaLocal.value == "Dolar" && monedaExtranjera.value == "Euro") {
    h2.innerHTML = `Son ${cantidad.value / 1.11} euros`;
  } else if (monedaLocal.value == "Peso" && monedaExtranjera.value == "Dolar") {
    h2.innerHTML = `Son ${cantidad.value / 57.67} dolares`;
  } else if (monedaLocal.value == "Peso" && monedaExtranjera.value == "Euro") {
    h2.innerHTML = `Son ${cantidad.value / 64.14} euros`;
  } else if (monedaLocal.value == "Euro" && monedaExtranjera.value == "Dolar") {
    h2.innerHTML = `Son ${cantidad.value * 1.11} dolares`;
  } else if (monedaLocal.value == "Euro" && monedaExtranjera.value == "Peso") {
    h2.innerHTML = `Son ${cantidad.value * 64.14} pesos`;
  } else {
    h2.innerHTML = "Error";
  }
});
