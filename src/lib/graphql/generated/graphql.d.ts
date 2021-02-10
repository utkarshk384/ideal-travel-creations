
declare module '*/getImgQuery.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getPackages: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/packageQuery.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const packages: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/packageQuery_WithFilter.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const packagesFilter: DocumentNode;

  export default defaultDocument;
}
    