import Image from "next/image";
import Link from "next/link";

import { Footer, ThemeToggle } from "../components";

export const metadata = {
  title: "Refund Policy — Snappit",
  description: "Refund Policy for Snappit software.",
};

export default function RefundPolicyPage() {
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
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>

          <div className="space-y-6">
            <p className="text-muted-foreground">
              All payments for Snappit are processed through Paddle, which acts as the Merchant of
              Record. As such, refund eligibility and processing are determined by Paddle in
              accordance with Paddle&apos;s refund policy.
            </p>

            <p className="text-muted-foreground">
              Paddle&apos;s refund policy applies to all purchases made through their platform. For
              details on Paddle&apos;s refund terms, please refer to{" "}
              <a
                href="https://www.paddle.com/legal/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-product hover:underline"
              >
                Paddle&apos;s Terms of Service
              </a>
              .
            </p>

            <p className="text-muted-foreground">
              If you are unsure about purchasing, we encourage you to try the free trial version,
              which provides full functionality with a limit of 150 uses so you can evaluate whether
              Snappit meets your needs before making a purchase.
            </p>

            <p className="text-muted-foreground">
              If you experience technical issues or believe you were charged in error, please
              contact our support team at{" "}
              <a href="mailto:support@getsnappit.com" className="text-product hover:underline">
                support@getsnappit.com
              </a>{" "}
              and we assist you where appropriate.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
