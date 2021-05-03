import * as React from "react";

export interface ClampProps {
  lines?: number;
  maxLines?: number;
  withToolTip?: boolean;
  withToggle?: boolean;
  texts?: object;
  onShowMore?: (isExpanded: boolean) => boolean;
}

declare class Clamp extends React.Component<ClampProps> {}
export default Clamp;
