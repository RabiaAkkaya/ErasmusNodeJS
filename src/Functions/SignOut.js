import axios from 'axios';
import React, {useState} from 'react';


async function SignOut(navigate,cikis){

    const id = sessionStorage.getItem("id");


    try{

        const response = await axios.post('http://localhost:3001/signout',
            {id}
        );

        if(response.status === 200){
            if(cikis=="cikis1"){
        document.getElementById("btn_div").style.display = "";
        document.getElementById("ebasvuru").style.display = "none";
        document.getElementById("logout_Btn").style.display = "none";
        document.getElementById("header_karsilama").innerHTML ="";
        sessionStorage.setItem("isLogin",0);  
            }else
            sessionStorage.setItem("isLogin",0);   
            navigate('/KHAS Anasayfa');
        }
        else{
            alert("Şu an cikisinizi yapamiyoruz.");
        }


    }catch(err){
        console.error(err);
    }

}export default SignOut;

