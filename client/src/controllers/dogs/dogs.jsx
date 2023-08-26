import Dog from "../dog/dog";
import Pagination from "../pagination/pagination";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions/actions";
import styles from "./dogs.module.css";

export default function DogArea() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (

     <div className={styles.dogsArea}>
      
        {
          currentDogs.map((el) => { 
            return  (
          <Dog
            key={el.id}
            id={el.id}
            name={el.name}
            image={el.image}
            temperament={el.temperament}
            temperaments={el.temperaments}
            height_min={el.height_min}
            height_max={el.height_max}
          />
        )})
        }
 
        <div className={styles.pagination}>
        <Pagination
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          pagination={pagination}
          currentPage={currentPage}
        />
        </div>

      </div>
  );
}