import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="archive-header pt-50">
            <div className="container">
              <div className="col-lg-6">
                <h3>Get in touch</h3>
                <form
                  className="form-contact comment_form mt-20"
                  action="#"
                  id="commentForm"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="email"
                          id="email"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="website"
                          id="website"
                          type="text"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control w-100"
                          name="comment"
                          id="comment"
                          cols={30}
                          rows={9}
                          placeholder="Message"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="button button-contactForm">
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
