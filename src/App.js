import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tchat from './pages/Tchat'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tchat />} />
        <Route path="*" element={<Tchat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
