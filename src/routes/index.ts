import { Application, Request, Response } from 'express';
import companyRouter from './company.routes';
import teamRouter from './team.routes';

export default class Router {
  constructor(app: Application) {
    // health check done
    app.route('/health').get((req: Request, res: Response) => {
      res.send({ status: 'success', message: 'working fine' });
    });
    app.use('/api/company', companyRouter);
    app.use('/api/team', teamRouter);
    app.use('api/teams', teamRouter);
  }
}
