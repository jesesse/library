const openFormBtn = document.querySelector(".open-form");
const openLibraryBtn = document.querySelector(".open-library");
const library = document.querySelector(".library")
const addBtn = document.querySelector(".addBtn");
const form = document.querySelector("form");
const deleteConfirmForm = document.querySelector(".delete-confirm")

let myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

Book.prototype.toggleRead = function () {
    if (this.read == "READ") this.read = "NOT YET READ"
    else this.read = "READ";
    displayLibrary();
}


function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let read;
    if (document.getElementById("read").checked) read = "READ"
    else read = "NOT YET READ";

    let newBook = new Book(title, author, read);
    myLibrary.push(newBook);

    form.classList.toggle("form-hidden");

    displayLibrary();
}



function displayLibrary() {
   
    if (this.textContent == "OPEN LIBRARY") library.classList.toggle("library-hidden");

    if ((this.textContent != "OPEN LIBRARY") && library.classList.contains("library-hidden")) library.classList.toggle("library-hidden");

    while (library.lastChild) library.removeChild(library.lastChild);

    for (i = 0; i < myLibrary.length; i++) {
        //Tän kaiken vois tehä omassa aliohjelmassaan
        //createBookCard(myLibrary[i])

        let newBookCard = document.createElement('div');
        newBookCard.classList.add('book-card');
        newBookCard.setAttribute('id', i);
        newBookCard.textContent += `TITLE:  ${myLibrary[i].title} \n \n`;
        newBookCard.textContent += `AUTHOR:  ${myLibrary[i].author} \n \n`;
        newBookCard.textContent += `${myLibrary[i].read} \n \n`;

        let cardButtonContainer = newBookCard.appendChild(document.createElement('div'));

        let toggleReadBtn = cardButtonContainer.appendChild(document.createElement('button'));
        toggleReadBtn.textContent = 'TOGGLE READ';
        toggleReadBtn.addEventListener("click", toggleReadLaunch);

        let removeBtn = cardButtonContainer.appendChild(document.createElement('button'));
        removeBtn.textContent = 'REMOVE BOOK';
        removeBtn.addEventListener("click", removeBook);

        library.appendChild(newBookCard);
    }

    if (myLibrary.length == 0) {
        while (library.lastChild) library.removeChild(library.lastChild);
        let messageLibraryEmpty = document.createElement('p');
        messageLibraryEmpty.textContent = "Library is empty, add a book!";
        library.appendChild(messageLibraryEmpty);
    }
}

/*
function createBookCard (book) {
    const newBookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const buttonConainer = document.createElement('div');
    const removeButton = document.createElement('button');
    const toggleReadBtn = document.createElement('button');
}
*/

function toggleReadLaunch() {
    myLibrary[this.parentNode.parentNode.getAttribute('id')].toggleRead();
}

function removeBook() {

    myLibrary.splice(this.parentNode.parentNode.getAttribute('id'), 1);
    displayLibrary();
}


addBtn.addEventListener("click", addBookToLibrary);
openLibraryBtn.addEventListener("click", displayLibrary);
openFormBtn.addEventListener("click", () => { form.classList.toggle("form-hidden") });