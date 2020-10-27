import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FormUp from '../pages/FormUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={FormUp} />
  </Switch>

)
export default Routes;