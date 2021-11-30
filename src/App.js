import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "./index.css"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings="Acá irán los productos"/>
    </div>
  );
}

export default App;
