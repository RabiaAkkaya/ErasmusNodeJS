import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sidebar_menu } from './diziler';
import SignOut from '../Functions/SignOut';
import { Link, useNavigate } from 'react-router-dom';


function Sidebar(eleman) {
    const navigate = useNavigate();

    const kullanici=sessionStorage.getItem("user");
    function hover(eleman) {
        document.getElementById(eleman).style.backgroundColor = "gray";
    }
    function out(eleman) {
        document.getElementById(eleman).style.backgroundColor = "white";
    }

    return (
        <div class="row">
        
            <div class="d-flex flex-column flex-shrink-0 p-3  text-white bg-dark " style={{ width: "100%", height: "950px", fontFamily: "fantasy" }}>
                <p class="my-5" style={{ fontSize: "50px", textAlign: "center" }}>Başvuru Sistemi</p>
                <hr></hr>
                <ul class="mb-auto my-5" style={{ fontSize: "30px", listStyle: "none", textAlign: "center" }}>

                    {sidebar_menu.map((eleman) => (
                        <li class="mb-2">
                            <a href={eleman} id={eleman} onMouseOver={() => hover(eleman)} onMouseLeave={() => out(eleman)} style={{ width: "60%" }}

                                className="btn btn-lg btn-light mx-2 my-2"

                            >{eleman}</a>

                        </li>

                    ))}
                    <div class="row">
                        <div class="col-2"></div>
                        <div class="col-8">
                            <button
                                id="logout_Btn"
                                type="button"
                                onClick={() => SignOut(navigate,"")}
                                className="btn btn-danger col-10 btn-lg mt-5">
                                Çıkış
                            </button>
                            <p id="header_karsilama" style={{ color: "white", fontSize: "25px" }}>Kullanıcı: {kullanici}</p>
                        </div>
                        <div class="col-2"></div>

                    </div>

                </ul>

                <hr></hr>

            </div>
          
        </div>
    );
}
export default Sidebar;