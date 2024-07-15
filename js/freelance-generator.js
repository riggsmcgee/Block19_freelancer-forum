// function randomNumber(start, end) {}

class Genorator {
  #names = [
    'Liam',
    'Olivia',
    'Noah',
    'Emma',
    'Ava',
    'Ethan',
    'Sophia',
    'Mason',
    'Isabella',
    'William',
    'Mia',
    'James',
    'Charlotte',
    'Benjamin',
    'Amelia',
    'Lucas',
    'Harper',
    'Henry',
    'Evelyn',
    'Alexander',
    'Abigail',
    'Michael',
    'Emily',
    'Daniel',
    'Elizabeth',
    'Jacob',
    'Mila',
    'Logan',
    'Ella',
    'Jackson',
    'Avery',
    'Sebastian',
    'Sofia',
    'Jack',
    'Camila',
    'Aiden',
    'Aria',
    'Owen',
    'Scarlett',
    'Samuel',
    'Victoria',
    'Matthew',
    'Madison',
    'Joseph',
    'Luna',
    'Levi',
    'Grace',
    'Mateo',
    'Chloe',
    'David',
    'Penelope',
    'John',
    'Layla',
    'Wyatt',
    'Riley',
    'Luke',
    'Zoey',
    'Asher',
    'Nora',
    'Oliver',
    'Lily',
    'Jayden',
    'Eleanor',
    'Elijah',
    'Hannah',
    'Gabriel',
    'Lillian',
    'Julian',
    'Addison',
    'Grayson',
    'Aubrey',
    'Leo',
    'Ellie',
    'Anthony',
    'Stella',
    'Jaxon',
    'Natalie',
    'Lincoln',
    'Zoe',
    'Christopher',
    'Leah',
    'Joshua',
    'Hazel',
    'Andrew',
    'Violet',
    'Theodore',
    'Aurora',
    'Caleb',
    'Savannah',
    'Ryan',
    'Audrey',
    'Ezra',
    'Brooklyn',
    'Nathan',
    'Bella',
    'Isaiah',
    'Claire',
    'Thomas',
    'Skylar',
    'Charles',
  ];

  #occupations = [
    'Web Developer',
    'Mobile App Creator',
    'AI Chatbot Trainer',
    'Database Architect',
    'UX/UI Designer',
    'DevOps Engineer',
    'Blockchain Developer',
    'Game Programmer',
    'Cloud Solution Architect',
    'API Integration Specialist',
    'Cybersecurity Consultant',
    'Machine Learning Engineer',
    'Front-end Wizard',
    'Back-end Ninja',
    'Full-stack Guru',
    'QA Tester',
    'Tech Writer',
    'Data Scientist',
    'Professional Rubber Duck Debugger', // Funny job
    'Code Archaeologist',
  ];

  #charge = [12, 1000];

  #randomNumber = (start, end) => {
    if (typeof start !== 'number' && typeof end !== 'number') {
      throw new Error('Not a valid number');
    }
    return Math.floor(Math.random() * (end - start)) + start;
  };

  name() {
    return this.#names[this.#randomNumber(0, 99)];
  }
  occupation() {
    return this.#occupations[this.#randomNumber(0, 20)];
  }
  price() {
    return this.#randomNumber(12, 999);
  }
}

export const freelanceGenorator = new Genorator();

/* console.log(freelie.name());
console.log(freelie.occupation());
console.log(freelie.price()); */
