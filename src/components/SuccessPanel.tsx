import { SuccessIcon } from "@/components/icons";
import { useEffect, useRef } from "react";

type SuccessPanelProps = {
  email: string;
  onDismiss: () => void;
};

export default function SuccessPanel({ email, onDismiss }: SuccessPanelProps) {
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    heading.current?.focus();
  }, []);

  return (
    <div className="flex v-card flex-1 flex-col justify-between px-6 pt-36 pb-10 sm:max-w-126 sm:px-16 sm:py-15">
      <div className="flex flex-col gap-8">
        <SuccessIcon />
        <h1
          ref={heading}
          tabIndex={-1}
          className="text-display-sm font-bold sm:text-display"
        >
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to{" "}
          <strong className="wrap-break-word">{email}</strong>. Please open it
          and click the button inside to confirm your subscription.
        </p>
      </div>
      <button className="v-btn mt-8" type="button" onClick={onDismiss}>
        Dismiss message
      </button>
    </div>
  );
}
