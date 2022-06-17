import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
}

const context = (): Context => {
  return {
    prisma
  }
}

export default context
