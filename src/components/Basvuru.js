import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import buttonright from "../Image/next-right.png";
import buttonleft from "../Image/next-left.png";
import Sidebar from './SidebarPortal';
import { basvuruDisplay } from '../Functions/basvuru';
import { uyrukArttir } from '../Functions/basvuru';


function Basvuru() {
    const [ad,setAd]=useState("");
    const [soyad,setSoyad]=useState("");
    const [dtarih,setDtarih]=useState("");
    const [email,setEmail]=useState("");
    const [uyruk,setUyruk1]=useState("");
    const [uyruk2,setUyruk2]=useState("");
    const [uyruk3,setAUyruk3]=useState("");
    const [uyrukID,setUyrykID]=useState("");
    const [uyrukID2,setUyrykID2]=useState("");
    const [uyrukID3,setUyrykID3]=useState("");
    const [engel,setEngel]=useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

           
        }
        catch (err) {
          
        }

    }

    return (
        <div class="row">
            <div class="col-4"><Sidebar /></div>
           
            <div class="col-8">

            <form onSubmit={handleSubmit}>
                <div class="col-1"></div>
                <div class="col-10  shadow-lg p-3 mb-2 bg-white rounded m-2 " style={{ height: "950px", width: "950px" }}>

                    <div class="row" id="basvurudiv1">
                        <div class="row mx-auto mb-4">

                            <h2 class="text-center">Erasmus Başvuru Ekranı</h2><br></br>
                            <h5>Kişisel Bilgiler:</h5>

                            <input type="text" class="form-control py-2 mb-2" id={ad} value={ad} placeholder="İsim Giriniz" required/>
                            <input type="text" class="form-control py-2 mb-2" id={soyad} value={soyad} placeholder="Soyad Giriniz" required/>
                            <div class="col-12">
                                <h7 >Doğum Tarihini Giriniz:</h7>
                            </div>
                            <input type="date" class="form-control py-2 mb-4" id={dtarih} value={dtarih} placeholder="Doğum Tarihi Giriniz" required/>
                            <input type="email" class="form-control py-2 mb-4" id={email} value={email} placeholder="Email" required/>

                            <h7 class="form-control mb-2">

                                <input type="text" class="form-control py-2 mb-2" id={uyruk} value={uyruk} placeholder="Uyruk Giriniz" required/>
                                <input type="text" class="form-control py-2 mb-4" id={uyrukID} value={uyrukID} placeholder="ID Number Giriniz" />
                                <input type="text" class="form-control py-2 mb-2" style={{ display: "none" }} id="uyruk2" value={uyruk2} placeholder="Uyruk Giriniz" />
                                <input type="text" class="form-control py-2 mb-4" style={{ display: "none" }} id="uyrukID2" value={uyrukID2} placeholder="ID Number Giriniz" />
                                <input type="text" class="form-control py-2 mb-2" style={{ display: "none" }} id="uyruk3" value={uyruk3} placeholder="Uyruk Giriniz" />
                                <input type="text" class="form-control py-2 mb-4" style={{ display: "none" }} id="uyrukID3" value={uyrukID3} placeholder="ID Number Giriniz" />
                            

                                <div class="row">
                                    <div class="col-4"></div>
                                    <div class="col-4 md-1"> <button type="button" class="btn btn-dark mb-2 " id="uyruk_btn" onClick={()=>{uyrukArttir()}} > Farklı uyruk bilgisi için tıklayınız.</button></div>
                                    <div class="col-4"></div>


                                </div>
                            </h7>
                            <div class="col-12 ">
                                <select class="form-select form-select-sm-1 py-2 mb-1" aria-label=".form-select-sm example" id="engelslct" >
                                    <option selected="">Lütfen Engel Bilgisi Girin</option>
                                    <option value="1">Var</option>
                                    <option value="2">Yok</option>

                                </select>
                                <textarea class="form-control py-2 mb-2" id="EngelAciklama" style={{ display: "none" }} placeholder="Açıklama giriniz"></textarea>

                                <div class="row">

                                    <div class="col-4"></div>
                                    <div class="col-7"><p id="uyari" style={{ color: "red" }}></p></div>


                                </div>
                                <div class="row">
                                    <div class="col-10"></div>

                                    <div class="col-2 " type="submit" style={{ width: "100px", height: "100px", backgroundImage: `url(${buttonright})` }} onClick={() => basvuruDisplay("basvurudiv1","basvuru2")}></div>
                                </div>


                            </div>
                        </div></div>

                    <div id="basvuru2" style={{ display: "none" }}>
                        <div class="row mb-2 ">

                            <div class="col-12 mb-2">
                                <h5 class="mb-4">EĞİTİM BİLGİLERİ:</h5>

                                <input type="text" class="form-control py-2 mb-2 " id="UniversiteAd" placeholder="Universite Adı Giriniz" />
                                <input type="text" class="form-control py-2 mb-2" id="bolum" placeholder="Bölüm Bilgisi Giriniz" />
                                <input type="number" class="form-control py-2 mb-2" id="Ortalama" placeholder="Ortalama Giriniz" />
                            </div>

                            <div class="col-12">
                                <h7>Mezuniyet Tarihini Giriniz:</h7>
                            </div>
                            <div class="col-12">
                                <input type="date" class="form-control py-2 mb-2" id="Mtarih" />

                            </div>
                        </div>

                        <div class="row mb-2 ">
                            <div class="col-12 ">
                                <select class="form-select form-select-sm-1 py-2 mb-1" aria-label=".form-select-sm example" id="sinif1">
                                    <option selected="">Lütfen Sınıf Bilgisi girin</option>
                                    <option value="1.Sınıf" id="1">1.Sınıf</option>
                                    <option value="2.Sınıf" id="2">2.Sınıf</option>
                                    <option value="3.Sınıf" id="3">3.sınıf</option>
                                    <option value="4.Sınıf" id="4">4.sınıf</option>
                                    <option value="Mezun" id="5">Mezun</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-2 ">
                            <div class="col-5 ">
                                <p>CV:</p><hr></hr><p class="p-form-control  ">Niyet Mektubu:</p><hr></hr><p>Pasaport:</p><hr></hr><p>Diploma:</p><hr></hr><p>İngilizce Yeterlilik Sınavı:</p><hr></hr><p>İkametgah:</p><hr></hr>
                                <label style={{ color: "green" }}>Sadece Pdf Dosyaları*</label>
                            </div>
                            <div class="col-7 ">
                                <input type="file" class="form-control py-2 mb-3" id="CV" accept=".pdf, .PDF" />
                                <input type="file" class="form-control py-2 mb-3" id="NiyetMektubu" accept=".pdf, .PDF" />
                                <input type="file" class="form-control py-2 mb-3" id="Pasaport" accept=".pdf, .PDF" />
                                <input type="file" class="form-control py-2 mb-3" id="Diploma" accept=".pdf, .PDF" />
                                <input type="file" class="form-control py-2 mb-3" id="IngilizceY" accept=".pdf, .PDF" />
                                <input type="file" class="form-control py-2 mb-3" id="Ikametgah" accept=".pdf, .PDF" />


                            </div>
                            <div class="row mt-2 ">
                                <div class="col-4"></div>
                                <div class="col-8">
                                    <div class="col-12"><p id="uyari" style={{ color: "red" }}></p></div>
                                </div>

                            </div>

                            <div class="row mt-2 mb-2 ">
                                <div class="col-2"></div>
                                <div class="col-2" style={{ width: "100px", height: "100px", backgroundImage: `url(${buttonleft})` }} onClick={() => basvuruDisplay("basvuru2","basvurudiv1")}></div>
                                <div class="col-4"></div>
                                <div class="col-3" style={{ width: "100px", height: "100px", backgroundImage: `url(${buttonright})` }}onClick={() => basvuruDisplay("basvuru2","basvuru3")}></div>
                            </div>
                        </div>


                    </div>
                    <div id="basvuru3" style={{ display: "none" }}>
                        <div class="container align-items-center mt-5">
                            <h6>ADRES BİLGİLERİ:</h6>

                            <p class="form-control py-2 mb-4">
                                <input type="text" class="form-control py-2 mb-2" id="ulke" placeholder="Ülke Giriniz" />
                                <input type="text" class="form-control py-2 mb-2" id="il" placeholder="il Giriniz" />
                                <input type="text" class="form-control py-2 mb-2" id="ilce" placeholder="ilçe Giriniz" />
                                <input type="text" class="form-control py-2 mb-2" id="mahalle" placeholder="Mahalle Giriniz" />

                            </p>

                            <label class="mb-2">Telefon Numarası:</label>
                            <input type="text" class="form-control py-2 mb-4" id="tel" placeholder="(5XX)-XXX-XX-XX" />


                        </div>
                        <div class="row mt-4 mb-2 ">

                            <div class="col-3"></div>
                            <div class="col-3" style={{ width: "100px", height: "100px", backgroundImage: `url(${buttonleft})` }} onClick={() => basvuruDisplay("basvuru3","basvuru2")}></div>
                            <div class="col-1"></div>
                            <div class="col-4">  <button type="button" class="btn btn-dark mt-4" >Başvuruyu Tamamla</button> </div>


                        </div>

                    </div>



                </div>
                </form>
            </div>
           
        </div>


    );
}
export default Basvuru;