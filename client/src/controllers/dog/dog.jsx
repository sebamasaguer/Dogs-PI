import React from "react";
import { Link } from "react-router-dom";
import styles from "./dog.module.css";
export default function DogCard( { id, name, image, temperament, temperaments, height_min, height_max  } ) {

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
               {height_min} - {height_max} kg 
              <div className={styles.imageArea}>
                <img
                  className={styles.dogImage}
                  src={image}
                  alt={`A dog wich is ` + { temperament }}
                  height="140px"
                />
              </div>
            </div>
          </Link>
        </div>

    );

  }

