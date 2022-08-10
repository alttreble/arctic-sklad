import graphqlFields from "graphql-fields";
import has from "lodash/has";
import { GraphQLResolveInfo } from "graphql";

/**
 * @summary Determine whether a GraphQL request includes a particular field.
 * @param {String} field The field to check. Can be an object path.
 * @param {Object} info The fourth argument that is passed to every GraphQL resolver
 * @returns {Boolean} True if they want `field` returned
 */
export default function wasFieldRequested(field: string, info: GraphQLResolveInfo) {
  return has(graphqlFields(info as any), field);
}
