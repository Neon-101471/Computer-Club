import { Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/404/NotFound';
import Home from './Pages/Home/Home/Home';
import Notice from './Pages/Notice/Notice';

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

        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
