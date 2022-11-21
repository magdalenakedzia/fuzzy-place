import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Library } from './pages/Library';
import { Adventures } from './pages/Adventures';
import { Battlefield } from './pages/Battlefield';


function App() {

  return (
    <div className="App">
      <Sidebar />
      <div className='sidebar-width' />
      <div className='pages-container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/adventures" element={<Adventures />}></Route>
          <Route path="/battlefield" element={<Battlefield />}></Route>

        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
