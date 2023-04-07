import React, { useState, useEffect } from 'react';
import resim from "../Image/e.jpg"
import khas from "../Image/khas.jpg"
import erasmus from "../Image/erasmus.jpg"



function Carousel() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0); // şu anki resmin index'i

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % images.length); // resimleri sırayla değiştir
      }, 3000); // 3 saniyede bir değiştir
  
      return () => clearInterval(intervalId); // temizleme işlemi
    }, []); // bağımlılık dizisi boş, sadece ilk renderda çalışsın
  
    const images = [resim,khas,erasmus ];

    return (
        <div>
          <img class="pt-2"src={images[currentImageIndex]} alt="resim" style={{width:"90%",height:"450px"}} />
        </div>
      );

 
}

export default Carousel;
