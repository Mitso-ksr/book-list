import Book from "../components/Book.jsx";
import Header from "../components/Header.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectBooks, fetchBooks } from "../store/booksSlice.js";
import { useEffect } from "react";
import { useState } from "react";


function BooksPage() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks).books
  const pageTitle = "📖 Book List with Router, Redux & Firebase";

  const bookStatus = useSelector(selectBooks).status;
  useEffect(() => {
    if (bookStatus == "idle") {
      dispatch(fetchBooks());
    }
  }, []);

  return (
    <>
      <div className="container">
        <Header pageTitle={pageTitle} />
        <div className="books-container">
          <div className="books-list">
            {
              books.status == 'loading' ? 
              <h3>Loading ...</h3>  :
              books.map((book) => (
                <Book key={book.id} book={book} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksPage;
