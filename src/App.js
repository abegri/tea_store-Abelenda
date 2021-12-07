import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import "./index.css"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemCount stock={6} initial={0}/>
      <ItemListContainer greetings="Acá irán los productos"/>
      <Footer/>
    </div>
  );
}

export default App;
