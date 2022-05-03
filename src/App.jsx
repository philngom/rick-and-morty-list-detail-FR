import { useEffect, useState } from 'react';
import Characters from './views/Characters';
import Character from './components/Character';
import { Switch, Route } from 'react-router-dom';

export default function App() {

  return (
    <Switch>
      <Route path="/character/:id">
        <Character />
      </Route>
      <Route path="/">
        <Characters />
      </Route>
    </Switch>

  );
}
