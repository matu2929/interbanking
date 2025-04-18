import { Company } from "../../domain/entities/Company";
import { TransactionMapper } from "./TransactionMapper";

export class CompanyMapper {
  static toEntity(company: any): Company {
    return new Company(
      company.id,
      company.cuit,
      company.businessName,
      company.transactions?.map(TransactionMapper.toEntity) || [],
      company.createdAt,
      company.updatedAt,
      company.deletedAt ?? undefined
    );
  }
}