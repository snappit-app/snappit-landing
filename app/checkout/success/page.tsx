import Image from "next/image";
import Link from "next/link";

import { Footer, ThemeToggle } from "@/app/components";

export const metadata = {
  title: "Snappit - Payment Complete",
  description: "Your Snappit payment is complete. Check your email for activation code.",
};

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

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

      <section className="px-4 py-20">
        <div className="mx-auto max-w-xl rounded-2xl border border-green-600/30 bg-green-500/10 p-8 text-center">
          <h1 className="text-2xl font-bold">Payment successful</h1>
          <p className="text-muted-foreground mt-3 text-sm">
            We&apos;ll send your activation code to the purchase email after payment processing is
            finalized.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/downloads"
              className="bg-product text-product-foreground hover:bg-product/90 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition-colors"
            >
              Download Snappit
            </Link>
            <Link
              href="/pricing"
              className="bg-muted text-foreground hover:bg-muted/80 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition-colors"
            >
              Back to pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
