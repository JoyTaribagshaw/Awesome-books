const addBookButton = document.querySelector('.addbtn');
const bookTitle = document.getElementById('title')
const bookAuthor = document.getElementById('author')

const books = [];

function addToCollection() {
  books.push({title: bookTitle.value, author: bookAuthor.value});
}

function ClearInput(){
  bookTitle.value = '';
  bookAuthor.value = '';
}

function toSaveBooks() {
  window.localStorage.setItem('books', JSON.stringify[books]);
}

addBookButton.addEventListener('click', (e) => {
  e.preventDefault();
  addToCollection();
  renderBooks();
  ClearInput();
  console.log(books)
})

function renderBooks() {
  const storedBooks = JSON.parse(Window.localStorage.getItem('books'));

const showBook = storedBooks.map(
  (book) => `
  <div>
    <h4>${book.title}</h4>
  <h4>${book.author}</h4>
  <button class="remove">Remove</button>
  </div>
  `

)
// booksContainer.innerHTML = showBook.join('');
// }

window.addEventListener('DOMContentLoaded' () => {
  renderBooks();
})