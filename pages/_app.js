import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import Head from "next/head";

// Custom theme with Poppins
const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
              <title>Gradia | AI Powered Learning</title>
        <meta
          name="description"
          content="Gradia is your AI-powered platform for organized learning and smart study tools."
        />
        <link rel="icon" href="/image.png" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
