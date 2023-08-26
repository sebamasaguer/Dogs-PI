import { React } from "react";
import { useDispatch} from "react-redux";
import {
  filterCreated,
} from "../../redux/actions/actions";
import styled from "./source.module.css";



export default function Source() {
    const dispatch = useDispatch();  
    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value));
      }
      return (
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
        );
}