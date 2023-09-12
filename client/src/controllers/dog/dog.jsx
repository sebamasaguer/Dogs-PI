import React from "react";
import { Link } from "react-router-dom";
import styles from "./dog.module.css";
import ImageNoFount from '../../images/images.png';
export default function DogCard( { id, name, image, temperament, temperaments, weight_min,weight_max } ) {
  if (!temperaments) {
    return (
  
        <div className={styles.dogCard}>
          <Link to={"/dogs/" + id}>
            <div className={styles.titleArea}>
              <h4 className={styles.dogName}>{name}</h4>
            </div>
            <div className={styles.infoArea}>
              <div className={styles.tempArea}>
                {temperament ? (
                  <h5 className={styles.dogTemp}>{temperament}</h5>
                ) : (
                  <br />
                )}
              </div>
            
              {weight_min} - {weight_max} Kg <br /> 
              

              <div className={styles.imageArea}>
                {image ? (
                <img
                  className={styles.dogImage}
                  src={image ? image : "https://i.giphy.com/media/ar8zpFnzWcSbAxjJmd/giphy.webp"}
                  height="140px"
                />):(
                  "https://i.giphy.com/media/ar8zpFnzWcSbAxjJmd/giphy.webp"
                )}
              </div>
            </div>
          </Link>
        </div>

    );
  } else {
    return (

        <div className={styles.dogCard}>
          <Link to={"/dogs/" + id}>
            <div className={styles.titleArea}>
              <h4 className={styles.dogName}>{name}</h4>
            </div>
            <div className={styles.infoArea}>
              <div className={styles.tempArea}>
                {temperaments ? (
                  <h5 className={styles.dogTemp}>
                    {temperaments.map((temp) => `${temp.name} `).join(', ')}
                  </h5>
                ) : (
                  <br />
                )}
              </div> 
              {weight_min} - {weight_max} Kg <br /> 
             
              <div className={styles.imageArea}>
              {image ? (
                <img
                  className={styles.dogImage}
                  src={image ? image : "https://i.giphy.com/media/ar8zpFnzWcSbAxjJmd/giphy.webp"}
                  height="140px"
                />):(
                  "https://i.giphy.com/media/ar8zpFnzWcSbAxjJmd/giphy.webp"
                )}
              </div>
            </div>
          </Link>
        </div>
    );
  }
}
