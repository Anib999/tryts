import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// let inOne = new Invoice('hello', 'to shit', 10);
// let inTwo = new Invoice('hellos', 'to ehit', 10);
// let invoices: Invoice[] = []
// invoices.push(inOne, inTwo)
const form = document.querySelector('.new-item-form');
//inputs 
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('.item-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value == 'invoice')
        doc = new Invoice(...values);
    else
        doc = new Payment(...values);
    list.render(doc, type.value, 'end');
});
const addUId = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUId({ name: 'asdf', age: 10 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: 'hel',
    data: 'asdf'
};
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["PERSON"] = 1] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFour = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: 'lol' }
};
