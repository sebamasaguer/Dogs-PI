import { Link } from 'react-router-dom';
import styled from './landing.module.css'
import image from '../../images/dalmata1.gif'
import image2 from '../../images/perro54.gif'

export default function LandingPage(){
    return(
<div className={styled.Intro}>
            <div className={styled.titles}>
               
                <h1 className={styled.Title}>Welcome to Doguis!</h1>
                <spam className={styled.Subtitle}>The best place to find your dog</spam>
                <div className={styled.hovImg}>
                    <img src={image} className={styled.imgHover} />  
                </div>
                    
                <Link to='/home'className={styled.Buton}>Home</Link>
           </div> 
           
           <div className={styled.hovImg2}>    
                    <img src={image2} className={styled.imgHover2} />
                </div> 
                
               
    
</div>
    )
}