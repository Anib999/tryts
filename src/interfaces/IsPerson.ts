interface IsPerson {
    name: string
    age: number,
    speak(a: string): void,
    spend(a: number): number
}

// let am: IsPerson = {
//     name: 'asd',
//     age: 12,
//     speak(text: string) {
//         console.log(text);
//     },
//     spend(amount: number) {
//         console.log(`S ${amount}`);
//         return amount
//     }
// };

// const greetPerson = (person: IsPerson) => {
//     console.log(person.name);
// }

// greetPerson(am)