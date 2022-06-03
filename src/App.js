import Services from "./Components/Services";
import "./index.scss";
import { RouterComponent } from "./Router";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <RouterComponent />
      {/* <Element name="Services" className="element">
        <Services />
      </Element> */}
    </div>
  );
}

export default App;
