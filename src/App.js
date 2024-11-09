import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Layout
import Layout from './components/Layout';

// Pages
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Tv from './pages/Tv';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Movies/>} />
          <Route path='/shows' element={<Shows/>} />
          <Route path='/tv' element={<Tv/>} />
        </Route>
        
        {/* Catch-All Route to Redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
