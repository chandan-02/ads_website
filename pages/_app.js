import '../styles/globals.css'
import { MantineProvider } from '@mantine/core';

/*********************************** Components Import ************************************/
import Header from '../components/Head/Head';

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
          colorScheme: 'light',
          fontFamily: 'Lato'
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}