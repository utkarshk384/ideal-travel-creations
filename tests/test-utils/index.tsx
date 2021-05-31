import { render } from "@testing-library/react";
import Providers from "./Providers";
const customRender = (ui: any, options = {}, customResolvers?: any) =>
  render(ui, {
    wrapper: () => <Providers customResolvers={customResolvers} />,
    ...options,
  });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
