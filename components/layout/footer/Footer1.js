import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="fixed-footer bg-dark text-white pt-100 pb-100 overflow-hidden">
        <div className="container-larger">
          <div className="footer-copy-right text-center mt-30">
            <p className="font-medium mb-0">
              <span className="text-muted">
                © 2024, coding assets | All rights reserved | Designed by{" "}
              </span>
              <Link href="#" target="_blank" className="text-primary">
                codingAssets
              </Link>
            </p>
            <Link href="/privacy" target="_new" className="text-secondary">
              privacy-policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
