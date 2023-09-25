import { GlobalStyles } from './styles/globlaStyles';
// pages
import { HomePage } from './pages';
// components
import { Navbar, Footer } from './components';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <HomePage />
      <Footer isNegative />
    </>
  );
}

export default App;
