/* opgave 1 */
console.group("opgave 1");

const person = {
  name: "Ivan",
  age: "39",
  job: "Maler",
};

console.log(person);

console.groupEnd();

/* opgave 2 */
console.group("opgave 2");

console.log(person.name); //"Ivan"
console.log(person.job); //"Maler"
console.log(`${person.name} job er som ${person.job}`);

console.groupEnd();

/* opgave 3 */
console.group("opgave 3");

delete person.age;
console.log(person);

console.groupEnd();
