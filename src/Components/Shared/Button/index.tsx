import { IButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styles";

function Button({ icon, children, type: buttonType, onClick, active = false }: IButtonProps) {
  return (
    <StyledButton className={active ? "active" : ""} {...{ onClick, buttonType }}>
      {icon}
      {children}
    </StyledButton>
  );
}

export default Button;
