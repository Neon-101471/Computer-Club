import { Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/404/NotFound';
import About from './Pages/About/About';
import Details from './Pages/Home/Details/Details';
import Home from './Pages/Home/Home/Home';
import Notice from './Pages/Notice/Notice';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' >
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/notice'>
          <Notice />
        </Route>
        <Route path="/details/:detailsId">
          <Details></Details>
        </Route>
        <Route  path='/about'><About></About></Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
