import React, {useId} from 'react'
import CollectionCard from '../../../common/CollectionCard'
import Slider from '../../../common/Slider/Slider'

let data = [
  {
    imgHref: "/images/nft-1.jpeg",
    name: "1",
    quantity: 1,
    volume: 2.5,
  },
  {
    imgHref: "/images/nft-1.jpeg",
    name: "2",
    quantity: 2,
    volume: 2.5,
  },
  {
    imgHref: "/images/nft-1.jpeg",
    name: "3",
    quantity: 3,
    volume: 2.5,
  },
  {
    imgHref: "/images/nft-1.jpeg",
    name: "4",
    quantity: 4,
    volume: 2.5,
  },
  {
    imgHref: "/images/nft-1.jpeg",
    name: "5",
    quantity: 5,
    volume: 2.5,
  }
]

const HighestVolumeCollection = () => {
  const id = useId()
  return (
    <div className="my-12 px-12 md:px-0">
      <div className="mb-4">
        <p className="font-semibold text-2xl text-amber-400">Highest Volumn Collections</p>
      </div>
      <Slider data={data} />
    </div>
  )
}

export default HighestVolumeCollection