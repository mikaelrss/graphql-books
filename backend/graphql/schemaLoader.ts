import { join } from 'path';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

// Load schema from the file
export const schema = loadSchemaSync(join(__dirname, './**/*.graphql'), {
  loaders: [
    new GraphQLFileLoader(),
  ]
});