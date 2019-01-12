// Section for Form Input for Packing List
const form = document.getElementById("form"),
      input = document.getElementById("addItem"),
      list = document.getElementById("packingList");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  addItemToList(input.value);
});

const addItemToList = item => {
  let newItem = `<li>${item} <button onclick="deleteItem(this)"> Remove </button></li>`;
  list.insertAdjacentHTML("beforeend", newItem);
  input.value = "";
};

const deleteItem = item => {
  item.parentElement.remove();
};

// Countdown timer of time in India
const days = document.getElementById('days'),
      hours = document.getElementById('hours'),
      mintes = document.getElementById('minutes'),
      seconds = document.getElementById('seconds'),
      endDate = new Date(2019, 0, 24);

const arriveInIndia = () => {
  const now = new Date();
  const difference = new Date(endDate - now);
  console.log(difference)
  days.innerText = Math.floor(difference / 86400000);
  hours.innerText = difference.getHours();
  minutes.innerText = difference.getMinutes();
  seconds.innerText = difference.getSeconds();
};

setInterval(arriveInIndia, 1000);
