// interface Animal {
//   name: string;
// }

// interface Animal {
//   age: number;
// }

// let dog3: Animal = {
//   name: "Fido",
//   age: 5,
// };

// export {};

///////////////

// interface Dog2 extends Animal {
//   bark: string;
// }

// /////

// type AnimalName = {
//   name: string;
// };

// type AnimalAge = {
//   age: number;
// };

// type Animals = AnimalName & AnimalAge;

// let dog1: Animals = {
//   name: "Fido",
//   age: 5,
// };

// export {};

/////////////////////

// interface Animal {
//   name: string;
// }

// interface Dog extends Animal {
//   bark: string;
// }

// class MyDog implements Dog {
//   name = "Fido";
//   bark = "Woof!";
// }

// // Error: Property 'name' is missing in type 'OtherDog'
// class OtherDogq implements Dog {
//   bark = "Woof!";
// }

// export {};


///////////////////////


interface Walkable {
  walk(): void;
}

interface Eatable {
  eat(): void;
}

class Animal implements Walkable, Eatable {
  walk() {
    console.log("The animal walks...");
  }

  eat() {
    console.log("The animal eats...");
  }
}

const animal = new Animal();

export {};
