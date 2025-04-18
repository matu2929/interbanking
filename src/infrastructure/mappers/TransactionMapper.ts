import { Transaction } from "../../domain/entities/Transaction";

export class TransactionMapper {
  static toEntity(transaction: any): Transaction {
    return new Transaction(
      transaction.id,
      transaction.amount,
      transaction.debitAccount,
      transaction.creditAccount,
      transaction.companyId,
      transaction.createdAt,
      transaction.updatedAt,
      transaction.deletedAt ?? undefined
    );
  }
}