"use client";
import Layout from "@/components/layout/Layout";
import data from "@/util/data.json";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogDetails() {
  let Router = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const id = Router.id;

  useEffect(() => {
    setBlogPost(data.find((data) => data.id == id));
  }, [id]);

  return (
    <>
      <Layout>
        {blogPost && (
          <>
            <div className="container single-content">
              <div className="entry-header entry-header-style-1 mb-50 pt-50">
                <h1 className="entry-title mb-50 font-weight-900">
                  {blogPost.title.rendered}
                </h1>
              </div>
              {/*end single header*/}
              <figure className="image mb-30 m-auto text-center">
                <img
                  src={`/assets/imgs/posts/${blogPost.img}`}
                  alt="post-title"
                />
                <p className="mb-5 p-5 description">{blogPost.description}</p>
                <button className=" download">
                  <Link href={`${blogPost.download}`}>download now</Link>
                </button>
              </figure>
            </div>
          </>
        )}
      </Layout>
    </>
  );
}
