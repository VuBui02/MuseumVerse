import React from "react";

type Props = {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
  settings: any;
};

const CustomSlide = ({ children, settings }: Props) => {
  return { children };
};

export default CustomSlide;
