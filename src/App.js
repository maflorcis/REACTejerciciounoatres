import Mensaje from "./Components/Ejercicio3";
import Estado from "./Components/Estado";
import Hellomyfriend from "./Components/Hellomyfriend";
import HelloWorld from "./Components/HelloWorld";


function App() {
  const persona = "friend";

  return (
    <>
      <HelloWorld />

      <Hellomyfriend persona={persona} />

      <Estado></Estado>
      <Mensaje></Mensaje>
    </>
  );
}

export default App;
