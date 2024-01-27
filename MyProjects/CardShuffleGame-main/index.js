function Roll() {
  //!user's and computers choice
  let usersvalue = document.getElementById("user").value;
  let computervalue = (document.getElementById("computer").value = Math.floor(
    Math.random() * 10 + 1
  ));
  document.getElementById("computer").innerHTML =
    "Computer Chooses the Card : " + computervalue;

  //! shuffling each time this function is called
  var deck = [];
  for (var i = 1; i <= 10; i++) {
    var card;
    do {
      card = Math.floor(Math.random() * 10 + 1);
    } while (deck.includes(card));
    deck.push(card);
    document.getElementById("s" + i).value = card;
    //document.getElementById("s" + i).innerHTML = '<img src="' + card + '.png"/>';
  }
 
  //!asigning the choosen card value to variables for comparision
  let userrrrrrr = document.getElementById("s" + usersvalue).value;
  let computrrrrr = document.getElementById("s" + computervalue).value;
  document.getElementById("s" + computervalue).innerHTML =
    '<img src="cards/' + computrrrrr + '.png"/>';
  document.getElementById("s" + usersvalue).innerHTML =
    '<img src="cards/' + userrrrrrr + '.png"/>';
  if (userrrrrrr > computrrrrr) {
    document.getElementById("mylabel").innerHTML = "User Win";
  } else if (userrrrrrr == computrrrrr) {
    document.getElementById("mylabel").innerHTML = "Match Tie";
  } else {
    document.getElementById("mylabel").innerHTML = "Computer Win";
  }

  //! automatic refreshing to a new game
  setTimeout(function () {
    window.location.reload(1);
  }, 10000);
}
