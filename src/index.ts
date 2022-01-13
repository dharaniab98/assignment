import { Application, urlencoded, json } from 'express';
import Router from './routes';

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Router(app);
  }

  public config(app: Application) {
    app.use(urlencoded({ extended: true }));
    app.use(json());
  }
}
