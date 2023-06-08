import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const tables = Object.getOwnPropertyNames(prisma).filter((property) =>
  /^[A-Z]/.test(property),
);

export const clearDatabase = async () => {
  await prisma.$transaction([
    ...tables.map((table) =>
      prisma.$executeRawUnsafe(`TRUNCATE "${table}" CASCADE;`),
    ),
  ]);
};
