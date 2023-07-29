import React from 'react'

type Props = {
  imgHref: string
  name: string
  price: number
}

const CardSlide = ({ imgHref, name, price }: Props) => {
  return (
    <div className="w-[260px] rounded-xl border border-gray-400">
      <img src={imgHref} alt="" className="w-full h-[260px] rounded-xl object-cover" />
      <div className="p-2">
        <p>{name}</p>
        <div className="flex items-center gap-2 px-2">
          <img src="/icons/solana-icon.png" alt="" className="w-4 h-4" />
          <p className="font-semibold text-lg">{price}</p>
        </div></div>
    </div>
  )
}

export default CardSlide