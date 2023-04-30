let outputEl = document.getElementById("output");

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
  let selection = document.getElementById("selectmenu").value;

  if (selection == "all") {
    for (let i = 0; i < nameArray.length; i++) {
      outputEl.innerHTML += `<p>${firstName} "${nameArray[i]}", ${lastName}</p>`;
    }
  } else if (selection == "random") {
    let randName = nameArray[randomInt(0, nameArray.length)];
    outputEl.innerHTML += `<p>${firstName} "${randName}", ${lastName}</p>`;
  } else if (selection == "add") {
    let name = prompt("enter a nickname");
    nameArray.push(name);
    for (let i = 0; i < nameArray.length; i++) {
      outputEl.innerHTML += `<p>${firstName} "${nameArray[i]}", ${lastName}</p>`;
    }
  } else if (selection == "remove") {
    alert("last nickname removed");
    nameArray.pop(nameArray.length - 1);
    for (let i = 0; i < nameArray.length; i++) {
      outputEl.innerHTML += `<p>${firstName} "${nameArray[i]}", ${lastName}</p>`;
    }
  } else if (selection == "removeIndex") {
    let indexToRemove = prompt("Enter the index of the nickname to remove: ");
    if (indexToRemove >= 0 && indexToRemove < nameArray.length) {
      nameArray.splice(indexToRemove, 1);
      outputEl.innerHTML = "";
      for (let i = 0; i < nameArray.length; i++) {
        outputEl.innerHTML += `<p>${firstName} "${nameArray[i]}", ${lastName}</p>`;
      }
    } else {
      alert("Invalid index");
    }
  }
}
