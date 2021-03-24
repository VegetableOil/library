let main = document.getElementById('main');
let bookInputDiv = document.querySelector('book-input');
let titleInput = document.getElementById('book-name-input');
let authorInput = document.getElementById('book-author-input');
let readInput = document.getElementById('read-input');
let addBookBtn = document.getElementById('add-book');
let clicked = false;
let x;

let myLibrary = [];
let removeButtons = [];
let checkers = [];








function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}











function addBook() {
    addBookBtn.onclick = function(){
        if ((!titleInput.value && !authorInput.value) || (!titleInput.value && authorInput.value) || (titleInput.value && !authorInput.value)) {
            alert('ye dumb cunt');
        } else {
            let newBook = new Book();
            newBook.title = titleInput.value;
            newBook.author = authorInput.value;
            newBook.read = readInput.checked;
            myLibrary.push(newBook);

            titleInput.value = '';
            authorInput.value = '';
            readInput.checked = false;

            if (myLibrary.length == 0) {
                x = 0;
            } else {
                x = myLibrary.length - 1;
            }
        
            addToMain(x);
        }
    }
}













function removeFun() {
    let yourNans = document.querySelectorAll('button');
    let nanas = Array.from(yourNans);
    nanas.shift();
    nanas.forEach(mam => {
        if (mam.innerText != 'Add Book') {
            mam.onclick = () => {
                myLibrary.splice(nanas.indexOf(mam), 1);
                
                while (main.children.length > 1) {
                    main.removeChild(main.lastElementChild);
                }
                addToMain(x = 0);
            }
        }
    });

    console.log(checkers);
}







function editReadStatus() {
    checkers.forEach(checker => {
        checker.addEventListener('click', () => {
            if (checkers.clicked = true) {
                myLibrary[checkers.indexOf(checker)].read = true;
                console.log(myLibrary);
            } else {
                myLibrary[checkers.indexOf(checker)].read = false;
                console.log(myLibrary);
            }
        });
    });
}








function addToMain(i) {
    for (i; i < myLibrary.length; i++) {
        //create new book div
        let newBookDiv = document.createElement('div');
        newBookDiv.classList.add('book-input');

        //create new checkbox div
        let newCheckDiv = document.createElement('div');
        newCheckDiv.classList.add('read-checkbox');

        //create book title
        let newTitleInput = document.createElement('h1');
        newTitleInput.setAttribute('id', 'book-name-input');
        newTitleInput.innerText = myLibrary[i].title;

        //create book author
        let newAuthorInput = document.createElement('h2');
        newAuthorInput.setAttribute('id', 'book-author-input');
        newAuthorInput.innerText = myLibrary[i].author;

        //create checkbox
        let newCheck = document.createElement('input');
        newCheck.type = 'checkbox';
        newCheck.setAttribute('id', 'read-input');
        newCheck.classList.add(`check-${i}`);
        checkers.push(newCheck);
        if (myLibrary[i].read) {
            newCheck.checked = 'true';
        }

        //create checkbox label
        let newLabel = document.createElement('label');
        newLabel.setAttribute('id', 'read-label');
        newLabel.innerText = 'Have Read';

        //create button
        let newButton = document.createElement('button');
        newButton.innerText = 'Remove Book';
        newButton.classList.add(`remove-${i}`);
        removeButtons.push(newButton);

        newBookDiv.appendChild(newTitleInput);
        newBookDiv.appendChild(newAuthorInput);
        newCheckDiv.appendChild(newCheck);
        newCheckDiv.appendChild(newLabel);
        newBookDiv.appendChild(newCheckDiv);
        newBookDiv.appendChild(newButton);
        main.appendChild(newBookDiv);

        removeFun();
    }
}















addBook();
editReadStatus();