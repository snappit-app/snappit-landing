import Image from "next/image";
import Link from "next/link";

import { Footer } from "../components";
import { CheckoutClient } from "./CheckoutClient";

export const metadata = {
  title: "Snappit - Checkout",
  description: "Secure checkout for Snappit full license.",
};

export default function CheckoutPage() {
  const paddleEnv = process.env.PADDLE_ENV ?? "production";
  const paddleClientToken = process.env.PADDLE_CLIENT_TOKEN ?? "";
  const paddlePriceId = process.env.PADDLE_PRICE_ID_FULL_LICENSE ?? "";

  return (
    <main className="min-h-screen">
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

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <CheckoutClient
            paddleEnv={paddleEnv}
            paddleClientToken={paddleClientToken}
            paddlePriceId={paddlePriceId}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
