
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
function Iletisim() {
    return (
        <>
            <Header />
            <div class="row ">
                <div class="col-2"></div>
                <div class="col-8">
                    <div class="container p-4">
                        <div>
                            <h2>İletişim Sayfası</h2>
                        </div>
                        <div class="row">
                            <div class="col-3">

                                <div style={{ height: "600px" }}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28642.184592687692!2d28.8869020259041!3d41.01127849433589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9f12ab56e17%3A0x9485bbf687d7cbfd!2sKadir%20Has%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1677442275734!5m2!1str!2str" style={{ width: "600px", height: "450px", border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
                                </div>
                            </div>
                            <div class="col-4"></div>
                            <div class="col-5 mt-4 mb-4">

                                <h3>Telefon</h3>
                                <h5> +90 (212) 533 65 32</h5>
                                <h3>Faks</h3>
                                <h5>+90 (212) 631 91 50</h5>
                                <h3>E-Posta</h3>
                                <h5>danisma@khas.edu.tr</h5>
                                <h5> khas@hs01.kep.tr</h5>
                                <h3>Adres</h3>
                                <h5>Cibali Mah. Kadir Has Cad. 34083 Fatih, İstanbul</h5>


                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
                </div>
            </>
            );
}export default Iletisim;
