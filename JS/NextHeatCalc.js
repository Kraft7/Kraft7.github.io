function calculateHeat() {
  document.getElementById("hiddenText").innerHTML = "";

  year = document.getElementById("year").value;
  month = document.getElementById("month").value;
  cooldown = document.getElementById("cooldown").value;

  if (cooldown == "" || month == "" || year == "") {
    document.getElementById("hiddenText").innerHTML = "Please enter all the feilds.";
  }
  else if (cooldowns > 20 || cooldown < 0) {
    document.getElementById("hiddenText").innerHTML = "Cooldown must be between 0 and 20.";
  }

  else if (months > 12 || months < 0) {
    document.getElementById("hiddenText").innerHTML = "Months must be between 0 and 12.";
  }

  else if (years > 16 || years < 2) {
    document.getElementById("hiddenText").innerHTML = "Years must be between 2 and 16.";
  }
  else if (year == 14 && month > 1) {
    document.getElementById("hiddenText").innerHTML = "Lioness cannot breed past 14 years!";
  }
  else {
  month + cooldown;
  while (cooldown > 0) {
    month++; cooldown--;
      if (month == 12) {
        year++; month = 0;
      }
    }
    if (year >= 14 && month >= 1) {
      document.getElementById("hiddenText").innerHTML = "Your lioness will be " + year + " years and " + month + " months, but unfortunately this will be too old to breed :(";
    }

    else {
    document.getElementById("hiddenText").innerHTML = "Your lioness will be: " + year + " years and " + month + " months";
  }
}
}
