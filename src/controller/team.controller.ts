import { Request, Response } from 'express';
import teamRepo from './../repositories/team.repository';
import { v4 as uuidv4 } from 'uuid';
export default class TeamControl {
  async createTeam(req: Request, res: Response) {
    try {
      const teamId = uuidv4();
      const companyId = req.body.companyId;
      const teamLeadName = req.body.teamLeadName;
      const result = await teamRepo.createTeam(teamId, companyId, teamLeadName);
      res.send({ message: 'success', data: result });
    } catch (err) {
      res.send({ message: 'fail', data: err.errors });
    }
  }

  async getTeamsInCompany(req: Request, res: Response) {
    try {
      const result = await teamRepo.getTeamsInCompany();
      res.send({ message: 'success', data: result });
    } catch (err) {
      res.send({ message: 'fail', data: err.errors });
    }
  }
}
