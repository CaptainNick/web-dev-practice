import React, {useState} from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        fullname:"",
        position: "",
        email: "",
        age: "",
        mobile_number: "",
        
    })

    const {fullname, position, email, mobile_number, age}= user;
    const userHandler = (e) =>{
        setUser({...user, [e.target.name]: e.target.value});
    }

    const onSubmit =  async (e) => {
        // console.log(e.target[0].value)
        e.preventDefault()
        if(validateForm(e)){
          // console.log(user)
        axios.post('http://6f0dadeeb4a1.ngrok.io/views/employee_list/', user)
        .then((response)=> {alert("employee added successfully")})
        .catch((e) => {alert("unable to add")})
        
        // await axios.post('http://localhost:3003/users/', user)
        history.push("/")
        }
    }
    
    const validateForm = (e) => {
      let formIsValid = true;
      let errorstr = "";
      if (e.target[0].value === "" || !e.target[0].value.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errorstr += "please enter valid Name \n"
      }

      if (e.target[1].value === "") {
        formIsValid = false;
        errorstr += "please enter position\n"
      }

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (e.target[2].value === "" || !pattern.test(e.target[2].value)) {
        formIsValid = false;
        errorstr += "please enter valid email\n"
      }
  
      if (e.target[3].value === "" || !e.target[3].value.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errorstr += "please enter valid mobile_number no.\n"
      }

      if(!formIsValid){
        alert(errorstr);
      }

      return formIsValid;
    }
    
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2>Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your name"
              name="fullname"
              value = {fullname}
              onChange={e => userHandler(e)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your position"
              name="position"
              value = {position}
              onChange={e => userHandler(e)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your e-mail address"
              name="email"
              value = {email}
              onChange={e => userHandler(e)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your mobile_number number"
              name="mobile_number"
              value = {mobile_number}
              onChange={e => userHandler(e)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your age name"
              name="age"
              value = {age}
              onChange={e => userHandler(e)}
            ></input>
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};
export default AddUser;
