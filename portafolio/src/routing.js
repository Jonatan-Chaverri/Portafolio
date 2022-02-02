import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home'

export default function App() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
}
