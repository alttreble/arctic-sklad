# Component

Components must follow a standard template

```sveltehtml
<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import getThemeContext from "../styles/getThemeContext";

  const theme = getThemeContext();
  const { defaultProps, styleOverrides } = theme.components.Component;

  let _class = "";
  export { _class as class };
  export let element: ComponentProps["element"] = defaultProps.element;

</script>

<svelte:element
  this={element}
  class={twMerge(
    /* root classes */,
    styleOverrides.root,
    _class
  )}>
  <slot />
</svelte:element>
```

Types for the component theming should be added to `types/index.ts` as well as default theme values to `styles/createTheme.ts`
