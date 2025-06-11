import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-10 text-center">
      <h2 className="text-4xl font-bold text-redwood-700">A Sonoma Grove in a Glass</h2>
      <p className="max-w-xl mx-auto text-lg text-redwood-500">
        Step into an intimate lounge where live‑edge bars, forest‑green accents, and a curated wine list transport you straight to the misty redwoods of Northern California.
      </p>
      <div className="relative w-full h-80 rounded shadow overflow-hidden">
        <Image src="/hero.jpg" alt="The Redwoods bar interior" fill priority className="object-cover" />
      </div>
      <div className="space-x-4">
        <Link href="/grove" className="px-4 py-2 bg-goldaccent text-redwood-50 rounded hover:bg-goldaccent/80 transition">Book The Grove</Link>
        <Link href="/about" className="px-4 py-2 border border-redwood-700 rounded text-redwood-700 hover:bg-redwood-100 transition">Learn More</Link>
      </div>
    </section>
  );
}
