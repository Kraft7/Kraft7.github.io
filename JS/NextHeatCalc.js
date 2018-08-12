function calculateHeat() {
  document.getElementById("hiddenText").innerHTML = "";

  year = document.getElementById("year").value;
  month = document.getElementById("month").value;
  cooldown = document.getElementById("cooldown").value;

  if (cooldown == "" || month == "" || year == "") {
    document.getElementById("hiddenText").innerHTML = "Please enter all the feilds.";
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
