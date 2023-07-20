import { fireEvent, render, screen } from "@testing-library/react";

import { Button } from "Components";
import { EmailIcon } from "Icons";

describe("Button Component", () => {

  
  test("renders button with correct text and icon", () => {
    const onClickMock = jest.fn();
    const buttonText = "Click Me";

    const { getByText, getByTestId } = render(
      <Button type="primary" onClick={onClickMock} icon={<EmailIcon data-testid="icon" />}>
        {buttonText}
      </Button>
    );

    expect(getByText(buttonText)).toBeInTheDocument();
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  test("fires onClick event when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button type="primary" onClick={onClickMock}>
        Click Me
      </Button>
    );

    fireEvent.click(getByText("Click Me"));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test("applies 'active' class when active prop is true", () => {
    const onClickMock = jest.fn();
    const { container, rerender } = render(
      <Button type="primary" onClick={onClickMock}>
        Click Me
      </Button>
    );

    expect(container.firstChild).not.toHaveClass("active");

    rerender(
      <Button type="primary" onClick={onClickMock} active={true}>
        Click Me
      </Button>
    );

    expect(container.firstChild).toHaveClass("active");
  });
});
