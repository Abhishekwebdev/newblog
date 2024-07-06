import Link from "next/link";

export default function Sidebar({ isSidebar, handleSidebar }) {
  return (
    <>
      <aside
        id="sidebar-wrapper"
        className="custom-scrollbar offcanvas-sidebar"
      >
        <button className="off-canvas-close" onClick={handleSidebar}>
          <i className="athena-cancel" />
        </button>
        <div className="sidebar-inner">
          <div className="sidebar-widget widget-creative-menu">
            <ul>
              <li>
                <Link href="/blog/">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-widget widget-menu pt-30">
            <div className="widget-header-3 font-primary mb-20"></div>
          </div>
        </div>
      </aside>
    </>
  );
}
