/*--------constants ------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*-------variables ------*/
let board;
let turn = "X";
let win;
/*--------cached element references ------*/

const message = document.querySelector('h2')
console.log(message.textContent)
const square = Array.from(document.querySelectorAll("#board div"));
const resetButton = document.getElementById('reset-button');
/*--------event listeners ------*/
document.getElementById('board').addEventListener('click', handleTurn);
resetButton.addEventListener('click', init);
console.log (resetButton);

/*-------- functions ------*/

function getWinner() {
    let winner = null;
    winningCombos.forEach(function (combo) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            winner = board[combo[0]]
        };
    });
    console.log(winner)
    if (winner) {

        return winner
    } else if (board.includes('')) {
        return null
    } else {
        return 'T'
    }


}

const getText = () => {
    let text = '';

    if (win === 'T') {
        text= "That's a tie!";
    }else if (win === 'X' || win === 'O') {
        text = `${win} wins the game!`
    } else {
        text = `It's ${turn}'s turn!`
     }
    return text;
}

function handleTurn() {
    let idx = square.findIndex(function (square) {
        return square === event.target;
    });
    board[idx] = turn;
    win = getWinner()
    render();
    turn = (turn === "X") ? "O" : "X";
    message.textContent = getText();
};

function init() {
    board = [
        '', '', '', '', '', '', '', '', ''];
        render();
}

function render() {
    board.forEach(function (mark, index) {
        square[index].textContent = mark;
    });
    message.textContent = getText()

};

init()