import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Author() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="archive-header pt-50">
            <div className="container">
              <div className="author-bio row">
                <div className="author-info col-lg-6">
                  <h5 className="font-weight-bold mb-10"></h5>
                  <div className="author-description h5 text-muted">
                    <hr />
                    <h3>*Privacy Policy*</h3> Thank you for visiting our blog
                    and for your interest in our content. Your privacy is
                    important to us, and we are committed to protecting any
                    personal information you may provide while using our blog.
                    This privacy policy outlines the types of information we
                    collect, how we use it, and how we safeguard your
                    information.
                    <hr /> <h3>*Information We Collect:*</h3> - When you visit
                    our blog, we may collect non-personal information such as
                    your browser type, device type, and IP address for
                    analytical purposes. - If you choose to subscribe to our
                    blog or submit a comment, we may collect personal
                    information such as your name and email address. <hr />
                    <h3>*How We Use Your Information:*</h3> - We use the
                    information we collect to improve our content, personalize
                    your experience on the blog, and respond to your inquiries
                    or feedback. - Your email address may be used to send you
                    blog updates, newsletters, or other relevant information
                    related to the blog. <hr /> <h3>*Third-Party Services:*</h3>{" "}
                    - We may use third-party services such as analytics tools to
                    track and analyze user interactions on our blog. These third
                    parties may collect additional information. - Our blog may
                    contain links to external websites that are not operated by
                    us. We are not responsible for the privacy practices of
                    these external sites. <hr /> <h3>*Data Security:* </h3>- We
                    take appropriate measures to secure and protect your
                    personal information from unauthorized access, disclosure,
                    or alteration. - However, please be aware that no method of
                    transmission over the internet or electronic storage is 100%
                    secure. <hr />
                    <h3>*Policy Changes:* </h3>- We reserve the right to update
                    or make changes to this privacy policy at any time. Any
                    updates will be reflected on this page, so please review it
                    periodically. By using our blog, you consent to the terms
                    outlined in this privacy policy. If you have any questions
                    or concerns about our privacy practices, please contact us
                    at [codinassets.com]. Last updated: [5-07-2024] ---
                  </div>
                  <h6>Follow</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
