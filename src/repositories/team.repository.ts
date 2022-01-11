import { Company } from '../models/company.model';
import { Team } from '../models/team.model';

class TeamRepo {
  async createTeam(teamId: string, companyId: string, teamLeadName: string) {
    return await Team.create({
      teamId: teamId,
      companyId: companyId,
      teamLeadName: teamLeadName,
    });
  }

  async getTeamsInCompany() {
    return await Company.findAll({
      attributes: ['companyName'],
      include: [
        { model: Team, as: 'teams', attributes: ['teamId', 'teamLeadName'] },
      ],
    });
  }
}

export default new TeamRepo();
