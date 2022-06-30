
let body = document.body

// const Book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295);
// const Book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 463);
// const Book3 = new Book('The Avengers', 'Marvel', 542);

// let myLibrary = [Book1, Book2, Book3];
let myLibrary = []

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    // constructor
}
// -------------------------------------------------//
const libraryGrid = document.querySelector('.libraryGrid');

// const addBook = document.querySelector('.addBook');
// addBook.addEventListener('click',createBook);

// this function displays the input form
function createBook() {
   const displayForm = document.querySelector('.inputForm');
    displayForm.style.display = 'contents';

    body.append(displayForm);
}

const submitBook = document.querySelector('.submit')
submitBook.addEventListener('click', addBookToLibrary);


// this function adds a book the the library
function addBookToLibrary() {
    const inputTitle = document.getElementById("title").value;
    const inputAuthor = document.getElementById("author").value;
    const inputPages = document.getElementById("pages").value;

    let newBook = new Book(inputTitle, inputAuthor, inputPages);
    
    myLibrary.push(newBook);
}



function displayBook() {
   
    // const book = document.createElement('div');
    // book.classList.add('bookCard');

    // const readButton = document.createElement('button');
    // readButton.classList.add('readButton');
    // const removeButton = document.createElement('button');
    // removeButton.classList.add('removeButton');
    if(myLibrary.length == 0) {
        return 0;
    }
    else {
        for(let i = 0; i < myLibrary.length; i++) {
            const book = document.createElement('div');
            book.classList.add('bookCard');
    
            const readButton = document.createElement('button');
            readButton.classList.add('readButton');
            const removeButton = document.createElement('button');
            removeButton.classList.add('removeButton');
    
            const bookTitle = document.createElement('h3');
            bookTitle.textContent = `${myLibrary[i].title}`;
            const bookAuthor = document.createElement('p');
            bookAuthor.textContent = `${myLibrary[i].author}`;
            const bookPages = document.createElement('p');
            bookPages.textContent = `${myLibrary[i].pages}`;
    
            book.append(bookTitle, bookAuthor, bookPages, readButton, removeButton);
            libraryGrid.append(book);
        }
    }
    
    
    
}

displayBook()