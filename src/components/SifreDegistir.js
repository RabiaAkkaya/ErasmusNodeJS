import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Image/images.png";

function SifreDegistir() {
    return (



        <div class="row ">
            <div class="col-3"></div>

            <div class="col-6 shadow-lg p-3 mb-5 bg-white rounded text-center mt-2 "style={{height:"600px"}}>
                <div class=" d-flex justify-content-center mb-4 ">
                    <img src={logo} width="100" height="100" />
                </div>

                <h2 style={{ color: "darkslategrey" }}>Şifre Değiştirme Sayfası</h2><br></br>

                <div class="row mx-auto mb-4">
                    <div class="col-3 "></div>
                    <div class="col-6 ">
                        <div id="kul_bilgiler" >
                            <p>Kullanıcı Bilgilerini Giriniz:</p>
                        <input type="text" class="form-control py-2 mb-4" name="email" id="email" placeholder="E-mail address" />

                        <input type="password" class="form-control py-2 mb-4 " id="password" name="password" placeholder="Password" />
                        <button type="button" class="btn btn-info" onClick={()=>goster("Yeni Parola Al")}>Yeni Parola Al</button><br></br>
                        <div class="row mb-4">
                            <div class="col-12">
                                <p style={{color:"red"}} id="sonuc"></p>                               
                       </div>
                        </div>
                        </div>

                        <div id="sifreDegis"style={{display:"none"}}>                            
                        <p>Yeni Sifreyi Giriniz:</p>
                        <input type="password" class="form-control py-2 mb-4 " id="password1" name="password1" placeholder="New Password" />
                        <input type="password" class="form-control py-2 mb-4 " id="password2" name="password2" placeholder="New Password Again" />
                        <button type="button" class="btn btn-info" onClick={()=>goster("Tamamla")}>Tamamla</button>
                        <div class="row mb-4">
                            <div class="col-12">
                                <p style={{color:"red"}} id="sonuc1"></p>                               
                       </div>
                        </div>
                        </div>
                       

                    </div>
                    <div class="col-3 "></div>

                </div>
                <div class="col-3"></div>

            </div>
        </div>



    );
} export default SifreDegistir;