export default function Illustration() {
  return (
    <picture className="order-first lg:order-0">
      <source
        media="(min-width: 64rem)"
        srcSet="/illustration-sign-up-desktop.svg"
        width={400}
        height={593}
      />
      <img
        className="w-full sm:aspect-528/358 sm:rounded-2xl sm:object-cover sm:object-[center_18%] lg:aspect-auto"
        src="/illustration-sign-up-mobile.svg"
        alt=""
        width={375}
        height={284}
        fetchPriority="high"
      />
    </picture>
  );
}
