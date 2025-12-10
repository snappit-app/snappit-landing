import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-semibold text-xl mb-4">
              <Image
                src="/logo-128.png"
                alt="Snappit"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span>Snappit</span>
            </Link>
            <p className="text-foreground-secondary max-w-sm leading-relaxed">
              A lightweight macOS utility that helps you work smarter with your screen. Extract
              text, scan QR codes, and pick colors — all with a single shortcut.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-foreground-secondary hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-foreground-secondary hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#download"
                  className="text-foreground-secondary hover:text-foreground transition-colors"
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-foreground-secondary hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:support@snappit.app"
                  className="text-foreground-secondary hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground-secondary hover:text-foreground transition-colors"
                >
                  License Activation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-foreground-secondary">
            &copy; {currentYear} Snappit. Developed by{" "}
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              pinkcolorrr
            </Link>
            . All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="#"
              className="text-foreground-secondary hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-foreground-secondary hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-foreground-secondary hover:text-foreground transition-colors"
            >
              EULA
            </Link>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-foreground-secondary">
          <p>
            <strong>System Requirements:</strong> macOS 12.0 Monterey or later. Screen Recording
            permission required.
          </p>
          <p className="mt-2">Windows & Linux coming soon</p>
          <p className="mt-2">
            Version 0.1.0 &middot; Built with Tauri &middot; Identifier: com.pinkcolorrr.snappit
          </p>
        </div>
      </div>
    </footer>
  );
}
