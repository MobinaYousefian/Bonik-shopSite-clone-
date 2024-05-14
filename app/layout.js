import "./globals.css";
// import '../section/home/flashDeal/FlashDeal.style.css'
// import '../section/home/slideShow/SlideShow.css'
import {ThemeProvider} from "@mui/material";
import Theme from "../theme/theme";
import {Head} from "@/components/header/Head";
import ReduxProvider from "@/redux/ReduxProvider";

export const metadata = {
  title: "Bonik (clone) - The Best React eCommerce Template",
  description: "Generated by create next app | (Daneshkar Project)",
};

export default function RootLayout({ children }) {
  return (
      <ThemeProvider theme={Theme}>
        <ReduxProvider>
            <html lang="en">
            <body>
            <Head/>
            {children}
            </body>
            </html>
        </ReduxProvider>
      </ThemeProvider>
  );
}
