'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 2,
        },
    },
}

export default function SliderCenter3() {
    return (
        <>
            <div className="slider-full slider-center-3">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <article>
                            <figure className="mb-0">
                                <Link href="/single"><img src="/assets/imgs/posts/img-23.jpg" alt="athena" /></Link>
                            </figure>
                            <div className="p-20 bg-lighter">
                                <div className="post-meta mb-15 font-primary text-uppercase">
                                    <span className="category"><Link href="/category">Meals</Link> <Link href="/category-2">Food</Link></span>
                                </div>
                                <h3 className="post-title">
                                    <Link href="/single">Chorizo and Potato Tostada with a Fried Egg for breakfast</Link>
                                </h3>
                            </div>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article>
                            <figure className="mb-0">
                                <Link href="/single"><img src="/assets/imgs/posts/img-26.jpg" alt="athena" /></Link>
                            </figure>
                            <div className="p-20 bg-lighter">
                                <div className="post-meta mb-15 font-primary text-uppercase">
                                    <span><Link href="/category">Travel Diaries</Link></span>
                                </div>
                                <h3 className="post-title">
                                    <Link href="/single">What I Learned Living Where Everyone Told Me to Avoid</Link>
                                </h3>
                            </div>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article>
                            <figure className="mb-0">
                                <Link href="/single"><img src="/assets/imgs/posts/img-27.jpg" alt="athena" /></Link>
                            </figure>
                            <div className="p-20 bg-lighter">
                                <div className="post-meta mb-15 font-primary text-uppercase">
                                    <span><Link href="/category">Lifestyle</Link></span>
                                </div>
                                <h3 className="post-title">
                                    <Link href="/single">The World Caters to Average People and Mediocre Lifestyles</Link>
                                </h3>
                            </div>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article>
                            <figure className="mb-0">
                                <Link href="/single"><img src="/assets/imgs/posts/img-28.jpg" alt="athena" /></Link>
                            </figure>
                            <div className="p-20 bg-lighter">
                                <div className="post-meta mb-15 font-primary text-uppercase">
                                    <span><Link href="/category">Motivation</Link></span>
                                </div>
                                <h3 className="post-title">
                                    <Link href="/single">Dear, Anonymous: If You Want More in Life, Now’s the Time to Take It</Link>
                                </h3>
                            </div>
                        </article>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
