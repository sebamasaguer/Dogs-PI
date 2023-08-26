import React from "react";
import Dogs from '../../controllers/dogs/dogs';
import SideBar from '../../controllers/sideBar/sideBar';


import styled from './home.module.css'

export default function Home() {
  return (
  <div> 
      <div className={styled.mainContainer}>
      <div className={styled.dogs}>
      <Dogs />
      </div>
    <div className={styled.sideBar}>
        <SideBar />
        </div>
      </div>
  </div>
  );
}
