import { Route, Switch } from "react-router-dom";
import Characters from "./Characters";
import Episodes from "./Episodes";
import Footer from "./Footer";
import Header from "./Header";
import Locations from "./Locations";
import NotFound from "./NotFound";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Characters />
        </Route>
        <Route path="/episodes">
          <Episodes />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>

      <Footer></Footer>
    </div>
  );
}
