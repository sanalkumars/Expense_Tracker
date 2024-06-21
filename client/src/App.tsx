import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import DashBoard from './pages/dashboard';
import AuthPage from './pages/auth';

function App() {
  

  return (
   <Router>
    <div className="app-container">
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </div>
   </Router>
  )
}

export default App
