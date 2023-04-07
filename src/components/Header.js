import 'bootstrap/dist/css/bootstrap.min.css';
import Session from '../Functions/Session';
import logo from "../Image/logo4.png";
import { Anasyf_menu } from '../components/diziler';
import SignOut from '../Functions/SignOut';
import { Link, useNavigate } from 'react-router-dom';


function Header(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="row" style={{ backgroundColor: "#f0f8ff" }} onLoad={() => Session()}>
        <div className="col-1"></div>
        <div className="col-10">

          <header className="d-flex flex-wrap align-items-center  justify-content-md-between py-3  border-bottom">
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" style={{ fontFamily: "fantasy", fontSize: "25px" }}>
              <img src={logo} style={{ width: "150px" }} />
              {Anasyf_menu.map((eleman) => (
                <li><a href={eleman} className="nav-link px-3 link-secondary">{eleman}</a></li>
              ))}
              <li><a href="/portal" id="ebasvuru"className="nav-link px-3 link-secondary" style={{display:"none"}}>Erasmus Başvuru</a></li>
            </ul>

            <div className="col-md-3 text-end " id="btn_div">
              <a href="giris"> <button type="button" className="btn btn-dark me-2" >Giriş</button></a>
              <a href="kayit"><button type="button" className="btn btn-primary">Kayıt Ol</button></a>
            </div>

            <div class="row">
              <div class="col-6 mt-2"><h6 id="header_karsilama"></h6></div>
              <div class="col-1"></div>
              <div class="col-4">

               <button
                  id="logout_Btn"
                  type="button"
                  className="btn btn-danger"
                  style={{ display: 'none' }}
                  onClick={() => SignOut(navigate,"cikis1")}

                >
                  Çıkış
                </button>
              </div>
            </div>

          </header>
        </div>
      </div>
      <div className="col-1"></div>

    </>
  )
}
export default Header;