import BlogPost from "@/components/blog/BlogPost";
import Layout from "@/components/layout/Layout";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="container mb-50">
            <div className="sidebar-widget post-module-1">
              <div className="widget-header-1 font-primary mb-30">
                <div className="row mb-50 mt-50">
                  <BlogPost
                    showItem={6}
                    showStart={0}
                    showEnd={6}
                    style={1}
                    col="col-md-6 mb-30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
