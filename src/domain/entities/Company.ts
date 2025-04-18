import { Transaction } from "./Transaction";

export class Company {
  constructor(
    public readonly id: number,
    public cuit: string,
    public businessName: string,
    public transactions: Transaction[] = [],
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public deletedAt?: Date | null
  ) {}

  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
    this.updatedAt = new Date();
  }

  isDeleted(): boolean {
    return !!this.deletedAt;
  }

}