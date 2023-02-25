import Header from "./component/Header/Header"
import NavBar from "./component/NavBar/NavBar"
import { withIoc } from "terso"

import { configureContainer } from "./ioc/ioc.config"
import Theme from "./theme/Theme"
import { CurrentRoute, withRouter } from "terso-routing"

function App() {
    return (
        <div className="App">
            <Theme />
            <Header />
            <NavBar />
            <CurrentRoute />
        </div>
    )
}

export default withIoc(withRouter(App), configureContainer)
