import { Text, IText } from ".";
import { parameters, props } from "./props";
import { action } from "@storybook/addon-actions";

const story = {
  title: "data/Text",
  components: [Text],
  parameters,
  argTypes: props,
};

const Default = (args: IText) => {
  return <Text {...args}>{args.children}</Text>;
};

Default.args = {
  appearance: "dark",
  as: "h1",
  children: "Title with the Text component",
  cursorHover: true,
  disabled: false,
  ellipsis: false,
  margin: "20px 22px 23px 24px",
  padding: "5px",
  parentHover: false,
  onClick: action("onClick"),
  size: "large",
  textAlign: "start",
  type: "body",
  weight: "normal",
};

export { Default };
export default story;
