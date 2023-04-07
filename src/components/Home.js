import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Georgia from "../Image/Georgia.jpg"
import helsinki from "../Image/helsinki.jpg"
import TrinityCollage from "../Image/TrinityCollage.jpg"
import Carousel from './Carousel';
import Header from './Header';

const Home = () => {

  return (
    <>    
   <Header />
    <div class="row ">  
     <div class="col-2"></div>
        <div class="col-8">  
       
          <div class="text-center" style={{ backgroundColor: "#f8f4ff" }}>
            <Carousel />
            <div className="row  mt-3 mb-5 pb-3 pt-5" >
              <div className="col-4 d-flex justify-content-center">
                <div class="card" style={{ width: "60%" }}>
                  <img src={helsinki} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">Helsinki Metropolia University of Applied Sciences (Finlandiya)</p>
                    <a href="https://aday.khas.edu.tr/yurtdisi-imkanlar" class="btn btn-primary">Daha Fazla Bilgi</a>
                  </div>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center ">
                <div class="card" style={{ width: "60%" }}>
                  <img src={TrinityCollage} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">Trinity College Dublin (İrlanda)</p>
                    <a href="https://aday.khas.edu.tr/yurtdisi-imkanlar" class="btn btn-primary">Daha Fazla Bilgi</a>

                  </div>
                </div>


              </div>
              <div className="col-4 d-flex justify-content-center">
                <div class="card" style={{ width: "60%" }}>
                  <img src={Georgia} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">(Georgia State University)</p>
                    <a href="https://aday.khas.edu.tr/yurtdisi-imkanlar" class="btn btn-primary">Daha Fazla Bilgi</a>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
    </>
  );
};

export default Home;


