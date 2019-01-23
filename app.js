const events = require("events");
// const util = require("util");
// const myEmitter = new events();

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
