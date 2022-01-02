import { Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/404/NotFound';
import Details from './Pages/Home/Details/Details';
import Home from './Pages/Home/Home/Home';
import Notice from './Pages/Notice/Notice';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/notice'>
          <Notice />
        </Route>
        <Route  path="/details/:detailsId">
            <Details></Details>
          </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
