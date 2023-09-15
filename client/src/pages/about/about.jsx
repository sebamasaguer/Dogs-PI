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
          Me gusta mucho salir a pasear y conocer nuevos amigos.</p><br /> 
          </span>
          <span className={styled.tecno}>
          <p>Este proyecto fue realizado para el curso de Henry Labs con el objetivo de poner en práctica los conocimientos adquiridos en el bootcamp.<br /> 
          La aplicación permite buscar perros por nombre, ver el detalle de cada uno y crear nuevos perros.
          Para la creación de los perros se utilizó una API externa y para la base de datos se utilizó PostgreSQL.</p>
          Para Construir la Single Page Application se utlizaron las tecnologías:
         <p> <li>React</li> <li>Express</li> <li>PostgreSQL</li>
         <li>Redux</li> <li>Sequelize</li> <li>Node</li></p>
            
          
          </span>

        </div>
        
        
      
      </div>
    );
  }