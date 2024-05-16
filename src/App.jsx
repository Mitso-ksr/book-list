import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksPage from "./views/BooksPage.jsx";
import SingleBookPage from "./views/SingleBookPage.jsx";
import LoginPage from "./views/LoginPage.jsx";
import AddBookPage from "./views/AddBookPage.jsx";
import ResetPasswordPage from "./views/ResetPasswordPage.jsx";
import { useSelector } from "react-redux";
import { selectUsers } from "./store/usersSlice.js";
import { useEffect } from "react";

function App() {
  const user = useSelector(selectUsers);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {user.currentUser ? (
            <Route index element={<BooksPage />} />
          ) : (
            <Route index element={<LoginPage />} />
          )}
          <Route path="add-book" element={<AddBookPage />} />
          <Route path="book/:id" element={<SingleBookPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <Route index element={<BooksPage />} />
        <Route path="add-book" element={<AddBookPage />} />
        <Route path="book/:id" element={<SingleBookPage />} />
        <Route path='*' element={<h1>hello world</h1>} />
      </Routes>
    </BrowserRouter> : 
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='reset-password' element = {<ResetPasswordPage />} />
        <Route path='*' element={<h1>hello world</h1>} /> */
}
