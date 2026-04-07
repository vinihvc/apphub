"use client";

import React from "react";
import type { PlatformType } from "@/content/platforms";
import { getPlatformFromClient } from "@/lib/platform";

interface PlatformContextType {
  /**
   * Whether the user is on an Android device
   */
  isAndroid: boolean;
  /**
   * Whether the user is on an iOS device
   */
  isIos: boolean;
  /**
   * Whether the user is on a Linux device
   */
  isLinux: boolean;
  /**
   * Whether the user is on a Mac device
   */
  isMac: boolean;
  /**
   * Whether the user is on a Windows platform
   */
  isWindows: boolean;
  /**
   * The platform of the user
   */
  platform: PlatformType;
  /**
   * Set the platform of the user
   */
  setPlatform: (platform: PlatformType) => void;
}

const PlatformContext = React.createContext({} as PlatformContextType);

export interface PlatformProviderProps extends React.PropsWithChildren {
  /**
   * The initial data to use for the platform
   */
  initialData: {
    /**
     * The platform of the user
     */
    platform: PlatformType;
  };
}

export const PlatformProvider = (props: PlatformProviderProps) => {
  const { initialData, children } = props;

  const [platform, setPlatform] = React.useState<PlatformType>(
    initialData.platform
  );

  React.useEffect(() => {
    const { platform: clientPlatform } = getPlatformFromClient();
    setPlatform(clientPlatform);
  }, []);

  const isWindows = platform === "windows";
  const isMac = platform === "mac";
  const isLinux = platform === "linux";
  const isIos = platform === "ios";
  const isAndroid = platform === "android";

  return (
    <PlatformContext.Provider
      value={{
        platform,
        isWindows,
        isMac,
        isLinux,
        isIos,
        isAndroid,
        setPlatform,
      }}
    >
      {children}
    </PlatformContext.Provider>
  );
};

export const usePlatform = () => {
  const context = React.useContext(PlatformContext);

  if (!context) {
    throw new Error("usePlatform must be used within an PlatformProvider");
  }

  return context;
};
