import { Request, Response } from "express";
import { CompanyUseCase } from "../../../application/use-cases/CompanyUseCase";
import { CompanyDTO } from "../dtos/CompanyDto";
import { toDTO } from "../helpres/dto";
import { AppError } from "../../../application/errors/AppError";

export class CompanyController {
  constructor(private companyUseCase: CompanyUseCase) {}

  async get(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const company = await this.companyUseCase.getById(id);
    
    if (!company) {
      throw new AppError("Empresa no encontrada", 404);
    }
    
    const companyDTO = toDTO(CompanyDTO, company);
    return res.send(companyDTO);
  }

  async getCompaniesWithTransactionsLastMonth(req: Request, res: Response) {
    const companies = await this.companyUseCase.getCompaniesWithTransactionsLastMonth();
    const companyListDTO = toDTO(CompanyDTO, companies);
    return res.json(companyListDTO);
  }

  async getCompaniesJoinedLastMonth(req: Request, res: Response) {
    const companies = await this.companyUseCase.getCompaniesJoinedLastMonth();
    const companyListDTO = toDTO(CompanyDTO, companies);
    return res.json(companyListDTO);
  }

  async createCompany(req: Request, res: Response) {
    const { cuit, businessName } = req.body;
    if (!cuit || !businessName) {
      throw new AppError("CUIT y Razón Social son requeridos", 400);
    }
    const newCompany = await this.companyUseCase.createCompany(cuit, businessName);
    const companyDTO = toDTO(CompanyDTO, newCompany);
    return res.status(201).json(companyDTO);
  }

}
