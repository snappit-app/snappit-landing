import Link from "next/link";

const plans = [
  {
    name: "Trial",
    price: "Free",
    description: "Perfect for trying out Snappit",
    features: [
      "30 screen captures",
      "All tools included",
      "OCR text extraction",
      "QR code scanning",
      "Color picker",
    ],
    cta: "Download Free",
    href: "#download",
    featured: false,
  },
  {
    name: "Pro",
    price: "$7.99",
    period: "one-time",
    description: "Unlimited access forever",
    features: [
      "Unlimited captures",
      "All tools included",
      "2 devices per license",
      "Priority support",
      "Future updates",
      "Offline license",
    ],
    cta: "Get Pro License",
    href: "#",
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Simple pricing,
            <br />
            no surprises.
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Try for free, then pay once. No subscriptions, no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl ${
                plan.featured
                  ? "bg-foreground text-background ring-2 ring-primary"
                  : "bg-background"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm ${plan.featured ? "text-background/70" : "text-foreground-secondary"}`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-semibold">{plan.price}</span>
                {plan.period && (
                  <span
                    className={`text-sm ${plan.featured ? "text-background/70" : "text-foreground-secondary"} ml-2`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className={plan.featured ? "text-background/90" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block w-full text-center py-4 rounded-full font-medium transition-colors ${
                  plan.featured
                    ? "bg-primary text-white hover:bg-primary-hover"
                    : "bg-surface hover:bg-border text-foreground"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground-secondary text-sm mt-12">
          One license covers 2 devices. Contact support for additional activations.
        </p>
      </div>
    </section>
  );
}
