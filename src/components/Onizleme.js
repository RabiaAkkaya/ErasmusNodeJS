import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Onizleme(props) {
    return (
   

            <li class="list-group-item ">
                <div class="row">
                    <div class="col-6"> <h6>{props.baslik}:</h6></div>
                
                <div class="col-6"><h7>{props.icerik}</h7></div><hr></hr>        
                
                </div>
               
  
            </li>
  
    );
}
export default Onizleme;