import { Application } from 'express';
import companyRouter from './company.routes';
import teamRouter from './team.routes';

export default class Router {
  constructor(app: Application) {
    app.use('/api/company', companyRouter);
    app.use('/api/team', teamRouter);
    console.log('Hello Router');
  }
}
