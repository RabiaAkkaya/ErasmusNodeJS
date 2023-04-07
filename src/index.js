import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='row' id="footer" style={{ fontFamily: "fantasy", fontSize: "20px"}}>
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
       <li class="nav-item m-2"><a href="kayit"class="nav-link px-2 text-muted"><font style={{ vertical: "inherit" }}><font style={{ vertical: "inherit" }}>Kayıt</font></font></a></li>
          <li class="nav-item m-2"><a href="giris"class="nav-link px-2 text-muted"><font style={{ vertical: "inherit" }}><font style={{ vertical: "inherit" }}>Giriş</font></font></a></li>
          <li class="nav-item m-2" ><a href="Erasmus Hakkında" class="nav-link px-2 text-muted"><font style={{ vertical: "inherit" }}><font style={{ vertical: "inherit" }}>Erasmus Hakkında  </font></font></a></li>

        </ul>
        <p class="text-center text-muted"><font style={{ vertical: "inherit" }}><font style={{ vertical: "inherit" }}>© 2023 Kadir Has Universitesi</font></font></p>
      </footer>

    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
