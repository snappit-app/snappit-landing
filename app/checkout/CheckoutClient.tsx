"use client";

import {
  type CheckoutOpenOptions,
  type Environments,
  initializePaddle,
  type Paddle,
} from "@paddle/paddle-js";
import { useEffect, useMemo, useRef, useState } from "react";

import { useTheme } from "../components";

interface CheckoutClientProps {
  paddleEnv: string;
  paddleClientToken: string;
  paddlePriceId: string;
}

const PADDLE_FRAME_TARGET_CLASS = "paddle-inline-checkout-frame";

function normalizePaddleEnv(value: string): Environments {
  return value.toLowerCase() === "production" ? "production" : "sandbox";
}

export function CheckoutClient(props: CheckoutClientProps) {
  const { theme } = useTheme();
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [isCheckoutCompleted, setIsCheckoutCompleted] = useState(false);
  const hasOpenedCheckout = useRef(false);
  const paddleRef = useRef<Paddle | null>(null);

  const env = useMemo(() => normalizePaddleEnv(props.paddleEnv), [props.paddleEnv]);

  useEffect(() => {
    if (!props.paddleClientToken || !props.paddlePriceId) {
      setCheckoutError(
        "Checkout is not configured. Set NEXT_PUBLIC_PADDLE_CLIENT_TOKEN and NEXT_PUBLIC_PADDLE_PRICE_ID_FULL_LICENSE.",
      );
      return;
    }

    if (hasOpenedCheckout.current) return;

    hasOpenedCheckout.current = true;
    setCheckoutError(null);

    const openCheckout = async () => {
      try {
        if (!paddleRef.current) {
          paddleRef.current =
            (await initializePaddle({
              environment: env,
              token: props.paddleClientToken,
              eventCallback: (event) => {
                if (event.name === "checkout.completed") {
                  setIsCheckoutCompleted(true);
                }
              },
            })) ?? null;
        }

        const paddle = paddleRef.current;
        if (!paddle) {
          setCheckoutError("Failed to load Paddle checkout.");
          hasOpenedCheckout.current = false;
          return;
        }

        if (env === "sandbox") {
          paddle.Environment.set("sandbox");
        }

        const queryParams = new URLSearchParams(window.location.search);
        const source = queryParams.get("source")?.trim().slice(0, 64) || "landing_checkout";
        const customerEmail = queryParams.get("email")?.trim().slice(0, 254) || "";
        const successUrl = `${window.location.origin}/checkout/success`;
        const checkoutOptions: CheckoutOpenOptions = {
          items: [{ priceId: props.paddlePriceId, quantity: 1 }],
          customData: { source },
          settings: {
            displayMode: "inline",
            frameTarget: PADDLE_FRAME_TARGET_CLASS,
            frameInitialHeight: 560,
            frameStyle:
              "width: 100%; min-width: 312px; border: none; background-color: transparent;",
            successUrl,
            theme,
          },
        };

        if (customerEmail) {
          checkoutOptions.customer = { email: customerEmail };
        }

        paddle.Checkout.open(checkoutOptions);
      } catch {
        setCheckoutError("Failed to load Paddle checkout.");
        hasOpenedCheckout.current = false;
      }
    };

    void openCheckout();

    return () => {
      paddleRef.current = null;
      hasOpenedCheckout.current = false;
    };
  }, [env, props.paddleClientToken, props.paddlePriceId, theme]);

  return (
    <div className="space-y-4">
      <div className="bg-card border-border rounded-2xl border p-5">
        <h2 className="text-xl font-semibold">Secure checkout</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Complete your payment below. You&apos;ll receive an activation code by email after
          successful payment processing.
        </p>
      </div>

      {checkoutError ? (
        <div className="bg-destructive/15 text-destructive rounded-xl border border-current px-4 py-3 text-sm">
          {checkoutError}
        </div>
      ) : null}

      {isCheckoutCompleted ? (
        <div className="rounded-xl border border-green-600/30 bg-green-500/10 px-4 py-3 text-sm text-green-700 dark:text-green-300">
          Payment completed. Redirecting to the confirmation page.
        </div>
      ) : null}

      <div className="bg-card border-border rounded-2xl border p-2">
        <div className={`${PADDLE_FRAME_TARGET_CLASS} min-h-[560px] w-full`} />
      </div>
    </div>
  );
}
