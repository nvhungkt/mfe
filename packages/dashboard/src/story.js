const dashboardApp = import('./index');

dashboardApp.then(({ mount }) => {
  const el = document.querySelector('#dashboard-root');
  mount(el);
});
