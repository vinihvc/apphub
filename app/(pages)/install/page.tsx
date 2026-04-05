import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/primitives/card";
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/cn";

export const revalidate = false;
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How to install package managers",
  description:
    "Set up Homebrew on macOS, winget on Windows, or use apt on Debian and Ubuntu so AppHub install commands work on your system.",
  openGraph: {
    title: `How to install package managers - ${SITE_CONFIG.name}`,
    description:
      "Set up Homebrew, winget, or apt to use AppHub’s one-click install commands.",
  },
};

const codeBlockClass =
  "overflow-x-auto rounded-md border border-border bg-code p-4 font-mono text-code-foreground text-sm";

const DocLink = ({ children, href }: { href: string; children: ReactNode }) => (
  <a
    className="text-primary underline-offset-4 hover:underline"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

const InstallPage = () => {
  return (
    <main className="container max-w-3xl gap-8 py-32">
      <div className="mb-10 space-y-4">
        <h1 className="font-semibold text-3xl tracking-tight">
          How to install package managers
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Copy-to-clipboard commands on {SITE_CONFIG.name} use{" "}
          <strong className="text-foreground">Homebrew</strong> (macOS),{" "}
          <strong className="text-foreground">winget</strong> (Windows), or{" "}
          <strong className="text-foreground">apt</strong> (Debian/Ubuntu). Set
          up the tool for your platform using the official steps below. Official
          references: <DocLink href="https://brew.sh">Homebrew</DocLink>,{" "}
          <DocLink href="https://learn.microsoft.com/en-us/windows/package-manager/winget/">
            winget
          </DocLink>
          , and{" "}
          <DocLink href="https://wiki.debian.org/Apt">
            Debian wiki (apt)
          </DocLink>
          .
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <h2 className="font-semibold text-xl leading-none">
              macOS — Homebrew
            </h2>
            <CardDescription>
              Homebrew is the missing package manager for macOS. App install
              lines here use <span className="text-foreground">casks</span> (
              <code className="rounded-md bg-muted px-1 py-0.5 font-mono text-xs">
                brew install --cask …
              </code>
              ).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Run the official install script from the{" "}
              <DocLink href="https://brew.sh">Homebrew homepage</DocLink>. It
              explains any extra steps for your Mac model.
            </p>
            <pre
              className={cn(codeBlockClass, "whitespace-pre-wrap break-all")}
            >
              {`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}
            </pre>
            <p className="text-muted-foreground text-sm leading-relaxed">
              On Apple Silicon, the installer may print “Next steps” to add
              Homebrew to your <code className="font-mono text-xs">PATH</code>.
              Follow those lines if{" "}
              <code className="font-mono text-xs">brew</code> is not found in a
              new terminal.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="font-semibold text-xl leading-none">
              Windows — winget
            </h2>
            <CardDescription>
              Windows Package Manager (winget) is how install commands are built
              for Windows on this site.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              On <strong className="text-foreground">Windows 11</strong>, winget
              is usually available already. Open PowerShell or Command Prompt
              and run:
            </p>
            <pre className={codeBlockClass}>winget --version</pre>
            <p className="text-muted-foreground text-sm leading-relaxed">
              On <strong className="text-foreground">Windows 10</strong>,
              install the latest{" "}
              <DocLink href="https://apps.microsoft.com/detail/9nblggh4nns1">
                App Installer
              </DocLink>{" "}
              from the Microsoft Store, or follow Microsoft’s{" "}
              <DocLink href="https://learn.microsoft.com/en-us/windows/package-manager/winget/">
                winget documentation
              </DocLink>{" "}
              for other options. If the command is not recognized, see{" "}
              <DocLink href="https://learn.microsoft.com/en-us/windows/package-manager/troubleshooting">
                winget troubleshooting
              </DocLink>
              .
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="font-semibold text-xl leading-none">Linux — apt</h2>
            <CardDescription>
              Debian and Ubuntu ship with apt. You typically do not install apt
              separately like Homebrew.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              AppHub assumes{" "}
              <strong className="text-foreground">Debian/Ubuntu</strong>
              -style package names. Refresh your package index before installing
              software:
            </p>
            <pre className={codeBlockClass}>sudo apt update</pre>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Optionally upgrade installed packages with{" "}
              <code className="rounded-md bg-muted px-1 py-0.5 font-mono text-xs">
                sudo apt upgrade
              </code>
              . If you use Fedora, Arch, or another distribution, use that
              distro’s package manager instead, or use{" "}
              <DocLink href="https://learn.microsoft.com/en-us/windows/wsl/install">
                WSL
              </DocLink>{" "}
              with Ubuntu to run the same{" "}
              <code className="rounded-md bg-muted px-1 py-0.5 font-mono text-xs">
                apt install …
              </code>{" "}
              commands as on this site.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default InstallPage;
