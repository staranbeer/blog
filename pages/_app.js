import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="p-4 sm:p-8 max-w-3xl mx-auto">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
