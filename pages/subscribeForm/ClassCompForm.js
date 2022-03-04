import React, { Component } from "react";
import styles from "../../styles/subscribeForm.module.css";

export default class ClassCompForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      mailId:'',
      phoneNo: "",
      day: "Sunday",
        time: "5pm",
      sudarshanKriya:''
    };
    }
  
  handleName = (e) => {
    console.log(e.target.value);

    this.setState({
      name: e.target.value,
    });
  };
  handleEmail = (e) => {
    console.log(e.target.value);

    this.setState({
      email:e.target.value,
    });
  };
  handlePhoneNo = (e) => {
    console.log(e.target.value);

    this.setState({
      phoneNo: e.target.value,
    });
  };
  handleDay = (e) => {
    console.log(e.target.value);
    this.setState({
      day: e.target.value,
    });
  };
  handleTime = (e) => {
    console.log(e.target.value);

    this.setState({
      time: e.target.value,
    });
  };
  handleSubmitForm = (e) => {
    alert(
      `${this.state.name}   ${this.state.email}  ${this.state.phoneNo}  ${this.state.day}  ${this.state.time} ${this.state.sudarshanKriya}`
    );

    e.preventDefault();
  };

  validateForm = () => {};

  render() {
    const { name, email, phoneNo, day, time ,mailId} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmitForm} className={styles.form}>
          <div className={styles.formTitle}>
            Join 1000 people who took the free introduction in the last week
          </div>
          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleName}
              className={styles.inputBox}
              required
            ></input>
          </div>
          <div className={styles.inputField}>
          <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleEmail}
              required
              className={styles.inputBox}
            ></input>
          </div>
          <div className={styles.inputField}>
            <input
              type="number"
              placeholder="Phone Number"
              name="number"
              value={phoneNo}
              onChange={this.handlePhoneNo}
              className={styles.inputBox}
              required
            />
          </div>
          <div className={styles.inputField}>
            <lable>Select day</lable>
            <select
              name="select day"
              id="select day"
              className={styles.inputBox}
              value={day}
              onChange={this.handleDay}
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
            <select
              name="timesolts"
              id="time"
              className={styles.inputBox}
              value={time}
              onChange={this.handleTime}
            >
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
              <div>
                <input type="radio" id="yes" name="sudarshanKriaya" onChange={(e) => {
                    this.setState({ sudarshanKriya: "yes" })
                    console.log(this.state.sudarshanKriya);
                }} />
                <lable htmlFor="yes">yes</lable>
              </div>
              <div>
                <input type="radio" id="no" name="sudarshanKriaya" onChange={(e) => {
                    this.setState({ sudarshanKriya: "no" })
                    console.log(this.state.sudarshanKriya);

                }} />
                <lable htmlFor="no">no</lable>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={styles.subButton}
            onClick={this.validateForm}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
