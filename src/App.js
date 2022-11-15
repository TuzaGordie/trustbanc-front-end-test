import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeComponent from './pages/Home';
import LoginComponent from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />}></Route>
      <Route path="/login" element={<LoginComponent />}></Route>
    </Routes>
  );
}

export default App;
