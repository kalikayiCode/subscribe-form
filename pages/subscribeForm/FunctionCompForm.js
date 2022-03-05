import styles from "../../styles/subscribeForm.module.css";
import { useForm } from 'react-hook-form'; 

export default function FunctionCompForm() {
 
  return (
    <form className={styles.form}>
          <div className={styles.formTitle}>
            Join 1000 people who took the free introduction in the last week
          </div>
          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              // value= {true}
              className={styles.inputBox}
            ></input>
          </div>
          <div className={styles.inputField}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              // value=""
              className={styles.inputBox}
            ></input>
          </div>
          <div className={styles.inputField}>
            <input
              type="number"
              placeholder="Phone Number"
              name="number"
              // value=""
              className={styles.inputBox}
            ></input>
          </div>
          <div className={styles.inputField}>
            <lable>Select day</lable>
            <select
              name="select day"
              id="select day"
              className={styles.inputBox}
            >
              <option value="Sunday" className={styles.inputBox}>
                Sunday
              </option>
              <option value="Monday" className={styles.inputBox}>
                Monday
              </option>
              <option value="Tuesday" className={styles.inputBox}>
                Tuesday
              </option>
              <option value="Wendnesday" className={styles.inputBox}>
                Wendnesday
              </option>
              <option value="Thursday" className={styles.inputBox}>
                Thursday
              </option>
              <option value="Friday" className={styles.inputBox}>
                Friday
              </option>
              <option value="Saturday" className={styles.inputBox}>
                Saturday
              </option>
            </select>
          </div>
          <div className={styles.inputField}>
            <lable>Select Time</lable>
            <select name="cars" id="cars" className={styles.inputBox}>
              <option value="5pm" className={styles.inputBox}>
                5pm
              </option>
              <option value="7pm" className={styles.inputBox}>
                7pm
              </option>
              <option value="9pm" className={styles.inputBox}>
                9pm
              </option>
            </select>
          </div>
          <div className={styles.inputField}>
            <lable>Have you learnt Sudarshan Kriya *</lable>
            <div className={styles.radioBtnContainer}>
              <div >
                <input type="radio" id="yes" name="sudarshanKriaya" />
                <lable >yes</lable>
              </div>
              <div>
                <input type="radio" id="yes" name="sudarshanKriaya" />
                <lable >no</lable>
              </div>
            </div>
          </div>
          <button type="submit" className={styles.subButton}>
            Submit
          </button>
        </form>
  );
}
