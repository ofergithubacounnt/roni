import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-black rainbow-text mb-4">404</h1>
      <p className="text-xl text-ink-secondary mb-8">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-rainbow-blue text-white rounded-full font-bold hover:bg-blue-600 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
