"use strict";
// Basic type
let id = 344;
let userName = "hansh";
let flag = true;
//any datatype
let x = "hello there";
//array
let arr = [2, 23, 4, 3, 3];
let idArray = [3, true, "string", ["string array"]];
//tuple
let person = [1, "brad", true];
//tuple array
let employee = [
    [2, "hello"],
    [3, "ddkso"],
    [4, "good night"]
];
//Union
let pid;
pid = 33;
pid = "okk";
//enum : defined set of named constants
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
console.log(direction.up);
const user = {
    id: 1,
    username: "mohan",
};
//Type assertion
let cid = 1;
let customerId = cid;
//function
function addNum(x, y) {
    return x + y;
}
//void 
function log(message) {
    console.log(message);
}
const user1 = {
    id: 2,
    name: "radhamohan"
};
const add = (x, y) => x + y;
//classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(" Hello " + name);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const hansh = new Person(123, "Hansh");
const Raj = new Person(234, "Raj");
console.log(hansh.register());
