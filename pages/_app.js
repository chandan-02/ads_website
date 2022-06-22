import "../styles/globals.css";
import 'antd/dist/antd.css';
import { MantineProvider } from "@mantine/core";

/*********************************** Components Import ************************************/
import Header from "../components/Head/Head";
import Layout from "../components/Layout/Layout";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Header />

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          fontFamily: "Lato",
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
