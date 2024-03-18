import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App bg-yellow-900 h-screen w-screen">
      <Home />
      <SideBar />
    </div>
  );
}

export default App;
