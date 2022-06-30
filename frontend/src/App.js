import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import BusinessList from "./components/BusinessList"
import BusinessDetails from "./components/BusinessDetails";


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
          <Route exact path='/'>
            <BusinessList />
          </Route>
          <Route exact path='/burgerjoint/:businessId'>
            <BusinessDetails />
          </Route>
          <Route>
            <h2>This page doesn't exist! Please return
            <Link to="/">home.</Link>
            </h2>
          </Route>
        </Switch>
      )}

    </>
  );
}

export default App;
