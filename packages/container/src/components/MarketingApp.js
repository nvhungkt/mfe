import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'marketing/MarketingApp';

export default () => {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = mount(ref.current, {
        onNavigate: (nextLocation) => {
          const { location } = history;
          if (location.pathname !== nextLocation.pathname || location.state !== nextLocation.state || location.search !== nextLocation.search) {
            history.push(nextLocation);
          }
        },
        initialLocation: history.location,
      });

      if (onParentNavigate) {
        history.listen(onParentNavigate);
      }
    }
  }, []);

  return <div ref={ref} />;
}
