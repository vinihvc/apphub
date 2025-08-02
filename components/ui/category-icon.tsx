import type { AvailableCategoryType } from '@/content/apps'
import {
  ChartNoAxesColumnIncreasing,
  Code,
  Computer,
  Container,
  Database,
  Globe,
  Image,
  Lock,
  type LucideIcon,
  MessageCircle,
  Shield,
  SquareChartGantt,
  Terminal,
  Video,
  Wrench,
} from 'lucide-react'

interface CategoryIconProps extends React.ComponentProps<LucideIcon> {
  /**
   * The category to display
   */
  data: AvailableCategoryType
}

const CATEGORY_ICONS: Record<AvailableCategoryType, LucideIcon> = {
  productivity: ChartNoAxesColumnIncreasing,
  security: Shield,
  communication: MessageCircle,
  development: Code,
  'code-editor': SquareChartGantt,
  database: Database,
  browser: Globe,
  recording: Video,
  'photo-editor': Image,
  'password-manager': Lock,
  terminal: Terminal,
  docker: Container,
  'mac-utility': Computer,
  network: Globe,
  utility: Wrench,
  screenshot: Image,
}

export const CategoryIcon = (props: CategoryIconProps) => {
  const { data, ...rest } = props

  const Icon = CATEGORY_ICONS[data]

  return <Icon {...rest} />
}
