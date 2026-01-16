import Image from "next/image";
import Link from "next/link";

import { Footer, ThemeToggle } from "../components";

export const metadata = {
  title: "Terms of Service — Snappit",
  description: "Terms of Service for Snappit software.",
};

export default function TermsPage() {
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
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>

          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By downloading, installing, or using Snappit (&quot;Software&quot;), you agree to be
                bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these
                Terms, do not use the Software.
              </p>
              <p className="text-muted-foreground mt-4">
                Snappit is developed and operated by individual entrepreneur Anton Tiurin,
                registered in the country of Georgia (Sakartvelo). These Terms constitute a legal
                agreement between you and individual entrepreneur Anton Tiurin.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">2. License Grant</h2>
              <p className="text-muted-foreground">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
                non-transferable, revocable license to:
              </p>
              <ul className="text-muted-foreground mt-4 list-disc space-y-2 pl-6">
                <li>Download and install the Software on devices you own or control</li>
                <li>
                  Use the Software for personal or commercial purposes in accordance with these
                  Terms
                </li>
                <li>
                  Use your license on up to three (3) personal devices simultaneously (for paid
                  licenses)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">3. Free Trial</h2>
              <p className="text-muted-foreground">
                Snappit offers a free trial with full access to all features. The trial is limited
                to 150 uses, allowing you to evaluate the Software before making a purchase
                decision. After the trial limit is reached, you must purchase a license to continue
                using the Software. No credit card is required for the trial.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">4. Payments and Billing</h2>
              <p className="text-muted-foreground">
                All payments are processed securely through Paddle, our authorized payment partner.
                By making a purchase, you also agree to Paddle&apos;s terms of service.
              </p>
              <p className="text-muted-foreground mt-4">
                The paid license is a one-time payment of $7.99 USD (or equivalent in your local
                currency) that grants you access to the full functionality of the Software,
                including the ability to download, install, and receive updates for as long as the
                Software remains available. This license does not guarantee indefinite support,
                maintenance, or availability of the Software.
              </p>
              <p className="text-muted-foreground mt-4">
                Paddle acts as the Merchant of Record for all purchases, handling payment
                processing, tax collection, and refunds on our behalf.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">5. Refunds</h2>
              <p className="text-muted-foreground">
                Refund eligibility and processing are determined by Paddle in accordance with
                Paddle&apos;s refund policy. As Paddle acts as the Merchant of Record, all refund
                requests are subject to Paddle&apos;s terms and conditions. For more information,
                please see our{" "}
                <Link href="/refund-policy" className="text-product hover:underline">
                  Refund Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">6. Restrictions</h2>
              <p className="text-muted-foreground">You may not:</p>
              <ul className="text-muted-foreground mt-4 list-disc space-y-2 pl-6">
                <li>Copy, modify, or distribute the Software</li>
                <li>Reverse engineer, decompile, or disassemble the Software</li>
                <li>Rent, lease, or lend the Software to third parties</li>
                <li>Use the Software for any unlawful purpose</li>
                <li>Remove or alter any proprietary notices on the Software</li>
                <li>Share, transfer, or resell your license key to others</li>
                <li>Use automated tools to bypass license verification</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">7. Intellectual Property</h2>
              <p className="text-muted-foreground">
                Snappit and all associated intellectual property rights are owned by individual
                entrepreneur Anton Tiurin. This includes but is not limited to the software code,
                design, graphics, logos, and documentation. Nothing in these Terms grants you any
                rights to our intellectual property except the limited license described above.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">8. Privacy</h2>
              <p className="text-muted-foreground">
                Your privacy is important to us. Please review our{" "}
                <Link href="/privacy" className="text-product hover:underline">
                  Privacy Policy
                </Link>{" "}
                to understand how we collect, use, and protect your information. By using the
                Software, you consent to the practices described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">9. Updates and Modifications</h2>
              <p className="text-muted-foreground">
                We may update the Software from time to time to add new features, fix bugs, or
                improve performance. Your paid license includes access to updates for as long as the
                Software is actively maintained.
              </p>
              <p className="text-muted-foreground mt-4">
                We reserve the right to modify these Terms at any time. We will notify you of
                significant changes by updating the &quot;Last updated&quot; date. Continued use of
                the Software after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">10. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground">
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR
                A PARTICULAR PURPOSE, AND NONINFRINGEMENT.
              </p>
              <p className="text-muted-foreground mt-4">
                We do not warrant that the Software will be error-free, uninterrupted, or free of
                harmful components. You use the Software at your own risk.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">11. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE DEVELOPER BE LIABLE
                FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
                WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, OR GOODWILL.
              </p>
              <p className="text-muted-foreground mt-4">
                Our total liability to you for any claims arising from your use of the Software
                shall not exceed the amount you paid for the license.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">12. Termination</h2>
              <p className="text-muted-foreground">
                We may terminate or suspend your license immediately if you breach these Terms. Upon
                termination, you must cease all use of the Software and delete all copies from your
                devices.
              </p>
              <p className="text-muted-foreground mt-4">
                Sections regarding intellectual property, disclaimers, limitations of liability, and
                governing law shall survive termination.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">13. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the
                country of Georgia (Sakartvelo). Any disputes arising from these Terms or your use
                of the Software shall be subject to the exclusive jurisdiction of the courts of
                Georgia.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">14. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at:
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
