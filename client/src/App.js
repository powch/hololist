import React, { useReducer } from 'react';

import reducer from './features/Hololist/Hololist.reducer';
import initialState from './features/Hololist/Hololist.initialState';

import Hololist from './features/Hololist';


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return(<Hololist state={state} dispatch={dispatch} />)
}

export default App;
