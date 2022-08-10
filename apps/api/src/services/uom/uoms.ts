import {Context} from "@app/context";
import {PaginationArgs} from "@app/utils/paginateResponse";
import {Prisma} from "@prisma/client";

export type UomFilters = {
  name?: string | null
}

export default async function uoms(
  context: Context,
  filters: UomFilters | undefined | null,
  {orderBy, ...paginationArgs}: PaginationArgs
) {
  const {prisma} = context

  const query: Prisma.UOMFindManyArgs = {
    orderBy: {
      [orderBy.field]: orderBy.direction
    },
    ...paginationArgs
  }

  if (filters) {
    query.where = {
      ...(filters.name && {
        name: {
          contains: filters.name,
          mode: 'insensitive'
        }
      })
    }
  }

  return prisma.uOM.findMany(query) || []
}
