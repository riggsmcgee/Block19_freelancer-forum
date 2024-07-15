/* class HtmlSelector {
  #td = document.createElement('td');

  name() {}
  occupation() {}
  price() {}
  avgPrice() {}
} */

export function newRow(name, occupation, price) {
  let table = document.getElementById('freelance-table');
  let newRow = table.insertRow();

  let cell = newRow.insertCell(0);
  cell.textContent = name;

  cell = newRow.insertCell(1);
  cell.textContent = occupation;

  cell = newRow.insertCell(2);
  cell.textContent = price;
}

// testing();
