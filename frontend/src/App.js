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
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      <Switch>
       <Route exact path='/'>
      <BusinessList />
        </Route>
        <Route exact path='/business/add'>
      <BusinessForm />
        </Route>
        <Route exact path='/business/:businessId'>
      <BusinessDetails />
        </Route>


      </Switch>
    </>
  );
}

export default App;
