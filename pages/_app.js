import "../styles/globals.css";
import '../styles/antd.less';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

/*********************************** Components Import ************************************/
import Header from "../components/Head/Head";
import Layout from "../components/Layout/Layout";

export default function App(props) {
  const { Component, pageProps } = props;
  useEffect(() => {
    console.log("soneeee")
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }
  , [])
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
