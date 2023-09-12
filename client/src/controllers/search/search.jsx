import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName, setCurrentPage } from "../../redux/actions/actions";

import styled from "./search.module.css";

export default function SearchBar() {
    const [dogState, setDogsState] = useState("");
   
    const dispatch = useDispatch();
  
    function handleClick(e) {
      e.preventDefault();
      
      if (dogState.length === 0) {
        return alert("Please input a name to start the search");
      } else {
        dispatch(getDogsByName(dogState));
        setDogsState("");
        dispatch(setCurrentPage(1));

      }
    }
    return (
        <div className={styled.searchBarObject}>
          <input
            type="text"
            placeholder="Search a dog..."
            className={styled.inputSearch}
            value={dogState}
            onChange={(e) => setDogsState(e.target.value)}
          />
          <button type="submit" onClick={handleClick} >
            <span >Search</span>
          </button>
        </div>
      );
    }
      