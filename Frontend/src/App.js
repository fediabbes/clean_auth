import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbare from './Components/Navbar/Navbare';
import PrivateRoute from './Components/Private/PrivateRoute';
import Profile from './Components/Profile/Profile';
import Signin from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';


function App() {
  return (
    <div >
      <Navbare />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<PrivateRoute> <Profile /> </PrivateRoute>} />

      </Routes>


    </div>
  );
}

export default App;
