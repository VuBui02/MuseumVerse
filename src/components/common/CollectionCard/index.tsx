import React, { useCallback, useRef, memo } from 'react'
import { gsap } from "gsap";
import { Link } from 'react-router-dom';

type Props = {
  imgHref: string
  name: string
  quantity: number
  volume: number
}

const CollectionCard = ({ imgHref, name, quantity, volume }: Props) => {
  const collectionCardRef = useRef<HTMLDivElement>(null)

  const handleHoverCard = useCallback(() => {
    gsap.to(collectionCardRef.current, {
      css: {
        top: -100,
      },
    });
  }, []);

  return (
    <Link to="/collection/detail">
      <div className="max-w-lg h-72 border border-gray-400 rounded-lg p-2 drop-shadow-lg cursor-pointer hover:bg-amber-50 transition-all delay-[30ms]" ref={collectionCardRef} onMouseEnter={handleHoverCard}>
        <div className="h-[60%] relative">
          <img src={imgHref} alt="Image collection" className="w-full h-full rounded-lg object-cover" />
          <img src={imgHref} alt="" className="absolute rounded-lg w-14 h-14 border-2 border-white -bottom-6 left-6 z-10" />
        </div>
        <div className="flex justify-between mt-12 items-center px-6">
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-gray-500 font-light">{quantity} items</p>
          </div>
          <div>
            <p className="font-semibold">Total Volume</p>
            <div className="flex items-center gap-1 justify-end">
              <img src="/icons/solana-icon.png" alt="" className="w-4 h-4" />
              {volume}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default memo(CollectionCard)