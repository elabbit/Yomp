import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import BusinessList from "./components/BusinessList"
import BusinessDetails from "./components/BusinessDetails";
import BusinessForm from "./components/BusinessForm"
import DemoLogin from "./components/DemoLogin";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/demo">
            <DemoLogin />
          </Route>
          <Route exact path='/'>
            <BusinessList />
          </Route>
          <Route exact path='/business/add'>
            <BusinessForm />
          </Route>
          <Route exact path='/business/:businessId'>
            <BusinessDetails />
          </Route>
          <Route>
            <h2>This page doesn't exist!</h2>
          </Route>
        </Switch>
      )}

    </>
  );
}

export default App;
