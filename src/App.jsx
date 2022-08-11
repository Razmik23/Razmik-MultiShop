import './App.scss';
import HeaderComponent from './components/header';
import { ROUTER_NAMES } from './routers';
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/home';
import Footer from './components/footer';
import './components/footer/style.scss'
import ShopPage from './pages/shop';
import './assets/index.scss';
import ContactPage from './pages/contact';

function App() {
  return (<div className='container'>
    <HeaderComponent/>
    <div className='P-pages'>
            <Routes>
              <Route path={ROUTER_NAMES.HOME} element={<HomePage/>}></Route>
              <Route path={ROUTER_NAMES.SHOP} element={<ShopPage/>}></Route>
              <Route path={ROUTER_NAMES.CONTACT} element={<ContactPage/>}></Route>
              <Route path={ROUTER_NAMES.SHOP_DETAIL} element={<></>}></Route>
              
            </Routes>
          </div>
      <Footer/>    

  </div>
    
  );
}

export default App;
