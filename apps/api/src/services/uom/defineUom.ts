import { Context } from "@app/context";
import { DefineUomInput } from "@app/types";

export default function defineUom(context: Context, input: DefineUomInput) {
  const { prisma } = context;

  return prisma.uOM.create({
    data: {
      ...input
    }
  });
}
