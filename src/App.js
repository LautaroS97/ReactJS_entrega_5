import './App.css';
import logo from './assets/img/logo.png';
import ItemListContainer from './components/ItemListContainer';
import Menu from './components/NavBar.js';


function App() {
  return (
    <div className="App">
      <header>
        <div className='menu'>
          <div className='logo-container'>
            <img src={logo} alt='Logo' className='logo'/>
          </div>
          <Menu/>
          <ItemListContainer/>
        </div>
      </header>
    </div>
  );
}

export default App;
