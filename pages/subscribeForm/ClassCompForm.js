import React, { Component } from "react";
import styles from "../../styles/subscribeForm.module.css";

export default class ClassCompForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      emptyName: 0,
      email: "",
      emptyEmail: 0,
      isValidEmail: true,
      phoneNo: null,
      emptyNumber: 0,
      day: 'monday',
      time: '5pm',
      isSudarshanKriya:''
      
      
    };
  }


  handleName = (e) => {
    console.log(e.target.value);

    this.setState({
      name: e.target.value,
      emptyName: 1 
    });
  };
  handleEmail = (e) => {
    console.log(e.target.value);

    this.setState({
      email: e.target.value,
    });
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(e.target.value)) {
      this.setState({ isValidEmail: true });

      console.log("isEmptyEmail in inbjh", this.state.email);
    } else {
      this.setState({ isValidEmail: false });
    }
  };
  handlePhoneNo = (e) => {
    console.log(e.target.value);

    this.setState({
      phoneNo: e.target.value,
      emptyNumber: 1 
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
      `${this.state.name}   ${this.state.email}  ${this.state.phoneNo}  ${this.state.day}  ${this.state.time} ${this.state.isSudarshanKriya}`
    );

    this.setState({ isValidName: false, isValidEmail: false });
    if (this.state.name == "") {
      this.setState({ emptyName: 1 });
    } else {
      this.setState({ emptyName: 0 });
    }
    if (this.state.phoneNo == null) {
      this.setState({ emptyNumber: 1 });
    } else {
      this.setState({ emptyNumber: 0 });
    }
    if (this.state.email == "") {
      this.setState({ emptyEmail: 1 });
    } else {
      this.setState({ emptyEmail: 0 });
    }
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.isValidEmail == true
    ) {
      this.setState({ name: "", email: "",phoneNo:"", isValidEmail: true });
      this.handleSubmit(this.state.email)
      // swal({
      //   title: "Good job!",
      //   text: "You submitted the form!",
      //   icon: "success",
      //   button: "Aww yiss!",
      // });
    }

    e.preventDefault();
  };


  render() {
    const { name, email, phoneNo, day, time, isSudarshanKriya,emptyName, emptyEmail, isValidEmail, emptyNumber  } = this.state;
    return (
      <div>
        <form className={styles.form}>
          <div className={styles.formTitle}>
            Join 1000 people who took the free introduction in the last week
          </div>
          <div className={styles.inputField}>
          {name == "" && emptyName == 1 ? (
              <p className={styles.errorMessage}>Please fill out this field.</p>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleName}
              className={styles.inputBox}
              // required
            ></input>
            
          </div>
          <div className={styles.inputField}>
          {email == "" && emptyEmail ? (
              <p className={styles.errorMessage}>Please fill out this field.</p>
            ) : isValidEmail == false ? (
              <p className={styles.errorMessage}>Please enter valid email.</p>
            ) : (
              ""
            )}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleEmail}
              // required
              className={styles.inputBox}
            ></input>
            
          </div>
          <div className={styles.inputField}>
          {phoneNo == null && emptyNumber == 1 ? (
              <p className={styles.errorMessage}> Please fill out this field.</p>
            ) : (
              ""
            )}
            <input
              type="number"
              placeholder="Phone Number"
              name="number"
              value={phoneNo}
              onChange={this.handlePhoneNo}
              className={styles.inputBox}
              // required
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
                <input
                  type="radio"
                  id="yes"
                  name="sudarshanKriaya"
                  onChange={(e) => {
                    this.setState({ isSudarshanKriya: "yes" });
                    console.log(isSudarshanKriya);
                  }}
                />
                <lable htmlFor="yes">yes</lable>
              </div>
              <div>
                <input
                  type="radio"
                  id="no"
                  name="sudarshanKriaya"
                  onChange={(e) => {
                    this.setState({ isSudarshanKriya: "no" });
                    console.log(isSudarshanKriya);
                  }}
                />
                <lable htmlFor="no">no</lable>
              </div>
            </div>
          </div>
          <button
            // type="submit"
            className={styles.subButton}
            onClick={this.handleSubmitForm}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
