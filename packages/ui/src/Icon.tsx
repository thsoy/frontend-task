import { IconContainer } from "./Icon.styled";

export type IconType = "ArrowLeft" | "ArrowDown" | "ArrowRight" | "Close";

export default function Icon({
  icon,
  width,
  height,
  color,
}: {
  icon: IconType;
  width?: number;
  height?: number;
  color?: string;
}) {
  return (
    <IconContainer width={width} height={height} color={color}>
      <img src={`/static/icons/${icon}.png`} width={width} height={height} />
    </IconContainer>
  );
}
