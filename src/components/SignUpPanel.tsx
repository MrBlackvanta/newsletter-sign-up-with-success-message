import { useEffect, useRef, useState } from "react";
import Illustration from "@/components/Illustration";
import { CheckIcon } from "@/components/icons";

const benefits = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

type SignUpPanelProps = {
  onSubscribe: (email: string) => void;
  focusHeading: boolean;
};

export default function SignUpPanel({
  onSubscribe,
  focusHeading,
}: SignUpPanelProps) {
  const [invalid, setInvalid] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (focusHeading) heading.current?.focus();
  }, [focusHeading]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setInvalid(true);
      return;
    }

    onSubscribe(String(new FormData(form).get("email")));
  }

  return (
    <div className="flex v-card flex-col gap-10 sm:max-w-152 sm:p-10 lg:grid lg:max-w-226 lg:grid-cols-[23.5rem_25rem] lg:gap-16 lg:px-8 lg:py-6">
      <div className="flex flex-col gap-6 px-6 pb-10 sm:px-0 sm:pb-0 lg:gap-8 lg:self-center">
        <h1
          ref={heading}
          tabIndex={-1}
          className="text-display-sm font-bold sm:text-display"
        >
          Stay updated!
        </h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="flex flex-col gap-2">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex gap-4">
              <span className="grid h-6 shrink-0 place-items-center">
                <CheckIcon className="text-red" />
              </span>
              {benefit}
            </li>
          ))}
        </ul>
        <form
          className="mt-4 flex flex-col gap-6 sm:mt-0"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between text-label font-bold">
              <label htmlFor="email">Email address</label>
              {invalid && (
                <p id="email-error" role="alert" className="text-error">
                  Valid email required
                </p>
              )}
            </div>
            <input
              className="v-field"
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="email@company.com"
              aria-invalid={invalid}
              aria-describedby={invalid ? "email-error" : undefined}
              onInput={() => setInvalid(false)}
            />
          </div>
          <button className="v-btn" type="submit">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <Illustration />
    </div>
  );
}
