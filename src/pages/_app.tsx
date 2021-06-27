import { AppProps } from "next/dist/next-server/lib/router/router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";
import "../styles/swipe.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
