import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle }) {
  return (
    <>
      <div className="archive-header pt-50 pb-50 bg-1 mb-50">
        <div className="container">
          <div className="widget-header-1 font-primary mb-30">
            <span className="widget-subtitle position-relative text-primary">
              <span className="divider-separator" />
              Category
            </span>
            <h2 className="widget-title mt-5 mb-30">
              Lifestyle<sup>235 posts</sup>
            </h2>
          </div>
          <div className="breadcrumb">
            <Link href="/" rel="nofollow">
              Home
            </Link>
            <span /> Lifestyle
          </div>
        </div>
      </div>
    </>
  );
}
