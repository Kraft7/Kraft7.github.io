function lifetimeCalc() {
  document.getElementById("hiddenText2").innerHTML = "Hello World";

  years = document.getElementById("year").value;
  months = document.getElementById("month").value;
  cooldowns = document.getElementById("cooldown").value;

  if (cooldowns == "" || months == "" || years == "") {
    document.getElementById("hiddenText2").innerHTML = "Please enter all the feilds.";
  }
  else if (years == 14 && months > 1) {
    document.getElementById("hiddenText2").innerHTML = "Lioness cannot breed past 14 years!";
  }
  else {
    var heats = 0;
    var i = true;

    while(i == true) {
      months + cooldowns;
        while (cooldowns > 0) {
          months++; cooldowns--;
          if (months == 12) {
            years++; months = 0;
          }
        }
        if (years >= 14 && months >= 1) {
          document.getElementById("hiddenText2").innerHTML = "Your lioness has " + heats + " heat(s) left.";
          i = false;
        }
        else {
          heats++;
          cooldowns = 20;
        }
    }
  }
}
