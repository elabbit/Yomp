import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import BusinessListSorter from "./components/BusinessListSorter"
import BusinessDetails from "./components/BusinessDetails";
import HomePage from "./components/HomePage";
import About from "./components/About";


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
            <HomePage />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/burgerjoints'>
            <BusinessListSorter />
          </Route>
          <Route exact path='/burgerjoints/:businessId'>
            <BusinessDetails />
          </Route>
          <Route>
            <div className="body-container" id="notfound">
              <h2>This page doesn't exist! Please return
                <Link to="/">home.</Link>
              </h2>
            </div>
          </Route>
        </Switch>
      )}

    </>
  );
}

export default App;
