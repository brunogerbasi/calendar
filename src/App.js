import { BrowserRouter as Router } from 'react-router-dom'
import Routers from "./Routes"

import GlobalStyle from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routers />
      </Router>
    </>

  );
}

export default App;
