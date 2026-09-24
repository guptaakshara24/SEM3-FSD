const EventEmitter = require("events");

const session = new EventEmitter();

session.on("greet", (username) => {
    console.log(`Hello, ${username}! Welcome.`);
});

session.once("greet", () => {
    console.log("First login of the day!");
});

session.on("exit", (code) => {
    console.log(`Session closed with code ${code}. Goodbye!`);
});

session.on("error", (message) => {
    console.log(`Error: ${message}`);
});

function trigger(command, ...args) {
    if (command === "greet" || command === "exit") {
        session.emit(command, ...args);
    } else {
        console.log(`Unknown event: ${command}`);
    }
}

trigger("greet", "Akshara");
trigger("greet", "Rahul");
trigger("greet", "Ananya");

console.log("Greet listener count:", session.listenerCount("greet"));

trigger("exit", 0);

trigger("login");

session.emit("error", "Session error occurred.");