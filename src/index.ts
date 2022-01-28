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

//enum : defined set of named constants
enum direction {
    up,
    down,
    left,
    right
}
//Object
type User = {
    id : number,
    username : string,
}
const user : User = {
    id : 1,
    username : "mohan",
}

//Type assertion
let cid : any = 1
let customerId = <number>cid

//function
function addNum ( x : number , y : number ) : number {
    return x + y;
}
//void 
function log ( message : string | number ) : void {
    console.log( message );
}
// interface (custom type)
interface UserInterface{
   readonly id : number,
    name : string
    age ?: number //its optional
}
const user1 : UserInterface = {
    id : 2 ,
    name : "radhamohan"
}
// user1.id = 3; can't do this as it is only read only property

//interface with function
interface Mathfunc {
    ( x : number , y : number) : number
}

const add : Mathfunc = (x : number , y : number) : number => x + y
//classes
class Person{
   private id : number
    name : String
    constructor(id : number , name : String){
        this.id = id
        this.name = name
        console.log(" Hello " + name );
    }

    register(){
        return `${this.name} is now registered`;
    }
}
const hansh = new Person( 123 , "Hansh");
const Raj = new Person( 234 , "Raj" ); 
console.log(hansh.register());

console.log(direction.up);
