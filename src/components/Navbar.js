import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-redwood-700 text-goldaccent px-6 py-3 flex items-center justify-between shadow">
      <h1 className="text-xl tracking-widest">THE&nbsp;REDWOODS</h1>
      <ul className="space-x-6 hidden sm:flex">
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/grove", label: "The Grove" },
          { href: "/contact", label: "Contact" }
        ].map(link => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-goldaccent/70 transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}