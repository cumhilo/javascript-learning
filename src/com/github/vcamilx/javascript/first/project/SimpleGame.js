const options = [
    "rock",
    "paper",
    "scissors"
];

let botRespone = options[Math.round(Math.random() * options.length)];

let userOption = prompt(
    "What do you want to choose? Rock | Paper | Scissors",
    "Your choice."
).toLowerCase();

switch (userOption) {
    case "rock":
        switch (botRespone) {
            case "paper":
                console.log(`You lost, your opponent drew ${botRespone}`);
                break;
            case "scissors":
                console.log(`You win, your opponent drew ${botRespone}`);
                break;
            case "rock":
                console.log(`Tie!, your opponent drew ${botRespone}`);
                break;
        }
        break;
    case "paper":
        switch (botRespone) {
            case "paper":
                console.log(`Tie!, your opponent drew ${botRespone}`);
                break;
            case "scissors":
                console.log(`You lost, your opponent drew ${botRespone}`);
                break;
            case "rock":
                console.log(`You win, your opponent drew ${botRespone}`);
                break;
        }
        break;

    case "scissors":
        switch (botRespone) {
            case "paper":
                console.log(`You win, your opponent drew ${botRespone}`);
                break;
            case "scissors":
                console.log(`Tie!, your opponent drew ${botRespone}`)
                break;
            case "rock":
                console.log(`You lost, your opponent drew ${botRespone}`);
                break;
        }
        break;
    default:
        console.error("You cannt do that, select an valid option");
        break;
}