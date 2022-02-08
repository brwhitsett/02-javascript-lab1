const firstName = "Brittany";
const age = "25";
const birthday = "April 13";
const pineapplePizza = false;
const lifeEvents = [
  "I have a three-year old.",
  "I went to Wayne State University.",
  "I am an iPhone user.",
  "My favorite color is yellow.",
];

// I didn't need to explicitly say true
if (pineapplePizza) {
  console.log(
    `My name is ${firstName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
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

while (true) {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else {
    counter++;
    console.log(
      `"5 === 5. It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}
// EXTENDED CHALLENGE
const hours = 50;
const wage = 10;
const pay = hours * wage;
const weeks = Math.floor(1000000 / pay);

if (hours <= 40) {
  console.log(
    `Your paycheck comes out to $${pay}. It will take ${weeks} weeks to make $1,000,000`
  );
} else {
  const pay = wage * 40 + (hours - 40) * (wage * 1.5);
  const weeks = Math.floor(1000000 / pay);
  console.log(
    `Your paycheck comes out to $${pay}. It will take ${weeks} weeks to make $1,000,000`
  );
}
