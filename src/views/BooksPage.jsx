import Book from "../components/Book.jsx";
import Header from "../components/Header.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectBooks, fetchBooks } from "../store/booksSlice.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function BooksPage() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks).books;
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
          {books.length ? (
            <div className="books-list">
              {books.map((book) => (
                <Book key={book.id} book={book} />
              ))}
            </div>
          ) : bookStatus == "loading" ? (
            <h3>Loading...</h3>
          ) : bookStatus == "failed" ? (
            <h3>Failed to feth the books from the server</h3>
          ) : (
            <h3>
              Your Book list is empty <Link to="/add-book">lick here</Link>c to
              add
            </h3>
          )}
        </div>
      </div>
    </>
  );
}

export default BooksPage;
