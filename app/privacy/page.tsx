import Image from "next/image";
import Link from "next/link";

import { Footer, ThemeToggle } from "../components";

export const metadata = {
  title: "Privacy Policy — Snappit",
  description: "Privacy Policy for Snappit software. Learn how we handle your data.",
};

export default function PrivacyPage() {
  const lastUpdated = "January 16, 2026";

  return (
    <main className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Header */}
      <header className="border-border border-b px-4 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-128.png" alt="Snappit" width={32} height={32} />
            <span className="font-semibold">Snappit</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/#features"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <section className="px-4 py-16">
        <div className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>

          <div className="bg-card border-border mb-8 rounded-xl border p-6">
            <p className="text-foreground font-medium">
              TL;DR: Snappit is a privacy-first application. All processing happens locally on your
              device. We do not collect, store, or transmit your screen content, extracted text, or
              captured data.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold">1. Introduction</h2>
              <p className="text-muted-foreground">
                This Privacy Policy describes how Snappit (&quot;we&quot;, &quot;our&quot;, or
                &quot;the Software&quot;) handles your information. We are committed to protecting
                your privacy and being transparent about our practices.
              </p>
              <p className="text-muted-foreground mt-4">
                Snappit is developed by individual entrepreneur Anton Tiurin, registered in the
                country of Georgia (Sakartvelo). By using the Software, you agree to the collection
                and use of information as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">2. Data We Do NOT Collect</h2>
              <p className="text-muted-foreground">
                Snappit is designed with privacy as a core principle. The following data never
                leaves your device:
              </p>
              <ul className="text-muted-foreground mt-4 list-disc space-y-2 pl-6">
                <li>Screen captures or screenshots</li>
                <li>Text extracted via OCR</li>
                <li>Colors picked from your screen</li>
                <li>Measurements taken with the ruler tool</li>
                <li>QR code content</li>
                <li>Your keyboard shortcuts configuration</li>
                <li>Any content visible on your screen</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                All screen processing, including OCR, color picking, and QR scanning, happens
                entirely on your device using native macOS APIs or bundled libraries (Tesseract). No
                data is sent to external servers for processing.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">3. Data We Collect</h2>
              <p className="text-muted-foreground">
                We collect minimal data necessary to provide and improve the Software:
              </p>

              <h3 className="mt-6 mb-2 font-medium">3.1 License Information</h3>
              <p className="text-muted-foreground">
                When you purchase a license, our payment processor (Paddle) collects payment and
                billing information. We receive:
              </p>
              <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-6">
                <li>Email address (for license delivery and support)</li>
                <li>License key and activation status</li>
                <li>Country (for tax purposes, handled by Paddle)</li>
              </ul>

              <h3 className="mt-6 mb-2 font-medium">3.2 Technical Information</h3>
              <p className="text-muted-foreground">
                For license verification and basic analytics, we may collect:
              </p>
              <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-6">
                <li>macOS version</li>
                <li>Application version</li>
                <li>Anonymous device identifier (for license activation limits)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">4. How We Use Your Data</h2>
              <p className="text-muted-foreground">The limited data we collect is used to:</p>
              <ul className="text-muted-foreground mt-4 list-disc space-y-2 pl-6">
                <li>Deliver and activate your license</li>
                <li>Provide customer support</li>
                <li>Send important product updates (you can opt out)</li>
                <li>Improve the Software based on aggregate, anonymized usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">5. Third-Party Services</h2>

              <h3 className="mt-6 mb-2 font-medium">5.1 Paddle (Payment Processing)</h3>
              <p className="text-muted-foreground">
                We use Paddle as our Merchant of Record for payment processing. When you make a
                purchase, Paddle collects and processes your payment information according to their{" "}
                <a
                  href="https://www.paddle.com/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-product hover:underline"
                >
                  Privacy Policy
                </a>
                . We do not have access to your full credit card details.
              </p>

              <h3 className="mt-6 mb-2 font-medium">5.2 Tesseract OCR</h3>
              <p className="text-muted-foreground">
                For extended language support, Snappit uses the Tesseract OCR engine, which runs
                entirely offline on your device. No text data is sent to external servers.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">6. Data Storage and Security</h2>
              <p className="text-muted-foreground">
                Your preferences and settings are stored locally on your device. License information
                is stored securely and encrypted. We implement appropriate technical and
                organizational measures to protect your data.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">7. Your Rights</h2>
              <p className="text-muted-foreground">You have the right to:</p>
              <ul className="text-muted-foreground mt-4 list-disc space-y-2 pl-6">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, contact us at{" "}
                <a href="mailto:support@getsnappit.com" className="text-product hover:underline">
                  support@getsnappit.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">8. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground">
                Snappit is not intended for use by children under 16 years of age. We do not
                knowingly collect personal information from children. If you believe we have
                collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">9. International Data Transfers</h2>
              <p className="text-muted-foreground">
                As a business based in the country of Georgia (Sakartvelo), your data may be
                processed in Georgia or other countries where our service providers operate. We
                ensure appropriate safeguards are in place for any international data transfers.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">10. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by updating the &quot;Last updated&quot; date. We encourage you to review
                this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">11. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please
                contact us:
              </p>
              <p className="text-muted-foreground mt-4">
                Email:{" "}
                <a href="mailto:support@getsnappit.com" className="text-product hover:underline">
                  support@getsnappit.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
