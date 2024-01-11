import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Games from './components/pages/games/Games.tsx';
import Books from './components/pages/books/Books.tsx';

const Routers = () => {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/games' element={<Games />} />
          <Route path='/books' element={<Books />} />
        </Routes>
      </Router>
    );
  };
  
  export default Routers;