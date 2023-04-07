function Menu()
{
    return(
        <li  >
        {sidebar_menu.map((eleman)=>(
           
           <a href={"#"} 
          
           className="btn btn-lg btn-light mx-5 my-2"
           onMouseOver={(e) => Object.assign(e.target, hover_btn)}
           onMouseOut={(e) => Object.assign(e.target, normal_btn)}
           >{eleman}</a>
             

          ))}
      
      </li>
    
        
    );
}export default Menu;