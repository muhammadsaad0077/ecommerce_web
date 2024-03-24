import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import { Provider } from 'react-redux';
import store from './utils/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Electronics from './components/Electronics';
import Jewelry from './components/Jewelry';
import MenClothing from './components/MenClothing';
import WomenClothing from './components/WomenClothing';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App bg-yellow-900 h-screen w-screen overflow-x-hidden">
      <Home />
      <SideBar />
      <Routes>
       <Route path="/electronics" element={<Electronics />} />
       <Route path="/jewelery" element={<Jewelry />} />
       <Route path="/men's clothing" element={<MenClothing />} />
       <Route path="/women's clothing" element={<WomenClothing />} />
      </Routes>
      <HomePage />
      <Routes>
        <Route path="/" element={<><Home />
      <SideBar />
      <HomePage />
      
      </>
      }  />
      </Routes>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
