import * as FaIcons from "react-icons/fa";
import * as TiIcons from "react-icons/ti";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import type { IconType } from "react-icons";

const ICON_PACKS = {
  ...FaIcons,
  ...TiIcons,
  ...MdIcons,
  ...GiIcons
};

type IconName = keyof typeof ICON_PACKS;

interface DynamicIconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export default function DynamicIcon({ name, size = 24, color }: DynamicIconProps) {
  const Icon = ICON_PACKS[name] as IconType | undefined;

  if (!Icon) return <span>❓</span>;

  return <Icon size={size} color={color} />;
}
