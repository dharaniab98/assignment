import { Company } from '../models/company.model';
import { Op } from 'sequelize';

class CompanyRepo {
  //constructor() {}

  async createCompany(
    companyId: string,
    companyName: string,
    companyCeo: string,
    companyAddress: string
  ) {
    console.log(companyId);
    return await Company.create({
      companyId: companyId,
      companyName: companyName,
      companyCeo: companyCeo,
      companyAddress: companyAddress,
    });
    // } catch (err) {
    //   console.log(err);
    // }
  }

  async getCompanyById(companyId: string) {
    return await Company.findOne({ where: { companyId: companyId } });
  }

  async searchCompanyByName(companyName: string) {
    const searchPattern = '%' + companyName + '%';
    return await Company.findAll({
      where: { companyName: { [Op.like]: searchPattern } },
    });
  }
}

export default new CompanyRepo();
