"use client";

import { useState } from "react";
import SignUpPanel from "@/components/SignUpPanel";
import SuccessPanel from "@/components/SuccessPanel";

export default function NewsletterCard() {
  const [subscribedEmail, setSubscribedEmail] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  function handleDismiss() {
    setSubscribedEmail(null);
    setDismissed(true);
  }

  if (subscribedEmail !== null) {
    return <SuccessPanel email={subscribedEmail} onDismiss={handleDismiss} />;
  }

  return (
    <SignUpPanel onSubscribe={setSubscribedEmail} focusHeading={dismissed} />
  );
}
