//global variables

let message = "";

//Helper function that will process how old ${name} is

function ageCalculator(dateOfBirth) {
  const oneDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  const todayInMS = today.getTime();
  const dob = new Date(dateOfBirth);
  const dateOfBirthInMS = dob.getTime();
  const diffDays = Math.floor(Math.abs((todayInMS - dateOfBirthInMS) / oneDay));
  // console.log(diffDays)
  return diffDays;
}

//Helper function that will return the message with the weight percentage based on the date of birth

function weightPercentageMessage(dob, weight, name) {
  switch (ageCalculator(dob)) {
    case 1:
      message += `${name} is ${ageCalculator(
        dob
      )} day old. The kitten's weight percentage is at ${(
        (weight / 100) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 2:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 108) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 3:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 116) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 4:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 123) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 5:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 132) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 6:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 140) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 7:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 148) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 8:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 156) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 9:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 164) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 10:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 172) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 11:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 190) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 12:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 198) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 13:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 206) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 14:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 212) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 15:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 228) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 16:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 248) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 17:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 268) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 18:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 288) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 19:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 308) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 20:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 328) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 21:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 330) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 22:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 344) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 23:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 358) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 24:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 372) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 25:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 386) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 26:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 400) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 27:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 414) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 28:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 430) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 29:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 446) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 30:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 462) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 31:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 478) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 32:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 494) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 33:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 510) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 34:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 526) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 35:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 540) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 36:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 556) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 37:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 572) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 38:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 588) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 39:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 604) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 40:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 620) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 41:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 636) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 42:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 650) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 43:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 668) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 44:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 686) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 45:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 704) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 46:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 722) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 47:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 740) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 48:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 758) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 49:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 775) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 50:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 794) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 51:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 813) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 52:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 832) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 53:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 851) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 54:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 870) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 55:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 889) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    case 56:
      message += `${name} is ${ageCalculator(
        dob
      )} days old. The kitten's weight percentage is at ${(
        (weight / 910) *
        100
      ).toFixed(0)}%. A healthy kitten weight percentage is above 80%.`;
      break;
    default:
      message += "This kitten does not fall within the first 56 days of life";
  }

  return message
}

//Handling the inputs from the form

const form = document.querySelector("form");
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  // console.log(evt.target)
  let formData = new FormData(evt.target);
  let formObj = Object.fromEntries(formData);
  console.log(formObj);
  let name = formObj.name;
  // console.log(name)
  let dob = formObj.dob;
  let weight = formObj.weight;
  // console.log(weight)

  ageCalculator(dob);
  weightPercentageMessage(dob, weight, name);


  const messageInDOM = document.querySelector("#messageOutput")
  messageInDOM.innerText = message
 

});


//updating the message in the DOM

// const messageInDOM = document.querySelector("#messageOutput")
// let text = messageInDOM.innerHTML
// text = message
