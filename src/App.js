import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Employee } from './Component/Employee';
import { Login } from './Component/Login'
import { Detail } from './Component/Detail';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/detail/:id' element={<Detail></Detail>}></Route>
      <Route path='/employee' element={<Employee></Employee>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
