import {
  ChartNoAxesColumnIncreasingIcon,
  CodeIcon,
  ComputerIcon,
  ContainerIcon,
  DatabaseIcon,
  FocusIcon,
  GlobeIcon,
  ImageIcon,
  LayoutGridIcon,
  LockIcon,
  type LucideIcon,
  MessageCircleIcon,
  ShieldIcon,
  SquareChartGanttIcon,
  TerminalIcon,
  VideoIcon,
  WrenchIcon,
} from "lucide-react";
import type { CategoriesType } from "@/content/categories";
import type { PlatformType } from "@/content/platforms";
import { AndroidIcon } from "../icons/android";
import { IosIcon } from "../icons/ios";
import { LinuxIcon } from "../icons/linux";
import { MacIcon } from "../icons/mac";
import { WindowsIcon } from "../icons/windows";

interface IconProps extends React.ComponentProps<LucideIcon> {
  /**
   * The icon data to display
   */
  data: CategoriesType | PlatformType;
}

const ICONS: Record<
  CategoriesType | PlatformType | "all",
  LucideIcon | React.FC<React.ComponentProps<"svg">>
> = {
  all: LayoutGridIcon,
  productivity: ChartNoAxesColumnIncreasingIcon,
  security: ShieldIcon,
  communication: MessageCircleIcon,
  development: CodeIcon,
  "code-editor": SquareChartGanttIcon,
  database: DatabaseIcon,
  browser: GlobeIcon,
  recording: FocusIcon,
  "video-player": VideoIcon,
  "photo-editor": ImageIcon,
  "password-manager": LockIcon,
  terminal: TerminalIcon,
  docker: ContainerIcon,
  "mac-utility": ComputerIcon,
  network: GlobeIcon,
  utility: WrenchIcon,
  screenshot: ImageIcon,
  mac: MacIcon,
  windows: WindowsIcon,
  linux: LinuxIcon,
  ios: IosIcon,
  android: AndroidIcon,
};

export const Icon = (props: IconProps) => {
  const { data, ...rest } = props;

  const Icon = ICONS[data];

  return <Icon {...rest} />;
};
