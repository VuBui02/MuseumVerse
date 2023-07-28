import React from 'react'
import CollectionCard from '../../../common/CollectionCard'

const FeatureCollection = () => {
  return (
    <div className="mt-12 px-12 md:px-0">
      <div className="mb-4">
        <p className="font-semibold text-2xl text-amber-400">Feature Collections</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        <CollectionCard
          imgHref='/images/nft-1.jpeg'
          name='Quả cầu cửu long'
          quantity={9}
          volume={10.2}
        />
        <CollectionCard
          imgHref='/images/nft-1.jpeg'
          name='Quả cầu cửu long'
          quantity={9}
          volume={10.2}
        />
        <CollectionCard
          imgHref='/images/nft-1.jpeg'
          name='Quả cầu cửu long'
          quantity={9}
          volume={10.2}
        />
        <CollectionCard
          imgHref='/images/nft-1.jpeg'
          name='Quả cầu cửu long'
          quantity={9}
          volume={10.2}
        />
        <CollectionCard
          imgHref='/images/nft-1.jpeg'
          name='Quả cầu cửu long'
          quantity={9}
          volume={10.2}
        />
        <CollectionCard
          imgHref='/images/nft-1.jpeg'
          name='Quả cầu cửu long'
          quantity={9}
          volume={10.2}
        />
      </div>
    </div>
  )
}

export default FeatureCollection