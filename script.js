"use strict";
/* Vad ska vi göra här? */

const bookList = [
  {
    id: 1,
    author: "Charles Dickens",
    title: "Oliver Twist",
  },
  {
    id: 2,
    author: "William Shakespear",
    title: "Hamlet",
  },
];
const searchInput = null;

function handleKeyPress(input) {
  /*Ta emot/läsa av värdet i inputfältet 
    Skicka detta värde till searchBooks
    searchBooks returnerar en filtrerad lista
    Listan skickas till renderBookList
    */
  searchBooks(input);
}

function searchBooks(searchTerm) {
  /* Loopa igenom bookList
    för varje varv i loopen, ta den aktuella boken
    jämför titeln med söktermen
    in Söktermen finn någonstans i titeln, lägg till boken i ny lista (filteredList)
    */
  let filteredList = [];
  for (let i = 0; i < bookList.length; i++) {
    const title = bookList[i].title.toLowerCase();
    if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
      filteredList.push(bookList[i]);
    }
  }
  renderBookList(filteredList);
}

function renderBookList(list) {
  /*Element i HTML-listan visas/döljs beroende på listans innehåll */
  console.log(list);
}



handleKeyPress("e");

