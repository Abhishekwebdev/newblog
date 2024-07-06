import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Error404() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div className="container mb-50 pt-120 pb-80 text-center">
          <div className="entry-page-wraper mb-120">
            <h1 className="font-secondary">
              Oops, the page you&apos;re looking for cannot be found.
            </h1>
            <p>
              It looks like something went wrong. Try searching for what you
              &apos;re looking for
              <br /> or check out more from list below.
            </p>
            {/*<form action="#" className="search-header search-form-404">*/}
            {/*    <div className="input-group w-100">*/}
            {/*        <input type="text" className="form-control" placeholder="Enter your keywords and hit Enter" />*/}
            {/*        <div className="input-group-append">*/}
            {/*            <button className="btn btn-search bg-white" type="submit">*/}
            {/*                <i className="athena-search mr-5" />*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</form>*/}
          </div>
          {/*<div className="sidebar-widget post-module-1">*/}
          {/*    <h4 className="mb-30">Random posts</h4>*/}
          {/*    <div className="row mb-50">*/}
          {/*        <article className="col-lg-3 col-md-6 mb-50 wow  fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>*/}
          {/*            <figure className="mb-20">*/}
          {/*                <Link href="/single"><img src="/assets/imgs/posts/thumb-1.jpg" alt="athena" /></Link>*/}
          {/*            </figure>*/}
          {/*            <div className="post-meta mb-10 font-primary text-uppercase">*/}
          {/*                <span><Link href="/category">Travel</Link></span>*/}
          {/*            </div>*/}
          {/*            <h5 className="post-title">*/}
          {/*                <Link href="/single">The World's Most Refined Mountaineering Equipment </Link>*/}
          {/*            </h5>*/}
          {/*        </article>*/}
          {/*        <article className="col-lg-3 col-md-6 mb-50 wow  fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>*/}
          {/*            <figure className="mb-20">*/}
          {/*                <Link href="/single"><img src="/assets/imgs/posts/thumb-2.jpg" alt="athena" /></Link>*/}
          {/*            </figure>*/}
          {/*            <div className="post-meta mb-10 font-primary text-uppercase">*/}
          {/*                <span><Link href="/category">Ideas</Link></span>*/}
          {/*            </div>*/}
          {/*            <h5 className="post-title">*/}
          {/*                <Link href="/single">Carrie Underwood Shows Off Her Abs in Bikini Selfie: 'Is It Summer Yet?'</Link>*/}
          {/*            </h5>*/}
          {/*        </article>*/}
          {/*        <article className="col-lg-3 col-md-6 mb-50 wow  fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>*/}
          {/*            <figure className="mb-20">*/}
          {/*                <Link href="/single"><img src="/assets/imgs/posts/thumb-3.jpg" alt="athena" /></Link>*/}
          {/*            </figure>*/}
          {/*            <div className="post-meta mb-10 font-primary text-uppercase">*/}
          {/*                <span><Link href="/category">Home Decor</Link></span>*/}
          {/*            </div>*/}
          {/*            <h5 className="post-title">*/}
          {/*                <Link href="/single">These Merrell Sandals Are the Most Comfortable Slides I’ve Ever Worn </Link>*/}
          {/*            </h5>*/}
          {/*        </article>*/}
          {/*        <article className="col-lg-3 col-md-6 mb-50 wow  fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>*/}
          {/*            <figure className="mb-20">*/}
          {/*                <Link href="/single"><img src="/assets/imgs/posts/thumb-4.jpg" alt="athena" /></Link>*/}
          {/*            </figure>*/}
          {/*            <div className="post-meta mb-10 font-primary text-uppercase">*/}
          {/*                <span><Link href="/category">Foody</Link></span>*/}
          {/*            </div>*/}
          {/*            <h5 className="post-title">*/}
          {/*                <Link href="/single">This Oprah-Approved Brand Is Offering Up to 40% Off Its Comfy Shoes for 4th of July </Link>*/}
          {/*            </h5>*/}
          {/*        </article>*/}
          {/*        <article className="col-lg-3 col-md-6 mb-50 wow  fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>*/}
          {/*            <figure className="mb-20">*/}
          {/*                <Link href="/single"><img src="/assets/imgs/posts/thumb-5.jpg" alt="athena" /></Link>*/}
          {/*            </figure>*/}
          {/*            <div className="post-meta mb-10 font-primary text-uppercase">*/}
          {/*                <span><Link href="/category">Decor</Link></span>*/}
          {/*            </div>*/}
          {/*            <h5 className="post-title">*/}
          {/*                <Link href="/single">The Boody Bra Is So Comfortable, Even Bra Haters Can’t Stop Raving About It </Link>*/}
          {/*            </h5>*/}
          {/*        </article>*/}
          {/*        <article className="col-lg-3 col-md-6 mb-50 wow  fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>*/}
          {/*            <figure className="mb-20">*/}
          {/*                <Link href="/single"><img src="/assets/imgs/posts/thumb-6.jpg" alt="athena" /></Link>*/}
          {/*            </figure>*/}
          {/*            <div className="post-meta mb-10 font-primary text-uppercase">*/}
          {/*                <span><Link href="/category">Healthy</Link></span>*/}
          {/*            </div>*/}
          {/*            <h5 className="post-title">*/}
          {/*                <Link href="/single">Jennifer Aniston Called These Leggings a 'Fitness Staple'</Link>*/}
          {/*            </h5>*/}
          {/*        </article>*/}
          {/*        <article className="col-lg-3 col-md-6 mb-50 wow  fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>*/}
          {/*            <figure className="mb-20">*/}
          {/*                <Link href="/single"><img src="/assets/imgs/posts/thumb-7.jpg" alt="athena" /></Link>*/}
          {/*            </figure>*/}
          {/*            <div className="post-meta mb-10 font-primary text-uppercase">*/}
          {/*                <span><Link href="/category">Fashion</Link></span>*/}
          {/*            </div>*/}
          {/*            <h5 className="post-title">*/}
          {/*                <Link href="/single">The Unexpected Place You Can Score a Ton of Comfy Shoes for Up to 75% Off Right Now </Link>*/}
          {/*            </h5>*/}
          {/*        </article>*/}
          {/*        <article className="col-lg-3 col-md-6 mb-50 wow  fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>*/}
          {/*            <figure className="mb-20">*/}
          {/*                <Link href="/single"><img src="/assets/imgs/posts/thumb-8.jpg" alt="athena" /></Link>*/}
          {/*            </figure>*/}
          {/*            <div className="post-meta mb-10 font-primary text-uppercase">*/}
          {/*                <span><Link href="/category">Blog</Link></span>*/}
          {/*            </div>*/}
          {/*            <h5 className="post-title">*/}
          {/*                <Link href="/single">These Aerie Bike Shorts Made Me Break Up With Leggings for Summer </Link>*/}
          {/*            </h5>*/}
          {/*        </article>*/}
          {/*        <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn" style={{ visibility: 'hidden', animationName: 'none' }}>*/}
          {/*            <figure className="mb-20">*/}
          {/*                <Link href="/single"><img src="/assets/imgs/posts/thumb-9.jpg" alt="athena" /></Link>*/}
          {/*            </figure>*/}
          {/*            <div className="post-meta mb-10 font-primary text-uppercase">*/}
          {/*                <span><Link href="/category">Inspiration</Link></span>*/}
          {/*            </div>*/}
          {/*            <h5 className="post-title">*/}
          {/*                <Link href="/single">The Sneakers Emily Ratajkowski Wears on Repeat Just Got Even More Affordable </Link>*/}
          {/*            </h5>*/}
          {/*        </article>*/}
          {/*        <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn" style={{ visibility: 'hidden', animationName: 'none' }}>*/}
          {/*            <figure className="mb-20">*/}
          {/*                <Link href="/single"><img src="/assets/imgs/posts/thumb-10.jpg" alt="athena" /></Link>*/}
          {/*            </figure>*/}
          {/*            <div className="post-meta mb-10 font-primary text-uppercase">*/}
          {/*                <span><Link href="/category">Landing</Link></span>*/}
          {/*            </div>*/}
          {/*            <h5 className="post-title">*/}
          {/*                <Link href="/single">You Can Already Score Vionic Sandals on Sale Ahead of Memorial Day</Link>*/}
          {/*            </h5>*/}
          {/*        </article>*/}
          {/*        <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn" style={{ visibility: 'hidden', animationName: 'none' }}>*/}
          {/*            <figure className="mb-20">*/}
          {/*                <Link href="/single"><img src="/assets/imgs/posts/thumb-11.jpg" alt="athena" /></Link>*/}
          {/*            </figure>*/}
          {/*            <div className="post-meta mb-10 font-primary text-uppercase">*/}
          {/*                <span><Link href="/category">Room</Link></span>*/}
          {/*            </div>*/}
          {/*            <h5 className="post-title">*/}
          {/*                <Link href="/single">This Bralette Is So Comfy, I’m Never Going Back to Real Bras Again </Link>*/}
          {/*            </h5>*/}
          {/*        </article>*/}
          {/*        <article className="col-lg-3 col-md-6 mb-50 wow animated fadeIn" style={{ visibility: 'hidden', animationName: 'none' }}>*/}
          {/*            <figure className="mb-20">*/}
          {/*                <Link href="/single"><img src="/assets/imgs/posts/thumb-12.jpg" alt="athena" /></Link>*/}
          {/*            </figure>*/}
          {/*            <div className="post-meta mb-10 font-primary text-uppercase">*/}
          {/*                <span><Link href="/category">Tips</Link></span>*/}
          {/*            </div>*/}
          {/*            <h5 className="post-title">*/}
          {/*                <Link href="/single">This Sports Bra Is So Comfortable, I Own It in 5 Different Colors</Link>*/}
          {/*            </h5>*/}
          {/*        </article>*/}
          {/*    </div>*/}
          {/*   */}
          {/*    <div className="view-more text-center wow animated fadeIn" style={{ visibility: 'hidden', animationName: 'none' }}>*/}
          {/*        <button className="btn btn-outline-primary border-radius-0 font-weight-thin">Load more posts</button>*/}
          {/*    </div>*/}
          {/*</div>*/}
        </div>
      </Layout>
    </>
  );
}
