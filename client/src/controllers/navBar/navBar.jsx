import styled from "./navBar.module.css";
import { NavLink } from "react-router-dom";
import Search from "../search/search";
import { useDispatch } from "react-redux";
import { setCurrentPage} from "../../redux/actions/actions";

export default function NavBar() {
  const dispatch = useDispatch();
  
  
  function handleClick(e) {
    dispatch(setCurrentPage(1));
  }


  
  return (
  
      <div className={styled.navbar}>
       <div>
          <NavLink to="/home" onClick={handleClick} activeClassName={styled.active} className={styled.titlehome1} >
         
            <h1>The Doguis</h1> 
          
          </NavLink>
          </div>
        
       
        <div className={styled.search}>
          <Search />
        </div>

        <div  >
            <NavLink to="/newDog/" activeClassName={styled.active} className={styled.titlehome1}>
           <h1> Add My Dogui</h1>
            </NavLink>
          </div>
          
        <div >
          <NavLink activeClassName={styled.active} className={styled.titlehome1} to="/about">
            <h1>About</h1>
            </NavLink>
        </div>

    </div>    
)}
