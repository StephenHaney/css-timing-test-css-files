import "../styles/globals.css";
import dynamic from "next/dynamic";

const RuntimeStyleInjection = dynamic(
  () => import("../components/RuntimeStyleInjection"),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RuntimeStyleInjection />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
