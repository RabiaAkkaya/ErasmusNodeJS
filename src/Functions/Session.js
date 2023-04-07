function Session()
{
if(sessionStorage.getItem("isLogin")=="1")
{
    document.getElementById("btn_div").style.display = "none";
    document.getElementById("ebasvuru").style.display = "";
    document.getElementById("logout_Btn").style.display = "";
    document.getElementById("header_karsilama").innerHTML = "Kullanıcı: " + sessionStorage.getItem("user");
}
}export default Session;