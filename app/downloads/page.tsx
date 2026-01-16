import Image from "next/image";
import Link from "next/link";

import { Footer, ThemeToggle } from "../components";

export const metadata = {
  title: "Snappit - Downloads",
  description: "Download Snappit for macOS. Windows and Linux coming soon.",
};

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M3 5.548l7.116-0.971v6.873H3V5.548zm0 12.904l7.116 0.971v-6.873H3v5.902zm7.903 1.08L21 21v-8.45h-10.097v6.982zm0-14.064v6.982H21V3l-10.097 1.468z" />
    </svg>
  );
}

function LinuxIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.002c-.06-.135-.12-.2-.18-.264-.14-.135-.28-.135-.42-.2-.14-.066-.26-.2-.42-.266-.32-.2-.58-.135-.78-.135a.39.39 0 01-.18-.064c.07-.267.135-.535.06-.87-.08-.268-.15-.47-.35-.668-.39-.268-.78-.8-.91-.933-.23-.334-.42-.6-.68-.933-.12-.2-.23-.468-.28-.668-.14-.666-.11-1.338.08-2.004.06-.2.14-.4.24-.6.17.066.35.135.55.135.115 0 .22-.042.32-.198.04-.067.09-.135.1-.202.02-.135.01-.2-.03-.266-.06-.134-.14-.2-.24-.333-.1-.135-.23-.268-.37-.335-.11-.066-.21-.2-.33-.2-.09 0-.2.066-.31.2-.05.067-.11.135-.13.2-.03.066-.01.2.01.267-.09-.066-.18-.133-.28-.2l-.02.066zm2.24 2.677v-.002.002zm-7.047-.748c.06 0 .12.002.18.006.166.008.3.065.433.198.165.2.246.47.246.736 0 .2-.06.466-.24.67-.18.2-.4.265-.65.265-.22-.002-.41-.066-.55-.2-.17-.134-.25-.336-.29-.535-.04-.2-.03-.4 0-.6.04-.2.1-.334.23-.468.13-.133.28-.2.47-.202.05-.002.1-.003.15-.003v.133zm8.096 1.078c.02 0 .04 0 .05.002.12 0 .19.065.24.132.11.134.14.333.14.533 0 .2-.06.468-.17.667-.09.135-.2.2-.33.2h-.02c-.14-.002-.22-.066-.3-.133-.13-.135-.19-.335-.19-.468 0-.135.04-.266.09-.4.08-.266.18-.468.35-.534.04 0 .08-.002.12-.002l.02.003z" />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

interface DownloadItemProps {
  icon: React.ReactNode;
  filename: string;
  description: string;
  href?: string;
  disabled?: boolean;
}

function DownloadItem({ icon, filename, description, href, disabled }: DownloadItemProps) {
  const content = (
    <>
      <div className="flex items-center gap-4">
        <div className="text-muted-foreground">{icon}</div>
        <div>
          <p className="font-medium">{filename}</p>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
      {disabled ? (
        <span className="text-muted-foreground text-sm">Coming Soon</span>
      ) : (
        <DownloadIcon className="text-muted-foreground" />
      )}
    </>
  );

  if (disabled) {
    return (
      <div className="bg-card border-border flex cursor-not-allowed items-center justify-between rounded-xl border p-3 opacity-50">
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      className="bg-card border-border hover:border-foreground/20 hover:bg-muted/50 py- flex items-center justify-between rounded-xl border p-3 transition-colors"
    >
      {content}
    </a>
  );
}

export default function DownloadsPage() {
  return (
    <main className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Header */}
      <header className="border-border border-b px-4 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-128.png" alt="Snappit" width={32} height={32} />
            <span className="font-semibold">Snappit</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/#features"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      {/* Downloads Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Download Snappit</h1>
            <p className="text-muted-foreground text-lg">Choose your platform to get started.</p>
          </div>

          <div className="flex flex-col gap-3">
            <DownloadItem
              icon={<AppleIcon className="h-6 w-6" />}
              filename="snappit_mac_arm.dmg"
              description="macOS Apple Silicon"
              href="https://github.com/snappit-app/snappit/releases/latest/download/snappit_mac_arm.dmg"
            />
            <DownloadItem
              icon={<AppleIcon className="h-6 w-6" />}
              filename="snappit_mac_intel.dmg"
              description="macOS Intel"
              href="https://github.com/snappit-app/snappit/releases/latest/download/snappit_mac_intel.dmg"
            />
            <DownloadItem
              icon={<WindowsIcon className="h-6 w-6" />}
              filename="snappit_windows.exe"
              description="Windows 10/11"
              disabled
            />
            <DownloadItem
              icon={<LinuxIcon className="h-6 w-6" />}
              filename="snappit_linux.AppImage"
              description="Linux (Ubuntu, Fedora, etc.)"
              disabled
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
