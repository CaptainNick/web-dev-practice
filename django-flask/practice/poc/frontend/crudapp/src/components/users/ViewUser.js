import React, {useState, useEffect}  from "react";
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const ViewUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://6f0dadeeb4a1.ngrok.io/views/employee_list/${id}/`)
    .then((response)=> { console.log(response)
      setUser(response.data)})
    .catch((e) => {alert("unable to fetch the required user details")
    history.push("/")})
    
    // const result = await axios.get(`http://localhost:3003/users/${id}`);
    // setUser(result.data);
  };

  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">mobile</th>
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td>{id}</td>
              <td>{user.fullname}</td>
              <td>{user.position}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.mobile_number}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewUser;