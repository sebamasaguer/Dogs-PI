import styled from "./about.module.css";

export default function About() {
    return (
      <div className={styled.about}>
       <div className={styled.titleAbout}>
        About Me</div>
        <div className={styled.container}>
           <img className={styled.image}/>  
           <span className={styled.descAbout}>
          
          <p>Hola mi nombre es Domingo, mi familia me dice "Mingo", 
          soy un Labrador de 2 años.<br />
          Me gusta jugar con mi pelota, correr y comer mucho.< br/>
          Me encanta que me acaricien y que me digan que soy un buen perro.<br/>
          Me gusta mucho salir a pasear y conocer nuevos amigos.</p>
          </span>

        </div>
      
      </div>
    );
  }