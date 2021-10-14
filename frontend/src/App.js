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
          <Route exact path='/'>
            <div className='main-home'>

              <h1 className='styckr'>Styckr</h1>
              <p className='a-place'>A place to share your adventure through many forests!</p>
            </div>
          </Route>
          <Route path="/signup">
            <SignupFormModal />
          </Route>
          <Route exact path='/images/:userId' >
            <Profile />
          </Route>
          <Route path='/images/:userId/:imageId'>
            <ImageDetail />
          </Route>
        </Switch>
      )}

    </>
  );
}

export default App;
