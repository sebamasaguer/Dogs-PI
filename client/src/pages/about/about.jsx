import NavBar from "../../controllers/navBar/navBar";
import styled from "./about.module.css";

export default function About() {
    return (
      
        <div className={styled.titleAbout}>
          <NavBar /> 
          <h4>Seba Masaguer</h4>
          <h6>Full Stack Developer</h6>
        </div>
      
    );
  }