function click1(event) {
    event.preventDefault();

    const goodSelect = document.getElementById('t');
    const goodPrice = parseInt(goodSelect.value);

    if (goodSelect.value === '') {
        alert('Вы не выбрали товар');
        return;
    }

    const goodAmount = parseInt(document.getElementById('amount').value);

    if (isNaN(goodAmount) || goodAmount <= 0) {
        alert('Введите корректное  количество товара');
        return;
    }

    const totalCost = goodPrice * goodAmount;

    const res = document.getElementById('result');
    res.textContent = 'Стоимость равна ' + totalCost+ 'рублей';
}
window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("my-button");
  b.addEventListener("click", onClick);
});

const form = document.getElementById('priceCalculator');
form.addEventListener('submit', click1);
