let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = 5;

let num: number;

// num = notSure;


if (typeof notSure === "number") {
  num = notSure;
}

export {};
