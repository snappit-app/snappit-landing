import Image from "next/image";
import Link from "next/link";

import { Footer, ThemeToggle } from "../components";

export const metadata = {
  title: "Refund Policy — Snappit",
  description: "Refund Policy for Snappit software.",
};

export default function RefundPolicyPage() {
  const lastUpdated = "January 19, 2026";

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
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>

          <div className="space-y-8">
            <section>
              <p className="text-muted-foreground">
                All payments for Snappit are processed through Paddle, which acts as the Merchant of
                Record. This refund policy is in accordance with{" "}
                <a
                  href="https://www.paddle.com/legal/checkout-buyer-terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-product hover:underline"
                >
                  Paddle&apos;s Checkout Buyer Terms
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">1. Minimum 14-Day Refund Policy</h2>
              <p className="text-muted-foreground">
                In accordance with Paddle&apos;s Checkout Buyer Terms, all purchases of Snappit are
                covered by a minimum 14-day refund policy. Customers may request a refund within at
                least 14 days from the date of purchase.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">2. How to Request a Refund</h2>
              <p className="text-muted-foreground">
                To request a refund, please use Paddle&apos;s Order Support at{" "}
                <a
                  href="https://paddle.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-product hover:underline"
                >
                  paddle.net
                </a>
                . Refunds will be processed using the same payment method used for the original
                purchase.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">3. Refund Processing</h2>
              <p className="text-muted-foreground">
                Once your refund request is approved, Paddle will process the reimbursement in
                accordance with their Buyer Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">4. Limitations</h2>
              <p className="text-muted-foreground">
                Refund requests may be refused in cases of fraud, refund abuse, or other
                manipulative behavior, in line with Paddle&apos;s policies.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">5. Try Before You Buy</h2>
              <p className="text-muted-foreground">
                If you are unsure about purchasing, we encourage you to try the free trial version,
                which provides full functionality with a limit of 150 uses so you can evaluate
                whether Snappit meets your needs before making a purchase.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this refund policy or need assistance, please
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
