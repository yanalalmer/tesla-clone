import { GlobalStyles } from './styles/globlaStyles';
// pages
import { HomePage } from './pages';
// components
import { Navbar } from './components';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <HomePage />
    </>
  );
}

export default App;
