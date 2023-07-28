import React from 'react'
import TrendinCollectionItem from '../../../common/TrendingCollectionItem'

const TrendingCollections = () => {
  return (
    <div className="mt-12">
      <div className="mb-4">
        <p className="font-semibold text-2xl">Trending Collections</p>
      </div>
      <TrendinCollectionItem
        index={1}
        imgHref='https://solanart.io/_next/image?url=https%3A%2F%2Fapi-v2.solanart.io%2Fcdn%2Fhttps%3A%2F%2Farweave.net%2FN8chsQjXlVAiL0zWpkIkM_7U3pE9IacyQ-U17v1OiKc%3Fext%3Dpng&w=3840&q=75'
        name='Ted_NFT'
        floor={1.3}
        vol={736.29}
      />
      <TrendinCollectionItem
        index={1}
        imgHref='https://solanart.io/_next/image?url=https%3A%2F%2Fapi-v2.solanart.io%2Fcdn%2Fhttps%3A%2F%2Farweave.net%2FN8chsQjXlVAiL0zWpkIkM_7U3pE9IacyQ-U17v1OiKc%3Fext%3Dpng&w=3840&q=75'
        name='Ted_NFT'
        floor={1.3}
        vol={736.29}
      />
      <TrendinCollectionItem
        index={1}
        imgHref='https://solanart.io/_next/image?url=https%3A%2F%2Fapi-v2.solanart.io%2Fcdn%2Fhttps%3A%2F%2Farweave.net%2FN8chsQjXlVAiL0zWpkIkM_7U3pE9IacyQ-U17v1OiKc%3Fext%3Dpng&w=3840&q=75'
        name='Ted_NFT'
        floor={1.3}
        vol={736.29}
      />
    </div>
  )
}

export default TrendingCollections