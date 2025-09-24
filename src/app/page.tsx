import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-600 mb-8 font-cv">
          Anastasiia Balenko
        </h1>
        <p className="text-xl text-text-900 mb-12 font-cv">
          Frontend Developer Portfolio
        </p>
        <Link
          href="/cv"
          className="inline-block bg-brand-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-700 transition-colors duration-200 font-cv"
        >
          View My CV
        </Link>
      </div>
    </div>
  );
}
