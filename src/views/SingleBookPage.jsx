import { useParams, Link, useNavigate } from 'react-router-dom';
import Notes from '../components/Notes.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { selectBooks, eraseBook } from '../store/booksReducer.js';

function SingleBookPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const books = useSelector(selectBooks)

  const book = books.filter(book => book.id == id)[0]

  function handleEraseBook(id) {
    if (confirm("are you sure you want to delete the book?")) {
      dispatch(eraseBook(id))
      navigate('/')
    }
  }

  return (
    <>
      <div className="container">
        <Link to='/'>
          <button className="btn">
            ← Back to Books
          </button>
        </Link>

        {
          book ? <div>
            <div className="single-book">
              <div className="book-cover">
                <img src={book.cover} />
              </div>

              <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <h4 className="book-author">{book.author}</h4>
                <p>{book.synopsis}</p>
                <div className="read-checkbox">
                  <input type="checkbox" defaultChecked={book.isRead} />
                  <label>{book.isRead ? "Already Read It" : "Haven't Read it yet"}</label>
                </div>
                <div className="erase-book" onClick={() => handleEraseBook(book.id)}>
                  Erase book
                </div>
              </div>
            </div>

            <Notes />
          </div> : <h2 style={{'text-align' : 'center'}}>Book not found</h2>
        }


      </div>


    </>
  )
}

export default SingleBookPage
