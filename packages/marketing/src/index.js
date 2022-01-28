import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

export const mount = (el) => {
  ReactDOM.render(<App />, el);
}
 