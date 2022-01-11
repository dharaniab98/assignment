import { Router } from 'express';
import CompanyControl from '../controller/company.controller';
import jwtToken from '../authentication/jwt';
class CompanyRouter {
  router = Router();
  companyControl = new CompanyControl();
  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router
      .route('/')
      .post(jwtToken.validateToken, this.companyControl.createCompany);
    this.router
      .route('/:companyId')
      .get(jwtToken.validateToken, this.companyControl.getCompanyByID);
    this.router
      .route('/search/:searchString')
      .get(jwtToken.validateToken, this.companyControl.searchCompanyByName);
    console.log('Hello comapnyrouter');
  }
}

export default new CompanyRouter().router;
