export const FourDots: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        background: "0 0",
      }}
      width={200}
      height={200}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      shapeRendering="crispedges"
      {...props}
    >
      <circle cx={84} cy={50} r={10} fill="#e76f6f">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="0.3846153846153846s"
          calcMode="spline"
          keyTimes="0;1"
          values="11;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
        />
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="1.5384615384615383s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          values="#e76f6f;#247BA0;#d5f1a4;#c39462;#e76f6f"
          begin="0s"
        />
      </circle>
      <circle cx={16} cy={50} r={10} fill="#e76f6f">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.5384615384615383s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;11;11;11"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.5384615384615383s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        />
      </circle>
      <circle cx={50} cy={50} r={10} fill="#c39462">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.5384615384615383s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;11;11;11"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.3846153846153846s"
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.5384615384615383s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.3846153846153846s"
        />
      </circle>
      <circle cx={84} cy={50} r={10} fill="#d5f1a4">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.5384615384615383s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;11;11;11"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.7692307692307692s"
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.5384615384615383s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.7692307692307692s"
        />
      </circle>
      <circle cx={16} cy={50} r={10} fill="#247BA0">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.5384615384615383s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;11;11;11"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.1538461538461537s"
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.5384615384615383s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.1538461538461537s"
        />
      </circle>
    </svg>
  );
};
