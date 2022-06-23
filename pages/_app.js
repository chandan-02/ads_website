import "../styles/globals.css";
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';

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
