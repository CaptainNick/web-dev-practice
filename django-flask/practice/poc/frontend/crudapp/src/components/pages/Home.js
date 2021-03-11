import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom'

const Home = () => {
    const {id} = useParams();
    const [isError, setError] = useState("false");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    await axios.get("http://6f0dadeeb4a1.ngrok.io/views/employee_list/")
    .then((response)=> { console.log(response)
      setUsers(response.data.reverse())})
    .catch((e) => {console.log("error")
    setError("true")});
    
    // const result = await axios.get("http://localhost:3003/users/");
    // console.log(result)
    
  };

  const deleteUser= async (id) => {
      await axios.delete(`http://6f0dadeeb4a1.ngrok.io/views/employee_list/${id}/`)
      .catch((e) => {alert("could not delete user")});
      
      // await axios.delete(`http://localhost:3003/users/${id}`);
      loadUsers();
  }

  return (

    <div>
      {isError ? <h1>Server is down</h1>: <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Position</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
            
          </tr>
        </thead>
        <tbody>
              {
              users.map((user, index) => (
                  <tr>
                      <th scope="row">{index +1}</th>
                      <td>{user.fullname}</td>
                      <td>{user.position}</td>
                      <td>{user.email}</td>
                      <td>
                          <Link class="btn btn-primary mr-2" to={`/users/view/${user.id}`}>View</Link>
                          <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                          <Link class="btn btn-danger mr-2" onClick={() => deleteUser(user.id)}>Delete</Link>
                      </td>
                  </tr>
              ))
              }
        </tbody>
      </table>}
    </div>
  );
};

export default Home;
