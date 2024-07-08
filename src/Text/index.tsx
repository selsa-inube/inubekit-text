import { StyledText } from "./styles";

import {
  ITextAlignment,
  ITextAppearance,
  ITextHtmlElement,
  ITextSize,
  ITextType,
  ITextWeight,
} from "./props";

interface IText {
  appearance?: ITextAppearance;
  as?: ITextHtmlElement;
  children?: React.ReactNode;
  cursorHover?: boolean;
  disabled?: boolean;
  ellipsis?: boolean;
  margin?: string;
  padding?: string;
  parentHover?: boolean;
  size?: ITextSize;
  textAlign?: ITextAlignment;
  type?: ITextType;
  weight?: ITextWeight;
}

const Text = (props: IText) => {
  const {
    appearance = "dark",
    as = "p",
    children,
    cursorHover = false,
    disabled = false,
    ellipsis = false,
    margin = "0px",
    padding = "0px",
    parentHover = false,
    size = "large",
    textAlign = "start",
    type = "body",
    weight = "normal",
  } = props;

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
