'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import blogSlider from "../../util/blog-slider.json"

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
export default function PostSlider3() {
    return (
        <>
            <div className="swiper-container post-slider-3">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    {blogSlider.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <article>
                                <figure className="mb-20">
                                    <Link href={`/blog/${slide.id}`}><img src={`/assets/imgs/posts/${slide.img}`} alt="athena" /></Link>
                                </figure>
                                <div className="post-meta mb-15 font-primary text-uppercase">
                                    <span className="category">                                      
                                        <Link href="/category">{slide.category}</Link>                                       
                                    </span>
                                </div>
                                <h5 className="post-title pr-30">
                                    <Link href={`/blog/${slide.id}`}>{slide.title}</Link>
                                </h5>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
