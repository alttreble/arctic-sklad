import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Cursor: any;
};

export type AddItemInput = {
  description?: InputMaybe<Scalars['String']>;
  genericName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  uomId: Scalars['Int'];
};

export type CreateEntryOnItemInput = {
  expirationDate?: InputMaybe<Scalars['String']>;
  itemId: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type DefineUomInput = {
  name: Scalars['String'];
  namePlural: Scalars['String'];
};

export type DeleteItemInput = {
  id: Scalars['Int'];
};

export type Item = {
  __typename?: 'Item';
  createdAt: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  entries: Array<Maybe<ItemEntry>>;
  genericName?: Maybe<Scalars['String']>;
  hasExpiredEntry: Scalars['Boolean'];
  id: Scalars['Int'];
  name: Scalars['String'];
  notificationListeners?: Maybe<Array<Maybe<NotificationListener>>>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
  totalQuantity: Scalars['Int'];
  uom: Uom;
  updatedAt: Scalars['String'];
};

export type ItemConnection = {
  __typename?: 'ItemConnection';
  edges?: Maybe<Array<Maybe<ItemEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ItemEdge = {
  __typename?: 'ItemEdge';
  cursor: Scalars['Cursor'];
  node?: Maybe<Item>;
};

export type ItemEntry = {
  __typename?: 'ItemEntry';
  createdAt: Scalars['String'];
  expirationDate?: Maybe<Scalars['String']>;
  hasExpired?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  item: Item;
  quantity: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type ItemFiltersInput = {
  expirationDate?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ItemOrderByInput = {
  direction?: InputMaybe<OrderDirection>;
  field?: ItemOrderField;
};

export enum ItemOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type Mutation = {
  __typename?: 'Mutation';
  addItem: Item;
  createEntryOnItem: ItemEntry;
  defineUOM: Uom;
  deleteItem: Item;
  registerNotificationListener: NotificationListener;
  unregisterNotificationListener?: Maybe<NotificationListener>;
  updateItem: Item;
  updateItemEntry: ItemEntry;
  updateNotificationListener: NotificationListener;
};


export type MutationAddItemArgs = {
  input: AddItemInput;
};


export type MutationCreateEntryOnItemArgs = {
  input: CreateEntryOnItemInput;
};


export type MutationDefineUomArgs = {
  input: DefineUomInput;
};


export type MutationDeleteItemArgs = {
  input: DeleteItemInput;
};


export type MutationRegisterNotificationListenerArgs = {
  input: RegisterNotificationListenerInput;
};


export type MutationUnregisterNotificationListenerArgs = {
  input: UnregisterNotificationListenerInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationUpdateItemEntryArgs = {
  input: UpdateItemEntryInput;
};


export type MutationUpdateNotificationListenerArgs = {
  input: UpdateNotificationListenerInput;
};

export type Notification = {
  __typename?: 'Notification';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  severity?: Maybe<NotificationSeverity>;
  title: Scalars['String'];
  type: Scalars['String'];
};

export type NotificationCondition = {
  __typename?: 'NotificationCondition';
  attribute: Scalars['String'];
  operator: NotificationConditionOperator;
  value: Scalars['String'];
};

export type NotificationConditionInput = {
  attribute: Scalars['String'];
  operator: NotificationConditionOperator;
  value: Scalars['String'];
};

export enum NotificationConditionOperator {
  /** Less than */
  Lt = 'LT',
  /** Less than or equal */
  Lte = 'LTE',
  /** Attribute is of type date and is defined number of months before the current time. */
  TimeBefore = 'TIME_BEFORE'
}

export type NotificationListener = {
  __typename?: 'NotificationListener';
  /** A list of condition that need to be met in order to create a notification */
  conditions: Array<NotificationCondition>;
  description?: Maybe<Scalars['String']>;
  item: Item;
  /** The schedule at which the notification check will be run represented in cron notation. Defaults to once a day */
  schedule: Scalars['String'];
  /** The severity of the generated notification */
  severity: NotificationSeverity;
  title: Scalars['String'];
  type: Scalars['String'];
};

export type NotificationListenersInput = {
  itemId: Scalars['Int'];
};

export enum NotificationSeverity {
  Error = 'ERROR',
  Info = 'INFO',
  Warning = 'WARNING'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Cursor']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Query = {
  __typename?: 'Query';
  item?: Maybe<Item>;
  items: ItemConnection;
  notificationListeners: Array<Maybe<NotificationListener>>;
  uoms: UomConnection;
};


export type QueryItemArgs = {
  id: Scalars['Int'];
};


export type QueryItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ItemFiltersInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ItemOrderByInput>;
};


export type QueryNotificationListenersArgs = {
  input: NotificationListenersInput;
};


export type QueryUomsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<UomFiltersInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type RegisterNotificationListenerInput = {
  /** A list of condition that need to be met in order to create a notification */
  conditions: Array<InputMaybe<NotificationConditionInput>>;
  description?: InputMaybe<Scalars['String']>;
  itemId: Scalars['Int'];
  /** The schedule at which the notification check will be run represented in cron notation. Defaults to once a day */
  schedule?: Scalars['String'];
  /** The severity of the generated notification */
  severity?: NotificationSeverity;
  title: Scalars['String'];
  type: Scalars['String'];
};

export type Uom = {
  __typename?: 'UOM';
  id: Scalars['Int'];
  items?: Maybe<Array<Maybe<Item>>>;
  name: Scalars['String'];
  namePlural: Scalars['String'];
};

export type UomConnection = {
  __typename?: 'UOMConnection';
  edges?: Maybe<Array<Maybe<UomEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UomEdge = {
  __typename?: 'UOMEdge';
  cursor: Scalars['Cursor'];
  node?: Maybe<Uom>;
};

export type UnregisterNotificationListenerInput = {
  itemId: Scalars['Int'];
  type: Scalars['String'];
};

export type UomFiltersInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateItemEntryInput = {
  expirationDate?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type UpdateItemInput = {
  description?: InputMaybe<Scalars['String']>;
  genericName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  uomId?: InputMaybe<Scalars['Int']>;
};

export type UpdateNotificationListenerInput = {
  /** A list of condition that need to be met in order to create a notification */
  conditions?: InputMaybe<Array<InputMaybe<NotificationConditionInput>>>;
  description?: InputMaybe<Scalars['String']>;
  itemId: Scalars['Int'];
  /** The schedule at which the notification check will be run represented in cron notation. Defaults to once a day */
  schedule?: InputMaybe<Scalars['String']>;
  /** The severity of the generated notification */
  severity?: InputMaybe<NotificationSeverity>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type AddItemMutationVariables = Exact<{
  input: AddItemInput;
}>;


export type AddItemMutation = { __typename?: 'Mutation', addItem: { __typename?: 'Item', id: number } };

export type CreateEntryOnItemMutationVariables = Exact<{
  input: CreateEntryOnItemInput;
}>;


export type CreateEntryOnItemMutation = { __typename?: 'Mutation', createEntryOnItem: { __typename?: 'ItemEntry', id: number } };

export type DeleteItemMutationVariables = Exact<{
  input: DeleteItemInput;
}>;


export type DeleteItemMutation = { __typename?: 'Mutation', deleteItem: { __typename?: 'Item', id: number } };

export type ItemQueryVariables = Exact<{
  itemId: Scalars['Int'];
}>;


export type ItemQuery = { __typename?: 'Query', item?: { __typename?: 'Item', id: number, createdAt: string, updatedAt: string, name: string, genericName?: string | null, totalQuantity: number, hasExpiredEntry: boolean, entries: Array<{ __typename?: 'ItemEntry', createdAt: string, updatedAt: string, expirationDate?: string | null, hasExpired?: boolean | null, quantity: number, id: number } | null>, uom: { __typename?: 'UOM', name: string, id: number } } | null };

export type ItemsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ItemFiltersInput>;
}>;


export type ItemsQuery = { __typename?: 'Query', items: { __typename?: 'ItemConnection', edges?: Array<{ __typename?: 'ItemEdge', node?: { __typename?: 'Item', id: number, name: string, genericName?: string | null, totalQuantity: number, hasExpiredEntry: boolean, uom: { __typename?: 'UOM', name: string }, entries: Array<{ __typename?: 'ItemEntry', id: number, createdAt: string, updatedAt: string, expirationDate?: string | null, hasExpired?: boolean | null, quantity: number } | null> } | null } | null> | null } };

export type UomsQueryVariables = Exact<{ [key: string]: never; }>;


export type UomsQuery = { __typename?: 'Query', uoms: { __typename?: 'UOMConnection', edges?: Array<{ __typename?: 'UOMEdge', node?: { __typename?: 'UOM', id: number, name: string, items?: Array<{ __typename?: 'Item', name: string } | null> | null } | null } | null> | null } };

export type UpdateItemEntryMutationVariables = Exact<{
  input: UpdateItemEntryInput;
}>;


export type UpdateItemEntryMutation = { __typename?: 'Mutation', updateItemEntry: { __typename?: 'ItemEntry', id: number } };

export type UpdateItemMutationVariables = Exact<{
  input: UpdateItemInput;
}>;


export type UpdateItemMutation = { __typename?: 'Mutation', updateItem: { __typename?: 'Item', id: number } };


export const AddItemDocument = gql`
    mutation addItem($input: AddItemInput!) {
  addItem(input: $input) {
    id
  }
}
    `;
export const CreateEntryOnItemDocument = gql`
    mutation createEntryOnItem($input: CreateEntryOnItemInput!) {
  createEntryOnItem(input: $input) {
    id
  }
}
    `;
export const DeleteItemDocument = gql`
    mutation deleteItem($input: DeleteItemInput!) {
  deleteItem(input: $input) {
    id
  }
}
    `;
export const ItemDocument = gql`
    query item($itemId: Int!) {
  item(id: $itemId) {
    id
    createdAt
    updatedAt
    name
    genericName
    totalQuantity
    hasExpiredEntry
    entries {
      createdAt
      updatedAt
      expirationDate
      hasExpired
      quantity
      id
    }
    uom {
      name
      id
    }
  }
}
    `;
export const ItemsDocument = gql`
    query items($first: Int, $after: Cursor, $filter: ItemFiltersInput) {
  items(first: $first, after: $after, filter: $filter) {
    edges {
      node {
        id
        name
        genericName
        totalQuantity
        uom {
          name
        }
        hasExpiredEntry
        entries {
          id
          createdAt
          updatedAt
          expirationDate
          hasExpired
          quantity
        }
      }
    }
  }
}
    `;
export const UomsDocument = gql`
    query uoms {
  uoms {
    edges {
      node {
        id
        name
        items {
          name
        }
      }
    }
  }
}
    `;
export const UpdateItemEntryDocument = gql`
    mutation updateItemEntry($input: UpdateItemEntryInput!) {
  updateItemEntry(input: $input) {
    id
  }
}
    `;
export const UpdateItemDocument = gql`
    mutation updateItem($input: UpdateItemInput!) {
  updateItem(input: $input) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const AddItemDocumentString = print(AddItemDocument);
const CreateEntryOnItemDocumentString = print(CreateEntryOnItemDocument);
const DeleteItemDocumentString = print(DeleteItemDocument);
const ItemDocumentString = print(ItemDocument);
const ItemsDocumentString = print(ItemsDocument);
const UomsDocumentString = print(UomsDocument);
const UpdateItemEntryDocumentString = print(UpdateItemEntryDocument);
const UpdateItemDocumentString = print(UpdateItemDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    addItem(variables: AddItemMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: AddItemMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AddItemMutation>(AddItemDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addItem', 'mutation');
    },
    createEntryOnItem(variables: CreateEntryOnItemMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: CreateEntryOnItemMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateEntryOnItemMutation>(CreateEntryOnItemDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createEntryOnItem', 'mutation');
    },
    deleteItem(variables: DeleteItemMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: DeleteItemMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeleteItemMutation>(DeleteItemDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteItem', 'mutation');
    },
    item(variables: ItemQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: ItemQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ItemQuery>(ItemDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'item', 'query');
    },
    items(variables?: ItemsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: ItemsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ItemsQuery>(ItemsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'items', 'query');
    },
    uoms(variables?: UomsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: UomsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UomsQuery>(UomsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'uoms', 'query');
    },
    updateItemEntry(variables: UpdateItemEntryMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: UpdateItemEntryMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateItemEntryMutation>(UpdateItemEntryDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateItemEntry', 'mutation');
    },
    updateItem(variables: UpdateItemMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: UpdateItemMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateItemMutation>(UpdateItemDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateItem', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;