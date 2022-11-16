import  { Routes,Route } from 'react-router-dom'
import Loginpage from './components/Loginpage';
import Registerpage from './components/Registerpage';
const Routerapp = () => {
    return ( 
        <div>
             <Routes>
                <Route path='/login' element={<Loginpage/>} />
                <Route path='/register' element={<Registerpage/>} />
             </Routes>
        </div>
     );
}
 
export default Routerapp;