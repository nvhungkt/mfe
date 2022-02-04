import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './app';

export const mount = (el, { onNavigate, initialLocation, shouldUseBrowserHistory }) => {
  const history = shouldUseBrowserHistory ? createBrowserHistory() : createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  if (initialLocation) {
    history.push(initialLocation);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate(nextLocation) {
      const { location } = history;
      if (location.pathname !== nextLocation.pathname || location.state !== nextLocation.state || location.search !== nextLocation.search) {
        history.push(nextLocation);
      }
    }
  }
}
 