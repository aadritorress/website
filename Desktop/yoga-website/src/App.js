import  { BrowserRouter as Autobahn, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/pages/Home"
import Classes from "./components/pages/Classes"


function App() {
  return (
<Autobahn>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/classes' exact component={Classes} />
      </Switch>
    </Autobahn>
  );
}

export default App;
