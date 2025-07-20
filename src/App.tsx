import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeIndex from './app/presentation/pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeIndex/>} />
      </Routes>
    </Router>
  )
}

export default App
