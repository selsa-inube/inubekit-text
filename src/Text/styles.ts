import styled from "styled-components";

import { inube } from "@inubekit/foundations";
import { ITextProps } from ".";

interface IStyledTextProps extends ITextProps {
  theme?: typeof inube;
}

const StyledText = styled.p<IStyledTextProps>`
  font-family: ${({ type, size, theme }) =>
    theme?.typography?.[type!]?.[size!]?.font ||
    inube.typography[type!][size!].font};
  line-height: ${({ type, size }) => inube.typography[type!][size!].lineHeight};
  font-size: ${({ type, size, theme }) =>
    theme?.typography?.[type!]?.[size!]?.size ||
    inube.typography[type!][size!].size};
  letter-spacing: ${({ type, size, theme }) =>
    theme?.typography?.[type!]?.[size!]?.tracking ||
    inube.typography[type!][size!].tracking};
  font-weight: ${({ type, size, theme }) =>
    theme?.typography?.[type!]?.[size!]?.weight ||
    inube.typography[type!][size!].weight};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ appearance, disabled, parentHover, theme }) => {
    if (disabled) {
      return (
        theme?.color?.text?.[appearance!]?.disabled ||
        inube.color.text[appearance!].disabled
      );
    }
    if (parentHover) {
      return (
        theme?.color?.text?.[appearance!]?.hover ||
        inube.color.text[appearance!].hover
      );
    }
    return (
      theme?.color?.text?.[appearance!]?.regular ||
      inube.color.text[appearance!].regular
    );
  }};

  white-space: ${({ ellipsis }) => ellipsis && "nowrap"};
  overflow: ${({ ellipsis }) => ellipsis && "hidden"};
  text-overflow: ${({ ellipsis }) => ellipsis && "ellipsis"};
  cursor: ${({ cursorHover, parentHover }) =>
    (cursorHover || parentHover) && "pointer"};

  &:hover {
    color: ${({ appearance, disabled, cursorHover, theme }) =>
      !disabled &&
      cursorHover &&
      (theme?.color?.text?.[appearance!]?.hover ||
        inube.color.text[appearance!].hover)};
  }
`;

export { StyledText };
