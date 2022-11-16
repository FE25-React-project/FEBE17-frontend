import logo from './logo.svg';
import './App.css';

import Header from './components/Header';

import Routerapp from './Router';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routerapp/>

       <Footer/>
    </div>
  );
}

export default App;
