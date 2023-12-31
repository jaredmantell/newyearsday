import '../components/CustomCursor/style.scss';
import '../components/TogglerStyles.css';


function MyApp({ Component, pageProps }) {
  return (
    <div className="m-0 p-0 min-h-screen min-w-full">
      <Component {...pageProps} />
    </div>
  );
}


export default MyApp;