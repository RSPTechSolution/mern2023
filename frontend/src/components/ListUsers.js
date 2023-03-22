import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ListUsers = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    };
    const deleteUser = async (id) => {
        try{
            await axios.delete(`http://localhost:5000/users/${id}`);
            console.log(id);
            getUsers();
        }catch(error){
            console.log(error); 
        }
    };
    // users.map((user, index) => {
        
    //    return console.log(user._id);
    // })
    // console.log(users);
    return (
       <div className="columns mt-5">
            <div className="columns is-half">
                <Link to="add" className="button is-success">
                    Add New
                </Link>
                <table className='table is-striped is-fullwidth mt-2'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <Link to={`edit/${user._id}`} className="button is-info is-small mr-1">
                                        Edit
                                    </Link>
                                    <button onClick={() => deleteUser(user._id)}className="button is-danger is-small">
                                        Delete  
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
       </div>
    );
}

export default ListUsers
