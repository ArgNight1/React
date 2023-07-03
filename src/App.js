import './App.css';
import Navbar from '../src/components/NavBar';
import ItemListContainer from '../src/components/ItemListContainer';
import ImgTemp from '../src/components/ImgTemp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='aca van a aparecer todos los productos'/>
      <ImgTemp/>
    </div>
  );
}

export default App;
