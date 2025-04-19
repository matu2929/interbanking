import { CompanyUseCase } from '../CompanyUseCase';
import { CompanyRepository } from '../../interfaces/CompanyRepository';
import { Company } from '../../../domain/entities/Company';

const mockCompanyRepository: jest.Mocked<CompanyRepository> = {
  getById: jest.fn(),
  getCompaniesWithTransactionsLastMonth: jest.fn(),
  getCompaniesJoinedLastMonth: jest.fn(),
  createCompany: jest.fn(),
};

describe('CompanyUseCase', () => {
  let companyUseCase: CompanyUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    companyUseCase = new CompanyUseCase(mockCompanyRepository);
  });

  describe('getCompaniesWithTransactionsLastMonth', () => {
    it('debería retornar las empresas con transferencias del último mes', async () => {
      const mockCompanies: Company[] = [
        new Company(
          1,
          '123123',
          'Empresa 1',
          [],
          new Date('2025-04-01'),
          new Date('2025-04-01'),
          null
        ),
        new Company(
          2,
          '123123',
          'Empresa 2',
          [],
          new Date('2025-04-02'),
          new Date('2025-04-02'),
          null
        ),
      ];

      mockCompanyRepository.getCompaniesWithTransactionsLastMonth.mockResolvedValue(mockCompanies);

      const result = await companyUseCase.getCompaniesWithTransactionsLastMonth();

      expect(mockCompanyRepository.getCompaniesWithTransactionsLastMonth).toHaveBeenCalled();
      expect(result).toEqual(mockCompanies);
    });
  });

  describe('getCompaniesJoinedLastMonth', () => {
    it('debería retornar las empresas que se adhirieron el último mes', async () => {
      const mockCompanies: Company[] = [
        new Company(
          3,
          '123123',
          'Empresa 3',
          [],
          new Date('2025-04-15'),
          new Date('2025-04-15'),
          null
        ),
        new Company(
          4,
          '123123',
          'Empresa 4',
          [],
          new Date('2025-04-20'),
          new Date('2025-04-20'),
          null
        ),
      ];

      mockCompanyRepository.getCompaniesJoinedLastMonth.mockResolvedValue(mockCompanies);

      const result = await companyUseCase.getCompaniesJoinedLastMonth();

      expect(mockCompanyRepository.getCompaniesJoinedLastMonth).toHaveBeenCalled();
      expect(result).toEqual(mockCompanies);
    });
  });

  describe('createCompany', () => {
    it('debería crear una nueva empresa', async () => {
      const cuit = '123123';
      const businessName = 'Empresa Nueva';

      const mockCompany = new Company(
        5,
        cuit,
        businessName,
        [],
        new Date('2025-04-25'),
        new Date('2025-04-25'),
        null
      );

      // Simulamos la respuesta del repositorio al crear una empresa
      mockCompanyRepository.createCompany.mockResolvedValue(mockCompany);

      const result = await companyUseCase.createCompany(cuit, businessName);

      expect(mockCompanyRepository.createCompany).toHaveBeenCalledWith(cuit, businessName);
      expect(result).toEqual(mockCompany);
    });
  });

  describe('getById', () => {
    it('debería retornar una empresa si existe', async () => {
      const mockCompany = new Company(
        6,
        '123123',
        'Empresa Existente',
        [],
        new Date('2025-04-10'),
        new Date('2025-04-10'),
        null
      );

      mockCompanyRepository.getById.mockResolvedValue(mockCompany);

      const result = await companyUseCase.getById(6);

      expect(mockCompanyRepository.getById).toHaveBeenCalledWith(6);
      expect(result).toEqual(mockCompany);
    });

    it('debería retornar null si la empresa no existe', async () => {
      mockCompanyRepository.getById.mockResolvedValue(null);

      const result = await companyUseCase.getById(999);

      expect(mockCompanyRepository.getById).toHaveBeenCalledWith(999);
      expect(result).toBeNull();
    });
  });
});