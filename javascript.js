const openFormBtn = document.querySelector(".open-form");
const openLibraryBtn = document.querySelector(".open-library");
const library = document.querySelector(".library")
const addBtn = document.querySelector(".addBtn");
const form = document.querySelector("form");

let myLibrary = [];

function Book (title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

Book.prototype.toggleRead = function() {
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

    if (library.classList.contains("library-hidden")) library.classList.toggle("library-hidden");

    while (library.lastChild) library.removeChild(library.lastChild);

    for (i = 0; i < myLibrary.length; i++){
        let newBookCard = document.createElement('div');
        newBookCard.classList.add('book-card');
        newBookCard.setAttribute('id', i);
        newBookCard.textContent += `TITLE: ${myLibrary[i].title} \n \n`;
        newBookCard.textContent += `AUTHOR: ${myLibrary[i].author} \n \n`;
        newBookCard.textContent += `${myLibrary[i].read} \n \n`;

        let toggleReadBtn = newBookCard.appendChild(document.createElement('button'));
        toggleReadBtn.textContent = 'TOGGLE READ';
        toggleReadBtn.addEventListener("click", toggleReadLaunch);


        let removeBtn = newBookCard.appendChild(document.createElement('button'));
        removeBtn.textContent = 'REMOVE BOOK';
        removeBtn.addEventListener("click", removeBook);

        library.appendChild(newBookCard);
    }
}

function toggleReadLaunch() {
    myLibrary[this.parentNode.getAttribute('id')].toggleRead();
}

function removeBook() {
    myLibrary.splice(this.parentNode.getAttribute('id'), 1);
    displayLibrary();
}





addBtn.addEventListener("click", addBookToLibrary);

openLibraryBtn.addEventListener("click", () => { library.classList.toggle("library-hidden") });

openFormBtn.addEventListener("click", () => { form.classList.toggle("form-hidden") });