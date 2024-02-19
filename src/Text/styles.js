import styled from "styled-components";

import { inube } from "@inubekit/foundations";

import { typography } from "./typography";

export const StyledText = styled.p`
  font-family: ${({ theme }) => theme?.font || "Roboto"};
  line-height: ${({ $type, $size }) => typography[$type][$size].lineHeight};
  font-size: ${({ $type, $size }) => typography[$type][$size].size};
  letter-spacing: ${({ $type, $size }) => typography[$type][$size].tracking};
  font-weight: ${({ $type, $size }) => typography[$type][$size].weight};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  text-align: ${({ $textAlign }) => $textAlign};
  color: ${({ theme, $appearance, $disabled, $parentHover }) => {
    if ($disabled) {
      return (
        theme?.text?.[$appearance]?.content?.color?.disabled ||
        inube.text[$appearance].content.color.disabled
      );
    }
    if ($parentHover) {
      return (
        theme?.text?.[$appearance]?.content?.color?.hover ||
        inube.text[$appearance].content.color.hover
      );
    }
    return (
      theme?.text?.[$appearance]?.content?.color?.regular ||
      inube.text[$appearance].content.color.regular
    );
  }};

  white-space: ${({ $ellipsis }) => $ellipsis && "nowrap"};
  overflow: ${({ $ellipsis }) => $ellipsis && "hidden"};
  text-overflow: ${({ $ellipsis }) => $ellipsis && "ellipsis"};
  cursor: ${({ $cursorHover, $parentHover }) =>
    ($cursorHover || $parentHover) && "pointer"};

  &:hover {
    color: ${({ $appearance, $disabled, $cursorHover, theme }) =>
      $disabled &&
      $cursorHover &&
      (theme?.text?.[$appearance]?.content?.color?.hover ||
        inube.text[$appearance].content.color.hover)};
  }
`;
