// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { GraphQLBoolean, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString, execute } from 'graphql';

type Data = {
  name: string
}

// interface IWhoami {
//   name: string;
//   admin: boolean;
// }

// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: () => ({
//     whoami: {
//       type: GraphQLNonNull(new GraphQLObjectType<IWhoami>({
//         name: 'Whoami',
//         fields: () => ({
//           name: {
//             type: GraphQLNonNull(GraphQLString),
//             resolve: (): string => 'John',
//           },
//           admin: {
//             type: GraphQLNonNull(GraphQLBoolean),
//             resolve: (): boolean => false,
//           },
//         })
//       })),
//     }
//   }),
// })

// const RootMutations = new GraphQLObjectType({
//   name: 'RootMutationType',
//   fields: () => ({
//     //
//   }),
// });

// const schema = new GraphQLSchema({
//   query: RootQuery,
//   mutation: RootMutations,
// });

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  res.status(200).json({ name: 'John Doe', });
}
