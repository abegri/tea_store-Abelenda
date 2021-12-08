import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import "./index.css"

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/*<ItemCount stock={7} initial={0}/>*/}
      <ItemListContainer greetings="¡Bienvenidos a Tea-Time!"/>
      <Footer/>
    </div>
  );
}

export default App;
