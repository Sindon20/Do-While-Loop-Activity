const correctPassword = "correctPassword";
let userPassword;

do {
    userPassword = prompt("Enter your password:");
    if (userPassword !== correctPassword) {
        console.log("Incorrect, try again.");

    }
} while (userPassword !== correctPassword);

onslotchange.log("Access granted.");