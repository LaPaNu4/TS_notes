import { concatenation } from "./concatenation";
import { Greetings } from "./notes";

const user = { firstName: "Volodymyr", lastName: "Novitskyi" };
const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
    Greetings(user);
  });
}
