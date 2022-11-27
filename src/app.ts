import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let inOne = new Invoice('hello', 'to shit', 10);
// let inTwo = new Invoice('hellos', 'to ehit', 10);

// let invoices: Invoice[] = []
// invoices.push(inOne, inTwo)

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let values: [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value == 'invoice')
        doc = new Invoice(...values)
    else
        doc = new Payment(...values)

    list.render(doc, type.value, 'end');
})

const addUId = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}

let docOne = addUId({name: 'asdf', age: 10})
console.log(docOne);

interface Resource<T> {
    uid: number,
    resourceName: string,
    data: T
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: 'hel',
    data: 'asdf'
}

enum ResourceType {BOOK, PERSON}

interface Res<T> {
    uid: number,
    resourceType: ResourceType,
    data: T
}

const docFour: Res<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {name: 'lol'}
}