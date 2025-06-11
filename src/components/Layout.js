import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title = "The Redwoods", children }) {
  return (
    <>
      <Head>
        <title>{`${title} · The Redwoods Wine Lounge`}</title>
        <meta name="description" content="An intimate wine lounge inspired by Northern California's redwood groves." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-redwood-700 text-redwood-50 text-sm text-center py-4">
          © {new Date().getFullYear()} The Redwoods · 123 Main St · Sonoma County, CA
        </footer>
      </div>
    </>
  );
}