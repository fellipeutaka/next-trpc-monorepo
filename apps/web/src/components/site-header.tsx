import { Button } from "@acme/ui/button";
import { Icons } from "@acme/ui/icons";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { MainNav } from "./main-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-full max-w-screen-2xl items-center">
        <MainNav />
        <nav className="ml-auto hidden items-center gap-1 md:flex">
          <Button asChild variant="ghost" size="icon">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.GitHub className="size-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.Twitter className="size-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
