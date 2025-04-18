import { CompanyRepository } from "../interfaces/CompanyRepository";

export class CompanyUseCase {
  constructor(
    private companyRepository: CompanyRepository
  ) {}

  async getById(id: number) {
    return this.companyRepository.getById(id);
  }

  async getCompaniesWithTransactionsLastMonth() {
    return await this.companyRepository.getCompaniesWithTransactionsLastMonth();
  }

  async getCompaniesJoinedLastMonth() {
    return await this.companyRepository.getCompaniesJoinedLastMonth();
  }

  async createCompany(cuit: string, businessName: string) {
    return await this.companyRepository.createCompany(cuit, businessName);
  }
}