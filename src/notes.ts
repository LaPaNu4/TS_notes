
type Person = {
  firstName: string;
  lastName: string;
};

function Greetings(user: Person) {
  console.log("Hello " + user.firstName + " " + user.lastName);
}

export { Greetings };
