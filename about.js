function calculateLove() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var lovePercentage = Math.floor(Math.random() * 101);  // Generate a random love percentage
    document.getElementById("result").innerHTML = name1 + " and " + name2 + " are " + lovePercentage + "% compatible!";
  }
  