let bookName = document.querySelector('[data-bookname]');
let authorName = document.querySelector('[data-authorname]');
let haveReadBtn = document.querySelector('[data-haveread]');
let addBookBtn = document.querySelector('[data-add]');
let main = document.getElementById('main');

let allBooks = [];
let allBookCards = [];

function Book(title, author, haveRead) {
    this.title = title;
    this.author = author;
    this.haveRead = haveRead;
}

function addBook() {
    addBookBtn.addEventListener('click', () => {
        let newBook = new Book(bookName.value, authorName.value, true);
        allBooks.push(newBook);

        let newCard = document.createElement('div');
        let newTitle = document.createElement('h2');
        let newAuthor = document.createElement('p');
        let newReadBtn = document.createElement('button');
        let newRemoveBtn = document.createElement('button');
        let buttonsDiv = document.createElement('div');

        newTitle.innerText = newBook.title;
        newAuthor.innerText = newBook.author;
        newReadBtn.innerText = `I've Read`;
        newRemoveBtn.innerText = `Remove Book`;

        newCard.classList.add('card');
        newReadBtn.classList.add('read');
        newRemoveBtn.classList.add('remove');
        buttonsDiv.setAttribute('id', 'buttons');

        newCard.appendChild(newTitle);
        newCard.appendChild(newAuthor);
        buttonsDiv.appendChild(newReadBtn);
        buttonsDiv.appendChild(newRemoveBtn);
        newCard.appendChild(buttonsDiv);

        main.appendChild(newCard);
    });

    newRemoveBtn.addEventListener('click', () => {
        alert('banaana');
    });
}

addBook();