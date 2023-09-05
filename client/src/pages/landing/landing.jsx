import { Link } from 'react-router-dom';
import styled from './landing.module.css'

export default function LandingPage(){
    return(

            <div className={styled.Intro}>
                
                <h1 className={styled.Title}>Welcome to Doguis!</h1>
                <Link to='/home'className={styled.Buton}>Home</Link>
            </div>

    )
}