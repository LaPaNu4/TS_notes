// function greet(): string {
//   return 100; // Error: Type 'number' is not assignable to type 'string'
// }

// let result = greet();



const greet = (): string => {
    return "Hello, world!";
};

let result = greet();

export { };

///////////////////////

type User = {
  id: number;
  name: string;
};

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

let uResult = getUserNames(users);
console.log(uResult); // ['Alice', 'Bob', 'Charlie']

export {};