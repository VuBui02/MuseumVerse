import React from 'react'
import CustomButton from '../../common/CustomButton'
import DropdownContainer from '../../common/DropdownContainer'
import { SETTINGS_ONE_ROW } from '../../../constants'
import CardSlide from '../../common/CardSlide'

const CollectionDetail = () => {
  return (
    <div className="mt-24 px-36">
      <div className="flex">
        <div className="flex-1">
          <img src="/images/nft-1.jpeg" alt="" className="h-[500px] w-[500px] rounded-xl object-cover" />
        </div>
        <div className="flex-1">
          <div>
            <div className="flex gap-3 items-center mb-4">
              <img src="/images/nft-1.jpeg" alt="" className="w-10 h-10 rounded-lg" />
              <div>
                <p className="font-semibold">Quả cầu cửu long</p>
                <p className="font-normal text-sm text-gray-400">Floor - 0.9 SOL</p>
              </div>
            </div>
            <div className="text-3xl font-semibold">Quả cầu cửu long #23</div>
            <p>56mLo8...xUz</p>
            <div className="bg-slate-200 px-8 py-8 rounded-xl my-8 flex flex-col gap-4">
              <div>
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold text-lg">Price</p>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-xl">4.1879</span>
                      <img src="/icons/solana-icon.png" alt="" className="w-4 h-4" />
                      <span className="text-sm text-gray-500">~ $104.65</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-end font-semibold text-lg">Offer</p>
                    <p className="text-sm text-gray-500">No offer</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <CustomButton label="Buy" />
                <CustomButton label="Place offer" />
              </div>
            </div>
            <DropdownContainer label="Attributes">
              <div>123</div>
            </DropdownContainer>
            <DropdownContainer label="Details">
              <div>123</div>
            </DropdownContainer>
          </div>
        </div>
      </div>
      <div >
        <DropdownContainer label="Suggested">
          <CardSlide
            imgHref='/images/nft-1.jpeg'
            name="Quả cầu cửu long"
            price={2.11}
          />
          <CardSlide
            imgHref='/images/nft-1.jpeg'
            name="Quả cầu cửu long"
            price={2.11}
          />
          <CardSlide
            imgHref='/images/nft-1.jpeg'
            name="Quả cầu cửu long"
            price={2.11}
          />
          <CardSlide
            imgHref='/images/nft-1.jpeg'
            name="Quả cầu cửu long"
            price={2.11}
          />
        </DropdownContainer>
      </div>
    </div>
  )
}

export default CollectionDetail