
let body = document.body

const Book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295);
const Book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 463);
const Book3 = new Book('The Avengers', 'Marvel', 542);

let myLibrary = [Book1, Book2, Book3];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    // constructor
}

function addBookToLibrary() {
    let title = prompt('Title:');
    let author = prompt('Author:');
    let pages = prompt('Pages:');
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

Book.prototype.read = function () {
    return true
}

Book.prototype.info = function () {
    displayInfo.textContent = `${this.title} by ${this.author} with ${this.pages} pages`;
    console.log(`${this.title} by ${this.author} with ${this.pages} pages`)
}
const displayInfo = document.querySelector('.bookInfo')

// function displayBooks() {
//     for (let i = 0; i < myLibrary.length; i++) {
        
//         displayInfo.textContent = myLibrary[i];
        
//         console.log(`${i + 1}. ${myLibrary[i].title} by ${myLibrary[i].author} with ${myLibrary[i].pages} pages`)
//     }
// }

// const displayBook = document.querySelector('.displayBooks');
// displayBook.addEventListener('click', displayBooks);



// -------------------------------------------------//
const addBook = document.querySelector('.addBook');
addBook.addEventListener('click',addBookToLibrary, createBook);

const libraryGrid = document.querySelector('.libraryGrid');
function createBook() {
    const book = document.createElement('div');
    book.classList.add('bookCard');

    const readButton = document.createElement('button');
    readButton.classList.add('readButton');
    const removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');

    book.append(readButton, removeButton);
    libraryGrid.append(book);
}