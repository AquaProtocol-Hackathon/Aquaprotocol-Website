import Link from "next/link";

const SOCIAL_LINKS = {
  twitter: "https://twitter.com/inblockio",
  github: "https://github.com/inblockio",
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
};

const ATTRIBUTION_LINKS = {
  protocol: "https://aqua-protocol.org",
  inblock: "https://inblock.io",
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-[22px] font-semibold text-primary">
              Aqua Protocol
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Privacy-preserving data verification
            </p>
          </div>

          {/* Protocol */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-primary">Protocol</p>
            <ul className="space-y-3">
              <li><a href="https://aquaprotocol.mintlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-accent">Documentation</a></li>
              <li><a href="https://aquafier.inblock.io" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-accent">Aquafier</a></li>
              <li><a href="https://github.com/inblockio" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-accent">GitHub</a></li>
              <li><Link href="/tools" className="text-sm text-muted-foreground transition-colors hover:text-accent">Developer Tools</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-primary">Community</p>
            <ul className="space-y-3">
              <li><a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-accent">X (Twitter)</a></li>
              <li><a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-accent">GitHub</a></li>
              <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-accent">LinkedIn</a></li>
              <li><a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-accent">YouTube</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-primary">Contact</p>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-accent">Get in Touch</Link></li>
              <li><a href="mailto:info@inblock.io" className="text-sm text-muted-foreground transition-colors hover:text-accent">info@inblock.io</a></li>
              <li><a href="https://inblock.io" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-accent">InBlock.io</a></li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <hr className="my-12 border-border" />

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 Aqua Protocol. Open-source under GPL-3.0 & MIT licenses.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://aquaprotocol.mintlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-accent">
              Protocol Docs
            </a>
            <a href={ATTRIBUTION_LINKS.inblock} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-accent">
              By InBlock
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}