import BlogPost from "@/components/blog/BlogPost";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="archive-header pt-50 pb-50 bg-1 mb-50">
            <div className="container">
              <div className="widget-header-1 font-primary mb-30"></div>
              <div className="breadcrumb">
                <Link href="/" rel="nofollow">
                  Home
                </Link>
                <span />
              </div>
            </div>
          </div>
          <div className="container mb-50">
            <div className="sidebar-widget post-module-1">
              <div className="row mb-50">
                <BlogPost
                  showItem={2}
                  showStart={0}
                  showEnd={2}
                  style={1}
                  col="col-md-6 mb-30"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
