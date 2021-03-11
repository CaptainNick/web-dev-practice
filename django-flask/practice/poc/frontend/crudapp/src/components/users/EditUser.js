import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';


const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        fullname:"",
        position: "",
        email: "",
        mobile_number: "",
        age: "",
    })

    useEffect(()=>{
        loadUser();
    },[])

    const {fullname, position, email, mobile_number, age}= user;
    const userHandler = (e) =>{
        setUser({...user, [e.target.name]: e.target.value});
    }

    const onSubmit =  async (e) => {
        e.preventDefault()
        if(validateForm(e)){
        await axios.put(`http://6f0dadeeb4a1.ngrok.io/views/employee_list/${id}/`, user)
        .then((response)=> {alert("employee edited successfully")})
        .catch((e) => {alert("unable to edit")})
        // await axios.put(`http://localhost:3003/users/${id}`, user)
        history.push("/")
        }
    }

    const loadUser = async () => {
        await axios.get(`http://6f0dadeeb4a1.ngrok.io/views/employee_list/${id}/`)
        .then((response)=> { console.log(response)
          setUser(response.data)})
        .catch((e) => {alert("unable to fetch the required user details")
        history.push("/")})
        
        // const result = await axios.get(`http://localhost:3003/users/${id}`);
        // setUser(result.data);
        // console.log(result.data);
    };
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
        <h2>Edit A User</h2>
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
          <button className="btn btn-warning btn-block">Save</button>
        </form>
      </div>
    </div>
  );
};
export default EditUser;
