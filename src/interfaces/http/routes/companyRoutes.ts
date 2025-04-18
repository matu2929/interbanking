import express, { Request, Response, NextFunction } from "express";
import { CompanyRepositoryPrisma } from "../../../infrastructure/database/prisma/CompanyRepositoryPrisma";
import { CompanyUseCase } from "../../../application/use-cases/CompanyUseCase";
import { CompanyController } from "../controllers/CompanyController";

const router = express.Router();

const repo = new CompanyRepositoryPrisma();
const companyUseCase = new CompanyUseCase(repo);
const companyController = new CompanyController(companyUseCase);

router.get("/with-transactions-last-month", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await companyController.getCompaniesWithTransactionsLastMonth(req, res);
  } catch (error) {
    // Pasamos cualquier error al middleware de manejo de errores
    next(error);
  }
});

router.get("/joined-last-month", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await companyController.getCompaniesJoinedLastMonth(req, res);
  } catch (error) {
    // Pasamos cualquier error al middleware de manejo de errores
    next(error);
  }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await companyController.get(req, res);
  } catch (error) {
    // Pasamos cualquier error al middleware de manejo de errores
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await companyController.createCompany(req, res);
  } catch (error) {
    // Pasamos cualquier error al middleware de manejo de errores
    next(error);
  }
});

export default router;
