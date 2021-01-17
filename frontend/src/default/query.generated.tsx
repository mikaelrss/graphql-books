import * as Types from "../../generated/types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type HelloQueryVariables = Types.Exact<{ [key: string]: never }>;

export type HelloQuery = { __typename?: "Query" } & Pick<Types.Query, "hello">;

export const HelloDocument = gql`
  query hello {
    hello
  }
`;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(
  baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>
) {
  return Apollo.useQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    baseOptions
  );
}
export function useHelloLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>
) {
  return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    baseOptions
  );
}
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<
  HelloQuery,
  HelloQueryVariables
>;
