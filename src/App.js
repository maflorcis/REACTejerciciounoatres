import Hellomyfriend from "./Components/Hellomyfriend";
import HelloWorld from "./Components/HelloWorld";


function App() {
  const persona = "friend";

  return (
    <>
   < HelloWorld/>

   
   <Hellomyfriend persona = {persona}/>
   </>

    );
}

export default App;