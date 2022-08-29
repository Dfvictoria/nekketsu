import NavBar from "./components/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hello" />
      <ItemCount stock= {5} initial={1} />
    </div>
  );
}

export default App;
