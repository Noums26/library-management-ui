import { Header } from "./components/Header";
import './styles/header.css' ;
import { Footer } from "./components/Footer";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>      
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
