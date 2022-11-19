import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';


function App() {
  return (
    <div className="App">
      <Sidebar />

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
