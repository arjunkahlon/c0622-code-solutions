var books = [
  {
    isbn: '9780544336261',
    title: 'The Giver',
    author: 'Lois Lowry'
  },
  {
    isbn: '949843994349393',
    title: 'Harry Potter and the Sorcerers Stone',
    author: 'J.K. Rowling'
  },
  {
    isbn: '9780316769532',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger'
  }
];

console.log('Array of books: ', books);
console.log('Type of Books:', typeof (books));

var stringifyBooks = JSON.stringify(books);
console.log('stringifyBooks:', stringifyBooks);
console.log('typeof stringifyBooks:', typeof (stringifyBooks));

var jsonString = `{
  "id": "938493893939",
  "name": "Arjun"
}`;

console.log('jsonString:', jsonString);
console.log('typeof jsonString:', typeof (jsonString));

var obj = JSON.parse(jsonString);
console.log('obj: ', obj);
console.log('typeof obj:', typeof (obj));
