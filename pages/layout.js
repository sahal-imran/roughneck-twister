import Appbar from "../components/Headers/Appbar";


// MUI Theme customize
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      big: 1400,
      xl: 1550,
      xxl: 1700,
    },
  },
});

export default function Layout({ children }) {
  return (
    <>
    <ThemeProvider theme={theme} >
      <Appbar />
      <main>{children}</main>
    </ThemeProvider>
    </>
  )
}