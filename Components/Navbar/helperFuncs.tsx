//This function is responsible to show the state changes in the UI.

export const routerIndex = (path: string) => {
  if (path === "/") return 0;
  else if (path.includes("/packages")) return 1;
  else if (path.includes("/bhutan")) return 2;
  else if (path.includes("/about") || path.includes("/testimonials")) return 3;
  else if (path.includes("/contact")) return 4;
};
