
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".grid", {
                itemSelector: ".grid-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".grid-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])

    return (
        <>
            <div className="grid row mb-30">
                <div className="grid-sizer" />
                <article className="grid-item col pb-50 wow fadeIn animated">
                    <figure className="mb-20">
                        <Link href="/single"><img src="/assets/imgs/posts/img-12.jpg" alt="athena" /></Link>
                    </figure>
                    <div className="post-meta mb-10 font-primary text-uppercase">
                        <span><Link href="/category">Fashion</Link></span>
                    </div>
                    <h5 className="post-title">
                        <Link href="/single">This Sports Bra Is So Comfortable, I Own It in 5 Different Colors</Link>
                    </h5>
                </article>
                <article className="grid-item col pb-50 wow fadeIn animated">
                    <figure className="mb-20">
                        <Link href="/single"><img src="/assets/imgs/posts/thumb-16.jpg" alt="athena" /></Link>
                    </figure>
                    <div className="post-meta mb-10 font-primary text-uppercase">
                        <span><Link href="/category">News</Link></span>
                    </div>
                    <h5 className="post-title">
                        <Link href="/single">How Kelsea Ballerini Turned Her Tiny Closet Into a Perfectly Pink Oasis Space </Link>
                    </h5>
                </article>
                <article className="grid-item col pb-50 wow fadeIn animated">
                    <figure className="mb-20">
                        <Link href="/single"><img src="/assets/imgs/posts/thumb-11.jpg" alt="athena" /></Link>
                    </figure>
                    <div className="post-meta mb-10 font-primary text-uppercase">
                        <span><Link href="/category">Family</Link></span>
                    </div>
                    <h5 className="post-title">
                        <Link href="/single">This Quiet Humidifier Keeps Noise Levels Below a Whisper—and It’s on Sale</Link>
                    </h5>
                </article>
                <article className="grid-item col pb-50 wow fadeIn animated">
                    <figure className="mb-20">
                        <Link href="/single"><img src="/assets/imgs/posts/img-19.jpg" alt="athena" /></Link>
                    </figure>
                    <div className="post-meta mb-10 font-primary text-uppercase">
                        <span><Link href="/category">Style</Link></span>
                    </div>
                    <h5 className="post-title">
                        <Link href="/single">Nootkatone Is a New Bug Spray Ingredient That Repels Ticks, Mosquitoes, and Other Insects</Link>
                    </h5>
                </article>
                <article className="grid-item col pb-50 wow fadeIn animated">
                    <figure className="mb-20">
                        <Link href="/single"><img src="/assets/imgs/posts/img-20.jpg" alt="athena" /></Link>
                    </figure>
                    <div className="post-meta mb-10 font-primary text-uppercase">
                        <span><Link href="/category">Mediacare</Link></span>
                    </div>
                    <h5 className="post-title">
                        <Link href="/single">This Cooling Bed Blanket Stays 3 Degrees Cooler Than Your Room, So You Can Say Goodbye to Night</Link>
                    </h5>
                </article>
                <article className="grid-item col pb-50 wow fadeIn animated">
                    <figure className="mb-20">
                        <Link href="/single"><img src="/assets/imgs/posts/thumb-14.jpg" alt="athena" /></Link>
                    </figure>
                    <div className="post-meta mb-10 font-primary text-uppercase">
                        <span><Link href="/category">Holidays</Link></span>
                    </div>
                    <h5 className="post-title">
                        <Link href="/single">This Is How Often You Should Really Clean Your Sheets, According to a Pro</Link>
                    </h5>
                </article>
                <article className="grid-item col pb-50 wow fadeIn animated">
                    <figure className="mb-20">
                        <Link href="/single"><img src="/assets/imgs/posts/thumb-13.jpg" alt="athena" /></Link>
                    </figure>
                    <div className="post-meta mb-10 font-primary text-uppercase">
                        <span><Link href="/category">Tech</Link></span>
                    </div>
                    <h5 className="post-title">
                        <Link href="/single">5 Household Items You Should Get Rid of Immediately</Link>
                    </h5>
                </article>
                <article className="grid-item col pb-50 wow fadeIn animated">
                    <figure className="mb-20">
                        <Link href="/single"><img src="/assets/imgs/posts/img-15.jpg" alt="athena" /></Link>
                    </figure>
                    <div className="post-meta mb-10 font-primary text-uppercase">
                        <span><Link href="/category">Fitness</Link></span>
                    </div>
                    <h5 className="post-title">
                        <Link href="/single">11 Things In Your Bathroom to Throw Away Now</Link>
                    </h5>
                </article>
                <article className="grid-item col pb-50 wow fadeIn animated">
                    <figure className="mb-20">
                        <Link href="/single"><img src="/assets/imgs/posts/img-9.jpg" alt="athena" /></Link>
                    </figure>
                    <div className="post-meta mb-10 font-primary text-uppercase">
                        <span><Link href="/category">Mind  Body</Link></span>
                    </div>
                    <h5 className="post-title">
                        <Link href="/single">7 Things You Should Sanitize to Avoid Getting Sick </Link>
                    </h5>
                </article>
            </div>
        </>
    )
}
