let a = 'asdf';

const cic = (diameter: number) => {
    return diameter * Math.PI
}

console.log(cic(8));

let obj = {
    name: 'ch',
    age: 10
}

// obj.skills = 'asdf'
obj = {
    name: 'jo',
    age: 1
}

let char: string;
let ae: number;
let isLog: boolean;
let nin: string[] = [];
let mixed: (string|number|boolean)[] = [] //union types
let uid: string|number;

let ninO: object;

let ninT: {
    name: string,
    age: number
    isExp: boolean
};


let greet: Function;
greet = () => {
    console.log('helo');   
}

const add = (a: number, b: number, c?: number | string, d: number = 10) => {
    console.log(a+b);
}

add(1,2)

type StringOrNum = string | number
type objWithName = {
    name: string,
    uid: StringOrNum
}

const checlk = (user: objWithName) => {
    console.log('asd');
    
}


let calc: (a: number, b:number, c: string) => void
calc = (a:number, b: number, c: string) => {
    
}