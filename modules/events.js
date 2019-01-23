//basic events example

// const events = require("events");

// const myEmitter = new events.EventEmitter();

// myEmitter.on("someEvent", msg => console.log(msg));

// myEmitter.emit("someEvent", "The event was emitted.");

// module.exports = { myEmitter };

//custom events on a class object example

class Person extends events.EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

let james = new Person("james");
let mary = new Person("mary");
let ryu = new Person("ryu");
let people = [james, mary, ryu];

people.forEach(person => {
  person.on("speak", msg => {
    console.log(person.name + " said: " + msg);
  });
});

james.emit("speak", "hey dudes");
ryu.emit("speak", "I want a curry");
