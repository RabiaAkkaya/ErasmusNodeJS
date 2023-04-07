import {BrowserRouter as Router, Route, Routes, Link, Outlet, Navigate} from 'react-router-dom';
import Anasayfa from "./components/Home";
import Giris from "./components/Giris";
import Kayit from './components/Kayit';
import Basvuru from './components/Basvuru';
import Hakkinda from './components/Hakkinda';
import Home from './components/Home';
import Iletisim from './components/Iletisim';
import bg from './Image/redes.jpg';
import Sidebar from './components/SidebarPortal';
import Onizleme from './components/Onizleme';
function App()
{
  return(
    <div className='row'style={{ backgroundImage: `url(${bg})` }}>
<Router>
  <Routes>
    <Route path="/" element={<Anasayfa/>}/> 
    <Route path="/giris" element={<Giris/>}/>
    <Route path="/kayit" element={<Kayit/>}/>
    <Route path="/Başvuru Yap" element={<Basvuru/>}/>
    <Route path="/Başvuru Görüntüle" element={<Onizleme/>}/>    
    <Route path="/Erasmus Hakkında" element={<Hakkinda/>}/>   
    <Route path="/KHAS Anasayfa" element={<Home/>}/>  
    <Route path="/İletişim" element={<Iletisim/>}/>  
    <Route path="/portal" element={<Basvuru/>}/>        

  </Routes>
</Router>
</div>
);
}
export default App;