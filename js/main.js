// function
import { freelanceGenorator } from './freelance-generator.js';
// function
import { averagePrice } from './average-price.js';
// class
import { Freelancer } from './freelancer.js';
import { newRow } from './html-links.js';

const freelie = new Freelancer(
  freelanceGenorator.name(),
  freelanceGenorator.occupation(),
  freelanceGenorator.price()
);

// console.log(freelie);

function test() {
  setTimeout(() => {
    let message = document.getElementsByClassName('message');
    message[0].style.visibility = 'visible';

    setInterval(() => {
      newRow(
        freelanceGenorator.name(),
        freelanceGenorator.occupation(),
        `\$${freelanceGenorator.price()}`
      );

      let avgPricePoint = document.getElementById('avg-price');
      let avgPrice = averagePrice();
      avgPricePoint.innerHTML = `Average Price: <span>$${avgPrice}</span>`;
    }, 1000);
  }, 3000);
}

test();
