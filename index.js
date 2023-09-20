const adviceNumber = document.querySelector("#advice-number");
const adviceQoutes = document.querySelector("#advice-qoutes");
const buttonGenerate = document.querySelector("#button-generate");
let generatingAdvice = "Generating new advice...";

const endPoint = "https://api.adviceslip.com/advice";

async function getAdvice() {
  try {
    const response = await fetch(endPoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    adviceNumber.textContent = json.slip.id;
    adviceQoutes.textContent = json.slip.advice;
  } catch (err) {
    console.log(err);
    alert("Failed to fetch new quote");
  }
}

getAdvice();

buttonGenerate.addEventListener("click", () => {
  adviceQoutes.textContent = generatingAdvice;
  setTimeout(() => {
    getAdvice();
  }, 1000);
});
