let btn = document.querySelectorAll(".box");
let Rbtn = document.querySelector("#Rgame");
let Nbtn = document.querySelector("#Ngame");
let msg = document.querySelector(".msg");
let win = document.querySelector(".win");
var player0 = true;
let count = 0;
var winpattern = [[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8]
];
//For input of 0 and X in boxes
btn.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        count++;
        console.log(count);
        if (player0) {
            box.innerText = "0";
            box.style.color = "rgba(188, 248, 236)";
            player0 = false;
        } else {
            box.innerText = "X";
            box.style.color = "rgba(123, 67, 91)";
            player0 = true;
        }
        checkWinner();
        box.disabled = true;
    });

});

//Function for reseting game.
var ResetGame = () => {
    player0 = true;
    enableboxes();
    msg.classList.add("hide");
    count = 0;
};

Rbtn.addEventListener("click", ResetGame);
Nbtn.addEventListener("click", ResetGame);

//After a player takes their turn, the boxes will be disabled to prevent any additional input in the box.
const disableboxes = () => {
    for (let box of btn) {
        box.disabled = true;
    }
};
//After  clicking reset or new game button, all boxes enable to start a new game.
const enableboxes = () => {
    for (let box of btn) {
        box.disabled = false;
        box.innerText = "";
    }

};
//Announcing a winner.
const winner = (w) => {
    win.innerText = `Winner is ${w}`;
    msg.classList.remove("hide");
}
//When match is draw.
const Draw = () => {
    win.innerText = "DRAW";
    msg.classList.remove("hide");
}
//Checking winner by comparing boxes values with winpattern array.
var checkWinner = () => {
    for (let pattern of winpattern) {
        let v1 = btn[pattern[0]].innerText;
        let v2 = btn[pattern[1]].innerText;
        let v3 = btn[pattern[2]].innerText;
        if (v1 != "" && v2 != "" && v3 != "") {
            if (v1 == v2 && v2 == v3) {
                console.log("win");
                winner(v1);
                disableboxes();
            } else if (count == 9 && v1 != v2 && v2 != v3) {
                Draw();
            }
        }
    }
}

