/* export function averagePrice(sum, occurences) {
  return sum / occurences;
} */

export function averagePrice() {
  let checkPrice = document.getElementById('freelance-tbody');
  let tr = checkPrice.getElementsByTagName('tr');
  let prices = [];

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName('td');
    let string = td[2].textContent;
    let numbers = parseInt(string.replace('$', ''));
    prices.push(numbers);
  }
  console.log();
  return Math.floor(prices.reduce((acc, curr) => acc + curr) / prices.length);
}

// console.log(avgPrice());
