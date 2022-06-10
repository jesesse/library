const openFormBtn = document.querySelector(".open-form");
const openLibraryBtn = document.querySelector(".open-library");
const library = document.querySelector(".library")
const addBtn = document.querySelector(".addBtn");
const form = document.querySelector("form");

let myLibrary = [];


function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let read = Boolean.parseBoolean(document.getElementsByName("read").value);

    alert(title + author + read);
    form.classList.toggle("form-hidden");
}





addBtn.addEventListener("click", addBookToLibrary);

openLibraryBtn.addEventListener("click", () => { library.classList.toggle("library-hidden") });

openFormBtn.addEventListener("click", () => { form.classList.toggle("form-hidden") });