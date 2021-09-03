import { IPostable } from './post.interface';

export const gqlNodeTs: IPostable = {
  title: 'Writing a GraphQL TypeScript Server for NodeJS',
  date: '2021',
  body: `
An opinionated outline for writing extensible GraphQL architectures for NodeJS in TypeScript. Includes HATEOAS for GraphQL, authorisation, and paginated relations.

GraphQL is becoming an increasingly viable alternative to REST in modern web development by providing significant productivity and performance advantages... read more
`.trim(),
};
