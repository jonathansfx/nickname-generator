let outputEl = document.getElementById("output");
let selection = document.getElementById("selectmenu").value;

let nameArray = [
  "Crusher",
  "the Scientist",
  "Twinkle-Toes",
  "the Coder",
  "the Jester",
  "the Sloth",
  "Quick-Silver",
];

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;

  if (selection == "all") {
    for (let i = 0; i < nameArray.length; i++) {
      outputEl.innerHTML += `<p>${firstName} "${nameArray[i]}", ${lastName}</p>`;
    }
  } else if (selection == "random") {
    let randName = nameArray[randomInt(0, nameArray.length)];
    outputEl.innerHTML += `<p>${firstName} "${randName}", ${lastName}</p>`;
  }
}
