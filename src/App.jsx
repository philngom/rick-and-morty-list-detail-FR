import { useEffect, useState } from 'react';
import Characters from './views/Characters';
import Characters from './component/Characters';
import { Switch, Route } from 'react-router-dom';

export default function App() {

  return (
    <Switch>
      <Route path="/characters">
        <Characters />
      </Route>
      <Route path="/character/:id">
        <Character />
      </Route>
    </Switch>

  );
}
