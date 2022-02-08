const firstName = "Brittany";
const age = 25;
const birthday = "April 13";
const pineapplePizza = false;
const lifeEvents = [
  "I have a three-year old.",
  "I went to Wayne State University.",
  "I am an iPhone user.",
  "My favorite color is yellow.",
];

if (pineapplePizza === true) {
  console.log(
    `My name is ${firstName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${firstName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
let randomNumber = Math.floor(Math.random() * 10) + 1;

while (counter <= randomNumber) {
  console.log(counter);
  counter++;
}

while (true) {
  if (randomNumber !== 5) {
    console.log(counter);
    break;
  } else {
    console.log(counter);
    counter++;
  }
}
