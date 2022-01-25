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
const user = {
    id: 1,
    username: "mohan",
};
console.log(direction.up);
