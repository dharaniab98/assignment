import { Request, Response } from 'express';
import companyRepo from '../repositories/company.repository';
import { v4 as uuidv4 } from 'uuid';

export default class CompanyControl {
  //constructor() {}

  async createCompany(req: Request, res: Response) {
    try {
      const id = uuidv4();
      const companyName = req.body.companyName;
      const companyCeo = req.body.companyCeo;
      const companyAddress = req.body.companyAddress;
      const result = await companyRepo.createCompany(
        id,
        companyName,
        companyCeo,
        companyAddress
      );
      res.send({ message: 'success', data: result });
    } catch (err) {
      res.send({ message: 'fail', data: err.errors });
    }
  }

  async getCompanyByID(req: Request, res: Response) {
    try {
      const companyId = req.params.companyId;
      const result = await companyRepo.getCompanyById(companyId);
      res.send({ message: 'success', data: result });
    } catch (err) {
      res.send({ message: 'fail', data: err.errors });
    }
  }

  async searchCompanyByName(req: Request, res: Response) {
    try {
      const searchString = req.params.searchString;
      const result = await companyRepo.searchCompanyByName(searchString);
      res.send({ message: 'success', data: result });
    } catch (err) {
      res.send({ message: 'fail', data: err.errors });
    }
  }
}
