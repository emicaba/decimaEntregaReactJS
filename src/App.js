import './App.css';
import ItemListContainer from './components/Body/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
   <>
   <NavBar />
   <ItemListContainer greeting="Greeting" />

   </>
  );
}

export default App;
