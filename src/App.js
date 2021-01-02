import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import routes from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Menu */}
        <Menu />
        {/* Nội dung */}
        <Switch>{showContentMenus(routes)}</Switch>
      </div>
    </Router>
  );
}

const showContentMenus = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  }
  return result;
};

export default App;
