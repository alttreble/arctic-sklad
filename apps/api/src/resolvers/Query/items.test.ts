import {ItemConnection} from "@app/types";

const mockItemConnection: ItemConnection = {
  totalCount: 1,
  pageInfo: {
    hasNextPage: false,
    hasPreviousPage: false
  },
  edges: [
    {
      cursor: null,
      node: {
        id: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "Aspirin",
        description: null,
        expirationDate: null
      }
    }
  ]
}
