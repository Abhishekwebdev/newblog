import Link from "next/link";

export default function BlogCard1({ col, desc, item }) {
  return (
    <>
      <article className={`${col ? col : ""} post-card-1`}>
        <figure className="mb-20 position-relative">
          <Link href={`/blog/${item.id}`}>
            <img src={`/assets/imgs/posts/${item.img}`} alt="codingassets" />
            <div className="post-meta font-primary text-uppercase ">
              <span>{item.tag}</span>
            </div>
          </Link>
          {/*<div className="post-meta font-primary text-uppercase rotate-90 top-left">*/}
          {/*  <span>{item.tag}</span>*/}
          {/*</div>*/}
        </figure>
        {/*<div className="post-meta mb-10 font-primary text-uppercase">*/}
        {/*    <span><Link href="/category">Blog</Link></span>*/}
        {/*</div>*/}
        <h3 className="post-title">
          <Link href={`/blog/${item.id}`}>{item.title.rendered}</Link>
        </h3>
      </article>
    </>
  );
}
