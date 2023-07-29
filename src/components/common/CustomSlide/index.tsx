import React from 'react'
import Slider from "react-slick";

type Props = {
  children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined
  settings: any
}

const CustomSlide = ({ children, settings }: Props) => {
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}

export default CustomSlide