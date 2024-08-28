import { BrowserRouter } from "react-router-dom";
import { WebRouter } from "./router";


const App = () => {
  return (
    <BrowserRouter>
      <WebRouter />
    </BrowserRouter>
  );
};
export default App;
