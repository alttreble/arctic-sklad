enum OrderDirection {
  Asc = "asc",
  Desc = "desc"
}

type OrderByArgs = {
  direction?: OrderDirection | null
  field: string
}

export type ConnectionArgs = {
  after?: string | null
  first?: number | null
  before?: string | null
  last?: number | null
  orderBy?: OrderByArgs | null
}

export type PageInfo = {
  hasNextPage: boolean
  endCursor: string | null
  hasPreviousPage: boolean
  startCursor: string | null
};

export type PaginationArgs = {
  cursor?: {
    [key: string]: string;
  }
  skip?: number
  take: number
  orderBy: OrderByArgs
};

export type Edge<T extends { id: string | number}> = {
  cursor: string | number
  node: T
};

export type Connection<T extends { id: string | number}> = {
  edges: Edge<T>[]
  pageInfo: PageInfo
};

export type ParsePaginationArgsOptions = {
  connectionName?: string
};

export type ParsePaginationArgsResponse = {
  paginationArgs: PaginationArgs
  toConnection: <T extends { id: string | number }>(items: T[]) => Connection<T>
}

export class InvalidPaginationError extends Error {
  constructor(
    public argumentName: "first" | "last",
    public connectionName?: string,
  ) {
    super(
      `\`${argumentName}\` on${
        connectionName ? ` the \`${connectionName}\` ` : " "
      }connection cannot be less than zero.`,
    );

    Object.setPrototypeOf(this, InvalidPaginationError.prototype);
    this.name = this.constructor.name;
  }
}

export class MissingPaginationBoundariesError extends Error {
  constructor(public connectionName?: string) {
    super(
      `You must provide a \`first\` or \`last\` value to properly paginate${
        connectionName ? ` the \`${connectionName}\` ` : " "
      }connection.`,
    );

    Object.setPrototypeOf(this, MissingPaginationBoundariesError.prototype);
    this.name = this.constructor.name;
  }
}

const isNotNullish = <T>(value: T | null | undefined): value is T =>
  typeof value !== "undefined" && value !== null;

const getLastItem = <T>(value: T[]): T | undefined => value[value.length - 1];

export default function parsePaginationArgs(
  {
    first = 20,
    after,
    last,
    before,
    orderBy = {field: "id", direction: OrderDirection.Asc},
  }: ConnectionArgs,
  {
    connectionName
  }: ParsePaginationArgsOptions = {},
): ParsePaginationArgsResponse {
  if (isNotNullish(first)) {
    if (first < 0) {
      throw new InvalidPaginationError("first", connectionName);
    }

    const cursor = isNotNullish(after) ? {[orderBy!.field]: after} : undefined;
    const take = first + 1; // include one extra item to set hasNextPage value
    const skip = isNotNullish(cursor) ? 1 : undefined; // prisma will include the cursor if skip: 1 is not set

    return {
      paginationArgs: {cursor, skip, take, orderBy: orderBy!},
      toConnection: (items) => {
        const copy = [...items]; // avoid mutations on original array
        const hasNextPage = copy.length === take;

        if (hasNextPage) {
          copy.pop();
        }

        return {
          // @ts-ignore
          edges: copy.map((item) => ({cursor: item[orderBy!.field], node: item})),
          pageInfo: {
            hasNextPage,
            // @ts-ignore
            endCursor: getLastItem(copy) ? getLastItem(copy)[orderBy!.field] : null,
            hasPreviousPage: false,
            // @ts-ignore
            startCursor: copy[0] ? copy[0][orderBy!.field] : null,
          },
        };
      },
    };
  }

  if (isNotNullish(last)) {
    if (last < 0) {
      throw new InvalidPaginationError("last", connectionName);
    }

    const cursor = isNotNullish(before) ? {[orderBy!.field]: before} : undefined;
    const take = last + 1; // include one extra item to set hasPreviousPage value
    const skip = isNotNullish(cursor) ? 1 : undefined; // prisma will include the cursor if skip: 1 is not set

    return {
      paginationArgs: {cursor, skip, take: -take, orderBy: orderBy!},
      toConnection: (items) => {
        const copy = [...items]; // avoid mutations on original array
        const hasPreviousPage = copy.length === take;

        if (hasPreviousPage) {
          copy.shift();
        }

        return {
          // @ts-ignore
          edges: copy.map((item) => ({cursor: item[orderBy!.field], node: item})),
          pageInfo: {
            hasNextPage: false,
            // @ts-ignore
            endCursor: getLastItem(copy) ? getLastItem(copy)[orderBy!.field] : null,
            hasPreviousPage,
            // @ts-ignore
            startCursor: copy[0] ? copy[0][orderBy!.field] : null,
          },
        };
      },
    };
  }

  throw new MissingPaginationBoundariesError(connectionName);
}
