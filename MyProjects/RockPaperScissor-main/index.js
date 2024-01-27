let user = 0, comp = 0, tie = 0, total_match = 0;
let comp_value = "";

function play(value) {
    total_match++;

    //! computer value
    const computer = Math.floor(Math.random() * 3 + 1);
    if (computer == 1) comp_value = "rock";
    else if (computer == 2) comp_value = "paper";
    else comp_value = "scissor";

    document.getElementById("checkWin").innerHTML = checkwin();
    document.getElementById("whoswinning").innerHTML = whowin();

    //!winner
    function checkwin() {
        if (value == comp_value) {
            tie++; return "Match Tie";
        }
        else if (comp_value == "scissor") {
            if (value == "rock") { user++; return "User Win"; }
            else { comp++; return "Computer Win"; }
        }
        else if (comp_value == "paper") {
            if (value == "scissor") { user++; return "User Win"; }
            else { comp++; return "Computer Win"; }
        }
        else if (comp_value == "rock") {
            if (value == "paper") { user++; return "User Win"; }
            else { comp++; return "Computer Win"; }
        }
    }

    //!winning status
    function whowin() {
        if (user > comp)
            return "seems like User Is winning";
        else if (comp > user)
            return "seems like Computer Is winning";
        else return null;
    }

    //!CHANGING INNER HTML OF DOM
    document.getElementById("computerval").innerHTML = "Computer Got : " + comp_value;
    document.getElementById("total1").innerHTML = total_match;
    document.getElementById("user1").innerHTML = user;
    document.getElementById("comp1").innerHTML = comp;
    document.getElementById("tie1").innerHTML = tie;

}

function refresh() {
    location.href = location.href;
}