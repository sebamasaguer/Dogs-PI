import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { deleteDetails, getDetails } from "../../redux/actions/actions";
import styled from "./detail.module.css";

export default function DogDetail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
    return () => dispatch(deleteDetails());
  }, [dispatch, id]);

  const myDog = useSelector((state) => state.details);

  return (
    <div>
      {myDog ? (
        <div key={myDog.id} className={styled.bodyDetail}>
          <div className={styled.mainCont}>
            <h2 className={styled.mainTitle}>{myDog.name}</h2>
            <img src={myDog.image} alt={myDog.name} className={styled.image} />
            <div className={styled.detailsContainer}>
              {myDog.breed_group ? (
                <div className={styled.breed_group}>
                  <div className={styled.infoSection}>
                    <h3>Breed group:    {myDog.breed_group}. </h3>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className={styled.life_span}>
              
                <div className={styled.infoSection}>
                  <h3>Life span:    {myDog.life_span}.</h3>
                </div>
              </div>
              <div className={styled.weights}>
                <div className={styled.imageSection}>
                </div>
                <div className={styled.infoSection}>
                  <h3>Weight: </h3>
                  Min: {myDog.weight_min}<br />
                  Max: {myDog.weight_max}
                </div>
              </div>
              <div className={styled.heights}>
               
                <div className={styled.infoSection}>
                  <h3>Height: </h3>
                  Min: {myDog.height_min}<br />
                  Max: {myDog.height_max}
                </div>
              </div>
              <br />
              <div className={styled.temperament}>
             
                
                  {
                    <div>
                      <h3>Temperament: </h3>
                      <p>
                        {myDog.createdInDB
                          ? myDog.temperaments.map((el) => el.name).join(", ")
                          : myDog.temperament}
                      </p>
                    </div>
                  }
           
              </div>
            </div>
            <Link to="/home">
              <button className={styled.button}>Back</button>
            </Link>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
 </div>
  );
}

