import { AppProps } from "next/app";
import "./pages.css";
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
