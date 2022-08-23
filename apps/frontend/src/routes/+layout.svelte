<script>
  import { createTheme } from "../lib/styles/createTheme";
  import setThemeContext from "../lib/styles/setThemeContext";
  import "../app.css"

  const theme = createTheme({});
  setThemeContext(theme);
</script>

<slot/>
