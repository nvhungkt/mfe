const marketingApp = import('./index');

marketingApp.then(({ mount }) => {
  const el = document.querySelector('#marketing-root');
  mount(el);
});
