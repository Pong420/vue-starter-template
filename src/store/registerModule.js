import store from './index';

export default (name, module) => {
  if (!store.state[name]) {
    store.registerModule(name, module);
  } else if (module.hot) {
    store.hotUpdate({
      modules: {
        [name]: module
      }
    });
  }
};
