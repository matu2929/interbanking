import { Expose, Type } from 'class-transformer';
import { TransactionDTO } from './TransactionDto';

export class CompanyDTO {
  @Expose()
  id!: number;

  @Expose()
  cuit!: string;

  @Expose()
  businessName!: string;

  @Expose()
  createdAt!: Date;

  @Expose()
  @Type(() => TransactionDTO)
  transactions: TransactionDTO[] = [];

  @Expose()
  isDeleted: boolean = false;
}