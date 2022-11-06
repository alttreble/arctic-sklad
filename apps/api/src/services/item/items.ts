import {Context} from "@app/context";
import {PaginationArgs} from "@app/utils/paginateResponse";
import {Prisma} from "@prisma/client";

export type ItemFilters = {
  name?: string | null
  expirationDate?: string | null
  notifications?: string[]
}

export type IncludeOptions = {
  [key in "uom" | "entries" | "notifications" | "notificationListeners"]: boolean;
};

export default async function items(
  context: Context,
  filters: ItemFilters | undefined | null,
  {orderBy, ...paginationArgs}: PaginationArgs,
  includeOptions: IncludeOptions
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
        },
        
      }),
      ...(filters.notifications && {
        notifications: {
          some: {
            type: {
              in: filters.notifications
            }
          }
        }
      })
    }
  }

  query.include = {
    notificationListeners: true,
		notifications: true,
    uom: includeOptions.uom,
    entries: includeOptions.entries && {
      orderBy: {
        expirationDate: "asc"
      }
    }
  }

  const items = await prisma.item.findMany(query)
  console.log(items);

  return items || []
}
