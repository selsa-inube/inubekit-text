# Text

This library publishes the `<Text />` component.

## Installation

The library is publish in npm.

```bash
npm install @inubekit/text
```

## Dependencies

- **styled-components**: this library must be installed in your project in order to be able to use the component.

## Import

```jsx
import { Text } from "@inubekit/text";
```

## Props

### children

This prop lets you control the characters you want to render inside the component. It is recommended that you use this prop by typing the characters between the opening and closing tags of the component.

```jsx
import { Text } from "@inubekit/text";

function Example() {
  return <Text>Type here your text</Text>;
}
```

### appearance (optional)

Controls the color of the rendered text. This prop implements the `ITextAppearance` interface which controls that you can only use the following set of options:

1. `"primary" | "success" | "warning" | "danger" | "help" | "dark" | "gray" | "light"`
2. **default: "dark"**

Each option has a default color value implemented and exported from `@inubekit/foundations` to be used inside the styles of the component. Check the [personalization](#personalization) section to see how to change these defaults.

### as (optional)

If you want to change the element that is going to be inserted in the DOM, you can use the `as` prop.

This prop implements the `ITextHTMLElement`interface which lets you use the following set of options:

1. `"blockquote" | "figcaption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "legend" | "p" | "span"`.
2. **default: "p"**

### type (optional)

This component implements 5 types of texts, which enable text to have different roles within an interface. Possible options are implemented through the `ITextType` interface:

1. `"display" | "headline" | "title" | "body" | "label"`
2. **default: "body"**

Check the [personalization](#personalization) section to see how to change the CSS values that correspond to each type.

### size (optional)

Even though there are 5 types of texts, each type has three internal variants in size. This is useful particularly in responsive scenarios. Possible options are implemented through the `ITextSize` interface:

1. `"large" | "medium" | "small"`
2. **default: "large"**

Check the [personalization](#personalization) section to see how to change the CSS values that correspond to each type.

### weight (optional)

Controls the `font-weight` CSS property of the text. It receives numbers or strings that are suitable with the CSS property.

1. **default: "normal"**
2. You can explore the mapping between values and names in [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-weight#common_weight_name_mapping).
3. **IMPORTANT:** when you create the typography for the business unit, you must provide the URL to add the @font-face that corresponds with the font-weight you want to use in components like <Text />. This means that if you set here the value "bold" for your text, the @font-face should have defined how to create the bold variant for the business unit font-family. If you forget to do so, the browser will attempt to build by itself the variant, which may cause that the characters look different from what the author of the font intended. See more about this in [typography](#typography) personalization.

### margin (optional)

Lets you control the `margin` CSS property.

1. **default: "0px"**
2. You can pass any string value that is a valid margin CSS value.

### padding (optional)

Lets you control the `padding` CSS property.

1. **default: "0px"**
2. You can pass any string value that is a valid padding CSS value.

### textAlign (optional)

Lets you control the `text-align` CSS property.

1. **default: "start"**
2. You can pass any string value that is a valid text-align CSS value. Check possible options in [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align#values)

### ellipsis (optional)

Boolean prop that lets you control how to handle the text when it overflows its parent container. Behind the scenes, this is just the implementation of the `text-overflow` CSS property.

1. **default: false**
2. When `false`, the CSS property will use the "clip" variant, which causes the text to be truncated. See more in [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow#values)

### disabled (optional)

Each text [appearance](#appearance-optional) can have a status of `disabled`. This boolean prop lets you toggle that status.

1. **default: false**
2. See [personalization](#personalization) for more information about how to adjust the disabled styling per appearance variant.

### onClick (optional)

This prop gets a function that will be executed when the user click on the text (if the text is enabled). The function will get the click event as an argument when executed.

### cursorHover (optional)

Boolean prop that lets you enable a hover behavior for the text. This will change the cursor and color when the text is hovered. Its **default** value is `false`.

### parentHover (optional)

Sometimes the text belongs to a bigger component and we want to change the rendering of the text to a hover state even when the cursor is over the bigger component but not exactly over the text itself.

- **default**: `false`
- This behavior is common when that bigger component is a card. In that case we would like to change the text to its hover state when the cursor is over the card.
- Its usage means that the parent component of the text will have to intercept the hover on itself and then change the `parentHover` prop value to `true`.
- While `cursorHover` let's the text intercept the hover by the itself using its own CSS rules for that, `parentHover` is a controlled prop that forces the hover behavior on the text.

## Personalization

### Token structure

The tokens for this component follow the structure `business-unit.component.appearance.property.subproperty.modifier`.

### Properties

- **content**: used to control the color of the text.

### Tokens

You can check the list of tokens in [TOKENS.md](./TOKENS.md)

### Typography

By default, all components of inubekit are able to use "Roboto" as its fontface. If you want to change this in your app, you have to complete a two step process:

1. Install the new font-face you want to use (if such font-face is not pre-installed in the browser). This installation can be performed by the conventional method of adding link elements in your the index.html document of your app (compilation option) or by dinamically installing the font in runtime. For the second option, check the useFonts() hook exported from [@inubekit/hooks](https://www.npmjs.com/package/@inubekit/hooks).
2. After installing the font-faces, you can then use them consistently in the whole app. For that, you must edit the typography tokens in the client token structure so that instead of using "Roboto" you can apply the new font. To see the structure of typography tokens you can check [@inubekit/foundations](https://www.npmjs.com/package/@inubekit/foundations). If you change the typography token values, the `<Text />` component will automatically use them to render texts. The same will happen to the rest of components that use the typography tokens as well in their styles definitions.

```js
businessUnit = {
  typography: {
    // .. structure defined in @inubekit/foundations
  },
};
```

### Changing tokens

You can change the presentation of the component by adjusting its tokens. This modification has the next constraints:

1. You must use the current token structure, since the component styling relies on that data structure to get the values.
2. Color tokens rely on the palette token structure. This means that the business unit should already have a set of colors defined as a palette and those colors serve as options to be assigned here.

> 💡 To see more details about the palette token structure check **@ınubekit/foundations**.
