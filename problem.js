


function calculateTax(income, expenses) {
  if (income <= 0 || expenses <= 0 || income <= expenses) {
    return "Invalid Input";
  }
  let profit = income - expenses;
  let tax = profit * .20;
  return tax;

}






function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Input"
  }

  let splitUserName = email.split('@')[0];
  let splitDomain = email.split('@')[1];
  let result = splitUserName + " sent you an email from  " + splitDomain;
  return result;
}





function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    return "Invalid Input"
  }

  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i])) {
      return true;
    }
  }
  return false;
}




function calculateFinalScore(obj) {
  if (typeof obj !== 'object') {
    return "Invalid Input"
  }

  let score = obj.testScore + obj.schoolGrade;
  if (obj.isFamily == "Farmer") {
    score + 20;
  }
  if (score >= 80) {
    return true;
  } else {
    return false;
  }

}



function waitingTime(duration, serial) {
  if (!Array.isArray(duration) || typeof serial !== 'number') {
    return "Invalid Input "
  }
  let totalDuration = 0;
  for (let i of duration) {
    totalDuration = Math.round(totalDuration + i / 5);
  }
  let waiting = (serial - 1) - duration.length;
  let result = waiting * totalDuration;

  return result;
}


