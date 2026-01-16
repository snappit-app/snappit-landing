import Image from "next/image";
import Link from "next/link";

import { Footer, ThemeToggle } from "../components";

export const metadata = {
  title: "Snappit - Pricing",
  description:
    "Simple, transparent pricing for Snappit. Try free, then get a lifetime license for $7.99.",
};

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-product"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function PricingPage() {
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
            <Link href="/pricing" className="text-foreground text-sm font-medium transition-colors">
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Simple, transparent pricing
            </h1>
            <p className="text-muted-foreground text-lg">
              Try Snappit free. No credit card required.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Free Trial */}
            <div className="bg-card border-border rounded-2xl border p-8">
              <div className="mb-6">
                <h2 className="mb-2 text-xl font-semibold">Free Trial</h2>
                <p className="text-muted-foreground text-sm">Full access to all features</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground ml-2">to get started</span>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm">OCR text extraction (100+ languages)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm">Color picker (HEX, RGB, HSL, OKLCH)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm">Digital ruler for pixel-perfect measurements</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm">QR code scanner</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm">Customizable keyboard shortcuts</span>
                </li>
              </ul>
              <Link
                href="/downloads"
                className="bg-muted text-foreground hover:bg-muted/80 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-base font-medium transition-colors"
              >
                Download Free Trial
              </Link>
            </div>

            {/* Lifetime License */}
            <div className="bg-card border-product relative rounded-2xl border-2 p-8">
              <div className="bg-product text-product-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-medium">
                Best Value
              </div>
              <div className="mb-6">
                <h2 className="mb-2 text-xl font-semibold">Full License</h2>
                <p className="text-muted-foreground text-sm">One-time payment, no subscription</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$7.99</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm">Everything in Free Trial</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm">Full access to all features</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm">Updates while actively maintained</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm">Email support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm">Support independent development</span>
                </li>
              </ul>
              <a
                href="#buy"
                className="bg-product text-product-foreground hover:bg-product/90 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-base font-medium transition-colors"
              >
                Buy Full License
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-24">
            <h2 className="mb-8 text-center text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">What happens after the trial ends?</h3>
                <p className="text-muted-foreground text-sm">
                  The app will prompt you to purchase a license. Your settings and preferences are
                  saved, so you can continue right where you left off.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Do I need an internet connection?</h3>
                <p className="text-muted-foreground text-sm">
                  Snappit works entirely offline. An internet connection is only needed for license
                  activation and updates.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">How many devices can I use it on?</h3>
                <p className="text-muted-foreground text-sm">
                  Your license is valid for up to 3 personal devices. For team or enterprise use,
                  please contact us.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">What payment methods do you accept?</h3>
                <p className="text-muted-foreground text-sm">
                  We accept all major credit cards, PayPal, Apple Pay, and Google Pay through our
                  payment partner Paddle.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Is there a refund policy?</h3>
                <p className="text-muted-foreground text-sm">
                  Refunds are handled by Paddle, our payment processor, in accordance with their
                  refund policy. We offer a free trial so you can evaluate the app before buying.
                  See our{" "}
                  <Link href="/refund-policy" className="text-product hover:underline">
                    Refund Policy
                  </Link>{" "}
                  for details.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Will I get future updates?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! Your license includes access to updates for as long as the app is actively
                  maintained
                </p>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="border-border mt-16 border-t pt-12">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <div>
                <div className="text-muted-foreground mb-1 text-2xl font-bold">Free trial</div>
                <div className="text-muted-foreground text-sm">Try before you buy</div>
              </div>
              <div className="bg-border h-8 w-px" />
              <div>
                <div className="text-muted-foreground mb-1 text-2xl font-bold">100%</div>
                <div className="text-muted-foreground text-sm">Secure checkout</div>
              </div>
              <div className="bg-border h-8 w-px" />
              <div>
                <div className="text-muted-foreground mb-1 text-2xl font-bold">No subscription</div>
                <div className="text-muted-foreground text-sm">One-time payment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
