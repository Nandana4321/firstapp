import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Statebasics from './components/Statebasics';
import Counter from './components/Counter';
import Signup from './components/Signup';
import UseEffect from './components/UseEffect';
import { Route, Routes } from 'react-router-dom';
import Mapping from './components/Mapping.';
import Arraytab from './components/Arraytab';
import N1 from './components/N1';
import Api from './components/Api';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Gride2 from './components/Gride2';
import { Card } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/s' element={<Signup/>}/>
        <Route path='/ss' element ={<Mapping/>}/>
        <Route path='/sss'element={<Arraytab/>}/>
        <Route path='/m' element={<N1/>}/>
        <Route path='/mm' element={<Api/>}/>
        <Route path='/g' element={<Gride2/>}/>
        <Route path='/c' element={<Card/>}/>
      </Routes>
      {/* <Login /> */}
      {/* <Statebasics/> */}
      {/* <Counter/> */}
      {/* <Signup/> */}
      {/* <UseEffect/> */}

    </div>
  );
}

export default App;
