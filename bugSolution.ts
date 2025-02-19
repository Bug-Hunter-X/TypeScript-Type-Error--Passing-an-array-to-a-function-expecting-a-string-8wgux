function greeter(person: string[]): string {
  return person.map(name => "Hello, " + name).join(', ');
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user)); // Output: Hello, Jane Doe, Hello, John Smith