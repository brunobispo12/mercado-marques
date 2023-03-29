import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/LoginScreen/Login';
import Dashboard from './pages/RestrictArea/Dashboard';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
