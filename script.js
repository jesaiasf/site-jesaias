const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calcular() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Por favor, insira sua data de nascimento");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Sua idade é ${age} ${age > 1 ? "anos" : "ano"}`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnEl.addEventListener("click", calcular);