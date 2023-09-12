import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  getTemperamentsList,
  filterDogsByTemperament,
  orderByName,
  getBreeds,
  getDogsByBreed,
  orderByWeight,
  filterCreated,
  setCurrentPage
} from "../../redux/actions/actions";
import styled from "./sideBar.module.css";



export default function SideBar() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );
  const allDogs = useSelector((state) => state.allDogs);
  const breeds = useSelector((state) => state.breeds);
  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperamentsList());
    dispatch(getBreeds());
  }, [dispatch]);
  
  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
    dispatch(setCurrentPage(1));
  }
  function handleClick(e) {
    dispatch(getDogs());
  }
  
  function handleClickOrder(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    dispatch(setCurrentPage(1));
  }
  function handleClickOrderWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    dispatch(setCurrentPage(1));
  }
  function handleFilteredByTemp(e) {
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
    dispatch(setCurrentPage(1));
  }
  function handleFilteredByBreed(e) {
    e.preventDefault();
    dispatch(getDogsByBreed(e.target.value));
    dispatch(setCurrentPage(1));
  }
  return (
 
      <div className={styled.side}>
        <div className={styled.sideBarHeader}>
          <h4 className={styled.header}>Doguis Filter</h4> <br/>
          <div
            className={styled.tooltip}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <span>loop</span>
          </div>
        </div>
        <div className={styled.filterSection}>
          <h5 className={styled.filterHeader}>Order by name</h5>
          <select
            onChange={(e) => {
              handleClickOrder(e);
            }}
          >
            <option defaultValue value="all" hidden>
              Order
            </option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
        </div>
        <div className={styled.filterSection}>
          <h5 className={styled.filterHeader}>Order by weight</h5>
          <select
            onChange={(e) => {
              handleClickOrderWeight(e);
            }}
          >
            <option defaultValue value="all" hidden>
              Order
            </option>
            <option value="asc">Heaviest 1º</option>
            <option value="desc">Lightest 1º</option>
          </select>
        </div>
      
        <div className={styled.filterSection}>
          <h5 className={styled.filterHeader}>Filter by temperament</h5>
          <select onChange={(e) => handleFilteredByTemp(e)}>
            <option value="all">All Temperaments</option>
            {temperaments.map((temp) => {
              return (
                <option value={temp} key={temp}>
                  {temp}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styled.filterSection}>
          <h5 className={styled.filterHeader}>Filter by breed</h5>
          <select onChange={(e) => handleFilteredByBreed(e)}>
            <option value="all">All Breeds</option>
            {breeds.map((breed) => {
              return breed ? (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              ) : (
                ""
              );
            })}
          </select>
        </div>
  <div className={styled.imgDog}></div>
      
  <div className={styled.filterSection}>
        <h5 className={styled.filterHeader}>Filter by source</h5>
        <select
          onChange={(e) => {
            handleFilterCreated(e);
          }}
        >
          <option defaultValue value="all">
            All Sources (Api + BD)
          </option>
          <option value="created">BD</option>
          <option value="inDB">Api </option>
        </select>
      </div>
      </div>

  );
}
