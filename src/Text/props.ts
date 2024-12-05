const alignments = ["start", "center", "end", "justify"] as const;
const appearances = [
  "primary",
  "success",
  "warning",
  "danger",
  "help",
  "dark",
  "gray",
  "light",
] as const;
const htmlElements = [
  "blockquote",
  "figcaption",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "legend",
  "p",
  "span",
] as const;
const sizes = ["large", "medium", "small"] as const;
const types = ["body", "display", "headline", "label", "title"] as const;
const weights = ["normal", "bold"] as const;

type ITextAlignment = (typeof alignments)[number];
type ITextAppearance = (typeof appearances)[number];
type ITextHTMLElement = (typeof htmlElements)[number];
type ITextSize = (typeof sizes)[number];
type ITextType = (typeof types)[number];
type ITextWeight = (typeof weights)[number];

const parameters = {
  docs: {
    description: {
      component:
        "The Text component that allows the use of typographic tokens decoupled from HTML text tags such as h1, h2, ..., p, span, legend, figcaption, blockquote",
    },
  },
};

const props = {
  appearance: {
    options: appearances,
    control: { type: "select" },
    description:
      "This prop is used to select one of the color system tokens of the role Text as defined in the Foundations.",
    table: {
      defaultValue: { summary: "dark" },
    },
  },
  as: {
    options: htmlElements,
    control: { type: "select" },
    description:
      "This prop allows us to control the tag that we will inject in the DOM.",
    table: {
      defaultValue: { summary: "<p>" },
    },
  },
  children: {
    description:
      "This prop allows the component to get and print text on the screen.",
  },
  cursorHover: {
    description:
      "(boolean): prop to allow the text to use the hover modifier you find in color.text tokens and activate the cursor: pointer CSS property.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  disabled: {
    description:
      "(boolean): Add the “disabled” prop, which will control if the text should display a disabled state. For this you can make use of the disabled modifiers you find in the color.text tokens.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  ellipsis: {
    description:
      "(boolean): Add the ellipsis prop to control that the text cannot overflow or resize the parent. Instead, the text will be shown as much as possible in the available space and the rest of it will be replaced with an ellipsis. To make this work you must use the overflow, white-space and text-overflow CSS properties.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  margin: {
    description:
      "Sets the margin in px or global values for all four sides of the component.",
    table: {
      defaultValue: { summary: "0px" },
    },
  },
  padding: {
    description:
      "Sets the padding in px or global values for all four sides of the component.",
    table: {
      defaultValue: { summary: "0px" },
    },
  },
  parentHover: {
    description:
      "(boolean): prop to force the text to always appear in its hover state. This works when the parent is being hovered (not the text), but the parent must display as if all the component is.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  onClick: {
    description:
      "This prop allows us to control what happens when the component is clicked.",
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description:
      "This prop is used to select one of the typography roles defined in the Foundations.",
  },
  textAlign: {
    options: alignments,
    control: { type: "select" },
    description: "This prop controls the text-align style property.",
    table: {
      defaultValue: { summary: "start" },
    },
  },
  type: {
    options: types,
    control: { type: "select" },
    description:
      "This prop is used to select one of the typography roles defined in the Foundations.",
    table: {
      defaultValue: { summary: "bodyLarge" },
    },
  },
  weight: {
    options: weights,
    control: { type: "select" },
    description:
      "This prop is used to select one of the typography roles defined in the Foundations.",
    table: {
      defaultValue: { summary: "normal" },
    },
  },
};

export { props, parameters };
export type {
  ITextAlignment,
  ITextAppearance,
  ITextHTMLElement,
  ITextSize,
  ITextType,
  ITextWeight,
};
