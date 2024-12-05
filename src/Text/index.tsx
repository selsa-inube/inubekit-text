import { StyledText } from "./styles";

import {
  ITextAlignment,
  ITextAppearance,
  ITextHTMLElement,
  ITextSize,
  ITextType,
  ITextWeight,
} from "./props";

interface IText {
  children?: React.ReactNode;
  appearance?: ITextAppearance;
  as?: ITextHTMLElement;
  type?: ITextType;
  size?: ITextSize;
  weight?: ITextWeight;
  margin?: string;
  padding?: string;
  textAlign?: ITextAlignment;
  ellipsis?: boolean;
  disabled?: boolean;
  onClick?: (event: Event) => void;
  parentHover?: boolean;
  cursorHover?: boolean;
}

const Text = (props: IText) => {
  const {
    children,
    appearance = "dark",
    as = "p",
    type = "body",
    size = "large",
    weight = "normal",
    margin = "0px",
    padding = "0px",
    textAlign = "start",
    ellipsis = false,
    disabled = false,
    onClick,
    parentHover = false,
    cursorHover = false,
  } = props;

  function handleClick(event: Event) {
    if (disabled) return;
    try {
      onClick && onClick(event);
    } catch (error) {
      console.error(`Error when clicking over select. ${error}`);
    }
  }

  return (
    <StyledText
      as={as}
      $appearance={appearance}
      $cursorHover={cursorHover}
      $disabled={disabled}
      $ellipsis={ellipsis}
      $margin={margin}
      $padding={padding}
      $parentHover={parentHover}
      onClick={handleClick}
      $size={size}
      $textAlign={textAlign}
      $type={type}
      $weight={weight}
    >
      {children}
    </StyledText>
  );
};

export { Text };
export type { IText };
