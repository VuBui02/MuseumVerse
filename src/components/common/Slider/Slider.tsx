import React, { useId } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CollectionCard from '../CollectionCard'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import ChevronIcon from "../../icons/ChevronIcon";
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NFTCard from "../NFTCard";

type Collection = {
    imgHref: string
    name: string
    quantity: number
    volume: number
}

export interface Collections {
    data: Collection[]
    isTicketCard?: boolean
}

function Slider({ data, isTicketCard }: Collections) {
    let id = useId()
    id = id.slice(1, id.length - 1)
    console.log(id)
    let n = data.length;
    console.log(data);
    return (
        <div className="w-full relative">
            <div className="flex justify-center items-center self-center">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={12}
                    slidesPerView={3}
                    // watchSlidesVisibility={true}
                    navigation={{ nextEl: `.arrow-right-${id}`, prevEl: `.arrow-left-${id}` }}
                // pagination={{clickable: true}}
                >
                    {
                        data.map((item, index) => (
                            <SwiperSlide key={index}>
                                {isTicketCard ?
                                    <NFTCard
                                        imgHref='/images/nft-1.jpeg'
                                        name="Quả cầu cửu long"
                                        price={2.11}
                                    /> :
                                    <CollectionCard
                                        imgHref={item.imgHref}
                                        name={item.name}
                                        quantity={item.quantity}
                                        volume={item.volume}
                                    />
                                }
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <button className={`arrow-left-${id} arrow left-[-50px] absolute inset-y-2/4 p-3 rounded-lg border border-amber-300 h-max hover:text-white hover:cursor-pointer bg-amber-100 hover:bg-amber-400`}>
                <ChevronIcon
                    size={4}
                    customClassName="-rotate-90"
                />
            </button>
            <button className={`arrow-right-${id} arrow right-[-50px] absolute inset-y-2/4 z-10 p-3 rounded-lg border border-amber-300 h-max hover:text-white hover:cursor-pointer bg-amber-100 hover:bg-amber-400`}>
                <ChevronIcon
                    size={4}
                    customClassName="rotate-90"
                />
            </button>
        </div>
    )
}

export default Slider;