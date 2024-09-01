console.log("Hey");

const myLibrary = [
    {
        title: "Book One",
        author: "Author One",
        year: 2021,
        pages: 250
    },
    {
        title: "Book Two",
        author: "Author Two",
        year: 2020,
        pages: 300
    },
    {
        title: "Book Three",
        author: "Author Three",
        year: 2022,
        pages: 150
    }
];

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

displayBooks(myLibrary);