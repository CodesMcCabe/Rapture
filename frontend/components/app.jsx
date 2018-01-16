import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GreetingContainer from './welcome/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import GameroomContainer from './gameroom/gameroom_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Homepage from './homepage';

const App = () => (
  <div>
    <header>
    </header>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Switch>
      <ProtectedRoute exact path="/channels" component={GameroomContainer}/>
      <Route exact path="/" component={Homepage}/>
    </Switch>
  </div>
);

export default App;
