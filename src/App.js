import { BrowserRouter,Routes,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
          <Route index element ={<Home />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
