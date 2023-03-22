import React, {useState}    from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialInput = {
    name:"",
    email:"",
    gender:"male"
}

const AddUser = () => {
    const [inputData, setInputData] = useState(initialInput);
    const navigate = useNavigate();

    const getFormData = (e) => {
        const {name, value} = e.target;
        setInputData({...inputData, [name]:value});
    }

    const saveUser = async (e) => {
        e.preventDefault();
        const {name,email,gender} = inputData;
        console.log(name);
        try{
            await axios.post("http://localhost:5000/users",{
                name,
                email,
                gender
            });
            navigate('/');
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div className="columns mt-5">
            <div className="column is-half">
                <form onSubmit={saveUser}>
                    <div className="field">
                    <label className="label">Name</label>
                        <div className="control">
                            <input
                            type="text"
                            className="input"
                            value={inputData.name}
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
                            value={inputData.email}
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
                                value={inputData.gender}
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
                            Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddUser
