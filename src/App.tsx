import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import TvShow from "./Routes/TvShow";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/tv">
                    <TvShow />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path={["/", "/movies/:movieId"]}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
