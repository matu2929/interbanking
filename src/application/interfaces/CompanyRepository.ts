import { Company } from "../../domain/entities/Company";

export interface CompanyRepository {
  getById(id: number): Promise<Company | null>;
  getCompaniesWithTransactionsLastMonth(): Promise<Company[]>;
  getCompaniesJoinedLastMonth(): Promise<Company[]>;
  createCompany(cuit: string, businessName: string): Promise<Company>;
}