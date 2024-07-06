import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Card from './components/Card';
import Contributions from './components/Contributions';
import Contact from './components/Contact';

function App() {
  return (
    <div className="main-container d-flex align-items-center flex-column gap-5">
   
      <Main/>
      <Card/>
      <Contributions/>
      <Contact/>
      
    </div>
  );
}

export default App;
