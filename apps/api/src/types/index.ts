import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  updateItem?: Maybe<Item>;
  updateItemEntry?: Maybe<ItemEntry>;
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


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationUpdateItemEntryArgs = {
  input: UpdateItemEntryInput;
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
  item?: Maybe<Item>;
  items: ItemConnection;
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
  CreateEntryOnItemInput: CreateEntryOnItemInput;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>;
  DefineUOMInput: DefineUomInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Item: ResolverTypeWrapper<Item>;
  ItemConnection: ResolverTypeWrapper<ItemConnection>;
  ItemEdge: ResolverTypeWrapper<ItemEdge>;
  ItemEntry: ResolverTypeWrapper<ItemEntry>;
  ItemFiltersInput: ItemFiltersInput;
  ItemOrderByInput: ItemOrderByInput;
  ItemOrderField: ItemOrderField;
  Mutation: ResolverTypeWrapper<{}>;
  OrderDirection: OrderDirection;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UOM: ResolverTypeWrapper<Uom>;
  UOMConnection: ResolverTypeWrapper<UomConnection>;
  UOMEdge: ResolverTypeWrapper<UomEdge>;
  UomFiltersInput: UomFiltersInput;
  UpdateItemEntryInput: UpdateItemEntryInput;
  UpdateItemInput: UpdateItemInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddItemInput: AddItemInput;
  Boolean: Scalars['Boolean'];
  CreateEntryOnItemInput: CreateEntryOnItemInput;
  Cursor: Scalars['Cursor'];
  DefineUOMInput: DefineUomInput;
  Int: Scalars['Int'];
  Item: Item;
  ItemConnection: ItemConnection;
  ItemEdge: ItemEdge;
  ItemEntry: ItemEntry;
  ItemFiltersInput: ItemFiltersInput;
  ItemOrderByInput: ItemOrderByInput;
  Mutation: {};
  PageInfo: PageInfo;
  Query: {};
  String: Scalars['String'];
  UOM: Uom;
  UOMConnection: UomConnection;
  UOMEdge: UomEdge;
  UomFiltersInput: UomFiltersInput;
  UpdateItemEntryInput: UpdateItemEntryInput;
  UpdateItemInput: UpdateItemInput;
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entries?: Resolver<Array<Maybe<ResolversTypes['ItemEntry']>>, ParentType, ContextType>;
  genericName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasExpiredEntry?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalQuantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uom?: Resolver<ResolversTypes['UOM'], ParentType, ContextType>;
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

export type ItemEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemEntry'] = ResolversParentTypes['ItemEntry']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasExpired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationAddItemArgs, 'input'>>;
  createEntryOnItem?: Resolver<Maybe<ResolversTypes['ItemEntry']>, ParentType, ContextType, RequireFields<MutationCreateEntryOnItemArgs, 'input'>>;
  defineUOM?: Resolver<Maybe<ResolversTypes['UOM']>, ParentType, ContextType, RequireFields<MutationDefineUomArgs, 'input'>>;
  updateItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationUpdateItemArgs, 'input'>>;
  updateItemEntry?: Resolver<Maybe<ResolversTypes['ItemEntry']>, ParentType, ContextType, RequireFields<MutationUpdateItemEntryArgs, 'input'>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryItemArgs, 'id'>>;
  items?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, Partial<QueryItemsArgs>>;
  uoms?: Resolver<ResolversTypes['UOMConnection'], ParentType, ContextType, Partial<QueryUomsArgs>>;
};

export type UomResolvers<ContextType = any, ParentType extends ResolversParentTypes['UOM'] = ResolversParentTypes['UOM']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UomConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UOMConnection'] = ResolversParentTypes['UOMConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['UOMEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UomEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UOMEdge'] = ResolversParentTypes['UOMEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['UOM']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Cursor?: GraphQLScalarType;
  Item?: ItemResolvers<ContextType>;
  ItemConnection?: ItemConnectionResolvers<ContextType>;
  ItemEdge?: ItemEdgeResolvers<ContextType>;
  ItemEntry?: ItemEntryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UOM?: UomResolvers<ContextType>;
  UOMConnection?: UomConnectionResolvers<ContextType>;
  UOMEdge?: UomEdgeResolvers<ContextType>;
};

