const marketingApp = import('./index');

marketingApp.then(({ mount }) => {
  const el = document.querySelector('#auth-root');
  mount(el, { shouldUseBrowserHistory: true });
});
