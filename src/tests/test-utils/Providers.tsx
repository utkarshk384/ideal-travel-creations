import {
  createApolloErrorProvider,
  createApolloLoadingProvider,
  createApolloMockedProvider,
} from "apollo-mocked-provider";
import OverlayProvider from "@/src/Contexts/overlayContext";

import { typeDefs } from "./typeDefs";

export const ApolloMockedProvider = createApolloMockedProvider(typeDefs);
export const ApolloErrorProvider = createApolloErrorProvider();
export const ApolloLoadingProvider = createApolloLoadingProvider();

const MockProvider: React.FC<{ customResolvers?: any }> = (
  props
): JSX.Element => (
  <ApolloMockedProvider customResolvers={{ ...props.customResolvers }}>
    <OverlayProvider>{props.children}</OverlayProvider>
  </ApolloMockedProvider>
);

export default MockProvider;
