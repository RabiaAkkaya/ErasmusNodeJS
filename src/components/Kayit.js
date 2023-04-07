import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Image/images.png";
import Header from './Header';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Kayit() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [error, setError] = useState('');
    const [success, SetSucces] = useState('');
    var [HB_Tarih, setDate] = useState('');

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // JavaScript ay değerleri 0'dan başlar, bu yüzden +1 eklenir.
    const year = today.getFullYear();
    const navigate=useNavigate();
    

    HB_Tarih = setDate = ` ${day}/${month}/${year}`;
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password ==!passwordAgain) {
            setError("Şifreler Eşleşmiyor!");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/kayit', { email, password, HB_Tarih,});
            if (response.status == 200) {
                SetSucces("Kayıt başarılı.");
                setEmail('');
                setPassword('');
                setPasswordAgain('');
                setError('');
                setTimeout(() => {
                    navigate('/giris');
                }, 2000);
            }
           else if(response.status==201)
           {
            setError("kullanıcı mevcut!");
            SetSucces("");
        }
            else {
                setError("Kayıt oluşturulurken bir hata oluştu!");
                SetSucces("");
            }
        }
        catch (err) {
            setError("Sunucu hatası!");
            SetSucces("");
        }
    }
    return (

        <>
            <Header />
            <form onSubmit={handleSubmit}>
                <div class="row ">
                    <div class="col-3"></div>

                    <div class="col-6 shadow-lg p-3 mb-5 bg-white rounded text-center mt-2" style={{ height: "600px" }}>
                        <div class="col-12 d-flex justify-content-center mb-4">
                            <img src={logo} width="100" height="100" />
                        </div>
                        <h2 style={{ color: "darkslategrey" }}>Kayıt Sayfası</h2><br></br>
                        <div class="row mx-auto mb-4">
                            <div class="col-3"></div>
                            <div class="col-6">
                                <input type="email" class="form-control py-2 mb-4" name={email} value={email} placeholder="E-mail address" onChange={(e) => setEmail(e.target.value)} required />

                                <input type="password" class="form-control py-2 mb-4" name={password} value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                                {/* <label  onChange={(e) => setDate(e.target.value)} id={HB_Tarih} name={HB_Tarih}>{(Date())}</label> */}

                                <input type="password" class="form-control py-2 mb-4" name={passwordAgain} value={passwordAgain} placeholder="Password Again" onChange={(e) => setPasswordAgain(e.target.value)} required />
                                <br></br>
                                <div class="row text-center mb-4">
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-info" >Kayıt Ol</button><br></br>
                                        {error && <p style={{ color: "red" }}>{error}</p>}
                                        {success && <p style={{ color: "green" }}>{success}</p>}
                                        <a href="login.html"><button type="button" class="btn btn-link">Giriş</button></a>

                                    </div>
                                </div>


                            </div>
                            <div class="col-3"></div>

                        </div>

                    </div>


                    <div class="col-3"></div>

                </div>

            </form>
        </>
    );
} export default Kayit;