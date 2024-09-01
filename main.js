console.log("Hey");

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    displayBooks(myLibrary);
}

function displayBooks(library) {
    const books = document.getElementById('bookList');
    books.innerHTML = '';

    library.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.isRead}</p>`;

        books.appendChild(bookDiv);
    });
}

const bookModal = document.getElementById('modal');
const newBookBtn = document.getElementById('newbookbutton');
newBookBtn.addEventListener('click', () => {
    bookModal.style.display = 'block';
});

const closeModal = document.getElementById('closeModal');
closeModal.addEventListener('click', () => {
    bookModal.style.display = 'none';
});

const bookForm = document.getElementById('bookform');
bookForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value, 10);
    const isRead = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, isRead);

    bookModal.style.display = 'none';
    bookForm.reset();

});
