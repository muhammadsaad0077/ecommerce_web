import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SideBar from './components/SideBar';
import { Provider } from 'react-redux';
import store from './utils/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Electronics from './components/Electronics';
import Jewelry from './components/Jewelry';
import MenClothing from './components/MenClothing';
import WomenClothing from './components/WomenClothing';
import Product from './components/Product';
import CartPage from './components/Cart';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage'

function App() {
  const [loaded, setLoaded] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setLoaded(true)
    }, 1000)
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <div className={`App bg-yellow-900 h-screen w-screen overflow-x-hidden ${loaded ? 'loaded' : ''}`}>
          <Home />
          <SideBar />
          {/* Render Home component for specified routes */}
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/jewelery" element={<Jewelry />} />
            <Route path="/men's clothing" element={<MenClothing />} />
            <Route path="/women's clothing" element={<WomenClothing />} />
            <Route path='/product/:id' element={<Product />}></Route>
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          {/* Sidebar */}
          
          {/* Other routes */}
          <Routes>
            <Route path="/cart" element={<HomePage />} />
            <Route path="/product/:id" element={<HomePage />} />
            <Route path="/women's clothing" element={<HomePage />} />
            <Route path="/men's clothing" element={<HomePage />} />
            <Route path="/jewelery" element={<HomePage />} />
            <Route path="/electronics" element={<HomePage />} />
          </Routes>
          
          
        </div>
      </Router>
    </Provider>
  );
}

export default App;
