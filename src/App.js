import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import BookList from './pages/BookList';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>      
      <Header/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
