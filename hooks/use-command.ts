import type { AppType } from "@/content/apps";
import type { PlatformType } from "@/content/platforms";
import { usePlatform } from "@/context/platform";

const isHttpsUrl = (value: string | undefined): value is string =>
  typeof value === "string" && value.startsWith("https://");

const getMobileInstallUrl = (
  app: AppType,
  platform: PlatformType
): string | undefined => {
  if (platform !== "ios" && platform !== "android") {
    return undefined;
  }

  const storeUrl = app.command[platform];
  if (isHttpsUrl(storeUrl)) {
    return storeUrl;
  }
  if (isHttpsUrl(app.download)) {
    return app.download;
  }
  return undefined;
};

const getDesktopToken = (
  app: AppType,
  platform: PlatformType
): string | undefined => {
  if (platform === "ios" || platform === "android") {
    return undefined;
  }

  const token = app.command[platform as keyof AppType["command"]];
  if (typeof token !== "string" || token.length === 0) {
    return undefined;
  }
  return token;
};

export const useCommand = (data: AppType | AppType[]) => {
  const { platform } = usePlatform();

  const apps = Array.isArray(data) ? data : [data];

  if (platform === "ios" || platform === "android") {
    const urls = apps
      .map((app) => getMobileInstallUrl(app, platform))
      .filter((url): url is string => Boolean(url));

    if (urls.length === 0) {
      return "Sorry, we don't support this platform yet.";
    }

    return urls.join("\n");
  }

  const tokens = apps
    .map((app) => getDesktopToken(app, platform))
    .filter((token): token is string => Boolean(token));

  if (tokens.length === 0) {
    return "Sorry, we don't support this platform yet.";
  }

  if (platform === "mac") {
    return `brew install --cask ${tokens.join(" ")}`;
  }

  if (platform === "windows") {
    return tokens.map((id) => `winget install -e --id ${id}`).join(" && ");
  }

  if (platform === "linux") {
    return `apt install ${tokens.join(" ")}`;
  }

  return "Sorry, we don't support this platform yet.";
};
