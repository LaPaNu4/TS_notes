// let arr: Array<string | number> = [];

// arr = ["str", 10, true];

// export {};


///////////////

// const promise: Promise<string> = new Promise((resolve) => {
//   setInterval(() => {
//     resolve("Done!");
//   }, 1000);
// });

// promise.then((data) => {
//   console.log(data);
// });

// export {};


////////////


// function firstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// let numbers = [1, 2, 3, 4, 5];
// let firstNum = firstElement(numbers);

// let strings = ["a", "b", "c", "d"];
// let firstStr = firstElement(strings);

// export {};


///////////

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({ name: "Alisa" }, { age: 28 });

// merged.name;

// export {};


////
    
    
// type Length = {
//   length: number;
// };

// function getLength<T extends Length>(str: T) {
//   return str.length;
// }

// getLength("text");
// getLength([1, 2, 3]);
// getLength(100); // Errro: Argument of type 'number' is not assignable to parameter of type 'ILength'

// export {};

////

// function arrayLogger<T extends Array<string>>(array: T): void {
//   array.forEach((item) => console.log(item));
// }

// arrayLogger(["Hello", "World"]); // Ok
// arrayLogger([1, 2, 3]); // Error

// export {};


///  keyof

// type Person = {
//   name: string;
//   age: number;
//   location: string;
// };

// type PersonKeys = keyof Person; // 'name' | 'age' | 'location'

// function getPersonInfo(person: Person, key: PersonKeys) {
//   return person[key];
// }

// const john: Person = {
//   name: "John",
//   age: 25,
//   location: "NY",
// };

// console.log(getPersonInfo(john, "age")); // 25
// console.log(getPersonInfo(john, "name")); // 'John'
// console.log(getPersonInfo(john, "job")); // Error: Argument of type '"job"' is not assignable to parameter of type 'PersonKeys'.

// export {};


//////////////////////


// class DataStorage<T> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem("Hello");
// textStorage.addItem("World");
// console.log(textStorage.getItems()); // ['Hello', 'World']
// textStorage.addItem(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

// const numberStorage = new DataStorage<number>();
// numberStorage.addItem(1);
// numberStorage.addItem(2);
// console.log(numberStorage.getItems()); // [1, 2]
// numberStorage.addItem("TEXT"); // Error: Argument of type 'number' is not assignable to parameter of type 'number'

// export {};

/////////////


// class KeyValuePair<TKey, TValue> {
//   constructor(private key: TKey, private value: TValue) {}

//   getKey(): TKey {
//     return this.key;
//   }

//   getValue(): TValue {
//     return this.value;
//   }
// }

// const pair1 = new KeyValuePair("name", "Alice");
// console.log(pair1.getKey()); // 'name'
// console.log(pair1.getValue()); // 'Alice'

// const pair2 = new KeyValuePair(1, true);
// console.log(pair2.getKey()); // 1
// console.log(pair2.getValue()); // true

// export {};

//////////////////////////////////////////////////////////////////


///  Readonly<T>


// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// let alice: User = {
//   id: 1,
//   name: "Alice",
//   email: "alice@example.com",
// };

// alice.name = "Bob"; // OK

// let aliceReadonly: Readonly<User> = {
//   id: 1,
//   name: "Alice",
//   email: "alice@example.com",
// };

// user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.

// export {};


/////////////////////////////////////////////////////////

/// Pick<T, K>


// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type UserBasicInfo = Pick<User, "id" | "name">;

// let userBasicInfo: UserBasicInfo = {
//   id: 1,
//   name: "John Doe",
//   email: "john@example.com", // Error: Property 'email' does not exist on type 'UserBasicInfo'
// };

// export {};


///  Record<K, T>

// type Weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
// type Weekend = "Sat" | "Sun";

// type Day = Weekdays | Weekend;

// type DayTranslations = Record<Day, string>;

// const translations: DayTranslations = {
//   Mon: "Понеділок",
//   Tue: "Вівторок",
//   Wed: "Середа",
//   Thu: "Четверг",
//   Fri: "П'ятниця",
//   Sat: "Субота",
//   Sun: "Неділя",
// };

// export {};

//
    
// enum UserRoles {
//   admin = "admin",
//   manager = "manager",
//   employee = "manager",
// }

// type UserRolesStatuses = Record<UserRoles, boolean>;

// const userRoleStatuses: UserRolesStatuses = {
//   [UserRoles.admin]: true,
//   [UserRoles.manager]: false,
//   [UserRoles.employee]: true,
// };

// export {};

//////////////////

// Partial  Partial<User> робить усі властивості у типі User необов'язковими.




// type InitialFormType = {
//   name: string;
//   email: string;
//   password: string;
// };

// export type Form = InitialFormType & {
//   errors: Partial<Record<keyof InitialFormType, [string]>>;
// };

// export {};

//////////////////////////////////////////////////////

/// Omit<T, K>

// Це Pick, але навпаки. Дозволяє створити новий тип на основі типу T шляхом виключення набору властивостей, зазначених у K.

////////////////////////////////////////////////////////

/// ReturnType<T>

// function greeting() {
//   return "Hello, world!";
// }

// type Greeting = ReturnType<typeof greeting>; // 'string'

// function multiply(a: number, b: number) {
//   return a * b;
// }

// type MultiplyResult = ReturnType<typeof multiply>; // 'number'

// export {};

/////////////////////////////////////////////////////////////////////

/// Parameters<T>

// type MyFunctionType = (a: string, b: number, c: boolean) => void;

// type MyParametersType = Parameters<MyFunctionType>;
// Результат: [string, number, boolean]

/// NonNullable<T>

// type SomeType = string | null | undefined;

// // NonNullableType будет равен 'string'
// type NonNullableType = NonNullable<SomeType>;

