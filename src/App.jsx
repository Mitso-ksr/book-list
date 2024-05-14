import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BooksPage from './views/BooksPage.jsx';
import SingleBookPage from './views/SingleBookPage.jsx';
import LoginPage from './views/LoginPage.jsx';
import AddBookPage from './views/AddBookPage.jsx';
import ResetPasswordPage from './views/ResetPasswordPage.jsx';
import { useSelector } from 'react-redux';
import { selectUsers } from './store/usersSlice.js';

function App() {

  const user = useSelector(selectUsers);
  return (
    <>  
    {
      user.currentUser ?       <BrowserRouter>
      <Routes>
        <Route index element={<BooksPage />} />
        <Route path="add-book" element={<AddBookPage />} />
        <Route path="book/:id" element={<SingleBookPage />} />
      </Routes>
    </BrowserRouter> : 
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='reset-password' element = {<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
    }

      
        
    </>
  )
}

export default App
