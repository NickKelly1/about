import { IProjectable } from "./project.interface";

export const ciDtoolsAPI: IProjectable = {
  title: 'Ci D-Tools API',
  date: '2019-2020',
  description: `
The Ci D-Tools API is a back-end web application wrapping the database for the third party software, D-Tools. The API safely exposes data through GraphQL and streaming endpoints.

The API and its consumers leverage GraphQL’s API layer and end-to-end type safety with with TypeScript and GraphQL Code Generator to ensure data integrity across versions of the third party software when the underlying schema changes.

JavaScript, React, SocketIO, ExpressJS, JSDoc
`.trim()
  //
}
