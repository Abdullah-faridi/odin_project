class Book {
    constructor(title, author, pages, readStatus) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.readStatus = readStatus;
      this.id = crypto.randomUUID();
    }
  
    info() {
      return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBooks(book) {
      this.books.push(book);
      renderBooks();
    }
  
    removeBookById(id) {
      this.books = this.books.filter(book => book.id !== id);
      renderBooks();
    }
  }
  
  const myLibrary = new Library();
  
  function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.addBooks(newBook);
  }
  
  function renderBooks() {
    const container = document.getElementById("book-display");
    container.innerHTML = "";
  
    myLibrary.books.forEach((book) => {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book-card");
      bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.readStatus ? "Yes" : "No"}</p>
        <button class="delete-btn">Delete</button>
      `;
  
      bookDiv.addEventListener("mouseenter", () => {
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("info");
        infoDiv.textContent = book.info();
        bookDiv.appendChild(infoDiv);
      });
  
      bookDiv.addEventListener("mouseleave", () => {
        const infoDiv = bookDiv.querySelector(".info");
        if (infoDiv) infoDiv.remove();
      });
  
      // Delete button
      const deleteBtn = bookDiv.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", () => {
        myLibrary.removeBookById(book.id);
      });
  
      container.appendChild(bookDiv);
    });
  }
 
  const addDialog = document.getElementById("book-dialog");
  const openBtn = document.getElementById("add-book");
  const confirmAddBtn = document.getElementById("confirm-add");
  
  openBtn.addEventListener("click", () => {
    addDialog.showModal();
  });
  
  confirmAddBtn.addEventListener("click", () => {
    addDialog.close();
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = parseInt(document.getElementById("pages").value);
    const readStatus = document.getElementById("read").checked;
  
    if (title && author && pages) {
      addBookToLibrary(title, author, pages, readStatus);
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("pages").value = "";
      document.getElementById("read").checked = false;
    }
  });
  


