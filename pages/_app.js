import "./globals.css";

// この default export は、新たに作成した `pages/_app.js` で必要になります。
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
