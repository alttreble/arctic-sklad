import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Item, User } from '@prisma/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  expirationDate?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
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

export type ItemFiltersInput = {
  expirationDate?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ItemOrderByInput = {
  direction?: InputMaybe<OrderDirection>;
  field?: TodoOrderField;
};

export type Mutation = {
  __typename?: 'Mutation';
  addItem?: Maybe<Item>;
};


export type MutationAddItemArgs = {
  input?: InputMaybe<AddItemInput>;
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
};


export type QueryItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ItemFiltersInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ItemOrderByInput>;
};

export enum TodoOrderField {
  CreatedAt = 'createdAt',
  ExpirationDate = 'expirationDate',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddItemInput: AddItemInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Item: ResolverTypeWrapper<Item>;
  ItemConnection: ResolverTypeWrapper<Omit<ItemConnection, 'edges'> & { edges?: Maybe<Array<Maybe<ResolversTypes['ItemEdge']>>> }>;
  ItemEdge: ResolverTypeWrapper<Omit<ItemEdge, 'node'> & { node?: Maybe<ResolversTypes['Item']> }>;
  ItemFiltersInput: ItemFiltersInput;
  ItemOrderByInput: ItemOrderByInput;
  Mutation: ResolverTypeWrapper<{}>;
  OrderDirection: OrderDirection;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TodoOrderField: TodoOrderField;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddItemInput: AddItemInput;
  Boolean: Scalars['Boolean'];
  Cursor: Scalars['Cursor'];
  Int: Scalars['Int'];
  Item: Item;
  ItemConnection: Omit<ItemConnection, 'edges'> & { edges?: Maybe<Array<Maybe<ResolversParentTypes['ItemEdge']>>> };
  ItemEdge: Omit<ItemEdge, 'node'> & { node?: Maybe<ResolversParentTypes['Item']> };
  ItemFiltersInput: ItemFiltersInput;
  ItemOrderByInput: ItemOrderByInput;
  Mutation: {};
  PageInfo: PageInfo;
  Query: {};
  String: Scalars['String'];
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemConnection'] = ResolversParentTypes['ItemConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemEdge'] = ResolversParentTypes['ItemEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, Partial<MutationAddItemArgs>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  items?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, Partial<QueryItemsArgs>>;
};

export type Resolvers<ContextType = any> = {
  Cursor?: GraphQLScalarType;
  Item?: ItemResolvers<ContextType>;
  ItemConnection?: ItemConnectionResolvers<ContextType>;
  ItemEdge?: ItemEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

