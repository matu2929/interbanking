export class Transaction {
  constructor(
    public readonly id: number,
    public amount: number,
    public debitAccount: string,
    public creditAccount: string,
    public companyId: number,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public deletedAt?: Date
  ) {}

  isDeleted(): boolean {
    return !!this.deletedAt;
  }
}