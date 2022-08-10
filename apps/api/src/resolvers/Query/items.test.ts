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
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
        name: "Aspirin",
        description: null,
        uom: {
          id: 1234,
          name: "Tablet",
          items: []
        },
        entries: []
      }
    }
  ]
}
