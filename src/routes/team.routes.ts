import { Router } from 'express';
import TeamControl from '../controller/team.controller';
import jwtToken from '../authentication/jwt';

class TeamRouter {
  router = Router();
  teamControl = new TeamControl();
  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router
      .route('/')
      .post(jwtToken.validateToken, this.teamControl.createTeam);
    this.router
      .route('/')
      .get(jwtToken.validateToken, this.teamControl.getTeamsInCompany);
  }
}

export default new TeamRouter().router;
