import Header from "./component/Header/Header";
import { withIoc } from "./ioc/withIoc";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <div className="App">
      <Header />
      <IndexPage />
    </div>
  );
}

export default withIoc(App);
