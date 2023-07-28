import React from 'react'

type Props = {
  index: number
  imgHref: string
  name: string
  floor: number
  vol: number
  diffPercent?: number
}

const TrendinCollectionItem = ({ index, imgHref, name, floor, vol, diffPercent }: Props) => {
  return (
    <div className="flex items-center w-[34%] justify-between border-b border-gray-300 p-4 my-4">
      <div className="flex gap-4 items-center">
        <p className="font-semibold">{index}</p>
        <img src={imgHref} alt="avatar collection" className="w-12 h-12 rounded-full" />
        <div>
          <p className="font-semibold">{name}</p>
          <div className="flex gap-1 text-sm text-gray-500 items-center">
            <span>Floor</span>
            <img src="/icons/solana-icon.png" alt="" className="w-4 h-4" />
            <span>{floor}</span>
          </div>
        </div>
      </div>
      <div>
        <p>{diffPercent ?? '_'}</p>
        <div className="flex gap-1 text-sm text-gray-500 items-center">
          <span>Vol.</span>
          <img src="/icons/solana-icon.png" alt="" className="w-4 h-4" />
          <span>{vol}</span>
        </div>
      </div>
    </div>
  )
}

export default TrendinCollectionItem