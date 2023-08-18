import '../styles/global.css'
import Headers from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component }) {
  return (
    <div>
      <Headers />
      <hr></hr>
        <Component />
      <hr></hr>
      <Footer />
    </div>
  );
}

export default MyApp;