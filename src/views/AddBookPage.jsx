import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../store/booksReducer.js";


function AddBookPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({title:"", cover:"", isRead: false , author: "", synopsis: ""})
  const pageTitle = "Add Book";

  function handleAddBook(e) {
    e.preventDefault();
    dispatch(addBook(formState))
    navigate("/");
  }


  function handleChangeInput(e) {
    setFormState(prev => {
        return {
            ...prev,
            [e.target.name]: e.target.value
        }
    })
  }

  return (
    <>
      <div className="container">
        <Header pageTitle={pageTitle} />

        <form className="add-form">
          <div className="form-control">
            <label>Title *</label>
            <input type="text" name="title" placeholder="Add Book Title" onChange={(e) => handleChangeInput(e)} />
          </div>
          <div className="form-control">
            <label>Book Cover *</label>
            <input type="text" name="cover" placeholder="Add Cover" onChange={(e) => handleChangeInput(e)}/>
          </div>

          <div className="form-control">
            <label>Author *</label>
            <input type="text" name="author" placeholder="Add Author" onChange={(e) => handleChangeInput(e)}/>
          </div>

          <div className="form-control">
            <label>Synopsis *</label>
            <textarea
              type="text"
              name="synopsis"
              placeholder="Add a synopsis..."
              onChange={(e) => handleChangeInput(e)}
            />
          </div>

          <button type="submit" onClick={(e) => handleAddBook(e)} className="btn btn-block">
            Save Book
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBookPage;
