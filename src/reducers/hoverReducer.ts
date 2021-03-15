export type hovState = {
  parent?: boolean;
  menu?: boolean;
};
export interface IHoverState {
  packages: hovState;
  aboutBhutan: hovState;
}

export type hovActionTypes = {
  type:
    | "parent-package-active"
    | "parent-package"
    | "menu-package-active"
    | "menu-package"
    | "both-packages"
    | "parent-aboutBhutan-active"
    | "parent-aboutBhutan"
    | "menu-aboutBhutan-active"
    | "menu-aboutBhutan"
    | "both-aboutBhutan";
  payload?: any;
};

const hoverReducer = (
  state: IHoverState,
  action: hovActionTypes
): IHoverState => {
  const { type } = action;

  switch (type) {
    case "parent-package":
      return {
        aboutBhutan: {
          parent: false,
          menu: state.aboutBhutan.menu,
        },
        packages: { parent: false, menu: state.packages.menu },
      };

    case "parent-package-active":
      return {
        aboutBhutan: {
          parent: false,
          menu: state.aboutBhutan.menu,
        },
        packages: { parent: true, menu: state.packages.menu },
      };

    case "menu-package":
      return {
        ...state,
        packages: { menu: false, parent: state.packages.parent },
      };

    case "menu-package-active":
      return {
        ...state,
        packages: { menu: true, parent: state.packages.parent },
      };

    case "both-packages":
      return {
        ...state,
        packages: {
          parent: false,
          menu: false,
        },
      };

    case "parent-aboutBhutan":
      return {
        aboutBhutan: {
          parent: false,
          menu: state.aboutBhutan.menu,
        },
        packages: { parent: false, menu: state.packages.menu },
      };

    case "parent-aboutBhutan-active":
      return {
        aboutBhutan: {
          parent: true,
          menu: state.aboutBhutan.menu,
        },
        packages: { parent: false, menu: state.packages.menu },
      };

    case "menu-aboutBhutan":
      return {
        ...state,
        aboutBhutan: {
          menu: false,
          parent: state.aboutBhutan.parent,
        },
      };

    case "menu-aboutBhutan-active":
      return {
        ...state,
        aboutBhutan: {
          menu: true,
          parent: state.aboutBhutan.parent,
        },
      };

    case "both-aboutBhutan":
      return {
        ...state,
        aboutBhutan: {
          parent: false,
          menu: false,
        },
      };

    default:
      return state;
  }
};

export default hoverReducer;
