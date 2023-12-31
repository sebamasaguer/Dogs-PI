import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postDog, getTemperamentsList } from "../../redux/actions/actions";
import styles from "./newDog.module.css";
import validate from "./validate";



export default function DogCreation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const temperament = useSelector((state) => state.temperaments).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );;
  const [errors, setErrors] = useState({}
);

  const [input, setInput] = useState({
    name: "",
    image:"",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span: "",
    origin:"",
    temperament: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  }

  function handleDelete(el) {
    setInput({
      ...input,
      temperament: input.temperament.filter((temp) => temp !== el),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !errors.name &&
      !errors.weight_min &&
      !errors.height_min &&
      !errors.weight_max &&
      !errors.height_max
    ) {
      alert("Your dog has been created successfully");
      dispatch(postDog(input));
      setInput({
        name: "",
        image:"",
        height_min: "",
        weight_min: "",
        height_max: "",
        weight_max: "",
        life_span: "",
        temperament: [],
      });
    } else {
      return alert("Something went wrong. Please try again.");
    }
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getTemperamentsList());
  }, [dispatch]);

  return (
      <div className={styles.mainContainerCreation}>
        <div>
          <h2 className={styles.titleDogui}>Create Dogui</h2>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.Section}>
              <label>Name:</label>
              <input
                type="text"
                value={input.name}
                name="name"
                onChange={(e) => handleChange(e)}
                
              />
              <div>
                <p className={styles.error}>{errors.name}</p>
              </div>
            </div>
            <div className={styles.Section}>
               Heights
              <label>Min</label>
              <input
                type="number"
                value={input.height_min}
                name="height_min"
                placeholder="20"
                onChange={(e) => handleChange(e)}           
              />
              <div>
                <p className={styles.error}>{errors.height_min}</p>
                
              </div>
              <label>Max</label>
              <input
                type="number"
                value={input.height_max}
                name="height_max"
                placeholder="50"
                onChange={(e) => handleChange(e)}
              />
              <div>
                <p className={styles.error}>{errors.height_max}</p>
               <p className={styles.error}>{ errors.especial1}</p>
              </div>
            </div>
            <div className={styles.Section}>
              Weights
              <label>Min</label>
              <input
                type="number"
                value={input.weight_min}
                name="weight_min"
                placeholder="15"
                onChange={(e) => handleChange(e)}
              />
              <div>
                <p className={styles.error}>{errors.weight_min}</p>
              </div>
              <label>Max</label>
              <input
                type="number"
                value={input.weight_max}
                name="weight_max"
                placeholder="32"
                onChange={(e) => handleChange(e)}
              />
              <div>
                <p className={styles.error}>{errors.weight_max}</p>
                <p className={styles.error}>{ errors.especial2}</p>
              </div>
            </div>
            <div className={styles.Section}>
              <label>Life Span</label>
              <input
                type="text"
                value={input.life_span}
                name="life_span"
                placeholder="Years"
                onChange={(e) => handleChange(e)}
              />
              <div>
              <p className={styles.error}>{errors.life_span}</p>
               </div>
            </div>
               <div className={styles.Section}>
              <label>Origin</label>
              <input
                type="text"
                value={input.origin}
                name="origin"
                placeholder="Years"
                onChange={(e) => handleChange(e)}
              />

            </div>
            <div className={styles.Section}>
              <label>Temperaments</label>
              <select onChange={(e) => handleSelect(e)} className={styles.styled_select}>
                {temperament.map((temp) => {
                  return (
                    <option key={temp} name={temp}>
                      {temp}
                    </option>
                  );
                })}
              </select>
              <div className={styles.sidebar_box}>
                <h4>You have selected that:</h4>
                {input.temperament.map((el) => (
                  <div key={el} className={styles.selectedItems}>
                    <p>{el}</p>
                    <button onClick={() => handleDelete(el)}>x</button>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.buttonSection}>
              <Link to="/home">
                <button className={styles.buttonCancel}>Cancel</button>
              </Link>
              <button className={styles.button} type="submit" disabled={
                input.name === "" ||
                input.weight_min === "" ||
                input.weight_max === "" ||
                input.height_min === "" }>
               Create
              </button>
            </div>
          </form>
        </div>
      </div>
    
  );
}