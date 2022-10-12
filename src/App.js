import { Header } from "./components/Header";
import './styles/header.css' ;
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<App/>}/>
      </Routes> 
      
      <div className="App">
        <Header/>
      </div>
    </>
  );
}

export default App;
