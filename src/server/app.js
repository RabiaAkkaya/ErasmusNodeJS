const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "erasmusbasvurudb2"
});
conn.connect((err) => {
    if(err){
    conn.end;
    const conn2 = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
    
    });
       conn2.connect((err)=>{
        conn2.query('CREATE DATABASE erasmusbasvurudb2', (err, result) => {
            if (err) throw err;
            console.log('Veritabanı oluşturuldu!');

        });
        conn2.end;
       });
 

            const conn3 = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database: "erasmusbasvurudb2",
            });
           
        conn3.connect((err)=>{
            conn3.query('CREATE TABLE `hesap` (`HesapID` int(11) NOT NULL, `Mail` varchar(30) DEFAULT NULL, `password` varchar(50) NOT NULL, `HB_Tarih` varchar(20) DEFAULT NULL, `isLogin` varchar(1) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;', (err, result) => {
                if (err) throw err;
                console.log('Tablolar oluşturuldu!');

              });



        });
    }
    console.log('Veritabanına başarıyla bağlandı!');  
       
    });

   
    
  
app.post("/kayit", (req, res) => {

    var { email, password, HB_Tarih } = req.body;
    const select_insert = "select * from hesap where Mail=?";
    conn.query(select_insert, email, (err, result) => {
        if (err) {
            console.error("Veritabanına bilgi girerken hata yaşandı!");
            res.status(500).send({ error: "Kayıt oluşturulken bir hata oluştu!" });
            return;
        }
        if (result.length > 0) {
            res.status(201).send({ message: "Kullanıcı Zaten Mevcut!" });
            return;
        }
        else {
            const insert_user = "insert into hesap (Mail,password,HB_Tarih) value (?,?,?)";
            conn.query(insert_user, [email, password, HB_Tarih], (err, result) => {
                if (err) {
                    console.error("Veritabanına bilgi girerken hata!");
                    res.status(500).send({ error: "Kayıt oluşturulken bir hata oluştu!" });
                    return;
                }
                res.status(200).send({ message: "Kayıt başarılı" });



            });
        }
    });


});
app.post('/giris', (req, res) => {
    var { email, password } = req.body;
    const giris_sql = "select * from hesap where Mail=? and password=?";
    conn.query(giris_sql, [email, password], (err, result) => {

        if (err)
            res.status(500).send({ error: "veriler işlenemedi" });
        else if (result.length > 0) {
            const user_id = result[0].HesapID;


            var isLoginQuery = "UPDATE hesap SET isLogin=1 WHERE HesapID=?";

            conn.query(isLoginQuery, user_id, (err, result) => {
                if (err) {
                    console.error("Login bilgisi guncellenirken hata olustu. ", err);
                    res.status(500).send({ error: 'Login guncellenemedi.' });

                }
            });

            res.status(200).send({ message: "1", id: user_id });
        }
        else
            res.status(200).send({ message: "0" });

    });

});
app.post('/signout', (req, res) => {

    const { id } = req.body;

    const query = "UPDATE hesap SET isLogin=0 WHERE HesapID=?";

    conn.query(query, [id], (err, result) => {
        if (err) {

            console.error("isLogin guncellemesinde hata olustu. ", err);
            res.status(500).send({ error: 'isLogin guncellemesinde hata olustu.' });
            return;

        }

        res.status(200).send({ message: 'Kullanici cikisi guncellendi.' });
    });
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server ${PORT} üzerinde dinleniyor.`);
});