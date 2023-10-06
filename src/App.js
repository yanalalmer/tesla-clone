import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/globlaStyles';
// pages
import {
  HomePage,
  Model3Page,
  ModelsPage,
  ModelxPage,
  ModelyPage,
  SolarPanelsPage,
  SolarRoofPage,
  PowerWallPage,
  MegapackPage,
  ChargingPage,
  HomeChargingPage,
  SuperchargerPage,
  ShopPage,
  NoPage,
} from './pages';
// components
import { Navbar, Footer } from './components';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* Vehicles */}
        <Route path='/model3' element={<Model3Page />} />
        <Route path='/models' element={<ModelsPage />} />
        <Route path='/modelx' element={<ModelxPage />} />
        <Route path='/modely' element={<ModelyPage />} />
        {/* Energy */}
        <Route path='/solarpanels' element={<SolarPanelsPage />} />
        <Route path='/solarroof' element={<SolarRoofPage />} />
        <Route path='/powerwall' element={<PowerWallPage />} />
        <Route path='/megapack' element={<MegapackPage />} />
        {/* charging */}
        <Route path='/charging' element={<ChargingPage />} />
        <Route path='/home-charging' element={<HomeChargingPage />} />
        <Route path='/supercharger' element={<SuperchargerPage />} />
        {/* Shop */}
        <Route path='/shop' element={<ShopPage />} />
        {/* 404 */}
        <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer isnegative />
    </>
  );
}

export default App;
