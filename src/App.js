import './App.css';
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import RootPage from "./pages/admin/RootPage";
import CustomerRootPage from "./pages/customer/RootPage";
import { useCookies } from 'react-cookie';
import LoginForm from './components/auth/LoginForm';


const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['username']);
  console.log('cookies username is: ' + cookies.username);
  if (cookies.username != undefined){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/app/dashboard" />
            </Route>
            <Route path="/app" component={CustomerRootPage}></Route>
            <Route exact path="/login" component={AuthPage}></Route>
            <Route exact path="/registration" component={AuthPage}></Route>
            <Route exact path="/password-reset-account-verify" component={AuthPage}></Route>
            <Route exact path="/password-reset" component={AuthPage}></Route>
            {/* Admin Routers */}
            <Route path="/admin" component={RootPage}></Route>
            <Route exact path="" component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }else {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login" component={AuthPage}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
  
  
}

export default App;
