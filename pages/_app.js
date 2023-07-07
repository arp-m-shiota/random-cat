import "./globals.css";
import { Layout } from "../components";

// この default export は、新たに作成した `pages/_app.js` で必要になります。
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
