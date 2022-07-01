
let body = document.body

// const Book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295);
// const Book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 463);
// const Book3 = new Book('The Avengers', 'Marvel', 542);

// let myLibrary = [Book1, Book2, Book3];
let myLibrary = []

// function Book(title, author, pages) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;

//     // constructor
// }
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




// this function adds a book the the library
const addBookToLibrary = (ev) => {
    ev.preventDefault();
    let newBook = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value
    }

    const displayForm = document.querySelector('.inputForm');
    // -------------------------------------------------//
    const book = document.createElement('div');
    book.classList.add('bookCard');

    // Need to work on adding numbered ID's to the books
    // This for loop assigns a "book" [ID] number so i can remove it later
    // Need to add functionality to "remove" buttons on the cards
    for(let i = 0; i <= myLibrary.length; i++) {
        book.setAttribute("book", i);
    }
    const readButton = document.createElement('button');
    readButton.classList.add('readButton');
    readButton.innerHTML = 'Read?';
    readButton.addEventListener('click', readBook);



    const removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.innerHTML = 'Remove';
    removeButton.addEventListener('click', removeBook);

    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    bookTitle.innerHTML = document.getElementById('title').value,
    bookAuthor.innerHTML = document.getElementById('author').value,
    bookPages.innerHTML = document.getElementById('pages').value
    
    // -------------------------------------------------//

    

    if(newBook.title == '' || newBook.author == '' || newBook.pages == '') {
        alert("You must fill out all fields");
    } else if (myLibrary.find(element => element.title == newBook.title)) {
        const errorMessage = document.querySelector('.errorMessage');
        errorMessage.style.display = 'contents';
    } 
    else {

        myLibrary.push(newBook);
        document.forms[0].reset();
        
        displayForm.style.display = 'none';

        
        

        book.append(bookTitle, bookAuthor, bookPages, readButton, removeButton);
        libraryGrid.append(book);




        body.append(displayForm);
    }

   
}

const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', addBookToLibrary);


function displayBook() {
        
    for(let i = 0; i < myLibrary.length; i++) {
        myLibrary[i].title;
        myLibrary[i].author;
        myLibrary[i].pages;
    }
   
}


function removeBook() {
    let book = this.parentElement;
    book.remove();
}

function readBook() {
    let book = this.parentElement;
    book.classList.toggle('read');
}