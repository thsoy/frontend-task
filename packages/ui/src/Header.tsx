import {
  HeaderContainer,
  HeaderLeftContainer,
  HeaderTitleContainer,
} from "./Header.styled";
import Icon, { IconType } from "./Icon";

export default function Header({
  icon,
  title,
  handleBack,
}: {
  title: string;
  icon?: IconType;
  handleBack?: () => void;
}) {
  return (
    <HeaderContainer>
      {icon && (
        <HeaderLeftContainer onClick={handleBack}>
          <Icon icon={icon} />
        </HeaderLeftContainer>
      )}
      <HeaderTitleContainer>{title}</HeaderTitleContainer>
    </HeaderContainer>
  );
}
