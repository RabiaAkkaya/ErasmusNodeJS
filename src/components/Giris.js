import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Image/images.png";
import Header from './Header';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Giris() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post('http://localhost:3001/giris',
                {
                    email,
                    password
                }
            );
            if (response.status === 200) {
                
                if (response.data.message === "1") {
                document.getElementById("btn_div").style.display = "none";                
                document.getElementById("logout_Btn").style.display = "";
                document.getElementById("header_karsilama").innerHTML = "Kullanıcı: " + email;
                    sessionStorage.setItem("id", response.data.id);
                    sessionStorage.setItem("isLogin","1");
                    sessionStorage.setItem("user",email);
                    setSuccess('Giriş Başarili. Yonlendiriliyorsunuz...');
                    setTimeout(() => {
                        navigate('/portal');
                    }, 2000);
                    setEmail('');
                    setPassword('');
                    setError('');
                }
                else  {
                    setSuccess("");
                    setError("Kullanıcı bulunamadı!")
                }
                
            }
        }
        catch (err) {
            setError('Kullanici adi ve sifre kontrolünde hata olustu.');
        }

    }

    return (
        <>

            <Header />
            <form onSubmit={handleSubmit}>
                <div class="row ">
                    <div class="col-3"></div>

                    <div class="col-6 shadow-lg p-3 mb-5 bg-white rounded text-center mt-2 " style={{ height: "600px" }}>
                        <div class=" d-flex justify-content-center mb-4 ">
                            <img src={logo} width="100" height="100" />
                        </div>

                        <h2 style={{ color: "darkslategrey" }}>Giriş Sayfası</h2><br></br>

                        <div class="row mx-auto mb-4">
                            <div class="col-3 "></div>
                            <div class="col-6 ">
                                <input type="text" class="form-control py-2 mb-4" name={email} value={email} placeholder="E-mail address" onChange={(e) => setEmail(e.target.value)} required />

                                <input type="password" class="form-control py-2 mb-4 " name={password} value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />

                                <div class="row mb-4">
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-info" >Giriş</button><br></br>
                                        <p id="sonuc"></p>
                                        <button type="button" class="btn btn-link">Şifre Değiştir</button><br></br>
                                        <a href="kayit"><button type="button" class="btn btn-link">Kayıt Ol</button></a>
                                        {error && <p style={{ color: "red" }}>{error}</p>}
                                        {success && <p style={{ color: "green" }}>{success}</p>}

                                    </div>
                                </div>

                            </div>
                            <div class="col-3 "></div>

                        </div>
                        <div class="col-3"></div>

                    </div>
                </div>
            </form>
        </>

    );
} export default Giris;