import styled from "./navBar.module.css";
import { NavLink } from "react-router-dom";
import Search from "../search/search";
import Source from "../source/source";

export default function NavBar() {
  return (
  
      <div className={styled.navbar}>
       <div>
          <NavLink to="/home" className={styled.titlehome1} >
         
            <h1>The Doguis</h1> 
          
          </NavLink>
          </div>
          <div>
            <Source />
          </div>
       
        <div className={styled.search}>
          <Search />
        </div>

        <div  >
            <NavLink to="/newDog/" className={styled.titlehome1}>
            Add My Dogui
            </NavLink>
          </div>
          
        <div >
          <NavLink className={styled.aboutNavButton} to="/about">About</NavLink>
        </div>

    </div>    
)}
