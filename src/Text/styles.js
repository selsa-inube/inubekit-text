import styled from "styled-components";
import { tokens } from "./Tokens/tokens";
import { inube } from "@inubekit/foundations";

const StyledText = styled.p`
  font-family: ${({ theme, $type, $size }) =>
      theme?.typography?.[$type]?.[$size]?.font || "Roboto"},
    sans-serif;
  line-height: ${({ $type, $size }) =>
    inube.typography[$type][$size].lineHeight};
  font-size: ${({ $type, $size }) => inube.typography[$type][$size].size};
  letter-spacing: ${({ $type, $size }) =>
    inube.typography[$type][$size].tracking};
  font-weight: ${({ $weight }) => ($weight === "bold" ? 500 : 400)};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  text-align: ${({ $textAlign }) => $textAlign};
  color: ${({ theme, $appearance, $disabled, $parentHover }) => {
    if ($disabled) {
      return (
        theme?.text?.[$appearance]?.content?.color?.disabled ||
        tokens[$appearance].content.color.disabled
      );
    }
    if ($parentHover) {
      return (
        theme?.text?.[$appearance]?.content?.color?.hover ||
        tokens[$appearance].content.color.hover
      );
    }
    return (
      theme?.text?.[$appearance]?.content?.color?.regular ||
      tokens[$appearance].content.color.regular
    );
  }};

  white-space: ${({ $ellipsis }) => $ellipsis && "nowrap"};
  overflow: ${({ $ellipsis }) => $ellipsis && "hidden"};
  text-overflow: ${({ $ellipsis }) => $ellipsis && "ellipsis"};
  cursor: ${({ $cursorHover, $parentHover }) =>
    ($cursorHover || $parentHover) && "pointer"};

  &:hover {
    color: ${({ $appearance, $disabled, $cursorHover, theme }) =>
      !$disabled &&
      $cursorHover &&
      (theme?.text?.[$appearance]?.content?.color?.hover ||
        tokens[$appearance].content.color.hover)};
  }
`;

export { StyledText };
