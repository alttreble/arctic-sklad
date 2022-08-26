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
  addItem?: Maybe<Item>;
  createEntryOnItem?: Maybe<ItemEntry>;
  defineUOM?: Maybe<Uom>;
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
  items: ItemConnection;
  uoms: UomConnection;
};


export type QueryItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ItemFiltersInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ItemOrderByInput>;
};


export type QueryUomsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<UomFiltersInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Uom = {
  __typename?: 'UOM';
  id: Scalars['Int'];
  items?: Maybe<Array<Maybe<Item>>>;
  name: Scalars['String'];
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

export type UomFiltersInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ItemsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['Cursor']>;
}>;


export type ItemsQuery = { __typename?: 'Query', items: { __typename?: 'ItemConnection', edges?: Array<{ __typename?: 'ItemEdge', node?: { __typename?: 'Item', id: number, name: string, genericName?: string | null, totalQuantity: number, hasExpiredEntry: boolean, uom: { __typename?: 'UOM', name: string }, entries: Array<{ __typename?: 'ItemEntry', id: number, createdAt: string, updatedAt: string, expirationDate?: string | null, hasExpired?: boolean | null, quantity: number } | null> } | null } | null> | null } };

export type UomsQueryVariables = Exact<{ [key: string]: never; }>;


export type UomsQuery = { __typename?: 'Query', uoms: { __typename?: 'UOMConnection', edges?: Array<{ __typename?: 'UOMEdge', node?: { __typename?: 'UOM', id: number, name: string, items?: Array<{ __typename?: 'Item', name: string } | null> | null } | null } | null> | null } };


export const ItemsDocument = gql`
    query Items($first: Int, $after: Cursor) {
  items(first: $first, after: $after) {
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
    query Uoms {
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const ItemsDocumentString = print(ItemsDocument);
const UomsDocumentString = print(UomsDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Items(variables?: ItemsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: ItemsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ItemsQuery>(ItemsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Items', 'query');
    },
    Uoms(variables?: UomsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: UomsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UomsQuery>(UomsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Uoms', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;