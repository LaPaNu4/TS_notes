function greet(name?: string) {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return `Hello!`;
  }
}

console.log(greet("Alice")); // Виводить: Hello, Alice!
console.log(greet()); // Виводить: Hello!

export {};

/////////////

type Person = {
  name: string;
  age?: number; // age є опціональною властивістю
};

const alice: Person = { name: "Alice", age: 27 };
const bob: Person = { name: "Bob" }; // age не вказано, це припустимо

export {};
