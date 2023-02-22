import Header from "./component/Header/Header";
import NavBar from "./component/NavBar/NavBar";
import { withIoc } from "./ioc/withIoc";
import CurrentRoute from "./routing/CurrentRoute";
import { withRouter } from "./routing/hooks";
import "./theme/Theme";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <CurrentRoute />
    </div>
  );
}

export default withIoc(withRouter(App));
