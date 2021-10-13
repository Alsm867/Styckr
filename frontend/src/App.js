import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormModal from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Profile from './components/ImagesComponent/index';
import ImageDetail from "./components/ImageDetailComponent";

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
          <Route path="/signup">
            <SignupFormModal />
          </Route>
          <Route path='/images' >
            <Profile />
          </Route>
          <Route path='/imagesDetail/:userId/:id'>
            {/* TODO create image detail component */}
            <ImageDetail />
          </Route>
        </Switch>
      )}

    </>
  );
}

export default App;
