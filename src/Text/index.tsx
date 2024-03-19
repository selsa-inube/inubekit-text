import { StyledText } from "./styles";

import {
  ITextAlignment,
  ITextHtmlElement,
  ITextSize,
  ITextType,
  ITextAppearance,
} from "./props";

interface IText {
  children?: React.ReactNode;
  textAlign?: ITextAlignment;
  margin?: string;
  padding?: string;
  as?: ITextHtmlElement;
  appearance?: ITextAppearance;
  disabled?: boolean;
  type?: ITextType;
  size?: ITextSize;
  cursorHover?: boolean;
  parentHover?: boolean;
  ellipsis?: boolean;
}

const Text = (props: IText) => {
  const {
    children,
    textAlign = "start",
    margin = "0px",
    padding = "0px",
    as = "p",
    appearance = "dark",
    type = "body",
    size = "large",
    cursorHover = false,
    parentHover = false,
    ellipsis = false,
    disabled = false,
  } = props;

  return (
    <StyledText
      as={as}
      $textAlign={textAlign}
      $appearance={appearance}
      $type={type}
      $size={size}
      $margin={margin}
      $padding={padding}
      $cursorHover={cursorHover}
      $parentHover={parentHover}
      $ellipsis={ellipsis}
      $disabled={disabled}
    >
      {children}
    </StyledText>
  );
};

export { Text };
export type { IText };
