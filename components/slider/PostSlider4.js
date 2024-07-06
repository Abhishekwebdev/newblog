'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import blogSlider from "../../util/blog-slider-2.json"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 4,
        },
        '992': {
            slidesPerView: 4,
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

export default function PostSlider4() {
    return (
        <>
            <div className="swiper-container post-slider-4">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                {blogSlider.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <article>
                            <figure className="mb-20">
                                <Link href={`/blog/${slide.id}`}><img src={`/assets/imgs/posts/${slide.img}`} alt="athena" /></Link>
                            </figure>
                            <div className="post-meta mb-10 font-primary text-uppercase">
                                <Link href="/category">{slide.category}</Link>
                            </div>
                            <h5 className="post-title">
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
