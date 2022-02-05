const authApp = import('./index');

authApp.then(({ mount }) => {
  const el = document.querySelector('#auth-root');
  mount(el, { shouldUseBrowserHistory: true, initialLocation: { pathname: '/auth/signin' } });
});
