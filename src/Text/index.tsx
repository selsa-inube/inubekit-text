import { StyledText } from "./styles";

import { Alignment, HtmlElement, Size, Type, Appearance } from "./props";

export interface ITextProps {
  children?: React.ReactNode;
  textAlign?: Alignment;
  margin?: string;
  padding?: string;
  as?: HtmlElement;
  appearance?: Appearance;
  disabled?: boolean;
  type?: Type;
  size?: Size;
  cursorHover?: boolean;
  parentHover?: boolean;
  ellipsis?: boolean;
}

const Text = (props: ITextProps) => {
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
