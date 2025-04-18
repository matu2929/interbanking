import { PrismaClient } from '@prisma/client';
import { Company } from "../../../domain/entities/Company";
import { CompanyRepository } from "../../../application/interfaces/CompanyRepository";
import { AppError } from '../../../application/errors/AppError';
import { CompanyMapper } from '../../mappers/CompanyMapper';

const prisma = new PrismaClient();

export class CompanyRepositoryPrisma implements CompanyRepository {

  async getById(id: number): Promise<Company | null> {
    const data = await prisma.company.findUnique({ where: { id } });
    if (!data) return null;
    return CompanyMapper.toEntity(data);
  }

  async getCompaniesWithTransactionsLastMonth(): Promise<Company[]> {
    const data = await prisma.company.findMany({
      where: {
        transactions: {
          some: {
            createdAt: {
              gte: new Date(new Date().setMonth(new Date().getMonth() - 1)), // Último mes
            },
          },
        },
      },
      // Este JOIN no es recomendable porque puede ser muy costoso debido al volumen de transacciones, 
      // solo se hizo por practicidad para ver los datos en el resultado del endpoint
      include: {
        transactions: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return data.map(CompanyMapper.toEntity);
  }

  async getCompaniesJoinedLastMonth(): Promise<Company[]> {
    const data = await prisma.company.findMany({
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return data.map(CompanyMapper.toEntity);
  }

  async createCompany(cuit: string, businessName: string): Promise<Company> {
    const data = await prisma.company.create({
      data: {
        cuit,
        businessName
      },
    });

    return CompanyMapper.toEntity(data);
  }
}
