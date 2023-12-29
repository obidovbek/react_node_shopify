import {App} from './app.js';

/**
 * Загрузите приложение.
 */
function appBootstrap() {
  const app = new App();
  app.init();
}
appBootstrap();
