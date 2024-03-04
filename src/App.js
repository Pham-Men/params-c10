import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Employee } from './Component/Employee';
import { Login } from './Component/Login'
import { Detail } from './Component/Detail';
import { Students } from './Component/Students';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/detail/:id' element={<Detail></Detail>}></Route>
      <Route path='/employees' element={<Employee/>}></Route>
      <Route path='/students' element={<Students/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
