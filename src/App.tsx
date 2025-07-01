import * as route from './allFiles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <route.Header />
      <Routes>
        <Route path="/" element={<route.MainPage />} />
        <Route path="/mypage" element={<route.Mypage />} />
      </Routes>
      <route.Footer />
    </Router>
  );
}

export default App;
