import "../styles/globals.css";
import '../styles/antd.less';

/*********************************** Components Import ************************************/
import Header from "../components/Head/Head";
import Layout from "../components/Layout/Layout";

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
