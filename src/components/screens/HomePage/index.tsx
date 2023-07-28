import React from 'react'
import Information from './components/Information'
import TrendingCollections from './components/TrendingCollections'

const HomePageScreen = () => {
  return (
    <div className="mt-12 md:mt-0 md:py-24 md:px-12 lg:px-16 xl:px-28">
      <Information />
      <TrendingCollections />
    </div>
  )
}

export default HomePageScreen