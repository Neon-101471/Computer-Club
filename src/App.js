import { Route, Switch } from "react-router-dom";
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Results from "./Pages/Results/Results";
import NotFound from "./Pages/404/NotFound";
import About from "./Pages/About/About";
import Students from "./Pages/Department/Students/Students";
import Teachers from "./Pages/Department/Teachers/Teachers";
import Events from "./Pages/Events/Events";
import Details from "./Pages/Home/Details/Details";
import Home from "./Pages/Home/Home/Home";
import Notice from "./Pages/Notice/Notice";
import RolesAndRegulation from "./Pages/RolesAndRegulation/RolesAndRegulation";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Dashboard from "./Pages/Login/Admin/Dashboard/Dashboard";
import CurrentPanel from "./Pages/Executives/CurrentPanel/CurrentPanel";
import ResultForm from "./Pages/EventForm/ResultForm/ResultForm";
import NoticeForm from "./Pages/EventForm/NoticeForm/NoticeForm";

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
          <Route path='/events'>
            <Events />
          </Route>
          <Route path='/notice'>
            <Notice />
          </Route>
          <Route path='/results'>
            <Results />
          </Route>
          <Route path="/details/:detailsId">
            <Details></Details>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path="/teachers">
            <Teachers></Teachers>
          </Route>
          <Route path="/students">
            <Students />
          </Route>
          <Route path="/notice-form">
            <NoticeForm />
          </Route>
          <Route path="/current-panel">
            <CurrentPanel />
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path="/roles">
            <RolesAndRegulation></RolesAndRegulation>
          </Route>
          <Route path='/result-form'>
            <ResultForm />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
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
