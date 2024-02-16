import { props, parameters } from "./props";
import { Text, ITextProps } from ".";

const story = {
  title: "data/Text",
  components: [Text],
  parameters,
  argTypes: props,
};

export const Default = (args: ITextProps) => {
  return <Text {...args}>{args.children}</Text>;
};

Default.args = {
  children: "Title with the Text component",
  as: "h1",
  textAlign: "start",
  margin: "20px 22px 23px 24px",
  padding: "5px",
  appearance: "dark",
  type: "body",
  size: "large",
  disabled: false,
  cursorHover: true,
  ellipsis: false,
  parentHover: false,
};

export default story;
