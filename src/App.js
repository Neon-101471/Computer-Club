import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from './Contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Results from "./Pages/Results/Results";
import Students from "./Pages/Department/Students/Students";
import Teachers from "./Pages/Department/Teachers/Teachers";
import Events from "./Pages/Events/Events";
import Details from "./Pages/Home/Details/Details";
import Notice from "./Pages/Notice/Notice";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Dashboard from "./Pages/Login/Admin/Dashboard/Dashboard";
import ResultForm from "./Pages/EventForm/ResultForm/ResultForm";
import NoticeForm from "./Pages/EventForm/NoticeForm/NoticeForm";
import NoticeDemo from "./Pages/Notice/NoticeDemo/NoticeDemo";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import About from './Pages/Home/About/About/About';
import RulesAndRegulation from './Pages/Home/About/RulesAndRegulation/RulesAndRegulation';
import Executive2021 from './Pages/Executives/Executive2021/Executive2021';
import NotFound from './Pages/Shared/NotFound/NotFound';

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
          <Route path="/executive-panel-2021">
            <Executive2021 />
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path="/rules">
            <RulesAndRegulation></RulesAndRegulation>
          </Route>
          <Route path='/result-form'>
            <ResultForm />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/notice-demo'>
            <NoticeDemo />
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
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
