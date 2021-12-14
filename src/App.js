import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./index.css"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings="¡Bienvenidos a Tea-Time!"/>
      <ItemDetailContainer/>
      <Footer/>
    </div>
  );
}

export default App;
