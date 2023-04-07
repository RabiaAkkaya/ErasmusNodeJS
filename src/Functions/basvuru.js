export function basvuruDisplay(div,div2){
    
    document.getElementById(div).style.display="none";
   
        document.getElementById(div2).style.display="";

    
}
var adet=2;
export function uyrukArttir() {
    document.getElementById("uyruk" + adet).style.display = "";
    document.getElementById("uyrukID" + adet).style.display = "";
    adet++;

}