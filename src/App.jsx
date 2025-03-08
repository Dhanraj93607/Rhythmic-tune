import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Songs from './Components/Songs';
import Sidebar from './Components/Sidebar';
import Favorities from './Components/Favorities';
import Playlist from './Components/Playlist';

function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Hello, Music Player!</h1>
      <BrowserRouter>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 1, padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Songs />} />
              <Route path="/songs" element={<Songs />} />
              <Route path="/favorities" element={<Favorities />} />
              <Route path="/playlist" element={<Playlist />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
