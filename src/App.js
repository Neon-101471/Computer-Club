import { Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import NotFound from './Pages/404/NotFound';
import About from './Pages/About/About';
import Details from './Pages/Home/Details/Details';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Notice from './Pages/Notice/Notice';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
