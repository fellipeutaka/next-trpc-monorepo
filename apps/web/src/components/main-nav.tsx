"use client";

import { Icons } from "@acme/ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "~/config/site";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center gap-2">
        <Icons.Logo className="size-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            data-active={pathname === link.href}
            className="text-foreground/60 transition-colors data-[active='true']:text-foreground hover:text-foreground/80"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
