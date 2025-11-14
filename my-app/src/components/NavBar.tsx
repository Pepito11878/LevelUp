"use client";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/Video", label: "Video" },
    { href: "/Channels", label: "Channels" },
    { href: "/FreeCoaching", label: "Free Coaching" },
    { href: "/AdvancedCoaching", label: "Advanced Coaching" },
  ];

  return (
    <header>
      <nav className="p-5 bg-[#1d1d1d]">
        <ul className="flex justify-between items-center">
          {/* Lien Home à gauche */}
          <li>
            <a href="/" className={`uppercase text-[#f5f6fa] ${pathname === "/" ? "active" : ""}`}>
              Home
            </a>
          </li>

          {/* Autres liens à droite */}
          <div className="flex gap-10">
            {links.slice(1).map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={`uppercase text-[#f5f6fa] ${pathname === href ? "active" : ""}`}>
                  {label}
                </a>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
};
