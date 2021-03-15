export const routerIndex = (path: string) => {
  if (path === "/") return 0;
  else if (path.includes("/packages")) return 1;
  else if (path.includes("/bhutan")) return 2;
  else if (path.includes("/our-team")) return 3;
  else if (path.includes("/contact")) return 4;
};
