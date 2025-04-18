import { Expose } from 'class-transformer';

export class TransactionDTO {
  @Expose()
  id!: number;

  @Expose()
  amount!: number;

  @Expose()
  debitAccount!: string;

  @Expose()
  creditAccount!: string;

  @Expose()
  companyId!: number;

  @Expose()
  createdAt!: Date;

  @Expose()
  isDeleted: boolean = false;
}