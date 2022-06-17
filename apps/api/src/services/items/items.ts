import {Context} from "@app/context";
import {PaginationArgs} from "@app/utils/paginateResponse";
import {Prisma} from "@prisma/client";

export type ItemFilters = {
  name?: string | null
  expirationDate?: string | null
}

export default async function items(
  context: Context,
  filters: ItemFilters | undefined | null,
  {orderBy, ...paginationArgs}: PaginationArgs
) {
  const {prisma} = context

  const query: Prisma.ItemFindManyArgs = {
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
      }),
      ...(filters.expirationDate && {name: filters.expirationDate}),
    }
  }

  const items = await prisma.item.findMany(query)
  return items || []
}
