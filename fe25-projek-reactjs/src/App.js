
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routerapp from './Router';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routerapp/>

       <Footer/>
       <ToastContainer
/>
    </div>
  );
}

export default App;
