import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/LoginScreen/Login';
import Dashboard from './pages/RestrictArea/Dashboard';
import { Routes, Route } from 'react-router';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
