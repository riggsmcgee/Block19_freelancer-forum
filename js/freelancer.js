export class Freelancer {
  constructor(name, occupation, startPrice) {
    this.name = name;
    this.occupation = occupation;
    this.startPrice = startPrice;
  }
}

const free1 = new Freelancer('Joey', 'Contutor', 12);

console.log(free1.occupation);
