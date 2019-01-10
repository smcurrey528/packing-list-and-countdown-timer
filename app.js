// Section for Form Input for Packing List
const form = document.getElementById('input'),
      input = document.getElementById('addItem'),
      list = document.getElementById('packingList');

form.addEventListener('submit', function(e){
  e.preventDefault();
  //console.log(input.value);
  addItemToList(input.value);

})

const addItemToList = (item) => {
  let newItem = `<li>${item} <button onclick="deleteItem(this)"> Remove </button></li>`;
  list.insertAdjacentHTML('beforeend', newItem);
  input.value = '';
}

const deleteItem = (elementToDelete) => {
  elementToDelete.parentElement.remove();
}

// CountDown until in India
const goalDate = new Date(2019, 0, 12).getTime();
//console.log('goalDate', goalDate)

let x = setInterval(function() {
  const today = new Date().getTime(),
      difference = new Date(goalDate - today);

  document.getElementById('days').innerText = Math.floor(difference/(86400000));

  document.getElementById('hours').innerText = Math.floor(difference.getHours());

  document.getElementById('minutes').innerText = Math.floor(difference.getMinutes());

  document.getElementById('seconds').innerText = Math.floor(difference.getSeconds());

}, 1000)

//// CountDown until return
const returnDate = new Date(2019, 0, 25).getTime();
//console.log('goalDate', goalDate)

let j = setInterval(function() {
  const today = new Date().getTime(),
      difference = new Date(returnDate - today);

  document.getElementById('day').innerText = Math.floor(difference/(86400000));

  document.getElementById('hour').innerText = Math.floor(difference.getHours());

  document.getElementById('minute').innerText = Math.floor(difference.getMinutes());

  document.getElementById('second').innerText = Math.floor(difference.getSeconds());

}, 1000)
