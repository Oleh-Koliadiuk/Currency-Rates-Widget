import { getCourse } from "./api.js";

const valueSpan = document.getElementById("value");
const refreshButton = document.getElementById("USD-button");

async function updateUI() {
  try {

    const rate = await getCourse();

    valueSpan.textContent = `${rate.toFixed(2)} UAH`;
  } catch (error) {
    valueSpan.textContent = "Error on the server";
  }
};

updateUI();

refreshButton.addEventListener('click', updateUI);