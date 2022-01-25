// Basic type

let id: number = 344;
let userName: String = "hansh";
let flag: boolean = true;
//any datatype
let x: any = "hello there";

//array
let arr: number[] = [2, 23, 4, 3, 3];
let idArray: any[] = [3, true, "string", ["string array"]];
//tuple
let person: [number, string, boolean] = [1, "brad", true];

//tuple array
let employee: [number, string][] = [
    [2, "hello"],
    [3, "ddkso"],
    [4, "good night"]];

//Union
let pid: number | String;
pid = 33;
pid = "okk";

//enum
enum direction {
    up,
    down,
    left,
    right
}

console.log(direction.up);
console.log(direction.down);
console.log(direction.left);
console.log(direction.right);