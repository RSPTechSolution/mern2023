import React, { useState, useEffect } from "react"
import axios from "axios";
import {useNavigate, useParams } from "react-router-dom";

const initialInput = {
    name: '',
    email: '',
    gender: '',
}
const EditUser = () => {
    const [userData, setUserData] = useState(initialInput);
    const navigate = useNavigate();
    const {id} = useParams();
    
    useEffect(() => {
        const getUserById = async () => {
          const response = await axios.get(`http://localhost:5000/users/${id}`);
          setUserData(response.data);
        };
      
        getUserById();
      }, [id]);

      const getFormData = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]:value});
      }

      const updateUserData = async (e) => {
        e.preventDefault();
        const {name,email,gender,} = userData;
        try {
          await axios.patch(`http://localhost:5000/users/${id}`, {
            name,
            email,
            gender,
          });
          navigate('/');
        } catch (error) {
          console.log(error);
        }
      };
    
  return (
    <div className="columns mt-5">
        <div className="column is-half">
            <form onSubmit={updateUserData}>
                <div className="field">
                <label className="label">Name</label>
                    <div className="control">
                        <input
                        type="text"
                        className="input"
                        value={userData.name}
                        name="name"
                        onChange={getFormData}
                        placeholder="Name"
                        />
                    </div>
                </div>
                <div className="field">
                <label className="label">Email</label>
                    <div className="control">
                        <input
                        type="text"
                        className="input"
                        value={userData.email}
                        name="email"
                        onChange={getFormData}
                        placeholder="Email"
                        />
                    </div>
                </div>
                <div className="field">
                <label className="label">Gender</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                        <select
                            value={userData.gender}
                            name="gender"
                            onChange={getFormData}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button type="submit" className="button is-success">
                        Update Data
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditUser
