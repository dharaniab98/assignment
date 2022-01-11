import { Team } from './../models/team.model';
import { Company } from '../models/company.model';

Company.sync({ force: true })
  .then(() => {
    Team.sync({ force: true }).then(() => {
      console.log('tables creation');
    });
  })
  .catch((e) => {
    console.log(e);
  });
