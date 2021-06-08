const options = [
    rock = { type: "rock", win: "scissors", lost: "paper" },
    paper = { type: "paper", win: "rock", lost: "scissors" },
    scissors = { type: "scissors", win: "paper", lost: "scissors" }
];

let cpu = { name: "CPU", option: options[Math.round(Math.random() * options.length)] };

let user = function createUser() {
    const name = prompt(
        "What do you want your name to be in the game?",
        "Write your name here!"
    );

    const result = prompt(
        "What do you want to choose? Rock | Paper | Scissors",
        "Write your choice here!"
    ).toLowerCase();

    switch (result) {
        case "rock":
            return { name: name, option: options[0] };
        case "paper":
            return { name: name, option: options[1] };
        case "scissors":
            return { name: name, option: options[2] };
        default:
            return alert(`${result} isn't an valid option!`);;
    };
}

const player = user();

const messages = {
    win: `${player.name} win, ${cpu.name} drew ${cpu.option.type}`,
    lost: `${player.name} lost, ${cpu.name} drew ${cpu.option.type}`,
    tie: `Tie!, ${cpu.name} drew ${cpu.option.type}`
};

function startGame() {
    if (!(player.option.type === cpu.option.type)) {
        if (cpu.option.type === player.option.lost) {
            alert(messages.lost);
            return;
        } else {
            alert(messages.win);
            return;
        }
    };

    return alert(messages.tie);
};

startGame();