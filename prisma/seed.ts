import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Borramos todo por si hay datos previos (opcional)
  await prisma.transaction.deleteMany();
  await prisma.company.deleteMany();

  // Creamos las empresas
  const empresa1 = await prisma.company.create({
    data: {
      cuit: '123123',
      businessName: 'Empresa 1',
    },
  });

  const empresa2 = await prisma.company.create({
    data: {
      cuit: '123123',
      businessName: 'Empresa 2',
    },
  });

  // Creamos las transacciones de empresa1
  await prisma.transaction.createMany({
    data: [
      {
        amount: 1000,
        debitAccount: 'A-123',
        creditAccount: 'A-123',
        companyId: empresa1.id,
      },
      {
        amount: 1000,
        debitAccount: 'A-123',
        creditAccount: 'A-123',
        companyId: empresa1.id,
      },
      {
        amount: 2000,
        debitAccount: 'A-123',
        creditAccount: 'A-123',
        companyId: empresa1.id,
      },
    ],
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error('Error in seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
