import React, { useEffect, useRef } from 'react';

import { mount } from 'dashboard/DashboardApp';

export default () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);

  return <div ref={ref} />;
}
