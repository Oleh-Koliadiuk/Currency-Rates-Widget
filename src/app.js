import { getCourse } from "./api.js";

const button = document.getElementById("refresh-all-button");
const usdEl = document.getElementById("usd-value");
const eurEl = document.getElementById("eur-value");
const plnEl = document.getElementById("pln-value");

async function updateUI() {
  const data = await getCourse();

  if (!data) return;

  const uah = data.rates.UAH;
  const eur = data.rates.EUR;
  const pln = data.rates.PLN;

  const usdToUah = uah.toFixed(2);
  const eurToUah = (uah / eur).toFixed(2);
  const plnToUah = (uah / pln).toFixed(2);

  usdEl.textContent = `${usdToUah} UAH`;
  eurEl.textContent = `${eurToUah} UAH`;
  plnEl.textContent = `${plnToUah} UAH`;
}

button.addEventListener("click", updateUI);

updateUI();
