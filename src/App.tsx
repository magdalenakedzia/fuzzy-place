import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Library } from './pages/Library';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='sidebar-width' />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/library" element={<Library />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
