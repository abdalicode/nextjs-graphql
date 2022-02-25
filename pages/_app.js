import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-lora">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
