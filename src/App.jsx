import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BooksPage from './views/BooksPage.jsx';
import SingleBookPage from './views/SingleBookPage.jsx';
import AddBookPage from './views/AddBookPage.jsx';
import NotFound from './views/NotFound.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<BooksPage />} />
        <Route path='add-book' element={<AddBookPage />} />
        <Route path='book/:id' element={<SingleBookPage />} />
        <Route path='*' element = {<NotFound />} />
      </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
