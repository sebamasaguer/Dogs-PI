import styled from "./navBar.module.css";
import { NavLink } from "react-router-dom";
import Search from "../search/search";

export default function NavBar() {
  return (
  
      <div className={styled.navbar}>
       <div>
          <NavLink to="/home" className={styled.titlehome1} >
         
            <h1>The Doguis</h1> 
          
          </NavLink>
          </div>
        
       
        <div className={styled.search}>
          <Search />
        </div>

        <div  >
            <NavLink to="/newDog/" className={styled.titlehome1}>
           <h1> Add My Dogui</h1>
            </NavLink>
          </div>
          
        <div >
          <NavLink className={styled.titlehome1} to="/about">
            <h1>About</h1>
            </NavLink>
        </div>

    </div>    
)}
