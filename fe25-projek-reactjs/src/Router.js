import  { Routes,Route } from 'react-router-dom'
import Homepage from './Halaman/Homepage';
import Loginpage from './Halaman/Loginpage';
import Registerpage from './Halaman/Registerpage';
const Routerapp = () => {
    return ( 
        <div>
             <Routes>
             <Route path='/' element={<Homepage/>} />
                <Route path='/login' element={<Loginpage/>} />
                <Route path='/register' element={<Registerpage/>} />
             </Routes>
        </div>
     );
}
 
export default Routerapp;