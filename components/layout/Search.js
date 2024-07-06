import Link from "next/link";

export default function Search({ isSearch, handleSearch }) {
  return (
    <>
      <div className="main-search-form">
        <button
          className="off-canvas-close search-close"
          onClick={handleSearch}
        >
          <i className="athena-cancel"></i>
        </button>
        <div className="container">
          <div className="pt-150 pb-50 ">
            <div className="row mb-20">
              <div className="col-12 align-self-center main-search-form-cover m-auto">
                <p>
                  <span className="search-text-bg font-secondary">Search</span>
                </p>
                <form action="#" className="search-header">
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your keywords and hit Enter"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-search bg-white" type="submit">
                        <i className="athena-search mr-5" />
                      </button>
                    </div>
                  </div>
                </form>
                <div className="search-suggested mt-80">
                  <h5 className="suggested font-heading mb-20">
                    <strong>Suggested:</strong>
                  </h5>
                  <ul className="list-inline d-inline-block">
                    <li className="list-inline-item"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
